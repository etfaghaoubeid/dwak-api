const { DataTypes } = require("sequelize");

const db = require("../config/db");

const Accessory = db.define('accessories', {
    type: {
        type: DataTypes.STRING,
    },
});
module.exports = Accessory;