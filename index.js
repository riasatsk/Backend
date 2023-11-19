import express from "express";
import mongoose from "mongoose";

import { authRouter } from "./routes/auth.js";
import { adminRouter } from "./routes/admin.js";

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE");
  res.setHeader("Access-Control-AlLow-Headers", "Content-Type, Authorization");
  next();
});

app.use(authRouter);
app.use(adminRouter);

mongoose
  .connect("mongodb://localhost:27017/krittim")
  .then(() => {
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
