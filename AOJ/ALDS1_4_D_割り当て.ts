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
    const inputArr = input.split('\n');
    const firstLine = inputArr.shift()?.split(' ').map(Number);
    if (!firstLine) throw new Error('firstLine was undefined');
    const [cntPackage, cntTrack] = [firstLine[0], firstLine[1]];
    const arrPackageWeight = inputArr.slice().map(Number);

    let sum = arrPackageWeight.reduce((acc, curr) => {
      return acc + curr;
    }, 0);
    let ave = Math.floor(sum / cntTrack);

    let left = ave / 2;
    let right = ave * 2;
    while (right - left > 1) {
      let mid = Math.floor((left + right) / 2);
      const loader = new Loader(arrPackageWeight, cntTrack);
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
    let capableCntOfPackage = 0;
    let ip = 0;
    for (let it = 0; it < this.cntTrack; it++) {
      const track = new Track(P, 0);
      for (; ip < this.arrPackageWeight.length; ip++) {
        const pweight = this.arrPackageWeight[ip];
        if (track.canLoad(pweight)) {
          track.load(pweight);
          capableCntOfPackage++;
        } else {
          break;
        }
      }
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
