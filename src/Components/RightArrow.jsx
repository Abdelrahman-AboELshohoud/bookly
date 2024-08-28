import { IoIosArrowDroprightCircle } from "react-icons/io";

export default function RightArrow(props) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="w-6 h-6 flex justify-center items-center relative z-20 
         -right-8"
    >
      <IoIosArrowDroprightCircle
        color="#432D5F"
        className="opacity-70 hover:opacity-95 transition"
        size={24}
      />
    </button>
  );
}
