const express = require('express');

const routes = express.Router();

const MovieController = require('./controllers/MovieController');

//GET, POST, PUT
routes.get("/movies", MovieController.index);
routes.get("/movies/:id", MovieController.show);
routes.post("/movies", MovieController.store);
routes.put("/movies", MovieController.update);


module.exports = routes