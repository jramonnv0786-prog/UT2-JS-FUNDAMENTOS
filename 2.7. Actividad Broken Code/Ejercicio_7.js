// Ejercicio 7: Callback defectuoso.

function procesarDatos(datos, callback) {
    callback(datos);
}
 
procesarDatos([1,2,3], function(datos) {
    console.log("Datos recibidos:", datos);
});
 //En este programa las variables de datos no estaban correctamente escritas.

 /*
 function procesarDatos(datos, callback) {
    callback(dat);
}
 
procesarDatos([1,2,3], function(d) {
    console.log("Datos recibidos:", d);
});
 */