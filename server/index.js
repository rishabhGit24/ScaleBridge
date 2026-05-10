const express = require("express");
const helmet = require("helmet");
require("dotenv").config();

const { PORT, REQUEST_LIMITS } = require("./config/constants");
const corsMiddleware = require("./middleware/cors");
const { generalRateLimiter } = require("./middleware/security");
const errorHandler = require("./middleware/errorHandler");
const routes = require("./routes");

const app = express();

app.use(helmet({
  contentSecurityPolicy: false,
  crossOriginEmbedderPolicy: false
}));

app.use(generalRateLimiter);
app.use(corsMiddleware);
app.use(express.json({ limit: REQUEST_LIMITS.JSON_SIZE }));

app.use("/api", routes);

app.get("/", (req, res) => {
  res.json({ message: "ScaleBridge API is running" });
});

app.use(errorHandler);

if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

module.exports = app;
