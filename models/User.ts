// @/models/User.ts
import mongoose, { Document, Schema } from "mongoose";

export interface IUser extends Document {
  nama: string;
  email: string;
  password: string;
  role: "owner" | "pengelola_cabang";
  cabangId?: mongoose.Types.ObjectId | null;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema<IUser>(
  {
    nama: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["owner", "pengelola_cabang"],
      required: true,
      default: "pengelola_cabang",
    },
    cabangId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Branch",
      required: function () {
        return this.role === "pengelola_cabang";
      },
      default: null,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

const User =
  mongoose.models.User || mongoose.model<IUser>("User", UserSchema);

export default User;
