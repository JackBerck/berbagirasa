import axios from "axios";

export const getCurrentUser = async () => {
  try {
    const response = await axios.get(
      "http://localhost:8000/api/users/current",
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    return response.data.data;
  } catch (error) {
    console.error("Gagal mengambil data profil:", error);
    return null;
  }
};
