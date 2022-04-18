const express =require('express')
const router = express.Router()
const {getMovie,setMovie,getMovieById} = require('../controllers/movieControllers')

router.post('/',setMovie)
router.get('/',getMovie)
router.get('/movie',getMovieById)


module.exports =router