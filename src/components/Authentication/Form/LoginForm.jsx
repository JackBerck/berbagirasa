import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../../context/AuthContext";

export default function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/api/login", {
        email: formData.email,
        password: formData.password,
      });
      login(response.data.token);
      setSuccessMessage("Login berhasil!");
      setErrorMessage(null);
      setFormData({
        email: "",
        password: "",
      });
      navigate("/");
    } catch (error) {
      setErrorMessage(error.response?.data?.message || "Terjadi kesalahan.");
    }
  };

  return (
    <div className="w-full p-8 lg:w-1/2">
      <h2 className="title-font-size font-bold mb-1 md:text-center">
        BerbagiRasa
      </h2>
      <p className="mb-2 md:text-center">Selamat datang kembali!</p>
      {errorMessage && (
        <p className="text-red-600 text-center mb-2">{errorMessage}</p>
      )}
      {successMessage && (
        <p className="text-green-600 text-center mb-2">{successMessage}</p>
      )}
      <form onSubmit={handleSubmit} className="small-font-size flex flex-col gap-4 mb-4">
        <div className="">
          <label htmlFor="email" className="block font-medium mb-2">
            Email <span className="text-red-600">*</span>
          </label>
          <input
            id="email"
            className="bg-gray-100 small-font-size focus:outline-none border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
            type="email"
            name="email"
            placeholder="Masukkan alamat email..."
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="">
          <div className="flex justify-between items-center mb-2">
            <label htmlFor="password" className="block font-medium">
              Password <span className="text-red-600">*</span>
            </label>
            <Link to="#" className="text-xs">
              Lupa password?
            </Link>
          </div>
          <input
            id="password"
            className="bg-gray-100 small-font-size focus:outline-none border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
            type="password"
            name="password"
            placeholder="Masukkan password..."
            value={formData.password}
            onChange={handleChange}
            required
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
