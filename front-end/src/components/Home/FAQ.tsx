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
    <section className="bg-white px-6 py-20 md:py-28">
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-rose-500">
            FAQ
          </span>

          <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
            Frequently Asked Questions
          </h2>

          <p className="mt-4 leading-7 text-gray-500">
            Temukan jawaban dari beberapa pertanyaan yang sering diajukan
            mengenai layanan Wedly.
          </p>
        </div>

        {/* Accordion */}
        <div className="divide-y divide-gray-200 border-y border-gray-200">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <div key={index} className="py-5">
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 text-left"
                >
                  <span className="font-semibold text-gray-900 transition hover:text-rose-500">
                    {faq.question}
                  </span>

                  <ChevronDown
                    size={20}
                    className={`shrink-0 text-gray-500 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <p className="mt-4 pr-8 text-sm leading-7 text-gray-500">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FAQ;