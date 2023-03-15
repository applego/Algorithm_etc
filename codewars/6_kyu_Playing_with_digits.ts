/*
example:

89 --> 8¹ + 9² = 89 * 1

695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2

46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

In other words:

Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k
*/

export class G964_1109 {

    public static digPow = (n: number, p: number) => {
        // nを１つずつ p乗, p+1乗... の和を取得 ①
      // nが①の約数ならそのkを返す　でなければ-1を返す
      const sum: number = n.toString().split('')
        .map(v=>parseInt(v))
        .reduce((previous: number, current: number, index: number) => previous + current ** (p + index), 0);
      const divisor: number = sum / n;
      return Number.isInteger(divisor) ? divisor : -1;
    }
}

// BP
// return x % n ? -1 : x / n;
