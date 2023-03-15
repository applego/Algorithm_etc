export function number(busStops: [number, number][]): number {
  return busStops.reduce((numOfPeople, curr) => {
    const [inc, dec] = [curr[0], curr[1]];
    return numOfPeople + inc - dec;
  }, 0);
}

export function numberBP(busStops: number[][]): number {
  return busStops.reduce((rem, [on, off]) => rem + (on - off), 0);
}
