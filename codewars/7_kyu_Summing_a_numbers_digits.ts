export function sumDigits(number: number): number {
  return String(number).split('').reduce((pre, curr) => {
    if (isNaN(Number(curr))) {
      return pre;
    } else {
      return pre + Number(curr);
    }
  },0);
}
