export function betterThanAverage(classPoints: number[], yourPoints: number): boolean {
    const average: number = classPoints.reduce((acc, point) => acc + point) / classPoints.length;
    return yourPoints > average;
}
