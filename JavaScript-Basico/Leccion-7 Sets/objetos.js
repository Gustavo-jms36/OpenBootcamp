const datosPersonales = {
  nombre: 'Gustavo',
  apellido: 'Mota',
  edad: 36,
  altura: 1.74,
  eresDesarrollador: true
};

const edad = datosPersonales.edad;
console.log(edad);

const array = [
  {
    ...datosPersonales
  },
  {
    nombre: 'Ivan',
    apellido: 'Rodriguez',
    edad: 32,
    altura: 1.69,
    eresDesarrollador: false
  },
  {
    nombre: 'Alexander',
    apellido: 'Mena',
    edad: 25,
    altura: 1.70,
    eresDesarrollador: false,
  },
];

const newArrayOrd = array.sort((a, b) => b.edad - a.edad);

console.log(newArrayOrd);
