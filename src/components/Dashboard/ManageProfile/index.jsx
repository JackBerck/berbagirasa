import { useEffect, useState } from "react";
import axios from "axios";
import { getCurrentUser } from "../../../api/user";

export default function ManageProfile() {
  const [currentUser, setCurrentUser] = useState({});
  const [isChangePassword, setIsChangePassword] = useState(false);
  const [passwords, setPasswords] = useState({
    currentPassword: "",
    newPassword: "",
    newPasswordVerify: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChangePassword = () => {
    setIsChangePassword(!isChangePassword);
  };

  useEffect(() => {
    const fetchCurrentUser = async () => {
      const currentUserData = await getCurrentUser();
      setCurrentUser(currentUserData);
    };

    fetchCurrentUser();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const formData = new FormData();
      formData.append("name", currentUser.name || "");
      formData.append("address", currentUser.address || "");
      formData.append("bio", currentUser.bio || "");
      formData.append("_method", "patch");

      if (currentUser.photo instanceof File) {
        formData.append("photo", currentUser.photo);
      }

      if (!currentUser.name) {
        setErrorMessage("Nama harus diisi.");
        return;
      }

      if (isChangePassword) {
        const passwordRegex = /^(?=.*[A-Z])(?=.*\W).{8,}$/;
        if (!passwordRegex.test(passwords.newPassword)) {
          setErrorMessage(
            "Password harus minimal 8 karakter, mengandung satu huruf kapital, dan satu simbol."
          );
          return;
        }
        if (passwords.newPassword !== passwords.newPasswordVerify) {
          setErrorMessage("Password baru dan verifikasi password tidak cocok.");
          return;
        }
        if (!passwords.currentPassword) {
          setErrorMessage("Password lama harus diisi.");
          return;
        }
        formData.append("password", passwords.newPassword);
      }

      const response = await axios.post(
        "http://localhost:8000/api/users/current",
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      window.location.reload()
      setSuccessMessage("Profil berhasil diperbarui!");
    } catch (error) {
      setErrorMessage(
        error.response?.data?.message ||
          "Gagal memperbarui profil. Silakan coba lagi."
      );
    }
  };

  return (
    <form
      className="flex flex-col gap-4 w-full max-w-lg"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="id" value={currentUser.id || ""} />
      <div className="flex gap-4 items-center">
        <img
          src={
            currentUser.photo instanceof File
              ? URL.createObjectURL(currentUser.photo)
              : currentUser.photo || "/img/users/default.png"
          }
          alt={`${currentUser.name} Photo`}
          className="w-36 aspect-square rounded-full bg-gray-200 object-cover"
        />
        <div className="flex flex-col gap-4">
          <div className="bg-blue-base py-2 px-4 rounded-md font-semibold w-fit">
            <label
              htmlFor="photo"
              className="font-semibold cursor-pointer text-light-base"
            >
              Ubah Foto Profil
            </label>
            <input
              type="file"
              id="photo"
              className="hidden"
              onChange={(e) =>
                setCurrentUser({
                  ...currentUser,
                  photo: e.target.files[0],
                })
              }
            />
          </div>
          <button
            type="button"
            className="bg-red-600 py-2 px-4 rounded-md text-light-base font-semibold"
            onClick={() => setCurrentUser({ ...currentUser, photo: "" })}
          >
            Hapus Foto Profil
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="font-semibold">
          Nama
        </label>
        <input
          type="text"
          id="name"
          className="border border-gray-600 rounded-md px-3 py-2"
          placeholder="Masukkan nama..."
          value={currentUser.name || ""}
          required
          onChange={(e) => setCurrentUser({ ...currentUser, name: e.target.value })}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="font-semibold">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="border border-gray-600 rounded-md px-3 py-2"
          placeholder="Masukkan email..."
          readOnly
          value={currentUser.email || ""}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="phone" className="font-semibold">
          Nomor telepon
        </label>
        <input
          type="tel"
          id="phone"
          className="border border-gray-600 rounded-md px-3 py-2"
          placeholder="Masukkan nomor telepon..."
          value={currentUser.phone || ""}
          readOnly
          onChange={(e) => setCurrentUser({ ...currentUser, phone: e.target.value })}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="address" className="font-semibold">
          Alamat
        </label>
        <textarea
          id="address"
          className="border border-gray-600 rounded-md px-3 py-2"
          placeholder="Masukkan alamat..."
          value={currentUser.address || ""}
          onChange={(e) => setCurrentUser({ ...currentUser, address: e.target.value })}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="bio" className="font-semibold">
          Bio
        </label>
        <textarea
          id="bio"
          className="border border-gray-600 h-auto rounded-md px-3 py-2"
          placeholder="Masukkan bio..."
          value={currentUser.bio || ""}
          onChange={(e) => setCurrentUser({ ...currentUser, bio: e.target.value })}
        />
      </div>
      <button
        type="button"
        className="bg-red-600 text-light-base font-semibold py-2 rounded-md"
        onClick={handleChangePassword}
      >
        Ganti Password
      </button>
      {isChangePassword && (
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="currentPassword" className="font-semibold">
              Password Lama <span className="text-red-600">*</span>
            </label>
            <input
              type="password"
              id="currentPassword"
              className="border border-gray-600 rounded-md px-3 py-2"
              placeholder="Masukkan password lama..."
              value={passwords.currentPassword}
              onChange={(e) =>
                setPasswords({ ...passwords, currentPassword: e.target.value })
              }
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="newPassword" className="font-semibold">
              Password Baru <span className="text-red-600">*</span>
            </label>
            <input
              type="password"
              id="newPassword"
              className="border border-gray-600 rounded-md px-3 py-2"
              placeholder="Masukkan password baru..."
              value={passwords.newPassword}
              onChange={(e) =>
                setPasswords({ ...passwords, newPassword: e.target.value })
              }
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="newPasswordVerify" className="font-semibold">
              Verifikasi Password Baru <span className="text-red-600">*</span>
            </label>
            <input
              type="password"
              id="newPasswordVerify"
              className="border border-gray-600 rounded-md px-3 py-2"
              placeholder="Verifikasi password baru..."
              value={passwords.newPasswordVerify}
              onChange={(e) =>
                setPasswords({
                  ...passwords,
                  newPasswordVerify: e.target.value,
                })
              }
              required
            />
          </div>
        </div>
      )}
      <button
        type="submit"
        className="bg-blue-base text-light-base font-semibold py-2 rounded-md"
      >
        Simpan Perubahan
      </button>
      {errorMessage && <p className="text-red-600">{errorMessage}</p>}
      {successMessage && <p className="text-green-600">{successMessage}</p>}
    </form>
  );
}
