import mongoose, { Schema } from "mongoose";

const {Types: {ObjectId}} = Schema;

const memoSchema = new Schema({
    author: {
        type: ObjectId,
        required: true,
        ref: 'User',
    },
    content: {
        type: String,
        default: "",
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    modifiedAt: {
        type: Date,
        default: Date.now,
    }
})

export default mongoose.model('Memo', memoSchema)