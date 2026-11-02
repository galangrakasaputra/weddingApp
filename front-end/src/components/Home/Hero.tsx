import { Link } from "react-router";
import heroImage from "../../assets/hero.png";

function Hero() {
  return (
    <section className="overflow-hidden bg-rose-50">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
        <div>
          <span className="mb-6 inline-block rounded-full bg-white px-4 py-2 text-sm font-medium text-rose-600">
            Digital Wedding Invitation
          </span>

          <h1 className="max-w-xl text-4xl font-bold leading-tight tracking-tight text-gray-900 md:text-6xl">
            Celebrate Your Love, Share Your Story.
          </h1>

          <p className="mt-6 max-w-lg text-base leading-7 text-gray-600 md:text-lg">
            Buat undangan pernikahan digital yang indah dan berkesan.
            Pilih desain favoritmu, sesuaikan dengan ceritamu, dan bagikan
            kebahagiaan bersama orang-orang tersayang.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/templates"
              className="rounded-lg bg-rose-500 px-6 py-3 font-semibold text-white transition hover:bg-rose-600"
            >
              Explore Templates
            </Link>

            <Link
              to="/templates"
              className="rounded-lg border border-gray-300 bg-white px-6 py-3 font-semibold text-gray-700 transition hover:bg-gray-50"
            >
              View Collection
            </Link>
          </div>
        </div>

        <div className="relative">
          <img
            src={heroImage}
            alt="Digital wedding invitation"
            className="h-[350px] w-full rounded-2xl object-cover shadow-xl md:h-[480px]"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;