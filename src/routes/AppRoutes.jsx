import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../layouts";
import Home from "../pages/Home";
import Register from "../components/Authentication/Register";
import Login from "../components/Authentication/Login";

function AppRoutes() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/masuk" element={<Login />} />
          <Route path="/daftar" element={<Register />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default AppRoutes;
