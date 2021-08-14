const { Role ,User } = require("../models");

exports.signUp = async (req, res) => {
    try {
        const {email , password , username}= req.body;
        // find in user exist 
        const user = new User({email, password, username});
        const saveduser = await user.save();
        return res.status(201).json({ user:{saveduser},message:"user created successfuly"})
    } catch (error) {
        
    }
}

async function seedDB(){
    try {
        console.log("sign-up route requested 11111111111111111111")
        const user = new User({ username: "atigh", email: "atigh@gmail.com", password:"`atigh" });
        const savedUser = await user.save();
        const r1= new Role({name:"user"});
        const sr1 = await r1.save();

        const r2= new Role({name:"admin"});
        const sr2 = await  r2.save();

        const r3= new Role({name:"moderator"});
        const sr3 = await r3.save();
        
        return res.send(savedUser);
    } catch (error) {
        console.log("CATCH ERROR  MESSAGE :", error.message)
    }

}