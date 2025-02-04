import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostContent from "./PostContent";
import PostImages from "./PostImages";
import { getPost } from "../../../api/posts";

export default function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      const post = await getPost(id);
      setPost(post);
      setLoading(false);
    };

    if (id) {
      fetchPost();
    }
  }, [id]);

  useEffect(() => {
    if (post.title) {
      document.title = `${post.title} | BerbagiRasa`;
    }
  }, [post.title]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <main
      id="detail-product"
      className="pt-[72px] max-w-screen-xl container flex justify-between flex-col lg:flex-row"
    >
      <section className="w-full lg:w-3/5 h-[216px] md:h-[360px] lg:h-auto">
        <PostImages title={post.title} images={post.images} />
      </section>
      <section className="section-padding-x-sm pt-4 pb-4 lg:w-2/5">
        {post && <PostContent post={post} />}
      </section>
    </main>
  );
}
