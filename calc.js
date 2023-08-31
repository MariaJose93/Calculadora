
const prompt = require('prompt-sync')(); //esto para poder usar prompt
//Ajustar por termminal: npm install prompt-sync
//identar control + k control + f

// var seguir;
// var n1, n2, opcion;

seguir = prompt("Bienvenido a la Calculadora, ¿quieres seguir? s/n:     ");
if (seguir == "s") {
    console.log("1.- Suma \n2.- Resta \n3.- Multiplicación \n4.- División");
    opcion = parseInt(prompt("Ingrese su opción:  "));
    n1 = parseInt(prompt("Ingrese número 1:  "));
    n2 = parseInt(prompt("Ingrese número 2:  "));
    switch (opcion) {
        case 1:
            console.log("El resultado de su suma es:  ", n1 + n2);
            break;
        case 2:
            console.log("El resultado de su resta es:  ", n1 - n2);
            break;
        case 3:
            console.log("El resultado de su multiplicación es:  ", n1 * n2);
            break;
        case 4:
            if (n2 == 0) {
                console.log("No se puede dividir entre cero")
            }
            else
                console.log("El resultado de su división es:  ", n1 / n2);
            break;
    }
}
else
    console.log("Chau");

//Calcuradora ejecutada con exito