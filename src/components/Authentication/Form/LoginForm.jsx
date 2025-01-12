import { Link } from "react-router-dom";

export default function LoginForm() {
  return (
    <div className="w-full p-8 lg:w-1/2">
      <h2 className="title-font-size font-bold mb-1 md:text-center">
        BerbagiRasa
      </h2>
      <p className="mb-2 md:text-center">Selamat datang kembali!</p>
      <form action="" className="small-font-size flex flex-col gap-4 mb-4">
        <div className="">
          <label htmlFor="email" className="block font-medium mb-2">
            Email
          </label>
          <input
            id="email"
            className="bg-gray-100 small-font-size focus:outline-none border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
            type="email"
            placeholder="Masukkan alamat email..."
          />
        </div>
        <div className="">
          <div className="flex justify-between items-center mb-2">
            <label htmlFor="password" className="block font-medium">
              Password
            </label>
            <Link to="#" className="text-xs">
              Lupa password?
            </Link>
          </div>
          <input
            id="password"
            className="bg-gray-100 small-font-size focus:outline-none border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
            type="password"
            placeholder="Masukkan password..."
          />
        </div>
        <div className="">
          <button
            type="submit"
            className="bg-blue-base text-light-base font-bold py-2 px-4 w-full rounded"
          >
            Masuk
          </button>
        </div>
      </form>
      <p className="small-font-size text-center">
        Atau belum punya akun?
        <Link
          to="/daftar"
          className="ml-2 inline-block py-1 px-2 bg-green-base text-light-base rounded-md"
        >
          Daftar sekarang
        </Link>
      </p>
    </div>
  );
}
