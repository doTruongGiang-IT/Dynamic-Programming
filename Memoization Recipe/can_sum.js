let canSum = (target, numbers) => {
    if(target === 0) {
        return true;
    };
    if(target < 0) {
        return false;
    };
    for(let number of numbers) {
        if(canSum(target - number, numbers)) {
            return true;
        };
    };
    return false;
};

//Use memoization recipe
let canSumMemo = (target, numbers, memo = {}) => {
    if(target === 0) {
        return true;
    };
    if(target < 0) {
        return false;
    };
    if(target in memo) {
        return memo[target];
    };
    for(let number of numbers) {
        if(canSumMemo(target - number, numbers, memo)) {
            memo[target] = true;
            return true;
        };
    };
    memo[target] = false;
    return false;
};

console.log(canSumMemo(7, [2, 3]));
console.log(canSumMemo(7, [5, 3, 4, 7]));
console.log(canSumMemo(7, [2, 4]));
console.log(canSumMemo(10, [2, 3, 4, 9]));
console.log(canSumMemo(300, [7, 14]));