import { IoIosArrowDropleftCircle } from "react-icons/io";

export default function LeftArrow(props) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="w-6 h-6 flex justify-center items-center relative z-20 
         -left-8"
    >
      <IoIosArrowDropleftCircle
        color="#432D5F"
        className="opacity-70 hover:opacity-95 transition"
        size={24}
      />
    </button>
  );
}
