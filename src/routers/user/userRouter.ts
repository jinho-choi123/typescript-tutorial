import express, { Router} from "express";
import createUserRouter from "./createUser";
import deleteUserRouter from "./deleteUser";

var userRouter: Router = express.Router();

userRouter.post('/create', createUserRouter);
userRouter.delete('/delete', deleteUserRouter);

export default userRouter