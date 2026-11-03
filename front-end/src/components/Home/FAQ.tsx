
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Apa itu Wedly?",
    answer:
      "Wedly adalah platform undangan pernikahan digital yang memungkinkan kamu memilih, menyesuaikan, dan membagikan undangan pernikahan secara online.",
  },
  {
    question: "Bagaimana cara membuat undangan di Wedly?",
    answer:
      "Pilih template yang kamu sukai, lakukan pembelian, kemudian sesuaikan informasi pernikahan seperti nama pasangan, tanggal, lokasi, dan foto.",
  },
  {
    question: "Apakah saya bisa mengubah desain template?",
    answer:
      "Kamu dapat menyesuaikan bagian-bagian yang disediakan oleh template, seperti informasi pasangan, foto, warna, dan elemen desain tertentu.",
  },
  {
    question: "Bagaimana cara membagikan undangan?",
    answer:
      "Setelah undangan selesai dibuat, kamu dapat membagikan tautan undangan kepada keluarga, teman, dan tamu undangan melalui WhatsApp atau media sosial lainnya.",
  },
  {
    question: "Apakah undangan bisa dibuka melalui smartphone?",
    answer:
      "Ya. Undangan Wedly dirancang agar dapat diakses melalui berbagai perangkat, termasuk smartphone, tablet, dan komputer.",
  },
];

function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative overflow-hidden border-t border-[#F6E8E9] bg-[#FFFDFC] px-8 py-20 sm:px-10 md:px-12 md:py-24 lg:px-16 xl:px-20 2xl:px-24">
      {/* Background Decoration */}
      <div className="pointer-events-none absolute -right-40 top-10 h-[350px] w-[350px] rounded-full bg-[#F8DDE2]/30 blur-3xl" />

      <div className="relative mx-auto max-w-[1600px]">
        {/* Header */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#C9798B]">
            <span className="h-px w-7 bg-[#E9A5B2]" />
            FAQ
            <span className="h-px w-7 bg-[#E9A5B2]" />
          </span>

          <h2 className="mt-4 font-serif text-4xl leading-tight tracking-tight text-[#72545B] md:text-5xl">
            Everything You Need
            <span className="block italic text-[#D98E9E]">
              to Know About Wedly.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-[#806D70] md:text-lg">
            Punya pertanyaan sebelum membuat undangan?
            Temukan informasi yang kamu butuhkan di sini.
          </p>
        </div>

        {/* Accordion */}
        <div className="mx-auto max-w-3xl border-y border-[#F0D9DE]">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={index}
                className="border-b border-[#F6E8E9] last:border-b-0"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="group flex w-full items-center justify-between gap-5 py-6 text-left"
                >
                  <div className="flex items-center gap-5">
                    <span className="hidden font-serif text-sm italic text-[#D9A4AE] sm:block">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span
                      className={`text-base font-medium transition-colors duration-300 md:text-lg ${
                        isOpen
                          ? "text-[#C9798B]"
                          : "text-[#72545B] group-hover:text-[#C9798B]"
                      }`}
                    >
                      {faq.question}
                    </span>
                  </div>

                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                      isOpen
                        ? "rotate-180 border-[#E9A5B2] bg-[#FFF1F3] text-[#C9798B]"
                        : "border-[#F0D9DE] text-[#A38D91] group-hover:border-[#E9A5B2] group-hover:text-[#C9798B]"
                    }`}
                  >
                    <ChevronDown size={18} />
                  </span>
                </button>

                {/* Answer */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-2xl pb-6 pl-0 text-sm leading-8 text-[#806D70] sm:pl-10 md:text-base">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
