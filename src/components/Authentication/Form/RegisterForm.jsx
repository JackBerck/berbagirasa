import { Link } from "react-router-dom";

export default function RegisterForm() {
  return (
    <div className="w-full p-8 lg:w-1/2">
      <h1 className="title-font-size font-bold mb-1 md:text-center">
        BerbagiRasa
      </h1>
      <p className="mb-2 md:text-center">Daftar akun baru</p>
      <form action="" className="flex flex-col gap-4 mb-4">
        <div className="">
          <label htmlFor="username" className="block font-medium mb-2">
            Nama lengkap <span className="text-red-600">*</span>
          </label>
          <input
            className="small-font-size bg-gray-100 focus:outline-none border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
            type="text"
            name="username"
            id="username"
            placeholder="Masukkan nama lengkap..."
            required
          />
        </div>
        <div className="">
          <label htmlFor="email" className="block font-medium mb-2">
            Email <span className="text-red-600">*</span>
          </label>
          <input
            className="small-font-size bg-gray-100 focus:outline-none border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
            type="email"
            name="email"
            id="email"
            placeholder="Masukkan alamat email..."
            required
          />
        </div>
        <div className="">
          <label htmlFor="phoneNumber" className="block font-medium mb-2">
            Nomor handphone <span className="text-red-600">*</span>
          </label>
          <input
            className="small-font-size bg-gray-100 focus:outline-none border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            placeholder="Masukkan nomor handphone..."
            inputMode="numeric"
            pattern="[0-9]*"
            required
          />
        </div>
        <div className="">
          <div className="flex justify-between">
            <label htmlFor="password" className="block font-medium mb-2">
              Password <span className="text-red-600">*</span>
            </label>
          </div>
          <input
            className="small-font-size bg-gray-100 focus:outline-none border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
            type="password"
            name="password"
            id="password"
            placeholder="Masukkan password..."
            required
          />
        </div>
        <div className="">
          <div className="flex justify-between">
            <label htmlFor="verifyPassword" className="block font-medium mb-2">
              Masukkan kembali password <span className="text-red-600">*</span>
            </label>
          </div>
          <input
            className="small-font-size bg-gray-100 focus:outline-none border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
            type="password"
            name="verifyPassword"
            id="verifyPassword"
            placeholder="Verifikasi password..."
            required
          />
        </div>
        <div className="">
          <button
            type="submit"
            className="bg-blue-base text-light-base font-bold py-2 px-4 w-full rounded"
          >
            Daftar
          </button>
        </div>
      </form>
      <p className="small-font-size text-center">
        Sudah punya akun?
        <Link
          to="/masuk"
          className="inline-block py-1 px-2 ml-2 bg-green-base text-light-base rounded-md"
        >
          Masuk sekarang
        </Link>
      </p>
    </div>
  );
}
