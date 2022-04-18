const express =require('express')
const router = express.Router()
const {registerUser,loginUser,getMe,addFavourites,deleteFavourites,getFavouriteMovies} = require('../controllers/userControllers')
const {protect} = require('../middleware/authMiddleware')

router.post('/',registerUser)
router.post('/login',loginUser)
router.get('/me',protect ,getMe)
router.post('/addFavourite',protect,addFavourites)
router.post('/deleteFavourite',protect,deleteFavourites)
router.get('/favouriteMovies',protect,getFavouriteMovies)

module.exports =router