/**
 * n,k,wi
 * 最大積載量Pの最小値を求める
 *
 * Pを渡して、積める個数vを返す関数
 * v = f(P)
 * このvがn以上になればOK
 *
 * Pを1ずつ増やすだと計算量はPn
 *
 * だがPを増やしたときに、vが減ることはないので
 * 二部探索する Pを
 */

export class G3 {
  static main(input: string): number {
    let bestP = 0;
    const inputArr = input.split('\n');
    const firstLine = inputArr.shift()?.split(' ').map(Number);
    if (!firstLine) throw new Error('firstLine was undefined');
    const [cntPackage, cntTrack] = [firstLine[0], firstLine[1]];
    const arrPackageWeight = inputArr.map(Number);

    let maxWeight = Number.MIN_SAFE_INTEGER;
    let sum = 0;
    arrPackageWeight.forEach((v) => {
      if (v > maxWeight) maxWeight = v;
      sum += v;
    });
    let ave = Math.floor(sum / cntTrack) * 2;

    let left = 0;
    let right = Math.max(maxWeight, ave);
    while (right - left > 1) {
      let mid = Math.floor((left + right) / 2);
      const loader = new Loader(arrPackageWeight.slice(), cntTrack);
      const ccp = loader.CapableCntOfPackage(mid);
      if (ccp >= cntPackage) right = mid;
      else left = mid;
    }
    return right;
  }
}

class Loader {
  constructor(private arrPackageWeight: number[], private cntTrack: number) {}
  CapableCntOfPackage(P: number): number {
    // 何個運べるかを返す
    let capableCntOfPackage = 0;
    let tracks: Track[] = [];
    for (let i = 0; i < this.cntTrack; i++) {
      tracks.push(new Track(P, 0));
    }
    // * NG let tracks = Array(this.cntTrack).map((_) => {
    //   return new Track(P, 0);
    // });
    let targetTrack: Track | undefined;
    let targetPackageWeight: number | undefined;
    while (
      // (targetPackageWeight = this.arrPackageWeight.shift()) !== undefined
      // &&
      (targetTrack = tracks.shift()) !== undefined
      // true
    ) {
      targetPackageWeight = this.arrPackageWeight.shift();
      while (targetPackageWeight && targetTrack.canLoad(targetPackageWeight)) {
        targetTrack.load(targetPackageWeight);
        capableCntOfPackage++;
        targetPackageWeight = this.arrPackageWeight.shift();
      }
      if (targetPackageWeight)
        this.arrPackageWeight.unshift(targetPackageWeight);
    }
    return capableCntOfPackage;
  }
}
// interface Car{
//   private engine: boolean;
//   private taiya: string;
//   private engineOn(): void;
// }

class Track {
  constructor(private maxWeight: number, private currentWeight: number = 0) {}
  public canLoad(packweight: number): boolean {
    return this.currentWeight + packweight <= this.maxWeight;
  }
  public load(packweight: number): void {
    this.currentWeight += packweight;
  }
}

// * 提出用
// const input = require('fs').readFileSync('/dev/stdin', 'utf8');
// G3.main(input);
