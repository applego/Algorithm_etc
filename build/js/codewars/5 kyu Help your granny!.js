"use strict";
/*
var friends1 = ["A1", "A2", "A3", "A4", "A5"];
var fTowns1 = [["A1", "X1"], ["A2", "X2"], ["A3", "X3"], ["A4", "X4"]];
var distTable1 = ["X1", 100.0, "X2", 200.0, "X3", 250.0, "X4", 300.0];
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.G964_20201222_BP = exports.G964_20201222 = void 0;
var G964_20201222 = /** @class */ (function () {
    function G964_20201222() {
    }
    G964_20201222.startTown = 'X0';
    G964_20201222.tour = function (friends, fTowns, distTable) {
        // your code
        // 経路を決める（友達の順番から街の順番を知る）
        // 距離を測る（X0 X2X3 はX2を直角とした三角形)
        console.log(friends);
        console.log(fTowns);
        console.log(distTable);
        var circuit = G964_20201222.makeCircuit(friends, fTowns);
        var totaldistance = G964_20201222.calcTotalDistance(circuit, distTable);
        return Math.floor(totaldistance);
    };
    G964_20201222.makeCircuit = function (friends, fTowns) {
        // let circuit = (() => {
        //   return friends.map((f,idx) => {
        //     const town = fTowns.find(fTown => fTown[0] === f);
        //     // if (idx === friends.length - 1)
        //     //   return fTowns[0][1];
        //     // else
        //     //   return town ? town[1] : undefined;
        //     // return town ? town[1] : G964_20201222.startTown;
        //     if (town !== undefined)
        //       return town[1];
        //   });
        //     // .join('');
        // })();
        // circuit.splice(0, 0, G964_20201222.startTown);
        // return circuit;
        var circuit = [G964_20201222.startTown];
        var _loop_1 = function (i) {
            var town = fTowns.find(function (town) { return town[0] === friends[i]; });
            if (town !== undefined) {
                circuit.push(town[1]);
            }
        };
        for (var i = 0; i < friends.length; i++) {
            _loop_1(i);
        }
        circuit.push(G964_20201222.startTown);
        return circuit;
    };
    G964_20201222.getDistanceFromX0 = function (town, distTable) {
        if (town === G964_20201222.startTown)
            return 0;
        var i = distTable.findIndex(function (val) { return val === town; });
        return distTable[i + 1];
    };
    G964_20201222.calcTotalDistance = function (circuit, distTable) {
        return circuit.reduce(function (acc, curr, currIdx, arr) {
            if (currIdx === 0)
                return acc;
            return acc
                + G964_20201222.calcDistance(G964_20201222.getDistanceFromX0(arr[currIdx - 1], distTable), G964_20201222.getDistanceFromX0(arr[currIdx], distTable));
        }, 0);
    };
    G964_20201222.calcDistance = function (d1, d2) {
        if (d1 > d2)
            return Math.sqrt(Math.pow(d1, 2) - Math.pow(d2, 2));
        return Math.sqrt(Math.pow(d2, 2) - Math.pow(d1, 2));
    };
    return G964_20201222;
}());
exports.G964_20201222 = G964_20201222;
var G964_20201222_BP = /** @class */ (function () {
    function G964_20201222_BP() {
    }
    G964_20201222_BP.tour = function (friends, fTowns, distTable) {
        var pythagoras = function (a, b) { return Math.sqrt((Math.pow(b, 2)) - (Math.pow(a, 2))); };
        return Math.floor(friends.reduce(function (a, b) {
            var fTown = fTowns.filter(function (value) { return value[0] === b; });
            if (fTowns.length === 0) {
                return a;
            }
            ;
            var newValue = +distTable[distTable.indexOf(fTown[0][1]) + 1];
            a[0] += (a[1] > 0 ? pythagoras(a[1], newValue) : newValue);
            a[1] = +distTable[distTable.indexOf(fTown[0][1]) + 1];
            return a;
        }, [0, 0]).reduce(function (a, b) { return a + b; })); // a[0] = total distance, a[1] = last distance
    };
    return G964_20201222_BP;
}());
exports.G964_20201222_BP = G964_20201222_BP;
//# sourceMappingURL=5 kyu Help your granny!.js.map