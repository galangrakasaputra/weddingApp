import { templates } from "./data";
import Card from "./Card";
import { SearchX } from "lucide-react";

interface GridProps {
  selectedCategory: string;
  searchQuery: string;
}

function Grid({ selectedCategory, searchQuery }: GridProps) {
  const filteredTemplates = templates.filter((template) => {
    const matchesCategory =
      selectedCategory === "All Templates" ||
      template.category === selectedCategory;

    const matchesSearch = template.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      {/* Result Information */}
      <div className="mb-7 flex items-center justify-between border-b border-[#F0E4E5] pb-4">
        <p className="text-sm text-[#806D70]">
          Showing{" "}
          <span className="font-semibold text-[#72545B]">
            {filteredTemplates.length}
          </span>{" "}
          {filteredTemplates.length === 1 ? "template" : "templates"}
        </p>

        <span className="text-xs font-medium uppercase tracking-[0.12em] text-[#A38D91]">
          {selectedCategory}
        </span>
      </div>

      {/* Template Grid */}
      {filteredTemplates.length > 0 ? (
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {filteredTemplates.map((template) => (
            <Card key={template.id} template={template} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center rounded-xl border border-dashed border-[#E9C6CB] bg-[#FFF9F6] px-6 py-20 text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#F0D9DE] bg-white">
            <SearchX size={24} className="text-[#C9798B]" />
          </div>

          <h3 className="mt-6 font-serif text-2xl text-[#72545B]">
            No Templates Found
          </h3>

          <p className="mt-3 max-w-md text-sm leading-7 text-[#806D70]">
            Belum ada template yang sesuai dengan pencarian atau kategori
            yang kamu pilih. Coba gunakan kata kunci atau kategori lainnya.
          </p>
        </div>
      )}
    </div>
  );
}

export default Grid;