// import * as fs from 'fs';

// const [v, t, s, d]: number[] = fs
//   .readFileSync('/dev/stdin', 'utf8')
//   .trim()
//   .split(' ')
//   .map(Number);

// if (v * t <= d && d <= v * s) {
//   console.log('No');
// } else {
//   console.log('Yes');
// }

import * as fs from 'fs';

export const answer = (input: string): number => {
  const [x, y]: number[] = input.trim().split(' ').map(Number);

  const bigger = Math.max(x, y);
  console.log(bigger);
  return bigger;
};

// const input = fs.readFileSync('/dev/stdin', 'utf8');
// answer(input);
