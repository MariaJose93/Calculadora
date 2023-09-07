
const prompt = require('prompt-sync')(); //esto para poder usar prompt
//Ajustar por termminal: npm install prompt-sync
//identar control + k control + f

cont = 0; contsum = 0; contrest = 0; contmult = 0; contdiv = 0;
seguir = prompt("Bienvenido a la Calculadora, ¿quieres seguir? s/n:     ");
if (seguir == "s") {
    do {
        console.log("1.- Suma \n2.- Resta \n3.- Multiplicación \n4.- División \n5.- Salir");
        opcion = parseInt(prompt("Ingrese su opción:  "));
        switch (opcion) {
            case 1:
                n1 = parseInt(prompt("Ingrese número 1:  "));
                n2 = parseInt(prompt("Ingrese número 2:  "));
                console.log("El resultado de su suma es:  ", n1 + n2);
                contsum = contsum + 1;
                break;
            case 2:
                n1 = parseInt(prompt("Ingrese número 1:  "));
                n2 = parseInt(prompt("Ingrese número 2:  "));
                console.log("El resultado de su resta es:  ", n1 - n2);
                contrest = contrest + 1;
                break;
            case 3:
                n1 = parseInt(prompt("Ingrese número 1:  "));
                n2 = parseInt(prompt("Ingrese número 2:  "));
                console.log("El resultado de su multiplicación es:  ", n1 * n2);
                contmult = contmult +   1;
                break;
            case 4:
                n1 = parseInt(prompt("Ingrese número 1:  "));
                n2 = parseInt(prompt("Ingrese número 2:  "));
                if (n2 == 0) {
                    console.log("No se puede dividir entre cero")                             
                }
                else {
                    console.log("El resultado de su división es:  ", n1 / n2);
                    contdiv = contdiv + 1;   
                }                       
                break;
            case 5:
                console.log("Gracias por usar nuestra calculadora");
                break;
            default:
                console.log("Su opción no es válida. Ingrese su opción nuevamente");
        }
        if (opcion > 0 && opcion < 5) {
            cont = cont + 1;
            if (opcion == 4 && n2 == 0)
                cont = cont - 1;
        }
    }while(opcion!=5) 
    console.log("La calculadora se ejecuto", cont,"veces y se realizaron", contsum, "suma,", contrest, "resta,", contmult, "multiplicación y", contdiv, "división" ); 
}
else
    console.log("Adiós");

//Calcuradora atualizada, agregandole ciclos y entrega de informe con la cantidad de usos.
//Ejecutada con exito.