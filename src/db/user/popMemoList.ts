import db from "../db";
import User from '../models/User';
import {Types} from 'mongoose';

const popMemoList = (userId: Types.ObjectId, memoId: Types.ObjectId) => {
    return new Promise((resolve, reject) => {
        db()
            .then((conn) => {
                return User.updateOne(
                    {
                        _id: userId
                    },
                    {
                        $pop: {
                            memoList: memoId
                        }
                    }
                )
            })
            .then((doc) => {
                resolve(doc)
            })
            .catch((err) => {
                reject(err)
            })
    })
}

export default popMemoList