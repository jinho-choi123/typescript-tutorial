import express, { Router, Request, Response } from "express";
import create from "../../db/user/create";

const createUserRouter = (req: Request, res: Response) => {
    const userEmail = req.body.userEmail;
    const userPassword1 = req.body.userPassword1;
    const userPassword2 = req.body.userPassword2;

    create(userEmail, userPassword1, userPassword2)
        .then((doc) => {
            res.send(userEmail);
        })
        .catch((err) => {
            res.status(500).send(err)
        })
}

export default createUserRouter