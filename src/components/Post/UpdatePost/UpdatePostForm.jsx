import { useState, useEffect } from "react";
import axios from "axios";
import { getCurrentUser } from "../../../api/user";
import { getPost } from "../../../api/posts";

export default function AddPostForm({ postId }) {
  const [currentUser, setCurrentUser] = useState({});
  const [post, setPost] = useState({
    title: "",
    location: "",
    category: { id: 0, name: "" },
    description: "",
    images: [],
  });
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const currentUserData = await getCurrentUser();
      setCurrentUser(currentUserData);
    };

    fetchProfile();
  }, []);

  useEffect(() => {
    const fetchPost = async () => {
      const post = await getPost(postId);
      setPost(post);
    };

    if (postId) {
      fetchPost();
    }
  }, [postId]);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    const allowedTypes = [
      "image/jpeg",
      "image/png",
      "image/svg+xml",
      "image/gif",
    ];
    const maxSize = 2 * 1024 * 1024;

    const validFiles = files.filter((file) => {
      if (!allowedTypes.includes(file.type)) {
        setErrorMessage(`Tipe file ${file.name} tidak didukung.`);
        return false;
      }
      if (file.size > maxSize) {
        setErrorMessage(
          `Ukuran file ${file.name} terlalu besar. Maksimal 2MB.`
        );
        return false;
      }
      return true;
    });

    setPost((prevPost) => ({
      ...prevPost,
      images: [...prevPost.images, ...validFiles],
    }));
  };

  const handleRemoveImage = (index) => {
    setPost((prevPost) => ({
      ...prevPost,
      images: prevPost.images.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);

    if (post.images.length === 0) {
      setErrorMessage("Harap unggah setidaknya satu gambar.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("title", post.title);
      formData.append("location", post.location);
      formData.append("category_id", post.category.id);
      formData.append("description", post.description);
      formData.append("user_id", currentUser.id);
      formData.append("_method", "PUT");
     
      post.images.forEach((image, index) => {
        if (image instanceof File) {
          formData.append("images[]", image);
        }
      });

      const response = await axios.post(
        `http://localhost:8000/api/posts/${postId}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setSuccessMessage("Postingan berhasil diperbarui!");
    } catch (error) {
      setErrorMessage("Terjadi kesalahan.");
    }
  };

  return (
    <div>
      {errorMessage && (
        <div className="mb-4 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
          {errorMessage}
        </div>
      )}
      {successMessage && (
        <div className="mb-4 bg-green-100 border-l-4 border-green-500 text-green-700 p-4">
          {successMessage}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="grid gap-4 sm:grid-cols-2 mb-6">
          <div>
            <label htmlFor="title" className="block mb-2 font-medium">
              Judul <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="title"
              id="title"
              className="border border-gray-600 rounded-md block w-full px-3 py-2"
              placeholder="Masukkan judul postingan..."
              required
              value={post.title}
              onChange={(e) => setPost({ ...post, title: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="location" className="block mb-2 font-medium">
              Lokasi <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="location"
              id="location"
              className="border border-gray-600 rounded-md block w-full px-3 py-2"
              placeholder="Masukkan lokasi..."
              required
              value={post.location}
              onChange={(e) => setPost({ ...post, location: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="category" className="block mb-2 font-medium">
              Kategori <span className="text-red-600">*</span>
            </label>
            <select
              id="category"
              name="categoryId"
              className="border border-gray-600 rounded-md block w-full px-3 py-2"
              required
              value={post.category.id}
              onChange={(e) =>
                setPost({
                  ...post,
                  category: {
                    ...post.category,
                    id: parseInt(e.target.value, 10),
                  },
                })
              }
            >
              <option value="0">Pilih Kategori</option>
              <option value="1">Makanan & minuman</option>
              <option value="2">Pakaian</option>
              <option value="3">Kendaraan</option>
              <option value="4">Peralatan</option>
              <option value="5">Acara & bakti sosial</option>
              <option value="6">Lain-lain</option>
            </select>
          </div>
          <div className="items-center justify-center w-full order-last sm:order-none flex sm:row-span-2">
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-full border-2 border-gray-600 border-dashed rounded-md cursor-pointer pt-5 pb-6 h-full"
            >
              <svg
                className="w-8 h-8 mb-4 text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <span className="mb-2 text-gray-500 text-center">
                <span className="font-semibold">Klik untuk menggunggah</span>{" "}
                atau seret dan lepas file di sini{" "}
                <span className="text-red-600">*</span>
              </span>
              <span className="text-xs text-gray-500">
                SVG, PNG, JPG atau GIF (MAKS. 2MB)
              </span>
              <input
                id="dropzone-file"
                type="file"
                name="image[]"
                className="hidden"
                multiple
                onChange={handleFileChange}
              />
            </label>
          </div>

          <div>
            <label htmlFor="description" className="block mb-2 font-medium">
              Deskripsi <span className="text-red-600">*</span>
            </label>
            <textarea
              id="description"
              rows="4"
              name="description"
              placeholder="Masukkan deskripsi..."
              className="block px-3 py-2 w-full rounded-md border border-gray-600"
              value={post.description}
              required
              onChange={(e) =>
                setPost({ ...post, description: e.target.value })
              }
            />
          </div>
        </div>

        <div id="file-preview-container" className="flex flex-wrap gap-2 mb-4">
          {post.images.map((image, index) => (
            <div className="relative" key={index}>
              <button
                type="button"
                className="absolute -top-2 -right-2 bg-red-600 text-light-base p-1 rounded-full flex items-center justify-center shadow-md"
                onClick={() => {
                  handleRemoveImage(index);
                }}
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                >
                  <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                </svg>
              </button>
              {image instanceof File ? (
                <img
                  src={URL.createObjectURL(image)}
                  alt={`Preview-${index}`}
                  className="w-32 md:w-36 lg:w-44 object-cover rounded-md"
                />
              ) : (
                <img
                  src={image}
                  alt={`Preview-${index}`}
                  className="w-32 md:w-36 lg:w-44 object-cover rounded-md"
                />
              )}
            </div>
          ))}
        </div>

        <button
          type="submit"
          className="text-light-base bg-blue-base inline-flex items-center focus:ring-4 focus:outline-none font-medium rounded-md px-5 py-2.5 text-center"
        >
          <svg
            className="mr-1 -ml-1 w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
              clipRule="evenodd"
            />
          </svg>
          Unggah
        </button>
      </form>
    </div>
  );
}
