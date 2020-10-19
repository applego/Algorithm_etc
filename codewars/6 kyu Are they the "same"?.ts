// 呼び出したい拡張メソッドをimport
import '../templates/number.extensions';

export function fizzBuzzOutput(num: number): void {
    for (let i = 0; i < num; i++) {
        // number型の拡張メソッドfizzBuzzが利用できるようになる
        console.log(`${i.fizzBuzz()}`);
    }
}

// ↑TSの拡張メソッドの呼び出し側
export function comp(a1: number[] | null, a2: number[] | null): boolean {
  // your code
  // a2の要素のsquaresがa1に存在するか
  // anyで一つでも存在しない要素があったらfalse, すべて存在したらtrue


  return true;
}
