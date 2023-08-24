
const prompt = require('prompt-sync')(); //esto para poder usar prompt
//Ajustar por termminal: npm install prompt-sync
//identar control + k control + f

var nombre, seguir;
var n1, n2, suma;

seguir = prompt("Bienvenido a la Calculadora, ¿quieres seguir? s/n:     ");
if (seguir == "s") {
    nombre = prompt("Ingrese nombre:        ")
    n1 = parseInt(prompt("Ingrese número 1:     "))
    n2 = parseFloat(prompt("Ingrese número 2:       "))
    suma = n1 + n2;
    console.log(suma);
}
else
    console.log("Chau");