const express = require("express");
const { createContact, getAllContacts } = require("../controllers/contactController");
const {
  contactRateLimiter,
  validateContactInput,
  handleValidationErrors,
  sanitizeInput,
  checkHoneypot
} = require("../middleware/security");

const router = express.Router();

router.post(
  "/",
  contactRateLimiter,
  sanitizeInput,
  validateContactInput,
  handleValidationErrors,
  checkHoneypot,
  createContact
);

router.get("/", getAllContacts);

module.exports = router;
