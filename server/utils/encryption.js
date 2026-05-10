const CryptoJS = require('crypto-js');

const ENCRYPTION_KEY = process.env.ENCRYPTION_KEY || 'scalebridge-default-key-change-in-production';

const encryptData = (data) => {
  if (!data) return data;
  try {
    return CryptoJS.AES.encrypt(data, ENCRYPTION_KEY).toString();
  } catch (error) {
    console.error('Encryption error:', error);
    return data;
  }
};

const decryptData = (encryptedData) => {
  if (!encryptedData) return encryptedData;
  try {
    const bytes = CryptoJS.AES.decrypt(encryptedData, ENCRYPTION_KEY);
    return bytes.toString(CryptoJS.enc.Utf8);
  } catch (error) {
    console.error('Decryption error:', error);
    return encryptedData;
  }
};

const encryptContact = (contact) => {
  return {
    ...contact,
    email: encryptData(contact.email),
    phone: encryptData(contact.phone),
    name: encryptData(contact.name),
    company: contact.company ? encryptData(contact.company) : '',
    message: contact.message ? encryptData(contact.message) : ''
  };
};

const decryptContact = (contact) => {
  return {
    ...contact,
    email: decryptData(contact.email),
    phone: decryptData(contact.phone),
    name: decryptData(contact.name),
    company: contact.company ? decryptData(contact.company) : '',
    message: contact.message ? decryptData(contact.message) : ''
  };
};

module.exports = {
  encryptData,
  decryptData,
  encryptContact,
  decryptContact
};
