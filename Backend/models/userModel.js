const { text } = require("express");
const mongoose = require("mongoose");   
const { search } = require("../routes");


const userSchema = mongoose.Schema({
    fName : {
        type : String,
        required : true,
        trim : true,
        text : true
    },
    lName : {
        type : String,
        required : true,
        trim : true,
        text : true
    },
    userName : {
        type : String,
        required : true,
        trim : true,
        text : true,
        unique : true,
        lowercase : true
    },
    email : {
        type : String,
        required : true,
        trim : true, 
    },
    password : {
        type : String,
        required : true
    },
    profilePic : {
        type : String,
        default : ''
    },
    coverPic : {
        type : String,
        default : ''
    },
    bio : {
        type : String,
        default : ''
    },
    friends :[ 
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'User'
        }
     ],
    followers :[ 
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'User'
        }
     ],
    following :[
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'User'
        }
    ], 
    requests :[
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'User'
        }
    ], 
    bDay: {
        type: String, 
        required: true,
        trim: true
    },
    bMonth: {
        type: String, 
        required: true,
        trim: true
    },
    bYear: {
        type: String, 
        required: true,
        trim: true
    },
    gender: {
        type: String, 
        required: true,
        trim: true,
        enum: ['male' , 'female' , 'other']
    },
    isVarified : {
        type : Boolean,
        default : false
    },
    search : [
        {
            user : {
                type : mongoose.Schema.Types.ObjectId,
                ref : 'User' ,  
                text : true
            },
            createdAt: {
                type: Date,
                default: Date.now
            }
        }
    ],
    otherName: {
        type: String, 
        trim: true
    } ,
    currentCity: {
        type: String, 
        trim: true
    },
    hometown: {
        type: String, 
        trim: true
    },
    relationshipStatus: {
        type: String, 
        enum: ['Single' , 'In a relationship' , 'Engaged' , 'Complicated' , 'Married' , 'Divorced' , 'Widowed' , 'Separated'],
        trim: true
    },
    work: {
        type: String, 
        trim: true
    },
    school: {
        type: String, 
        trim: true
    },
    college: {
        type: String, 
        trim: true
    },
    about: {
        type: String, 
        trim: true
    },
    job: {
        type: String, 
        trim: true
    },
    savedPosts : [
        {
            post: {
                type : mongoose.Schema.Types.ObjectId,
                ref : 'Post'
            },
            savedAt: {
                type: Date,
                default: Date.now
            }
        }
    ]
} , { timestamps : true })

module.exports = mongoose.model('User' , userSchema)