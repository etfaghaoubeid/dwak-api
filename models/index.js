const Role = require("./role.model");
const User = require("./user.model");
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
    Role
}