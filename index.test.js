const conversions = require('./lib/index.js')

test('see if this works', () => {
  expect(1).toBe(1);
});

test('see if miles to kilometers works', () => {
  expect(conversions.milesToKM(1)).toBe(1.61);
  expect(conversions.milesToKM(1, 0)).toBe(2);
})