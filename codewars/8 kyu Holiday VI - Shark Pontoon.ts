
export function shark(pontoonDistance: number, sharkDistance: number, youSpeed: number, sharkSpeed: number, dolphin: boolean): string {

    const shark:Shark = new Shark(sharkSpeed,dolphin);
    const human: Human = new Human(youSpeed);

    const sharkTimeToPontoon: number = shark.swim(sharkDistance);
    const humanTimeToPontoon: number = human.swim(pontoonDistance);

    return humanTimeToPontoon < sharkTimeToPontoon ? 'Alive!' : 'Shark Bait!';
}

class Animal {
    live():void {}
}

// インターフェース
interface AbleSwim {
    speed_metres_per_second: number;
    swim(n: number): number;
}

// 継承
class AbleSwimAnimal extends Animal implements AbleSwim {
    constructor(public speed_metres_per_second: number) {
        super();
        // this.number=id; は自動的に行われるので省略
    }
    public swim(distance_metres: number) : number{
        return distance_metres/this.speed_metres_per_second;
    }
}

class Shark extends AbleSwimAnimal {
    constructor(public speed_metres_per_second:number,isNearDolphin:boolean) {
        super(speed_metres_per_second);
        this.isNearDolphin = isNearDolphin;
    }
    public isNearDolphin: boolean;

    swim(distance_metres: number) :number{
        if (this.isNearDolphin) {
            return distance_metres / (this.speed_metres_per_second / 2);
        } else {
            return distance_metres / this.speed_metres_per_second;
        }
    }
}

class Human extends AbleSwimAnimal {
    constructor(public speed_metres_per_second:number){
        super(speed_metres_per_second);
    }

    private isAlive: boolean = true;
    set IsAlive(value: boolean) {
        this.isAlive = value;
    }
    get IsAlive(): boolean {
        return this.isAlive;
    }
}

//BP
export const shark2 = (pD: number, sD: number, yS: number, sS: number, d: boolean): string => (pD / yS) < (sD / sS) * (d ? 2 : 1) ? "Alive!" : "Shark Bait!";