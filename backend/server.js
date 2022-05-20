const express = require('express')
const dotenv = require('dotenv').config()
const colors  =require('colors')
const connectDB = require('./config/db')
const bodyParser = require('body-parser')
const {errorHandler} = require('./middleware/errorMiddleware')

const app = express()
const port = process.env.port
app.use(express.json())
app.use(express.urlencoded({extended:false}))
connectDB()
//C:\Users\nafkh\Desktop\PIMovies\backend\node_modules\express\node_modules\raw-body
app.use('/api/users',require('./routes/userRoutes'))
app.use('/api/movies',require('./routes/movieRoutes'))


app.listen(port,()=>console.log(`Server started on port ${port}`))
