
import { Link } from "react-router";
import { ArrowRight, Check } from "lucide-react";

function Hero() {
  const benefits = [
    "Beautiful Designs",
    "Easy Customization",
    "Share Instantly",
  ];

  return (
    <section className="relative overflow-hidden bg-[#FFF9F6]">
      {/* Decorative Background */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-[450px] w-[450px] rounded-full bg-[#F8DDE2]/50 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-40 -left-32 h-[400px] w-[400px] rounded-full bg-[#FCE9E5]/70 blur-3xl" />

      {/* Main Container */}
      <div className="relative mx-auto grid w-full max-w-[1600px] items-center gap-10 px-8 pb-16 pt-8 sm:gap-12 sm:px-10 md:grid-cols-2 md:gap-14 md:px-12 md:pb-20 md:pt-10 lg:px-16 xl:px-20 2xl:px-24">

        {/* Hero Content */}
        <div className="relative z-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#F0D9DE] bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#C9798B]">
            Digital Wedding Invitation
          </span>

          <h1 className="mt-6 max-w-xl font-serif text-5xl leading-[1.15] tracking-tight text-[#72545B] md:text-6xl lg:text-[68px]">
            Your Love Story,
            <span className="block italic text-[#D98E9E]">
              Beautifully Told.
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-8 text-[#806D70] md:text-lg">
            Setiap kisah cinta memiliki cerita yang istimewa.
            Abadikan momen pernikahanmu melalui undangan digital
            yang elegan, personal, dan mudah dibagikan kepada
            orang-orang tersayang.
          </p>

          {/* CTA */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              to="/templates"
              className="group inline-flex items-center gap-3 rounded-lg bg-[#E9A5B2] px-7 py-4 text-sm font-semibold text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-[#D98E9E] hover:shadow-md"
            >
              Find Your Invitation

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <Link
              to="/templates"
              className="rounded-lg px-5 py-4 text-sm font-semibold text-[#806D70] transition hover:text-[#C9798B]"
            >
              Explore Collection
            </Link>
          </div>

          {/* Benefits */}
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-center gap-2 text-sm text-[#806D70]"
              >
                <Check size={16} className="text-[#D98E9E]" />
                {benefit}
              </div>
            ))}
          </div>
        </div>

        {/* Hero Visual */}
        <div className="relative mx-auto flex w-full max-w-[540px] items-center justify-center py-4 md:py-6">
          {/* Background Decoration */}
          <div className="absolute h-[380px] w-[380px] rounded-full bg-[#F8DDE2]/60 blur-2xl" />

          {/* Smartphone */}
          <div className="relative z-10 w-[255px] rounded-[36px] border-[7px] border-[#72545B] bg-[#72545B] p-[5px] shadow-[0_25px_70px_rgba(114,84,91,0.25)] md:w-[275px]">

            {/* Phone Screen */}
            <div className="relative min-h-[490px] overflow-hidden rounded-[27px] bg-[#FFF9F6]">

              {/* Phone Notch */}
              <div className="absolute left-1/2 top-2 z-20 h-5 w-20 -translate-x-1/2 rounded-full bg-[#72545B]" />

              {/* Invitation Cover */}
              <div className="flex min-h-[490px] flex-col items-center justify-center px-5 py-12 text-center">
                <span className="text-[9px] uppercase tracking-[0.35em] text-[#A47D83]">
                  The Wedding Of
                </span>

                <div className="my-8 flex h-36 w-36 items-center justify-center rounded-full border border-[#E9C6CB] bg-[#F8E8E8]">
                  <div className="flex h-32 w-32 items-center justify-center rounded-full border border-[#DDB7BE]">
                    <span className="font-serif text-4xl italic text-[#A66F7B]">
                      A & B
                    </span>
                  </div>
                </div>

                <p className="font-serif text-3xl italic text-[#72545B]">
                  Amelia & Benjamin
                </p>

                <div className="my-5 h-px w-12 bg-[#D9A4AE]" />

                <p className="text-[9px] uppercase tracking-[0.3em] text-[#A47D83]">
                  Saturday
                </p>

                <p className="mt-2 text-sm font-medium tracking-[0.2em] text-[#72545B]">
                  20 . 12 . 2026
                </p>

                <div className="mt-10 rounded-full border border-[#E9C6CB] px-6 py-2.5">
                  <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#A66F7B]">
                    Open Invitation
                  </span>
                </div>

                <p className="mt-8 text-[9px] text-[#A38D91]">
                  Made with love by Wedly
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
