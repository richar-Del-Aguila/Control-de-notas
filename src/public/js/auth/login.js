import { habilitarBoton } from "../common/validationForms.js";

const btnIngresar = document.getElementById("btnIngresar");
const usuarioIngresado = document.getElementById("usuarioIngresado");
const contrasenaIngresada = document.getElementById("contrasenaIngresada");
const inputs = [usuarioIngresado, contrasenaIngresada];

inputs.forEach(input => {
    input.addEventListener("input", () => {
        habilitarBoton(inputs, btnIngresar);
    });
});