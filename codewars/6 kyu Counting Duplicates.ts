
interface Counter {
  letter: string;
  count: number;
}
export function duplicateCount(text: string): number{
//配列化　小文字化
  const lowercase: string = text.toLowerCase();
  // let count
  const sCounter: { [s: string]: number } = {};

  lowercase.split('').forEach((s: string) => {
    if (sCounter[s] != null) {
      sCounter[s] += 1;
    } else {
      sCounter[s] = 1;
    }
  });
  //出現カウント
  //2回以上出現した文字のカウント
  let cnt_over_twice: number = 0;//sCounter.filter()
  for (let k of Object.keys(sCounter)) {
    if (sCounter[k] >= 2)
      cnt_over_twice++;
  }

  return cnt_over_twice;
}

//BP
//error https://stackoverflow.com/questions/49218765/typescript-and-iterator-type-iterableiteratort-is-not-an-array-type
// export function duplicateCount_(text: string): number{
//   const lowercaseText = text.toLocaleLowerCase();
//   const set = new Set(lowercaseText);

//   const textArray = [...lowercaseText];

//   return [...set].reduce((accumulator, value) => {
//       const characterCount = textArray.filter((character) => character === value).length;

//       if (characterCount > 1) {
//           return accumulator + 1;
//       }

//       return accumulator
//   }, 0);
// }