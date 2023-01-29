import express, {Request, Response, NextFunction} from 'express';

const app = express();
const port = process.env.PORT || '8080';

app.get('/checkserver', (req: Request, res: Response, next: NextFunction) => {
    res.send(`Server is running! Current timestamp is ${Date.now()}`);
});

app.listen(port, () => {
    console.log(`
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    Server is running at port ${port}
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    `);
})