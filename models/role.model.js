const { DataTypes, STRING } = require("sequelize");
const db = require("../config/db");
const User = require("./user.model");

const Role = db.define('roles', {

    // gess: {

    // },
    // user: {
    //     type: DataTypes.STRING
    // },

    // admin: {

    // },
    // super_admin: {

    // }
    // id: {
    //     type: DataTypes.INTEGER,
    //     primaryKey: true
    //   },
      name:{
          type:DataTypes.STRING
      }

});


module.exports = Role;