// * test.ts用
export const linearSearch = (input: string): string => {
  const lines = input.trim().split('\n');
  const n = lines.shift();
  const S = lines.shift();
  const q = lines.shift();
  const T = lines.shift();
  if (S === undefined || T == undefined) throw new Error('undefined');
  const arrS = S.split(' ');
  const arrT = T.split(' ');
  let count = 0;
  for (const t of arrT) {
    for (const s of arrS) {
      if (s === t) {
        count++;
        break;
      }
    }
  }
  return count.toString();
};

// * 提出用
// (function (input) {
//   const lines = input.trim().split('\n');
//   const n = lines.shift();
//   const S = lines.shift();
//   const q = lines.shift();
//   const T = lines.shift();
//   if (S === undefined || T === undefined) throw new Error('undefined');
//   const arrS = S.split(' ');
//   const arrT = T.split(' ');
//   let count = 0;
//   for (const t of arrT) {
//     for (const s of arrS) {
//       if (s === t) {
//         count++;
//         break;
//       }
//     }
//   }
//   console.log(count);
//   return count.toString();
// })(require('fs').readFileSync('/dev/stdin', 'utf8'));
