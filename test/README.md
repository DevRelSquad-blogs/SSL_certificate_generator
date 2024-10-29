# SSL Testing on Localhost

This folder contains a simple Node.js HTTPS server that uses the self-signed SSL certificate generated in the `ssl` folder. Running this server allows you to test HTTPS connections locally.

## Prerequisites

Copy the following files from the `ssl` folder:
- **`certificate.pem`**: The self-signed SSL certificate.
- **`privateKey.pem`**: Private key for the certificate.

## Files

- **`server.js`**: Sets up an HTTPS server that listens on `localhost:8443`.

## Running the Server

1. Run the HTTPS server:
    ```bash
    node server.js
    ```

2. In your web browser, navigate to:
    ```url
    https://localhost:8443
    ```

> **Note**: You may see a warning about the connection not being secure. This occurs because the certificate is self-signed, not from a recognized Certificate Authority (CA).

## Explanation of `server.js`

1. **HTTPS Configuration**: Loads the certificate and private key for SSL configuration.
2. **Create HTTPS Server**: Sets up an HTTPS server to respond to requests securely on port `8443`.
3. **Browser Warning**: Since the certificate is self-signed, browsers may display a warning, which is expected for local testing.

## Next Steps

You now have a basic HTTPS server secured with SSL! In production, replace self-signed certificates with CA-signed certificates to establish public trust.

