import mongoose from "mongoose";
import defaultSchema from "../config/defaultSchema.js";
import statusNumber from "../config/enum/statusNumber.js";

const Schema = mongoose.Schema(
  {
    email: { type: String },
    otp: { type: String },
    status: {
      type: Number,
      enum: statusNumber,
      default: 0,
      required: true,
    },
  },
  defaultSchema
);

const OTPModel = new mongoose.model("Otp", Schema);

export default OTPModel;
