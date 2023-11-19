import { User } from "../models/user.js";
import { School } from "../models/school.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const addSchool = async (req, res, next) => {
  const schoolName = req.body.schoolName;
  const userName = req.body.userName;
  const email = req.body.email;
  const phone = req.body.phone;
  const password = req.body.password;
  const school = new School({ name: schoolName });
  const schoolId = (await school.save())._id;
  const hashedPassword = await bcrypt.hash(password, 12);
  const user = new User({
    name: userName,
    email: email,
    phone: phone,
    password: hashedPassword,
    school: schoolId,
    role: "admin",
  });
  const newUser = await user.save();
  res.json(newUser);
};

export const login = async (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  try {
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.json("No user found");
    }
    const isLegit = await bcrypt.compare(password, user.password);
    if (!isLegit) {
      return res.json("wrong Passeord");
    }
    const token = await jwt.sign(
      {
        school: user.school,
        _id: user._id,
        role: user.role,
      },
      "solid_world"
    );
   await res.json({ token: token });
  } catch (error) {}
};
