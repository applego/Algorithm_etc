"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs = __importStar(require("fs"));
var input = fs.readFileSync('/dev/stdin', 'utf8').trim();
try {
    var result = 0;
    var twiceVal = input.split('').reduce(function (acc, curr, idx) {
        if (isNaN(Number(curr))) {
            throw new Error('not number');
        }
        if (idx === 0) {
            return acc + Number(curr) * 200;
        }
        else if (idx === 1) {
            return acc + Number(curr) * 20;
        }
        else {
            return acc + Number(curr) * 2;
        }
    }, 0);
    console.log(twiceVal.toString());
}
catch (err) {
    console.log('error');
}
//# sourceMappingURL=第一回アルゴリズム実技検定A - 2 倍チェック.js.map