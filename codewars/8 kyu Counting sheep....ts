export function countSheeps_(arrayOfSheep) {
    return arrayOfSheep.filter(Boolean).length;
}

export function countSheeps__(arrayOfSheep) {
    return arrayOfSheep.filter(e => e === true).length;
}

export function countSheeps___(arrayOfSheep) {
    return arrayOfSheep.reduce((total, sheep) => {
        if (sheep) total++;
        return total;
    },0)
}

export function countSheeps(arrayOfSheep: (boolean | undefined | null)[]) {
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
    const sheepFarm: SheepFarm = new SheepFarm(arrayOfSheep.length);
    //動物振り分けまんがいる
    const sheepJudger: SheepJudger = new SheepJudger();
    //動物たちがやってくる
        //羊なら（trueなら羊小屋にいれる
        //何匹入れたか数える

    //boolをAnimalに変える工場（）
    const animalFactory: AnimalFactory = new AnimalFactory();
    arrayOfSheep.forEach((virtual_animal, idx) => {
        //virtual_animalをAnimalにする...
        const animal = animalFactory.createAnimal(`animal_${idx}`, virtual_animal);
        if (sheepJudger.judge(animal)) {
            sheepFarm.appendAnimal(animal);
        }
    });
    console.log(sheepFarm.getLength());
    const it: Iterator = sheepFarm.iterator();
    while (it.hasNext()) {
        const sheep: Sheep = <Sheep>it.next();
        console.log(sheep.getName());
        console.log(sheep.getAnimalType().toString());
    }
    return sheepFarm.getLength();
}

//Aggregate インターフェース
interface Aggregate{
    iterator() :Iterator;
}

//Iteratorインターフェース
interface Iterator{
    hasNext(): boolean;
    next(): Object;
}

abstract class Animal{
    name: string; //todo private
    abstract animalType:AnimalType;//todo private
    constructor(
        arg: Omit<Animal, 'animalType'|'getName'|'getAnimalType'>
    ) {
        this.name = arg.name;
    }
    public getName(): string{
        return this.name;
    }
    public getAnimalType(): AnimalType{
        return this.animalType;
    }
}

class Sheep extends Animal{
    animalType: AnimalType;
    constructor(
        animalProperty: Omit<
            Animal,
            'animalType'|'getName'|'getAnimalType'
        >,
        sheepProperty:Omit<Sheep,keyof Animal>
            ) {
        // super(name, AnimalType.Sheep);
        //具現クラスから抽象クラスへの依存は本当は避けるべき（抽象クラスがnameを持つと知ってしまっていると、抽象クラスの変更時に影響を受けてしまう
        super(animalProperty);
        this.animalType = AnimalType.Sheep;
    }
}

class NotSheepAnimal extends Animal{
    animalType: AnimalType;
    constructor(
        animalProperty: Omit<
            Animal,
            'animalType'|'getName'|'getAnimalType'
            >,
        notSheepAnimalProperty: Omit<NotSheepAnimal, keyof Animal>
    ) {
        super(animalProperty);
        this.animalType = AnimalType.Other;
    }
}

class AnimalFactory{
    createAnimal(name:string,isSheep: boolean|undefined | null): Animal{
        if (isSheep) {
            return new Sheep({ name: name }, {});
        } else {
            return new NotSheepAnimal({ name: name }, {});
        }
    }
}

enum AnimalType {Sheep,Other};

// abstract class AnimalType{
//     constructor(abstract animalType: enumAnimalType){}
// }

// class SheepType extends AnimalType{
//     constructor() {
//         super(enumAnimalType.Sheep);
//     }
// }

class SheepFarm implements Aggregate{
    private sheeps: Sheep[];
    private last: number = 0;
    constructor(maxsize: number) {
        this.sheeps = Array(maxsize);
        // this.sheeps = [];
    }
    public getAnimalAt(index: number): Animal{
        return this.sheeps[index];
    }
    public appendAnimal(animal: Animal): void{
        this.sheeps[this.last] = animal;
        this.last++;
        //this.sheeps.push(animal);
    }
    public getLength(): number{
        return this.last;
    }
    public iterator(): Iterator{
        return new SheepFarmIterator(this);
    }
}

class SheepFarmIterator implements Iterator{
    private sheepFarm: SheepFarm;
    private index: number;
    constructor(sheepFarm: SheepFarm) {
        this.sheepFarm = sheepFarm;
        this.index = 0;
    }
    public hasNext(): boolean{
        if (this.index < this.sheepFarm.getLength()) {
            return true;
        } else {
            return false;
        }
    }
    public next(): Object{
        const animal: Animal = this.sheepFarm.getAnimalAt(this.index);
        this.index++;
        return animal;
    }
}

interface AnimalJudger{
    judge(animal: Animal): boolean;
}

class SheepJudger implements AnimalJudger{
    judge(animal: Animal): boolean{
        return this.isSheep(animal) ? true : false;
    }
    private isSheep(animal: Sheep): boolean{
        console.log(animal.getAnimalType());
        return animal.getAnimalType() === AnimalType.Sheep;
    }
}
