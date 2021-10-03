import { calcularTotal, subTotal, MontoImpuesto } from "./Totalizador";

const cantidad_input = document.querySelector("#cantidad-input");
const precio_input = document.querySelector("#precio-input");
const estado_input = document.querySelector("#estado-input");
const form = document.querySelector("#totalizador-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cantidad = Number.parseInt(cantidad_input.value);
  const precio = Number.parseInt(precio_input.value);
  const estado = estado_input.value;

  const precioInicial = subTotal(cantidad, precio);
  const valorImpuesto = MontoImpuesto(precioInicial, estado);
  //const totalConImpu = sumar(precioInicial, valorImpuesto);
  //const valorDescuento = descuento(totalConImpu);
  const valorFinal = calcularTotal(cantidad,precio,estado);

  document.getElementById('cantidad').innerHTML = cantidad;
  document.getElementById('precio').innerHTML = precio;
  document.getElementById('totalCantxPrec').innerHTML = precioInicial;
  document.getElementById('impuesto').innerHTML = valorImpuesto;
  //document.getElementById('totalConImp').innerHTML = totalConImpu;
  //document.getElementById('descuento').innerHTML = valorDescuento;
  document.getElementById('totalConDesc').innerHTML = valorFinal;
});
