import { useEffect, useState } from "react";
import axios from "axios";

export default function ManageProfile() {
  const [profile, setProfile] = useState({
    id: "",
    name: "",
    address: "",
    bio: "",
    email: "",
    phone: "",
  });
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
    const fetchProfile = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/users/current",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        const profileResponse = response.data.data;
        setProfile(profileResponse);
      } catch (error) {
        console.error("Gagal mengambil data profil:", error);
        setErrorMessage("Gagal mengambil data profil. Silakan coba lagi.");
      }
    };

    fetchProfile();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const formData = new FormData();
      formData.append("name", profile.name || "");
      formData.append("address", profile.address || "");
      formData.append("bio", profile.bio || "");
      formData.append("_method", "patch");

      if (profile.photo instanceof File) {
        formData.append("photo", profile.photo);
      }

      if (!profile.name) {
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
      <input type="hidden" name="id" value={profile.id || ""} />
      <div className="flex gap-4 items-center">
        <img
          src={
            profile.photo instanceof File
              ? URL.createObjectURL(profile.photo)
              : profile.photo || "/img/users/default.png"
          }
          alt={`${profile.name} Photo`}
          className="w-36 aspect-square rounded-full bg-gray-200"
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
                setProfile({
                  ...profile,
                  photo: e.target.files[0],
                })
              }
            />
          </div>
          <button
            type="button"
            className="bg-red-600 py-2 px-4 rounded-md text-light-base font-semibold"
            onClick={() => setProfile({ ...profile, photo: "" })}
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
          value={profile.name || ""}
          required
          onChange={(e) => setProfile({ ...profile, name: e.target.value })}
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
          value={profile.email || ""}
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
          value={profile.phone || ""}
          readOnly
          onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
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
          value={profile.address || ""}
          onChange={(e) => setProfile({ ...profile, address: e.target.value })}
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
          value={profile.bio || ""}
          onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
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
