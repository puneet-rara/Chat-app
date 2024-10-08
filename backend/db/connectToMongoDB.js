import mongoose from "mongoose";

const connectToMongoDB=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_DB_URI,{
            dbName:'ChatApp'
        }).then((e)=>console.log("Connected to MongoDB"))
        
    } catch (error) {
        console.log("Error Connecting to MongoDB",error)
        console.log("Error Connecting to MongoDB",error.message)
    }
}
export default connectToMongoDB