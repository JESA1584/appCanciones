let mysql = require("mysql");

let conexion = mysql.createConnection({
    host: "localhost:3306",
    database: "Canciones",
    user: "root",
    password:""
});

conexion.connect(function(err){
    if (err){
        throw err;
    }else{
        console.log("conección exitosa");
    }
});
conexion.end();