export function factorial(number: number | BigInt): bigint {
  const val = typeof number === 'bigint' ? number : BigInt(number as number);
  return val <= 1 ? 1n : val * factorial(val - 1n);
}

export function toBase(number: number | BigInt, base: number): number {
  return parseInt(String(number), base);
}

export function numToArr(number: number | bigint) {
  const str = number.toString();
  const arr = str.split("");
  return arr
}

export function getNonZeroIndex(numArr: string[]): number {
  return numArr.findIndex(x => x !== '0');
}

export function sliceAtLastNonZero(number: number | bigint) {
  const numArr = numToArr(number).reverse();
  const nonZeroIndex = getNonZeroIndex(numArr);
  const hasNonzero = nonZeroIndex !== -1;
  if (!hasNonzero) return [] as number[];
  return numArr.slice(0, nonZeroIndex);
}

export function zerosEndingFactorial(number: number): number {
  const fact = factorial(number);
  const zeros = sliceAtLastNonZero(fact);
  return zeros.length;
}