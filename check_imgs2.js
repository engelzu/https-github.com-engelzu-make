const https = require('https');

const urls = [
  "https://images.unsplash.com/photo-1596462502278-27bfdc403348", // makeup
  "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9", // makeup brush
  "https://images.unsplash.com/photo-1516975080661-46bce0d437e2", // cosmetics
  "https://images.unsplash.com/photo-1519415943484-9fa1873496d4", // nails
  "https://images.unsplash.com/photo-1522337660859-02fbefca4702", // makeup
  "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453" // nails
];

urls.forEach(url => {
  https.request(url, { method: 'HEAD' }, (res) => {
    console.log(res.statusCode, url);
  }).end();
});
