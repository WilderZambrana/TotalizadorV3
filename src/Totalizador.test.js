import calcularTotal from "./Totalizador"

describe("Totalizador ", () => {
  it("Deberia calcular subtotal para un cantidad", () => {
    expect(calcularTotal(2, 1, "")).toEqual(2);
  });
});


