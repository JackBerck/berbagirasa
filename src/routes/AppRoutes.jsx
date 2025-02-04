import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from "react-router-dom";
import { useAuth } from "../context/AuthContext";
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
import ErrorPage from "../pages/404";
import UpdatePost from "../pages/Post/UpdatePost";
import PostList from "../components/Post/PostList";

function AppRoutes() {
  const { isLoggedIn } = useAuth();

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomeWrapper />} />
          <Route path="/masuk" element={<LoginWrapper />} />
          <Route path="/daftar" element={<RegisterWrapper />} />
          <Route path="/tentang-kami" element={<AboutUsWrapper />} />
          <Route path="/kontak" element={<ContactWrapper />} />
          <Route path="/donasi" element={<DonationWrapper />} />
          <Route path="/postingan">
            <Route index element={<HomeWrapper />} />
            <Route path=":id" element={<PostDetail />} />
            <Route path="kategori/:category" element={<PostList/>}/>
            {isLoggedIn && (
              <Route path="tambah-postingan" element={<AddPostWrapper />} />
            )}
            {!isLoggedIn && (
              <Route path="tambah-postingan" element={<LoginWrapper />} />
            )}
          </Route>
          {isLoggedIn && (
            <Route path="/profil">
              <Route index="/" element={<DashboardProfileWrapper />} />
              <Route
                path="kelola-postingan"
                element={<DashboardManagePostWrapper />}
              />
              <Route
                path="kelola-postingan/:id"
                element={<UpdatePostWrapper />}
              />
            </Route>
          )}
          {!isLoggedIn && <Route path="/profil/*" element={<LoginWrapper />} />}
          <Route path="*" element={<ErrorPageWrapper />} />
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

function UpdatePostWrapper() {
  useEffect(() => {
    document.title = "Perbarui Postingan | BerbagiRasa";
  }, []);
  return <UpdatePost />;
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

function ErrorPageWrapper() {
  useEffect(() => {
    document.title = "404 | BerbagiRasa";
  }, []);
  return <ErrorPage />;
}

export default AppRoutes;
