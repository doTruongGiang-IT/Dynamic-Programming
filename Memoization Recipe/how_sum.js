let howSum = (target, numbers) => {
    if(target === 0) {
        return [];
    };
    if(target < 0) {
        return null;
    };
    for(let number of numbers) {
        const reminder = howSum(target - number, numbers);
        if(reminder !== null) {
            return [ ...reminder, number ];
        };
    };  
    return null;
};

//Use memoization recipe
let howSumMemo = (target, numbers, memo = {}) => {
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
        const reminder = howSumMemo(target - number, numbers, memo);
        if(reminder !== null) {
            memo[target] = [ ...reminder, number ];
            return memo[target];
        };
    };  
    memo[target] = null;
    return null;
};

console.log(howSumMemo(7, [2, 3]));
console.log(howSumMemo(7, [5, 3, 4, 7]));
console.log(howSumMemo(7, [2, 4]));
console.log(howSumMemo(10, [2, 3, 4, 9]));
console.log(howSumMemo(300, [7, 14]));