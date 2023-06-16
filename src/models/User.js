import mongoose from "mongoose";

const collection = "User";

const Schema = mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String },
  createdAt: { type: Date, default: Date.now },
});

const UserModel = new mongoose.model(collection, Schema);

export function getCollectionName() {
  return collection;
}

export default UserModel;
