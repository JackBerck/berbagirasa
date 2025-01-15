import { useState } from "react";

export default function ManageProfile() {
  const dumpProfile = {
    name: "Cesar Rincon",
    email: "cesarrincon@example.com",
    phone: "081234567890",
    address: "Jl. Jend. Sudirman No. 1, Jakarta Pusat",
    photo: "/img/users/cesar-rincon.jpg",
    bio: "Saya adalah seorang penggiat lingkungan hidup yang peduli terhadap kelestarian alam.",
  };
  const [profile, setProfile] = useState(dumpProfile);

  return (
    <form
      action=""
      method="update"
      className="flex flex-col gap-4 w-full max-w-lg"
      encType="multipart/form-data"
    >
      <div className="flex gap-4 items-center">
        <img
          src={profile.photo}
          alt="Cesar Rincon Photo Profile"
          className="w-36 aspect-square rounded-full"
        />
        <div className="flex flex-col gap-4">
          <div className="bg-blue-base py-2 px-4 rounded-md font-semibold w-fit">
            <label
              htmlFor="update-profile-picture"
              className="font-semibold cursor-pointer text-light-base"
            >
              Ubah Foto Profil
            </label>
            <input
              type="file"
              id="update-profile-picture"
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
          value={profile.name}
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
          value={profile.email}
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
          value={profile.phone}
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
          value={profile.address}
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
          value={profile.bio}
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
