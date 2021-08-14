const { Router } = require("express");
const { signUp } = require("../controllers/user.controller");
const router = Router();
router.get('/sign-up', signUp)

module.exports = router