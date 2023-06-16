import mongoose from "mongoose";

const collection = "Movie";

const Schema = mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String },
  createdAt: { type: Date, default: Date.now },
});

const MovieModel = new mongoose.model(collection, Schema);

export function getCollectionName() {
  return collection;
}

export default MovieModel;
