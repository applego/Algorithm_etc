function binarySearch<T>(arr: T[], target: T): number {
  let left = 0;
  let right = arr.length;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return 1;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return 0;
}

export const answer = (input: string): string => {
  const lines = input.trim().split('\n');
  const arrS = lines[1].split(' ').map(Number);
  const arrT = lines[3].split(' ').map(Number);
  const sum = arrT.reduce((acc, curr) => {
    return acc + binarySearch(arrS, curr);
  }, 0);
  return sum.toString();
};

// * 提出用
// function binarySearch(arr, target) {
//   let left = 0;
//   let right = arr.length;
//   while (left < right) {
//     let mid = Math.floor((left + right) / 2);
//     if (arr[mid] === target) {
//       return 1;
//     } else if (arr[mid] < target) {
//       left = mid + 1;
//     } else {
//       right = mid;
//     }
//   }
//   return 0;
// }
// (function (input) {
//   const lines = input.trim().split('\n');
//   const arrS = lines[1].split(' ').map(Number);
//   const arrT = lines[3].split(' ').map(Number);
//   const sum = arrT.reduce((acc, curr) => {
//     return acc + binarySearch(arrS, curr);
//   }, 0);
//   console.log(sum);
// })(require('fs').readFileSync('/dev/stdin', 'utf8'));
