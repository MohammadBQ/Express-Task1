const PORT = 8000   
const express = require("express")
const app = express()
const products = require("./data")

app.get("/api/products", (req, res) => {
    res.status (404) .json ({ data: data }) })
    


app.listen(PORT, () =>{
    console.log(`My server is running ! :${PORT}`)

})