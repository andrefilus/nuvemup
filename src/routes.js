const express = require('express');

const routes = express.Router();

const MovieController = require('./controllers/MovieController');
const RecipeController = require('./controllers/RecipeController');
const UserController = require('./controllers/UserController');
const LoteController = require('./controllers/LoteController');

//GET, POST, PUT
routes.get("/movies", MovieController.index);
routes.get("/movies/:id", MovieController.show);
routes.post("/movies", MovieController.store);
routes.put("/movies", MovieController.update);

routes.get("/recipes", RecipeController.index);
routes.get("/recipes/:id", RecipeController.show);
routes.post("/recipes", RecipeController.store);
routes.put("/recipes", RecipeController.update);

routes.get("/lotes", LoteController.index);
routes.get("/lotes/:id", LoteController.show);
routes.post("/lotes", LoteController.store);
routes.put("/lotes", LoteController.update);

routes.get("/users", UserController.index);
routes.get("/users/:id", UserController.show);
routes.post("/users", UserController.store);
routes.put("/users", UserController.update);


module.exports = routes