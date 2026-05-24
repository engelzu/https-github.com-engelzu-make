export type DailyCategoryBase = {
  id: number;
  dayNumber: number;
  day: string;
  theme: string;
  description: string;
  image: string;
};

export type BelezaDay = DailyCategoryBase & {
  videoId: string;
  steps: string[];
  products: string[];
  outfitColors: string[];
  nails: {
    suggestion: string;
    palette: string[];
  };
};

export type PeleDay = DailyCategoryBase & {
  rotina: { videoId: string; steps: string[]; products: string[] };
  mascaras: { videoId: string; steps: string[]; products: string[] };
};

export type CabeloDay = DailyCategoryBase & {
  penteado: { videoId: string; steps: string[]; products: string[] };
  tratamento: { videoId: string; steps: string[]; products: string[] };
};

export type SaudeDay = DailyCategoryBase & {
  exercicio: { videoId: string; steps: string[]; duration: string };
  alimentacao: { videoId: string; steps: string[]; recipe: string };
  relaxamento: { videoId: string; steps: string[] };
};

export type ZodiacSign = {
  name: string;
  amor: string;
  saude: string;
  profissional: string;
};

export type HoroscopoDay = DailyCategoryBase & {
  signs: Record<string, ZodiacSign>;
};

export type AppData = {
  beleza: BelezaDay[];
  pele: PeleDay[];
  cabelo: CabeloDay[];
  saude: SaudeDay[];
};
