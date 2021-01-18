// OK
export function nbDig(n: number, d: number): number{
  const strD = d.toString();
  let count = 0;
  for (let i = 0; i <= n; i++){
    const square = i ** 2;
    count += square.toString().split('').filter(c => c === strD).length;
  }
  return count;
}

export function nbDig2(n: number, d: number): number{
  return [...Array(n + 1)]
    .map((_, i) => i)
    .reduce((acc, val) => {
      return acc +
        (val ** 2).toString()
          .split('')
          .filter(c => c === d.toString())
          .length;
    }, 0);
}
