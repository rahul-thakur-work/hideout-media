import mongoose from "mongoose";

export interface ICity extends mongoose.Document {
  name: string;
  slug: string;
  state: string;
  description: string;
  image: string;
  popular: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const CitySchema = new mongoose.Schema<ICity>(
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
    state: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      default: "/assets/shows-poster.png",
    },
    popular: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.City ||
  mongoose.model<ICity>("City", CitySchema);

