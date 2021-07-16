let fib = (number) => {
    if(number <= 2) {
        return 1;
    };
    return fib(number-1) + fib(number-2);
};

// Use memoization recipe
let fibMemo = (number, memo = {}) => {
    if(number in memo) {
        return memo[number];
    };
    if(number <= 2) {
        return 1;
    };
    memo[number] = fibMemo(number-1 ,memo) + fibMemo(number-2, memo);
    return memo[number];
};

console.log(fibMemo(6));
console.log(fibMemo(7));
console.log(fibMemo(8));
console.log(fibMemo(80));