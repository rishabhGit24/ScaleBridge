module.exports = {
  PORT: process.env.PORT || 5000,
  
  MONGODB_URI: process.env.MONGODB_URI || 
    "mongodb+srv://rishabhbr18_db_user:PuzYMJ38Nn4Pyf2u@cluster0.nzo3fwp.mongodb.net/scalebridge?retryWrites=true&w=majority",
  
  DATABASE_NAME: "scalebridge",
  
  COLLECTIONS: {
    CONTACTS: "contacts",
    ADMINS: "admins"
  },
  
  ALLOWED_ORIGINS: [
    "https://scale-bridge.vercel.app",
    "https://scale-bridge-frontend.vercel.app",
    "https://www.scalebridgefas.com",
    "https://scalebridgefas.com",
    "http://localhost:5173",
    "http://localhost:5174",
    "http://localhost:3000"
  ],
  
  MONGODB_OPTIONS: {
    maxPoolSize: 10,
    minPoolSize: 1,
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000
  },
  
  REQUEST_LIMITS: {
    JSON_SIZE: '10kb'
  },
  
  STATUS: {
    NEW: 'new',
    CONTACTED: 'contacted',
    RESOLVED: 'resolved'
  }
};
