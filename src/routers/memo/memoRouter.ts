import express, { Router} from "express";
import createMemoRouter from "./createMemo";
import deleteMemoRouter from "./deleteMemo";

var memoRouter: Router = express.Router();
memoRouter.post('/create', createMemoRouter);
memoRouter.delete('/delete', deleteMemoRouter);

export default memoRouter