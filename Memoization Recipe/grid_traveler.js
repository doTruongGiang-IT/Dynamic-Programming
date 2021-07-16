let gridTraveler = (n, m) => {
    if(m === 1 && n === 1) {
        return 1;
    };
    if(m === 0 || n === 0) {
        return 0;
    };
    return gridTraveler(n - 1, m) + gridTraveler(n, m - 1);
};

// Use memoization recipe
let gridTravelerMemo = (n, m, memo = {}) => {
    const key = m + ", " + n;
    if(key in memo) {
        return memo[key];
    };
    if(m === 1 && n === 1) {
        return 1;
    };
    if(m === 0 || n === 0) {
        return 0;
    };
    memo[key] = gridTravelerMemo(n - 1, m, memo) + gridTravelerMemo(n, m - 1, memo);
    return memo[key];
};

console.log(gridTravelerMemo(1, 3));
console.log(gridTravelerMemo(2, 3));
console.log(gridTravelerMemo(3, 2));
console.log(gridTravelerMemo(2, 2));
console.log(gridTravelerMemo(18, 20));