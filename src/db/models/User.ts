import mongoose, { Schema } from "mongoose";

const {Types: {ObjectId}} = Schema;

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    memoList: [
        {
            type: ObjectId,
            required: true,
            ref: 'Memo'
        }
    ],
})

export default mongoose.model('User', userSchema);