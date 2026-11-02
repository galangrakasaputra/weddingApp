import { Link } from "react-router";

interface FeaturedTemplateProps {
  id: string;
  name: string;
  category: string;
  price: string;
  background: string;
  accent: string;
}

function FeaturedTemplate({
  id,
  name,
  category,
  price,
  background,
  accent,
}: FeaturedTemplateProps) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      {/* Template Preview */}
      <div
        className="flex h-80 items-center justify-center p-8"
        style={{ background }}
      >
        <div className="flex h-full w-full max-w-[220px] flex-col items-center justify-center border border-white/50 bg-white/80 px-5 text-center shadow-lg backdrop-blur-sm">
          <span className="text-xs uppercase tracking-[0.3em] text-gray-500">
            The Wedding Of
          </span>

          <h3
            className="mt-5 font-serif text-3xl italic"
            style={{ color: accent }}
          >
            A & B
          </h3>

          <div
            className="my-5 h-px w-12"
            style={{ backgroundColor: accent }}
          />

          <p className="text-xs tracking-widest text-gray-500">
            20 . 12 . 2026
          </p>

          <span className="mt-5 text-[10px] uppercase tracking-[0.2em] text-gray-400">
            You're Invited
          </span>
        </div>
      </div>

      {/* Template Information */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-semibold text-gray-900">{name}</h3>
            <p className="mt-1 text-sm text-gray-500">{category}</p>
          </div>

          <span className="whitespace-nowrap font-semibold text-rose-500">
            {price}
          </span>
        </div>

        <Link
          to={`/templates/${id}`}
          className="mt-5 block rounded-lg border border-gray-200 py-2.5 text-center text-sm font-semibold text-gray-700 transition hover:border-rose-500 hover:bg-rose-50 hover:text-rose-600"
        >
          View Template
        </Link>
      </div>
    </div>
  );
}

export default FeaturedTemplate;