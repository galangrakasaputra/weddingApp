import { Link } from "react-router";

function CTA() {
  return (
    <section className="bg-rose-500 px-6 py-20 md:py-24">
      <div className="mx-auto max-w-4xl text-center">
        <span className="text-sm font-semibold uppercase tracking-widest text-rose-100">
          Start Your Journey
        </span>

        <h2 className="mt-4 text-3xl font-bold leading-tight text-white md:text-5xl">
          Make Your Special Day More Memorable
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-rose-50 md:text-lg">
          Buat undangan pernikahan digital yang mencerminkan kisah cintamu.
          Pilih desain favorit dan mulai persiapkan hari istimewamu bersama
          Wedly.
        </p>

        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <Link
            to="/templates"
            className="rounded-lg bg-white px-7 py-3.5 font-semibold text-rose-600 transition hover:bg-rose-50"
          >
            Explore Templates
          </Link>

          <Link
            to="/templates"
            className="rounded-lg border border-white/50 px-7 py-3.5 font-semibold text-white transition hover:bg-rose-600"
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CTA;