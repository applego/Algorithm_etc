const isNumber = function(value: any){
    return ((typeof value === 'number') && (isFinite(value)));
}

const isNumberableString = function (value: string) {
    const parsed = parseInt(value);
    return !isNaN(parsed)
}

export function isIsogram(str: string): boolean {
    console.info(str);
    const charCounter: { [c: string]: number; } = {}
    const arrayStr: string[] = str.toLowerCase().split('');
    for (let i = 0; i < arrayStr.length; i++) {
        const c: string = arrayStr[i];
        if (isNumberableString(c))
            return false;
        if (charCounter[c]) {
            charCounter[c] += 1;
            return false;
        }
        charCounter[c] = 1;
    }
    return true;
}


// solution
export function isIsogram2 (str: string): boolean {
    return (new Set(str.toLowerCase())).size === str.length
}

// solutions
export function isIsogram3(str: string): boolean {
    //resolve str to lowercase first
    str = str.toLowerCase();
    //transform string to a Set to remove duplicates and
    //compare thhe size of the set to the length of the str
    return new Set(str.split('')).size === str.length;
}