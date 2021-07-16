let howSumTab = (target, numbers) => {
    let table = Array(target + 1).fill(null);
    table[0] = [];
    for(let i = 0; i <= target; i++) {
        if(table[i] !== null) {
            for(let number of numbers) {
                table[number + i] = [...table[i], number];
            };
        };
    };
    return table[target];
};

console.log(howSumTab(7, [2, 3]));
console.log(howSumTab(7, [5, 3, 4, 7]));
console.log(howSumTab(7, [2, 4]));
console.log(howSumTab(10, [2, 3, 4, 9]));
console.log(howSumTab(300, [7, 14]));