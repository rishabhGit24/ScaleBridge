const { connectDatabase } = require("../config/database");
const { COLLECTIONS } = require("../config/constants");

const adminLogin = async (req, res, next) => {
  try {
    console.log("Received POST request to /api/admin/login");
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({
        success: false,
        message: "Username and password are required",
      });
    }

    const db = await connectDatabase();
    const adminsCollection = db.collection(COLLECTIONS.ADMINS);

    const admin = await adminsCollection.findOne({ username });

    if (!admin || admin.password !== password) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    res.json({
      success: true,
      message: "Login successful",
      admin: {
        username: admin.username,
        name: admin.name || username,
      },
    });
  } catch (error) {
    console.error("Error during login:", error);
    next(error);
  }
};

module.exports = {
  adminLogin
};
