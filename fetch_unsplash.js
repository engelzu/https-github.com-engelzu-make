const https = require('https');

function getPhotos(query) {
  https.get(`https://unsplash.com/s/photos/${query}`, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      const regex = /photo-[a-zA-Z0-9\-]+/g;
      const matches = data.match(regex);
      if (matches) {
        const unique = [...new Set(matches)].slice(0, 5);
        console.log(`--- ${query} ---`);
        unique.forEach(id => console.log(`https://images.unsplash.com/${id}`));
      }
    });
  }).on("error", console.error);
}

getPhotos('makeup');
getPhotos('nails');
getPhotos('skincare');
getPhotos('hair');
getPhotos('fitness');
getPhotos('nutrition');
