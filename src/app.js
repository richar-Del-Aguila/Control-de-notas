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
