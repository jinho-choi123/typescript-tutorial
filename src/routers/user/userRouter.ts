import express, { Router} from "express";
import createUserRouter from "./createUser";

var userRouter: Router = express.Router();

userRouter.post('/create', createUserRouter);

export default userRouter