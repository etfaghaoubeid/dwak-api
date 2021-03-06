const { DataTypes } = require("sequelize");
DataTypes
const db = require("../config/db");

const Product = db.define('products', {
    name: {
        type: DataTypes.STRING
    },
    price: {
        type: DataTypes.INTEGER
    },
    images: {
        type: DataTypes.ARRAY(DataTypes.STRING)
    },
    quantity: {
        type: DataTypes.INTEGER
    },
    description: {
        type: DataTypes.TEXT,
    },
    ref: {
        type: DataTypes.STRING,
    },


});
module.exports = Product;