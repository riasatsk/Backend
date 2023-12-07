import express from "express";
import mongoose from "mongoose";
const PORT = process.env.PORT || 3030;
const DB_PASS = process.env.DB_PASS
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
  .connect("mongodb+srv://riasatsk:_Xvm4c_ER8rNzkw@database1.vdkvpvp.mongodb.net/?retryWrites=true&w=majority")
  .then(() => {
    app.listen(PORT);
  })
  .catch((err) => {
    console.log(err);
  });
