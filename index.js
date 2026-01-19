// index.js - API REST 
const express = require("express");
const app = express();


app.use(express.json());

// Encabezados (CORS)
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

// Ruta base
app.get("/", (req, res) => res.send("API activa - Laboratorio "));

// Rutas usuario
const usuarioRoutes = require("./routes/usuario");
app.use("/usuario", usuarioRoutes);

// Arranque
const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor activo en http://localhost:${PORT}`));
