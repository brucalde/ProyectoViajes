const express = require('express');
const routes = express.Router();
const databaseConnection = require('../../config/database');




routes.get('/', (req, res) => {

    res.render("./pages/index")
});


routes.get("/paquetes", (req, res) => {

    res.render("./pages/paquetes")
});


routes.get("/inicio", (req, res) => {

  res.render("./pages/index")
});


routes.get("/contactos" , (req, res) => {
    
    res.render("./pages/contactos")
           
});


routes.get("/alojamientos", (req, res) => {

    databaseConnection.query('SELECT * FROM alojamientos', (error, data) => {
        if (error) {
            console.log(error)
        } else {
            res.render("./pages/alojamientos", {
                data
            })
        }
    })
    
    
});




module.exports = routes;