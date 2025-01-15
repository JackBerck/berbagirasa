import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from "react-router-dom";
import Layout from "../layouts";
import Home from "../pages/Home";
import Register from "../pages/Authentication/Register";
import Login from "../pages/Authentication/Login";
import PostDetail from "../components/Post/PostDetail";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Donation from "../pages/Donation";
import AddPost from "../pages/Post/AddPost";
import DashboardProfile from "../pages/Dashboard";
import DashboardManagePost from "../pages/Dashboard/ManagePost";

function AppRoutes() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomeWrapper />} />
          <Route path="/masuk" element={<LoginWrapper />} />
          <Route path="/daftar" element={<RegisterWrapper />} />
          <Route path="/post/:id" element={<PostDetailWrapper />} />
          <Route path="/tentang-kami" element={<AboutUsWrapper />} />
          <Route path="/kontak" element={<ContactWrapper />} />
          <Route path="/donasi" element={<DonationWrapper />} />
          <Route
            path="/postingan/tambah-postingan"
            element={<AddPostWrapper />}
          />
          <Route path="/dasbor" element={<DashboardProfileWrapper />} />
          <Route
            path="/dasbor/kelola-postingan"
            element={<DashboardManagePostWrapper />}
          />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </Layout>
    </Router>
  );
}

function HomeWrapper() {
  useEffect(() => {
    document.title = "Beranda | BerbagiRasa";
  }, []);
  return <Home />;
}

function LoginWrapper() {
  useEffect(() => {
    document.title = "Masuk | BerbagiRasa";
  }, []);
  return <Login />;
}

function RegisterWrapper() {
  useEffect(() => {
    document.title = "Daftar | BerbagiRasa";
  }, []);
  return <Register />;
}

function PostDetailWrapper() {
  const { id } = useParams();
  return <PostDetail postId={parseInt(id, 10)} />;
}

function AboutUsWrapper() {
  useEffect(() => {
    document.title = "Tentang Kami | BerbagiRasa";
  }, []);
  return <About />;
}

function ContactWrapper() {
  useEffect(() => {
    document.title = "Kontak | BerbagiRasa";
  }, []);
  return <Contact />;
}

function DonationWrapper() {
  useEffect(() => {
    document.title = "Donasi | BerbagiRasa";
  }, []);
  return <Donation />;
}

function AddPostWrapper() {
  useEffect(() => {
    document.title = "Tambah Postingan | BerbagiRasa";
  }, []);
  return <AddPost />;
}

function DashboardProfileWrapper() {
  useEffect(() => {
    document.title = "Profil | BerbagiRasa";
  }, []);
  return <DashboardProfile />;
}

function DashboardManagePostWrapper() {
  useEffect(() => {
    document.title = "Kelola Postingan | BerbagiRasa";
  }, []);
  return <DashboardManagePost />;
}

export default AppRoutes;
