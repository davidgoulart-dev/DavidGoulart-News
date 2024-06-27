const calculadora = require("../../models/calculadora")

test("2 + 2 deveria resultar em 4", () => {
  const resultado = calculadora.somar(2 , 2);
  expect(resultado).toBe(4)
})

test("5 + 100 deveria resultar em 105", () => {
  const resultado = calculadora.somar(5 , 100);
  expect(resultado).toBe(105)
})