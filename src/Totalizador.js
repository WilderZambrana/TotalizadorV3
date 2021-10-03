function calcularTotal(cantidad, precio, estado) {
    let subtotal = subTotal(cantidad, precio);
    let descuento = 0;
    subtotal = subtotal + subtotal * impuestoEstado(estado);
    if (subtotal > 1000) descuento = 0.03;
    if (subtotal > 3000) descuento = 0.05;
    return subtotal - subtotal * descuento;
}

function subTotal(cantidad, precio) {
    return cantidad * precio;
}

function impuestoEstado(estado) {
    /*let impuesto = 0;
    if (estado == "UT") impuesto = 0.0665;
    if (estado == "NV") impuesto = 0.08;
    if (estado == "TX") impuesto = 0.0625;
    if (estado == "AL") impuesto = 0.04;
    if (estado == "CA") impuesto = 0.0825;
    return impuesto;*/
    let impuestos = { "": 0, "UT": 0.0665, "NV": 0.08, "TX": 0.0625, "AL": 0.04, "CA": 0.0825 };
    return impuestos[estado];
}

export default calcularTotal;