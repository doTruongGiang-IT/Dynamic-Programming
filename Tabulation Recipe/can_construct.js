let canConstructTab = (target, wordBank) => {
    let table = Array(target.length + 1).fill(false);
    table[0] = true;
    for(let i = 0; i <= target.length; i++) {
        if(table[i] === true) {
            for(let word of wordBank) {
                if(target.slice(i, i + word.length) === word) {
                    table[i + word.length] = true;
                };
            };
        };
    };
    return table[target.length];
};


console.log(canConstructTab("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
console.log(canConstructTab("skateboard", ["bo", "rd", "sk", "ska", "boar", "ate", "t"]));
console.log(canConstructTab("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"]));
console.log(canConstructTab("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e", "ee", "eee", "eeee", "eeeeeee"]));