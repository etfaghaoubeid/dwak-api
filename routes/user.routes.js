const { Router } = require("express");
const { signUp, signIn } = require("../controllers/user.controller");
const verifySignUp = require("../middlewares/auth.verifySignUp");

const router = Router();
router.post('/sign-up', [verifySignUp.chekDuplicatedUsernameAndEmail, verifySignUp.checkRolesExist], signUp);
router.post('/sign-in', signIn)

module.exports = router