export function squareSum(numbers: number[]): number {
  if (numbers.length === 0)
    return 0;
  return numbers.reduce((previousValue, currentValue, currendIndex) => {
    console.log(previousValue, currentValue, currendIndex);
    return currendIndex === 1 ? previousValue ** 2 + currentValue ** 2 : previousValue + currentValue ** 2;
  });
}

// BP
export function squareSum_bp(numbers: number[]): number {
  return numbers.reduce((previousValue, currentValue) => {
    return previousValue + currentValue * currentValue;
  },0);
}
