export interface Template {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  background: string;
  accent: string;
  features: string[];
}

export const templates: Template[] = [
  {
    id: "eternal-love",
    name: "Eternal Love",
    category: "Elegant",
    price: 99000,
    description: "Desain elegan dengan sentuhan klasik dan warna hangat.",
    background: "linear-gradient(135deg, #e8d8c8, #b99b83)",
    accent: "#795b48",
    features: [
      "Responsive Design",
      "Wedding Gallery",
      "Event Information",
      "Digital RSVP",
    ],
  },
  {
    id: "modern-romance",
    name: "Modern Romance",
    category: "Modern",
    price: 89000,
    description: "Desain modern dengan tampilan minimalis dan romantis.",
    background: "linear-gradient(135deg, #e8c8c8, #c58d98)",
    accent: "#9b5265",
    features: [
      "Responsive Design",
      "Wedding Gallery",
      "Event Information",
      "Digital RSVP",
    ],
  },
  {
    id: "pure-minimalist",
    name: "Pure Minimalist",
    category: "Minimalist",
    price: 79000,
    description: "Desain sederhana dengan tampilan bersih dan modern.",
    background: "linear-gradient(135deg, #dce3d5, #a7b79b)",
    accent: "#61745b",
    features: [
      "Responsive Design",
      "Wedding Gallery",
      "Event Information",
      "Digital RSVP",
    ],
  },
  {
    id: "blooming-love",
    name: "Blooming Love",
    category: "Floral",
    price: 95000,
    description: "Desain romantis dengan nuansa bunga yang lembut.",
    background: "linear-gradient(135deg, #f2dce2, #d6a6b5)",
    accent: "#a45d77",
    features: [
      "Responsive Design",
      "Wedding Gallery",
      "Event Information",
      "Digital RSVP",
    ],
  },
];