const { Router } = require("express");
const { addPhone, getPhones, deletePhone, getPhone, updatePhone } = require("../controllers/phone.controller");
const router = Router()
router.post('/add-phone', addPhone);
router.get('/', getPhones);
router.delete('/:id', deletePhone);
router.get('/:id', getPhone);
router.put('/:id', updatePhone);
module.exports = router