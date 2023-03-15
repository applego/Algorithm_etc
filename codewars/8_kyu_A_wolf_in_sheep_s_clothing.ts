enum AnimalEnum{
    WOLF = 'wolf',
    SHEEP = 'sheep',
}

enum WarnMessageEnum {
    TO_SHEEP = 'Oi! Sheep number N! You are about to be eaten by a wolf!',
    TO_WOLF = 'Pls go away and stop eating my sheep',
}

export function warnTheSheep(queue: string[]): string {
    if (queue.slice(-1)[0] === AnimalEnum.WOLF)
        return WarnMessageEnum.TO_WOLF;
    else {
        const wolf_idx: number = queue.findIndex(q => q === AnimalEnum.WOLF) + 1;
        const n: number = queue.length - wolf_idx;
        return WarnMessageEnum.TO_SHEEP.replace('N',n.toString())
    }
}
