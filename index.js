const express = require("express");
const ConnectDb = require("./Config/db");
const dotenv = require('dotenv');
const ProductModel = require("./models/productschema");
dotenv.config()
const app = express()
const port = process.env.port || 4000;
ConnectDb()
app.use(express.json())

let products = [
    {
        id: 0,
        title: " Chinos Pant",
        price: 1000,
        description: "string",
        category: "Pant",
        image: "http://example.com"
    }
]
let users = [
    {

        Name: "darwaish",
        Email: "darwaish@gmail.com",
        Password: "!@345"
    }
]
app.get("/api/products", (req, res) => {
    res.send(products)
})
app.get("/", (rq, res) => {
    res.send("hello world")
})
app.get("/api/users", (req, res) => {
    res.send(users)
})
app.post("/api/products",async (req, res) => {
    let newproducts = req.body
    let product = await ProductModel.create(newproducts)

        res.send(product)
})


app.listen(port, () => {
    console.log(`server is running on port:${port}`)
})

