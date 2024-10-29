let forge = require('node-forge');
const {generateKeyPairSync} = require('crypto');
const { type } = require('os');
const { format } = require('path');
const fs = require('fs');

const {publicKey , privateKey} = generateKeyPairSync('rsa' , {
    modulusLength: 2048,
    publicKeyEncoding: { type : 'spki' , format: 'pem'},
    privateKeyEncoding: { type: 'pkcs8' , format: 'pem'},
});

// console.log('PrivateKey' , privateKey)
// console.log("public key" , publicKey)


const csr = forge.pki.createCertificationRequest();
csr.publicKey = forge.pki.publicKeyFromPem(publicKey);

csr.setSubject([{
    name : 'commonName',
    value :'vansh.com'
},{
    name : 'countryName',
    value :'India'
},{
    name : 'organizationName',
    value :'Vansh pvt ltd'
},]);

csr.sign(forge.pki.privateKeyFromPem(privateKey));
const pem = forge.pki.certificationRequestToPem(csr);

//  signing the certificate

const cert = forge.pki.createCertificate();
cert.publicKey = csr.publicKey;
cert.serialNumber = '01';
cert.validity.notBefore = new Date();
cert.validity.notAfter = new Date();
cert.validity.notAfter.setFullYear(cert.validity.notBefore.getFullYear() + 1);

cert.sign(forge.pki.privateKeyFromPem(privateKey));
const pemCert = forge.pki.certificateToPem(cert)


console.log("certificate" , pemCert)

fs.writeFileSync('certificate.pem', pemCert);
fs.writeFileSync('privateKey.pem', privateKey);

