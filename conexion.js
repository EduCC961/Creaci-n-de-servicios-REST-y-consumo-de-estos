// conexion.js - Conexión MySQL 
const mysql = require("mysql2");


const conexion = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "admin",   
  database: "lab_rest"
});

conexion.connect((err) => {
  if (err) {
    console.error("Error conectando a MySQL:", err.message);
    return;
  }
  console.log("Conectado a MySQL (lab_rest) ✅");
});

module.exports = conexion;
