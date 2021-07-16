let bestSumTab = (target, numbers) => {
    let table = Array(target + 1).fill(null);
    table[0] = [];
    for(let i = 0; i <= target; i++) {
        if(table[i] !== null) {
            for(let number of numbers) {
                if(!table[number + i] || table[number + i].length > [...table[i], number].length) {
                    table[number + i] = [...table[i], number];
                };
            };
        };
    };
    return table[target];
};

console.log(bestSumTab(7, [5, 4, 3, 7]));
console.log(bestSumTab(8, [5, 2, 3]));
console.log(bestSumTab(10, [5, 4, 6, 1]));
console.log(bestSumTab(100, [25, 1, 2, 10]));