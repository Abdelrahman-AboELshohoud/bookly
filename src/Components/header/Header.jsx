import { Link, useLocation } from "react-router-dom";
import { FaBars, FaShoppingCart } from "react-icons/fa";
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cart from "./Cart";
import { CgProfile } from "react-icons/cg";
export default function Header() {
  const links = [
    { title: "Home", link: "/" },
    { title: "Books", link: "/books" },
    { title: "Categories", link: "/categories" },
    { title: "Contact", link: "/contact-us" },
    { title: "About", link: "/about" },
  ];
  const profileLinks = [
    { title: "Profile Details", link: "/profile" },
    { title: "My Favourite", link: "/favourite" },
    { title: "My Cart", link: "/cart" },
  ];
  const [loggedIn, setLoggedIn] = useState(
    JSON.parse(localStorage.getItem("loggedIn"))
  );
  const [showList, setShowList] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const loc = useLocation();
  const navigate = useNavigate();
  const handleLogout = () => {
    fetch("http://localhost:8000/api/auth/signout")
      .then((data) => {
        data.json();
        console.log(data);
        localStorage.setItem("loggedIn", false);
        setShowList(false);
        setLoggedIn(false);
        navigate("/");
      })
      .catch((error) => console.error("Error:", error));
  };
  console.log(loggedIn);
  useMemo(() => {
    setLoggedIn(JSON.parse(localStorage.getItem("loggedIn")));
    console.log("hie", localStorage.getItem("loggedIn"), loggedIn);
  }, [localStorage.getItem("loggedIn")]);
  return (
    <header className=" flex items-center justify-between h-16 px-16 max-[488px]:px-0 max-[488px]:justify-evenly max-[488px]:gap-12 bg-white shadow-md">
      <Link className="logo" to="/">
        <img src="/logo.png" width={104} height={104} />
      </Link>
      <div className="flex gap-12 items-center">
        <nav className="links md:flex hidden gap-x-4">
          {links.map((href, i) => (
            <Link
              key={i}
              to={href.link}
              className={`md:text-sm lg:text-[16px] text-links_color hover:underline transition ${
                loc.pathname === href.link ? "font-semibold" : "font-normal"
              }`}
            >
              {href.title}
            </Link>
          ))}
        </nav>
        <div className="flex justify-center items-center gap-5 max-[488px]:gap-2">
          <div className="relative border-none h-12 w-12">
            <button
              className="caaart flex select-none justify-center items-center w-full h-full hover:bg-secondry transition rounded-full"
              onClick={() => {
                setShowList(false);
                setShowCart((prev) => !prev);
              }}
            >
              <FaShoppingCart
                color="#7648A2"
                size={24}
                className="transition-none"
              />
            </button>
            <Cart showCart={showCart} />
          </div>
          {!loggedIn ? (
            <Link
              to="/login"
              className="hidden md:flex items-center justify-center h-10 w-20 rounded-md bg-primary text-whitew"
            >
              Login
            </Link>
          ) : (
            <div className=" flex-col relative hidden sm:flex">
              <div className="flex items-center justify-between">
                <button
                  className="flex justify-center items-center reative h-12 w-12 transition hover:bg-gray-300 rounded-full"
                  onClick={() => {
                    setShowList((prev) => !prev);
                    setShowCart(false);
                  }}
                >
                  <img src="/profile.png" />
                </button>
                <div className="text-xs text-purple-500 font-semibold select-none ">
                  Welcome, Folasafddn!
                </div>
              </div>
              <div
                className={`${
                  showList ? "visible" : "hidden"
                } absolute -left-8 top-12 w-28 flex items-center flex-col gap-1 z-20 bg-pink-100 rounded-lg text-sm border-blackw border-2 border-opacity-10 overflow-hidden`}
              >
                {profileLinks.map((href, i) => (
                  <Link
                    key={i}
                    className={`text-sm font-medium py-1 px-2 text-links_color hover:underline ${
                      loc.pathname === href.link
                        ? "font-semibold"
                        : "font-normal"
                    }`}
                    to={href.link}
                  >
                    {href.title}
                  </Link>
                ))}

                <button
                  className="bg-red-500 py-1.5 px-3 w-full text-white text-sm "
                  onClick={handleLogout}
                >
                  Log out
                </button>
              </div>
            </div>
          )}
          <div className="relative flex md:hidden h-10 w-10 rounded-md bg-primary text-whitew">
            <button
              onClick={() => {
                setShowList((prev) => !prev);
                setShowCart(false);
              }}
              className="flex items-center justify-center h-10 w-10"
            >
              <FaBars color="#F5F5F5" size={26} />
            </button>
            <ul
              className={` ${
                showList ? "flex" : "hidden"
              } flex-col items-center gap-y-3 absolute w-28 h-fit rounded-lg top-12 -right-[36px]  bg-whitew shadow-sm shadow-blackw overflow-hidden ${
                !loggedIn && "pb-2"
              }`}
            >
              {links.map((href, i) => (
                <li
                  key={i}
                  className={(i === 0 && "mt-2") || "q"}
                  // onClick={() =>}
                >
                  <Link
                    to={href.link}
                    className={`md:text-sm lg:text-[16px] text-links_color ${
                      loc.pathname === href.link
                        ? "font-semibold"
                        : "font-normal"
                    }`}
                  >
                    {href.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
