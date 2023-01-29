import {expect} from 'chai';
import mongoose from 'mongoose';

describe('connecting to mongoDB', () => {
    it('test connection', (done) => {
        mongoose.connect(process.env.MONGO_URL!)
            .then(() => {
                done()
            })
            .catch((err) => {
                done(new Error("Error while connecting to mongoDB"));
            })
    })
})