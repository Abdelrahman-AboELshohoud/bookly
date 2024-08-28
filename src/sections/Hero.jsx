export default function Hero() {
  return (
    <main className="pt-10 md:pt-20 mb-8 flex items-center px-8 md:px-14 sm:px-12">
      <div className=" w-full md:w-1/2 flex md:block flex-col items-center justify-center ite gap-3">
        <h1 className="flex flex-wrap gap-2 h-fit w-96 pl-8 md:pl-0 text-blackw md:scale-90 lg:scale-100">
          Discover
          <div className="">Books</div> Gain
          <div className="">Knowledge!</div>
        </h1>
        <p className="italic w-80 text-blackw md:scale-90 lg:scale-100">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
          sequi nemo officia vel molestias animi impedit
        </p>
      </div>
      <div className="hidden md:block w-1/2">
        <div className="flex flex-row bg-whitew w-80 h-80 ml-auto rounded-full relative md:scale-90 lg:scale-100 -z-20">
          <div className="flex h-48 w-36 bg-fuchsia-300 rounded-md  absolute -left-4 -top-4 ">
            <img
              src="/books1.jpg"
              alt=""
              className="w-full h-full rounded-md"
            />
          </div>
          <div className="flex h-48 w-36 bg-fuchsia-300 rounded-md absolute left-20 bottom-2 -z-10">
            <img
              src="/books2.jpeg"
              alt=""
              className="w-full h-full rounded-md"
            />
          </div>
          <div className="flex h-48 w-36 bg-fuchsia-300 rounded-md  absolute right-0 top-6">
            <img
              src="/books3.webp"
              alt=""
              className="w-full h-full rounded-md"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
