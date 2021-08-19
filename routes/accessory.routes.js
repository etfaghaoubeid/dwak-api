const { Router } = require("express");
const { getAccessory, addAccessory, getAccessories, updateAccessory, deleteAccessory } = require("../controllers/accessory.controller");

const router = Router();
router.post('/add-accessory', addAccessory);
router.get('/:id', getAccessory);
router.get('/', getAccessories);
router.put('/:id', updateAccessory);
router.delete('/:id', deleteAccessory);

module.exports = router