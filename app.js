import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoSanitize from "express-mongo-sanitize";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import hpp from "hpp";
import jsonLimiter from "./src/config/jsonLimiter.js";
import rateLimiter from "./src/config/rateLimiter.js";
import router from "./src/routes/api.js";
import dbConnect from "./src/utils/connection/dbConnect.js";

// making .env available to Use
dotenv.config({ path: "./.env" });

// Express Initialize
const app = new express();

// Security Middleware
app.use(cors());
app.use(helmet());
app.use(mongoSanitize());
app.use(hpp());
app.use(express.json(jsonLimiter));
app.use(express.urlencoded(jsonLimiter));

// JSON Parser
app.use(bodyParser.json());

// Rate Limiting / API Throttle
app.use(rateLimit(rateLimiter));

// MongoDB Database Connection
dbConnect();

// Routing
app.use("/api/v1", router);
app.use("*", (req, res) => {
  res.status(404).json({
    status: "fail",
    data: "Not Found",
  });
});

export default app;
