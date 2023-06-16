import mongoose from "mongoose";
import defaultSchema from "../config/defaultSchema.js";
import statusString from "../config/enum/statusString.js";

const Schema = mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    status: {
      type: String,
      enum: statusString,
      default: "Active",
      required: true,
    },
  },
  defaultSchema
);

const UserModel = new mongoose.model("User", Schema);

export default UserModel;
