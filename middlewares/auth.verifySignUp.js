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
        const user = User.findOne({where:{
            username
        }});
        if(user){
            return res.status(400).send({message:"Username already in use"});
        };
        const userWithThisEmail = User.findOne({where:{
            email
        }});
        if(userWithThisEmail){
            return res.status(400).send({message:"Email already in use"});
        };
        next()
        
    } catch (error) {
        console.log('Can not ferify user sign up ')
    }
} 
async function checkRolesExist(req ,res, next){
    if(req.body.roles){
        for(let i=0 ;i<req.body.roles.length;i++){
            if(ROLES?.includes(req.body.roles[i])){
                next()
            };
            return res.send({message:'Failed! Role does not exist'+req.body.roles[i]})
        }
    }
}
const verifySignUp= {
    chekDuplicatedUsernameAndEmail,
    checkRolesExist
}

module.exports =verifySignUp