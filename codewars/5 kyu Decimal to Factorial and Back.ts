/**
 タスク
2つの関数が必要です。最初の関数は10進数を受け取り、2乗表現の文字列を返します。

2番目の関数は、2乗表現の文字列を受け取り、10進表現を生成します。
 */

interface Num_and_num{
  base: number,
  value: number
}
const factorialize_recurse = (k: number): number => {
    if (k <= 1) {
      return 1;
    }
    return k * factorialize_recurse(k - 1);
}
const FactorialList: Num_and_num[] = Array.from(new Array(37))
  .map((v, i): Num_and_num => {
      return { base: i, value: factorialize_recurse(i) };
  });
FactorialList.reverse();

const Alphabets = Array.apply(null, new Array(26)).map((v, i) => {
  return String.fromCharCode('A'.charCodeAt(0) + i);
});

export class G964_1208 {
  // factorial_list: Num_and_num[];
  // constructor() {
  //   this.factorial_list = Array.from(new Array(11)).map((v, i): Num_and_num => {
  //     return { base: i, value: this.factorialize_recurse(i) };
  //   });
  //   console.log(this.factorial_list);
  // }

  // private factorialize_recurse = (k: number): number => {
  //   if (k <= 1) {
  //     return 1;
  //   }
  //   return k * this.factorialize_recurse(k - 1);
  // }

  private static NumToAlphabetic(num: number):string {
    if (num <= 9)
      return num.toString();
    return Alphabets[num - 10];
  }

  private static isNaNModified = (value: string|number):boolean => {
    // let numericRepr = parseFloat(inputStr);
    // return isNaN(numericRepr) || numericRepr.toString().length != inputStr.length;
    return ((value != null) && !isNaN(Number(value.toString())));
  }

  private static AlphabeticToNum(str: string):number {
    if (G964_1208.isNaNModified(str))
      return parseInt(str);
    return Alphabets.findIndex(alpha => alpha === str) + 10;
  }

  public static dec2FactString = (nb: number): string => {
    let result: string = "";
    let isStart: boolean = false;
    let isAlphabetic: boolean = true;
    Object.values(FactorialList).forEach((Fac) => {
      let n: number = 0;
      while (nb > 0 && nb >= Fac.value) {
        isStart = true;
        if (Fac.base <= 9)
          isAlphabetic = false;
        nb -= Fac.value;
        n++;
      }
      if (isStart) {
        result += isAlphabetic ? G964_1208.NumToAlphabetic(n): n.toString();
      }
    });
    return result;
  }

  public static factString2Dec = (str: string): number => {
    let result:number = 0;
    str.split('').reverse().forEach((val, i) => {
      // const n: number = parseInt(val);
      const n: number = G964_1208.isNaNModified(val) ? parseInt(val) : G964_1208.AlphabeticToNum(val);
      const idxFac: number = FactorialList.findIndex(Fac => Fac.base === i);
      result += FactorialList[idxFac].value * n;
    });
    return result;
  }
}

/**
 * BP
 */
export class G964_1208_BP{
  public static dec2FactString = (nb: number): string => {
    let res = '';
    let counter = 1;
    for (; nb; counter++){
      res = (nb % counter).toString(16).toUpperCase() + res;
      nb=Math.floor(nb/counter);
    }
    return res;
  }

  public static factString2Dec = (str: string): number => {
    return str
      .split('')
      .map(v => +v)
      .filter(v => !isNaN(v))
      .reduce((acc, curr, i, { length }) => acc * (length - i) + curr);
  }
}
