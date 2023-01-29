import express, {Request, Response, NextFunction} from 'express';
import checkserverRouter from './routers/test/checkserver';
import shownameRouter from './routers/test/showName';

const app = express();
const port = process.env.PORT || '8080';

// parse request body to json
app.use(express.json());

app.use('/checkserver', checkserverRouter);
app.use('/showname', shownameRouter);

app.listen(port, () => {
    console.log(`
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    Server is running at port ${port}
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    `);
})