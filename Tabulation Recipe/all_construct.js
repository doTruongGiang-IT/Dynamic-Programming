let allConstructTab = (target, wordBank) => {
    let table = Array(target.length + 1).fill().map(() => []);
    table[0] = [[]];
    for(let i = 0; i <= target.length; i++) {
        for(let word of wordBank) {
            if(target.slice(i, i + word.length) === word) {
                const combine = table[i].map((subArr) => {
                    return [...subArr, word];
                });      
                table[i + word.length].push(...combine);
            };
        };
    };
    return table[target.length];
};

console.log(allConstructTab("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef", "c"]));
console.log(allConstructTab("purple", ["purp", "p", "le", "ur", "purpl", "ple"]));
console.log(allConstructTab("skateboard", ["bo", "rd", "sk", "ska", "boar", "ate", "t"]));