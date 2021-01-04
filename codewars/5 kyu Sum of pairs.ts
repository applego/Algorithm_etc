export function sumPairs(ints: number[], s: number): [number, number] | void {

  let secondIdxOfPairs: number = ints.length;
  let pairs: [number, number] = [-1, -1];

  for (let i = 0; i < ints.length - 1; i++){
    const curr = ints[i];
    const target = s - curr;
    const candidates = ints.slice(i + 1);
    const newSecondIdxOfPairs = i + candidates.indexOf(target);

    if (newSecondIdxOfPairs > i - 1
      && secondIdxOfPairs > newSecondIdxOfPairs) {
      pairs = [curr, target];
      secondIdxOfPairs = newSecondIdxOfPairs;
      continue;
    }
  }
  return secondIdxOfPairs === ints.length ? undefined : pairs;
}

export function sumPairs2(ints: number[], s: number): [number, number] | void {
  // const intsWithoutDuplicates: number[] = Array.from(new Set(ints));

  let secondIdxOfPairs: number = ints.length;
  let pairs: [number, number] = [-1, -1];

  for (let i = 0; i < ints.length - 1; i++){
    const curr = ints[i];
    const target = s - curr;
    // const candidates = ints.slice(i + 1);
    // const newSecondIdxOfPairs = i + candidates.indexOf(target);

    // if (newSecondIdxOfPairs > i - 1
    //   && secondIdxOfPairs > newSecondIdxOfPairs) {
    const intsWithoutDuplicates: number[] = Array.from(new Set(ints.slice(i + 1)));

    if (intsWithoutDuplicates.includes(target)) {
      const newSecondIdxOfPairs = ints.indexOf(target);
      if (newSecondIdxOfPairs < secondIdxOfPairs) {
        pairs = [curr, target];
        secondIdxOfPairs = newSecondIdxOfPairs;
        continue;
      }
    }
  }
  return secondIdxOfPairs === ints.length ? undefined : pairs;
}

const hasPair = (ints: number[], target: number): boolean => {
  return ints.includes(target);
}

export function sumPairs_BP(ints: number[], s: number): [number, number] | void{
  const seen = new Set();
  for (const n of ints) {
    if (seen.has(s - n)) return [s - n, n];
    seen.add(n);
  }
}
