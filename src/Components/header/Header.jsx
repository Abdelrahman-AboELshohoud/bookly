import { Link, useLocation } from "react-router-dom";
import { FaBars, FaShoppingCart } from "react-icons/fa";
import { useState } from "react";
import Cart from "./Cart";
export default function Header() {
  const loggedIn = false;
  const links = [
    { title: "Home", link: "/" },
    { title: "Books", link: "/books" },
    { title: "Categories", link: "/categories" },
    { title: "Contact", link: "/contact-us" },
    { title: "About", link: "/about" },
  ];

  const [show, setShow] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const loc = useLocation();
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
          <div className="relative outline-none border-none h-12 w-12">
            <button
              className="caaart flex select-none outline-none justify-center items-center w-full h-full hover:bg-secondry transition rounded-full"
              onClick={() => {
                setShow(false);
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
          <Link
            to="/login"
            className="hidden md:flex items-center justify-center h-10 w-20 rounded-md bg-primary text-whitew"
          >
            Login
          </Link>
          <div className="relative flex md:hidden h-10 w-10 rounded-md bg-primary text-whitew">
            <button
              onClick={() => {
                setShow((prev) => !prev);
                setShowCart(false);
              }}
              className="flex items-center justify-center h-10 w-10"
            >
              <FaBars color="#F5F5F5" size={26} />
            </button>
            <ul
              className={` ${
                show ? "flex" : "hidden"
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
              {/* <button className="w-full bg-red-500 h-8">Log out</button> */}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
