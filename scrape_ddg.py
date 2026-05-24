import urllib.request
import re

url = "https://html.duckduckgo.com/html/?q=site:unsplash.com+beautiful+hair+woman+style"
req = urllib.request.Request(
    url, 
    data=None, 
    headers={
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
    }
)

response = urllib.request.urlopen(req)
html = response.read().decode('utf-8')

# Look for unsplash URLs
matches = re.findall(r'unsplash\.com/photos/([^"\'/?]+)', html)
matches2 = re.findall(r'unsplash\.com/photo-([a-zA-Z0-9_-]+)', html)

print("Matches:", set(matches), set(matches2))
