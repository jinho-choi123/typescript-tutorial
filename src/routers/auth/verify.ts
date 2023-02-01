import axios from 'axios';
import {NextFunction, Request, Response} from 'express';
import authorizedRequest from '../../utils/custom';

const verify = (req: Request) => new Promise((resolve, reject) =>{
    const access_jwt = req.header("Authorization");
    axios.get(
        'http://auth-server:9090/jwt/verify',
        {
            headers: {
                "Authorization": access_jwt,
            }
        }
    )
        .then((res) => {
            resolve(res.data)
        })
        .catch((err) => {
            reject(err)
        })
} )


const verifyMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const authReq = req as authorizedRequest;
    verify(authReq)
        .then((data) => {
            return new Promise((resolve, reject) => {
                authReq.user = `${data}`;
                resolve(true);
            })
        })
        .then(() => {
            next()
        })
        .catch((err) => {
            res.status(500).send("UnAuthorized")
        })
}

export default verifyMiddleware