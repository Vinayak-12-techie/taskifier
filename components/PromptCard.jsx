import { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
// import { useRouter } from "next/router";

const PromptCard = ({ post, handleEdit, handleTagClick, handleDelete }) => {
  const { data: session } = useSession();

  return (
    <div className="prompt_card">
      <div className="flex justify-between items-start gap-5">
        <div className="flex-1 flex justify-start items-center gap-3 cursor-pointer">
          <Image
            src={post.creator.image}
            alt="user_image"
            width={40}
            height={40}
            className="rounded-full object-contain"
          />

          <div className="flex flex-col">
            <h3 className="font-satoshi font-semibold text-gray-900">
              {post.creator.username}
            </h3>
            <p className="font-inter text-sm text-gray-500">
              {post.creator.email}
            </p>
          </div>
        </div>
      </div>
      <p className="my-4 .head_text text-lg font-bold text-gray-800">
        {post.title}
      </p>
      <p className="my-4 font-satoshi text-sm text-gray-700 ">
        {post.prompt.split("\n").map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </p>
      <p
        className="font-inter text-sm blue_gradient cursor-pointer"
        onClick={() => handleTagClick && handleTagClick(post.tag)}
      >
        {post.tag}
      </p>

      <div className="mt-5 flex-center gap-4 border-t border-gray-100 pt-3">
        <p
          className="font-inter text-sm green_gradient cursor-pointer"
          // onClick={handleEdit}
        >
          Edit
        </p>
        <p
          className="font-inter text-sm orange_gradient cursor-pointer"
          onClick={() => handleDelete && handleDelete(post)}
        >
          Delete
        </p>
      </div>
    </div>
  );
};

export default PromptCard;
