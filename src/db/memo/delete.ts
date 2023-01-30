import db from '../db';
import Memo from '../models/Memo';
import {Types} from 'mongoose';
import pushMemoList from '../user/pushMemoList';

const deleteMemo = (userId: Types.ObjectId, memoId: Types.ObjectId) => {
    return new Promise((resolve, reject) => {
        db()
            .then(() => {
                return Memo.deleteOne({_id: memoId, author: userId})
            })
            .then(() => {
                return pushMemoList(userId, memoId)
            })
            .then((doc) => {
                resolve(doc)
            })
            .catch((err) => {
                reject(err)
            })
    })
}

export default deleteMemo