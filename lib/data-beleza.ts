export type SkincareRoutine = {
  theme: string;
  description: string;
  steps: string[];
  videoId: string;
};

export type HairRoutine = {
  theme: string;
  description: string;
  steps: string[];
  videoId: string;
};

export type NailRoutine = {
  suggestion: string;
  palette: string[]; // hex codes for the palette modal
};

export type MakeupDay = {
  id: number;
  dayNumber: number; // 0 = Sunday, 1 = Monday, etc. matching JS Date.getDay()
  day: string;
  theme: string;
  description: string;
  steps: string[];
  products: string[];
  image: string;
  videoId: string;
  skincare: SkincareRoutine;
  hair: HairRoutine;
  nails: NailRoutine;
  outfitColors: string[]; // array of hex codes
};

import { BelezaDay } from './types';
export const belezaData: BelezaDay[] = [
  {
    id: 1,
    dayNumber: 1,
    day: "Segunda",
    theme: "Fresh & Natural",
    description:
      "Comece a semana com uma pele leve e viçosa. O foco é uma aparência descansada para o trabalho ou estudos, sem muito esforço.",
    steps: [
      "Limpe a pele e aplique um hidratante facial leve acompanhado de protetor solar.",
      "Espalhe um BB Cream ou base de cobertura bem leve usando os dedos ou esponjinha.",
      "Aplique um corretivo do tom da sua pele nas olheiras e manchinhas, dando batidinhas suaves.",
      "Passe um blush rosado (cremoso ou em pó) as maçãs do rosto para dar um 'ar de saúde'.",
      "Use curvex e aplique máscara de cílios apenas nos cílios superiores.",
      "Finalize com um protetor labial (lip balm) com uma corzinha sutil.",
    ],
    products: [
      "Hidratante e Protetor Solar",
      "BB Cream ou base leve",
      "Corretivo",
      "Blush rosado",
      "Máscara de cílios",
      "Lip Balm tint",
    ],
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
    videoId: "Or3g7zLfnzI",
    nails: {
      suggestion: "Nude Clássico + Tons do Look",
      palette: ["#F5F5DC", "#000000", "#D2B48C", "#FDF5E6", "#FAEBD7", "#FFE4C4", "#BC8F8F", "#E6E6FA", "#FFF0F5", "#FFE4E1", "#FFC0CB", "#CD853F"]
    },
    outfitColors: ["#F5F5DC", "#000000", "#D2B48C"] // Beige, Black, Tan
  },
  {
    id: 2,
    dayNumber: 2,
    day: "Terça",
    theme: "Glow Clássico",
    description:
      "Mais energia para a terça-feira! Uma pele iluminada e um olhar um pouco mais definido para encarar a rotina.",
    steps: [
      "Após hidratar, aplique uma base de cobertura média com o auxílio de um pincel ou esponja úmida.",
      "Sele apenas a zona T (testa, nariz e queixo) com um pó solto para evitar brilho indesejado.",
      "Aplique um pouco de bronzer abaixo das maçãs do rosto e nas têmporas.",
      "Adicione um iluminador champagne nos pontos altos (arquinho do cupido, ponta do nariz e têmporas).",
      "Penteie as sobrancelhas para cima e preencha falhas levemente com um lápis próprio.",
      "Passe batom nude rosado nos lábios.",
    ],
    products: [
      "Base líquida",
      "Pó facial solto",
      "Pó bronzeador",
      "Iluminador",
      "Lápis para sobrancelha",
      "Batom nude",
    ],
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop",
    videoId: "h5oL9guio7s",
    nails: {
      suggestion: "Vermelho + Tons Marinhos",
      palette: ["#FFFFFF", "#1E3A8A", "#E11D48", "#FF0000", "#DC143C", "#B22222", "#0F172A", "#3B82F6", "#FA8072", "#E9967A", "#FFA07A", "#800000"]
    },
    outfitColors: ["#FFFFFF", "#1E3A8A", "#E11D48"] // White, Navy Blue, Rose Red
  },
  {
    id: 3,
    dayNumber: 3,
    day: "Quarta",
    theme: "Foco no Olhar",
    description:
      "Metade da semana pede um toque extra para levantar o visual. O destaque de hoje vai para os olhos com um delineado.",
    steps: [
      "Faça a preparação de pele rotineira de sua preferência.",
      "Aplique uma sombra marrom clarinha e opaca em toda a pálpebra móvel para dar profundidade.",
      "Faça um delineado fino rente aos cílios com um lápis marrom ou preto, esfumando levemente o 'gatinho'.",
      "Aplique camadas generosas de máscara de cílios em cima e embaixo.",
      "Mantenha o resto do rosto neutro com um blush pêssego.",
      "Para os lábios, um lip tint ou gloss.",
    ],
    products: [
      "Sombra marrom opaca",
      "Lápis de olho marrom ou delineador",
      "Máscara de cílios poderosa",
      "Blush tom pêssego",
      "Lip tint ou Gloss",
    ],
    image:
      "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?q=80&w=800&auto=format&fit=crop",
    videoId: "pLOfS3ruQmQ",
    nails: {
      suggestion: "Lavanda + Cinza Elegante",
      palette: ["#D8B4E2", "#4B5563", "#F3F4F6", "#E6E6FA", "#DDA0DD", "#EE82EE", "#6B7280", "#9CA3AF", "#BA55D3", "#9370DB", "#8A2BE2", "#9400D3"]
    },
    outfitColors: ["#D8B4E2", "#4B5563", "#F3F4F6"] // Lavender, Gray, Off-white
  },
  {
    id: 4,
    dayNumber: 4,
    day: "Quinta",
    theme: "Make Express",
    description:
      "A semana está voando e a quinta pede praticidade. Uma rotina de 5 minutos perfeita para dias corridos, focando na cor dos lábios.",
    steps: [
      "Pule a base e vá direto para o corretivo nas áreas necessárias (olhares, laterais do nariz, manchinhas).",
      "Use um produto multifuncional (lip e cheek tint) como blush nas bochechas.",
      "Aplique o mesmo tint nos lábios para um toque de cor duradouro ou aplique um batom vermelho aberto/coral esfumado com o dedo.",
      "Penteie as sobrancelhas com um gel incolor.",
      "Uma camada rápida de máscara de cílios já faz toda a diferença.",
    ],
    products: [
      "Corretivo de alta cobertura",
      "Produto multifuncional (Tint/Bastão) para bochecha e lábios",
      "Gel de sobrancelha",
      "Máscara de cílios",
    ],
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop",
    videoId: "KcNAZSRGNwQ",
    nails: {
      suggestion: "Vinho + Amarelo Destaque",
      palette: ["#7F1D1D", "#FDE047", "#000000", "#722F37", "#58111A", "#800020", "#EAB308", "#CA8A04", "#4E070C", "#900020", "#8B0000", "#B22222"]
    },
    outfitColors: ["#7F1D1D", "#FDE047", "#000000"] // Dark Red, Yellow, Black
  },
  {
    id: 5,
    dayNumber: 5,
    day: "Sexta",
    theme: "Sextou com Glam",
    description:
      "Hoje a make pode transitar facilmente do trabalho para o Happy Hour. Mais intensidade e durabilidade.",
    steps: [
      "Use um primer matificante ou hidratante dependendo do seu tipo de pele antes da base.",
      "Aplique sua base e corretivo favoritos, caprichando na zona dos olhos.",
      "Faça um contorno suave e adicione iluminador estrategicamente.",
      "Nos olhos, aplique uma sombra cintilante champanhe ou dourada em toda pálpebra com os dedos.",
      "Capriche no delineado (pode ser o clássico gatinho com delineador líquido).",
      "Use um batom marcante se preferir (vinho, vermelho clássico ou um marrom quente).",
    ],
    products: [
      "Primer",
      "Sombra cintilante uni-cor",
      "Delineador líquido ou em caneta",
      "Batom escuro ou marcante",
      "Iluminador e contorno",
    ],
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800&auto=format&fit=crop",
    videoId: "JPXrHeEpZXU",
    nails: {
      suggestion: "Preto Brilhante + Prata",
      palette: ["#000000", "#C0C0C0", "#0284C7", "#1C1C1C", "#A9A9A9", "#708090", "#38BDF8", "#0EA5E9", "#191970", "#4B0082", "#2E0854", "#414A4C"]
    },
    outfitColors: ["#000000", "#C0C0C0", "#0284C7"] // Black, Silver, Light Blue
  },
  {
    id: 6,
    dayNumber: 6,
    day: "Sábado",
    theme: "Poderosa & Noturna",
    description:
      "Dia ideal para ousar um pouco mais, seja para um passeio de tarde longo ou uma saída a noite. Brilho e definição.",
    steps: [
      "Faça a preparação de pele mais elaborada (Base + Corretivo + Contorno).",
      "Construa um esfumado marrom quente no côncavo e no canto externo dos olhos.",
      "Aplique uma sombra com muito brilho (glitter prensado) no centro da pálpebra.",
      "Esfume sombra preta rente aos cílios para substituir o delineador de forma difusa.",
      "Ilumine abaixo da sobrancelha e canto interno.",
      "Finalize com um contorno labial e um batom que combine com o esfumado.",
    ],
    products: [
      "Paleta de sombras (tons terrosos e brilhantes)",
      "Pincéis de esfumar",
      "Lápis labial / Batom líquido",
      "Esponja de maquiagem",
    ],
    image:
      "https://images.unsplash.com/photo-1485230405346-71acb9518d9c?q=80&w=800&auto=format&fit=crop",
    videoId: "lxb6J2V4l_0",
    nails: {
      suggestion: "Branco Leitoso + Pink",
      palette: ["#FFFFFF", "#000000", "#F43F5E", "#FFFAFA", "#F0FFF0", "#F5FFFA", "#FB7185", "#E11D48", "#BE123C", "#F5F5F5", "#FFF5EE", "#FFFAF0"]
    },
    outfitColors: ["#FFFFFF", "#000000", "#F43F5E"] // White, Black, Pink
  },
  {
    id: 7,
    dayNumber: 0,
    day: "Domingo",
    theme: "Skincare & No-Makeup",
    description:
      "Aproveite para cuidar da pele! A maquiagem de domingo é para se sentir fresca após um banho demorado.",
    steps: [
      "Lave o rosto com um gel de limpeza e aplique uma máscara fácil hidratante por 15min (opcional).",
      "Passe seu melhor hidratante, massageando o rosto para melhorar a circulação.",
      "Aplique apenas protetor solar com cor (dispensa base).",
      "Dê batidinhas com um blush muito leve e natural.",
      "Apenas curve os cílios, dispensando rímel escuro.",
      "Hidrate bem os lábios com óleo labial (lip oil) ou manteiga de cacau grossa.",
    ],
    products: [
      "Mascara e hidratantes faciais",
      "Protetor Solar com cor",
      "Lip Oil transparente",
      "Curvex (apenas ferramenta)",
    ],
    image:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=800&auto=format&fit=crop",
    videoId: "yty0tqKeIGQ",
    nails: {
      suggestion: "Tons Pastéis do Domingo",
      palette: ["#D1D5DB", "#A7F3D0", "#FEF3C7", "#9CA3AF", "#6EE7B7", "#FDE68A", "#E5E7EB", "#D1FAE5", "#FEF08A", "#F3F4F6", "#ECFDF5", "#FEF9C3"]
    },
    outfitColors: ["#D1D5DB", "#A7F3D0", "#FEF3C7"] // Light Gray, Mint, Pastel Yellow
  },
];
