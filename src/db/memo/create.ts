import db from '../db';
import Memo from '../models/Memo';
import pushMemoList from '../user/pushMemoList';
import { Types } from 'mongoose';

const createMemo = (userId: Types.ObjectId, content: String) => {
    const newMemo = new Memo({
        author: userId,
        content: content
    })
    const memoId = newMemo._id;

    return new Promise((resolve, reject) => {
        db()
            .then(() => {
                return newMemo.save()
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

export default createMemo