const listaCompras = ['tomate', 'vinagre', 'arroz', 'leche'];

listaCompras.push('Aceite de Girasol');
console.log( listaCompras)

listaCompras.pop();
console.log( listaCompras)

const peliculas = [
    {
        titulo: 'El color purpura',
        director: 'Steven Spielberg',
        fecha: new Date(1986, 1, 7)
    },

    {
        titulo: 'Mad Max: Fury Road',
        director: 'George Miller',
        fecha: new Date(2015, 4, 14)
    },

    {
        titulo: 'Dragon Rojo',
        director: 'Brett Ratner',
        fecha: new Date(2002, 8, 30)
    }
]

console.log(peliculas);

const peliculas2 = peliculas.filter(pelicula  => pelicula.fecha > new Date(2010, 0, 1) ) 
console.log(peliculas2)

const directores = peliculas.map(pelicula => {
    return pelicula.director
})
console.log(directores);

const titulos = peliculas.map(pelicula => {
    return pelicula.titulo
})
console.log(titulos);

const nuevaListaConcat = directores.concat(titulos)
console.log(nuevaListaConcat);

const nuevaListaPropagacion = [...directores, ...titulos]
console.log(nuevaListaPropagacion);
