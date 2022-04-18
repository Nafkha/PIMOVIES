const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
    nom:{
        type: String,
        required: [true,'Nom']
    },
    prenom:{
        type: String,
        required: [true,'Prenom']
    },    
    email:{
        type: String,
        required: [true,'Email'],
        unique: true
    },
    password:{
        type: String,
        required: [true,'Add a password']
    },
    favourites:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Movies'
    }],
},
{timestamp:true})

module.exports= mongoose.model('User',userSchema)