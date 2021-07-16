let fibTab = (n) => {
    const table = Array(n + 1).fill(0);
    table[1] = 1;
    for(let i = 0; i <= n; i++) {
        table[i + 1] += table[i];
        table[i + 2] += table[i];
    };
    return table[n];
};

console.log(fibTab(6));
console.log(fibTab(7));
console.log(fibTab(8));
console.log(fibTab(80));