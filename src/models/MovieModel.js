import mongoose from "mongoose";
import defaultSchema from "../config/defaultSchema.js";
import genre from "../config/enum/genre.js";

const Schema = mongoose.Schema(
  {
    name: { type: String, required: true },
    year: { type: Number, required: true },
    genre: {
      type: String,
      enum: genre,
      default: "Comedy",
      required: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    updatedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  defaultSchema
);

const MovieModel = new mongoose.model("Movie", Schema);

export default MovieModel;
