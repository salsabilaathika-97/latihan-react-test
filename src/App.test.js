const multiple = (a,b) => a * b;

test("Hasil testing perkalian", () => {
  const perkalian = multiple(3,2);
  expect(perkalian).toBe(6);
});