import json
import random

days = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]
signs = [
    "Áries", "Touro", "Gêmeos", "Câncer", "Leão", "Virgem", 
    "Libra", "Escorpião", "Sagitário", "Capricórnio", "Aquário", "Peixes"
]

images = [
    "https://images.unsplash.com/photo-1532968961962-8a0cb3a2d4f5?q=80&w=800&auto=format&fit=crop", 
    "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=800&auto=format&fit=crop", 
    "https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?q=80&w=800&auto=format&fit=crop", 
    "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=800&auto=format&fit=crop", 
    "https://images.unsplash.com/photo-1537420327992-d6e192287183?q=80&w=800&auto=format&fit=crop", 
    "https://images.unsplash.com/photo-1505506874110-6a7a6c9924cb?q=80&w=800&auto=format&fit=crop", 
    "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?q=80&w=800&auto=format&fit=crop"  
]

themes = [
    "Energia do Sol", "Intuição Lunar", "Ação e Coragem", "Mente Clara", 
    "Expansão", "Beleza e Amor", "Estrutura e Foco"
]

amor_pool = [
    "Um clima de paixão intensa domina o dia. Esteja aberta a novas conexões.",
    "Comunicação é tudo. Fale sobre seus sentimentos de forma clara.",
    "Dia perfeito para surpreender quem você ama com um pequeno gesto.",
    "O romantismo está no ar. Aproveite para um jantar a dois.",
    "Se solteira, seu magnetismo atrairá olhares curiosos. Aproveite!",
    "Paciência no amor. Nem tudo acontece no seu tempo.",
    "Cuidado com o ciúme bobo. Confiança é a base de tudo hoje."
]

saude_pool = [
    "Sua energia física está alta. Ideal para esportes mais intensos.",
    "A mente precisa de descanso. Meditação ou leitura farão muito bem.",
    "Beba muita água e evite alimentos pesados no jantar.",
    "Cuidado com a postura ao longo do dia. Faça alongamentos.",
    "Ótimo dia para cuidar da estética: pele, cabelos ou unhas.",
    "Respeite os limites do seu corpo. Descanse um pouco mais hoje.",
    "Atividades ao ar livre vão renovar suas energias e melhorar o humor."
]

prof_pool = [
    "Excelente momento para liderar projetos e dar ideias criativas.",
    "Trabalho em equipe é a chave hoje. Evite atritos desnecessários.",
    "Sua organização vai te salvar de esquecer um prazo importante.",
    "Foco no lado financeiro. Cuidado com gastos impulsivos.",
    "Ousadia nas negociações. Boas chances de sucesso em acordos.",
    "Uma novidade no trabalho pode mudar o rumo da sua semana.",
    "Sua disciplina chamará a atenção de superiores. Continue assim."
]

out = 'import { HoroscopoDay } from "./types";\\n\\nexport const horoscopoData: HoroscopoDay[] = [\\n'

for day_idx in range(7):
    out += f"""  {{
    id: {500 + day_idx},
    dayNumber: {day_idx},
    day: "{days[day_idx]}",
    theme: "{themes[day_idx]}",
    description: "Confira as previsões exclusivas para o seu signo nesta {days[day_idx]}.",
    image: "{images[day_idx]}",
    signs: {{
"""
    for sign in signs:
        a = random.choice(amor_pool)
        s = random.choice(saude_pool)
        p = random.choice(prof_pool)
        out += f"""      "{sign}": {{
        name: "{sign}",
        amor: "{a}",
        saude: "{s}",
        profissional: "{p}"
      }},
"""
    out += "    }\n  },\n"

out += "];\\n"

with open("lib/data-horoscopo.ts", "w", encoding="utf-8") as f:
    f.write(out.replace('\\n', '\n'))
print("Gerado.")
