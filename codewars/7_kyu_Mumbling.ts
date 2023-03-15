export function accum(s: string): string {
  let result: string = "";
  let repeatCnt:RepeatCnt = new RepeatCnt(1);
  const connectChar = '-';
  s.split('').forEach((val, idx) => {
    if (idx === 0) {
      result += new wordMaker(repeatCnt, val).make();
    } else {
      result += connectChar;
      result += new wordMaker(repeatCnt, val).make();
    }
    repeatCnt.add(1);
  });
  return result;
}
// * なぜだ、、
// class RepeatIterator{
//   index: number;
//   constructor(repeatCnt: number) {
//     this.index = 0;
//   }
//   addIndex():void{} {
//     this.index++;
//   }
// }

interface charMakerState{
  make(s: string): string;
}

class FirstStringState implements charMakerState{
  make(s: string): string{
    return s.toUpperCase();
  }
}

class NotFirstStringState implements charMakerState{
  make(s: string): string{
    return s.toLowerCase();
  }
}

class charMaker{
  // index: number;
  // s: string;
  private charMakerState: charMakerState;
  constructor(index: number, private s: string) {
    this.charMakerState = index === 0 ? new FirstStringState() : new NotFirstStringState();
    // this.charMakerState = new FirstStringState();
  }
  // private changeState(charMakerState: charMakerState): void{
  //   this.charMakerState = charMakerState;
  // }
  public make(): string{
    return this.charMakerState.make(this.s);
  }
}

const wordMakerStatus = ['continue', 'finish'] as const;
type WordMakerStatus = typeof wordMakerStatus[number]; //'continue' | 'finish'

class RepeatCnt{
  value: number;
  constructor(repeatCnt: number) {
    if (repeatCnt > 0) {
      this.value = repeatCnt;
    } else {
      throw new Error("不正な値");
    }
  }
  add(n: number): void {
    this.value += n;
  }
}

class wordMaker{
  constructor(private repeatCnt: RepeatCnt,private s: string) {
  }
  make(): string{
    let result: string = "";
    for (let index = 0; index < this.repeatCnt.value; index++){
      result += new charMaker(index, this.s).make();
    }
    return result;
  }
}

// interface wordConnectorState{
//   connect(addStr: string,connectChar:string): string;
// }

// class FirstState implements wordConnectorState{
//   connect(firstWord: string): string{
//     return firstWord;
//   }
// }

// class NotFirstState implements wordConnectorState{
//   connect(addStr: string, connectChar: string): string{
//     return
//   }
// }


// class wordConnector{
//   result: string;
//   constructor(first: string,private connectChar: string) {
//     this.result=first;
//   }
// }


/*
BP
これでいけるのはうける笑
*/
export function accumBP(s: string): string{
  return s.split('')
    .map((c, idx) => c.toUpperCase() + c.repeat(idx))
    .join('-');
}
