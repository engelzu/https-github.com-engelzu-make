const https = require('https');

function scrapeUnsplash(query) {
  https.get(`https://unsplash.com/s/photos/${encodeURIComponent(query)}`, {
    headers: { 'User-Agent': 'Mozilla/5.0' }
  }, (res) => {
    let data = '';
    res.on('data', c => data += c);
    res.on('end', () => {
      const regex = /"id":"([a-zA-Z0-9_-]{10,12})"/g;
      let match;
      const ids = new Set();
      while ((match = regex.exec(data)) !== null) {
        ids.add(match[1]);
      }
      console.log(`\n--- ${query} ---`);
      Array.from(ids).slice(0, 3).forEach(id => {
        console.log(`https://images.unsplash.com/photo-${id}?q=80&w=800&auto=format&fit=crop`);
      });
    });
  });
}

scrapeUnsplash('aesthetic makeup');
scrapeUnsplash('elegant fashion woman');
scrapeUnsplash('beautiful manicure nails');
scrapeUnsplash('glowing skincare face');
scrapeUnsplash('spa facial mask');
scrapeUnsplash('beautiful long hair hairstyle');
scrapeUnsplash('hair salon treatment');
scrapeUnsplash('fitness woman aesthetic');
scrapeUnsplash('healthy diet food');
scrapeUnsplash('meditation yoga sunset');
