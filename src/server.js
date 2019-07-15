const express = require('express');
const mongoose = require('mongoose');

const app = express();
mongoose.connect('mongodb+srv://posup:nuvemposup@cluster0-iji9k.mongodb.net/nuvemavancado?retryWrites=true&w=majority', 
    {
        useNewUrlParser: true    
    }
);

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(require('./routes'));

app.listen(3333);