export class G964_1229 {

  /**
  - u[8]
    u[7] = 5 and u[6] = 4
    8 - 5 = 3 , 8 - 4 = 4
    u[3] = 2 and u[4] = 3
    2 + 3 = 5
  -
   */
  private static u(n: number): number{
    return n;
  }
  // nまでの間でk以上の値の個数を返す
  public static lengthSupUK(n: number, k: number): number {
      // your code
    return n;
  }
  // nまでのインデックスの中でuが前の値よりも小さくなった回数を返す
  public static comp(n: number): number {
      // your code
    return n;
  }
}

// 答えみます...
export class G964_BP_g964{

  private static u1(n: number): number[]{
    let memu = [1, 1];
    let i = 2;
    while (i < n) {
      memu.push(memu[i - memu[i - 1]] + memu[i - memu[i - 2]]);
      i++;
    }
    return memu;
  }

  public static lengthSupUK(n: number, k: number): number{
    return G964_BP_g964.u1(n).filter((x) => x >= k).length;
  }

  public static comp(n: number): number{
    let memu = G964_BP_g964.u1(n);
    let prev = 1, cnt = 0, i = 1;
    while (i < n) {
      let cur = memu[i];
      if (cur < prev)
        cnt++;
      prev = cur;
      i++;
    }
    return cnt;
  }
}
