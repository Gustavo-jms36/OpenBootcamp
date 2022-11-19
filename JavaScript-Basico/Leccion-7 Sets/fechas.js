const fechaHoy = new Date();
console.log(fechaHoy);

const fechaNac = new Date(1986, 3, 3);
console.log(fechaNac);

const masTardeNac = fechaHoy > fechaNac;
console.log(masTardeNac);

const diaNac = fechaNac.getDate();
console.log(diaNac);

const mesNac = fechaNac.getMonth() + 1;
console.log(mesNac);

const yearNac = fechaNac.getFullYear();
console.log(yearNac);