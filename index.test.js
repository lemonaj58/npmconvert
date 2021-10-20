const conversions = require('./index.js')

xtest('see if this works', () => {
  expect(1).toBe(1);
});

test('see if miles to kilometers works', () => {
  expect(conversions.milesToKM(1)).toBe(1.61);
})