import { Schema, model } from "mongoose";

const feesSchema = new Schema({
  student: {
    type: Schema.Types.ObjectId,
    ref: "Student",
    required: true,
  },
  school: {
    type: Schema.Types.ObjectId,
    ref: "School",
    required: true,
  },

  year: {
    type: Number,
    required: true,
  },
  name: String,
  roll: Number,
  amount: {
    type: Number,
    required: true,
  },
  month: {
    type: String,
    required: true,
  },
});

export const Fees = model("Fees", feesSchema);
