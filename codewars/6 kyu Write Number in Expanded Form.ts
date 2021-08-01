export function expandedForm(num: number): string {
  for (let i = 0; i < num.toString().length; i++) {}
  const len = num.toString().length;
  return num
    .toString()
    .split('')
    .reduce((acc, curr, idx) => {
      if (curr === '0') {
        return acc;
      }
      if (acc.length !== 0) {
        acc += ' + ';
      }
      return acc + curr + getStr0ByCnt(len - (idx + 1));
    }, '');
}

function getStr0ByCnt(cnt: number): string {
  const zero = '0';
  return [...Array(cnt)].map(() => zero).join('');
}

// なぜ TypeError: _6_kyu_Write_Number_in_Expanded_Form_1.yah_test1 is not a function
export function yah_test1(str: string): number {
  return str
    .split(' ')
    .map(Number)
    .reduce((acc, curr) => {
      if (curr <= 10000) {
        return acc + curr;
      } else {
        return acc;
      }
    }, 0);
}

// const yah_test2 = (str: string): number => {
//   return str
//     .split(' ')
//     .map(Number)
//     .reduce((acc, curr) => {
//       if (curr <= 10000) {
//         return acc + curr;
//       } else {
//         return acc;
//       }
//     }, 0);
// }
// export { yah_test2 };
