import { Schema, model } from "mongoose";

const subjectSchema = new Schema({
  school: {
    type: Schema.Types.ObjectId,
    ref: "School",
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

export const Subject = model('Subject',subjectSchema)