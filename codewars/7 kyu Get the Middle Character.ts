export class Challenge {
  static getMiddle(s: string): string {
    const len = s.length;
    if (len % 2 === 1) {
      const middle = Math.floor(len / 2);
      return s[middle];
    } else {
      const middle = len / 2;
      return s.split('').slice(middle - 1, middle + 1).join('');
    }
  }
}
