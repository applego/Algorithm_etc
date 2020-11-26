export function maxProduct1(numbers: number[], size: number) :number {
    let max: number = 1;
    numbers.sort((a, b) => b - a);
    console.log(numbers);
    for (let i = 0; i < size; i++){
        max *= numbers[i];
    }
    return max;
}

export function maxProduct(numbers: number[], size: number) :number {
    return numbers
        .sort((a, b) => b - a)
        .slice(0, size)
        .reduce((acc, n) => acc *= n);
}
