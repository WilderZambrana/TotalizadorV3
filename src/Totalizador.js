function calcularTotal(cantidad, precio, estado) {
    let impuesto = 0;
    let subtotal=0;
    let descuento=0;
    if (estado == "CA") impuesto = 0.0825;
    if (estado == "UT") impuesto = 0.0665;
    subtotal = cantidad * precio + cantidad * precio * impuesto;
    if(subtotal>1000) descuento=0.03;
    return  subtotal - subtotal*descuento;
}

export default calcularTotal;