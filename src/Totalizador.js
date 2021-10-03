function calcularTotal(cantidad, precio, estado) {
    let impuesto=0;
    if(estado == "CA") impuesto=0.0825;
    return cantidad*precio+cantidad*precio*impuesto;
}

export default calcularTotal;