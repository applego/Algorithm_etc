import * as fs from 'fs';

const input: string = fs.readFileSync('/dev/stdin', 'utf8').trim();

try {
  let result = 0;
  const twiceVal = input.split('').reduce((acc, curr, idx) => {
    if (isNaN(Number(curr))) {
      throw new Error('not number');
    }

    if (idx === 0) {
      return acc + Number(curr) * 200;
    } else if (idx === 1) {
      return acc + Number(curr) * 20;
    } else {
      return acc + Number(curr) * 2;
    }
  }, 0);
  console.log(twiceVal.toString());
} catch (err) {
  console.log('error');
}
