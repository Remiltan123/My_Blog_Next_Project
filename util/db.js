// util/db.js
import mongoose from 'mongoose';

const connect = async () => {
    try {
        const con = await mongoose.connect(process.env.Mongo);
        if (con) {
            console.log("Database connected");
            return "Db connected";
        }
    } catch (err) {
        console.error("Database connection error:", err);
        throw new Error("Error connecting to database");
    }
};

export default connect;
