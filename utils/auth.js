const { User } = require("../models")

exports.isEmailAlreadyExist = async(email)=>{
    try {
        const user = await User.find({where:{email:email}});
        if(user){
            return true;
        };
        return false;
    } catch (error) {
        return error.message
        
    }
}
