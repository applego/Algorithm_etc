/**
 10
9
10
3
100
100
90
80
10
30
10

up 1
down 7
up 97
stay
down 10
down 10
down 70
up 20
down 20

up 1
down 7
up 97
down 0
down 10
down 10
down 70
up 20
down 20

 */

import * as fs from 'fs';

const input: number[] = fs
  .readFileSync('/dev/stdin', 'utf8')
  .trim()
  .split('\n')
  .map(Number);

input.reduce((pre, curr, i) => {
  const diff = curr - pre;
  const upordownorstay = diff === 0 ? 'stay' : diff > 0 ? 'up' : 'down';
  if (i > 1) {
    if (diff === 0) console.log('stay');
    else console.log(`${diff > 0 ? 'up' : 'down'} ${Math.abs(diff)}`);
  }
  return curr;
});
