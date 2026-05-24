export function getWeekNumber(d: Date): number {
  d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
  d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay()||7));
  var yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
  var weekNo = Math.ceil(( ( (d.getTime() - yearStart.getTime()) / 86400000) + 1)/7);
  return weekNo;
}

function hashString(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return Math.abs(hash);
}

const makePool = [
  "A energia de hoje favorece um olhar marcante! Aposte em um delineado gatinho clássico com pele iluminada.",
  "Dia perfeito para usar aquele batom vermelho poderoso que você estava guardando. Ele vai atrair muita confiança.",
  "Aposte na leveza: uma make 'no-makeup' com bastante hidratante labial e blush pêssego vai ressaltar sua beleza natural.",
  "Os astros pedem brilho! Um pouco de iluminador nas têmporas e no cantinho interno do olho vai mudar seu dia.",
  "Hoje o foco é nos lábios. Um gloss com leve cor ou um batom em tom de boca vai equilibrar sua energia.",
  "Experimente esfumar uma sombra marrom quente. Isso trará profundidade ao olhar e combinará com seu mood do dia.",
  "Sobrancelhas bem penteadas e rímel volumoso são tudo que você precisa para arrasar hoje. Menos é mais!",
  "A sua aura está super criativa! Que tal testar um delineado colorido ou uma sombra em tom pastel?"
];

const corPool = [
  "Tons Nude e Terrosos estão em perfeita harmonia com sua energia. Nas unhas, aposte em um marrom café ou bege clássico.",
  "Vermelho Intenso! Pinte as unhas com essa cor para atrair poder, decisão e olhares por onde passar.",
  "Aposte em tons pastéis (lavanda, menta ou rosa bebê). Eles vão acalmar sua mente e deixar suas mãos delicadas.",
  "Preto ou Vinhos profundos são a escolha ideal para hoje. Eles refletem seu lado misterioso e sofisticado.",
  "Unhas com brilho, glitter ou efeito perolado vão refletir a luz e afastar energias negativas do seu dia.",
  "O Branco puríssimo ou Renda clássico é a melhor pedida para trazer paz e clareza para a sua semana.",
  "Que tal inovar com uma francesinha colorida ou invertida? Sua criatividade precisa de espaço para brilhar hoje.",
  "Tons de Azul marinho ou Verde escuro vão te dar a estabilidade e o foco que os astros pedem para o seu dia."
];

const lookPool = [
  "Conforto em primeiro lugar! Um look oversized ou de tecidos leves (como linho) vai te deixar livre para conquistar o dia.",
  "Aposte na alfaiataria desconstruída. Um blazer por cima de uma t-shirt básica vai te deixar chique sem esforço.",
  "Hoje o dia pede acessórios dourados e um look monocromático. O visual 'clean girl' vai elevar sua autoestima.",
  "Sua energia está super romântica. Peças com mangas bufantes, saias fluidas ou tons de rosa vão combinar com seu mood.",
  "O poder do Básico: Jeans de cintura alta e uma camiseta branca perfeita. O charme ficará nos seus acessórios!",
  "Dia perfeito para usar aquele look mais ousado e estruturado que está no armário. Mostre ao mundo sua força.",
  "Aposte na combinação de Preto e Branco. A dualidade clássica vai equilibrar as emoções do seu dia perfeitamente.",
  "Use camadas! Uma sobreposição inteligente (como um tricot sobre uma camisa) vai adicionar informação de moda ao seu dia."
];

export function getHoroscopeForSign(sign: string, dayNumber: number) {
  const now = new Date();
  const week = getWeekNumber(now);
  const year = now.getFullYear();
  
  // Seed uses Year, Week, Sign and Day Number so it's stable for the whole day, but changes every week!
  const baseSeed = `${year}-W${week}-${sign}-${dayNumber}`;
  
  const makeIdx = hashString(baseSeed + "-make") % makePool.length;
  const corIdx = hashString(baseSeed + "-cor") % corPool.length;
  const lookIdx = hashString(baseSeed + "-look") % lookPool.length;

  return {
    make: makePool[makeIdx],
    cor: corPool[corIdx],
    look: lookPool[lookIdx]
  };
}
