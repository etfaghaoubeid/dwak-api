const { Sequelize, DataTypes } = require("sequelize");
const db = require("../config/db");
const Role = require("./role.model");

const User = db.define('users', {
    username: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    }
});

module.exports = User;