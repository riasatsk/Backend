import { Schema, model } from "mongoose";

const teacherSchema = new Schema({
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
  email: String,
  subject1: String,
  subject2: String,
});

export const Teacher = model("Teacher", teacherSchema);
