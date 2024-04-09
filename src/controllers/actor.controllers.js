const catchError = require('../utils/catchError');
const actor = require('../models/Actor');
const Genre = require('../models/Genre');
const Director = require('../models/director');
const Movie = require('../models/Movie');

const getAll = catchError(async(req, res) => {
    const results = await actor.findAll({include: [Genre,actor,Director]});
    return res.json(results);
});

const create = catchError(async(req, res) => {
    const result = await actor.create(req.body);
    return res.status(201).json(result);
});

const getOne = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await actor.findByPk(id);
    if(!result) return res.sendStatus(404);
    return res.json(result);
});

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await actor.destroy({ where: {id} });
    if(!result) return res.sendStatus(404);
    return res.sendStatus(204);
});

const update = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await actor.update(
        req.body,
        { where: {id}, returning: true }
    );
    if(result[0] === 0) return res.sendStatus(404);
    return res.json(result[1][0]);
});


module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update,
   
}