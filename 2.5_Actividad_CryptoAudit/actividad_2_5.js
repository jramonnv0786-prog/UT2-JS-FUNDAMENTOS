// Tareas 1. Sanear las conversiones (CE d): Corregir la acumulación en saldoTotal.  (máx. 3,5 puntos)
// 2. Control de Flujo Avanzado (CE f y g): Aplicar correctamente "continue" y "break" para corregir problemas. (máx. 3,5 ptos)
// 3. Corregir el desbordamiento: Identificar que el bucle usa i <= transacciones.length.. ¿cómo? Pues vosotros sabréis

// Lote de transacciones que llega de la API (mezcla tipos de datos de forma incorrecta)
let transacciones = ["100.50", "200.00", "ERROR_RECHAZADO", "50.25", "9999.99", "10.00"];
let saldoTotal = 0;
 
 
console.log("Iniciando auditoría de transacciones...");
 
for (let i = 0; i < transacciones.length; i++) {
    let transaccion = transacciones[i];
 
 
    // Bug 1: Controlar valores corruptos
    if (transaccion === "ERROR_RECHAZADO") {
        console.log("Transacción corrupta saltada.");
        continue; // Saltar a la siguiente vuelta
    }

 
    // Bug 2: Detener operaciones sospechosas (Alerta de fraude si supera 5000)
    if (transaccion > 5000) {
        console.log("¡Alerta de Fraude detectada! Cancelando proceso.");
        break; // Abortar el bucle inmediatamente
    }


    // Bug 3: Coerción de tipos oculta
    saldoTotal += parseFloat(transaccion); // Convertir a número antes de sumar
}
 
 
console.log("Saldo total auditado: " + saldoTotal);