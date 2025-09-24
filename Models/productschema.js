const { default: mongoose, Schema } = require("mongoose")

const ProductSchema = new Schema({
    productname: {
        type: String,
        required: true
    },
    category: {

        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true
    },

    description: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
})
const ProductModel = mongoose.model("Product", ProductSchema)
module.exports = ProductModel

