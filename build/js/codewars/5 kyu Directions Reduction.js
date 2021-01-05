"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dirReduc = void 0;
function dirReduc(arr) {
    var result = new Array();
    var i = 0;
    var curr;
    while ((curr = arr.shift()) !== undefined) {
        var oposite = getOposite(curr);
        var opositeIdx = arr.indexOf(oposite);
        if (opositeIdx > -1) {
            arr.splice(opositeIdx, 1);
        }
        else {
            result.push(curr);
        }
    }
    return result;
}
exports.dirReduc = dirReduc;
function getOposite(dir) {
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
            throw new Error("不正な方向");
    }
}
function dirReduc1(arr) {
    // arrのループ
    // 次で戻るか
    // - 戻らないなら今の方向をルートに追加
    // - 戻るなら追加しない
    var resultSmarArr = new Array();
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
    for (var i = 0; i < arr.length - 1; i++) {
        // resultSmarArr.push(arr[i]);
        var lastDir = toEnmDir(resultSmarArr.pop());
        var nextDir = toEnmDir(arr[i + 1]);
        if (isBack(lastDir, nextDir)) {
            i++; // nextを消す（戻るから）
        }
        else {
            resultSmarArr.push(lastDir);
        }
    }
    return resultSmarArr;
}
var Direction;
(function (Direction) {
    Direction["NORTH"] = "NORTH";
    Direction["SOUTH"] = "SOUTH";
    Direction["EAST"] = "EAST";
    Direction["WEST"] = "WEST";
})(Direction || (Direction = {}));
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
function toEnmDir(org) {
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
function isBack(curr, next) {
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
//# sourceMappingURL=5 kyu Directions Reduction.js.map