let allConstruct = (target, wordBank) => {
    let result = [];
    if(target === "") {
        return [[]];
    };
    for(let word of wordBank) {
        if(target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);
            const ways = allConstruct(suffix, wordBank);
            const targetWays = ways.map((way) => {
                return [ word, ...way ];
            });
            result.push(...targetWays);
        };
    };
    return result;
};

// Use memoization recipe
let allConstructMemo = (target, wordBank, memo = {}) => {
    let result = [];
    if(target === "") {
        return [[]];
    };
    if(target in memo) {
        return memo[target];
    };
    for(let word of wordBank) {
        if(target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);
            const ways = allConstructMemo(suffix, wordBank, memo);
            const targetWays = ways.map((way) => {
                return [ word, ...way ];
            });
            result.push(...targetWays);
        };
    };
    memo[target] = result;
    return result;
};

console.log(allConstructMemo("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef", "c"]));
console.log(allConstructMemo("purple", ["purp", "p", "le", "ur", "purpl", "ple"]));
console.log(allConstructMemo("skateboard", ["bo", "rd", "sk", "ska", "boar", "ate", "t"]));
console.log(allConstructMemo("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e", "ee", "eee", "eeee", "eeeeeee"]));