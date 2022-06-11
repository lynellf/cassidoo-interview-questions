// types
type Product = { coin: number; count: number };
type ProductTable = Map<number, Product>;
type CoinCombo = number[];
type AmountConstants = {
  productTable: ProductTable;
  count: number;
  amount: number;
};
type CountConstants = {
  productTable: ProductTable;
  amount: number;
  coinsAsc: number[];
};

// helper fns
const range = (n: number) => Array.from({ length: n }, (_, i) => i + 1);
const dupeOf = (n: number, times: number) => range(times).map(() => n);
const byDesc = (start: number, end: number) => end - start;
const byAsc = (start: number, end: number) => start - end;
const byNonEmptyArr = (arr: number[]) => arr.length > 0;
const byLengthAsc = (a: number[], b: number[]) => a.length - b.length;
export const sum = (arr: number[]) => arr.reduce((acc, curr) => acc + curr, 0);

const byAmount = ({
  productTable,
  count,
  amount,
}: AmountConstants) =>
  (combo: CoinCombo, coin: number) => {
    const product = coin * count;
    const isLte = product <= amount;

    if (isLte) {
      productTable.set(product, { coin, count });
    }

    const difference = amount - product;
    const hasDifference = productTable.get(difference) !== undefined;

    if (hasDifference) {
      const { coin: coinDiff, count: countDiff } = productTable.get(
        difference,
      )!;
      return [...dupeOf(coin, count), ...dupeOf(coinDiff, countDiff)];
    }

    const isEqual = product === amount;

    if (isEqual) {
      return [coin];
    }

    return combo;
  };

const byCount = ({
  productTable,
  amount,
  coinsAsc,
}: CountConstants) =>
  (count: number) =>
    coinsAsc.reduce(byAmount({ count, productTable, amount }), []);

export const coinCombo = (coins: number[], amount: number) => {
  const productTable: ProductTable = new Map();
  const minRange = Math.round(amount / Math.max(...coins));
  const coinsAsc = coins.sort(byAsc);
  const rangeDesc = range(minRange).sort(byDesc);
  const combos = rangeDesc
    .map(byCount({ productTable, amount, coinsAsc }))
    .filter(byNonEmptyArr)
    .sort(byLengthAsc);

  const hasCombos = combos.length > 0;

  return hasCombos ? combos[0].sort(byAsc) : [];
};
