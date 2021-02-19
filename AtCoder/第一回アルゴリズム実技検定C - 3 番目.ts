// import * as fs from 'fs';

// const input = fs
//   .readFileSync('/dev/stdin', 'utf8')
//   .trim()
//   .split(' ')
//   .map(Number);
// input.sort((a, b) => b - a);
// console.log(input[2]);
// input.forEach(v => {

// });

// テスト用関数
export const thirdBiggerNumber = (input: string): number => {
  const arrNumber = input.split(' ').map(Number);
  arrNumber.sort((a, b) => b - a);
  return arrNumber[2];
};
