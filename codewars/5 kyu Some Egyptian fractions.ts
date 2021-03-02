export class G964 {
  public static decompose(n: string): string[] {
    console.log(n);
    const arr = n.split('/');
    // if (arr[0] === undefined) throw new Error('arr[0] is undefined');
    const tmpDenominator = Number.isNaN(Number(arr[1])) ? 1 : Number(arr[1]);
    let a = new fraction(Number(arr[0]), tmpDenominator);
    if (a.isNumeratorZero()) return [];
    if (a.isInteger()) return [a.toString()];
    let result = [];
    if (a.valueOf() > 1) {
      const seisuu = Math.floor(a.valueOf());
      result.push(seisuu.toString());
      a = a.subtract(new fraction(seisuu));
    }
    // ここから少数部分のはず
    for (let i = 2; i < Number.MAX_SAFE_INTEGER; i++) {
      // const tmpA = new fraction(a.numerator, a.denominator);
      const tmpA = a.copy();
      // tmpA = tmpA.add(new fraction(1, 1));
      console.log(a.toString());
      const target = new fraction(1, i);
      if (tmpA.subtract(target).valueOf() > 0) {
        a = a.subtract(target);
        result.push(target.toString());
      }
      if (a.isNumeratorOne()) {
        result.push(a.toString());
        break;
      }
    }

    return result;
  }
}

//* 分数クラス
export class fraction {
  constructor(private numerator: number = 0, private denominator: number = 1) {
    fraction._reduce(this);
  }

  /** 約分 */
  private static _reduce(o: fraction) {
    const m = fraction._integerizable(o.numerator, o.denominator);
    if (!m) throw new Error('m:return value of _integerizable was undefined');
    (o.numerator *= m), (o.denominator *= m); //　少数が渡されたら分子分母を整数化
    const g = fraction._gcm(o.numerator, o.denominator);
    (o.numerator /= g), (o.denominator /= g); // 最大公約数で除算
  }
  private static _gcm(numerator: number, denominator: number) {
    for (let i = Math.min(numerator, denominator); i > 1; i--)
      if (numerator % i == 0 && denominator % i == 0) return i;
    return 1;
  }
  private static _integerizable(numerator: number, denominator: number) {
    for (let m = 1; m < Number.MAX_SAFE_INTEGER; m++) {
      if ((m * numerator) % 1 == 0 && (m * denominator) % 1 == 0) return m;
    }
    throw new Error(`overflow thile reducing (${numerator} , ${denominator})`);
  }

  public toString() {
    return (
      this.numerator + (this.denominator > 1 ? '/' + this.denominator : '')
    );
  }
  public numerize() {
    return this.numerator / this.denominator;
  }
  public valueOf() {
    return this.numerize();
  }
  public isInteger() {
    return Number.isInteger(this.numerize());
  }
  public isNumeratorZero() {
    return this.numerator === 0;
  }
  public isNumeratorOne() {
    return this.numerator === 1;
  }
  public copy() {
    return new fraction(this.numerator, this.denominator);
  }
  /** 計算 */
  public add(other: fraction) {
    return new fraction(
      this.numerator * other.denominator + other.numerator * this.denominator,
      other.denominator * this.denominator
    );
  }
  public subtract(other: fraction) {
    return this.add(new fraction(other.numerator * -1, other.denominator));
  }
  public multiply(other: fraction) {
    return new fraction(
      this.numerator * other.numerator,
      this.denominator * other.denominator
    );
  }
  public divide(other: fraction) {
    return this.multiply(other.reciprocal());
  }
  private reciprocal() {
    return new fraction(this.denominator, this.numerator);
  }
}

//* ステート的... 頓挫

export class G964_ {
  public static decompose(n: string): string[] {
    // your code
    const decomposer = new decomposerFactory().create(n);
    return decomposer.decopose(n);
  }
}

interface decomposer {
  n: string;
  decopose(n: string): string[];
}

class decimalDecoposer implements decomposer {
  constructor(public n: string) {}
  public decopose(n: string): string[] {
    return new Array<string>();
  }
}

class integerDecoposer implements decomposer {
  constructor(public n: string, public ans: number) {}
  public decopose(n: string): string[] {
    return new Array(this.ans.toString());
  }
}

class OtherDecoposer implements decomposer {
  constructor(public n: string) {}
  public decopose(n: string): string[] {
    return new Array<string>();
  }
}

class decomposerFactory {
  public create(n: string): decomposer {
    if (n.indexOf('.') > -1) {
      return new decimalDecoposer(n);
    }
    const tmpArr = n.split('/');
    const [numerator, denominator] = [...n.split('/').map(Number)]; //[tmpArr[0], tmpArr[1]];
    if (Number.isInteger(numerator / denominator)) {
      return new integerDecoposer(n, numerator / denominator);
    }
    return new OtherDecoposer(n);
  }
}
