// Desarrollo de Interfaces 1 | Guía 01 | Ejercicio 08
// Presupuesto estudiantil
// Declara const presupuestoTexto="150", const transporteTexto="25.50", const alimentacionTexto="40". Convierte cada valor y calcula saldoDisponible después de ambos gastos.

// TODO: escribe aquí tu solución.
const presupuestoTexto = "150";
const transporteTexto = "25.50";
const alimentacionTexto = "40";

const presupuesto = Number(presupuestoTexto);
const transporte = Number(transporteTexto);
const alimentacion = Number(alimentacionTexto);

const saldoDisponible = presupuesto - transporte - alimentacion;

console.log("Presupuesto inicial: S/ " + presupuesto.toFixed(2));
console.log("Gasto en transporte: S/ " + transporte.toFixed(2));
console.log("Gasto en alimentación: S/ " + alimentacion.toFixed(2));
console.log("Saldo disponible: S/ " + saldoDisponible.toFixed(2));
