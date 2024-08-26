import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Header from "./Components/header/Header.jsx";
import Footer from "./Components/footer/Footer.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Books from "./pages/Books.jsx";
import Categories from "./pages/Categories.jsx";
import Contact from "./pages/Contact.jsx";
import About from "./pages/About.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route element={<App />} path="/" />
        <Route element={<Books />} path="/books" />
        <Route element={<Categories />} path="/categories" />
        <Route element={<Contact />} path="/contact-us" />
        <Route element={<About />} path="/about" />
        <Route element={<Login />} path="/login" />
        <Route element={<Register />} path="/register" />
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>
);
