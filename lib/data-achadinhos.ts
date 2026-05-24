export type Achadinho = {
  id: number;
  theme: string;
  description: string;
  dayNumber: number;
  day: string;
  image: string;
  highEnd: {
    name: string;
    brand: string;
    price: string;
    image: string;
  };
  drugstore: {
    name: string;
    brand: string;
    price: string;
    image: string;
  };
};

export const achadinhosData: Achadinho[] = [
  {
    id: 900, dayNumber: 0, day: "Domingo",
    theme: "Base Matte Impecável", description: "O mesmo acabamento aveludado por uma fração do preço.",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=800&auto=format&fit=crop",
    highEnd: { name: "Double Wear", brand: "Estée Lauder", price: "", image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=400&auto=format&fit=crop" },
    drugstore: { name: "ColorStay Matte", brand: "Revlon", price: "", image: "https://images.unsplash.com/photo-1599305090598-fe179d501227?q=80&w=400&auto=format&fit=crop" }
  },
  {
    id: 901, dayNumber: 1, day: "Segunda",
    theme: "Glow Líquido", description: "Iluminador que derrete na pele.",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=800&auto=format&fit=crop",
    highEnd: { name: "Hollywood Flawless", brand: "Charlotte Tilbury", price: "", image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=400&auto=format&fit=crop" },
    drugstore: { name: "Halo Glow", brand: "e.l.f.", price: "", image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=400&auto=format&fit=crop" }
  },
  {
    id: 902, dayNumber: 2, day: "Terça",
    theme: "Corretivo de Alta Cobertura", description: "Esconde tudo de forma impecável.",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=800&auto=format&fit=crop",
    highEnd: { name: "Shape Tape", brand: "Tarte", price: "", image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=400&auto=format&fit=crop" },
    drugstore: { name: "Instant Age Rewind", brand: "Maybelline", price: "", image: "https://images.unsplash.com/photo-1631214500115-598fc2cb8d2d?q=80&w=400&auto=format&fit=crop" }
  },
  {
    id: 903, dayNumber: 3, day: "Quarta",
    theme: "Batom Vermelho Clássico", description: "Cores intensas que duram o dia todo.",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=800&auto=format&fit=crop",
    highEnd: { name: "Ruby Woo", brand: "MAC", price: "", image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=400&auto=format&fit=crop" },
    drugstore: { name: "Batom SuperStay", brand: "Maybelline", price: "", image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=400&auto=format&fit=crop" }
  },
  {
    id: 904, dayNumber: 4, day: "Quinta",
    theme: "Blush Cremoso", description: "Bochechas coradas com textura natural.",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=800&auto=format&fit=crop",
    highEnd: { name: "Soft Pinch", brand: "Rare Beauty", price: "", image: "https://images.unsplash.com/photo-1599305090598-fe179d501227?q=80&w=400&auto=format&fit=crop" },
    drugstore: { name: "Cheek Kiss", brand: "Milani", price: "", image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=400&auto=format&fit=crop" }
  },
  {
    id: 905, dayNumber: 5, day: "Sexta",
    theme: "Spray Fixador", description: "Segura a maquiagem para o fim de semana inteiro.",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=800&auto=format&fit=crop",
    highEnd: { name: "All Nighter", brand: "Urban Decay", price: "", image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=400&auto=format&fit=crop" },
    drugstore: { name: "Make It Last", brand: "Milani", price: "", image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=400&auto=format&fit=crop" }
  },
  {
    id: 906, dayNumber: 6, day: "Sábado",
    theme: "Pó Solto Translúcido", description: "Pele aveludada sem flash-back.",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=800&auto=format&fit=crop",
    highEnd: { name: "Translucent Powder", brand: "Laura Mercier", price: "", image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=400&auto=format&fit=crop" },
    drugstore: { name: "Fit Me Powder", brand: "Maybelline", price: "", image: "https://images.unsplash.com/photo-1631214500115-598fc2cb8d2d?q=80&w=400&auto=format&fit=crop" }
  }
];
