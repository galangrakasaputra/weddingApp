import { Search, X } from "lucide-react";

interface FiltersProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const categories = [
  "All Templates",
  "Elegant",
  "Modern",
  "Minimalist",
  "Floral",
];

function Filters({
  selectedCategory,
  onCategoryChange,
  searchQuery,
  onSearchChange,
}: FiltersProps) {
  return (
    <div className="mb-10">
      {/* Search */}
      <div className="relative mb-8 w-full max-w-md">
        <Search
          size={19}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A38D91]"
        />

        <input
          type="text"
          value={searchQuery}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="Search wedding templates..."
          className="
            w-full rounded-xl
            border border-[#F0E4E5]
            bg-[#FFFDFC]
            py-3.5 pl-12 pr-11
            text-sm text-[#72545B]
            placeholder:text-[#B5A3A6]
            outline-none
            transition-all duration-300
            focus:border-[#E9A5B2]
            focus:ring-4 focus:ring-[#F8DDE2]/40
          "
        />

        {searchQuery && (
          <button
            type="button"
            onClick={() => onSearchChange("")}
            aria-label="Clear search"
            className="
              absolute right-3 top-1/2
              flex h-8 w-8 -translate-y-1/2
              items-center justify-center
              rounded-full text-[#A38D91]
              transition hover:bg-[#FFF1F3]
              hover:text-[#C9798B]
            "
          >
            <X size={16} />
          </button>
        )}
      </div>

      {/* Categories */}
      <div className="flex flex-wrap gap-3">
        {categories.map((category) => {
          const isActive = selectedCategory === category;

          return (
            <button
              key={category}
              type="button"
              onClick={() => onCategoryChange(category)}
              aria-pressed={isActive}
              className={`
                rounded-full px-5 py-2.5
                text-sm font-medium
                transition-all duration-300
                ${
                  isActive
                    ? "border border-[#E9A5B2] bg-[#E9A5B2] text-white shadow-sm"
                    : "border border-[#F0E4E5] bg-[#FFFDFC] text-[#806D70] hover:border-[#E9A5B2] hover:bg-[#FFF1F3] hover:text-[#C9798B]"
                }
              `}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Filters;