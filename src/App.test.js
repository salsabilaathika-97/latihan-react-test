const multiple = (a,b) => a * b;
const sum = (a,b) => a + b;

test("Hasil testing perkalian", () => {
  const perkalian = multiple(3,2);
  expect(perkalian).toBe(6);
});

test("Hasil testing penjumlahan",() => {
  const penjumlahan = sum(3,2);
  expect(penjumlahan).toBe(5);
});