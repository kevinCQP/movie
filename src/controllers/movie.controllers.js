const catchError = require('../utils/catchError');
const movie = require('../models/Movie');
const Director = require('../models/director');
const Genre = require('../models/Genre');
const Actor = require('../models/Actor');

const getAll = catchError(async(req, res) => {
    const results = await movie.findAll({include:[Genre,Actor,Director]});
    return res.json(results);
});

const create = catchError(async(req, res) => {
    const result = await movie.create(req.body);
    return res.status(201).json(result);
});

const getOne = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await movie.findByPk(id, {include:[Genre,Actor,Director]});
    if(!result) return res.sendStatus(404);
    return res.json(result);
});

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await movie.destroy({ where: {id} });
    if(!result) return res.sendStatus(404);
    return res.sendStatus(204);
});

const update = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await movie.update(
        req.body,
        { where: {id}, returning: true }
    );
    if(result[0] === 0) return res.sendStatus(404);
    return res.json(result[1][0]);
});
const setGenrestomovies = catchError(async(req,res) => {
    const {id} = req.params;
    const  Movie = await movie.findByPk(id);
    if(!Movie) return res.status(404).json({error: "movie not found"});
    //seteo
    await Movie.setGenres(req.body);
    //leer
    const genres  =  await Movie.getGenres();
    return  res.json(genres);
})
const  setActorToMovies = catchError(async(req,res) => {
    //id de las peliculas q tendran los actores
    const {id} = req.params;
    const  Movie = await movie.findByPk(id);
    if(!Movie) return res.status(404).json({error: "movie not found"});
    //seteo
    await Movie.setActors(req.body);
    //leer
    const actors  =  await Movie.getActors();
    return  res.json(actors)
})
const setDirectorToMovies  =catchError(async(req,res) =>{
    const  {id} = req.params;
    const Movie = await movie.findByPk(id)
    await  Movie.setDirectors();
    const director  = Movie.getDirectors();
    return res.json(director)
})
module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update,
    setGenrestomovies,
    setActorToMovies,
    setDirectorToMovies
}