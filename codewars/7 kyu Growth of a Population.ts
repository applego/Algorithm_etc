export class G964_20210222 {
  public static nbYear = (
    p0: number,
    percent: number,
    aug: number,
    p: number
  ): number => {
    // x年後の人口
    /**
     1年後
     p0 * (1+percent)+aug
     2年後
     一年前 * (1+percent)+aug
     */

    if (p0 >= p) return 0;
    // let xyear: number = 0;
    let xyear: number = 1;
    let pNow = p0 * (1 + percent / 100) + aug;
    // xyear++;
    while (pNow < p) {
      pNow = pNow * (1 + percent / 100) + aug;
      xyear++;
    }
    return xyear;
  };
}
