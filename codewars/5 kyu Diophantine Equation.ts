/*
Hint:
x2 - 4 * y2 = (x - 2*y) * (x + 2*y)
 */

export function solequa_timeout(n: number): [number, number][] {
  // y を決める
  // x2 = n + 4y2
  // n + 4y2 の平方根が整数か
    // 整数なら　x 決まる
  let answers: [number, number][] = [];
  let y:number = n;
  while (y >= 0) {
    const x2: number = n + 4 * (y ** 2);
    let x: number = Math.sqrt(x2);
    if (Number.isInteger(x))
      answers.push([x, y]);
    y -= 1;
  }
  return answers;
}

const exp1 = (x: number, y: number): number => {
  return x - 2 ** y;
}
const exp2 = (x: number, y: number): number => {
  return x + 2 ** y;
}

export function solequa(n: number): [number, number][] {
  // (x - 2*y) を決める
/*
(x-2*y)=D1
(x+2*y)=D2

2x = D1 + D2
D1 * D2 = n

*/
  let d1: number = 1;

  let answers: [number, number][] = [];
  while (d1 <= n) {
    let d2:number = n / d1;
    if (!Number.isInteger(d2)) {
      d1 += 1;
      continue;
    }
    let x: number = (d1 + d2) / 2;
    if (x < 0)
      break;
    if (!Number.isInteger(x)) {
      d1 += 1;
      continue;
    }
    let y: number = (d2 - x) / 2;
    if (y < 0)
      break;
    if (!Number.isInteger(y)) {
      d1 += 1;
      continue;
    }
    answers.push([x, y]);
    d1 += 1;
  }
  return answers;
}

// BP
export function solequa_BP(n: number): [number, number][] {
  let result = [], a, b,x,y;
  for(let a = 1;a <= Math.sqrt(n); a++) {
    if(Number.isInteger(b = n/a)){
      if(Number.isInteger(x = (b+a)/2)){
        if(Number.isInteger(y = (b-a)/4)){
          result.push([x, y]);
        }
      }
    }
  }
  return result as [number, number][];
}
