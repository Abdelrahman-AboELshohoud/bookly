import Category from "../Components/Category";
export default function Categories() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 1, 1, 1, 1];
  return (
    <section className="flex flex-col gap-6 items-center md:pb-8 md:pt-6 py-10 justify-center px-8 md:px-14 sm:px-12 bg-blackw">
      <h2 className="text-3xl font-semibold text-whitew">Our Categories</h2>
      <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
        {arr.map((e) => (
          <Category key={e} />
        ))}
      </div>
    </section>
  );
}
