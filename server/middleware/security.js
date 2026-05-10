const rateLimit = require('express-rate-limit');
const { body, validationResult } = require('express-validator');

const contactRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: {
    success: false,
    message: 'Too many requests from this IP, please try again after 15 minutes'
  },
  standardHeaders: true,
  legacyHeaders: false,
  skip: (req) => {
    const origin = req.headers.origin;
    return origin && origin.includes('localhost');
  }
});

const generalRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: {
    success: false,
    message: 'Too many requests, please try again later'
  },
  standardHeaders: true,
  legacyHeaders: false
});

const validateContactInput = [
  body('name')
    .trim()
    .notEmpty().withMessage('Name is required')
    .isLength({ min: 2, max: 100 }).withMessage('Name must be between 2 and 100 characters')
    .matches(/^[a-zA-Z\s.'-]+$/).withMessage('Name can only contain letters, spaces, dots, hyphens, and apostrophes'),
  
  body('email')
    .trim()
    .notEmpty().withMessage('Email is required')
    .isEmail().withMessage('Please enter a valid email address (e.g., user@example.com)')
    .normalizeEmail()
    .isLength({ max: 255 }).withMessage('Email must be less than 255 characters'),
  
  body('phone')
    .trim()
    .notEmpty().withMessage('Phone number is required')
    .matches(/^[0-9+\-\s()]+$/).withMessage('Phone number can only contain numbers, +, -, spaces, and parentheses')
    .isLength({ min: 10, max: 20 }).withMessage('Phone number must be between 10 and 20 characters'),
  
  body('company')
    .optional()
    .trim()
    .isLength({ max: 200 }).withMessage('Company name must be less than 200 characters')
    .matches(/^[a-zA-Z0-9\s.,'&\-()_]+$/).withMessage('Company name can only contain letters, numbers, spaces, and common punctuation (. , \' & - ( ) _)'),
  
  body('message')
    .optional()
    .trim()
    .isLength({ max: 1000 }).withMessage('Message must be less than 1000 characters'),
  
  body('honeypot')
    .optional()
    .custom((value) => {
      if (value && value.length > 0) {
        throw new Error('Invalid submission detected');
      }
      return true;
    })
];

const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errorMessages = errors.array().map(err => `${err.path}: ${err.msg}`);
    const detailedMessage = errorMessages.join(', ');
    
    return res.status(400).json({
      success: false,
      message: detailedMessage,
      errors: errors.array().map(err => ({
        field: err.path,
        message: err.msg
      }))
    });
  }
  next();
};

const sanitizeInput = (req, res, next) => {
  if (req.body) {
    Object.keys(req.body).forEach(key => {
      if (typeof req.body[key] === 'string') {
        req.body[key] = req.body[key]
          .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
          .replace(/<[^>]+>/g, '')
          .trim();
      }
    });
  }
  next();
};

const checkHoneypot = (req, res, next) => {
  if (req.body.honeypot && req.body.honeypot.length > 0) {
    return res.status(400).json({
      success: false,
      message: 'Invalid submission'
    });
  }
  delete req.body.honeypot;
  next();
};

module.exports = {
  contactRateLimiter,
  generalRateLimiter,
  validateContactInput,
  handleValidationErrors,
  sanitizeInput,
  checkHoneypot
};
