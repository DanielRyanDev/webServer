const { Router } = require("express");
const movieRouter = Router();
const { addMovie, updateMovie, findMovie, deleteMovie } = require("./movieControllers");

movieRouter.post("/movie", addMovie);
movieRouter.put("/movie", updateMovie);
movieRouter.get("/movie", findMovie);
movieRouter.delete("/movie", deleteMovie);

module.exports = movieRouter