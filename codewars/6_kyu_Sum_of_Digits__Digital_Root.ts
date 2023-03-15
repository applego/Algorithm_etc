export const digitalRoot = (n: number): number => {
  while (n.toString().length > 1) {
    n = sumOfDigits(n);
  }
  return n;
};

const sumOfDigits = (n: number): number => {
  return n.toString().split('').reduce((sum, digit) => sum + Number(digit), 0);
}
