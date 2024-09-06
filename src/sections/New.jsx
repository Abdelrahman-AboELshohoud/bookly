import Card from "../Components/Card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RightArrow from "../Components/RightArrow";
import LeftArrow from "../Components/LeftArrow";
import books from "../../data";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function New() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 10,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 8,
    },
    largeTablet: {
      breakpoint: { max: 1024, min: 820 },
      items: 6,
    },

    tablet: {
      breakpoint: { max: 820, min: 464 },
      items: 4,
    },
    Smalltablet: {
      breakpoint: { max: 600, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };
  return (
    <section className=" flex flex-col gap-6 my-6 px-8 md:px-14 sm:px-12">
      <h2 className="font-bold text-2xl text-blackw">New Arrivals</h2>
      <Carousel
        draggable={false}
        infinite={true}
        transitionDuration={300}
        removeArrowOnDeviceType={["tablet", "mobile", "Smalltablet"]}
        responsive={responsive}
        className="flex slider items-center justify-center w-full"
      >
        {books.map((book, i) => (
          <Card key={i} data={book} />
        ))}
      </Carousel>
    </section>
  );
}
