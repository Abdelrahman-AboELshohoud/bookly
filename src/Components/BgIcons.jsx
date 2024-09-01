import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

export default function BgIcons({ Icon }) {
  const arr = [1, 2, 3, 4, 5];
  const arr2 = [1, 2, 3, 4, 5, 6];
  return (
    <div className="bg-blue400 flex flex-col gap-2 justify-center opacity-5 absolute w-10/12 h-10/12 bg-re-200 top-0 m-1 p-1 items-center red-400">
      {arr.map((e) => {
        let f;
        if (e % 2 == 0) {
          f = arr;
        } else f = arr2;
        return (
          <div key={e} className=" flex flex-row gap-2">
            {f.map((s) => (
              <div key={e}>
                {Icon === "f" ? (
                  <FaLocationDot size={34} color="black" key={s} />
                ) : Icon === "p" ? (
                  <FaPhone size={34} color="black" key={s} />
                ) : (
                  <IoMail size={34} color="white" key={s} />
                )}
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}
