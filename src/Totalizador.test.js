import calcularTotal from "./Totalizador"

describe("Totalizador ", () => {
  it("Deberia calcular subtotal para una cantidad", () => {
    expect(calcularTotal(2, 1, "")).toEqual(2);
  });
  it("Deberia calcular subtotal para una cantidad", () => {
    expect(calcularTotal(5, 3, "")).toEqual(15);
  });
});


