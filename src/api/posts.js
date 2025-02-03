import axios from "axios";

export const getPosts = async (id) => {
  try {
    const response = await axios.get("http://localhost:8000/api/posts");
    return response.data.data;
  } catch (error) {
    console.error("Gagal mengambil data postingan:", error);
    return null;
  }
};

export const getPost = async (id) => {
  try {
    const response = await axios.get(`http://localhost:8000/api/posts/${id}`);
    return response.data.data;
  } catch (error) {
    console.error("Gagal mengambil data postingan:", error);
    return null;
  }
};
