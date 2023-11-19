import { Exam } from "../models/academics/exam";

export const createExam = async (req, res, next) => {
  const examName = req.body.examName;
  const examDate = req.body.examDate;

  const exam = await new Exam({
    school: req.school,
    name: examName,
    date: examDate,
  }).save();

  res.status(201).json(exam);
};
