const https = require('https');

const urls = [
  "https://images.unsplash.com/photo-1512496115851-a1c8f137e4a4",
  "https://images.unsplash.com/photo-1522337360788-8b13fee7a344",
  "https://images.unsplash.com/photo-1483985988355-763728e1935b",
  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f",
  "https://images.unsplash.com/photo-1604654894610-df63bc536371",
  "https://images.unsplash.com/photo-1519014816548-bf5fe059e98b",
  "https://images.unsplash.com/photo-1556228578-0d85b1a4d571",
  "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec",
  "https://images.unsplash.com/photo-1500336624523-d727130c3328",
  "https://images.unsplash.com/photo-1515377905703-c4788e51af15",
  "https://images.unsplash.com/photo-1560869713-7d0a29430803",
  "https://images.unsplash.com/photo-1522337660859-02fbefca4702",
  "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388",
  "https://images.unsplash.com/photo-1519699047748-de8e457a634e",
  "https://images.unsplash.com/photo-1518611012118-696072aa579a",
  "https://images.unsplash.com/photo-1490645935967-10de6ba17061",
  "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b"
];

urls.forEach(url => {
  https.request(url, { method: 'HEAD' }, (res) => {
    console.log(res.statusCode, url);
  }).end();
});
