import axios from 'axios';
import {Request, Response} from 'express';

const validatePassword = (password1: String, password2: String) => {
    return new Promise((resolve, reject) => {
        if (password1 == password2) {
            resolve(true)
        } else {
            reject("password doesnt match")
        }
    })
}

const register = (email: String, password1: String, password2: String) => {
    return new Promise((resolve, reject) => {
        validatePassword(password1, password2)
            .then(() => {
                return axios.post(
                    'http://auth-server:9090/users/create',
                    {
                        "email": email,
                        "password": password1,
                    }
                )
            })
            .then((res) => {
                console.log(res)
                resolve(res)
            })
            .catch((err) => {
                reject(err)
            })
    })
}

const registerRouter = (req: Request, res: Response) => {
    const userEmail = req.body.userEmail;
    const password1 = req.body.password1;
    const password2 = req.body.password2;

    register(userEmail, password1, password2)
        .then((data) => {
            res.send(data)
        })
        .catch((err) => {
            res.status(500).send(err)
        })
}

export default registerRouter