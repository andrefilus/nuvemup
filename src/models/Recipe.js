const mongoose = require('mongoose');

const Recipe = new mongoose.Schema({
    title: {
        type:String,
        required: true
    },
    category: {
        type:String,
        required: true
    },
    steps: {
        type:String,
        required: true
    },
    picture_path: {
        type:String,
        required: true
    },
    author_path: {
        type:String,
        required: true
    },
    author_name: {
        type:String,
        required: true
    }
},  {
    timestamps:true
});

module.exports = mongoose.model("Recipe", Recipe);