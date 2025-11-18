// @/models/Branch.ts
import mongoose, { Document, Schema } from "mongoose";

export interface IBranch extends Document {
  namaCabang: string;
  kodeCabang: string;
  alamat?: string;
  googleMapsLink?: string;
  kontak?: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const BranchSchema = new Schema<IBranch>(
  {
    namaCabang: {
      type: String,
      required: true,
      trim: true,
    },
    kodeCabang: {
      type: String,
      required: true,
      unique: true,
      uppercase: true,
      trim: true,
    },
    alamat: {
      type: String,
      default: "",
    },
    kontak: {
      type: String,
      default: "",
    },
    googleMapsLink: {
      type: String,
      default: "",
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

const Branch =
  mongoose.models.Branch || mongoose.model<IBranch>("Branch", BranchSchema);

export default Branch;

