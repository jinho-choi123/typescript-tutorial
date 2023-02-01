import express, {Request, Response, NextFunction} from 'express';
import authRouter from './routers/auth/authRouter';
import memoRouter from './routers/memo/memoRouter';
import checkserverRouter from './routers/test/checkserver';
import userRouter from './routers/user/userRouter';

const app = express();
const port = '10101';

// parse request body to json
app.use(express.json());

app.use('/checkserver', checkserverRouter);
app.use('/user', userRouter);
app.use('/memo', memoRouter);
app.use('/auth', authRouter);

app.listen(port, () => {
    console.log(`
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    Server is running at port ${port}
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    `);
})