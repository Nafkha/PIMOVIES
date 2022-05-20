const express =require('express')
const router = express.Router()
const {getMovie,getMovieByName,setMovie,getMovieById,addRating} = require('../controllers/movieControllers')
const {protect} = require('../middleware/authMiddleware')

router.post('/',setMovie)
router.get('/',getMovie)
router.get('/movie',getMovieById)
router.get('/movieByName',getMovieByName);
//router.post('/addRating',protect,addRating)


module.exports =router