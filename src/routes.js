const express = require('express');

const routes = express.Router();

const MovieController = require('./controllers/MovieController');
const RecipeController = require('./controllers/RecipeController');

//GET, POST, PUT
routes.get("/movies", MovieController.index);
routes.get("/movies/:id", MovieController.show);
routes.post("/movies", MovieController.store);
routes.put("/movies", MovieController.update);

routes.get("/recipes", RecipeController.index);
routes.get("/recipes/:id", RecipeController.show);
routes.post("/recipes", RecipeController.store);
routes.put("/recipes", RecipeController.update);


module.exports = routes