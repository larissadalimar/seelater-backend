import { Router } from "express";
import { login, signUp } from "../controllers/auth.controller.js";
import loginMiddleware from "../middlewares/login.middleware.js";
import signUpMiddleware from "../middlewares/signUpValidation.middleware.js";


const authRouters = Router();

authRouters
.post("/login", loginMiddleware, login)
.post("/sign-up", signUpMiddleware, signUp);

export default authRouters;