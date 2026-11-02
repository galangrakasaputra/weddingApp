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
    <section className="bg-gray-50 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-rose-500">
            Simple Process
          </span>

          <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
            Create Your Invitation in 3 Easy Steps
          </h2>

          <p className="mt-5 leading-7 text-gray-500">
            Tidak perlu proses yang rumit. Buat undangan pernikahan digital
            dengan mudah melalui Wedly.
          </p>
        </div>

        {/* Steps */}
        <div className="grid gap-10 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="relative text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-rose-100 text-xl font-bold text-rose-500">
                {step.number}
              </div>

              <h3 className="mt-6 text-xl font-semibold text-gray-900">
                {step.title}
              </h3>

              <p className="mx-auto mt-3 max-w-sm text-sm leading-7 text-gray-500">
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