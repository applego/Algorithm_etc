// // 2021/02/23 10:00

// import * as fs from 'fs';
// const input = fs
//   .readFileSync('/dev/stdin', 'utf8')
//   .trim()
//   .split('\n')
//   .map(Number);

export function test20210223_(input: string): string {
  //
  let a = input.trim().split('\n').map(Number);
  const n = a.shift();
  // a.sort();
  const correct = Array.from(new Array(n)).map((v, i) => i + 1);

  // Intersection
  const x = new Set(a);
  const y = new Set(correct);
  const intersection = new Set([...x].filter((e) => y.has(e)));
  if (intersection.size === 0) return 'Correct';
  // Difference
  const difference = new Set([...x].filter((e) => !y.has(e)));
  console.log(difference);
  console.log(intersection);
  return `${intersection.values()} ${difference.values}`;
}

export function test20210223(input: string): string {
  //
  let a = input.trim().split('\n').map(Number);
  const n = a.shift();
  // a.sort();
  const correct = Array.from(new Array(n)).map((v, i) => i + 1);

  const b = a.filter(function (x, i, self) {
    return self.indexOf(x) === i && i !== self.lastIndexOf(x);
  });
  if (b.length === 0) return 'Correct';
  // const x = new Set(a);
  // const y = new Set(correct);
  // const difference = new Set([...x].filter((e) => !y.has(e)));
  // return `${b[0]} ${difference.values}`;
  const y = new Set(a);
  console.log(y);
  const c = correct.filter((v) => !y.has(v))[0];
  return `${b[0]} ${c}`;
}

export function test20210223BP(input: string): string {
  const lines = input.trim().split('\n').map(Number);
  const N = lines.shift();
  const backets = Array(N).fill(0);
  lines.forEach((l) => {
    backets[l - 1]++;
  });
  const lac = backets.indexOf(0) + 1;
  const dup = backets.indexOf(2) + 1;
  return lac === 0 ? 'Correct' : `${dup} ${lac}`;
}

// 提出用
// import * as fs from 'fs';
// const input = fs.readFileSync('/dev/stdin', 'utf8');

// let a = input.trim().split('\n').map(Number);
// const n = a.shift();
// const correct = Array.from(new Array(n)).map((v, i) => i + 1);

// const b = a.filter(function (x, i, self) {
//   return self.indexOf(x) === i && i !== self.lastIndexOf(x);
// });
// if (b.length === 0) {
//   console.log('Correct');
//   return;
// }
// const y = new Set(a);
// const c = correct.filter((v) => !y.has(v))[0];
// console.log(`${b[0]} ${c}`);

// 提出用　BP
import * as fs from 'fs';
const input = fs.readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n').map(Number);
const N = lines.shift();
const backets = Array(N).fill(0);
lines.forEach((l) => {
  backets[l - 1]++;
});
const lac = backets.indexOf(0) + 1;
const dup = backets.indexOf(2) + 1;
console.log(lac === 0 ? 'Correct' : `${dup} ${lac}`);
// return lac === 0 ? 'Correct' : `${dup} ${lac}`;
