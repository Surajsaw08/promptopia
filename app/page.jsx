import Feed from "@components/Feed";

const Home = () => (
  <section className="w-full flex-center flex-col">
    <h1 className="head_text text-center">
      Discover & Share
      <br className="max-md:hidden" />
      <span className="orange_gradient text-center">
        {" "}
        Quotes, Poem and thoughts{" "}
      </span>
    </h1>
    <p className="desc text-center">
      Promptopia is a creative sharing platform where users can post poems,
      quotes, and personal thoughts. It encourages self-expression and idea
      exchange in a clean, user-friendly space.
    </p>

    <Feed />
  </section>
);

export default Home;
