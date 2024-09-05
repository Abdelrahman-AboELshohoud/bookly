import Hero from "../sections/Hero";
import New from "../sections/New";
import CategoriesSec from "../sections/CategoriesSec";
import Popular from "../sections/Popular";
import Features from "../sections/Features";

export default function Home() {
  return (
    <div className="h-fit overflow-hidden">
      <Hero />
      <New />
      <CategoriesSec />
      <Popular />
      <Features />
    </div>
  );
}
