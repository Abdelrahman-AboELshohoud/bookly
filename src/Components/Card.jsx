import { useMemo, useState } from "react";
import { BsCartCheckFill, BsCartPlus } from "react-icons/bs";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/userSlice";
export default function Card({ data }) {
  const [added, setAdded] = useState(false);
  const [loved, setLoved] = useState(false);
  const dispatch = useDispatch();
  const addInCart = (bookId) => {
    if (added) {
      dispatch(removeFromCart(bookId));
      setAdded(false);
    } else {
      dispatch(addToCart(bookId));
      setAdded(true);
    }
  };
  const cart = useSelector((state) => state.user.inCart);
  useMemo(() => {
    const book = cart.find((e) => e.id === data?.id);
    if (book) {
      setAdded(true);
    } else {
      setAdded(false);
    }
  }, [cart, data?.id]);
  const rateCalc = (rate) => {
    const edtRate = Math.ceil(rate);
    let m = [];
    for (let i = 1; i <= 5; i++) {
      if (rate !== edtRate && i === edtRate) {
        m.push("half");
      } else if (i > edtRate) {
        m.push("bg-slate-400");
      } else {
        m.push("bg-yellow-300");
      }
    }

    return m;
  };
  rateCalc(3.5);
  console.log(rateCalc(2.5).length);

  return (
    <div className="card flex flex-col items-center gap-2 w-[116px] h-[200px] p-2  pb-1 rounded-md bg-whitew gap-x-2 relative shadow-sm shadow-blackw m-1">
      <div className="flex h-28 w-20 bg-fuchsia-300 rounded-md">
        <img
          src={data?.cover_image}
          alt=""
          className="w-full h-full rounded-md"
        />
      </div>
      <div className="font-semibold text-[11px] h-8">{data?.title}</div>
      <div className="flex justify-between items-center h-4 w-full">
        <div className="flex flex-wrap items-center  ">
          {rateCalc(data?.reviews?.finalResult).map((e, i) => (
            <div
              key={i}
              className={`star max-w-[6px] max-h-[6px] p-[6px] ${e}`}
            ></div>
          ))}
          <div className=" ml-0.5 mr-0.5 text-[10px] font-">
            ( {data?.reviews?.numOfReviews} )
          </div>
        </div>
        <div className="sales flex flex-col items-center gap-0.5">
          {data?.discount?.afterDiscount ? (
            <>
              <div className="line-through text-[10px] text-red-500">
                {data?.price}$
              </div>
              <div className="text-xs text-green-500 font-semibold">
                {data?.discount?.afterDiscount}$
              </div>
            </>
          ) : (
            <div className="text-xs text-green-500 font-semibold">
              {data?.price}$
            </div>
          )}
        </div>
      </div>
      <div className="absolute flex w-full justify-between -top-2 p-1.5">
        <button
          className={`bg-whitew p-1 rounded-full ${
            added ? null : "opacity-70 hover:opacity-90 transition"
          }`}
          onClick={() => addInCart(data?.id)}
        >
          {added ? <BsCartCheckFill color="#22c55e" /> : <BsCartPlus />}
        </button>
        <button
          className={`bg-whitew p-1 rounded-full ${
            loved ? null : "opacity-70 hover:opacity-90 transition"
          }`}
          onClick={() => setLoved((prev) => !prev)}
        >
          {loved ? <FaHeart color="#ef3333" /> : <FaRegHeart />}
        </button>
      </div>
    </div>
  );
}
