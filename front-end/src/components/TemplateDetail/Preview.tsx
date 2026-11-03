import type { Template } from "../Template/data";

interface PreviewProps {
  template: Template;
}

function Preview({ template }: PreviewProps) {
  return (
    <div
      className="relative flex min-h-[520px] items-center justify-center overflow-hidden rounded-xl p-8 sm:p-10"
      style={{ background: template.background }}
    >
      {/* Decorative Background */}
      <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full border border-white/30" />
      <div className="pointer-events-none absolute -bottom-20 -left-16 h-72 w-72 rounded-full border border-white/30" />

      {/* Invitation Preview */}
      <div className="relative flex min-h-[440px] w-full max-w-[320px] flex-col items-center justify-center border border-white/60 bg-[#FFFDFC]/90 px-7 py-12 text-center shadow-[0_20px_50px_rgba(70,50,50,0.15)] backdrop-blur-sm sm:px-9">
        {/* Inner Border */}
        <div className="pointer-events-none absolute inset-2 border border-[#DCC7C4]/60" />

        <span className="relative text-[10px] uppercase tracking-[0.35em] text-[#A38D91]">
          The Wedding Of
        </span>

        {/* Initials */}
        <div className="relative my-9 flex h-32 w-32 items-center justify-center rounded-full border border-[#E9C6CB]">
          <div className="flex h-28 w-28 items-center justify-center rounded-full border border-[#DDB7BE]">
            <span
              className="font-serif text-4xl italic"
              style={{ color: template.accent }}
            >
              A & B
            </span>
          </div>
        </div>

        {/* Couple Names */}
        <h2
          className="relative font-serif text-3xl italic leading-tight"
          style={{ color: template.accent }}
        >
          Amelia & Benjamin
        </h2>

        <div
          className="relative my-6 h-px w-12"
          style={{ backgroundColor: template.accent }}
        />

        {/* Wedding Date */}
        <p className="relative text-[10px] uppercase tracking-[0.3em] text-[#A38D91]">
          Saturday
        </p>

        <p className="relative mt-3 text-sm font-medium tracking-[0.2em] text-[#72545B]">
          20 . 12 . 2026
        </p>

        {/* Invitation Label */}
        <span className="relative mt-9 text-[9px] uppercase tracking-[0.3em] text-[#A38D91]">
          You're Invited
        </span>
      </div>
    </div>
  );
}

export default Preview;