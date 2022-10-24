const express = require("express")

const app = express()
const port = 5000


function cargar(){

    const name = document.getElementById("name").value
    
    document.getElementById("sayHi").innerHTML = `<h2> Hola ${name}</h2><h2> Como estas? </h2>`

    console.log(document.getElementById("sayHi").innerHTML)

    return
}