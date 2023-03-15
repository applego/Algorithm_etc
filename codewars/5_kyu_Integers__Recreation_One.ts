interface Range{
  start: number;
  end: number;
}
export class G964_1227 {

  public static listSquared = (m:number, n:number) => {
    // your code
    console.log(m, n);
    let result: number[][] = [];
    for (let i = m; i <= n; i++){
      //
      const divisors: number[] = G964_1227.getDivisors(i);
      const sumOfDivisors: number = divisors.reduce((acc, val) => {
        return acc + val ** 2;
      }, 0);
      const square = Math.sqrt(sumOfDivisors);
      if (Number.isInteger(square))
        result.push([i, sumOfDivisors]);
    }
    return result;
  }
  /**
   * 約数の配列を返す
   */
  static getDivisors(n: number): number[]{
    let result: number[] = [];
    for (let i = 1; i <= n; i++){
      if (n % i === 0)
        result.push(i);
    }
    return result;
  }
}

// import Test from './TestCodewar';
// Test.assert_equals(G964_1227.listSquared(1, 250), [[1, 1], [42, 2500], [246, 84100]]);
// Test.assert_equals(G964_1227.listSquared(42, 250), [[42, 2500], [246, 84100]]);
// Test.assert_equals(G964_1227.listSquared(250, 500), [[287, 84100]]);
// Test.assert_equals(G964_1227.listSquared(300, 600), []);
