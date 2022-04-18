const asyncHandler = require('express-async-handler')

const Movies = require('../model/movieModel')

const getMovie =asyncHandler( async (req,res)=>{
    const movie = await Movies.find()
    res.status(200).json(movie);
})
const getMovieById = asyncHandler(async(req,res)=>{
    const movie = await Movies.findById(req.body.id)
    res.status(200).json(movie)
})
const setMovie = asyncHandler(async(req,res)=>{
    if(!req.body.title | !req.body.poster){
        res.status(400)
        throw new Error('You need to add title and poster for the movie')
    }
    const movie = await Movies.create({
        title:req.body.title,
        poster:req.body.poster,
        trailer:req.body.trailer,
        releaseDate:req.body.releasedate,
        })
    res.status(200).json(movie)
})

module.exports = {
    getMovie,
    setMovie,
    getMovieById,
 
}