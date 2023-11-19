import { Schema, model } from "mongoose";

const eventSchema = new Schema(
  {
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
    place: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Event = model("Event", eventSchema);
