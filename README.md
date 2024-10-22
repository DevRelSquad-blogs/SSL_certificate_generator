
# SSL Encryption Basics – Part 1

This repository contains two basic examples of encryption using Node.js. These examples cover both **symmetric** and **asymmetric** encryption techniques, forming part of the groundwork for understanding SSL (Secure Sockets Layer) and how encryption works at its core.

## Overview

### Files:
1. **symmetric.js**: Demonstrates how symmetric encryption works, using a secret key to both encrypt and decrypt messages.
2. **asymmetric.js**: Demonstrates how asymmetric encryption works, using a public key to encrypt messages and a private key to decrypt them.

Both examples are simple and easy to understand, providing a foundation for learning how encryption functions, which is essential to understanding SSL.

## Symmetric Encryption (`symmetric.js`)
In **symmetric encryption**, the same key is used for both encryption and decryption.

- **Algorithm**: `aes-256-ecb` (AES-256 with ECB mode)
- **Key**: A 256-bit secret key is randomly generated.

### How It Works:
1. The `secretKey` is used to encrypt a message.
2. The same `secretKey` is used to decrypt the message.

#### Running the Code:
```bash
node symmetric.js
```

#### Example Output:
```
Encrypted Message: <hex_encoded_encrypted_message>
Decrypted Message: This is a secret message
```

## Asymmetric Encryption (`asymmetric.js`)
In **asymmetric encryption**, a **public key** is used to encrypt messages, and a **private key** is used to decrypt them.

- **Algorithm**: RSA with a 2048-bit key pair
- **Keys**: A public/private key pair is generated.

### How It Works:
1. The `publicKey` encrypts the message.
2. The corresponding `privateKey` decrypts the message.

#### Running the Code:
```bash
node asymmetric.js
```

#### Example Output:
```
Encrypted Message: <hex_encoded_encrypted_message>
Decrypted Message: This is a top secret message
```

## Getting Started

1. Clone this repository:
   ```bash
   git clone https://github.com/DevRelSquad-blogs/SSL_certificate_generator/encryption
   ```
2. Install Node.js if you haven't already: [Download Node.js](https://nodejs.org/).
3. Run the examples:
   - For symmetric encryption:
     ```bash
     node symmetric.js
     ```
   - For asymmetric encryption:
     ```bash
     node asymmetric.js
     ```

## What's Next?

This is the first part of a broader guide on how SSL works. In the **next part**, we'll cover how to generate your own SSL certificate and test it on your local machine. Stay tuned for more practical insights into securing your web applications using SSL!

---

Feel free to contribute or raise issues if you have any questions! 😊
