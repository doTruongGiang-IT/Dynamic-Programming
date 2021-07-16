let countConstruct = (target, wordBank) => {
    let total = 0;
    if(target === "") {
        return 1;
    };
    for(let word of wordBank) {
        if(target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);
            const count = countConstruct(suffix, wordBank);
            total += count;
        };
    };
    return total;
};

// Use memoization recipe
let countConstructMemo = (target, wordBank, memo = {}) => {
    let total = 0;
    if(target === "") {
        return 1;
    };
    if(target in memo) {
        return memo[target];
    };
    for(let word of wordBank) {
        if(target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);
            const count = countConstructMemo(suffix, wordBank, memo);
            total += count;
        };
    };
    memo[target] = total;
    return total;
};


console.log(countConstructMemo("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
console.log(countConstructMemo("purple", ["purp", "p", "le", "ur", "purpl", "ple"]));
console.log(countConstructMemo("skateboard", ["bo", "rd", "sk", "ska", "boar", "ate", "t"]));
console.log(countConstructMemo("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"]));
console.log(countConstructMemo("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e", "ee", "eee", "eeee", "eeeeeee"]));