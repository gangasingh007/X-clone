import mongoose from "mongoose"

export const DbConnect = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log("The Database has been connected on ",conn.connection.host);
    } catch (error) {
        console.log("There was an error connecting the Database", error);
    }
}