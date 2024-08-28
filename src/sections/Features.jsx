import Feature from "../Components/Feature";

export default function Features() {
  return (
    <section className="flex flex-col items-center w-full mb-8 mt-4 px-8 md:px-14 sm:px-12">
      <h2 className="flex flex-row gap-2 italic font-bold text-3xl text-blackw my-6  max-w-fit">
        What makes us <div className="feat text-4xl">Special?</div>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-between gap-10">
        <Feature />
        <Feature />
        <Feature />
        <Feature />
      </div>
    </section>
  );
}
