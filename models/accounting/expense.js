import { Schema, model } from "mongoose";

const expenseSchema = new Schema(
  {
    school: {
      type: Schema.Types.ObjectId,
      ref: "School",
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    remarks: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Expense = model("Expense", expenseSchema);
