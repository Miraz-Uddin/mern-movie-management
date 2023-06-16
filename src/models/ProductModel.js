import mongoose from "mongoose";
import defaultSchema from "../config/defaultSchema.js";

const Schema = mongoose.Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String },
  },
  defaultSchema
);

const ProductModel = new mongoose.model("Product", Schema);

export default ProductModel;
