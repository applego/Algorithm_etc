export function maxTriSum(nums: number[], sumcount = 3) {
  const withoutDuplication = Array.from(new Set(nums));
  return withoutDuplication
    .sort((a, b) => b - a)
    .slice(0, sumcount)
    .reduce((acc, val) => acc + val);
}
