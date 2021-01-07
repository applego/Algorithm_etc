export function checkParity(parity: string, bin: string) {
  const cntOf1 = count(bin, '1');
  const cntOf1IsEven = cntOf1 % 2 === 0;
  if (cntOf1IsEven) {
    return parity === 'even' ? 0 : 1;
  } else {
    return parity === 'even' ? 1 : 0;
  }
}

function count(bin: string, countChar: string): number {
  return bin.split('')
    .filter(s => s === countChar)
    .length;
}
