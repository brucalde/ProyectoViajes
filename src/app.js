const express = require("express");
const app = express();
const path = require('path');
const routes = require('./routes/tiendaRoutes');
const databaseConnection = require('../config/database');



databaseConnection.connect();


app.use(express.json());



app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));


//rutas
app.use("/viajes", routes);





app.listen(4000, () => {
    console.log('Corriendo por puerto 4000')
});