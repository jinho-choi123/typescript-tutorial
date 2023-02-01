import express, {Router} from 'express';
import loginRouter from './login';
import logoutRouter from './logout';
import registerRouter from './register';
import verifyMiddleware from './verify';

var authRouter: Router = express.Router();

authRouter.post('/login', loginRouter);
authRouter.post('/register', registerRouter);
// authRouter.get('/logout', verifyMiddleware, logoutRouter);

export default authRouter;