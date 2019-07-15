const mongoose = require('mongoose');

const Movie = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    vote_count: {
        type: Number
    },
    title: {
        type:String,
        required: true
    },
    overview: {
        type:String,
        required: true
    },
    poster_path: {
        type:String,
    },
    vote_average: {
        type: Number,
    },
    popularity: {
       type: Number 
    },
    original_language: {
        type: String
    }, 
    original_title: {
        type:String
    },
    backdrop_path: {
        type:String
    },
    adult: {
        type:Boolean
    },
    release_date: {
        type:String
    }
},  {
    timestamps:true
});

module.exports = mongoose.model("Movie", Movie);