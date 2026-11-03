
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";

function CTA() {
  return (
    <section className="relative overflow-hidden border-t border-[#F0D9DE] bg-[#F8E8E8] px-8 py-20 sm:px-10 md:px-12 md:py-24 lg:px-16 xl:px-20 2xl:px-24">
      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-32 -top-40 h-[400px] w-[400px] rounded-full border border-white/40" />

      <div className="pointer-events-none absolute -right-24 -bottom-48 h-[450px] w-[450px] rounded-full border border-white/40" />

      <div className="pointer-events-none absolute right-[15%] top-0 h-64 w-64 rounded-full bg-white/30 blur-3xl" />

      {/* Main Content */}
      <div className="relative mx-auto max-w-[1600px]">
        <div className="mx-auto max-w-3xl text-center">
          {/* Label */}
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#A66F7B]">
            <span className="h-px w-7 bg-[#D9A4AE]" />
            Start Your Journey
            <span className="h-px w-7 bg-[#D9A4AE]" />
          </span>

          {/* Heading */}
          <h2 className="mt-5 font-serif text-4xl leading-tight tracking-tight text-[#72545B] md:text-5xl lg:text-[58px]">
            Your Special Day,
            <span className="block italic text-[#C9798B]">
              Beautifully Remembered.
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#806D70] md:text-lg">
            Buat undangan pernikahan digital yang mencerminkan kisah cintamu.
            Pilih desain favorit dan mulai persiapkan hari istimewamu bersama
            Wedly.
          </p>

          {/* CTA Buttons */}
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link
              to="/templates"
              className="group inline-flex items-center gap-3 rounded-lg bg-[#C9798B] px-7 py-4 text-sm font-semibold text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-[#B96B7E] hover:shadow-md"
            >
              Explore Templates

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <Link
              to="/templates"
              className="inline-flex items-center justify-center rounded-lg border border-[#D9A4AE] bg-white/40 px-7 py-4 text-sm font-semibold text-[#A66F7B] transition duration-300 hover:border-[#C9798B] hover:bg-white/70"
            >
              Get Started
            </Link>
          </div>

          {/* Supporting Text */}
          <p className="mt-7 text-xs tracking-wide text-[#A38D91]">
            A beautiful beginning starts with a thoughtful invitation.
          </p>
        </div>
      </div>
    </section>
  );
}

export default CTA;