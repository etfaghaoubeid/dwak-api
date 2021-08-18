const { DataTypes } = require("sequelize");

const db = require("../config/db");

const Phone = db.define('phones', {
    memory: {
        type: DataTypes.INTEGER
    },
    isUsed: {
        type: DataTypes.BOOLEAN
    },

});
module.exports = Phone;