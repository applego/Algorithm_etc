/**
  // 1. 並べ替えて元の数の次に大きい数を返す
  // 2. 元の数が最大値の場合-1を返す
 */
export function nextBigger(n: number): number {
  if (isMax(n.toString()))
    return -1;
  return nextBigger_(n, 2);
}

const nextBigger_ = (n: number,startIdx: number=2): number => {
  // const slicedNum: number = Number(n.toString().slice(-1 * startIdx));
  const strEnd: string = n.toString().slice(-1 * startIdx);
  if (!isMax(strEnd)) {
    let strResult: string = n.toString().slice(0, -1 * startIdx);
    // slicedNumの中の最大値を左端へ
    const arrEnd: number[] = strEnd.split('').map(v => parseInt(v));
      // 最大値ではなく元の左端の次に大きい数
      // let maxNumInSlicedNum: number = Math.max(...arrEnd);
    const leftestNumOfstrEnd: number = Number(strEnd[0]);
    const nextBiggerNum: number = Number(arrEnd.filter(v => v > leftestNumOfstrEnd).sort((a, b) => a - b).toString()[0])
      || leftestNumOfstrEnd;
    strResult += nextBiggerNum.toString();
    arrEnd.splice(arrEnd.findIndex(v => v === nextBiggerNum), 1);
    strResult += getMinAsStr(arrEnd);
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

const isMax = (strN: string): boolean => {
  // return n.toString().split('').map(v=>parseInt(v)).every((val, i, arr) => {
  return strN.split('').map(v=>parseInt(v)).every((val, i, arr) => {
    if (i < 1)
      return true;
    return val <= arr[i-1];
  });
}

const getMinAsStr = (arr: number[]): string => {
  arr.sort((a: number, b: number) => a - b);
  return arr.join('');
}

/**
 * BP
 */
export const nextBiggerBP = (n: number) => {
  let max = maxify(n);
  while (++n <= max) {
    if (maxify(n) === max) {
      return n;
    }
  }
  return -1;
};

const maxify = (n: number) => {
  // +[...`${n}`]
  return +n.toString().split('')
    .map(n => +n)
    .sort((a, b) => b - a)
    .join('')
    .replace(/^(0+)([1-9])/, '$2$1');
};
