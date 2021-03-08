export function findSmallestInt(args: number[]): number {
  return args.reduce((min, val) => {
    return Math.min(min, val);
  });
}
