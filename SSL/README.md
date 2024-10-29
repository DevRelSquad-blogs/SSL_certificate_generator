# SSL Certificate Generation with Node-Forge

This folder contains code to create a self-signed SSL certificate using Node.js and `node-forge`. Self-signed certificates are suitable for testing SSL locally but aren’t recognized by public authorities.

## Prerequisites

- **Node.js**: Required for executing the JavaScript code.
- **node-forge**: Install with `npm install node-forge`.

## File Overview

- **`index.js`**: Script to generate a public-private key pair and a self-signed SSL certificate.

## How to Run

1. Run `index.js` to create the certificate and private key files:
    ```bash
    node index.js
    ```

2. Two files will be generated in the `ssl` folder:
    - **`certificate.pem`**: Self-signed SSL certificate.
    - **`privateKey.pem`**: Private key corresponding to the SSL certificate.

## Code Explanation

1. **Generate Public and Private Keys**: Creates an RSA key pair.
2. **Create Certificate Signing Request (CSR)**: Fills in certificate details like `commonName`, `countryName`, and `organizationName`.
3. **Sign the Certificate**: Uses the private key to self-sign the certificate.

This self-signed certificate can be used to secure local web servers for development.

## Next Steps

In the `test` folder, you’ll use this certificate to set up an HTTPS server on localhost. This will simulate SSL functionality in a controlled environment.

