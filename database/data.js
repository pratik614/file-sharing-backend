import mongoose from "mongoose"

export const connectDb =()=>{

    const URI="mongodb+srv://pratik:pratik55@file-sharing.xoyhpy8.mongodb.net/?retryWrites=true&w=majority"

try {
    mongoose.connect(URI,{
        dbName:"file-sharing"
    })
    console.log("database is connected");
    
} catch (error) {
    console.error("error while connecting to database",error.message)
}

}