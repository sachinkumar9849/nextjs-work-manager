import mongoose, { Schema, mongo } from "mongoose";

const UserSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name Required !!"],
  },
  email: {
    type: String,
    required: [true, "Email Required !!"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password Required !!"],
  },
  about: String,
  profileUrl: String,
});

export const User =
  mongoose.models.users || mongoose.model("users", UserSchema);
