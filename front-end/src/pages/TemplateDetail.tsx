import { Link, useParams } from "react-router";
import { ArrowLeft } from "lucide-react";

import { templates } from "../components/Template/data";

import Preview from "../components/TemplateDetail/Preview";
import Information from "../components/TemplateDetail/Information";
import Features from "../components/TemplateDetail/Features";
import Related from "../components/TemplateDetail/Related";

import CTA from "../components/Home/CTA";
import Footer from "../components/Home/Footer";

function TemplateDetail() {
  const { id } = useParams<{ id: string }>();

  const template = templates.find((item) => item.id === id);

  if (!template) {
    return (
      <>
        <main className="flex min-h-[70vh] flex-col items-center justify-center bg-[#FFF9F6] px-6 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C9798B]">
            Template Collection
          </span>

          <h1 className="mt-5 font-serif text-4xl text-[#72545B] md:text-5xl">
            Template Not Found
          </h1>

          <p className="mt-4 max-w-md text-sm leading-7 text-[#806D70]">
            Maaf, template yang kamu cari tidak tersedia atau mungkin sudah
            tidak ditemukan.
          </p>

          <Link
            to="/templates"
            className="mt-8 inline-flex items-center gap-3 rounded-lg bg-[#E9A5B2] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#D98E9E] hover:shadow-md"
          >
            <ArrowLeft size={17} />
            Back to Templates
          </Link>
        </main>

        <CTA />
        <Footer />
      </>
    );
  }

  return (
    <>
      <main className="mx-auto w-full max-w-[1600px] px-8 py-10 sm:px-10 md:px-12 md:py-14 lg:px-16 xl:px-20 2xl:px-24">
        {/* Back Navigation */}
        <Link
          to="/templates"
          className="group mb-9 inline-flex items-center gap-2 text-sm font-medium text-[#806D70] transition-colors duration-300 hover:text-[#C9798B]"
        >
          <ArrowLeft
            size={17}
            className="transition-transform duration-300 group-hover:-translate-x-1"
          />
          Back to Templates
        </Link>

        {/* Template Overview */}
        <section className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Preview template={template} />
          <Information template={template} />
        </section>

        {/* Template Features */}
        <Features template={template} />

        {/* Related Templates */}
        <Related currentTemplateId={template.id} />
      </main>

      {/* Call to Action */}
      <CTA />

      {/* Footer */}
      <Footer />
    </>
  );
}

export default TemplateDetail;