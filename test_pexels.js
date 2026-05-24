const https = require('https');

const urls = [
  "https://images.pexels.com/photos/2799605/pexels-photo-2799605.jpeg",
  "https://images.pexels.com/photos/3993444/pexels-photo-3993444.jpeg",
  "https://images.pexels.com/photos/3356170/pexels-photo-3356170.jpeg"
];

urls.forEach(url => {
  https.request(url, { method: 'HEAD' }, (res) => {
    console.log(res.statusCode, url);
  }).end();
});
