const https = require('https');

https.get('https://www.pexels.com/search/hair/', {
  headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36' }
}, (res) => {
  let data = '';
  res.on('data', c => data += c);
  res.on('end', () => {
    const regex = /images.pexels.com\/photos\/(\d+)\//g;
    let match;
    const ids = new Set();
    while ((match = regex.exec(data)) !== null) {
      ids.add(match[1]);
    }
    console.log("Pexels Hair IDs:", Array.from(ids).slice(0, 5));
  });
}).on('error', console.error);
