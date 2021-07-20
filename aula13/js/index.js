/*A string é indexada, ou seja, na palavra texto, o t = 0

*/

let umaString = "Um \\texto";

console.log(umaString[4]);
console.log(umaString.charAt(8));
console.log(umaString.concat(' em', ' um', ' lindo dia.'));
console.log(umaString + ' em um lindo dia.');
console.log(`${umaString} em um lindo dia.`);
console.log(umaString.indexOf('texto'));
console.log(umaString.length);
console.log(umaString.slice(6, 8));
console.log(umaString.toUpperCase());