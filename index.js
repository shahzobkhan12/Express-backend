const express = require("express");
const ConnectDb = require("./Config/db");
const dotenv = require('dotenv')
dotenv.config()
const app = express()
const port = process.env.port || 4000;
ConnectDb()
app.get( "/",(rq,res)=>{
    res.send("hello world")
})


app.listen(port,()=>{
    console.log(`server is running on port:${port}`)
})

