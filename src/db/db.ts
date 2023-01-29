import mongoose from "mongoose";

const db = () => { 
    return mongoose.connect(process.env.MONGO_URL!);
}

export default db