const { connectDatabase } = require("../config/database");

const healthCheck = async (req, res, next) => {
  try {
    const db = await connectDatabase();
    await db.command({ ping: 1 });
    
    res.json({
      success: true,
      message: "API and database are healthy",
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    res.status(503).json({
      success: false,
      message: "Database connection failed",
      error: error.message
    });
  }
};

module.exports = {
  healthCheck
};
