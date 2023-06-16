import mongoose from "mongoose";
import defaultSchema from "../config/defaultSchema.js";
import statusString from "../config/enum/statusString.js";

const Schema = mongoose.Schema(
  {
    name: { type: String },
    email: { type: String, unique: true },
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
