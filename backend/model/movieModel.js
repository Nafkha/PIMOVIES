const mongoose = require('mongoose')
const movieSchema = mongoose.Schema({
     title:{
         type: String,
         required: [true,'Movie Title']
     },
     poster:{
         type:String,
         required:[true,'Movie Poster'],
     },
     trailer:{
         type:String,
     },
     releaseDate:{
         type: Date
     },
     rating:[{
         type: Number
     }]
     
  
},
{timestamp:true})

module.exports= mongoose.model('Movies',movieSchema)