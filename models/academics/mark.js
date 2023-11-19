import { Schema, model } from "mongoose";

const markSchema = new Schema({
  student: {
    type: Schema.Types.ObjectId,
    ref: "Student",
    required: true,
  },
  exam: {
    type: Schema.Types.ObjectId,
    ref: "Exam",
    required: true,
  },
  subject: {
    type: Schema.Types.ObjectId,
    ref: "Subject",
    required: true,
  },
  mark: {
    type: Number,
    required: true,
  },
});

export const Mark = model("Mark", markSchema);
