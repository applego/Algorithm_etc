export function yah_test1_2(str: string): number {
  return str
    .split(' ')
    .map(Number)
    .reduce((acc, curr) => {
      if (curr <= 10000) {
        return acc + curr;
      } else {
        return acc;
      }
    }, 0);
}

// const yah_test2 = (str: string): number => {
//   return str
//     .split(' ')
//     .map(Number)
//     .reduce((acc, curr) => {
//       if (curr <= 10000) {
//         return acc + curr;
//       } else {
//         return acc;
//       }
//     }, 0);
// }
// export { yah_test2 };
