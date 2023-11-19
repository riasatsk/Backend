import { Schema, model } from "mongoose";

const examSchema = new Schema({
  school: {
    type: Schema.Types.ObjectId,
    ref: "School",
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

export const Exam = model("Exam", examSchema);
