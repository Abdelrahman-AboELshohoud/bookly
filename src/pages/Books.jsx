import { FaSearch } from "react-icons/fa";
import Card from "../Components/Card";
import books from "../../data";
import { useState } from "react";

export default function Books() {
  const [selected, setSelected] = useState("all");
  const btns = [
    { name: "All", value: "all" },
    { name: "Most Popular", value: "most" },
    { name: "Just Arrived", value: "new" },
    { name: "Top Rates", value: "top" },
  ];
  return (
    <section className="flex flex-col gap-2 items-center md:pb-8 md:pt-6 py-10 justify-center px-8 md:px-14 sm:px-12">
      <div className="flex sm:flex-row flex-col items-center gap-4 sm:gap-12 my-4">
        <div className="flex items-center justify-between w-72 sm:w-96 h-10 rounded-full border-2 border-opacity-10 border-blackw overflow-hidden">
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Search in Library..."
            className=" bg-transparent px-3 h-full w-5/6  outline-none"
          />
          <label
            htmlFor="search"
            className="flex justify-center w-1/5 bg-whitew h-full items-center cursor-pointer"
          >
            <FaSearch size={21} color="#432d5f" />
          </label>
        </div>
        <ul className="flex gap-3">
          {btns.map((e, i) => (
            <li
              key={i}
              className={`font-semibold text-sm text-center rounded-lg border-2 border-blackw border-opacity-10 transition ${
                selected === e.value
                  ? "bg-blackw text-whitew"
                  : "bg-whitew text-blackw"
              }`}
            >
              <button
                className="px-3 py-1.5"
                onClick={() => setSelected(e.value)}
              >
                {e.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="self-center grid grid-cols-2 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-9 gap-2 justify-items-center">
        {books.slice(10).map((book, i) => (
          <Card key={i} data={book} />
        ))}
      </div>
    </section>
  );
}
