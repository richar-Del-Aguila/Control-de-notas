import { habilitarBoton } from "../common/validationForms.js";

//inputs text
const inputNombres = document.getElementById("nombresUsuario");
const inputApellidos = document.getElementById("apellidosUsuario");
const inputUsuario = document.getElementById("usuarioIngresado");
const inputContra = document.getElementById("passwordIngresada");
const inputEmail = document.getElementById("emailUsuario");
//botones
const btnRegistrar = document.getElementById("btnRegistrar");
const btnGenerarUsuario = document.getElementById("btnGenerarUsuario");
//inputs radio
const radioAdmin = document.getElementById("admin");
const radioProfe = document.getElementById("profesor");
const radioAlumn = document.getElementById("alumno");
//fromulario
const formulario = document.querySelector("form");

function VerificarRol() {
  let rolElejido = "";

  if (radioAdmin.checked) {
    rolElejido = "admin";
  } else if (radioAlumn.checked) {
    rolElejido = "alumn";
  } else {
    rolElejido = "teacher";
  }
  return rolElejido;
}

const inputs = [
  inputNombres,
  inputApellidos,
  inputUsuario,
  inputContra,
  radioAdmin,
  radioProfe,
  radioAlumn,
];

btnGenerarUsuario.addEventListener("click", function () {
  let nombres = inputNombres.value.trim();
  let apellidos = inputApellidos.value.trim();

  if (nombres !== "" && apellidos !== "") {
    document.getElementById("alert-container").style.display = "none";
    let numeroAleatorio = Math.floor(Math.random() * 9000) + 1000;
    let usuarioGenerado =
      nombres.slice(0, 3) + apellidos.slice(0, 3) + numeroAleatorio;
    inputUsuario.value = usuarioGenerado.toLowerCase();
    habilitarBoton(inputs, btnRegistrar);
  } else {
    document.getElementById("alert-container").style.display = "block";
  }
});

inputs.forEach((input) => {
  const evento = input.type === "radio" ? "change" : "input";

  input.addEventListener(evento, () => {
    habilitarBoton(inputs, btnRegistrar);
  });
});

formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  const datosUsuario = {
    nombres: inputNombres.value,
    apellidos: inputApellidos.value,
    correo: inputEmail.value,
    usuario: inputUsuario.value,
    password: inputContra.value,
    rol: VerificarRol(),
  };

});
