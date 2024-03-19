let mysql = require("mysql");

let conexion = mysql.createConnection({
    host:"localhost",
    database:"canciones",
    user:"root",
    password:""
});

conexion.connect(function(err){
    if(err){
        throw err;
    }else{
        console.log("conexion exitosa")
    }
});
conexion.end();