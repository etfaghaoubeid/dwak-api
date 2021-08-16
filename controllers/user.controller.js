const { Sequelize } = require("sequelize");
const { Role ,User } = require("../models");
const jwt = require('jsonwebtoken');

const bcrypt = require('bcryptjs');
exports.signUp = async (req, res) => {
    try {
        const { roles, username, email, password } = req.body;
        const user = new User({ username, email, password: bcrypt.hashSync(password, 8) });
        if (roles) {
            const existingRoles = await Role.findAll({
                where: {
                    name: {
                        [Sequelize.Op.or]: roles
                    }
                }
            });
            const newUser = await user.save();
            await user.setRoles(existingRoles);
            return res.status(201).send({ message: 'user was register successfuly', newUser });

        } else {
            const svedUser = await user.save();
            await user.setRoles([1]);
            return res.send({ message: 'User was registred successfully', svedUser })
        }

    } catch (error) {
        return res.status(500).send({ message: error.message })

    }
}
exports.signIn = async (req, res) => {
    try {
        const { email, username, password } = req.body;
        const user = await User.findOne({
            where: {
                username
            }
        });
        if (!user) {
            return res.status(404).send({ message: "User not found" });
        }
        const validPassword = bcrypt.compare(password, user.password)
        if (!validPassword) {
            return res.status(401).send({
                accessToken: null,
                message: "Ivalid username or  password"
            })
        }
        const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY, { expiresIn: 86400 });
        let authorities = []
        const roles = await user.getRoles();
        for (let i = 0; i < roles.length; i++) {
            authorities.push("Roles_" + roles[i].name.toUpperCase())
        };
        return res.status(200).send({
            id: user.id,
            username: user.username,
            email: user.email,
            roels: authorities,
            accessToken: token
        });
    } catch (error) {
        return res.status(500).send({ message: error.message });
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