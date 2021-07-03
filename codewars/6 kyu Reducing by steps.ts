export class G964 {
  private static isCdi(x: number, y: number): boolean {
    return x % y === 0;
  }
  public static gcdi(x: number, y: number): number {
    // your code　最大公約数
    const xabs = Math.abs(x);
    const yabs = Math.abs(y);

    const lower: number = Math.min(xabs, yabs);
    const bigger: number = Math.max(xabs, yabs);

    let i = lower;

    while (!(G964.isCdi(bigger, i) && G964.isCdi(lower, i))) {
      i--;
    }
    return i;
  }
  private static isCmu(lower: number, bigger: number): boolean {
    // lowerがbiggerの公倍数かどうか
    let i = 1;
    while (lower * i <= bigger) {
      if (bigger % (lower * i) === 0) {
        return true;
      }
      i++;
    }
    return false;
  }
  public static lcmu(a: number, b: number): number {
    // your code　最小公倍数
    const xabs = Math.abs(a);
    const yabs = Math.abs(b);

    const lower: number = Math.min(xabs, yabs);
    const bigger: number = Math.max(xabs, yabs);

    let i = 1;
    while (!G964.isCmu(lower, bigger * i)) {
      i++;
    }
    return bigger * i;
  }
  public static som(a: number, b: number) {
    // your code
    return a + b;
  }
  public static maxi(a: number, b: number) {
    // your code
    return Math.max(a, b);
  }
  public static mini(a: number, b: number) {
    // your code
    return Math.min(a, b);
  }
  public static operArray(
    fct: (x: number, y: number) => number,
    arr: Array<number>,
    init: number
  ) {
    const arrAnswer: number[] = [];
    for (let i = 0; i < arr.length; i++) {
      if (i === 0) {
        arrAnswer.push(fct(init, arr[0]));
      } else {
        arrAnswer.push(fct(arrAnswer[i - 1], arr[i]));
      }
    }
    return arrAnswer;
    // return arr.map((val, idx, arr) => {
    //   if (idx === arr.length - 1)

    //   return fct(val, arr[idx + 1]);
    // });
  }
}

export class G964_BP {
  public static gcdi(x: number, y: number): number {
    x = Math.abs(x);
    y = Math.abs(y);
    while (y !== 0) {
      var t = x;
      x = y;
      y = t % y;
    }
    return x;
  }
  public static lcmu(a: number, b: number): number {
    return Math.abs(a * b) / G964.gcdi(a, b);
  }
  public static som(a: number, b: number) {
    return a + b;
  }
  public static maxi(a: number, b: number) {
    return Math.max(a, b);
  }
  public static mini(a: number, b: number) {
    return Math.min(a, b);
  }
  public static operArray(fct: any, arr: any, init: any) {
    return arr.map(function (u: any) {
      init = fct(init, u);
      return init;
    });
  }
}
