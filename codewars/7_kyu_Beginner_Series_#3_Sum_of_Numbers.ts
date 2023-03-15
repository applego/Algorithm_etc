export function getSum(a: number, b: number): number {
  if (a === b)
    return a;
  const min = Math.min(a, b);
  const max = Math.max(a, b);
  let sum = 0;
  for (let n = min; n <= max; n++){
    sum += n;
  }
  return sum;
}
