const { Router } = require("express");
const { userBoard, moderatorBoard, adminBoard } = require("../controllers/phones.controller");
const authJwt = require("../middlewares/auth.jwt");

const router = Router();
router.get("/user", [authJwt.verifyToken], userBoard)
router.get('/admin', [authJwt.verifyToken, authJwt.isAdmin], adminBoard)
router.get('/mod', [authJwt.verifyToken, authJwt.isModerator], moderatorBoard)
module.exports = router