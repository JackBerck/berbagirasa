import PostHeader from "./PostHeader";
import PostBody from "./PostBody";

export default function Post({id, title, posts, category, addClass = "" }) {  
  return (
    <section id={id} className={`${addClass} section-padding-x mb-12`}>
      <div className="max-w-screen-xl container">
        <PostHeader title={title} category={category}/>
        {posts && posts.length === 0 && (
          <p className="text-center text-gray-500">Tidak ada postingan.</p>
        )}
        <PostBody posts={posts} />
      </div>
    </section>
  );
}
