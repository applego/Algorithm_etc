export function sumArray(array: number[]): number {
  if (!array) return 0;
  return array
    .sort((a, b) => b - a)
    .reduce((acc, curr, i, self) => {
      if (i === 0 || i === self.length - 1) return acc;
      return acc + curr;
    }, 0);
}
