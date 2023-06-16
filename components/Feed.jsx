"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import PromptCard from "./PromptCard";

const PromptCardList = ({ data, handleDelete }) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((post) => (
        <PromptCard
          key={post._id}
          post={post}
          handleDelete={() => handleDelete(post)}
        />
      ))}
    </div>
  );
};

const Feed = () => {
  const [allPosts, setAllPosts] = useState([]);
  const { data: session } = useSession();

  const fetchPosts = async () => {
    const response = await fetch("/api/prompt", {
      method: "GET",
      headers: {
        "Cache-Control": "no-store",
      },
    });
    const data = await response.json();
    const userPosts = data.filter(
      (post) => post.creator._id === session.user.id
    );

    setAllPosts(userPosts);
  };

  useEffect(() => {
    if (session?.user) fetchPosts();
  }, [session?.user]);

  const handleDelete = async (post) => {
    const hasConfirmed = confirm("Are you sure you want to delete this Blog?");
    if (hasConfirmed) {
      try {
        await fetch(`/api/prompt/${post._id}`, {
          method: "DELETE",
        });

        const filteredPosts = allPosts.filter((item) => item._id !== post._id);
        setAllPosts(filteredPosts);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <section className="feed">
      {!session ? (
        <p className="text-center text-xl font-sans">Sign in to view Tasks</p>
      ) : (
        <PromptCardList data={allPosts} handleDelete={handleDelete} />
      )}
    </section>
  );
};

export default Feed;
