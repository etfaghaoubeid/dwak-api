const { Product, Accessory } = require('../models')
exports.addAccessory = async (req, res) => {
    try {
        const {
            price,
            description,
            images,
            quantity,
            name,
            ref,
            accessory_type,
            is_original,
        } = req.body;

        const accessoryProduct = await Product.create({
            name,
            price,
            images,
            quantity,
            description,
            ref,
            accessory: {
                accessory_type,
                is_original,
            }
        }, { include: [Accessory] });
        return res.status(201).json({
            message: "prodcut added succefuly",
            accessoryProduct
        });

    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
}
exports.getAccessory = async (req, res) => {
    try {
        const { id } = req.params
        const accessory = await Product.findByPk(id, { include: [{ model: Accessory }] });
        return res.status(201).json({
            message: "Get accessory succefuly",
            accessory
        });

    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
}
exports.getAccessories = async (req, res) => {
    try {
        const accessories = await Accessory.findAll({ include: [{ model: Product }] });

        return res.status(201).send(
            accessories
        );

    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
}
exports.updateAccessory = async (req, res) => {
    try {
        const { id } = req.params;
        const {
            name,
            price,
            images,
            quantity,
            description,
            ref,
            accessory_type,
            is_original,
        } = req.body;
        let productToUpdate = await Product.findByPk(id, { include: [{ model: Accessory }] });
        let accessoryToUpdate = await productToUpdate.getAccessory();
        const updatedAccessory = await accessoryToUpdate.update({
            accessory_type: accessory_type || accessoryToUpdate.accessory_type,
            is_original: is_original || accessoryToUpdate.is_original,
        });
        const updatedAccessoryProduct = await productToUpdate.update({
            name: name || productToUpdate.name,
            price: price || productToUpdate.price,
            images: images || productToUpdate.images,
            quantity: quantity || productToUpdate.quantity,
            description: description || productToUpdate.description,
            ref: ref || productToUpdate.ref,

        });
        return res.status(201).json({
            message: "prodcut updated  succefuly",
            updatedAccessoryProduct
        });
    }
    catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
}
exports.deleteAccessory = async (req, res) => {
    try {
        const { id } = req.params;
        const productToDelete = await Product.findByPk(id, { indlude: [{ model: Accessory }] });
        if (productToDelete) {
            await productToDelete.destroy();
            return res.status(201).json({
                productToDelete,
                message: "product delete successfuly"
            });
        }
        return res.status(300).json({
            message: ` There is no product with this id: ${id}`
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
}