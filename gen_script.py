import json

amor_pool = [
    "Um clima de paixão intensa domina a semana. Esteja aberta a novas conexões.",
    "Comunicação é tudo. Fale sobre seus sentimentos de forma clara para evitar mal-entendidos.",
    "Semana perfeita para surpreender quem você ama com um pequeno gesto romântico.",
    "O romantismo está no ar. Aproveite para planejar um jantar a dois.",
    "Se solteira, seu magnetismo atrairá olhares curiosos. Aproveite a fase!",
    "Paciência no amor. Nem tudo acontece no seu tempo, deixe as coisas fluírem.",
    "Cuidado com o ciúme bobo. A confiança deve ser a base de tudo nesta semana.",
    "As estrelas favorecem encontros casuais que podem virar algo sério.",
    "Momento de focar no amor próprio antes de buscar a aprovação do outro.",
    "Uma mensagem inesperada pode reacender uma velha chama.",
    "A intimidade do casal ganha um novo fôlego. Aproveite os momentos a sós.",
    "Seja menos exigente com o parceiro e tente focar nas qualidades dele.",
    "Sua sedução está em alta! Use seu charme para conquistar o que deseja.",
    "Evite discutir a relação por motivos banais. Foque na harmonia.",
    "Novos ciclos se abrem no amor. Deixe o passado para trás definitivamente."
]

saude_pool = [
    "Sua energia física está alta. Ideal para começar uma nova modalidade de esportes.",
    "A mente precisa de descanso urgente. Meditação ou leitura farão muito bem.",
    "Beba muita água e evite alimentos pesados, principalmente no jantar.",
    "Cuidado com a postura ao longo da semana. Faça alongamentos diários.",
    "Ótima semana para cuidar da estética: agende aquele tratamento de pele ou cabelo.",
    "Respeite os limites do seu corpo. Descanse um pouco mais do que o habitual.",
    "Atividades ao ar livre vão renovar suas energias e espantar o estresse.",
    "Atenção à sua imunidade. Inclua mais vitaminas e sucos naturais na dieta.",
    "Dormir bem será o seu melhor remédio esta semana. Evite telas antes de deitar.",
    "Corte os excessos de açúcar. Seu corpo vai agradecer a leveza.",
    "Uma caminhada leve de 30 minutos pode mudar completamente o seu humor.",
    "Cuidado com a ansiedade. Tente focar apenas no momento presente.",
    "Sua vitalidade impressionará a todos. Use essa energia para se movimentar.",
    "Faça exames de rotina se algo estiver incomodando. Não ignore os sinais.",
    "A saúde mental pede prioridade. Tire um tempo apenas para você e seus hobbies."
]

prof_pool = [
    "Excelente momento para liderar projetos e dar ideias criativas nas reuniões.",
    "Trabalho em equipe é a chave agora. Evite atritos desnecessários com colegas.",
    "Sua organização rigorosa vai te salvar de esquecer um prazo importante.",
    "Foco absoluto no lado financeiro. Cuidado redobrado com gastos impulsivos.",
    "Ousadia nas negociações. Boas chances de sucesso em acordos comerciais.",
    "Uma novidade inesperada no trabalho pode mudar o rumo da sua carreira.",
    "Sua disciplina chamará a atenção de superiores. Continue mostrando serviço.",
    "Não tenha medo de pedir ajuda se estiver sobrecarregada de tarefas.",
    "Semana favorável para buscar cursos de especialização ou novos conhecimentos.",
    "Cuidado com fofocas no ambiente de trabalho. Mantenha a discrição.",
    "Uma oportunidade de renda extra pode surgir de onde você menos espera.",
    "Momento ideal para atualizar seu currículo e seu perfil no LinkedIn.",
    "Paciência com a burocracia. Algumas coisas demoram mais do que gostaríamos.",
    "Seja ousada e apresente aquele projeto engavetado. As chances de aprovação são altas.",
    "Evite misturar problemas pessoais com as demandas profissionais nesta semana."
]

out = """export function getWeekNumber(d: Date): number {
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

const amorPool = """ + json.dumps(amor_pool) + """;
const saudePool = """ + json.dumps(saude_pool) + """;
const profPool = """ + json.dumps(prof_pool) + """;

export function getHoroscopeForSign(sign: string, dayNumber: number) {
  const now = new Date();
  const week = getWeekNumber(now);
  const year = now.getFullYear();
  
  // Seed uses Year, Week, Sign and Day Number so it's stable for the whole day, but changes every week!
  const baseSeed = `${year}-W${week}-${sign}-${dayNumber}`;
  
  const amorIdx = hashString(baseSeed + "-amor") % amorPool.length;
  const saudeIdx = hashString(baseSeed + "-saude") % saudePool.length;
  const profIdx = hashString(baseSeed + "-prof") % profPool.length;

  return {
    amor: amorPool[amorIdx],
    saude: saudePool[saudeIdx],
    profissional: profPool[profIdx]
  };
}
"""

with open("lib/horoscope-generator.ts", "w", encoding="utf-8") as f:
    f.write(out)
print("Gerador criado.")
