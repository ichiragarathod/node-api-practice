import mongoose, { Schema, Document } from "mongoose";

export interface IProduct extends Document {
  name: string;
  price: number;
  description: string;
  stock: number;
  imageUrl?: string;
}

const productSchema = new Schema<IProduct>(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    stock: { type: Number, required: true, default: 0 },
    imageUrl: { type: String },
  },
  { timestamps: true } // createdAt, updatedAt automatic add થાય
);

export default mongoose.model<IProduct>("Product", productSchema);