let gridTravelerTab = (m, n) => {
    let table = Array(m + 1).fill().map(() => Array(n + 1).fill(0));
    table[1][1] = 1;
    for(let i = 0; i <= m; i++) {
        for(let j = 0; j <= n; j++) {
            if(i + 1 <= m) {
                table[i + 1][j] += table[i][j];
            };
            if(j + 1 <= n) {
                table[i][j + 1] += table[i][j];
            };
        };
    };
    return table[m][n];
};

console.log(gridTravelerTab(1, 3));
console.log(gridTravelerTab(2, 3));
console.log(gridTravelerTab(3, 2));
console.log(gridTravelerTab(2, 2));
console.log(gridTravelerTab(18, 20));