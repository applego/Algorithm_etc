
export function nextId(ids: number[]): number {
    for (let i = 0; i < ids.length; i++){
        if (ids.indexOf(i) === -1)
            return i;
    }
    return ids.length;
}

//BP
export function nextId2(ids: number[]): number{
    let i = 0;
    while (ids.includes(i)) {
        i++
    }
    return i;
}
//BP2
export function nextId3(ids: number[]): number{
    const idsSet = new Set(ids);
    let i = 0;
    while (idsSet.has(i)) {
        i++
    }
    return i;
}