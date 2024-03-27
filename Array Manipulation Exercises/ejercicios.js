//ej 1 Filtra los números pares de un array.
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const pares = numeros.filter((numero) => numero % 2 === 0);
console.log(pares);

//ej 2 Mapea un array de números a sus cuadrados.
const cuadrados = numeros.map((cuadrado) => cuadrado * 2);
console.log(cuadrados);

//ej 3 Filtra los estudiantes que hayan aprobado un examen con una nota mayor o igual a 7.
const estudiantes = [
  { nombre: "Juan", nota: 7 },
  { nombre: "María", nota: 8 },
  { nombre: "Pedro", nota: 5 },
  { nombre: "Ana", nota: 9 },
];

const approve = estudiantes.filter((estudiante) => estudiante.nota >= 7);
console.log(approve);

//ej 4 Mapea un array de objetos de estudiantes a sus nombres completos (nombre y apellido).
const estudiantes2 = [
  { nombre: "Juan", apellido: "Pérez" },
  { nombre: "María", apellido: "García" },
  { nombre: "Pedro", apellido: "López" },
  { nombre: "Ana", apellido: "Fernández" },
];

const objects = estudiantes2.map(
  (estudiante) => `${estudiante.nombre} ${estudiante.apellido}`
);

console.log(objects);

//ej 5 Filtra los productos que tengan un precio mayor que 100 y que pertenezcan a la categoría "Electrónica".

const productos = [
  { nombre: "Producto 1", precio: 50, categoria: "Hogar" },
  { nombre: "Producto 2", precio: 120, categoria: "Electrónica" },
  { nombre: "Producto 3", precio: 70, categoria: "Moda" },
  { nombre: "Producto 4", precio: 150, categoria: "Electrónica" },
  { nombre: "Producto 5", precio: 30, categoria: "Hogar" },
];

const compra = productos.filter(
  (price) => price.precio > 100 && price.categoria === "Electrónica"
);
console.log(compra);

// ej 6 Utiliza map y filter para crear un nuevo array que contenga solo las tareas que están completadas (es decir, que tienen un valor de true).

const tareas = [
  { id: 1, titulo: "Tarea 1", completada: true },
  { id: 2, titulo: "Tarea 2", completada: false },
  { id: 3, titulo: "Tarea 3", completada: true },
  { id: 4, titulo: "Tarea 4", completada: false },
  { id: 5, titulo: "Tarea 5", completada: true },
];

const tareasListas = tareas
  .filter((task) => task.completada === true)
  .map((task) => task.titulo);

console.log(tareasListas);

//REDUCE
//ej 1 Suma los valores de un array de números:

const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((acumulador, valor) => acumulador + valor);
console.log(sum);

//ej 2 Convierte un array de cadenas en una única cadena concatenada:

const cadenas = ["Hola", "mundo", "cómo", "estás"];

const concat = cadenas.reduce((acumulador, valor) => acumulador + "" + valor);
console.log(concat);

//ej 3 Encuentra el valor máximo y mínimo de un array de números:

const numebers3 = [1, 2, 3, 4, 5];

const maximo = numeros.reduce((acumulador, valorActual) =>
  Math.max(acumulador, valorActual)
);
const minimo = numeros.reduce((acumulador, valorActual) =>
  Math.min(acumulador, valorActual)
);
console.log("Valor máximo:", maximo);
console.log("Valor mínimo:", minimo);
