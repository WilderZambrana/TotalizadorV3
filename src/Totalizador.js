function calcularTotal(cantidad, precio, estado) {
    let subtotal = subTotal(cantidad, precio);
    let impuesto = MontoImpuesto(subtotal, estado);
    subtotal = subtotal + impuesto;
    return subtotal - descuento(subtotal);
}

function subTotal(cantidad, precio) {
    return cantidad * precio;
}

function impuestoEstado(estado) {
    let impuestos = { "": 0, "UT": 0.0665, "NV": 0.08, "TX": 0.0625, "AL": 0.04, "CA": 0.0825 };
    return impuestos[estado];
}

function MontoImpuesto(subtotal, estado) {
    return subtotal * impuestoEstado(estado);
}

function descuento(subtotal) {
    let descuento = 0;
    if (subtotal > 1000) descuento = 0.03;
    if (subtotal > 3000) descuento = 0.05;
    if (subtotal > 7000) descuento = 0.07;
    if (subtotal > 10000) descuento = 0.10;
    if (subtotal > 15000) descuento = 0.15;

    return subtotal * descuento;
}

export { calcularTotal, subTotal, MontoImpuesto, descuento };