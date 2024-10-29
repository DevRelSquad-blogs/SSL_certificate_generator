const https = require('https');
const fs = require('fs');

// Load the self-signed certificate and private key
const options = {
    key: fs.readFileSync('privateKey.pem'),
    cert: fs.readFileSync('certificate.pem')
};

// Create an HTTPS server using the certificate and private key
https.createServer(options, (req, res) => {
    res.writeHead(200);
    res.end('Hello, this is a secure server!\n');
}).listen(8443, () => {
    console.log('HTTPS Server running at https://localhost:8443');
});
