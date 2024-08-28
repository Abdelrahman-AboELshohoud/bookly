import Category from "../Components/Category";

export default function CategoriesSec() {
  return (
    <section className="bg-primary flex flex-col items-center gap-6 h-fit py-6 relative min-w-100vw px-8 md:px-14 sm:px-12">
      <h2 className="max-w-fit text-2xl text-whitew font-semibold">
        Our Categories
      </h2>
      <div className="w-fit self-center grid gap-6 grid-cols-1 min-[480px]:grid-cols-2 lg:grid-cols-4 justify-items-center">
        <Category />
        <Category />
        <Category />
        <Category />
      </div>
    </section>
  );
}
