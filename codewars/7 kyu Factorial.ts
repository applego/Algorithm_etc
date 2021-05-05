/**
 * return n!
 */
export function factorial(n: number): number {
  if (n === 0 || n === 1) return 1;
  let result: number = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

export function factorial_shorter(n: number): number {
  if (n === 0 || n === 1) return 1;
  return [...Array(n)]
    .map((_, i) => i + 1)
    .reduce((acc, curr) => {
      return acc * curr;
    }, 1);
}
