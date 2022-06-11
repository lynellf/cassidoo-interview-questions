import { coinCombo, sum } from "../coins";

describe("coin combo question", () => {
  test("combo 1", () => {
    const amount = 17;
    const solution = coinCombo([2, 3, 5, 7], amount);
    expect(solution.length).toBe(3);
    expect(sum(solution)).toBe(amount);
  });

  test("combo 2", () => {
    const amount = 11;
    const solution = coinCombo([2, 3, 5], amount);
    expect(solution.length).toBe(3);
    expect(sum(solution)).toBe(amount);
  });

  test("combo 3", () => {
    const amount = 34;
    const solution = coinCombo([1, 2, 10], amount);
    expect(solution.length).toBe(5);
    expect(sum(solution)).toBe(amount);
  });

  test("combo 4", () => {
    const solution = coinCombo([3, 5, 7], 2385);
    const sevens = solution.filter((coin) => coin === 7).length;
    const fives = solution.filter((coin) => coin === 5).length;
    const threes = solution.filter((coin) => coin === 3).length;

    expect(sevens).toBe(340);
    expect(fives).toBe(1);
    expect(threes).toBe(0);
  });
});