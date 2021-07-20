/**
 * Given an unsorted array of integers and a number n,
 * find the number of continuous subarrays having sum exactly equal n.
 * Return -1 if none exist
 */

export function chunkBackwards<T>(
  array: T[],
  startIndex = 0,
  output: T[][] = []
): T[][] {
  const hasItems = array.length > 0;
  if (hasItems) {
    const lastIndex = array.length;
    const chunk = array.slice(startIndex, lastIndex);
    const newArr = array.slice(0, lastIndex - 1);
    return chunkBackwards(newArr, startIndex, [...output, chunk]);
  }
  return output.filter(arr => arr.length > 1);
}

function getByExpectedSum(expectedSum: number) {
  return (slice: number[]) => add(...slice) === expectedSum;
}

export const add = (...args: number[]) =>
  args.reduce((acc, curr) => acc + curr, 0);

function getArrayFilter(numArr: number[], expectedSum: number) {
  const continuousSum = (output: number[][], _: number, index: number) => {
    const slices = chunkBackwards(numArr, index);
    const byExpectedSum = getByExpectedSum(expectedSum);
    const validSlices = slices.filter(byExpectedSum);
    return [...output, ...validSlices];
  };
  return continuousSum;
}

export function subArraySum(array: number[], expectedSum: number) {
  const output: number[][] = [];
  const byContinuousSum = getArrayFilter(array, expectedSum);
  const results = array.reduce(byContinuousSum, output);
  return results.length > 0 ? results : -1;
}
