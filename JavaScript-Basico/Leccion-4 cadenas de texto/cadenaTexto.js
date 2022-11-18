let nombre = 'Gustavo';
let apellido = 'Mota'

let estudiante = `${nombre} ${apellido}`;
let estudianteMayus = estudiante.toUpperCase();
let estudianteMinus = estudiante.toLowerCase();
let numLetras = estudiante.length;
let primerLetra = nombre.charAt();
let ultimaLetra = apellido.charAt(apellido.length - 1);
let eliminarEspacios = estudiante.split(" ").join("");
let incluye = estudiante.includes(nombre)

console.log(nombre, apellido, estudiante, estudianteMayus, estudianteMinus, numLetras, primerLetra, ultimaLetra, eliminarEspacios, incluye )