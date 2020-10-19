// TypeScriptファイル内でexportを利用していない場合は、export{};を定義
export {};

// 拡張メソッドの定義
declare global {
    interface Number {
        /** 3の倍数:Fizz, 5の倍数: Buzz, その他:数字文字列 */
        fizzBuzz(): string;
    }
}

// 拡張メソッドの実装側
Number.prototype.fizzBuzz = function () {
    const num = (this as Number).valueOf();

    if (num % 3 === 0 && num % 5 === 0) {
        return 'fizzbuzz';
    } else if (num % 3 === 0) {
        return 'fizz';
    } else if (num % 5 === 0) {
        return 'buzz';
    } else {
        return num.toString();
    }
};
