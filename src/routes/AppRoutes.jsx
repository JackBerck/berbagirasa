import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";
import Layout from "../layouts";
import Home from "../pages/Home";
import Register from "../pages/Authentication/Register";
import Login from "../pages/Authentication/Login";
import PostDetail from "../components/Post/PostDetail"; // Import the PostDetail component

function AppRoutes() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomeWrapper />} />
          <Route path="/masuk" element={<LoginWrapper />} />
          <Route path="/daftar" element={<RegisterWrapper />} />
          <Route path="/post/:id" element={<PostDetailWrapper />} /> {/* Add this route */}
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

export default AppRoutes;
