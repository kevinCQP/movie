const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Actor = sequelize.define('actor', {
    firtsName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nationality: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Image: {
        type: DataTypes.STRING,
        allowNull: false
    },
    birthday: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

module.exports = Actor;