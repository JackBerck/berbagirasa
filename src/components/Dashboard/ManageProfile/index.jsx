import { useEffect, useState } from "react";
import axios from "axios";

export default function ManageProfile() {
  const [profile, setProfile] = useState({});

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
        console.error(error);
      }
    };

    fetchProfile();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.patch(
        "http://localhost:8000/api/users/current",
        {
          name: profile.name,
          phone: profile.phone,
          address: profile.address,
          bio: profile.bio,
          photo: profile.photo,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form
      className="flex flex-col gap-4 w-full max-w-lg"
      encType="multipart/form-data"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="id" value={profile.id || ""} />
      <div className="flex gap-4 items-center">
        <img
          src={profile.photo || "/img/users/default.png"}
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
                  photo: URL.createObjectURL(e.target.files[0]),
                })
              }
            />
          </div>
          <a
            href="#"
            className="bg-red-600 py-2 px-4 rounded-md text-light-base font-semibold"
          >
            Hapus Foto Profil
          </a>
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
          onChange={(e) => setProfile({ ...profile, email: e.target.value })}
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
          onChange={(e) => {
            setProfile({ ...profile, bio: e.target.value });
            e.target.style.height = `${e.target.scrollHeight}px`;
          }}
        />
      </div>
      <button
        type="submit"
        className="bg-blue-base text-light-base font-semibold py-2 rounded-md"
      >
        Simpan Perubahan
      </button>
    </form>
  );
}
