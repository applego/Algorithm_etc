interface NumCounter{
  [num: number]: number;
}

export const findOdd = (xs: number[]): number => {
  // happy coding!
  const numCounter: NumCounter = {};
  xs.forEach((x: number) => {
    if (numCounter[x])
      numCounter[x]++;
    else
      numCounter[x] = 1;
  });

  for (let [key, count] of Object.entries(numCounter)) {
    if (count % 2 === 1)
      return parseInt(key);
  }
  return -1;
  // return Object.values(numCounter).filter(x => x % 2 === 1)[0];
};
