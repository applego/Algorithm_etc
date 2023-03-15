export const answer = (input: string): string => {
  //
  // let arr = input.split(/(?!^.*[A-Z]{2,}.*$)^[A-Za-z]*$/);
  let arr: string[] = [];
  let left: number = 0;
  let upperSequence: number = 0;
  input.split('').forEach((v, i) => {
    if (/^[A-Z]+$/g.test(v)) {
      //　Upper
      upperSequence++;
    }
    if (upperSequence === 2) {
      arr.push(input.slice(left, i + 1));
      left = i + 1;
      upperSequence = 0;
    }
  });
  arr.sort((a, b) => {
    a = a.toLowerCase();
    b = b.toLowerCase();
    if (a < b) return -1;
    else if (a > b) return 1;
    return 0;
  });

  // console.log(arr);

  return arr.join('');
};

// * 提出用
// import * as fs from 'fs';
// const input = fs.readFileSync('/dev/stdin', 'utf8');
// console.log(answer(input));
