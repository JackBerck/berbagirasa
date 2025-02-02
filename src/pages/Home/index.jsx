import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";
import { posts } from "../../data/posts";
import Post from "../../components/Post/PostsList";
import AddPostButton from "../Post/AddPostButton";

export default function Home() {
  const { isLoggedIn } = useAuth();
  const [newPosts, setNewPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/posts");
        const postsResponse = response.data.data;
        setNewPosts(postsResponse);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <main>
      <Post
        key="postingan-terbaru"
        id="postingan-terbaru"
        title="Terbaru"
        posts={newPosts}
        addClass="pt-24"
      />
      <Post
        key="makanan-minuman"
        id="makanan-minuman"
        title="Makanan & Minuman"
        posts={newPosts}
      />
      <Post key="pakaian" id="pakaian" title="Pakaian" posts={newPosts} />
      <Post key="kendaraan" id="kendaraan" title="Kendaraan" posts={newPosts} />
      <Post key="peralatan" id="peralatan" title="Peralatan" posts={newPosts} />
      {isLoggedIn && <AddPostButton />}
    </main>
  );
}
