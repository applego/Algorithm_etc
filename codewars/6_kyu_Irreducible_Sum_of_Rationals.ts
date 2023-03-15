export class G96422 {
  public static sumFracts(l: number[][]): string {
    let bunbo = l.reduce((previousValue, currentValue) => {
      return previousValue * currentValue[1];
    }, 1);
    let bunsi = l.reduce((previousValue, currentValue) => {
      return previousValue + (currentValue[0] * (bunbo / currentValue[1]));
    }, 0);
    let gcd: number = G96422.getGcd(bunsi, bunbo);
    while (gcd !== 1) {
      bunsi /= gcd;
      bunbo /= gcd;
      gcd = G96422.getGcd(bunsi, bunbo);
    }

    if (bunbo === 1) {
      return bunsi.toString();
    } else {
      return `[${bunsi}, ${bunbo}]`;
    }
  }
  //こっちの方が少し早い？
  public static sumFracts1(l: number[][]): string | null {
    if (l.length === 0)
      return null;
    // 分母の配列を渡してその最小公倍数を取得
    const arrBunbo: number[] = l.map(v => v[1]);
    let smallestCommons:number = G96422.getLcmByArr(arrBunbo);

    //分子に最小公倍数/分母の値を乗算
    //分子の計算後の値の合計
    let sumOfCalculatedBunbo = l.reduce((previousValue, currentValue) => {
      const calculatedBunbo = currentValue[0] * (smallestCommons / currentValue[1]);
      return previousValue + calculatedBunbo;
    },0)
    // const calculated = sumOfCalculatedBunbo / smallestCommons;
    let gcdOfCalculated: number = G96422.getGcd(sumOfCalculatedBunbo, smallestCommons);
    while (gcdOfCalculated !== 1) {
      sumOfCalculatedBunbo /= gcdOfCalculated;
      smallestCommons /= gcdOfCalculated;
      gcdOfCalculated = G96422.getGcd(sumOfCalculatedBunbo, smallestCommons);
    }
    if (smallestCommons === 1) {
      return sumOfCalculatedBunbo.toString();
    } else {
      return `[${sumOfCalculatedBunbo}, ${smallestCommons}]`;
    }
  }
  private static getGcd(a: number, b: number) :number{
    let max = Math.max(a, b);
    let min = Math.min(a, b);
    if (max % min === 0)
      return min;
    else
      return G96422.getGcd(max % min, min);
  }
  private static getLcm(a: number, b: number): number {
    return a * b / G96422.getGcd(a, b);
  }
  private static getLcmByArr(arr: number[]): number{
    return arr.reduce((previousValue, currentValue, currentIndex) => {
      if (currentIndex === 0)
        return arr[0];
      else
        return G96422.getLcm(previousValue, currentValue);
    });
  }

  // こいつは配列の範囲の最小公倍数を求めていた→未使用
  private static smallestCommons(arr: number[]): number{
    let range = [];
    for (let i = Math.max(arr[0], arr[1]); i >= Math.min(arr[0], arr[1]); i--) {
      range.push(i);
    }

    return range.reduce((previousValue, currentValue) => {
      const gcdPrevCurr = gcd(previousValue, currentValue);
      return (previousValue * currentValue) / gcdPrevCurr;
    });

    function gcd(x:number, y:number):number { // ユークリッドの互除算
      if (y === 0)
        return x;
      else
        return gcd(y, x % y);
    }
  }
}

// BP
export class G964 {
    public static gcd(a: number, b: number): number {
      return b ? G964.gcd(b, a % b) : a;
    }
    public static sumFracts(l: number[][]): string | null {
        if (l.length === 0) return null;
        var [n, d] = l.reduce(([a, x], [b, y]) => [a * y + b * x, x * y]);
        var g = G964.gcd(n, d);
        return g === d ? `${n/d}` : `[${n/g}, ${d/g}]`;
    }
}
