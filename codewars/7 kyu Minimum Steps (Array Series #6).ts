
export function minimumSteps(nums: number[], value: number): number {
    let sum: number = 0;
    nums.sort((a, b) => a - b);
    if (nums[0] >= value)
        return 0;
    for (let i = 0; i < nums.length; i++){
        sum += nums[i];
        if (sum >= value) {
            return i;
        }
    }
    return -1;
}


export function minimumStepsBP(nums: number[], value: number): number {
    let level = 0
    let count = 0

    nums = nums.sort((a: number, b: number): number => a - b);

    while (level < value) level += nums[count++]

    return --count;
}
