const Actor = require("./Actor");
const Genre = require("./Genre");
const Movie = require("./Movie");
const Director = require("./director");

Movie.belongsToMany(Actor,{through: 'movieActors'})
Actor.belongsToMany(Movie,{through: 'movieActors'})

Movie.belongsToMany(Director,{through: 'movieDirector'})
Director.belongsToMany(Movie,{through: 'movieDirector'})

Movie.belongsToMany(Genre,{through: 'movieGenre'})
Genre.belongsToMany(Movie,{through: 'movieGenre'})

