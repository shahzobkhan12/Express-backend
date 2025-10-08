const express = require("express");
const cors = require("cors");
const ConnectDb = require("./Config/db");
const dotenv = require('dotenv');
const ProductModel = require("./models/productschema");
dotenv.config()
const app = express()
const port = process.env.port || 4000;
ConnectDb()
app.use(express.json())
app.use(cors())



app.get("/", (rq, res) => {
    res.send("hello world")
})
app.get("/api/products", async (req, res) => {
    try {
        let products = await ProductModel.find()
        if (products) {
            res.json({
                message: "Product Fetched Successfully",
                products
            })
        }
        else {
            res.json({
                message: "no products"
            })
        }
    } catch (err) {
        res.status(500).json({ message: "Server error", error });
    }
});

app.get("/api/products/:id", async (req, res) => {
    let { id } = req.params
    try {
        let product = await ProductModel.findById(id)
        if (product) {
            res.json({
                message: "Product Fetched Successfully",
                product
            })
        }
        else {
            res.json({
                message: "no products"
            })
        }
    } catch (err) {
        res.status(500).json({ message: "Server error", error });
    }
});

app.post("/api/products", async (req, res) => {
    let newproducts = req.body
    let product = await ProductModel.create(newproducts)

    res.send(product)
})
app.put("/api/products/:id", async (req, res) => {
    let { id } = req.params
    let datatoupdate = req.body
    try {
        let updateproduct = await ProductModel.findByIdAndUpdate(id, datatoupdate, { new: true })
        if (!updateproduct) {
            res.json({
                message: "no product to update",
                status: false
            })
        }
        else {
            res.json({
                message:"product updated",
                 updateproduct,
                status: true
            })
        }
    } catch (error) {
        res.json({
            message: "server error",
            error
        })
    }



})
app.delete("/api/products/:id", async (req, res) => {
    let { id } = req.params
    let datatodelete = req.body
    try {
        let deleteproduct = await ProductModel.findByIdAndDelete(id, datatodelete, { new: true })
        if (!updateproduct) {
            res.json({
                message: "no product to delete",
                status: false
            })
        }
        else {
            res.json({
                message: deleteproduct,
                status: true
            })
        }
    } catch (error) {
        res.json({
            message: "server error",
            error
        })
    }
})





app.listen(port, () => {
    console.log(`server is running on port:${port}`)
})

