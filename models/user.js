import { Schema, model } from "mongoose";

const userSchema = new Schema({
  school: {
    type: Schema.Types.ObjectId,
    ref: "School",
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  password: String,
});

export const User = model("User", userSchema);
