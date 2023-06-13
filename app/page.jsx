import Feed from "@components/Feed";

const Home = () => (
  <section className="w-full flex-center flex-col">
    <h1 className="head_text text-center">
      Discover & Share
      <br className="max-md:hidden" />
      <span className="orange_gradient text-center"> Daily Blogs</span>
    </h1>
    <p className="desc text-center">
      Writely is an open-source Daily Blogging tool for modern world to
      discover, create and share daily blogs.
    </p>

    <Feed />
  </section>
);

export default Home;
