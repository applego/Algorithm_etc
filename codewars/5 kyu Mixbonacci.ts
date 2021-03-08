/**
Fibonacci numbers:
F(n) = F(n-1) + F(n-2) with F(0) = 0 and F(1) = 1.

Padovan sequence (or Padovan numbers):
  a(n) = a(n-2) + a(n-3) with a(0) = 1, a(1) = a(2) = 0.

Jacobsthal
a(n) = nearest integer to 2^n/3.

Pell numbers:
a(0) = 0, a(1) = 1; for n > 1, a(n) = 2*a(n-1) + a(n-2).

Tribonacci numbers:
a(n) = a(n-1) + a(n-2) + a(n-3)
for n >= 3 with a(0) = a(1) = 0 and a(2) = 1.

Tetranacci numbers:
a(n) = a(n-1) + a(n-2) + a(n-3) + a(n-4) for n >= 4
with a(0) = a(1) = a(2) = 0 and a(3) = 1.
 */

type dicNAndAns = {
  [key: number]: number;
};

type dicKeyAndCache = {
  [key: string]: dicNAndAns;
};

const dicKeyAndCache: dicKeyAndCache = {
  fib: {},
  pad: {},
  jac: {},
  pel: {},
  tri: {},
  tet: {},
};

const fibonacci = (n: number): number => {
  if (dicKeyAndCache['fib'] && dicKeyAndCache['fib'][n])
    return dicKeyAndCache['fib'][n];
  if (n === 0) return 0;
  if (n === 1) return 1;
  const result = fibonacci(n - 2) + fibonacci(n - 1);
  if (dicKeyAndCache['fib']) dicKeyAndCache['fib'][n] = result;
  return result;
};
const padovan = (n: number): number => {
  if (dicKeyAndCache['pad'] && dicKeyAndCache['pad'][n])
    return dicKeyAndCache['pad'][n];
  if (n === 0) return 1;
  if (n === 1 || n === 2) return 0;
  const result = padovan(n - 3) + padovan(n - 2);
  if (dicKeyAndCache['pad']) dicKeyAndCache['pad'][n] = result;
  return result;
};
const jacobstahl = (n: number): number => {
  const a = 2 ** n / 3;
  return Math.round(a);
};
const pell = (n: number): number => {
  if (dicKeyAndCache['pel'] && dicKeyAndCache['pel'][n])
    return dicKeyAndCache['pel'][n];
  if (n === 0) return 0;
  if (n === 1) return 1;
  const result = pell(n - 2) + 2 * pell(n - 1);
  if (dicKeyAndCache['pel']) dicKeyAndCache['pel'][n] = result;
  return result;
};
const tribonacci = (n: number): number => {
  if (dicKeyAndCache['tri'] && dicKeyAndCache['tri'][n])
    return dicKeyAndCache['tri'][n];
  if (n === 0 || n === 1) return 0;
  if (n === 2) return 1;
  const result = tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3);
  if (dicKeyAndCache['tri']) dicKeyAndCache['tri'][n] = result;
  return result;
};
const tetranacci = (n: number): number => {
  if (dicKeyAndCache['tet'] && dicKeyAndCache['tet'][n])
    return dicKeyAndCache['tet'][n];
  if (n === 0 || n === 1 || n === 2) return 0;
  if (n === 3) return 1;
  const result =
    tetranacci(n - 1) +
    tetranacci(n - 2) +
    tetranacci(n - 3) +
    tetranacci(n - 4);
  if (dicKeyAndCache['tet']) dicKeyAndCache['tet'][n] = result;
  return result;
};

type dicKeyAndFunc = {
  [key: string]: (n: number) => number;
};
const DicKeyAndFunc: dicKeyAndFunc = {
  fib: fibonacci,
  pad: padovan,
  jac: jacobstahl,
  pel: pell,
  tri: tribonacci,
  tet: tetranacci,
};

type dicKeyAndCnt = {
  [key: string]: number;
};

export function mixbonacci(pattern: string[], length: number): number[] {
  console.log(pattern);
  console.log(length);
  if (pattern.length === 0 || length === 0) return [];
  let DicKeyAndCnt: dicKeyAndCnt = {
    fib: 0,
    pad: 0,
    jac: 0,
    pel: 0,
    tri: 0,
    tet: 0,
  };
  let result: Array<number> = [];

  for (let i = 0; i < length; i++) {
    const p = pattern[i % pattern.length];
    const e = DicKeyAndFunc[p](DicKeyAndCnt[p]++);
    result.push(e);
  }
  console.log(result);
  return result;
}
