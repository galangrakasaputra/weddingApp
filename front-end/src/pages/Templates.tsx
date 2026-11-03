import { useState } from "react";

import Header from "../components/Template/Header";
import Filters from "../components/Template/Filters";
import Grid from "../components/Template/Grid";
import CTA from "../components/Home/CTA";
import Footer from "../components/Home/Footer";

function Templates() {
  const [selectedCategory, setSelectedCategory] =
    useState("All Templates");

  const [searchQuery, setSearchQuery] = useState("");

  return (
    <main>
      <Header />

      <section className="bg-gray-50 px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <Filters
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
          />

          <Grid
            selectedCategory={selectedCategory}
            searchQuery={searchQuery}
          />
        </div>
      </section>
      <CTA />
      <Footer />
    </main>
  );
}

export default Templates;