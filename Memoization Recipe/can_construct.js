let canConstruct = (target, wordBank) => {
    if(target === "") {
        return true;
    };
    for(let word of wordBank) {
        if(target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);
            if(canConstruct(suffix, wordBank)) {
                return true;
            };
        };
    };
    return false;
};

// Use memoization recipe
let canConstructMemo = (target, wordBank, memo = {}) => {
    if(target === "") {
        return true;
    };
    if(target in memo) {
        return memo[target];
    };
    for(let word of wordBank) {
        if(target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);
            if(canConstructMemo(suffix, wordBank, memo)) {
                memo[target] = true;
                return true;
            };
        };
    };
    memo[target] = false;
    return false;
};

console.log(canConstructMemo("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
console.log(canConstructMemo("skateboard", ["bo", "rd", "sk", "ska", "boar", "ate", "t"]));
console.log(canConstructMemo("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"]));
console.log(canConstructMemo("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e", "ee", "eee", "eeee", "eeeeeee"]));