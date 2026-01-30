import mongoose from "mongoose";

export interface IArtist extends mongoose.Document {
  name: string;
  slug: string;
  category: "comedian" | "dj-musician" | "motivational-speaker" | "anchor";
  bio: string;
  shortDescription: string;
  image: string;
  cities: string[]; // e.g., ["delhi", "mumbai", "bangalore"]
  priceRange: {
    min: number;
    max: number;
  };
  specialties: string[]; // e.g., ["Stand-up Comedy", "Corporate Shows"]
  languages: string[]; // e.g., ["Hindi", "English"]
  experience: number; // years
  totalShows: number;
  rating: number;
  reviews: {
    clientName: string;
    review: string;
    rating: number;
    date: Date;
  }[];
  socialMedia: {
    instagram?: string;
    youtube?: string;
    twitter?: string;
    facebook?: string;
  };
  featured: boolean;
  verified: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const ArtistSchema = new mongoose.Schema<IArtist>(
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
    category: {
      type: String,
      required: true,
      enum: ["comedian", "dj-musician", "motivational-speaker", "anchor"],
    },
    bio: {
      type: String,
      required: true,
    },
    shortDescription: {
      type: String,
      required: true,
      maxlength: 200,
    },
    image: {
      type: String,
      required: true,
    },
    cities: [
      {
        type: String,
        lowercase: true,
      },
    ],
    priceRange: {
      min: {
        type: Number,
        required: true,
      },
      max: {
        type: Number,
        required: true,
      },
    },
    specialties: [String],
    languages: [String],
    experience: {
      type: Number,
      required: true,
      min: 0,
    },
    totalShows: {
      type: Number,
      default: 0,
    },
    rating: {
      type: Number,
      default: 5,
      min: 1,
      max: 5,
    },
    reviews: [
      {
        clientName: String,
        review: String,
        rating: {
          type: Number,
          min: 1,
          max: 5,
        },
        date: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    socialMedia: {
      instagram: String,
      youtube: String,
      twitter: String,
      facebook: String,
    },
    featured: {
      type: Boolean,
      default: false,
    },
    verified: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// Index for better query performance
ArtistSchema.index({ category: 1, cities: 1 });
ArtistSchema.index({ slug: 1 });
ArtistSchema.index({ featured: 1, rating: -1 });

export default mongoose.models.Artist ||
  mongoose.model<IArtist>("Artist", ArtistSchema);

