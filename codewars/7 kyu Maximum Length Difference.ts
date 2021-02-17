export class G964_20210217 {
  public static mxdiflg = (a1: string[], a2: string[]): number => {
    if (a1.length === 0 || a2.length === 0) return -1;
    let max1 = 0;
    let min1 = Number.MAX_VALUE;
    a1.forEach((v) => {
      if (v.length > max1) max1 = v.length;
      if (v.length < min1) min1 = v.length;
    });
    let max2 = 0;
    let min2 = Number.MAX_VALUE;

    a2.forEach((v) => {
      if (v.length > max2) max2 = v.length;
      if (v.length < min2) min2 = v.length;
    });
    return Math.max(Math.abs(max1 - min2), Math.abs(max2 - min1));
  };
}
