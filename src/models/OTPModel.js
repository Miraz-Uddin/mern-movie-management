import mongoose from "mongoose";
import defaultSchema from "../config/defaultSchema.js";

const Schema = mongoose.Schema(
  {
    email: { type: String },
    otp: { type: String },
    status: { type: Number, default: 0 },
  },
  defaultSchema
);

const OTPModel = new mongoose.model("Otp", Schema);

export default OTPModel;
