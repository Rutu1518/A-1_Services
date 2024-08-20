import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import { postLogin, postSignUp } from './controllers/user.js'
dotenv.config()
const PORT = process.env.PORT || 5000 
const MONGO_URL = process.env.MONGO_URL 
const app = express()
app.use(express.json())
app.use(cors())

const connectDB = async () => {
    const conn = await mongoose.connect(MONGO_URL)
    if(conn){
        console.log(`✅ MongoDB Connected Successfully 📦`)
    }
}
connectDB();



app.post("/v1/signups",postSignUp)
app.post("/v1/logins", postLogin)

app.listen (PORT , ()=>{
    console.log(`Server is running on ${PORT}`)
})
