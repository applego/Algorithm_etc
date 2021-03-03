type dicAction2 = 'insert' | 'find';

const DicAction = {
  Insert: 'insert',
  Find: 'find',
} as const;
type DicAction = typeof DicAction[keyof typeof DicAction];

const AnswerType = {
  Yes: 'yes',
  No: 'no',
} as const;
type AnswerType = typeof AnswerType[keyof typeof AnswerType];

export class G2 {
  static main(input: string): string {
    let dictionary: { [key: string]: boolean } = {};
    const inputArr = input.split('\n');
    const n = Number(inputArr.shift());
    let result: string[] = [];
    inputArr.forEach((_) => {
      const [dicaction, word] = [..._.split(' ')];
      switch (dicaction) {
        case DicAction.Insert:
          dictionary[word] = true;
          break;
        case DicAction.Find:
          console.log(dictionary[word] ? AnswerType.Yes : AnswerType.No);
          // return dictionary[word] ? AnswerType.Yes : AnswerType.No;
          result.push(dictionary[word] ? AnswerType.Yes : AnswerType.No);
          break;
        default:
          throw new Error('bad dicAction request');
      }
    });
    return result.join('\n');
  }
}

// * 提出用
// const input = require('fs').readFileSync('/dev/stdin', 'utf8');
// G.main(input);
