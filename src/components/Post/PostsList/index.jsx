import PostHeader from "./PostHeader";
import PostBody from "./PostBody";

export default function Post({ id, title, posts, addClass = "" }) {
  return (
    <section id={id} className={`${addClass} section-padding-x mb-12`}>
      <div className="max-w-screen-xl container">
        <PostHeader title={title} />
        <PostBody posts={posts} />
      </div>
    </section>
  );
}
