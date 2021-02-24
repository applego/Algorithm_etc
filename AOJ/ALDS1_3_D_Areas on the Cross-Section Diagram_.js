export function answer(input) {
  const array = input.trim().split('');
  let stack = [];
  let areaStack = [];
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    let p = array[i];
    switch (p) {
      case '\\':
        stack.push(i);
        break;
      case '/':
        if (!stack.length) {
          continue;
        }
        let begin = stack.pop();
        let sumArea = i - begin;
        sum += sumArea;
        while (true) {
          if (!areaStack.length) {
            break;
          }
          let a = areaStack.pop();
          if (a.i >= begin) {
            sumArea += a.area;
          } else {
            areaStack.push(a);
            break;
          }
        }
    }
    areaStack.push({
      i: begin,
      area: sumArea,
    });
  }
  console.log(sum);
  let msg = areaStack.length;
  msg += areaStack.map((s) => s.area).join(' ');
  console.log(msg);
}

// (require('fs').readFileSync('/dev/stdin', 'utf8'));
