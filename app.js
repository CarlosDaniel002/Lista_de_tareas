const btn = document.querySelector(".btn");

/* Arreglo */
let tareas = [];

btn.addEventListener("click", () => {
  agregarTarea();
  /* Se llama a la funcion agregar tarea */
});

const agregarTarea = () => {
  /* Se captura el valor del input */
  const valor = document.querySelector(".input").value;
  if (valor) {
    /* Se crea un objeto*/
    const newTarea = {
      id: tareas.length + 1,
      nombre: valor,
      completado: false,
    };
    /* Se agrega el objeto al arreglo */
    tareas.push(newTarea);
    if (newTarea) {
      /* Llamar a la funcion recorrer */
    }
    document.querySelector(".input").value = "";
  }
};
