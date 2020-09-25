
const arr = N => N ? [...Array(N).keys()] : [];
//const arr = N => [...Array(N).keys()].map(i=>++i);//1から始めるなら
//ts
// export const arr = (n: number=0): number[] => [...Array(n).keys()];