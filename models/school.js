import { Schema, model } from "mongoose";

const schoolSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  phone: String,
  address: String,
});

export const School = model("School", schoolSchema);
