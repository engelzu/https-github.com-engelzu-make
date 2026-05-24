import urllib.request
import re
import urllib.parse

def search(q):
    url = 'https://www.youtube.com/results?search_query=' + urllib.parse.quote(q)
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    html = urllib.request.urlopen(req).read().decode('utf-8')
    ids = re.findall(r'"videoId":"(.{11})"', html)
    return list(dict.fromkeys(ids))[0:7]

print("Hair:", search("penteado facil cabelo feminino tutorial"))
print("Skin:", search("skincare rotina de pele tutorial feminino"))
