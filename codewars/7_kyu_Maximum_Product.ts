/**
 * Task
Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.

Notes
Array/list size is at least 2.

Array/list numbers could be a mixture of positives, negatives also zeroes .
 */

export function adjacentElementsProduct(arr: number[]) {
  let maximumProduct = Number.MIN_SAFE_INTEGER;
  for (let i = 1; i < arr.length; i++){
    const n = arr[i - 1] * arr[i];
    // console.log(n);
    maximumProduct = Math.max(maximumProduct, n);
  }
  return maximumProduct;
}
