let countConstructTab = (target, wordBank) => {
    let table = Array(target.length + 1).fill(0);
    table[0] = 1;
    for(let i = 0; i <= target.length; i++) {
        if(table[i] !== 0) {
            for(let word of wordBank) {
                if(target.slice(i, i + word.length) === word) {
                    table[i + word.length] += table[i];
                };
            };
        };
    };
    return table[target.length];
};

console.log(countConstructTab("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
console.log(countConstructTab("purple", ["purp", "p", "le", "ur", "purpl", "ple"]));
console.log(countConstructTab("skateboard", ["bo", "rd", "sk", "ska", "boar", "ate", "t"]));
console.log(countConstructTab("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"]));
console.log(countConstructTab("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e", "ee", "eee", "eeee", "eeeeeee"]));