import { zerosEndingFactorial, sliceAtLastNonZero, factorial, toBase } from "../zeroesEndingFactorial";

describe(`sliceAtLastNonZero`, () => {
  it(`should return the correct results`, () => {
    expect(sliceAtLastNonZero(100)).toEqual(["0", "0"]);
  });
});

describe(`factorial`, () => {
  it(`should return the correct results`, () => {
    expect(factorial(5)).toBe(120n);
    expect(factorial(10)).toBe(3628800n);
    expect(factorial(20)).toBe(2432902008176640000n);
  });
});

describe(`toBase`, () => {
  it(`should return the correct results`, () => {
    expect(toBase(factorial(5), 10)).toBe(120);
  });
});

describe(`zerosEndingFactorial`, () => {
  it(`should return the correct results`, () => {
    expect(zerosEndingFactorial(5)).toBe(1);
    expect(zerosEndingFactorial(10)).toBe(2);
    expect(zerosEndingFactorial(20)).toBe(4);
    expect(zerosEndingFactorial(100)).toBe(24);
  });
});
