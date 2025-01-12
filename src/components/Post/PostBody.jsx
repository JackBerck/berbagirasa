import PostCard from "../Card/PostCard";

export default function PostBody({ posts }) {
  return (
    <div className="grid grid-cols-2 gap-4 mt-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
