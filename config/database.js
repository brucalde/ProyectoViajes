const mysql = require('mysql2');

const databaseConnection = mysql.createConnection({
    host: "bpxwupixbughxjghtybv-mysql.services.clever-cloud.com",
    user: "uxgzr6ophyqcsdun",
    database: "bpxwupixbughxjghtybv",
    password: "XSM4vEHeq52FROJ8U17N"
    
});



databaseConnection.connect((error) => {
    if (error) {
        console.log(error)
    } else {
        console.log('Servidor conectado a mysql')
    }
});



module.exports = databaseConnection ;