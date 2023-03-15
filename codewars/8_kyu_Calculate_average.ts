export function findAverage(array: number[]): number {
  return array.reduce((a, c) => a + c) / array.length;
}
