export function habilitarBoton(inputs, boton) {
  const todosLlenos = [...inputs].every(input => {
    return input.value.trim() !== "";
  });

  boton.disabled = !todosLlenos;
}