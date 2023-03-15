export function flip(dir: string, arr: number[]): number[] {
    return dir === 'L' ? arr.sort((a, b) => a - b) : arr.sort((a, b) => b - a);
}
