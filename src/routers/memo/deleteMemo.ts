import express, {Router, Request, Response} from "express";
import deleteMemo from "../../db/memo/delete";
import {Types} from "mongoose";

const deleteMemoRouter = (req: Request, res: Response) => {
    const userId = new Types.ObjectId(req.body.userId);
    const memoId = new Types.ObjectId(req.body.memoId);

    deleteMemo(userId, memoId)
        .then((doc) => {
            res.send("delete memo!")
        })
        .catch((err) => {
            res.status(500).send(err)
        })
}

export default deleteMemoRouter