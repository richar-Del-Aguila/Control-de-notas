import { habilitarBoton } from "../common/validationForms.js";

//Inputs text
const inputNombres = document.getElementById("nombresUsuario");
const inputApellidos = document.getElementById("apellidosUsuario");
const inputCorreo = document.getElementById("correoUsuario");
//inputs radio
const radioAdmin = document.getElementById("admin");
const radioProfe = document.getElementById("profesor");
const radioAlumn = document.getElementById("alumno");
//Boton
const btnSolicitar = document.getElementById("btnSolicitar");

const inputs = [
    inputNombres,
    inputApellidos,
    inputCorreo,
    radioAdmin,
    radioProfe,
    radioAlumn
];

inputs.forEach(input => {
    const evento = input.type === "radio" ? "change" : "input";

    input.addEventListener(evento, () => {
        habilitarBoton(inputs, btnSolicitar);
    });
});