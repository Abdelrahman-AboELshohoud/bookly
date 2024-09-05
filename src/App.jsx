import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/header/Header";
import Not_Found from "./pages/Not-Found";
import About from "./pages/About";
import Footer from "./Components/footer/Footer";
import Categories from "./pages/Categories";
import Books from "./pages/Books";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import PrivateRoute from "./PrivateRoute";
import Profile from "./pages/Profile";
import Favourite from "./pages/Favourite";
import CartPage from "./pages/CartPage";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Books />} path="/books" />
        <Route element={<Categories />} path="/categories" />
        <Route element={<Contact />} path="/contact-us" />
        <Route element={<Login />} path="/login" />
        <Route element={<Register />} path="/register" />
        <Route element={<About />} path="/about" />
        <Route element={<Not_Found />} path="/:any" />
        <Route element={<PrivateRoute />}>
          <Route element={<Profile />} path="/profile" />
          <Route element={<CartPage />} path="/cart" />
          <Route element={<Favourite />} path="/favourite" />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
