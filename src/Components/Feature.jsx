import { Link } from "react-router-dom";

export default function Feature() {
  return (
    <div className="flex flex-col items-center gap-5 px-2 py-4 w-48 rounded-xl bg-whitew text-blackw border border-gray-400">
      <div className="flex flex-col items-center gap-4 text-blackw">
        <div className="font-bold text-lg">Various Categories</div>
        <div className="text-sm text-center">
          Check our categories, we have over 20 categories that suit many types
          of people.
        </div>
      </div>
      <Link to="/" className="underline text-primary">
        Check Categories
      </Link>
    </div>
  );
}
