import "dotenv/config";
import express from "express";
import pool from "./config/database.js";

const app = express();
const PORT = 3000;

async function obtenerUsuarios() {
    try {
        const resultado = await pool.query("SELECT * FROM usuarios");

        console.log("Usuarios encontrados:");
        console.log(resultado.rows);
    } catch (error) {
        console.error("Error al obtener usuarios:");
        console.error(error.message);
    }
}

obtenerUsuarios();

app.listen(PORT, () => {
    console.log(`Servidor en http://localhost:${PORT}`);
});

async function crearUsuario() {
    try {
        const consulta = `
            INSERT INTO usuarios (
                nombres_usuario,
                apellidos_usuario,
                email_usuario,
                nombre_usuario,
                contrasena,
                rol
            )
            VALUES ($1, $2, $3, $4, $5, $6)
            RETURNING *
        `;

        const valores = [
            "Carlos",
            "Pérez",
            "carlos@gmail.com",
            "carlosp",
            "123456",
            "Profesor"
        ];

        const resultado = await pool.query(consulta, valores);

        console.log("✅ Usuario creado:");
        console.log(resultado.rows[0]);
    } catch (error) {
        console.error("❌ Error al crear usuario:");
        console.error(error.message);
    }
}

crearUsuario();