export function nextBigger(n: number): number {
  // 1. 並べ替えて元の数の次に大きい数を返す
  // 2. 元の数が最大値の場合-1を返す
  if (isMax(n))
    return -1;
  return nextBigger_(n, 2);
}

const nextBigger_ = (n: number,startIdx: number=2): number => {
  // 1の位と10の位を比較 1 10
    // 1の位の方が大きければ10の位と交換
      //* 1234 → 1243
    // 1の位の方が小さければ100の位と10の位を比較 10 100
    // 10の位の方が大きければ1 100を交換
      //* 1243 → 1342
      // 10の位のほうが小さければ100と1000を比較　100 1000
        // 100の方が大きければ 1 1000を交換
          //* 1543 → 3145
        // 100の方が小さければ... 最後の桁の場合
        //* 6543 → -1

  const slicedNum: number = Number(n.toString().slice(-1 * startIdx));
  if (!isMax(slicedNum)) {
    let strResult: string = n.toString().slice(0, -1 * startIdx);
    // slicedNumの中の最大値を左端へ
    const arrSlicedNum: number[] = slicedNum.toString().split('').map(v => parseInt(v));
      // 最大値ではなく元の左端の次に大きい数
      // let maxNumInSlicedNum: number = Math.max(...arrSlicedNum);
    const leftestNum: number = Number(slicedNum.toString()[0]);
    const nextBiggerNum: number = Number(arrSlicedNum.filter(v => v > leftestNum).sort((a, b) => a - b).toString()[0]);
    strResult += nextBiggerNum.toString();
    arrSlicedNum.splice(arrSlicedNum.findIndex(v => v === nextBiggerNum), 1);
    strResult += getMinStr(arrSlicedNum);
    return Number(strResult);
  } else {
    return nextBigger_(n, ++startIdx);
  }



  //? 最大値かどうか
    //* true
      //! -1を返す　end
  //? 下2桁で作れる最大値かどうか
  //* false
    //! 下2桁を入れ替える end(//! 下2桁の一番左を下2桁の中の最大の数にし、下1桁を最小値にする end)
  //* true
    //? 下3桁で作れる最大値かどうか
      //* false
        //! 下3桁の一番左を下3桁の中の最大の数にし、下2桁を最小値にする end
      //* true
        //? 下N桁で作れる最大値かどうか
          // * false
            //! 下N桁の一番左を下N桁の中の最大の数にし、下N-1桁を最小値にする　end
          // * true
            // 下N+1桁に続く
}

export const isMax = (n: number): boolean => {
  return n.toString().split('').map(v=>parseInt(v)).every((val, i, arr) => {
    if (i < 1)
      return true;
    return val <= arr[i-1];
  });
}

const getMinStr = (arr: number[]): string => {
  arr.sort((a: number, b: number) => a - b);
  return arr.join('');
}
