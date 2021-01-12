export class G964_20210110 {
  private static readonly divideNumber: number = 5;
  private static readonly alphabet = 'abcdefghijklmnopqrstuvwxyz';
  private static readonly Alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  private static isUpperCase(c: string): boolean{
    return /^[A-Z]+$/g.test(c);
  }
  private static getPrefix(s: string, shift: number): string{
    const firstCharDown = s[0].toLocaleLowerCase();
    const shifted = G964_20210110.getShiftedChar(firstCharDown,shift);
    return firstCharDown + shifted;
  }
  private static getShiftedChar(c: string, shift: number): string {
    if (c.match(/[^a-zA-Z]/gi))
      return c;
    if (G964_20210110.isUpperCase(c)) {
      const idx = c.charCodeAt(0) - 'A'.charCodeAt(0);
      const idxShifted = (idx + shift) % G964_20210110.Alphabet.length;
      return G964_20210110.Alphabet[idxShifted];
    } else {
      const idx = c.charCodeAt(0) - 'a'.charCodeAt(0);
      const idxShifted = (idx + shift) % G964_20210110.Alphabet.length;
      return G964_20210110.alphabet[idxShifted];
    }
  }
  private static getShiftedString(s: string, shift: number): string{
    return s.split('')
      .reduce((acc, c) => {
        return acc + G964_20210110.getShiftedChar(c, shift);
      }, '');
  }

  public static encodeStr = (s:string, shift:number):Array<string> => {    const prefix = G964_20210110.getPrefix(s, shift);
    const suffix = G964_20210110.getShiftedString(s, shift);
    const merged = prefix + suffix;
    const lenElement = Math.ceil(merged.length / G964_20210110.divideNumber);
    const regexp = new RegExp(`.{1,${lenElement.toString()}}`, 'g');
    const arr = merged.match(regexp);
    return arr !== null ? arr : [];
  }


  private static getShiftNum(s: string): number {
    if (s.length !== 2)
      throw new Error;
    // const idx = s[0].charCodeAt(0) - 'a'.charCodeAt(0);
    // const idx2 = s[1].charCodeAt(0) - 'a'.charCodeAt(0);

    const shift = (s[1].charCodeAt(0) - s[0].charCodeAt(0)) % G964_20210110.Alphabet.length;
    return shift;
  }

  private static getDecodeChar(c: string, shift: number): string {
    if (c.match(/[^a-zA-Z]/gi))
      return c;
    if (G964_20210110.isUpperCase(c)) {
      const idx = c.charCodeAt(0) - 'A'.charCodeAt(0);
      const idxShifted = (idx - shift) % G964_20210110.Alphabet.length;
      return G964_20210110.Alphabet[idxShifted];
    } else {
      const idx = c.charCodeAt(0) - 'a'.charCodeAt(0);
      const idxShifted = (idx - shift) % G964_20210110.Alphabet.length;
      return G964_20210110.alphabet[idxShifted];
    }
  }
  private static getDecodeString(s: string, shift: number): string {
    return s.split('')
      .reduce((acc, c) => {
        return acc + G964_20210110.getDecodeChar(c, shift);
      }, '');
  }
  public static decode = (arr: Array<string>): string => {
    const firstEleArr = arr.shift()?.split('');
    if (!firstEleArr) throw new Error;
    const prefix = firstEleArr.slice(0, 2).join('').toString();
    const shift = G964_20210110.getShiftNum(prefix);
    const suffixFirst = firstEleArr.slice(2).join('').toString();
    const codeSuffixFirst = G964_20210110.getDecodeString(suffixFirst, shift);
    let decoded = codeSuffixFirst;
    let currEle;
    while ((currEle = arr.shift()) !== undefined) {
      decoded += G964_20210110.getDecodeString(currEle, shift);
    }
    return decoded;
  }
}

/*
The prefix is built of 2 letters, the second one being shifted from the first one by the "rotate", the first one is the first letter, after being downcased, of the uncoded message.
For example if the "rotate" is 2, if the first letter of the uncoded message is 'J' the prefix should be 'jl'.

u = "I should have known that you would have a perfect answer for me!!!";
v = ["ijJ tipvme ibw", "f lopxo uibu z", "pv xpvme ibwf ", "b qfsgfdu botx", "fs gps nf!!!"];
*/
