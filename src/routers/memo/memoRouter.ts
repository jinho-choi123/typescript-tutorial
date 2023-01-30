import express, { Router} from "express";
import createMemoRouter from "./createMemo";
import deleteMemoRouter from "./deleteMemo";
import updateMemoRouter from "./updateMemo";

var memoRouter: Router = express.Router();
memoRouter.post('/create', createMemoRouter);
memoRouter.delete('/delete', deleteMemoRouter);
memoRouter.put('/update', updateMemoRouter);

export default memoRouter