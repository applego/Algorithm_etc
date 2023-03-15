interface Point{
  x:number,y:number
}

const parseDirectionToNumber = (direction: string) :Point => {
  switch (direction) {
    case 'n':
      return { x: 0, y: 1 };
    case 's':
      return { x: 0, y: -1 };
    case 'e':
      return { x: 1, y: 0 };
    case 'w':
      return { x: -1, y: 0 };
    default:
      return { x: 0, y: 0 };
  }
}

export function isValidWalk(walk: string[]) {
  if (walk.length !== 10)
    return false;
  let x: number = 0;
  let y: number = 0;
  walk.forEach(direction => {
    const p:Point =parseDirectionToNumber(direction);
    x += p.x;
    y += p.y;
  });
  return x === 0 && y === 0;
}
