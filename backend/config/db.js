
import mongoose from "mongoose";

export const connectMongoDB = async () => {
    mongoose.connect(process.env.DB_URI).then((data) => {
        console.log("Database Connected", data.connection.host);
    }).catch((err) => {
        console.log(err.message);
    })
}
