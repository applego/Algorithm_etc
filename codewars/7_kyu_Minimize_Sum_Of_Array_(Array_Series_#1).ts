/**
 * 掛け算の和の最小値を返す
 * ソート
 * 大きい数と小さい数をかける
 */
export function minSum(arr: number[]) {
  arr.sort((a: number, b: number) => a - b);
  //* 一応テストデータはクリアしたけど、、、
  // return arr.reduce((a: number, c: number, idx: number,arr: number[]) => {
  //   if (idx >= arr.length / 2)
  //     return a;
  //   return a + (c * arr[arr.length - idx - 1]);
  // },0)
  let minSum:number = 0;
  for (let i = 0; i < arr.length / 2; i++){
    minSum += arr[i] * arr[arr.length - i - 1];
  }
  return minSum;
}
