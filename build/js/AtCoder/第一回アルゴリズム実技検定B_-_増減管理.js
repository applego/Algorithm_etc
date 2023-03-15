"use strict";
/**
 10
9
10
3
100
100
90
80
10
30
10

up 1
down 7
up 97
stay
down 10
down 10
down 70
up 20
down 20

up 1
down 7
up 97
down 0
down 10
down 10
down 70
up 20
down 20

 */
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
var input = fs
    .readFileSync('/dev/stdin', 'utf8')
    .trim()
    .split('\n')
    .map(Number);
input.reduce(function (pre, curr, i) {
    var diff = curr - pre;
    var upordownorstay = diff === 0 ? 'stay' : diff > 0 ? 'up' : 'down';
    if (i > 1) {
        if (diff === 0)
            console.log('stay');
        else
            console.log((diff > 0 ? 'up' : 'down') + " " + Math.abs(diff));
    }
    return curr;
});
//# sourceMappingURL=第一回アルゴリズム実技検定B - 増減管理.js.map