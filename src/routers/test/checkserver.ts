import express, { Router, Request, Response } from "express";
import currentTimestamp from "../../utils/currentTimestamp";

var checkserverRouter: Router = express.Router();

checkserverRouter.get('/', (req: Request, res: Response) => {
    res.send(`Server is running! Current timestamp is ${currentTimestamp()}`);
})

export default checkserverRouter