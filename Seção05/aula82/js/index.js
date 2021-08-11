//                  0          1         2          3         4
const nomes = ['Cleverson', 'Marcos', 'Filipe', 'Teresa', 'Branca'];

//nomes.splice(indice, delete, elem1, elem2, elem3);

const removidos = nomes.splice(3, 1, 'Luiz');

console.log(nomes, removidos);