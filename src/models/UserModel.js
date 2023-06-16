import mongoose from "mongoose";
import defaultSchema from "../config/defaultSchema.js";

const Schema = mongoose.Schema(
  {
    name: { type: String, required: true },
    age: { type: Number, required: true },
  },
  defaultSchema
);

const UserModel = new mongoose.model("User", Schema);

export default UserModel;
