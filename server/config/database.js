const { MongoClient, ServerApiVersion } = require("mongodb");
const { MONGODB_URI, DATABASE_NAME, MONGODB_OPTIONS } = require("./constants");

let cachedDb = null;
let cachedClient = null;

async function connectDatabase() {
  if (cachedDb && cachedClient) {
    return cachedDb;
  }

  const client = new MongoClient(MONGODB_URI, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
    ...MONGODB_OPTIONS
  });

  try {
    await client.connect();
    cachedClient = client;
    cachedDb = client.db(DATABASE_NAME);
    console.log("Connected to MongoDB");
    return cachedDb;
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw error;
  }
}

async function closeDatabase() {
  if (cachedClient) {
    await cachedClient.close();
    cachedDb = null;
    cachedClient = null;
    console.log("MongoDB connection closed");
  }
}

module.exports = {
  connectDatabase,
  closeDatabase
};
