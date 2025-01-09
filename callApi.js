const https = require('https');

const options = {
  hostname: 'https://symfony-9z0y.onrender.com', // Thay bằng hostname của API
  path: '/activities/bulk',              // Thay bằng đường dẫn API
  method: 'GET',
};

const req = https.request(options, (res) => {
  let data = '';
  
  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    console.log('Response:', data);
  });
});

req.on('error', (e) => {
  console.error('Error:', e.message);
});

req.end();
