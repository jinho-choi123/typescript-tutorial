import express, { Router} from "express";
import createMemoRouter from "./createMemo";

var memoRouter: Router = express.Router();
memoRouter.post('/create', createMemoRouter);

export default memoRouter