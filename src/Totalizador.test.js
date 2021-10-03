import calcularTotal from "./Totalizador"

describe("Totalizador ", () => {
  it("Deberia calcular subtotal para una cantidad", () => {
    expect(calcularTotal(2, 1, "")).toEqual(2);
  });
  it("Deberia calcular subtotal para una cantidad", () => {
    expect(calcularTotal(5, 3, "")).toEqual(15);
  });
  it("Deberia calcular subtotal para un estado por defecto", () => {
    expect(calcularTotal(2, 2, "CA")).toEqual(4.33);
  });
});


