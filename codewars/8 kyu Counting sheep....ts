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

    //動物振り分けまんがいる
        //今回は羊小屋を設置

    //動物たちがやってくる

    //羊なら（trueなら羊小屋にいれる
        //何匹入れたか数える




    const animalCage: AnimalCage = new AnimalCage(arrayOfSheep.length);
    arrayOfSheep.forEach((val, idx) => {

    })
    animalCage.appendAnimal
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

abstract class Animal2{
    private name: string;
    constructor(name: string) {
        this.name = name;
    }
    public getName(): string{
        return this.name;
    }
}

class Sheep extends Animal2{
    constructor(name: string) {
        super(name);
    }

}

class AnimalCage implements Aggregate{
    private animals: Animal2[];
    private last: number = 0;
    constructor(maxsize: number) {
        this.animals = Array(maxsize);
        // this.animals = [];
    }
    public getAnimalAt(index: number): Animal2{
        return this.animals[index];
    }
    public appendAnimal(animal: Animal2): void{
        this.animals[this.last] = animal;
        this.last++;
        //this.animals.push(animal);
    }
    public getLength(): number{
        return this.last;
    }
    public iterator(): Iterator{
        return new AnimalCageIterator(this);
    }
}

class AnimalCageIterator implements Iterator{
    private animalCage: AnimalCage;
    private index: number;
    constructor(animalCage: AnimalCage) {
        this.animalCage = animalCage;
        this.index = 0;
    }
    public hasNext(): boolean{
        if (this.index < this.animalCage.getLength()) {
            return true;
        } else {
            return false;
        }
    }
    public next(): Object{
        const animal: Animal2 = this.animalCage.getAnimalAt(this.index);
        this.index++;
        return animal;
    }
}

interface Judger{
    judge(animal: Animal2): boolean;
}

class SheepJudger implements Judger{
    public judge(animal: Animal2): boolean{
        if (this.isSheep(animal))
            return true;
        else
            return false;
    }
    private isSheep(animal: Animal2): boolean{
        return animal ? true : false;
    }
}
