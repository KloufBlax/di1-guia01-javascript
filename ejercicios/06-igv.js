// Desarrollo de Interfaces 1 | Guía 01 | Ejercicio 06
// Cálculo de IGV
// Declara const subtotal=100, const TASA_IGV=0.18. Calcula igv y totalPagar, muestra el total.

// TODO: escribe aquí tu solución.
const subtotal = 100;
const TASA_IGV = 0.18;

const igv = subtotal * TASA_IGV;
const totalPagar = subtotal + igv;

console.log("Subtotal: S/ " + subtotal);
console.log("IGV: S/ " + igv);
console.log("Total a pagar: S/ " + totalPagar);
