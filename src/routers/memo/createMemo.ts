import express, { Router, Request, Response } from "express";
import create from "../../db/memo/create";
import {Types} from 'mongoose';

const createMemoRouter = (req: Request, res: Response) => {
    const userId = new Types.ObjectId(req.body.userId);
    const content = req.body.content;

    create(userId, content)
        .then((doc) => {
            res.send("created memo!")
        })
        .catch((err) => {
            res.status(500).send(err)
        })
}

export default createMemoRouter