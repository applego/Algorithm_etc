export function productArray(nums: number[]): number[] {
  // * why not correct
  // return nums.map((v, i, array) => {
  //   return array
  //     .filter((v, i) => { i !== array.indexOf(v); })
  //     .reduce((a, c) => a * c);
  // });

  // * from BP
  return nums.map((e: number, i: number) => {
    return [...nums].filter((e: number, i2: number) => i2 != i)
      .reduce((a: number, c: number) => a * c, 1)
  })

  let result: number[] = [];
  for (const num of nums) {
    // * try1
    // let el: number = nums.splice(nums.indexOf(num), 1, 1)
    //   .reduce((acc, val) => acc * val);
    // result.push(el);

    // let nums2: number[] = nums.splice(nums.indexOf(num), 1, 1);
    // let el2: number = nums2.reduce((acc, val) => acc * val);
    // result.push(el2);

    // * try2
    // let el: number = nums.filter((val, idx) => {
    //   idx !== nums.indexOf(num);
    // }).reduce((acc, val) => {
    //   return acc * val;
    // });
    // result.push(el);

    // console.log(num);
    let el: number = nums
      .filter((val, idx) => idx !== nums.indexOf(num))
      .reduce((a, c) => a * c);
    result.push(el);
  }
  return result;
}
