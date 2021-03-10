export function wallpaper(l: number, w: number, h: number): string {
  // your code
  const numbers = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
    'twenty',
  ];
  const onerollArea = 0.52 * 10;
  const additionalRate = 1.15;
  const wallArea = 2 * h * (l + w);
  const rollCnt = Math.ceil((wallArea * additionalRate) / onerollArea);
  return numbers[rollCnt];
}
