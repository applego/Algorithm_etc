export function getMostProfitFromStockQuotes(quotes: number[]): number {
  return quotes.reduce((acc, curr, idx, arr) => {
    const m = max(arr.slice(idx));
    return acc + (m < curr ? 0 : m - curr);
  }, 0);
}

const max = (quotes: number[]): number => {
  return quotes.reduce((prev, curr) => {
    return Math.max(prev, curr);
  }, 0);
};
