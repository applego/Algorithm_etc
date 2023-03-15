const QuarterOfYear = {
  1: 1,
  2: 1,
  3: 1,
  4: 2,
  5: 2,
  6: 2,
  7: 3,
  8: 3,
  9: 3,
  10: 4,
  11: 4,
  12: 4
} as const;
type QuarterOfYear = typeof QuarterOfYear[keyof typeof QuarterOfYear];

interface QuarterOfYearM{
  [month: number]: number
}
let quarterOfYear: QuarterOfYearM = {};
quarterOfYear[1] = 1;



export function quarterOf(month: number): number {
  switch (month) {
    case 1:
    case 2:
    case 3:
      return 1;
    case 4:
    case 5:
    case 6:
      return 2;
    case 7:
    case 8:
    case 9:
      return 3;
    case 10:
    case 11:
    case 12:
      return 4;
    default:
      throw new Error("Invalid quarter");
  }
}
