import express, {Request, Response, NextFunction} from 'express';
import checkserverRouter from './routers/test/checkserver';
import shownameRouter from './routers/test/showName';
import userRouter from './routers/user/userRouter';

const app = express();
const port = '10101';

// parse request body to json
app.use(express.json());

app.use('/checkserver', checkserverRouter);
app.use('/showname', shownameRouter);
app.use('/user', userRouter);

app.listen(port, () => {
    console.log(`
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    Server is running at port ${port}
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    `);
})