/*Luiz Otávio Miranda tem 30 anos, pesa 84kg
tem 1.8 de altura e seu IMC é de 25.925925925925924
Luiz Otávio nasceu em 1980
*/

const nome = 'Luiz Otávio';
const sobrenome = 'Miranda';
const idade = 30;
const peso = 84;
const alturaEmM = 1.80;
let imc = peso / (alturaEmM * alturaEmM); //peso / (altura * altura)
let anoNascimento = 2021 - idade;


//Concatenação
console.log(nome + ' ' + sobrenome + ' tem ' + idade + ' anos, pesa ' + peso + 'kg');
//Template strings
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${imc}`);
console.log(`${nome} nasceu em ${anoNascimento}.`);