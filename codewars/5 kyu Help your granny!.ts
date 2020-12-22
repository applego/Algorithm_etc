/*
var friends1 = ["A1", "A2", "A3", "A4", "A5"];
var fTowns1 = [["A1", "X1"], ["A2", "X2"], ["A3", "X3"], ["A4", "X4"]];
var distTable1 = ["X1", 100.0, "X2", 200.0, "X3", 250.0, "X4", 300.0];
*/

export class G964_20201222 {
  private static readonly startTown = 'X0';
  public static tour = (friends:string[], fTowns:any, distTable:any) => {
        // your code
      // 経路を決める（友達の順番から街の順番を知る）
      // 距離を測る（X0 X2X3 はX2を直角とした三角形)
    console.log(friends);
    console.log(fTowns);
    console.log(distTable);
    const circuit = G964_20201222.makeCircuit(friends, fTowns);
    const totaldistance = G964_20201222.calcTotalDistance(circuit, distTable);
    return Math.floor(totaldistance);
  }
  private static makeCircuit = (friends: string[], fTowns: string[][]):string[] => {
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
    let circuit: string[] = [G964_20201222.startTown];
    for (let i = 0; i < friends.length; i++){
      const town = fTowns.find(town => town[0] === friends[i]);
      if (town !== undefined) {
        circuit.push(town[1]);
      }
    }
    circuit.push(G964_20201222.startTown);
    return circuit;
  }
  private static getDistanceFromX0 = (town: string, distTable: any[]): number => {
    if (town === G964_20201222.startTown)
      return 0;
    const i = distTable.findIndex(val => val === town);
    return distTable[i + 1];
  }
  private static calcTotalDistance = (circuit: string[], distTable: any) => {
    return circuit.reduce((acc, curr, currIdx, arr) => {
      if (currIdx === 0)
        return acc;
      return acc
        + G964_20201222.calcDistance(
          G964_20201222.getDistanceFromX0(arr[currIdx - 1], distTable),
          G964_20201222.getDistanceFromX0(arr[currIdx], distTable)
      )
    }, 0);

  }
  private static calcDistance = (d1: number, d2: number): number => {
    if (d1 > d2)
      return Math.sqrt(d1 ** 2 - d2 ** 2);
    return Math.sqrt(d2 ** 2 - d1 ** 2);
  }
}
