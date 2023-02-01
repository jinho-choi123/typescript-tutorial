import axios from 'axios';
import {Request, Response} from 'express';
import authorizedRequest from '../../utils/custom';

const logout = (email: String) => {
    return new Promise((resolve, reject) => {
        axios.post(
            'http://auth-server:9090/users/logout',
            {
                "email": email,
            }
        )
        .then((res) => {
            resolve(res.data)
        })
        .catch((err) => {
            reject(err)
        })
    })
}

const logoutRouter = (req: authorizedRequest, res: Response) => {
    console.log("inside logout router")
}

export default logoutRouter