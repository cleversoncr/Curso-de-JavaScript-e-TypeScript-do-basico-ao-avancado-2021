/*
Entre 0 - 11 -> Bom dia
Entre 12 - 17 -> Boa tarde
Entre 18 - 23 -> Boa noite
*/

/* 
if pode ser utilizado sozinho
Sempre que utilizar else, preciso de um if antes
Posso utilizar quandos else ifs quiser
Só posso ter um else na checagem final
Podemos utilizar condições sem else if, utilizando apenas if e else
*/

const hora = 24;

if (hora >= 0 && hora <= 11) {
    console.log('Bom dia');
} else if (hora >= 12 && hora <= 17) {
    console.log('Boa tarde');
} else if (hora >= 18 && hora <= 23) {
    console.log('Boa noite')
} else {
    console.log('Olá');
}