import { Link } from "react-router";
import { ArrowUpRight } from "lucide-react";
import type { Template } from "./data";

interface CardProps {
  template: Template;
}

function Card({ template }: CardProps) {
  return (
    <article className="group overflow-hidden rounded-xl border border-[#F0E4E5] bg-[#FFFDFC] transition-all duration-500 hover:-translate-y-1 hover:border-[#E9C6CB] hover:shadow-[0_18px_45px_rgba(114,84,91,0.10)]">
      {/* Template Preview */}
      <Link
        to={`/templates/${template.id}`}
        aria-label={`View ${template.name} template`}
        className="relative flex h-[360px] items-center justify-center overflow-hidden p-7 sm:p-9"
        style={{ background: template.background }}
      >
        {/* Decorative Elements */}
        <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full border border-white/30" />
        <div className="pointer-events-none absolute -bottom-16 -left-12 h-48 w-48 rounded-full border border-white/30" />

        {/* Invitation Mockup */}
        <div className="relative flex h-full w-full max-w-[230px] flex-col items-center justify-center border border-white/60 bg-[#FFFDFC]/90 px-5 py-8 text-center shadow-[0_12px_35px_rgba(70,50,50,0.12)] backdrop-blur-sm transition-transform duration-500 group-hover:scale-[1.02]">
          <div className="pointer-events-none absolute inset-2 border border-[#DCC7C4]/60" />

          <span className="relative text-[9px] uppercase tracking-[0.35em] text-[#A38D91]">
            The Wedding Of
          </span>

          <div className="relative my-7 flex h-24 w-24 items-center justify-center rounded-full border border-[#E9C6CB]">
            <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[#DDB7BE]">
              <span
                className="font-serif text-3xl italic"
                style={{ color: template.accent }}
              >
                A & B
              </span>
            </div>
          </div>

          <h3
            className="relative font-serif text-2xl italic"
            style={{ color: template.accent }}
          >
            Amelia & Benjamin
          </h3>

          <div
            className="relative my-5 h-px w-10"
            style={{ backgroundColor: template.accent }}
          />

          <p className="relative text-[9px] uppercase tracking-[0.3em] text-[#A38D91]">
            Saturday
          </p>

          <p className="relative mt-2 text-xs font-medium tracking-[0.2em] text-[#72545B]">
            20 . 12 . 2026
          </p>

          <span className="relative mt-7 text-[9px] uppercase tracking-[0.25em] text-[#A38D91]">
            You're Invited
          </span>
        </div>

        {/* Preview Label */}
        <span className="absolute bottom-5 right-5 rounded-full border border-white/50 bg-white/70 px-3 py-1.5 text-[10px] font-medium tracking-wide text-[#72545B] backdrop-blur-sm">
          Live Preview
        </span>
      </Link>

      {/* Template Information */}
      <div className="p-5 sm:p-6">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#C9798B]">
              {template.category}
            </span>

            <h3 className="mt-2 font-serif text-xl text-[#72545B] transition-colors duration-300 group-hover:text-[#C9798B]">
              {template.name}
            </h3>
          </div>

          <span className="shrink-0 pt-5 text-sm font-semibold text-[#A66F7B]">
            Rp{template.price.toLocaleString("id-ID")}
          </span>
        </div>

        <p className="mt-3 line-clamp-2 text-sm leading-7 text-[#806D70]">
          {template.description}
        </p>

        {/* View Details */}
        <Link
          to={`/templates/${template.id}`}
          className="mt-6 flex items-center justify-between border-t border-[#F0E4E5] pt-4 text-sm font-semibold text-[#806D70] transition-colors duration-300 hover:text-[#C9798B]"
        >
          View Template

          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#F0D9DE] transition-all duration-300 group-hover:border-[#E9A5B2] group-hover:bg-[#FFF1F3]">
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </span>
        </Link>
      </div>
    </article>
  );
}

export default Card;