

const vowels: string[] = ['a', 'i', 'u', 'e', 'o'];

export class Kata {
    // set vowels
    static getCount(str: string): number{
        return str.split('').filter((s) => vowels.indexOf(s) > -1).length;

        // let cnt: number = 0;
        // for (const s of str) {
        //     console.log(s);
        //     if (vowels.indexOf(s) > -1) {
        //         cnt += 1;
        //     }
        // }
        // return cnt;
        const cnt3 = str.split('').reduce((acc, s) =>
        {
            return acc + (vowels.indexOf(s) > -1 ? 1 : 0);
        });
        // const cnt4 = str.split('').flatMap((s) =>)
    }
}

//BP

export class Kata2 {
    static getCount(str: string) {
        let list = str.match(/[aeiou]/gi);
        return list ? list.length : 0;
    }
}

export class Kata3{
    static getCount(str: string) {
        return str.replace(/[^aeiou]/gi, '').length
    }
}

export class Kata4{
    static getCOunt(str: string) {
        return (str.match(/[aeiou]/ig)||[]).length
    }
}