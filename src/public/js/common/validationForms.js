export function habilitarBoton(inputs, boton) {
  const camposLlenos = [...inputs]
    .filter(input => input.type !== "radio")
    .every(input => input.value.trim() !== "");

  const radios = [...inputs].filter(input => input.type === "radio");

  const gruposRadio = [...new Set(radios.map(radio => radio.name))];

  const radiosSeleccionados = gruposRadio.every(nombre => {
    return document.querySelector(
      `input[name="${nombre}"]:checked`
    );
  });

  boton.disabled = !(camposLlenos && radiosSeleccionados);
}