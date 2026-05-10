const { encryptContact, decryptContact } = require('../utils/encryption');

console.log('🔐 Testing Encryption/Decryption...\n');

const testContact = {
  name: 'Rishabh Bharadwaj',
  company: 'prod_test',
  email: 'rishabh.br18@gmail.com',
  phone: '07259197398',
  message: 'Test message'
};

console.log('Original Data:');
console.log(JSON.stringify(testContact, null, 2));
console.log('\n---\n');

const encrypted = encryptContact(testContact);
console.log('Encrypted Data (what gets stored in MongoDB):');
console.log(JSON.stringify(encrypted, null, 2));
console.log('\n---\n');

const decrypted = decryptContact(encrypted);
console.log('Decrypted Data (what admin sees):');
console.log(JSON.stringify(decrypted, null, 2));
console.log('\n---\n');

if (decrypted.email === testContact.email && 
    decrypted.phone === testContact.phone &&
    decrypted.name === testContact.name) {
  console.log('✅ Encryption/Decryption working correctly!');
} else {
  console.log('❌ Encryption/Decryption failed!');
}
