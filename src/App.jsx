import CategoriesSec from "./sections/CategoriesSec";
import Features from "./sections/Features";
import Hero from "./sections/Hero";
import New from "./sections/New";
import Popular from "./sections/Popular";
function App() {
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

export default App;
