import { Link } from "react-router";
import { ArrowRight, Eye } from "lucide-react";
import type { Template } from "../Template/data";

interface InformationProps {
  template: Template;
}

function Information({ template }: InformationProps) {
  return (
    <div className="flex flex-col justify-center">
      {/* Category */}
      <span className="w-fit rounded-full border border-[#F0D9DE] bg-[#FFF1F3] px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#C9798B]">
        {template.category}
      </span>

      {/* Template Name */}
      <h1 className="mt-6 font-serif text-4xl leading-tight tracking-tight text-[#72545B] md:text-5xl">
        {template.name}
      </h1>

      {/* Description */}
      <p className="mt-5 max-w-xl text-sm leading-8 text-[#806D70] md:text-base">
        {template.description}
      </p>

      {/* Price */}
      <div className="mt-8 border-y border-[#F0E4E5] py-6">
        <p className="text-xs font-medium uppercase tracking-[0.15em] text-[#A38D91]">
          Template Price
        </p>

        <p className="mt-3 font-serif text-3xl font-semibold text-[#A66F7B] md:text-4xl">
          Rp{template.price.toLocaleString("id-ID")}
        </p>

        <p className="mt-2 text-xs text-[#A38D91]">
          One-time payment
        </p>
      </div>

      {/* Actions */}
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          className="
            group inline-flex items-center justify-center gap-3
            rounded-lg bg-[#E9A5B2] px-6 py-3.5
            text-sm font-semibold text-white
            shadow-sm transition-all duration-300
            hover:-translate-y-0.5 hover:bg-[#D98E9E]
            hover:shadow-md
          "
        >
          Buy This Template
          <ArrowRight
            size={17}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </button>

        <Link
          to={`/preview/${template.id}`}
          className="
            inline-flex items-center justify-center gap-2
            rounded-lg border border-[#F0D9DE]
            bg-[#FFFDFC] px-6 py-3.5
            text-sm font-semibold text-[#806D70]
            transition-all duration-300
            hover:border-[#E9A5B2]
            hover:bg-[#FFF1F3]
            hover:text-[#C9798B]
          "
        >
          <Eye size={17} />
          Live Preview
        </Link>
      </div>

      {/* Purchase Note */}
      <p className="mt-5 text-xs leading-6 text-[#A38D91]">
        Pembelian template akan segera tersedia. Kamu bisa melihat preview
        terlebih dahulu sebelum menentukan pilihan.
      </p>
    </div>
  );
}

export default Information;