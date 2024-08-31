import { CiSquareMinus, CiSquarePlus } from "react-icons/ci";
import { FaXmark } from "react-icons/fa6";
import {
  decreaseFromCart,
  increaseInCart,
  removeFromCart,
} from "../../../redux/userSlice";
import { useDispatch } from "react-redux";
export default function CartItem({ details, quantityInCart }) {
  const dispatch = useDispatch();
  const increaseQuantity = (bookId) => dispatch(increaseInCart(bookId));
  const decreaseQuantity = (bookId) => dispatch(decreaseFromCart(bookId));
  const deleteItem = (bookId) => dispatch(removeFromCart(bookId));
  return (
    <li className="flex flex-row p-2">
      <img
        src={details?.cover_image}
        width={60}
        height={90}
        className="rounded-md"
      />
      <div className="w-full py-1">
        <div className="flex flex-row justify-between pl-2 h-16">
          <h4 className="text-xs font-semibold line-clamp-2">
            {details?.title}
          </h4>
          <button
            className="flex justify-center items-center bg-red-500 ml-1  rounded-md h-5 w-5"
            onClick={() => deleteItem(details?.id)}
          >
            <FaXmark color="#F5F5F5" size={18} />
          </button>
        </div>

        <div className="flex flex-row justify-between items-center w-full pl-2 ">
          <div className="indicator flex items-center gap-1">
            <button
              className="flex justify-center items-center  text-lg rounded-sm disabled:cursor-not-allowed disabled:opacity-50"
              onClick={() => increaseQuantity(details?.id)}
              disabled={quantityInCart === details?.quantity}
            >
              <CiSquarePlus color="black" size={17} />
            </button>
            <div className="w-6 h-4 bg-gray-300 text-xs text-center text-gray-950 rounded-sm select-none outline-none">
              {quantityInCart}
            </div>
            <button
              className="flex justify-center items-centertext-lg rounded-sm disabled:cursor-not-allowed disabled:opacity-50"
              onClick={() => decreaseQuantity(details?.id)}
              disabled={quantityInCart === 1}
            >
              <CiSquareMinus color="black" size={17} />
            </button>
          </div>
          <div className="price text-xs">{details?.price}$</div>
        </div>
      </div>
    </li>
  );
}
