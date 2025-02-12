import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loading from "../Loading";
import PostCard from "../Card/PostCard";

export default function PostList() {
  let { category } = useParams();
  const [posts, setPosts] = useState([]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [categoryName, setCategoryName] = useState("");

  if (category == 0) {
    category = "";
  } else {
    category = `?category=${category}`;
  }

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/posts${category}`
        );
        setPosts(response.data.data);
        if (response.data.data.length === 0) {
          setMessage("Tidak ada postingan.");
        } else {
          setMessage("");
        }

        if (response.data.data.length > 0) {
          setCategoryName(response.data.data[0].category.name);
        }
      } catch (error) {
        console.error(error);
        setMessage("Terjadi kesalahan saat mengambil data.");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [category]);

  const formatCategory = (category) => {
    const formatted = category.replace(/-/g, " ");
    return formatted.charAt(0).toUpperCase() + formatted.slice(1);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <section id="post-list" className="section-padding-x pt-24 pb-16">
      <div className="max-w-screen-xl container">
        <h2 className="text-2xl font-semibold text-gray-800">
          {category === ""
            ? "Semua Postingan"
            : `Kategori ${formatCategory(categoryName)}`}
        </h2>
        {message && <p className="text-center text-gray-500">{message}</p>}
        <div className="grid grid-cols-2 gap-4 mt-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {posts.length > 0 &&
            posts.map((post) => <PostCard key={post.id} post={post} />)}
        </div>
      </div>
    </section>
  );
}
