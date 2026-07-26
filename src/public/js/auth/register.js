const inputNombres = document.getElementById("nombresUsuario");
const inputApellidos = document.getElementById("apellidosUsuario");
const inputUsuario = document.getElementById("usuarioIngresado");
const btnGenerarUsuario = document.getElementById("btnGenerarUsuario")

btnGenerarUsuario.addEventListener("click", function () {
    let nombres = inputNombres.value.trim();
    let apellidos = inputApellidos.value.trim();

    if (
        inputUsuario.value.trim() === "" &&
        nombres !== "" &&
        apellidos !== ""
    ) {
        document.getElementById("alert-container").style.display = "none";
        let numeroAleatorio = Math.floor(Math.random() * 9000) + 1000
        let usuarioGenerado = nombres.slice(0, 3) + apellidos.slice(0, 3) + numeroAleatorio;
        inputUsuario.value = usuarioGenerado.toLowerCase();
    } else{
        document.getElementById("alert-container").style = "block";
    }
})