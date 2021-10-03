function calcularTotal(cantidad, precio, estado) {
    let impuesto = 0;
    if (estado == "CA") impuesto = 0.0825;
    if (estado == "UT") impuesto = 0.0665;
    return cantidad * precio + cantidad * precio * impuesto;
}

export default calcularTotal;