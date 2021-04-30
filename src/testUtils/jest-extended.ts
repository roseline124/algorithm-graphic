import zip from 'lodash/zip';

expect.extend({
  arrayEqualWithOrder(received: any[], expected: any[]) {
    const pairs = zip(received, expected)
    const isEqual = pairs.every(pair => this.equals(pair[0], pair[1]))
    return {
      pass: isEqual,
      message: () => (
        'received: ' + this.utils.printReceived(received) + '\n'
        + 'expected: ' + this.utils.printExpected(expected)
      ),
    };
  },
});