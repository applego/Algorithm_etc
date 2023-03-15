/**
 "7777...8！？"とボブは叫んだ。ああ！」と叫んだ。面白い数字が出てくるたびに、彼は気がついてはすぐに忘れてしまうのです。一度きりの面白い数字をキャッチしたくない人はいませんか？

ボブが面白い数字を見逃さないようにしましょう。彼の車のコンピューターをハッキングして 走行距離を読み取る箱を作った ダッシュに貼られたボックスは 黄色か緑に点灯します 1か2（それぞれ）を受け取るかどうかでね

勇敢な戦士よ、部品を接着するのは君次第だ。入力されたマイル数を解析し、その数値が「面白い」場合は2を返し（下記参照）、次の2マイル以内に面白い数値があれば1を返し、興味のない数値であれば0を返す関数を書きます。

注意：Haskellでは、0, 1, 2の代わりにNo, Almost, Yesを使用します。

"面白い」数字
面白い数字とは、以下の基準を1つ以上満たす3桁以上の数字のことです。

すべてのゼロの後に数字が続くもの: 100, 90000
一桁ごとに同じ数字：1111
桁が連続しています。1234
桁は順次デクリメントされています。4321
数字は回文：1221または73837
数字が awesomePhrases 配列のいずれかの値に一致する。
インクリメントシーケンスの場合、7890 のように 0 は 9 の後に来て、1 の前には来ないようにしてください。
デクリメントシーケンスの場合、3210 のように、0 は 1 の後に来るべきであり、9 の前には来ない。

つまり、これらの入出力を期待する必要があります。

// "つまらない "数値
isInteresting(3, [1337, 256]); // 0
isInteresting(3236, [1337, 256]); // 0

// "興味深い "数に近づくにつれて進捗状況
isInteresting(11207, []); // 0
isInteresting(11208, []); // 0
isInteresting(11209, []); // 1
isInteresting(11210, []); // 1
isInteresting(11211, []); // 2

// 提供された "すごいフレーズ "に近い
isInteresting(1335, [1337, 256]); // 1
isInteresting(1336, [1337, 256]); // 1
isInteresting(1337, [1337, 256]); // 2
エラーチェック
数字は99より大きいものだけが面白い!
入力は常に 0 より大きく 1,000,000,000 未満の整数となります。
awesomePhrases 配列は常に提供され、常に配列となりますが、空であっても構いません。(誰もが数字がおかしな言葉を綴っているとは思っていませんが...)
0, 1, 2 のいずれかを出力しなければなりません。
 */

/**
 ・面白い数かどうか
    -
 ・面白い数に近いかどうか = 面白い数 -1 or 面白い数 -2

 */
export function isInteresting(n: number, awesomePhrases: number[]): number {
  // console.log(n);
  // console.info(awesomePhrases);

  if (isInterestingNumber(n, awesomePhrases)) {
    return 2;
  }
  else if (isNearInterestingNumber(n, awesomePhrases,2)) {
    return 1;
  } else {
    return 0
  }
}

function isInterestingNumber(n: number, awesomePhrases: number[]): boolean {
  if (n <= 99) return false;

  if (isAllZeroFollowed(n))return true;
  if (isEveryDigitSame(n))  return true;
  if (isSequential(n))return true;
  if (isSequentialDesc(n))return true;
  if (isPalindrome(n)) return true;
  if (isIncludeAwesome(n, awesomePhrases)) return true;
  return false;
}

function isAllZeroFollowed(n: number): boolean {
  return n.toString().split('').slice(1).every(v => v === "0");
}

function isEveryDigitSame(n: number): boolean{
  let s: string = n.toString()[0];
  return n.toString().split('').every(v => v === s);
}

function isSequential(n: number): boolean{
  const arrInt: number[] = n.toString().split('').map(v => parseInt(v));

  for (let i = 1; i < arrInt.length; i++){
    if (arrInt[i - 1] === 9) {
      if (arrInt[i] !== 0) return false;
      else continue;
    }
    if (arrInt[i] !== arrInt[i - 1] + 1) return false;
    else continue;
  }
  return true;
}

function isSequentialDesc(n: number): boolean {
  const arrInt: number[] = n.toString().split('').map(v => parseInt(v));

  for (let i = 1; i < arrInt.length; i++) {
    if (arrInt[i - 1] === 1) {
      if (arrInt[i] !== 0) return false;
      else continue;
    }
    if (arrInt[i] !== arrInt[i - 1] - 1) return false;
    else continue;
  }
  return true;
}

function isPalindrome(n: number): boolean {
  const strN = n.toString();
  for (let i = 0; i < strN.length / 2; i++) {
    if (strN[i] !== strN[strN.length - 1 - i])
      return false;
  }
  return true;
}

function isIncludeAwesome(n: number, awesomePhrases: number[]): boolean{
  return awesomePhrases.includes(n);
}

function isNearInterestingNumber(n: number, awesomePhrases: number[], near: number): boolean {
  let plus: number = 1;
  while (plus <= near) {
    if (isInterestingNumber(n + plus, awesomePhrases)) {
      return true;
    }
    plus++;
  }
  return false;
}

/**
 * BP
 */
export function isInterestingBP(n: number, awesomePhrases: number[], iteration = 0, awesomeness = 2): number {
  switch (true) {
    case (/^[1-9]0{2,}$/.test(n.toString())): // 100, 90000
    case (/^(.)\1{2,}$/.test(n.toString())): // 1111
    case (n.toString().length > 2 && '1234567890'.includes(n.toString())): // 1234
    case (n.toString().length > 2 && '9876543210'.includes(n.toString())): // 4321
    case (n.toString().length > 2 && n.toString() === n.toString().split('').reverse().join('')): // 1221, 73837
    case (awesomePhrases.includes(n)): // matches an "awesome phrase"
      return awesomeness;
    default:
      if (iteration < 2) {
        return isInterestingBP(++n, awesomePhrases, ++iteration, 1);
      }
      return 0;
  }
}
