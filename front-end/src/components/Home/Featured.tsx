import { Link } from "react-router";
import FeaturedTemplate from "./FeaturedTemplate";

const featuredTemplates = [
  {
    id: "eternal-love",
    name: "Eternal Love",
    category: "Elegant",
    price: "Rp99.000",
    background: "linear-gradient(135deg, #e8d8c8, #b99b83)",
    accent: "#795b48",
  },
  {
    id: "modern-romance",
    name: "Modern Romance",
    category: "Modern",
    price: "Rp89.000",
    background: "linear-gradient(135deg, #e8c8c8, #c58d98)",
    accent: "#9b5265",
  },
  {
    id: "pure-minimalist",
    name: "Pure Minimalist",
    category: "Minimalist",
    price: "Rp79.000",
    background: "linear-gradient(135deg, #dce3d5, #a7b79b)",
    accent: "#61745b",
  },
];

function Featured() {
  return (
    <section className="bg-white px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-rose-500">
              Our Collection
            </span>

            <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
              Featured Templates
            </h2>

            <p className="mt-4 max-w-xl leading-7 text-gray-500">
              Temukan desain undangan digital yang sesuai dengan cerita dan
              gaya pernikahanmu.
            </p>
          </div>

          <Link
            to="/templates"
            className="text-sm font-semibold text-rose-500 transition hover:text-rose-600"
          >
            View All Templates →
          </Link>
        </div>

        {/* Template Grid */}
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {featuredTemplates.map((template) => (
            <FeaturedTemplate key={template.id} {...template} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Featured;