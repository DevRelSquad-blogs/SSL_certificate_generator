const crypto = require('crypto');


// Generate public and private keys
const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
    modulusLength: 2048, // RSA key length
});


// Function to encrypt a message using the public key
function encryptWithPublicKey(message) {
    const encrypted = crypto.publicEncrypt(publicKey, Buffer.from(message));
    return encrypted.toString('hex');
}


// Function to decrypt a message using the private key
function decryptWithPrivateKey(encryptedMessage) {
    const decrypted = crypto.privateDecrypt(privateKey, Buffer.from(encryptedMessage, 'hex'));
    return decrypted.toString();
}


// Encrypt a message
const secretMessage = "This is a top secret message";
const encryptedMessage = encryptWithPublicKey(secretMessage);


console.log("Encrypted Message:", encryptedMessage);


// Decrypt the message
const decryptedMessage = decryptWithPrivateKey(encryptedMessage);


console.log("Decrypted Message:", decryptedMessage);
