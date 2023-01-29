import mongoose from "mongoose";

let check_db_connection = () => {
    const mongo_url: string = process.env.MONGO_URL!;
    mongoose.connect(mongo_url)

}