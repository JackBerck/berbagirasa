import { useState, useEffect } from "react";
import Aside from "../../components/Dashboard/Aside";
import ManagePost from "../../components/Dashboard/ManagePost";
import DeleteAlert from "../../components/Dashboard/ManagePost/DeleteAlert";
import { getCurrentUser } from "../../api/user";
import axios from "axios";

export default function DashboardManagePost() {
  const [showConfirm, setShowConfirm] = useState(false);
  const [postIdToDelete, setPostIdToDelete] = useState(null);
  const [isDeleted, setIsDeleted] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchProfile = async () => {
      const currentUserData = await getCurrentUser();
      setCurrentUser(currentUserData);
    };

    fetchProfile();
  }, []);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/posts", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setPosts(Array.isArray(response.data) ? response.data : []);
      } catch (error) {
        console.error("Gagal mengambil data postingan:", error);
      }
    };

    fetchPosts();
  }, [isDeleted]);

  const handleDeleteClick = (postId) => {
    setPostIdToDelete(postId);
    setShowConfirm(true);
  };

  const handleConfirmDelete = async () => {
    try {
      await axios.delete(`http://localhost:8000/api/posts/${postIdToDelete}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      setShowConfirm(false);
      setIsDeleted(true);
      setPostIdToDelete(null);
      window.location.reload();
    } catch (error) {
      console.error("Gagal menghapus postingan:", error);
    }
  };

  /*useEffect(() => {
    if (isDeleted) {
      setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postIdToDelete));
      setIsDeleted(false);
    }
  }, [isDeleted]);
  */

  const handleCancelDelete = () => {
    setShowConfirm(false);
    setPostIdToDelete(null);
  };

  return (
    <main>
      <section
        id="dashboard-manage-post"
        className="section-padding-x pt-24 pb-16 text-dark-base"
      >
        <div className="container max-w-screen-xl">
          <div className="flex flex-col md:flex-row gap-8">
            <Aside />
            <ManagePost posts={posts} onDeleteClick={handleDeleteClick} />
          </div>
        </div>
      </section>
      {showConfirm && (
        <DeleteAlert
          onConfirm={handleConfirmDelete}
          onCancel={handleCancelDelete}
        />
      )}
    </main>
  );
}