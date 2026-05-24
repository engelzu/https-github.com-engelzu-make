import json
import os

with open("youtube_ids.json") as f:
    ids = json.load(f)

# Common images
images = [
    "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1512496115851-a1c8f137e4a4?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1500336624523-d727130c3328?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1512496115851-a1c8f137e4a4?auto=format&fit=crop&q=80",
]

days_name = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]

def generate_saude():
    code = 'import { SaudeDay } from "./types";\n\nexport const saudeData: SaudeDay[] = [\n'
    for i in range(7):
        code += f'''  {{
    id: {400 + i}, dayNumber: {i}, day: "{days_name[i]}",
    theme: "Bem-estar Diário", description: "Cuidar do corpo é cuidar da mente.",
    image: "{images[i]}",
    exercicio: {{
      videoId: "{ids['saude_exercicio'][i]}", duration: "10-15 min",
      steps: ["Aqueça o corpo levemente.", "Siga as instruções do vídeo com atenção.", "Respeite seu limite.", "Beba água ao finalizar."]
    }},
    alimentacao: {{
      videoId: "{ids['saude_alimentacao'][i]}", recipe: "Receita Fit Rápida",
      steps: ["Separe os ingredientes frescos.", "Siga o passo a passo da nutri.", "Aproveite sua refeição leve."]
    }},
    relaxamento: {{
      videoId: "{ids['saude_relaxamento'][i]}",
      steps: ["Encontre um local silencioso.", "Feche os olhos e respire fundo.", "Siga a meditação guiada.", "Retorne lentamente."]
    }}
  }},
'''
    code += "];\n"
    with open("lib/data-saude.ts", "w", encoding='utf-8') as f: f.write(code)

generate_saude()

def generate_pele():
    code = 'import { PeleDay } from "./types";\n\nexport const peleData: PeleDay[] = [\n'
    for i in range(7):
        code += f'''  {{
    id: {200 + i}, dayNumber: {i}, day: "{days_name[i]}",
    theme: "Pele Perfeita", description: "Sua rotina essencial de cuidados com a pele.",
    image: "{images[i]}",
    rotina: {{
      videoId: "1chqi-nkUuw", products: ["Sabonete Facial", "Tônico", "Hidratante", "Protetor Solar"],
      steps: ["Lave o rosto com sabonete.", "Aplique o tônico.", "Passe o hidratante.", "Finalize com protetor."]
    }},
    mascaras: {{
      videoId: "{ids['pele_mascaras'][i]}", products: ["Máscara Facial de Argila ou Tecido"],
      steps: ["Com o rosto limpo, aplique a máscara.", "Deixe agir conforme o vídeo.", "Remova e massageie o excesso."]
    }}
  }},
'''
    code += "];\n"
    with open("lib/data-pele.ts", "w", encoding='utf-8') as f: f.write(code)

generate_pele()

def generate_cabelo():
    code = 'import { CabeloDay } from "./types";\n\nexport const cabeloData: CabeloDay[] = [\n'
    for i in range(7):
        code += f'''  {{
    id: {300 + i}, dayNumber: {i}, day: "{days_name[i]}",
    theme: "Cabelos Deslumbrantes", description: "Penteados e tratamentos para arrasar.",
    image: "{images[i]}",
    penteado: {{
      videoId: "kG6jv-WSntY", products: ["Escova", "Elásticos", "Grampos", "Spray Fixador"],
      steps: ["Desembarace os fios.", "Siga o tutorial do vídeo.", "Use grampos para fixar.", "Finalize com spray."]
    }},
    tratamento: {{
      videoId: "{ids['cabelo_tratamento'][i]}", products: ["Máscara de Hidratação", "Óleo Capilar"],
      steps: ["Lave apenas com shampoo.", "Aplique o tratamento mecha a mecha.", "Aguarde o tempo de pausa e enxágue."]
    }}
  }},
'''
    code += "];\n"
    with open("lib/data-cabelo.ts", "w", encoding='utf-8') as f: f.write(code)

generate_cabelo()

print("Data generated")
