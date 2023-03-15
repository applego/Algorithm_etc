export function dirReduc(arr: string[]): string[] {
  let result: string[] = new Array<string>();
  let curr;


  // while (
  //   (curr = result.pop()) !== undefined
  //   || (curr = arr.shift()) !== undefined
  // )
  while(curr !== undefined)
  {
    const oposite = getOposite(curr);
    const opositeIdx = arr.indexOf(oposite);
    if (opositeIdx === 0) {
      arr.splice(opositeIdx, 1);
    } else {
      result.push(curr);
    }
  }
  return result;
}

function dirReduc_BP(arr: string[]): string[]{
  const pat = /(NORTHSOURH|SOUTHNORTH|EASTWEST|WESTEAST)/;
  let way = arr.join('');
  while(pat.test(way))way = way.replace(pat, '');
  return way.match(/(NORTH|SOUTH|EAST|WEST)/g) || [];
}

function getOposite(dir: string): string {
  switch (dir) {
    case Direction.NORTH.toString():
      return Direction.SOUTH.toString();
    case Direction.SOUTH.toString():
      return Direction.NORTH.toString();
    case Direction.EAST.toString():
      return Direction.WEST.toString();
    case Direction.WEST.toString():
      return Direction.EAST.toString();
    default:
      throw new Error("invalid direction");
  }
}

function dirReduc2(arr: string[]): string[] {
  let result: string[] = new Array<string>();
  let curr;
  while ((curr = arr.shift()) !== undefined) {
    const oposite = getOposite(curr);
    const opositeIdx = arr.indexOf(oposite);
    if (opositeIdx> -1) {
      arr.splice(opositeIdx, 1);
    } else {
      result.push(curr);
    }
  }
  return result;
}

function dirReduc1(arr: string[]): string[] {
  // arrのループ
    // 次で戻るか
      // - 戻らないなら今の方向をルートに追加
      // - 戻るなら追加しない
  let resultSmarArr = new Array<string>();
  // arr.forEach((curr, i) => {
  //   if (i + 1 > arr.length)
  //     return;
  //   resultSmarArr.push(curr);

  //   const next = arr[i + 1];
  //   if (!isBack(toEnmDir(resultSmarArr.pop()), toEnmDir(next))) {
  //     resultSmarArr.push(curr);
  //   }
  // });
  resultSmarArr.push(arr[0]);
  for (let i = 0; i < arr.length - 1; i++){
    // resultSmarArr.push(arr[i]);
    const lastDir = toEnmDir(resultSmarArr.pop());
    const nextDir = toEnmDir(arr[i + 1]);

    if (isBack(lastDir, nextDir)) {
      i++;// nextを消す（戻るから）
    } else {
      resultSmarArr.push(lastDir);
    }
  }
  return resultSmarArr;
}

enum Direction {
  NORTH = "NORTH",
  SOUTH = "SOUTH",
  EAST = "EAST",
  WEST = "WEST",
}

// Object.defineProperty(String.prototype, "toEnmDir", {
//   value: function toEnmDir(org: string): Direction {
//     switch (org) {
//       case "NORTH":
//         return Direction.NORTH;
//       case "SOUTH":
//         return Direction.SOUTH;
//       case "EAST":
//         return Direction.EAST;
//       case "WEST":
//         return Direction.WEST;
//       default:
//         throw new Error;
//     }
//   },
//   writable: true,
//   configurable: true
// });

function toEnmDir(org: string|undefined): Direction{
  switch (org) {
    case "NORTH":
      return Direction.NORTH;
    case "SOUTH":
      return Direction.SOUTH;
    case "EAST":
      return Direction.EAST;
    case "WEST":
      return Direction.WEST;
    default:
      throw new Error;
  }
}

function isBack(curr: Direction, next: Direction): boolean | Error {
  switch (curr) {
    case Direction.NORTH:
      return next === Direction.SOUTH;
    case Direction.SOUTH:
      return next === Direction.NORTH;
    case Direction.EAST:
      return next === Direction.WEST;
    case Direction.WEST:
      return next === Direction.EAST;
    default:
      return new Error;
  }
}
