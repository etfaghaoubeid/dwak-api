const Accessory = require("./accessory.model");
const Phone = require("./phone.model");
const Product = require("./product.model");
const Role = require("./role.model");
const User = require("./user.model");

Product.hasOne(Phone, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});
Phone.belongsTo(Product);

Product.hasOne(Accessory, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});
Accessory.belongsTo(Product);


Role.belongsToMany(User, {
    through:'user_roles', 
    foreignKey:'roleId', 
    otherKey:'userId',
    onDelete:'CASCADE',
    onUpdate:'CASCADE'
});

User.belongsToMany(Role,{
    through:'user_roles',
    foreignKey:'userId',
    otherKey:'roleId',
    onDelete:'CASCADE',
    onUpdate:'CASCADE'
})
module.exports= {
    User, 
    Role,
    Product,
    Phone
}