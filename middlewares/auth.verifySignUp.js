const { ROLES } = require("../constants/user.roles");
const { User, Role } = require("../models");

async function getRoles(){
    try {
        const roles = await Role.findAll();
        return roules
        
    } catch (error) {
      return 'Can\'t get roles '  
    }
} 

async function chekDuplicatedUsernameAndEmail(req, res,next){
    try {

        const {username, email } =req.body
        const user = await User.findOne({
            where: {
            username
        }});
        if (user && user.username === username) {
            return res.status(400).send({message:"Username already in use"});
        };
        const userWithThisEmail = await User.findOne({
            where: {
            email
        }});
        if (userWithThisEmail && userWithThisEmail.email == email) {
            return res.status(400).send({message:"Email already in use"});
        };
        next()
        
    } catch (error) {
        console.log('Can not ferify user sign up ', error.message)
    }
} 
async function checkRolesExist(req ,res, next){

    const { roles } = req.body
    if (roles) {
        for (let i = 0; i < roles.length; i++) {
            if (ROLES?.includes(roles[i])) {
                return next()
            };
        }
        return res.send({ message: 'Failed! Role does not exist' })
    }
    console.log(" checkRolesExist middleware 11111111111111 just before next", roles)

    next()
}
const verifySignUp= {
    chekDuplicatedUsernameAndEmail,
    checkRolesExist
}

module.exports =verifySignUp