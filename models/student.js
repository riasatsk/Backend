import { Schema, model } from "mongoose";

const studentSchema = new Schema({
  school: {
    type: Schema.Types.ObjectId,
    ref: "School",
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  middleName: String,
  lastName: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  classId: {
    type: Schema.Types.ObjectId,
    ref: "Class",
    required: true,
  },
  className: {
    type: String,
    required: true,
  },
  roll: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  imageUrl: String,
  phone: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  parentOrGuardainName: {
    type: String,
    required: true,
  },
  mode: String,
});

export const Student = model("Student", studentSchema);
