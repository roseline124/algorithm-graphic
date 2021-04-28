require('jest-extended')

expect.extend({
  arrayEqualWithOrder(received, expected) {
    return {
      pass: true,
      message: () => `received:${received} \n expected:${expected}`,
    };
  },
});