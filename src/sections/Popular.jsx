import Card from "../Components/Card";

export default function Popular() {
  return (
    <section className="flex flex-col justify-center px-8 md:px-14 sm:px-12">
      <div className="flex justify-between my-8">
        <h2 className="font-bold text-2xl text-blackw">Most Popular</h2>
        <p className="underline text-lg text-green-500">see more</p>
      </div>
      <div className="self-center grid grid-cols-2 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-9 gap-2 justify-items-center">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />

        <Card />
        <Card />
      </div>
    </section>
  );
}
