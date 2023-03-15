
// BP
export class G964_20210130_BP{
  public static productFib = (prod: number) => {
    let p1: number = 1, p2: number = 1;
    while (p1 * p2 < prod) [p1, p2] = [p2, p1 + p2];
    return [p1, p2, (p1 * p2 == prod)];
  }
}

interface Dictionary{
  [key: number]: number;
}
export class G964_20210130_t {
  private static fibonaccies: Dictionary = {};
  public static productFib = (prod: number): [number, number, boolean] => {
    let fibonacci = (n: number): number => {
      if (n === 0) return 0;
      if (n === 1) return 1;
      if (G964_20210130_t.fibonaccies[n] != null) { return G964_20210130_t.fibonaccies[n]; }
      return fibonacci(n - 1) + fibonacci(n - 2);
    };
    G964_20210130_t.fibonaccies[0] = 0;
    G964_20210130_t.fibonaccies[1] = 1;

    let m = 0;
    while (true) {
      let mFib = fibonacci(m);
      if (G964_20210130_t.fibonaccies[m] == null) G964_20210130_t.fibonaccies[m] = mFib;
      let m1Fib = fibonacci(m + 1);
      if (G964_20210130_t.fibonaccies[m + 1] == null) G964_20210130_t.fibonaccies[m + 1] = m1Fib;
      let productFib = mFib * m1Fib;
      if (productFib === prod) return [mFib, m1Fib, true];
      if (productFib > prod) return [mFib, m1Fib, false];
      m++;
    }
  }
}
export class G964_20210130 {
  public static productFib = (prod: number): [number, number, boolean] => {
    let fibonacci = (n: number): number => {
      if (n === 0) return 0;
      if (n === 1) return 1;
      return fibonacci(n - 1) + fibonacci(n - 2);
      // * ↓ cacheが別れてしまう
      // return G964_20210130.cache(fibonacci)(n - 1) + G964_20210130.cache(fibonacci)(n - 2);
    };
    let cachedFibonacci = G964_20210130.cache(fibonacci);
    // let dic: Dictionary = {};
    // dic[0] = 0;
    // dic[1] = 1;

    // fibonacciで F(m) F(m+1)の掛け算をしていき、prodを超えたら false
    let m = 0;
    while (true) {
      let mFib = cachedFibonacci(m);
      let m1Fib = cachedFibonacci(m + 1);
      let productFib = mFib * m1Fib;
      if (productFib === prod) return [mFib, m1Fib, true];
      if (productFib > prod) return [mFib, m1Fib, false];
      m++;
    }
  }
  private static cache = (func: (n: number) => number): (n: number) => number => {
    var fibonaccies: Dictionary = {};
    // fibonaccies[0] = 0;
    // fibonaccies[1] = 1;
    return function () {
      const key = Number(arguments[0]);
      if (fibonaccies[key] == null) {
        fibonaccies[key] = func.apply(null, [key]);
      }
      return fibonaccies[key];
    }
  }
}



// export class G964_20210130 {

//   public static productFib: [number, number, boolean] = (prod: number) => {

//   }
//   private static fibonacci: number = (n: number) => {
//     const fibonacci = G964_20210130.cacheFib(G964_20210130.fibonacci(n))
//     const ret = G964_20210130.cacheFib()


//   }

//   private static cacheFib = (func: (n: number) => number) => {
//     let fibonaccies: Dictionary = {};
//     return function () {
//       const key = Number(JSON.stringify(arguments));
//       if (!fibonaccies[key])
//         fibonaccies[key] = func.apply(null, [key]);
//       return fibonaccies[key];
//     }
//   }
// }

// * cache 参考　js
// function cache(func) {
//   let calls = {};
//   return function () {
//     let key = JSON.stringify(arguments);
//     if (!(key in calls)) {
//       calls[key] = func.apply(null, arguments);
//     }
//     return calls[key];
//   };
// }

// let complexFunction = function (arg1, arg2) {
//       if (arg1 < arg2)
//         return arg2;
//       else
//         return arg1;
//     };
//     let cachedFunction = cache(complexFunction);
//     let ans1 = cachedFunction('foo', 'bar');
//     let ans2 = cachedFunction('foo', 'bar');
//     let ans3 = cachedFunction('foo', 'baz');
//     assert.strictEqual(ans1, ans2);
// assert.notEqual(ans1, ans3);
