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
exports.countSheeps = exports.countSheeps___ = exports.countSheeps__ = exports.countSheeps_ = void 0;
function countSheeps_(arrayOfSheep) {
    return arrayOfSheep.filter(Boolean).length;
}
exports.countSheeps_ = countSheeps_;
function countSheeps__(arrayOfSheep) {
    return arrayOfSheep.filter(function (e) { return e === true; }).length;
}
exports.countSheeps__ = countSheeps__;
function countSheeps___(arrayOfSheep) {
    return arrayOfSheep.reduce(function (total, sheep) {
        if (sheep)
            total++;
        return total;
    }, 0);
}
exports.countSheeps___ = countSheeps___;
function countSheeps(arrayOfSheep) {
    // Mainクラス想定
    //よくわからんくなってき（笑）
    //動物のリストが着て、それを振り分けてく感じか？
    //たぶんデザインパターンもIteratorじゃなくてVisitorってやつっぽいな（//Java言語で学ぶデザインパターン）
    //!Iteratorパターン
    /*
    ・Iterator（反復子）の役
        要素を順番にスキャンしていくインターフェース（API）を定める役
    ・ConcreteIterator（具体的な反復子）の役
        Iterator役が定めたインターフェース（API）を実際に実装する役です。
        この役はスキャンするために必要な情報を持っている必要があります。
    ・Aggregate（集合体）の役
        Iterator役が作り出すインターフェース（API)を定める役です。
        「私が持っている要素を順番にスキャンしてくれる人」を作り出すメソッド。
    ・ConcreteAggregate（具体的な集合体）の役
        Aggregate役が定めたインターフェース（API）を実際に実装する役です。
        ConcreteIterator役のインスタンスを作り出します。
    */
    //Flow
    //牧場がある
    //今回は羊小屋を設置
    var sheepFarm = new SheepFarm(arrayOfSheep.length);
    //動物振り分けまんがいる
    var sheepJudger = new SheepJudger();
    //動物たちがやってくる
    //羊なら（trueなら羊小屋にいれる
    //何匹入れたか数える
    //boolをAnimalに変える工場（）
    var animalFactory = new AnimalFactory();
    arrayOfSheep.forEach(function (virtual_animal, idx) {
        //virtual_animalをAnimalにする...
        var animal = animalFactory.createAnimal("animal_" + idx, virtual_animal);
        if (sheepJudger.judge(animal)) {
            sheepFarm.appendAnimal(animal);
        }
    });
    console.log(sheepFarm.getLength());
    var it = sheepFarm.iterator();
    while (it.hasNext()) {
        var sheep = it.next();
        console.log(sheep.getName());
        console.log(sheep.getAnimalType().toString());
    }
    return sheepFarm.getLength();
}
exports.countSheeps = countSheeps;
var Animal = /** @class */ (function () {
    function Animal(arg) {
        this.name = arg.name;
    }
    Animal.prototype.getName = function () {
        return this.name;
    };
    Animal.prototype.getAnimalType = function () {
        return this.animalType;
    };
    return Animal;
}());
var Sheep = /** @class */ (function (_super) {
    __extends(Sheep, _super);
    function Sheep(animalProperty, sheepProperty) {
        var _this = 
        // super(name, AnimalType.Sheep);
        //具現クラスから抽象クラスへの依存は本当は避けるべき（抽象クラスがnameを持つと知ってしまっていると、抽象クラスの変更時に影響を受けてしまう
        _super.call(this, animalProperty) || this;
        _this.animalType = AnimalType.Sheep;
        return _this;
    }
    return Sheep;
}(Animal));
var NotSheepAnimal = /** @class */ (function (_super) {
    __extends(NotSheepAnimal, _super);
    function NotSheepAnimal(animalProperty, notSheepAnimalProperty) {
        var _this = _super.call(this, animalProperty) || this;
        _this.animalType = AnimalType.Other;
        return _this;
    }
    return NotSheepAnimal;
}(Animal));
var AnimalFactory = /** @class */ (function () {
    function AnimalFactory() {
    }
    AnimalFactory.prototype.createAnimal = function (name, isSheep) {
        if (isSheep) {
            return new Sheep({ name: name }, {});
        }
        else {
            return new NotSheepAnimal({ name: name }, {});
        }
    };
    return AnimalFactory;
}());
var AnimalType;
(function (AnimalType) {
    AnimalType[AnimalType["Sheep"] = 0] = "Sheep";
    AnimalType[AnimalType["Other"] = 1] = "Other";
})(AnimalType || (AnimalType = {}));
;
// abstract class AnimalType{
//     constructor(abstract animalType: enumAnimalType){}
// }
// class SheepType extends AnimalType{
//     constructor() {
//         super(enumAnimalType.Sheep);
//     }
// }
var SheepFarm = /** @class */ (function () {
    function SheepFarm(maxsize) {
        this.last = 0;
        this.sheeps = Array(maxsize);
        // this.sheeps = [];
    }
    SheepFarm.prototype.getAnimalAt = function (index) {
        return this.sheeps[index];
    };
    SheepFarm.prototype.appendAnimal = function (animal) {
        this.sheeps[this.last] = animal;
        this.last++;
        //this.sheeps.push(animal);
    };
    SheepFarm.prototype.getLength = function () {
        return this.last;
    };
    SheepFarm.prototype.iterator = function () {
        return new SheepFarmIterator(this);
    };
    return SheepFarm;
}());
var SheepFarmIterator = /** @class */ (function () {
    function SheepFarmIterator(sheepFarm) {
        this.sheepFarm = sheepFarm;
        this.index = 0;
    }
    SheepFarmIterator.prototype.hasNext = function () {
        if (this.index < this.sheepFarm.getLength()) {
            return true;
        }
        else {
            return false;
        }
    };
    SheepFarmIterator.prototype.next = function () {
        var animal = this.sheepFarm.getAnimalAt(this.index);
        this.index++;
        return animal;
    };
    return SheepFarmIterator;
}());
var SheepJudger = /** @class */ (function () {
    function SheepJudger() {
    }
    SheepJudger.prototype.judge = function (animal) {
        return this.isSheep(animal) ? true : false;
    };
    SheepJudger.prototype.isSheep = function (animal) {
        console.log(animal.getAnimalType());
        return animal.getAnimalType() === AnimalType.Sheep;
    };
    return SheepJudger;
}());
//# sourceMappingURL=8 kyu Counting sheep....js.map