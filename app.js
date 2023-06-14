const PORT = 8000   
const express = require("express")
const app = express()
const data = require("./data")

app.get("/api/products", (req, res) => {
    res.status (404) .json ({ data: data }) })
    


app.listen(PORT, () =>{
    console.log(`My server is running ! :${PORT}`)

})