"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.shark2 = exports.shark = void 0;
function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin) {
    var shark = new Shark(sharkSpeed, dolphin);
    var human = new Human(youSpeed);
    var sharkTimeToPontoon = shark.swim(sharkDistance);
    var humanTimeToPontoon = human.swim(pontoonDistance);
    return humanTimeToPontoon < sharkTimeToPontoon ? 'Alive!' : 'Shark Bait!';
}
exports.shark = shark;
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.live = function () { };
    return Animal;
}());
// 継承
var AbleSwimAnimal = /** @class */ (function (_super) {
    __extends(AbleSwimAnimal, _super);
    function AbleSwimAnimal(speed_metres_per_second) {
        var _this = _super.call(this) || this;
        _this.speed_metres_per_second = speed_metres_per_second;
        return _this;
        // this.number=id; は自動的に行われるので省略
    }
    AbleSwimAnimal.prototype.swim = function (distance_metres) {
        return distance_metres / this.speed_metres_per_second;
    };
    return AbleSwimAnimal;
}(Animal));
var Shark = /** @class */ (function (_super) {
    __extends(Shark, _super);
    function Shark(speed_metres_per_second, isNearDolphin) {
        var _this = _super.call(this, speed_metres_per_second) || this;
        _this.speed_metres_per_second = speed_metres_per_second;
        _this.isNearDolphin = isNearDolphin;
        return _this;
    }
    Shark.prototype.swim = function (distance_metres) {
        if (this.isNearDolphin) {
            return distance_metres / (this.speed_metres_per_second / 2);
        }
        else {
            return distance_metres / this.speed_metres_per_second;
        }
    };
    return Shark;
}(AbleSwimAnimal));
var Human = /** @class */ (function (_super) {
    __extends(Human, _super);
    function Human(speed_metres_per_second) {
        var _this = _super.call(this, speed_metres_per_second) || this;
        _this.speed_metres_per_second = speed_metres_per_second;
        _this.isAlive = true;
        return _this;
    }
    Object.defineProperty(Human.prototype, "IsAlive", {
        get: function () {
            return this.isAlive;
        },
        set: function (value) {
            this.isAlive = value;
        },
        enumerable: false,
        configurable: true
    });
    return Human;
}(AbleSwimAnimal));
//BP
exports.shark2 = function (pD, sD, yS, sS, d) { return (pD / yS) < (sD / sS) * (d ? 2 : 1) ? "Alive!" : "Shark Bait!"; };
//# sourceMappingURL=8 kyu Holiday VI - Shark Pontoon.js.map