// routes/usuario.js - CRUD Usuario 
const express = require("express");
const router = express.Router();
const conexion = require("../conexion");

// Consultar TODOS los usuarios
router.get("/", (req, res) => {
  const sql = "SELECT * FROM usuario";
  conexion.query(sql, (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

// Consultar usuario por CEDULA
router.get("/:cedula", (req, res) => {
  const { cedula } = req.params;
  const sql = "SELECT * FROM usuario WHERE cedula = ?";
  conexion.query(sql, [cedula], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    if (rows.length === 0) return res.status(404).json({ mensaje: "Usuario no encontrado" });
    res.json(rows[0]);
  });
});

// Crear usuario
router.post("/", (req, res) => {
  const { cedula, nombres, apellidos, correo, telefono, direccion } = req.body;
  const sql = "INSERT INTO usuario (cedula, nombres, apellidos, correo, telefono, direccion) VALUES (?, ?, ?, ?, ?, ?)";
  conexion.query(sql, [cedula, nombres, apellidos, correo, telefono, direccion], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ mensaje: "Usuario creado correctamente" });
  });
});

// Actualizar usuario 
router.put("/:cedula", (req, res) => {
  const { cedula } = req.params;
  const { nombres, apellidos, correo, telefono, direccion } = req.body;

  const sql = `
    UPDATE usuario
    SET nombres = ?, apellidos = ?, correo = ?, telefono = ?, direccion = ?
    WHERE cedula = ?
  `;

  conexion.query(sql, [nombres, apellidos, correo, telefono, direccion, cedula], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.affectedRows === 0) return res.status(404).json({ mensaje: "Usuario no encontrado" });
    res.json({ mensaje: "Usuario actualizado correctamente" });
  });
});

// Eliminar usuario
router.delete("/:cedula", (req, res) => {
  const { cedula } = req.params;
  const sql = "DELETE FROM usuario WHERE cedula = ?";
  conexion.query(sql, [cedula], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.affectedRows === 0) return res.status(404).json({ mensaje: "Usuario no encontrado" });
    res.json({ mensaje: "Usuario eliminado correctamente" });
  });
});

module.exports = router;
