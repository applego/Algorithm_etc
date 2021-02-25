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

//* BP
// var input = require('fs').readFileSync('/dev/stdin', 'utf8');
// var Arr = input.trim().split('\n');
// var a = Arr[1].split(' ').map(Number);
// var b = Arr[3].split(' ').map(Number);
// var cnt = 0;
// var len = a.length;

// for (var i = 0; i < b.length; i++) {
//   if (linearSearch(b[i])) cnt++;
// }
// console.log(cnt);

// function linearSearch(key) {
//   var i = 0;
//   a[len] = key;
//   while (a[i] != key) {
//     i++;
//     if (i >= len) return false;
//   }
//   return true;
// }
