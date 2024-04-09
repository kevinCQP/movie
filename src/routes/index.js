const express = require('express');
const routerGenre = require('./genre.router');
const routerActor = require('./actor.router');
const routerDirector = require('./director.roter');
const routerMovie = require('./movie.router');
const router = express.Router();

// colocar las rutas aquí
router.use('/genres', routerGenre )
router.use('/actor', routerActor )
router.use('/director', routerDirector)
router.use('/movie', routerMovie)



module.exports = router;