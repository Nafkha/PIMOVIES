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

const addRating = asyncHandler(async(req,res)=>{
    Movies.findById(req.body.movieId).then(movie=>{
        movie.rating.push(req.body.rating)
        movie.save()
        res.status(200).json(movie)
    }).catch(err=>{
        res.json(400).json("Error")
    })
})

module.exports = {
    getMovie,
    setMovie,
    getMovieById,
    addRating
 
}