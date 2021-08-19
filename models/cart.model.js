const { DataTypes } = require("sequelize");
const db = require("../config/db")

const Cart = db.define('carts', {
    products: {
        type: DataTypes.STRING
    }

});
module.exports = Cart