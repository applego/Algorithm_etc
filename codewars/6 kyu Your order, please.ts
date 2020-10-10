/*
"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  ""
*/

interface Hash_idx_num {
    [idx: number]: number;
}

export function order(words: string): string {
    if (!words)
        return '';
    const splitedWords:string[] = words.split(' ');
    return splitedWords
        .map(function (val, idx) {
            return [idx, parseInt(val.replace(/[^0-9]/g, ''))];
        }).sort(function (first, second) {
            return first[1] - second[1];
        }).map(function (val) {
            return splitedWords[val[0]];
        }).join(' ');

    //ここまでで提出
    const splited: string[] = words.split(' ');
    let hash_idx_num: Hash_idx_num = {};
    for (let i = 0; i < splited.length; i++) {
        const num: string = splited[i].replace(/[^0-9]/g, '');
        hash_idx_num[i] = parseInt(num); //key:配列にしたときとインデックスの初期値,value: 含まれる数字
    }

    // Create items array
    let sortedByValue = Object.keys(hash_idx_num).map(function (key) {
        const key_num :number = parseInt(key);
        return [key_num, hash_idx_num[key_num]];
    });

    // Sort the array based on the second element
    sortedByValue.sort(function (first, second) {
        return first[1] - second[1];
    });
    return sortedByValue.map(a => splited[a[0]]).join(' ');
}

//BP
// export function order_(words: String): String {
//     return words.split(' ')
//         .sort((a, b) => + a.match(/\d/) - +b.match(/\d/))
//         .join(' ');
// }