import db from "../db";
import User from '../models/User';

const deleteUser = (userEmail: String) => {
    //verify if user itself or admin is deleting

    //check if user exists in database. error if not exists

    return new Promise((resolve, reject) => {
        db()
            .then((conn) => {
                return User.deleteOne({userEmail: userEmail})
            })
            .then(() => {
                resolve(0)
            })
            .catch((err) => {
                reject(err)
            })
    })
    
}

export default deleteUser