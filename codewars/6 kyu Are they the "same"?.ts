// 呼び出したい拡張メソッドをimport
import '../templates/number.extensions';

export function fizzBuzzOutput(num: number): void {
    for (let i = 0; i < num; i++) {
        // number型の拡張メソッドfizzBuzzが利用できるようになる
        console.log(`${i.fizzBuzz()}`);
    }
}

// ↑TSの拡張メソッドの呼び出し側（問題と無関係）

export function comp(a1: number[] | null, a2: number[] | null): boolean {
  if (!a1 || !a2)
    return false;

  for (let value of a2) {
    const sqrt :number = Math.sqrt(value);
    if (!a1.includes(sqrt))
      return false;
    else {
      const delete_idx = a1.indexOf(sqrt);
      delete a1[delete_idx];
    }
  }
  return true;

  // your code
  // a2の要素のsquaresがa1に存在するか
  // anyで一つでも存在しない要素があったらfalse, すべて存在したらtrue
  // localだとtest通ったけど、CodeWarsでやったらコンパイルエラー...でもこのロジックは足りない
  return true === a2?.every(value => a1?.includes(Math.sqrt(value)));
}

// BP
export function comp_(a1: number[] | null, a2: number[] | null): boolean {
  if (!(a1 && a2) || a1.length !== a2.length) return false;

  const a1SortedSquared = [...a1].sort().map(n => n ** 2);
  const a2Sorted = [...a2].sort();

  return JSON.stringify(a1SortedSquared) === JSON.stringify(a2Sorted);
}
