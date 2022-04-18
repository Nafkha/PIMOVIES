const express = require('express')
const dotenv = require('dotenv').config()
const colors  =require('colors')
const connectDB = require('./config/db')
const {errorHandler} = require('./middleware/errorMiddleware')

const app = express()
const port = process.env.port
app.use(express.json())
app.use(express.urlencoded({extended:false}))
connectDB()
app.use('/api/users',require('./routes/userRoutes'))
app.use('/api/movies',require('./routes/movieRoutes'))


app.listen(port,()=>console.log(`Server started on port ${port}`))
