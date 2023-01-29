import express, { Router, Request, Response } from "express";

var checkserverRouter: Router = express.Router();

checkserverRouter.get('/', (req: Request, res: Response) => {
    res.send(`Server is running! Current timestamp is ${Date.now()}`);
})

export default checkserverRouter