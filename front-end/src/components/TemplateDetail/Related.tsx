import { templates } from "../Template/data";
import Card from "../Template/Card";

interface RelatedProps {
  currentTemplateId: string;
}

function Related({ currentTemplateId }: RelatedProps) {
  const relatedTemplates = templates
    .filter((template) => template.id !== currentTemplateId)
    .slice(0, 3);

  if (relatedTemplates.length === 0) {
    return null;
  }

  return (
    <section className="mt-20 border-t border-[#F0E4E5] pt-16">
      {/* Section Header */}
      <div className="mb-9">
        <div className="inline-flex items-center gap-3">
          <span className="h-px w-8 bg-[#E9A5B2]" />

          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C9798B]">
            Explore More
          </span>
        </div>

        <h2 className="mt-5 font-serif text-3xl tracking-tight text-[#72545B] md:text-4xl">
          You May Also
          <span className="italic text-[#D98E9E]"> Like These.</span>
        </h2>

        <p className="mt-4 max-w-xl text-sm leading-7 text-[#806D70] md:text-base">
          Temukan desain undangan lainnya yang mungkin sesuai dengan
          selera dan cerita cintamu.
        </p>
      </div>

      {/* Related Templates */}
      <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {relatedTemplates.map((template) => (
          <Card key={template.id} template={template} />
        ))}
      </div>
    </section>
  );
}

export default Related;