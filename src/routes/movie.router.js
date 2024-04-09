const { getAll, create, getOne, remove, update, setGenrestomovies, setActorToMovies, setDirectorToMovies } = require('../controllers/movie.controllers');
const express = require('express');

const routerMovie = express.Router();

routerMovie.route('/')
    .get(getAll)
    .post(create);

    
routerMovie.route('/:id/actors')
    .post(setActorToMovies);

routerMovie.route('/:id/genres')
    .post(setGenrestomovies);

routerMovie.route('/:id/directors')
    .post(setDirectorToMovies);

routerMovie.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = routerMovie;