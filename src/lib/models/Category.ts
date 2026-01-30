import mongoose from "mongoose";

export interface ICategory extends mongoose.Document {
  name: string;
  slug: string;
  description: string;
  icon: string;
  image: string;
  createdAt: Date;
  updatedAt: Date;
}

const CategorySchema = new mongoose.Schema<ICategory>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    description: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      default: "🎭",
    },
    image: {
      type: String,
      default: "/assets/shows-poster.png",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Category ||
  mongoose.model<ICategory>("Category", CategorySchema);

