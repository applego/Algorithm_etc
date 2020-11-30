export function maxGap(nums: number[]): number{
  nums.sort((a, b) => b - a);
  let maxGap: number = Number.MIN_SAFE_INTEGER;
  for (let n: number = 1; n < nums.length; n++) {
    let currentDiff: number = nums[n-1] - nums[n];
    if (currentDiff > maxGap)
      maxGap =currentDiff;
  }
  return maxGap;

  // return nums.reduce((previousValue, currentValue, currendIndex,array) => {
  //   let currentDiff = currentValue - array[currendIndex - 1];
  //   return Math.max(currentDiff, previousValue);
  // },Number.MIN_SAFE_INTEGER)
}

// BP
export function maxGap_bp(nums: number[]): number{
  let max: number = -Infinity;

  nums = nums.sort((a, b) => a - b);

  for ( const n of nums.slice(0, -1) ) max = Math.max(max, nums[nums.indexOf(n) + 1] - n);

  return max;
}
