import express, { Router, Request, Response } from "express";
import deleteUser from "../../db/user/delete";

const deleteUserRouter = (req: Request, res: Response) => {
    const userEmail: String = req.body.userEmail;

    deleteUser(userEmail)
        .then(() => {
            res.send("user delete success!")
        })
        .catch((err) => {
            res.status(500).send(err)
        })
}

export default deleteUserRouter