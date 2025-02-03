import { Link } from "react-router-dom";

export default function AddPostButton() {
  return (
    <Link
      to="/postingan/tambah-postingan"
      className="bg-light-base text-blue-base p-4 rounded-full fixed bottom-8 right-8 z-[999] border-4 border-blue-base"
    >
      <svg className="w-6 h-6 md:w-8 md:h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z" />
      </svg>
    </Link>
  );
}
