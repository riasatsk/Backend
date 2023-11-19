import jwt from "jsonwebtoken";

export const isAuth = async (req, res, next) => {
  const token = await req.get("Authorization").split(" ")[1];
  try {
    let decodeHeader = jwt.verify(token, "solid_world");
    req._id = decodeHeader._id;
    req.school = decodeHeader.school;
    next();
  } catch (err) {
    res.status(401).json("You are not allowed");
  }
};
