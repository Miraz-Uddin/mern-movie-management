import mongoose from "mongoose";
import defaultSchema from "../config/defaultSchema.js";
import statusString from "../config/enum/statusString.js";

const Schema = mongoose.Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String },
    status: {
      type: String,
      enum: statusString,
      default: "Active",
      required: true,
    },
  },
  defaultSchema
);

const ProductModel = new mongoose.model("Product", Schema);

export default ProductModel;
