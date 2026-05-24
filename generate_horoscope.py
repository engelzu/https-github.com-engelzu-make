import json

days_name = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]

themes = [
    "Energia Solar",
    "Influência Lunar",
    "Força de Marte",
    "Comunicação de Mercúrio",
    "Expansão de Júpiter",
    "Vibração de Vênus",
    "Estrutura de Saturno"
]

descriptions = [
    "O domingo é regido pelo Sol. Um dia para brilhar, recarregar as energias e focar na sua essência e vitalidade.",
    "A segunda-feira é regida pela Lua. As emoções e a intuição estão em alta. Ouça sua voz interior.",
    "A terça-feira traz a energia de Marte. Um dia de pura ação, coragem e superação de obstáculos.",
    "Regida por Mercúrio, a quarta-feira favorece os contatos, o aprendizado e a agilidade mental.",
    "A quinta-feira tem a sorte de Júpiter. Dia de otimismo, abundância e grandes planos para o futuro.",
    "A sexta-feira respira a energia de Vênus. O foco vai para o amor, a beleza, a arte e os prazeres da vida.",
    "O sábado é o dia de Saturno. Ideal para organização, responsabilidade e consolidação de projetos."
]

amor = [
    "A energia solar traz calor para os relacionamentos. Seja generosa, demonstre carinho e reserve um momento a dois. Solteiras irradiam magnetismo pessoal.",
    "Sua sensibilidade está aflorada. Acolha as necessidades emocionais do parceiro. Se estiver solteira, busque conexões profundas e evite atitudes superficiais.",
    "A paixão está no ar! Marte traz audácia e desejo. Tome a iniciativa na paquera ou apimente a rotina do relacionamento. Cuidado apenas com a impaciência.",
    "O diálogo é a chave. Aproveite a clareza mental para conversar sobre o futuro da relação. Para os solteiros, flertes virtuais e boas conversas fluem bem.",
    "Dia excelente para planejar o futuro a dois, como uma viagem ou um novo passo na relação. Solteiros têm grandes chances de conhecer pessoas animadas.",
    "Vênus favorece o romance total. Surpreenda com um jantar ou um gesto romântico. Solteiras estão com a sedução no nível máximo. Vista-se para arrasar!",
    "Os relacionamentos pedem seriedade e compromisso. Demonstre que você é um porto seguro. Solteiras preferirão pessoas maduras e com planos concretos."
]

saude = [
    "Ótimo dia para atividades ao ar livre. O contato com a luz solar repõe sua vitamina D e eleva o humor.",
    "Priorize o equilíbrio emocional. Práticas como yoga, meditação ou um banho relaxante são essenciais hoje.",
    "Gaste a energia acumulada com exercícios intensos! Uma corrida ou treino de força ajudarão a liberar o estresse.",
    "Cuide do sistema nervoso e respiratório. Alongamentos e exercícios de respiração profunda (pranayama) são recomendados.",
    "Cuidado com os excessos alimentares, pois Júpiter expande o apetite. Busque caminhadas leves ou esportes em grupo.",
    "A saúde pede cuidados estéticos e de relaxamento. Massagens e skincare farão bem ao corpo e à autoestima.",
    "Atenção à postura, ossos e articulações. Exercícios de baixo impacto, como pilates, são a melhor escolha de hoje."
]

profissional = [
    "Use a criatividade para planejar a semana. Você está em destaque, então aproveite para organizar suas metas de liderança.",
    "Sua intuição será sua melhor ferramenta para resolver problemas no trabalho. Tenha empatia ao lidar com colegas.",
    "Foco e determinação! Enfrente as tarefas mais difíceis da semana hoje. Sua capacidade de execução está imbatível.",
    "Dia perfeito para reuniões, assinaturas de contratos, envio de e-mails importantes e negociações. A comunicação flui.",
    "Otimismo e crescimento marcam o dia. Bom momento para pedir um aumento, apresentar novos projetos ou buscar parcerias.",
    "O clima no trabalho tende a ser harmonioso. Aposte no trabalho em equipe e no bom relacionamento com os colegas.",
    "Coloque a vida financeira em ordem. Dia perfeito para planejamento a longo prazo, análise de planilhas e fechamento de pendências."
]

images = [
    "https://images.unsplash.com/photo-1532968961962-8a0cb3a2d4f5?q=80&w=800&auto=format&fit=crop", # Sun/Astrology
    "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=800&auto=format&fit=crop", # Moon
    "https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?q=80&w=800&auto=format&fit=crop", # Mars/Fire
    "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=800&auto=format&fit=crop", # Galaxy/Mercury
    "https://images.unsplash.com/photo-1537420327992-d6e192287183?q=80&w=800&auto=format&fit=crop", # Jupiter/Space
    "https://images.unsplash.com/photo-1505506874110-6a7a6c9924cb?q=80&w=800&auto=format&fit=crop", # Venus/Beautiful sky
    "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?q=80&w=800&auto=format&fit=crop"  # Saturn
]

code = 'import { HoroscopoDay } from "./types";\\n\\nexport const horoscopoData: HoroscopoDay[] = [\\n'

for i in range(7):
    code += f"""  {{
    id: {500 + i}, dayNumber: {i}, day: "{days_name[i]}",
    theme: "{themes[i]}",
    description: "{descriptions[i]}",
    image: "{images[i]}",
    amor: "{amor[i]}",
    saude: "{saude[i]}",
    profissional: "{profissional[i]}"
  }},
"""
code += "];\\n"

with open("lib/data-horoscopo.ts", "w", encoding='utf-8') as f:
    f.write(code.replace('\\n', '\n'))
print("Done")
