let bestSum = (target, numbers) => {
    let shortest = null;
    if(target === 0) {
        return [];
    };
    if(target < 0) {
        return null;
    };
    for(let number of numbers) {
        const combine = bestSum(target - number, numbers);
        if(combine !== null) {
            const combination = [ ...combine, number ];
            if(shortest === null || combination.length < shortest.length) {
                shortest = combination;
            };
        };
    };
    return shortest;
};

// Use memoization recipe
let bestSumMemo = (target, numbers, memo = {}) => {
    let shortest = null;
    if(target === 0) {
        return [];
    };
    if(target < 0) {
        return null;
    };
    if(target in memo) {
        return memo[target];
    };
    for(let number of numbers) {
        const combine = bestSumMemo(target - number, numbers, memo);
        if(combine !== null) {
            const combination = [ ...combine, number ];
            if(shortest === null || combination.length < shortest.length) {
                shortest = combination;
            };
        };
    };
    memo[target] = shortest;
    return shortest;
};

console.log(bestSumMemo(7, [5, 4, 3, 7]));
console.log(bestSumMemo(8, [5, 2, 3]));
console.log(bestSumMemo(10, [5, 4, 6, 1]));
console.log(bestSumMemo(100, [25, 1, 2, 10]));