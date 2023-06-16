import mongoose from "mongoose";
import defaultSchema from "../config/defaultSchema.js";

const Schema = mongoose.Schema(
  {
    name: { type: String, required: true },
    year: { type: Number, required: true },
  },
  defaultSchema
);

const MovieModel = new mongoose.model("Movie", Schema);

export default MovieModel;
