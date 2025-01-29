import { Link } from "react-router-dom";
import ManagePostList from "./ManagePostList";

export default function ManagePost({ onDeleteClick }) {
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex justify-between items-center">
        <h1 className="title-font-size font-semibold">Kelola Postingan</h1>
        <Link
          to="/postingan/tambah-postingan"
          className="bg-blue-base extra-small-font-size py-1 px-2 md:py-2 md:px-4 rounded-md text-light-base font-semibold text-center"
        >
          Tambah Postingan
        </Link>
      </div>
      <ManagePostList onDeleteClick={onDeleteClick} />
    </div>
  );
}
