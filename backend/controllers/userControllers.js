const jwt = require('jsonwebtoken')
const bcrypt =  require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../model/userModel')
const Movies = require('../model/movieModel')

const registerUser = asyncHandler(async (req,res)=>{
    const {nom,prenom,email,password} = req.body
    if(!nom || !email || !password){
        res.status(400)
        throw new Error('Please add all fields')
    }
    const userExists = await User.findOne({email})
    if(userExists){
        res.status(400)
        throw new Error('User Exists')
    }
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password,salt)
    const user = await User.create({
        nom,
        prenom,
        email,
        password: hashedPassword
    })
    if(user){
        res.status(201).json({
            _id:user._id,
            nom:user.name,
            email:user.email,
			token: generateToken(user._id)
        })
    }else{
        res.status(400)
        throw new Error('Invalid User Data')
    }

    res.json({message:'Register User'})
})

const loginUser = asyncHandler(async (req,res)=>{
    const {email,password} = req.body
    const user = await User.findOne({email})
    if(user &&(await bcrypt.compare(password,user.password)) ){
        res.json({
            _id: user.id,
            name:user.name,
            email:user.email,
            favourites:user.favourites,
            token:generateToken(user._id)
        })
    }else{
        res.status(400)
        throw new Error('Invalid Credentials')
    }
})
const getMe = asyncHandler(async (req,res)=>{
    const{_id,nom,email,favourites} = await User.findById(req.user.id)
    res.status(200).json({
        id: _id,
        nom,
        email,
        favourites
    })
   
})
const getFavouriteMovies = asyncHandler(async(req,res)=>{
    const {favourites}= await User.findById(req.user.id)
    res.status(200).json({
        favourites
    })
})
const addFavourites = asyncHandler(async(req,res)=>{
    const user = await User.findById(req.user.id)
    console.log("USER : "+user)
    console.log("MOVIE ID "+req.body.movieId)
    user.favourites.push(req.body.movieId);
    const us = await user.save()
    res.json("Worked")

})
const deleteFavourites = asyncHandler(async(req,res)=>{
    const user = await User.findById(req.user.id)
    user.favourites.pull(req.body.movieId);
    const us = await user.save()
    res.json("Favourite Movie deleted")
})

const generateToken = (id)=>{
    return jwt.sign({id},process.env.JWT_SECRET,{
        expiresIn:'30d',
    })
    
}
module.exports = {
    registerUser,
    loginUser,
    getMe,
    addFavourites,
    deleteFavourites,
    getFavouriteMovies
}