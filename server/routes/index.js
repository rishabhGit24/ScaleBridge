const express = require("express");
const contactRoutes = require("./contactRoutes");
const adminRoutes = require("./adminRoutes");
const healthRoutes = require("./healthRoutes");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "ScaleBridge API is running" });
});

router.use("/contacts", contactRoutes);
router.use("/admin", adminRoutes);
router.use("/health", healthRoutes);

module.exports = router;
