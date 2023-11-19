import { Router } from "express";
import {
  addClass,
  addStudent,
  addSubject,
  addTeacher,
  deleteSubject,
  getClass,
  getHome,
  getStudent,
  getStudentByClass,
  getSubject,
  getTeacher,
  getTeacherById,
} from "../controllers/admin.js";
import { isAuth } from "../middleware/is-auth.js";
import {
  createEvent,
  deleteEvent,
  getEvent,
  getEventCount,
} from "../controllers/event.js";
import {
  createExpense,
  deleteExpense,
  getCount,
  getExpense,
} from "../controllers/expense.js";
export const adminRouter = Router();

adminRouter.get("/", isAuth, getHome);
adminRouter.get("/subject", isAuth, getSubject);
adminRouter.post("/add-subject", isAuth, addSubject);
adminRouter.delete("/delete-subject", isAuth, deleteSubject);
adminRouter.post("/add-teacher", isAuth, addTeacher);
adminRouter.get("/teacher", isAuth, getTeacher);
adminRouter.post("/add-class", isAuth, addClass);
adminRouter.get("/class", isAuth, getClass);
adminRouter.post("/add-student", isAuth, addStudent);
adminRouter.get("/student", isAuth, getStudent);
adminRouter.get("/student/:classId", isAuth, getStudentByClass);

adminRouter.get("/teacher/:teacherId", isAuth, getTeacherById);

//Events Routes
adminRouter.post("/events", isAuth, createEvent);
adminRouter.get("/events/count", isAuth, getEventCount);
adminRouter.get("/events", isAuth, getEvent);
adminRouter.delete("/events", isAuth, deleteEvent);

//Expense Routes
adminRouter.get("/expense", isAuth, getExpense);
adminRouter.get("/expense/count", isAuth, getCount);
adminRouter.post("/expense", isAuth, createExpense);
adminRouter.delete("/expense", isAuth, deleteExpense);
