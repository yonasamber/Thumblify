import mongoose from 'mongoose'

const connectDB = async()=>{
    try{
        mongoose.connection.on("connected", ()=>{console.log("monodb connected")})
        await mongoose.connect("")
    }
}