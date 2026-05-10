const { MongoClient, ServerApiVersion } = require("mongodb");
require("dotenv").config();

const { MONGODB_URI, DATABASE_NAME, COLLECTIONS } = require("../config/constants");

async function setupAdmin() {
  const client = new MongoClient(MONGODB_URI, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  try {
    await client.connect();
    console.log("Connected to MongoDB");

    const db = client.db(DATABASE_NAME);
    const adminsCollection = db.collection(COLLECTIONS.ADMINS);

    const existingAdmin = await adminsCollection.findOne({
      username: "scalebridge",
    });

    if (existingAdmin) {
      console.log("Admin user already exists");
      return;
    }

    const admin = {
      username: "scalebridge",
      password: "31102003",
      name: "ScaleBridge Admin",
      createdAt: new Date(),
      role: "admin",
    };

    const result = await adminsCollection.insertOne(admin);
    console.log("Admin user created successfully:", result.insertedId);
  } catch (error) {
    console.error("Error setting up admin:", error);
  } finally {
    await client.close();
  }
}

setupAdmin();
