class G3 {
  static main(input) {
    const inputArr = input.split('\n');
    const firstLine = inputArr.shift().split(' ').map(Number);
    if (!firstLine) throw new Error('firstLine was undefined');
    const [cntPackage, cntTrack] = [firstLine[0], firstLine[1]];
    const arrPackageWeight = inputArr.slice().map(Number);

    const sumWeight = arrPackageWeight.reduce((acc, curr) => {
      return acc + curr;
    }, 0);
    let bestP = Math.ceil(sumWeight / cntTrack);
    let left = bestP / 2;
    let right = bestP * 2;

    // * 考え方は少し惜しかった
    // let maxWeight = Number.MIN_SAFE_INTEGER;
    // let sum = 0;
    // arrPackageWeight.forEach((v) => {
    //   if (v > maxWeight) maxWeight = v;
    //   sum += v;
    // });
    // let ave = Math.floor(sum / cntTrack) * 2;

    // let left = 0;
    // // let right = Math.max(maxWeight, ave);
    // let right = 10000 * 100000;
    while (right - left > 1) {
      let mid = Math.floor((left + right) / 2);
      const loader = new Loader(arrPackageWeight, cntTrack);
      const ccp = loader.CapableCntOfPackage(mid);
      if (ccp >= cntPackage) right = mid;
      else left = mid;
    }
    console.log(right);
    return right;
  }
}

class Loader {
  constructor(arrPackageWeight, cntTrack) {
    this.arrPackageWeight = arrPackageWeight;
    this.cntTrack = cntTrack;
  }
  CapableCntOfPackage(P) {
    // 何個運べるかを返す
    let capableCntOfPackage = 0;
    // let tracks = [];
    // for (let i = 0; i < this.cntTrack; i++) {
    //   tracks.push(new Track(P, 0));
    // }
    // let targetTrack;
    // let targetPackageWeight;
    let i = 0;
    for (let j = 0; j < this.cntTrack; j++) {
      let trackWeight = 0;
      for (; i < this.arrPackageWeight.length; i++) {
        if (trackWeight + this.arrPackageWeight[i] <= P) {
          trackWeight += this.arrPackageWeight[i];
          capableCntOfPackage++;
        } else {
          break;
        }
      }
    }
    // while ((targetTrack = tracks.shift()) !== undefined) {
    //   targetPackageWeight = this.arrPackageWeight[idxTargetPackageWeight];
    //   while (targetPackageWeight && targetTrack.canLoad(targetPackageWeight)) {
    //     targetTrack.load(targetPackageWeight);
    //     capableCntOfPackage++;
    //     idxTargetPackageWeight++;
    //     targetPackageWeight = this.arrPackageWeight[idxTargetPackageWeight];
    //   }
    //   // if (targetPackageWeight) idxTargetPackageWeight--; // this.arrPackageWeight.unshift(targetPackageWeight);
    // }
    return capableCntOfPackage;
  }
}

class Track {
  constructor(maxWeight, currentWeight = 0) {
    this.maxWeight = maxWeight;
    this.currentWeight = currentWeight;
  }
  canLoad(packweight) {
    return this.currentWeight + packweight <= this.maxWeight;
  }
  load(packweight) {
    this.currentWeight += packweight;
  }
}

// * 提出用
const input = require('fs').readFileSync('/dev/stdin', 'utf8');
G3.main(input);
