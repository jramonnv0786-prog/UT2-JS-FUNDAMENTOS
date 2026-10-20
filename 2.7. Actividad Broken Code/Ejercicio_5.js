// Ejercicio 5: Out of control

let numeros = [1,2,3,4];
let suma = 0;
 
for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
}
 
console.log("Suma total: " + suma);

//El bucle estaba recorriendose 5 veces por el: "<="
// Una vez quitado el "=" ya funciona correctamente y hace la suma sin errores.

/*let numeros = [1, 2, 3, 4];
let suma = 0;
 
for (let i = 0; i <= numeros.length; i++) {
    suma += numeros[i];
}
 
console.log("Suma total: " + suma);
*/ 