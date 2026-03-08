const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// CORS configuration
const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:5174",
  "https://scale-bridge-frontend.vercel.app",
];

// Middleware - Handle CORS manually for better Vercel compatibility
app.use((req, res, next) => {
  const origin = req.headers.origin;

  // Always set CORS headers for allowed origins
  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  } else {
    // Fallback to allow the frontend domain
    res.setHeader(
      "Access-Control-Allow-Origin",
      "https://scale-bridge-frontend.vercel.app",
    );
  }

  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS",
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, X-Requested-With, Accept",
  );
  res.setHeader("Access-Control-Allow-Credentials", "true");

  // Handle preflight requests
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  next();
});

app.use(express.json());

// MongoDB connection string
const uri =
  process.env.MONGODB_URI ||
  "mongodb+srv://rishabhbr18_db_user:PuzYMJ38Nn4Pyf2u@cluster0.nzo3fwp.mongodb.net/?appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
let client;
let clientPromise;

if (!client) {
  client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });
  clientPromise = client.connect();
}

// Helper function to get database connection
async function getDatabase() {
  await clientPromise;
  return client.db("scalebridge");
}

// API Routes
app.get("/", (req, res) => {
  res.json({ message: "ScaleBridge API is running" });
});

app.get("/api", (req, res) => {
  res.json({ message: "ScaleBridge API is running" });
});

// POST endpoint to save contact form data
app.post("/api/contacts", async (req, res) => {
  try {
    const { name, company, email, phone, message } = req.body;

    // Validate required fields
    if (!name || !email || !phone) {
      return res.status(400).json({
        success: false,
        message: "Name, email, and phone are required fields",
      });
    }

    // Get database connection
    const db = await getDatabase();
    const contactsCollection = db.collection("contacts");

    // Create contact document
    const contact = {
      name,
      company: company || "",
      email,
      phone,
      message: message || "",
      createdAt: new Date(),
      status: "new",
    };

    // Insert into MongoDB
    const result = await contactsCollection.insertOne(contact);

    res.status(201).json({
      success: true,
      message: "Contact information saved successfully",
      id: result.insertedId,
    });
  } catch (error) {
    console.error("Error saving contact:", error);
    res.status(500).json({
      success: false,
      message: "Failed to save contact information",
      error: error.message,
    });
  }
});

// GET endpoint to retrieve all contacts (optional - for admin use)
app.get("/api/contacts", async (req, res) => {
  try {
    const db = await getDatabase();
    const contactsCollection = db.collection("contacts");

    const contacts = await contactsCollection
      .find({})
      .sort({ createdAt: -1 })
      .toArray();
    res.json({
      success: true,
      count: contacts.length,
      data: contacts,
    });
  } catch (error) {
    console.error("Error fetching contacts:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch contacts",
      error: error.message,
    });
  }
});

// For local development
if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

// Export for Vercel
module.exports = app;
