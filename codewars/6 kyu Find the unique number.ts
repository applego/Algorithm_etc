
interface dictionary{
  n: number;
  cnt: number;
}

export function findUniq(arr: number[]): number {
  // Do the magic
  const arrSet = Array.from(new Set(arr));
  for (let i = 0; i < arrSet.length; i++) {
    let cnt = 0;
    for (let j = 0; j < arr.length; j++){
      if (arr[j] === arrSet[i])
        cnt++;
      if (cnt > 1) {
        arr = arr.filter(v => v !== arr[j]);
        break;
      }
    }
    if (cnt > 1)
      continue;
    else
      return arrSet[i];
  }
  return arr[0];
}

export function findUniq_BP(arr: Array<number>): number {
  arr = arr.sort();
  return arr[0] == arr[1] ? arr[arr.length - 1] : arr[0];
}

/**
 * 重複していない数を返す
 * 重複していたら削除
 *
 */
