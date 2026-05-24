const https = require('https');

function fetchUnsplash(query) {
  const url = `https://unsplash.com/napi/search/photos?query=${encodeURIComponent(query)}&per_page=5`;
  https.get(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
    }
  }, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      try {
        const json = JSON.parse(data);
        const ids = json.results.map(r => r.id);
        console.log(`\n--- ${query} ---`);
        ids.forEach(id => console.log(`https://images.unsplash.com/photo-${id}?q=80&w=800&auto=format&fit=crop`));
      } catch(e) {
        console.error("Parse error for", query, e);
      }
    });
  }).on('error', console.error);
}

fetchUnsplash('premium makeup model');
fetchUnsplash('fashion street style woman');
fetchUnsplash('luxury manicure nails');
fetchUnsplash('skincare glowing face woman');
fetchUnsplash('spa facial mask treatment');
fetchUnsplash('beautiful long hair woman style');
fetchUnsplash('luxury hair salon treatment');
fetchUnsplash('fitness woman gym aesthetic');
fetchUnsplash('healthy fresh salad bowl');
fetchUnsplash('meditation yoga woman sunset');
