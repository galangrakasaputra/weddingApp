
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
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
    <section className="relative overflow-hidden border-t border-[#F6E8E9] bg-[#FFFDFC] px-8 py-20 sm:px-10 md:px-12 md:py-24 lg:px-16 xl:px-20 2xl:px-24">
      {/* Background Decoration */}
      <div className="pointer-events-none absolute -right-40 top-10 h-[350px] w-[350px] rounded-full bg-[#F8DDE2]/30 blur-3xl" />

      <div className="relative mx-auto max-w-[1600px]">
        {/* Section Header */}
        <div className="mb-12 flex flex-col justify-between gap-6 md:mb-14 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#C9798B]">
              <span className="h-px w-7 bg-[#E9A5B2]" />
              Our Collection
            </span>

            <h2 className="mt-4 font-serif text-4xl leading-tight tracking-tight text-[#72545B] md:text-5xl lg:text-[54px]">
              Find the Perfect
              <span className="block italic text-[#D98E9E]">
                Wedding Invitation.
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-base leading-8 text-[#806D70] md:text-lg">
              Setiap pernikahan memiliki cerita yang berbeda.
              Temukan desain undangan digital yang mencerminkan
              kepribadian dan kisah istimewamu.
            </p>
          </div>

          {/* View All Link */}
          <Link
            to="/templates"
            className="group inline-flex w-fit items-center gap-3 border-b border-[#E9A5B2] pb-2 text-sm font-semibold text-[#A66F7B] transition-colors duration-300 hover:border-[#C9798B] hover:text-[#C9798B]"
          >
            Explore All Templates

            <ArrowRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* Template Grid */}
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {featuredTemplates.map((template) => (
            <FeaturedTemplate key={template.id} {...template} />
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-12 flex flex-col items-center justify-center gap-2 border-t border-[#F6E8E9] pt-8 text-center sm:flex-row sm:gap-3">
          <p className="text-sm text-[#A38D91]">
            Belum menemukan desain yang sesuai?
          </p>

          <Link
            to="/templates"
            className="text-sm font-semibold text-[#C9798B] transition hover:text-[#A66F7B]"
          >
            Lihat semua koleksi
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Featured;
