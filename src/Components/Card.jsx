import { useState } from "react";
import { BsCartCheckFill, BsCartPlus } from "react-icons/bs";
import { FaHeart, FaRegHeart } from "react-icons/fa";

export default function Card() {
  const [added, setAdded] = useState(false);
  const [loved, setLoved] = useState(false);
  return (
    <div className="card flex flex-col items-center gap-2 w-[116px] h-44 p-2 rounded-md bg-whitew gap-x-2 relative shadow-sm shadow-blackw m-1">
      <div className="flex h-28 w-20 bg-fuchsia-300 rounded-md">
        <img src="/book1.jpg" alt="" className="w-full h-full rounded-md" />
      </div>
      <div className="font-semibold text-xs ">Gift of Earth</div>
      <div className="flex justify-between items-center h-4 w-full ">
        <div className="flex flex-row">
          <div className="star max-w-[6px] max-h-[6px] p-[6px] bg-yellow-300"></div>
          <div className="star max-w-[6px] max-h-[6px] p-[6px] bg-yellow-300"></div>
          <div className="star max-w-[6px] max-h-[6px] p-[6px] bg-[#CCCCCC]"></div>
          <div className="star max-w-[6px] max-h-[6px] p-[6px] bg-[#CCCCCC]"></div>
          <div className="star max-w-[6px] max-h-[6px] p-[6px] bg-[#CCCCCC]"></div>
        </div>
        <div className="sales flex flex-row items-center gap-0.5">
          <div className="line-through text-[10px] text-red-500">20$</div>
          <div className="text-xs text-green-500 font-semibold">15$</div>
        </div>
      </div>
      <div className="absolute flex w-full justify-between -top-2 p-1.5">
        <button
          className={`bg-whitew p-1 rounded-full ${
            added ? null : "opacity-70 hover:opacity-90 transition"
          }`}
          onClick={() => setAdded((prev) => !prev)}
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
