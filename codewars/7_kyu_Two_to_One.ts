
interface Dictionary {
    [key: string]: number;
};

const alphaDic: Dictionary = {}
"abcdefghijklmnopqrstuvwxyz"
    .split('')
    .forEach((value, index) => {
        alphaDic[value] = index;
    });

export class G9642 {
    private static getExistStringIndex = (s: string, dic: Dictionary):number[] => {
        return s.split('')
            .map(s => dic[s]);
    }
    public static longest = (s1: string, s2: string) => {
        const appearCharIdxes1: number[] = s1.split('').map(s => alphaDic[s]);
        const appearCharIdxes2: number[] = s2.split('').map(s => alphaDic[s]);
        const appearCharIdxesSet = new Set<number>(appearCharIdxes1);
        for (let elem of appearCharIdxes2) {
            appearCharIdxesSet.add(elem);
        }

        return Object.entries(alphaDic)  // es2017以降？
            .filter(([key, value]) => appearCharIdxesSet.has(value))
            .map(([key, value]) => key)
            .join('');

        // 提出 ver
        return Object.keys(alphaDic)
            .map(key => {
                if (appearCharIdxesSet.has(alphaDic[key]))
                    return key;
                //             answer += key;
            })
            .join('');
        // const appearCharIdxesSum = appearCharIdxes1.concat(appearCharIdxes2).filter((value, index, array) => array.indexOf(value) === index);
        // appearCharIdxesSum.includes()
    }
    public static longest_ = (s1: string, s2: string) => {
        let appearCharIdxes: number[] = G9642.getExistStringIndex(s1, alphaDic);
        appearCharIdxes = appearCharIdxes.concat(G9642.getExistStringIndex(s2, alphaDic));
        console.log(appearCharIdxes);
        const appearCharIdxesSet = new Set(appearCharIdxes);
        let answer: string = '';
        Object.entries(alphaDic).forEach(([key, value]) => {
            if (appearCharIdxesSet.has(value))
                answer += key;
        });
        return answer;
    }
    // BP これでいいんかい
    public static longest_bp = (s1: string, s2: string) => {
        return Array.from(new Set(Array.from(s1 + s2))).sort().join('');
    }

    // constructor() {
    //     //this.hash
    //     const t = "abcdefghijklmnopqrstuvwxyz"
    //         .split('')
    //         .map((alpha, idx) => {
    //             { alpha: idx; }
    //         });
    //     console.log(t);
    // }

    // private static alphaDic: Dictionary;// = "abcdefghijklmnopqrstuvwxyz"
    //     .split('')
    //     .map((alpha, idx) => {
    //         // let hash: { [key: string]: number; } = {};
    //         // hash[alpha] = idx;
    //         // return hash;
    //         let hash2:Dictionary = {};
    //         hash2[alpha] = idx;
    //         return hash2;
    //     });
    // private static alphaDic2: Dictionary;
        // console.log(t);
    // private hash: { [key: string]: number; } = {};
    // private static isExist = (s: string, dic: Dictionary): boolean => {
    //     console.log(dic[s]);
    //     return true;
    // }
}
