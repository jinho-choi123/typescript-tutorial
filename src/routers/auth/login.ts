import axios from 'axios';
import { Request, Response } from 'express';

const login = (email: String, password: String) => {

    return new Promise((resolve, reject) => {
        axios.post(
            'http://auth-server:9090/users/login', 
            {
                "email": email,
                "password": password
            })
            .then((res) => {
                resolve(res.data)
            })
            .catch((err) => {
                reject(err)
            })
        }
        )
    }

const loginRouter = (req: Request, res: Response) => {
    const userEmail = req.body.userEmail;
    const password = req.body.password;

    login(userEmail, password)
        .then((data) => {
            res.send(data)
        })
        .catch((err) => {
            res.status(500).send(err)
        })
}

export default loginRouter