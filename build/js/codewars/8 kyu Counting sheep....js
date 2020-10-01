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
exports.countSheeps = void 0;
function countSheeps(arrayOfSheep) {
    // your code here
}
exports.countSheeps = countSheeps;
var Animal2 = /** @class */ (function () {
    function Animal2(name) {
        this.name = name;
    }
    Animal2.prototype.getName = function () {
        return this.name;
    };
    return Animal2;
}());
var Sheep = /** @class */ (function (_super) {
    __extends(Sheep, _super);
    function Sheep(name) {
        return _super.call(this, name) || this;
    }
    return Sheep;
}(Animal2));
var AnimalCage = /** @class */ (function () {
    function AnimalCage(maxsize) {
        this.last = 0;
        this.animals = Array(maxsize);
        // this.animals = [];
    }
    AnimalCage.prototype.getAnimalAt = function (index) {
        return this.animals[index];
    };
    AnimalCage.prototype.appendAnimal = function (animal) {
        this.animals[this.last] = animal;
        this.last++;
        //this.animals.push(animal);
    };
    AnimalCage.prototype.getLength = function () {
        return this.last;
    };
    AnimalCage.prototype.iterator = function () {
        return new AnimalCageIterator(this);
    };
    return AnimalCage;
}());
var AnimalCageIterator = /** @class */ (function () {
    function AnimalCageIterator(animalCage) {
        this.animalCage = animalCage;
        this.index = 0;
    }
    AnimalCageIterator.prototype.hasNext = function () {
        if (this.index < this.animalCage.getLength()) {
            return true;
        }
        else {
            return false;
        }
    };
    AnimalCageIterator.prototype.next = function () {
        var animal = this.animalCage.getAnimalAt(this.index);
        this.index++;
        return animal;
    };
    return AnimalCageIterator;
}());
var SheepJudger = /** @class */ (function () {
    function SheepJudger() {
    }
    SheepJudger.prototype.judge = function (animal) {
        if (this.isSheep(animal))
            return true;
        else
            return false;
    };
    SheepJudger.prototype.isSheep = function (animal) {
        return animal ? true : false;
    };
    return SheepJudger;
}());
//# sourceMappingURL=8 kyu Counting sheep....js.map