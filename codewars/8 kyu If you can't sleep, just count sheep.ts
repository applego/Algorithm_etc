// const part = (n: number, animal: string): string => {
//   return `${n} ${animal}...`;
// };

// export function countSheep(num: number): string {
//   // [...Array(num).keys()].map(i => ++i)
//   // [...Array.from(num)].map(i=>++i)
//   //   .reduce((acc, curr) => {
//   //   return part(curr, 'sheep');
//   // })
//   // return '';
//   let result: string = '';
//   for (let i = 1; i < num + 1; i++) {
//     result += part(i, 'sheep');
//   }
//   return result;
// }

export function countSheep(num: number): string {
  const part = (n: number, animal: string): string => {
    return `${n} ${animal}...`;
  };
  let result: string = '';
  for (let i = 1; i < num + 1; i++) {
    result += part(i, 'sheep');
  }
  return result;
}
