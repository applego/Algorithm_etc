class RowWeightsCalc{
  // private result: number[];
  // constructor() {
  //   this.result = [...Array(2)].map((_, i) => 0);
  // }
  public static rowWeights = (arr: number[]):number[] => {
    let result: number[] = [...Array(2)].map((_, i) => 0);
    arr.forEach((val, idx) => {
      result[idx % 2] += val;
      // if (idx % 2 === 0)
      //   result[0] += val;
      // else
      //   result[1] += val;

    });
    return result;
  }
}

const rowWeights = RowWeightsCalc.rowWeights;
export { rowWeights };

function rowWeightsBP(arr: number[]):number[]{
  return arr.reduce((r, e, i) => (r[i % 2] += e, r), [0, 0]);
}
export { rowWeightsBP };
