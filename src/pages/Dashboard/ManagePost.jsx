import { useState } from "react";
import Aside from "../../components/Dashboard/Aside";
import ManagePost from "../../components/Dashboard/ManagePost";
import DeleteAlert from "../../components/Dashboard/ManagePost/DeleteAlert";

export default function DashboardManagePost() {
  const [showConfirm, setShowConfirm] = useState(false);
  const [postIdToDelete, setPostIdToDelete] = useState(null);

  const handleDeleteClick = (postId) => {
    setPostIdToDelete(postId);
    setShowConfirm(true);
  };

  const handleConfirmDelete = () => {
    // Add delete logic here, using postIdToDelete
    console.log(`Deleting post with ID: ${postIdToDelete}`);
    setShowConfirm(false);
    setPostIdToDelete(null);
  };

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
            <ManagePost onDeleteClick={handleDeleteClick} />
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
