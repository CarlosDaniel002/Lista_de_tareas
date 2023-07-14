const btn = document.querySelector(".btn");
const cleanButton = document.querySelector('.limpiar');

/* Arreglo */
let tareas = [];

btn.addEventListener("click", () => {
  agregarTarea();
  /* Se llama a la funcion agregar tarea */
});

cleanButton.addEventListener('click',()=>{
  CleanTaskList();
    /* Se llama a la funcion Limpiar la lista de tareas */
} );

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
      desplegarTareas();
    }
    document.querySelector(".input").value = "";
  }
};

const desplegarTareas = () => {
  /* Creamos un elemento ul y eliminamos el contenido de este */
  const ul = document.querySelector("ul");
  ul.textContent = "";
  tareas.forEach((tarea) => {
    /* Recorremoos todas las tareas del arreglo */
    /* Para cada tarea creamos un elemento li con un atributo id, esto para eliminar y cambiar el estado mas adelante */
    const li = document.createElement("li");
    li.setAttribute("data-id", tarea.id);
    if (tarea.completado) {
      /* Si la tarea esta completada, le colocamos una clase */
      li.classList.add("completado");
    }
    /* Rellenamos el contenido del li */
    li.innerHTML = `<p>${tarea.nombre}</p><button class="delete"><i class="fa-solid fa-trash"></i></button>`;
    const deleteBtn = li.querySelector(".delete");
    const cambiarEstado = li.querySelector("p");
    
    /* NOTA: Cuando las funciones de eliminar y cambiar el estado esten completadas, llamarlas aqui */
    /* cambiarEstado.addEventListener("click", estado)*/

    deleteBtn.addEventListener("click", () => {
      const taskId = parseInt(li.getAttribute("data-id"));
      eliminarTarea(taskId);
    });
    
    ul.appendChild(li);
  });
};

function CleanTaskList () {
  tareas = [];
  desplegarTareas();
};

function eliminarTarea (index){
   // Buscar la tarea en el array utilizando el ID
   const tareaIndex = tareas.findIndex(tarea => tarea.id === index);

   if (tareaIndex !== -1) {
     // Eliminar la tarea del array
     tareas.splice(tareaIndex, 1);
     desplegarTareas();
  }
}
