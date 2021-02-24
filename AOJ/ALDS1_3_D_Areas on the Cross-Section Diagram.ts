type AreaStackProps = {
  i: number;
  area: number;
};
export function answer(input: string): string {
  const array = input.trim().split('');
  let stack = [];
  let areaStack: AreaStackProps[] = [];
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    let p = array[i];
    let begin: number | undefined = undefined;
    let sumArea: number | undefined = undefined;
    switch (p) {
      case '\\':
        stack.push(i);
        break;
      case '/':
        if (!stack.length) {
          continue;
        }
        begin = stack.pop();
        if (begin == undefined) {
          continue;
        }
        sumArea = i - begin;
        sum += sumArea;
        while (true) {
          if (!areaStack.length) {
            break;
          }
          let a = areaStack.pop();
          if (a == undefined) break;
          if (a.i >= begin) {
            sumArea += a.area;
          } else {
            areaStack.push(a);
            break;
          }
        }
        areaStack.push({
          i: begin,
          area: sumArea,
        });
    }
  }
  let msg = sum + '\n';
  console.log(sum);
  if (!areaStack.length) {
    msg += areaStack.length.toString();
  } else {
    msg += areaStack.length.toString() + ' ';
    msg += areaStack.map((s) => s.area).join(' ');
  }
  console.log(msg);
  return msg;
}

// (require('fs').readFileSync('/dev/stdin', 'utf8'));
