import db from '../db';
import Memo from '../models/Memo';
import {Types} from 'mongoose';

const updateMemo = (userId: Types.ObjectId, memoId: Types.ObjectId, content: String) => {
    return new Promise((resolve, reject) => {
        db()
            .then(() => {
                return Memo.updateOne(
                    {
                        author: userId, 
                        memoId: memoId
                    }, 
                    {
                        content: content,
                        modifiedAt: new Date(),
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

export default updateMemo