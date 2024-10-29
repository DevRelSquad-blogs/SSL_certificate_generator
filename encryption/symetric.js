const crypto = require('crypto');


// Generate a random key for symmetric encryption
const secretKey = crypto.randomBytes(32); // 256-bit key
const algorithm = 'aes-256-ecb'; // Using ECB mode to avoid IV for simplicity


// Function to encrypt a message
function encrypt(text) {
    const cipher = crypto.createCipher(algorithm, secretKey);
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted;
}


// Function to decrypt a message
function decrypt(encryptedText) {
    const decipher = crypto.createDecipher(algorithm, secretKey);
    let decrypted = decipher.update(encryptedText, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}


// Encrypt a message
const message = "This_is_a_secret_message";
const encryptedMessage = encrypt(message);


console.log("Encrypted Message:", encryptedMessage);


// Decrypt the message
const decryptedMessage = decrypt(encryptedMessage);


console.log("Decrypted Message:", decryptedMessage);
