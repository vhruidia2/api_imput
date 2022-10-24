
const express = require("express")

const api = express()
const port = 5000

api.get("/user",(req)=>{
    const name = (req,params,nombre)
    let result= parseInt( `Hola ${name} como estas?`)

    console.log(req,params)
    return res.status(200).json(result) 
})









api.listen(port, () => console.log(`Escuchando el puerto ${port}`))