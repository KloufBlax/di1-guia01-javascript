// Desarrollo de Interfaces 1 | Guía 01 | Ejercicio 05
// Boleta de compra
// Declara const producto="Cuaderno", const precioUnitario=12.5, const cantidad=3. Calcula subtotal y crea mensajeBoleta que incluya producto y total.

// TODO: escribe aquí tu solución.
const producto = "Cuaderno";
const precioUnitario = 12.5;
const cantidad = 3;

const subtotal = precioUnitario * cantidad;
const mensajeBoleta = "Producto: " + producto + " | Total: S/ " + subtotal;

console.log(mensajeBoleta);
