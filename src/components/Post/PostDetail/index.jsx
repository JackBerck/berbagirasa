import { useEffect } from "react";
import { getPostById } from "../../../utils/post";
import PostContent from "./PostContent";
import PostImages from "./PostImages";

export default function PostDetail({ postId }) {
  const post = getPostById(postId);

  useEffect(() => {
    document.title = `${post.title} | BerbagiRasa`;
  }, [post.title]);

  return (
    <main
      id="detail-product"
      className="pt-[72px] max-w-screen-xl container flex justify-between flex-col lg:flex-row"
    >
      <section className="w-full lg:w-3/5 h-[216px] md:h-[360px] lg:h-auto">
        <PostImages title={post.title} images={post.images} />
      </section>
      <section className="section-padding-x-sm pt-4 pb-4 lg:w-2/5">
        <PostContent post={post} />
      </section>
    </main>
  );
}
