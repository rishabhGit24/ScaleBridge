const { ALLOWED_ORIGINS } = require("../config/constants");

const corsMiddleware = (req, res, next) => {
  const origin = req.headers.origin;

  if (ALLOWED_ORIGINS.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  } else if (origin && origin.includes("localhost")) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  } else {
    res.setHeader(
      "Access-Control-Allow-Origin",
      "https://scale-bridge-frontend.vercel.app"
    );
  }

  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, X-Requested-With, Accept"
  );
  res.setHeader("Access-Control-Allow-Credentials", "true");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  next();
};

module.exports = corsMiddleware;
