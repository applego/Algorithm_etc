
interface num_and_sum{
  n:number,sum:number
}

export function arrayLeaders1(numbers: number[]) {
  let list: num_and_sum[] = [];
  for (let i = 1; i < numbers.length ;i++) {
    const sum = numbers
      .slice(i)
      .reduce((acc, v) => acc + v);
    list.push({ n: numbers[i-1], sum: sum });
  }
  return list.filter(l => l.n > l.sum).map(l => l.n);
}

export function arrayLeaders(numbers: number[]) {
  let leaders: number[] = [];
  for (let i = 1; i < numbers.length ;i++) {
    const sum = numbers
      .slice(i)
      .reduce((acc, v) => acc + v);
    if (numbers[i - 1] > sum)
      leaders.push(numbers[i - 1]);
  }
  if (numbers[numbers.length - 1] > 0)
    leaders.push(numbers[numbers.length - 1]);
  return leaders;
}
