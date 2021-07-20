import { subArraySum, chunkBackwards, add } from "../subarraySum";

// test chunkBackwards
describe("chunkBackwards", () => {
  it("should have a length of 10", () => {
    const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const expectedLength = 9;
    const chunks = chunkBackwards(input);
    expect(chunks.length).toEqual(expectedLength);
  });

  it("should have a length of 9", () => {
    const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const expectedLength = 8;
    const chunks = chunkBackwards(input, 1);
    expect(chunks.length).toEqual(expectedLength);
  });
});

// test add
describe("add", () => {
    it("should return the sum of two numbers", () => {
      const input1 = 1;
      const input2 = 2;
      const expected = 3;
      expect(add(input1, input2)).toEqual(expected);
    });

    it("should return 7", () => {
      const inputs = [4, 0, 0, 3];
      const expected = 7;
      expect(add(...inputs)).toEqual(expected);
    });
  });

  // test subarraySum
  describe("subarraySum", () => {
    it("should return -1", () => {
      const subArrays = subArraySum([], 0);
      expect(subArrays).toEqual(-1);
    });

    it("should return subarrays containing numbers which sum 5", () => {
      const subArrays = subArraySum([1, 2, 3], 5);
      expect(subArrays).toEqual([[2, 3]]);
    });

  it("should return subarrays containing numbers which sum 10", () => {
    const subArrays = subArraySum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10);
    expect(subArrays).toEqual([[1, 2, 3, 4]]);
  });

    it("should return subarrays containing numbers which sum 33", () => {
      const subArrays = subArraySum([1, 4, 20, 3, 10, 5], 33);
      expect(subArrays).toEqual([[20, 3, 10]]);
    });

  it("should return subarrays containing numbers which sum 7", () => {
    const subArrays = subArraySum([1, 4, 0, 0, 3, 10, 5], 7);
    expect(subArrays).toEqual([[4, 0, 0, 3]]);
  });
});
