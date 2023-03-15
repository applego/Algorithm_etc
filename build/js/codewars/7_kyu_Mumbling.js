"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.accumBP = exports.accum = void 0;
function accum(s) {
    var result = "";
    var repeatCnt = new RepeatCnt(1);
    var connectChar = '-';
    s.split('').forEach(function (val, idx) {
        if (idx === 0) {
            result += new wordMaker(repeatCnt, val).make();
        }
        else {
            result += connectChar;
            result += new wordMaker(repeatCnt, val).make();
        }
        repeatCnt.add(1);
    });
    return result;
}
exports.accum = accum;
var FirstStringState = /** @class */ (function () {
    function FirstStringState() {
    }
    FirstStringState.prototype.make = function (s) {
        return s.toUpperCase();
    };
    return FirstStringState;
}());
var NotFirstStringState = /** @class */ (function () {
    function NotFirstStringState() {
    }
    NotFirstStringState.prototype.make = function (s) {
        return s.toLowerCase();
    };
    return NotFirstStringState;
}());
var charMaker = /** @class */ (function () {
    function charMaker(index, s) {
        this.s = s;
        this.charMakerState = index === 0 ? new FirstStringState() : new NotFirstStringState();
        // this.charMakerState = new FirstStringState();
    }
    // private changeState(charMakerState: charMakerState): void{
    //   this.charMakerState = charMakerState;
    // }
    charMaker.prototype.make = function () {
        return this.charMakerState.make(this.s);
    };
    return charMaker;
}());
var wordMakerStatus = ['continue', 'finish'];
var RepeatCnt = /** @class */ (function () {
    function RepeatCnt(repeatCnt) {
        if (repeatCnt > 0) {
            this.value = repeatCnt;
        }
        else {
            throw new Error("不正な値");
        }
    }
    RepeatCnt.prototype.add = function (n) {
        this.value += n;
    };
    return RepeatCnt;
}());
var wordMaker = /** @class */ (function () {
    function wordMaker(repeatCnt, s) {
        this.repeatCnt = repeatCnt;
        this.s = s;
    }
    wordMaker.prototype.make = function () {
        var result = "";
        for (var index = 0; index < this.repeatCnt.value; index++) {
            result += new charMaker(index, this.s).make();
        }
        return result;
    };
    return wordMaker;
}());
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
function accumBP(s) {
    return s.split('')
        .map(function (c, idx) { return c.toUpperCase() + c.repeat(idx); })
        .join('-');
}
exports.accumBP = accumBP;
//# sourceMappingURL=7 kyu Mumbling.js.map