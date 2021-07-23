/*
Operadores de comparação
> maior que
>= maior ou igual a
< menor
<= menor ou igual a
== igualdade (valor)******
=== igualdade estrita (valor e tipo)
!= diferente (valor) ******
!== diferente estrito (valor e tipo)
*/

/*
Com dois sinais == a linguagem pode comparar um number e uma string e efetuar a conversão
automática da string para number.
Utilizando === sinais a comparação sera feita referente ao valor e tipo e não ocorrerá conversão
automática.
*/ 

const num1 = 10
const num2 = 12
const comp = num1 === num2;
console.log(comp);