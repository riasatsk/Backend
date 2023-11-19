import { Schema, model } from "mongoose";

const classSchema = new Schema({
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

export const Class = model("Class", classSchema);
