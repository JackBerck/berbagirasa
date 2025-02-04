import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import Post from "../../components/Post/PostsList";
import AddPostButton from "../../components/Post/AddPost/AddPostButton";
import { getPosts } from "../../api/posts";

export default function Home() {
  const { isLoggedIn } = useAuth();
  const [newPosts, setNewPosts] = useState([]);
  const [foodPosts, setFoodPosts] = useState([]);
  const [clothingPosts, setClothingPosts] = useState([]);
  const [vehiclePosts, setVehiclePosts] = useState([]);
  const [equipmentPosts, setEquipmentPosts] = useState([]);
  const [eventPosts, setEventPosts] = useState([]);
  const [otherPosts, setOtherPosts] = useState([]);

  useEffect(() => {
    const fetchNewPosts = async () => {
      const getAllPost = await getPosts();
      const sortedPosts = getAllPost
        .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
        .slice(0, 10);
      setNewPosts(sortedPosts);

      const foodPosts = getAllPost
        .filter((post) => post.category.id === "1")
        .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
        .slice(0, 10);
      setFoodPosts(foodPosts);

      const clothingPosts = getAllPost
        .filter((post) => post.category.id === "2")
        .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
        .slice(0, 10);
      setClothingPosts(clothingPosts);

      const vehiclePosts = getAllPost
        .filter((post) => post.category.id === "3")
        .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
        .slice(0, 10);
      setVehiclePosts(vehiclePosts);

      const equipmentPosts = getAllPost
        .filter((post) => post.category.id === "4")
        .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
        .slice(0, 10);
      setEquipmentPosts(equipmentPosts);

      const eventPosts = getAllPost
        .filter((post) => post.category.id === "5")
        .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
        .slice(0, 10);
      setEventPosts(eventPosts);

      const otherPosts = getAllPost
        .filter((post) => post.category.id === "6")
        .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
        .slice(0, 10);
      setOtherPosts(otherPosts);
    };

    fetchNewPosts();
  }, []);

  return (
    <main>
      <Post
        key="postingan-terbaru"
        id="postingan-terbaru"
        title="Terbaru"
        posts={newPosts}
        category="0"
        addClass="pt-24"
      />
      <Post
        key="makanan-dan-minuman"
        id="makanan-dan-minuman"
        title="Makanan dan Minuman"
        category="1"
        posts={foodPosts}
      />
      <Post key="pakaian" id="pakaian" title="Pakaian" category="2" posts={clothingPosts} />
      <Post
        key="kendaraan"
        id="kendaraan"
        title="Kendaraan"
        category="3"
        posts={vehiclePosts}
      />
      <Post
        key="peralatan"
        id="peralatan"
        title="Peralatan"
        category="4"
        posts={equipmentPosts}
      />
      <Post
        key="acara-dan-bakti-sosial"
        id="acara-dan-bakti-sosial"
        title="Acara dan bakti sosial"
        category="5"
        posts={eventPosts}
      />
      <Post key="lain-lain" id="lain-lain" title="Lain Lain" category="6" posts={otherPosts} />
      {isLoggedIn && <AddPostButton />}
    </main>
  );
}
