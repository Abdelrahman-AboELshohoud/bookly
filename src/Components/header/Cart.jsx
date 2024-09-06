import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import { useEffect, useState } from "react";
import data from "../../../data";
import { useSelector } from "react-redux";
export default function Cart({ showCart }) {
  const [cart, setCart] = useState([]);
  const items = useSelector((state) => state.user.inCart);

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")));
  }, [items]);

  return (
    <div
      className={`${showCart ? "visible" : "hidden"} z-10 relative bottom-12`}
    >
      <div className="traingle absolute top-10 right-2 bg-slate-200 h-4 w-8 z-10" />
      <div className="absolute top-14 right-2 bg-slate-100 w-56">
        {cart.length !== 0 ? (
          <ul className={cart.length > 1 && "overflow-y-scroll h-28"}>
            {cart?.map((book, i) => (
              <div key={i}>
                {data.map((e) => {
                  if (book?.id === e.id)
                    return (
                      <>
                        <CartItem details={e} quantityInCart={book.quantity} />
                      </>
                    );
                })}
              </div>
            ))}
          </ul>
        ) : (
          <div className="font- text-sm text-center py-4">Cart is empty!</div>
        )}
        <Link>
          <div className="w-full h-8 text-center border-y-2 bg-zinc-300 text-sm">
            showList More
          </div>
        </Link>
      </div>
    </div>
  );
}
