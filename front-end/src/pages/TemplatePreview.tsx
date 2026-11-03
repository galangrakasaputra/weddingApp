
import { useState } from "react";
import { Link, useParams } from "react-router";
import {
  ArrowLeft,
  Monitor,
  Smartphone,
} from "lucide-react";

import { templates } from "../components/Template/data";

type PreviewMode = "mobile" | "desktop";

function TemplatePreview() {
  const { id } = useParams<{ id: string }>();
  const [mode, setMode] = useState<PreviewMode>("mobile");

  const template = templates.find((item) => item.id === id);

  if (!template) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <h1 className="text-3xl font-bold text-gray-900">
          Template Not Found
        </h1>

        <p className="mt-3 text-gray-500">
          Template yang kamu cari tidak tersedia.
        </p>

        <Link
          to="/templates"
          className="mt-6 rounded-lg bg-rose-500 px-6 py-3 font-semibold text-white"
        >
          Back to Templates
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-100">
      {/* Preview Toolbar */}
      <header className="sticky top-0 z-20 flex flex-wrap items-center justify-between gap-4 border-b border-gray-200 bg-white px-6 py-4">
        <Link
          to={`/templates/${template.id}`}
          className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-rose-500"
        >
          <ArrowLeft size={18} />
          Back to Detail
        </Link>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setMode("mobile")}
            className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition ${
              mode === "mobile"
                ? "bg-rose-500 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            <Smartphone size={17} />
            Mobile
          </button>

          <button
            type="button"
            onClick={() => setMode("desktop")}
            className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition ${
              mode === "desktop"
                ? "bg-rose-500 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            <Monitor size={17} />
            Desktop
          </button>
        </div>

        <span className="text-sm font-medium text-gray-500">
          {template.name}
        </span>
      </header>

      {/* Preview Area */}
      <section className="flex min-h-[calc(100vh-73px)] justify-center overflow-auto p-6 md:p-10">
        <div
          className={`my-auto overflow-hidden bg-white shadow-2xl transition-all duration-300 ${
            mode === "mobile"
              ? "min-h-[700px] w-full max-w-[390px] rounded-[28px] border-[8px] border-gray-900"
              : "min-h-[650px] w-full max-w-6xl rounded-xl"
          }`}
        >
          {/* Invitation Cover */}
          <div
            className="flex min-h-[650px] flex-col items-center justify-center px-8 py-16 text-center"
            style={{ background: template.background }}
          >
            <p
              className="text-xs uppercase tracking-[0.4em]"
              style={{ color: template.accent }}
            >
              The Wedding Of
            </p>

            <h1
              className="mt-12 font-serif text-5xl italic md:text-7xl"
              style={{ color: template.accent }}
            >
              A & B
            </h1>

            <div
              className="my-10 h-px w-20"
              style={{ backgroundColor: template.accent }}
            />

            <p
              className="text-sm uppercase tracking-[0.3em]"
              style={{ color: template.accent }}
            >
              Saturday
            </p>

            <p
              className="mt-3 text-lg font-semibold tracking-[0.2em]"
              style={{ color: template.accent }}
            >
              20 . 12 . 2026
            </p>

            <p
              className="mt-12 text-xs uppercase tracking-[0.3em]"
              style={{ color: template.accent }}
            >
              You're Invited
            </p>
          </div>

          {/* Invitation Content */}
          <div className="px-8 py-20 text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
              With Love
            </p>

            <h2
              className="mt-5 font-serif text-4xl italic"
              style={{ color: template.accent }}
            >
              A & B
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-gray-500">
              Dengan penuh kebahagiaan, kami mengundang Anda
              untuk hadir dan memberikan doa restu pada hari
              pernikahan kami.
            </p>

            <div className="mt-16">
              <h3 className="font-serif text-2xl text-gray-800">
                Wedding Day
              </h3>

              <p className="mt-4 text-sm text-gray-500">
                Saturday, 20 December 2026
              </p>

              <p className="mt-2 text-sm text-gray-500">
                10:00 AM - End
              </p>

              <p className="mt-4 text-sm text-gray-500">
                Bandung, Indonesia
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default TemplatePreview;