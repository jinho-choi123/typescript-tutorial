import express, { Router, Request, Response } from "express";
import updateMemo from "../../db/memo/update";
import {Types} from 'mongoose';

const updateMemoRouter = (req: Request, res: Response) => {
    const userId = new Types.ObjectId(req.body.userId);
    const memoId = new Types.ObjectId(req.body.memoId);
    const content = req.body.content;

    updateMemo(userId, memoId, content)
        .then((doc) => {
            res.send("update memo success");
        })
        .catch((err) => {
            res.status(500).send(err)
        })
}

export default updateMemoRouter