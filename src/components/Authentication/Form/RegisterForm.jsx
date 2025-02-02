import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    verifyPassword: "",
  });

  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.verifyPassword) {
      setErrorMessage("Password dan verifikasi password tidak cocok.");
      return;
    }
    try {
      const response = await axios.post(
        "http://localhost:8000/api/register",
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          password: formData.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setSuccessMessage("Registrasi berhasil! Silakan login.");
      setErrorMessage(null);
      setFormData({
        name: "",
        email: "",
        phone: "",
        password: "",
        verifyPassword: "",
      });
      // redirect("/masuk");
    } catch (error) {
      setErrorMessage(error.response?.data?.message || "Terjadi kesalahan.");
    }
  };

  return (
    <div className="w-full p-8 lg:w-1/2">
      <h1 className="title-font-size font-bold mb-1 md:text-center">
        BerbagiRasa
      </h1>
      <p className="mb-2 md:text-center">Daftar akun baru</p>
      {errorMessage && (
        <p className="text-red-600 text-center mb-2">{errorMessage}</p>
      )}
      {successMessage && (
        <p className="text-green-600 text-center mb-2">{successMessage}</p>
      )}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 mb-4">
        {/* Form fields */}
        <div>
          <label htmlFor="name" className="block font-medium mb-2">
            Nama lengkap <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Masukkan nama lengkap..."
            value={formData.name}
            onChange={handleChange}
            required
            className="small-font-size bg-gray-100 focus:outline-none border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
          />
        </div>
        {/* Email */}
        <div>
          <label htmlFor="email" className="block font-medium mb-2">
            Email <span className="text-red-600">*</span>
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Masukkan alamat email..."
            value={formData.email}
            onChange={handleChange}
            required
            className="small-font-size bg-gray-100 focus:outline-none border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
          />
        </div>
        {/* Nomor Telepon */}
        <div>
          <label htmlFor="phone" className="block font-medium mb-2">
            Nomor handphone <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            name="phone"
            id="phone"
            placeholder="Masukkan nomor handphone..."
            value={formData.phone}
            onChange={handleChange}
            required
            className="small-font-size bg-gray-100 focus:outline-none border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
          />
        </div>
        {/* Password */}
        <div>
          <label htmlFor="password" className="block font-medium mb-2">
            Password <span className="text-red-600">*</span>
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Masukkan password..."
            value={formData.password}
            onChange={handleChange}
            required
            className="small-font-size bg-gray-100 focus:outline-none border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
          />
        </div>
        {/* Verify Password */}
        <div>
          <label htmlFor="verifyPassword" className="block font-medium mb-2">
            Masukkan kembali password <span className="text-red-600">*</span>
          </label>
          <input
            type="password"
            name="verifyPassword"
            id="verifyPassword"
            placeholder="Verifikasi password..."
            value={formData.verifyPassword}
            onChange={handleChange}
            required
            className="small-font-size bg-gray-100 focus:outline-none border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
          />
        </div>
        <div>
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
