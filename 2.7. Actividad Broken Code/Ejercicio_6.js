// Ejercicio 6: Usando expresiones.

function esPar(num) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
 
console.log(esPar(3));
console.log(esPar(4));

// Es comparación estricta y  faltaban los "==" en el código
// Por tanto, si el resto de 2 es 0 es TRUE si no es FALSO

/* function esPar(num) {
    if (num % 2 = 0) {
        return true;
    } else {
        return false;
    }
}

console.log(esPar(3));
console.log(esPar(4));
*/