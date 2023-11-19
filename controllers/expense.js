import { Expense } from "../models/accounting/expense.js";

export const createExpense = async (req, res, next) => {
  const amount = req.body.amount;
  const remarks = req.body.remarks;

  const expense = new Expense({
    school: req.school,
    amount: amount,
    remarks: remarks,
  }).save();

  res.json(expense);
};

export const getExpense = async (req, res, next) => {
  const page = req.query.page;
  const expenses = await Expense.find({ school: req.school })
    .skip((page - 1) * 10)
    .limit(10)
    .sort("-createdAt");
  if (!expenses) {
    return res.json("No Expense");
  }
  res.json(expenses);
};

export const getCount = async (req, res, next) => {
  const count = await Expense.countDocuments({
    school: req.school,
  });
  if (!count) {
    return res.json(0);
  }
  res.json(count);
};

export const deleteExpense = async (req, res, next) => {
  const expenseId = req.body.expenseId;
  const expense = await Expense.findOneAndDelete({
    school: req.school,
    _id: expenseId,
  });
  res.json(expense);
};
