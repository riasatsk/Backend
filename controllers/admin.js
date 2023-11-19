import { User } from "../models/user.js";
import { Subject } from "../models/subject.js";
import { Teacher } from "../models/teacher.js";
import { Class } from "../models/class.js";
import { Student } from "../models/student.js";

export const getHome = async (req, res, next) => {
  const user = await User.findById(req._id);
  res.status(200).json(`Hello I think you are ${user.name}`);
};

export const addSubject = async (req, res, next) => {
  const subjectName = req.body.subjectName;
  if (!subjectName) {
    return res.status(406).json("no subject name found");
  }
  const subject = new Subject({
    school: req.school,
    name: subjectName,
  });

  try {
    const subjectId = (await subject.save())._id;
    res.status(201).json({ subjectId: subjectId });
  } catch (err) {
    res.status(500).json("Server Error");
  }
};

export const deleteSubject = async (req, res, next) => {
  const subjectId = req.body.subjectId;
  if (!subjectId) {
    return res.status(404).json("no subject name found");
  }

  try {
    Subject.findByIdAndRemove(subjectId).then((subject) => {
      res.status(200).json("Success");
    });
  } catch (error) {
    res.status(404).json("Failed");
  }
};

export const getSubject = async (req, res, next) => {
  const subjects = await Subject.find({ school: req.school });
  res.json(subjects);
};

export const addTeacher = async (req, res, next) => {
  const name = req.body.name;
  const phone = req.body.phone;
  const email = req.body.email;
  const subject1 = req.body.subject1;
  const subject2 = req.body.subject2;
  const teacher = new Teacher({
    name: name,
    phone: phone,
    email: email,
    subject1: subject1,
    subject2: subject2,
    school: req.school,
  });
  const newTeacher = await teacher.save();
  res.status(201).json(newTeacher);
};

export const getTeacher = async (req, res, next) => {
  const teachers = await Teacher.find({ school: req.school });
  if (!teachers) {
    return res.status(404).json("No data found");
  }
  res.status(200).json(teachers);
};

export const addClass = async (req, res, next) => {
  const name = req.body.name;
  const newClass = new Class({
    name: name,
    school: req.school,
  });
  res.status(201).json(await newClass.save());
};

export const getClass = async (req, res, next) => {
  const classes = await Class.find({ school: req.school });
  res.status(200).json(classes);
};

export const addStudent = async (req, res, next) => {
  const firstName = req.body.firstName;
  const middleName = req.body.middleName;
  const lastName = req.body.lastName;
  const dateOfBirth = req.body.dateOfBirth;
  const gender = req.body.gender;
  const classId = req.body.classId;
  const roll = req.body.roll;
  const year = req.body.year;
  const parentOrGuardainName = req.body.parentName;
  const phone = req.body.phone;
  const address = req.body.address;
  const mode = req.body.mode;
  const className = await Class.findById(classId);
  const student = new Student({
    school: req.school,
    firstName: firstName,
    middleName: middleName,
    lastName: lastName,
    dateOfBirth: dateOfBirth,
    gender: gender,
    classId: classId,
    className: className.name,
    year: new Number(year),
    roll: roll,
    parentOrGuardainName: parentOrGuardainName,
    phone: phone,
    address: address,
    mode: mode,
  });
  const newStudent = await student.save();
  res.status(201).json(newStudent);
};

export const getStudent = async (req, res, next) => {
  const students = await Student.find({
    school: req.school,
  });
  res.status(200).json(students);
};

export const getStudentByClass = async (req, res, next) => {
  const classId = req.params.classId;
  const students = await Student.find({
    school: req.school,
    classId: classId,
  });
  res.status(200).json(students);
};

export const getTeacherById = async (req, res, next) => {
  const teacherId = req.params.teacherId;
  const teacher = await Teacher.findById(teacherId);
  res.status(200).json(teacher);
};
