// import Carousel from "react-bootstrap/Carousel";
import Card from "../Components/Card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RightArrow from "../Components/RightArrow";
import LeftArrow from "../Components/LeftArrow";
import books from "../../data";
import { useState } from "react";

export default function New() {
  const settings = {
    speed: 300,
    slidesToShow: 7,
    slidesToScroll: 2,
    initialSlide: 0,
    nextArrow: <RightArrow />,
    prevArrow: <LeftArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className=" flex flex-col gap-6 my-6 px-8 md:px-14 sm:px-12">
      <h2 className="font-bold text-2xl text-blackw">New Arrivals</h2>
      <Slider
        {...settings}
        className=" flex items-center justify-items-center place-items-center justify-self-center align-middle justify-cnter w-full"
      >
        {books.slice(0, 10).map((book, i) => (
          <Card key={i} data={book} />
        ))}
      </Slider>
    </section>
  );
}
