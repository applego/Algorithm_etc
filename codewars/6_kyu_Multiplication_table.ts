/*
1 2 3
2 4 6
3 6 9
 */

export function multiplicationTable(size: number): number[][] {
  let multiplication_table: number[][] = [];
  for (let i = 1; i <= size; i++){
    let array: number[] = [];
    for (let j = 1; j <= size; j++){
      array.push(i * j);
    }
    multiplication_table.push(array);
  }
  return multiplication_table;
  // let test = [...Array(size)]
  //   .map((v, i) => {
  //     // return [++i, i * 2, i*3]
  //     console.log(v, i);
  //   });
}

//BP
export function multiplicationTable2(size: number): number[][] {
  return [...Array(size)].map((_, i) => [...Array(size)].map((_, j) => (i + 1) * (j + 1)))
}
