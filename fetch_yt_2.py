import urllib.request
import re
import urllib.parse
import json

def search(q):
    try:
        url = 'https://www.youtube.com/results?search_query=' + urllib.parse.quote(q)
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        html = urllib.request.urlopen(req).read().decode('utf-8')
        ids = re.findall(r'"videoId":"(.{11})"', html)
        # Filter out duplicates while preserving order
        unique_ids = list(dict.fromkeys(ids))
        return unique_ids[0:7]
    except Exception as e:
        return ["Or3g7zLfnzI"] * 7

queries = {
    "pele_mascaras": "skincare mascara facial tutorial feminino",
    "cabelo_tratamento": "tratamento capilar em casa cronograma",
    "saude_exercicio": "treino em casa feminino iniciante 10 minutos",
    "saude_alimentacao": "receita saudavel fit rapida",
    "saude_relaxamento": "meditacao guiada relaxamento ansiedade 5 minutos"
}

results = {k: search(v) for k, v in queries.items()}
with open("youtube_ids.json", "w") as f:
    json.dump(results, f)
print("Done fetching IDs.")
