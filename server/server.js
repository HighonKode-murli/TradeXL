import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import dbConnect from './config/mongoose.config.js'
import router from './routes/trade.routes.js';

dbConnect();

const app = express();

app.use(express.json(),cors());

dotenv.config();

// use the router middleware for handling API routes under /api prefix
app.use('/api',router)

const PORT  = process.env.PORT

app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`)
})