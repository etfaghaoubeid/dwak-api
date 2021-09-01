const { Phone, Product } = require("../models")

exports.addPhone = async (req, res) => {
    try {
        const {
            price,
            description,
            images,
            quantity,
            name,
            memory,
            isUsed,
            ref,
        } = req.body;
        const phoneProduct = await Product.create({
            name,
            price,
            images,
            quantity,
            description,
            ref,
            phone: {
                memory,
                isUsed,

            }
        }, { include: [Phone] })
        return res.status(201).json({
            message: "prodcut add succefuly",
            phoneProduct
        });

    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};

exports.getPhones = async (req, res) => {
    try {
        const phones = await Phone.findAll({ include: [{ model: Product }] });
        return res.status(200).send({
            phones
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        })
    }
}

exports.updatePhone = async (req, res) => {
    try {
        const { id } = req.params;
        const {
            price,
            description,
            images,
            quantity,
            name,
            memory,
            isUsed,
            ref,
        } = req.body;
        let productToUpdate = await Product.findByPk(id, { include: [{ model: Phone }] });
        let phoneToUpdate = await productToUpdate.getPhone()
        let updatedPhone = await phoneToUpdate.update({
            memory: memory,
            isUsed: isUsed,
        })
        const updatedPhoneProduct = await productToUpdate.update({
            name: name || productToUpdate.name,
            price: price || productToUpdate.price,
            images: images || productToUpdate.images,
            quantity: quantity || productToUpdate.quantity,
            description: description || productToUpdate.description,
            ref: ref || productToUpdate.ref,
        })
        return res.status(201).json({
            message: "prodcut updated  succefuly",
            updatedPhoneProduct
        });

    } catch (error) {
        return res.status(500).json({
            message: error.message,
        })

    }
}
exports.deletePhone = async (req, res) => {
    try {
        const { id } = req.params;
        const phoneProduct = await Product.findByPk(id, { include: [{ model: Phone }] });
        if (phoneProduct) {
            await phoneProduct.destroy();
            return res.status(201).json({
                phoneProduct,
                message: "product delete successfuly"
            })
        }
        return res.status(300).json({
            message: ` There is no product with this id: ${id}`,
        })

    } catch (error) {
        return res.status(500).json({
            message: error.message,
        })

    }

}
exports.getPhone = async (req, res) => {
    try {
        const { id } = req.params;
        const phoneProduct = await Product.findByPk(id, { include: [{ model: Phone }] });
        if (phoneProduct) {
            return res.status(200).json({
                phoneProduct,
                message: "Get product successfuly"
            })
        }
        return res.status(300).json({
            message: ` There is no product with this id: ${id}`,
        })

    } catch (error) {
        return res.status(500).json({
            message: error.message,
        })

    }

}
