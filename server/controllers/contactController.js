const { connectDatabase } = require("../config/database");
const { COLLECTIONS, STATUS } = require("../config/constants");
const { encryptContact, decryptContact } = require("../utils/encryption");

const createContact = async (req, res, next) => {
  try {
    console.log("Received POST request to /api/contacts");

    const { name, company, email, phone, message } = req.body;

    const db = await connectDatabase();
    const contactsCollection = db.collection(COLLECTIONS.CONTACTS);

    const contact = {
      name,
      company: company || "",
      email,
      phone,
      message: message || "",
      createdAt: new Date(),
      status: STATUS.NEW,
      ipAddress: req.ip || req.connection.remoteAddress,
      userAgent: req.headers['user-agent']
    };

    const encryptedContact = encryptContact(contact);

    console.log("Inserting encrypted contact");
    const result = await contactsCollection.insertOne(encryptedContact);
    console.log("Insert successful");

    res.status(201).json({
      success: true,
      message: "Contact information saved successfully",
      id: result.insertedId,
    });
  } catch (error) {
    console.error("Error saving contact:", error);
    next(error);
  }
};

const getAllContacts = async (req, res, next) => {
  try {
    const db = await connectDatabase();
    const contactsCollection = db.collection(COLLECTIONS.CONTACTS);

    const contacts = await contactsCollection
      .find({})
      .sort({ createdAt: -1 })
      .toArray();

    const decryptedContacts = contacts.map(contact => decryptContact(contact));

    res.json({
      success: true,
      count: decryptedContacts.length,
      data: decryptedContacts,
    });
  } catch (error) {
    console.error("Error fetching contacts:", error);
    next(error);
  }
};

module.exports = {
  createContact,
  getAllContacts
};
