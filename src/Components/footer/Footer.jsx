import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { FaSquareWhatsapp, FaSquareXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <ul className="flex justify-between items-center gap-6 bg-whitew min-h-full sm:px-16 px-8 py-10 min-[488px]:flex-row flex-col flex-1">
      <li className="flex flex-col items-center gap-1 w-full min-[488px]:w-auto">
        <img src="/logo.png" alt="" width={104} />
        <span className="w-28 md:w-32 max-[488px]:text-center">
          one of the best online books shops in the middle-east.
        </span>
      </li>
      <div className="flex flex-row gap-12 justify-center min-[488px]:w-auto w-full">
        <li className="flex flex-col gap-2 items-center">
          <label htmlFor="">Pages</label>
          <span>Home</span>
          <span>Books</span>
          <span>Categories</span>
          <span>Contact</span>
          <span>About</span>
        </li>
        <li className="flex flex-col gap-2 items-center w">
          <label htmlFor="">Categories</label>
          <span>Self Development</span>
          <span>Technology</span>
          <span>Science</span>
          <span>History</span>
          <span>Stories</span>
        </li>
      </div>
      <li className="flex flex-col items-center gap-1 w-full min-[488px]:w-auto">
        <label className="self-center">Our Accounts</label>
        <ul className="flex flex-row gap-1">
          <li>
            <FaFacebookSquare color="#1877f2" size={26} />
          </li>
          <li>
            <FaSquareXTwitter size={26} />
          </li>
          <li>
            <FaSquareWhatsapp color="#25d366" size={26} />
          </li>
          <li>
            <FaInstagramSquare color="#c32aa3" size={26} />
          </li>
        </ul>
        <label className="self-center mt-2">Payment Methods</label>
        <ul className="flex flex-row h-fit items-center justify-start mr-1">
          <img src="/mastercard.png" width={40} alt="" />
          <img src="/visa.png" width={40} alt="" className="" />
          <img src="/paypal.png" width={40} alt="" />
          <img src="/bank.png" width={30} alt="" />
        </ul>
      </li>
    </ul>
  );
}
