const { DataTypes } = require("sequelize");
const db = require("../config/db");
const Accessory = db.define('accessories', {
    accessory_type: {
        type: DataTypes.STRING
    },
    is_original: {
        type: DataTypes.BOOLEAN
    },

});
module.exports = Accessory;

