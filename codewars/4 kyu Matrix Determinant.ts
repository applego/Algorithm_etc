export function determinant(m:number[][]):number {
  // return the determinant of the matrix passed in
  console.log(m[0].length);
  console.log([...m]);
  switch (m[0].length) {
    case 1:
      return Math.abs(m[0][0]);
    case 2:
      // const a = m[0][0];
      // const b = m[0][1];
      // const c = m[1][0];
      // const d = m[1][1];
      // return len2(a, b, c, d);
      return len2(m);
    default:
      // let e1: number, e2: number, e3: number;
      // [e1, e2, e3] = m[0];
      let result: number = 0;
      m[0].forEach((row0_val, col_idx) => {
        const new_m: number[][] = make_minor(m, col_idx);
        if (col_idx % 2 === 0)
          result += row0_val * determinant(new_m);
        else
          result -= row0_val * determinant(new_m);
      });
      return result;
  }
}

// const len1 = (m: number[][]): number => {
//   return Math.abs(m[0][0]);
// }

const len22 = (a: number, b: number, c: number, d: number): number => {
  // return m[0][0] * m[1][1] - m[0][1] * m[1][0]; // a * d - b * c
  return a * d - b * c;
}

const len2 = (m: number[][]): number => {
  return m[0][0] * m[1][1] - m[0][1] * m[1][0]; // a * d - b * c
}

const make_minor = (m: number[][], col_idx: number): number[][] => {
  let minor: number[][] = new Array(m[0].length - 1);
  for (let y = 0; y < m[0].length - 1; y++) {
    minor[y] = new Array(m[0].length - 1).fill(0);
  }
  const rest_idxs: number[] = [...Array(m[0].length)].map((_, i) => i).filter((val => val !== col_idx));
  [...Array(m[0].length - 1)]
    .map((_, i) => i)
    .forEach(row_idx => {
      rest_idxs
        .forEach((col_idx, idx) => {
          minor[row_idx][idx] = m[row_idx + 1][col_idx];
        });
    });
  return minor;
}

const determinant_BP = (m: number[][]) => {
  if (m.length === 1) {
    return m[0][0];
  } else {
    let res = 0;
    m[0].forEach((e, i) => {
      res += Math.pow(-1, i) * e * determinant_BP(minor(m, i));
    });
    return res;
  }
}

const minor = (m: number[][], i: number) => {
  return m.slice(0).splice(1).map(e => e.filter((_, idx) => i!==idx));
}

export { determinant_BP };
