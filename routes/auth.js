import { Router } from "express";
import { login, addSchool } from "../controllers/auth.js";


export const authRouter = Router();

authRouter.post("/login", login);

authRouter.post("/add-school", addSchool);
