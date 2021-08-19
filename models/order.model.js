const { DataTypes } = require("sequelize");
const db = require("../config/db");

const Order = db.define('orders', {
    status: {
        type: DataTypes.BOOLEAN
    },
    receiver_phoneNumber: {
        type: DataTypes.INTEGER
    },
    quantity: {
        type: DataTypes.INTEGER
    }

});

module.exports = Order;