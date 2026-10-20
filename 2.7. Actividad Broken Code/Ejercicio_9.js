// Ejercicio 9: Cálculo misterioso.

function calcularPrecio(base, descuento) {
    let precioFinal = base;
    if (descuento) {
        precioFinal = base - base * descuento;
    }
    return precioFinal.toFixed(2);
}
 
console.log(calcularPrecio(100, 0.2));
console.log(calcularPrecio(100, 0.6));

//El fallo estaba en el 0.2 que es 20% de descuento y  ponía 60 en vez de 0.6
// que es el 60% de descuento.

/*function calcularPrecio(base, descuento) {
    let precioFinal = base;
    if (descuento) {
        precioFinal = base - base * descuento;
    }
    return precioFinal.toFixed(2);
}
 
console.log(calcularPrecio(100, 0.2));
console.log(calcularPrecio(100, 60));
*/