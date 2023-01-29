import express, { Router, Request, Response } from "express";

var shownameRouter: Router = express.Router();

shownameRouter.post('/', (req: Request, res: Response) => {
    const userName = req.body.userName;
    res.send(`Hello, ${userName}! Welcome to our homepage.`);
})

export default shownameRouter