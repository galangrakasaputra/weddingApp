
const steps = [
  {
    number: "01",
    title: "Choose Your Template",
    description:
      "Pilih desain undangan digital yang sesuai dengan tema dan gaya pernikahanmu.",
  },
  {
    number: "02",
    title: "Customize Your Invitation",
    description:
      "Tambahkan nama pasangan, tanggal pernikahan, lokasi acara, foto, dan informasi lainnya.",
  },
  {
    number: "03",
    title: "Share Your Invitation",
    description:
      "Setelah selesai, bagikan undangan digital kepada keluarga, teman, dan orang-orang tersayang.",
  },
];

function HowItWorks() {
  return (
    <section className="relative overflow-hidden border-t border-[#F6E8E9] bg-[#FFF9F6] px-8 py-20 sm:px-10 md:px-12 md:py-24 lg:px-16 xl:px-20 2xl:px-24">
      {/* Background Decoration */}
      <div className="pointer-events-none absolute -left-40 top-20 h-[350px] w-[350px] rounded-full bg-[#F8DDE2]/30 blur-3xl" />

      <div className="relative mx-auto max-w-[1600px]">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#C9798B]">
            <span className="h-px w-7 bg-[#E9A5B2]" />
            Simple Process
            <span className="h-px w-7 bg-[#E9A5B2]" />
          </span>

          <h2 className="mt-4 font-serif text-4xl leading-tight tracking-tight text-[#72545B] md:text-5xl">
            Three Steps to Your
            <span className="block italic text-[#D98E9E]">
              Perfect Invitation.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-[#806D70] md:text-lg">
            Membuat undangan pernikahan tidak harus rumit.
            Dengan Wedly, kamu bisa membuat undangan digital
            yang personal hanya melalui tiga langkah sederhana.
          </p>
        </div>

        {/* Steps */}
        <div className="relative grid gap-12 md:grid-cols-3 md:gap-10">
          {/* Connecting Line - Desktop */}
          <div className="pointer-events-none absolute left-[16.66%] right-[16.66%] top-9 hidden h-px border-t border-dashed border-[#E9C6CB] md:block" />

          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative flex flex-col items-center text-center"
            >
              {/* Number */}
              <div className="relative z-10 flex h-[72px] w-[72px] items-center justify-center rounded-full border border-[#E9C6CB] bg-[#FFFDFC] shadow-[0_4px_20px_rgba(114,84,91,0.05)]">
                <span className="font-serif text-2xl italic text-[#C9798B]">
                  {step.number}
                </span>
              </div>

              {/* Step Label */}
              <span className="mt-7 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C9798B]">
                Step {index + 1}
              </span>

              {/* Content */}
              <h3 className="mt-3 max-w-xs font-serif text-2xl text-[#72545B]">
                {step.title}
              </h3>

              <p className="mx-auto mt-3 max-w-sm text-sm leading-7 text-[#806D70]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
