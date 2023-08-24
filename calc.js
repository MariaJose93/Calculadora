
const prompt = require('prompt-sync')(); //esto para poder usar prompt
//Ajustar por termminal: npm install prompt-sync
//identar control + k control + f

var nombre, seguir;
var n1, n2, suma;

seguir = prompt("Bienvenido a la Calculadora, ¿quieres seguir? s/n:     ");
if (seguir == "s") {
    nombre = prompt("Ingrese nombre:        ");
    opcion = parseInt(prompt("1.- Suma, 2.- Resta, 3.- Multiplicación, 4.- División:    "));
    if (opcion== 1) {
    console.log("Esto es suma");
    n1 = parseInt(prompt("Ingrese número 1:     "));
    n2 = parseFloat(prompt("Ingrese número 2:       "));
    console.log(n1 + n2);
    }
    else if (opcion== 2) {
        console.log("Esto es Resta");
        n1 = parseInt(prompt("Ingrese número 1:     "));
        n2 = parseFloat(prompt("Ingrese número 2:       "));
        console.log(n1 - n2);
        }
        else if (opcion== 3) {
            console.log("Esto es Multiplicación");
            n1 = parseInt(prompt("Ingrese número 1:     "));
            n2 = parseFloat(prompt("Ingrese número 2:       "));
            console.log(n1 * n2);
            }
            else if (opcion== 4) {
                console.log("Esto es División");
                n1 = parseInt(prompt("Ingrese número 1:     "));
                n2 = parseFloat(prompt("Ingrese número 2:       "));
                console.log(n1 / n2);
                }

}
else
    console.log("Chau");