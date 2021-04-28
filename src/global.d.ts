// https://stackoverflow.com/questions/60227432/how-to-get-a-jest-custom-matcher-working-in-typescript
declare global {
  namespace jest {
    interface Matchers<R> {
      arrayEqualWithOrder(expected: any[]): R
    }
  }
}

import 'jest-extended'