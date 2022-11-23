/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {string}
 */
let findLongestWord = function (s, dictionary) {
    let res = ''

    const isValid = function (word) {
        if (word.length > s.length) return false
        if (word === s) return true

        let si = 0
        let wi = 0
        while (si <= s.length) {
            if (wi === word.length) return true
            if (s[si] === word[wi]) wi++
            si++
        }

        return false
    }

    for (let word of dictionary) {
        if (isValid(word)) {
            if (res.length < word.length) {
                res = word
            } else if (res.length === word.length) {
                if (word < res) res = word
            }
        }
    }

    return res
};

// console.log(findLongestWord("abpcplea", ["ale", "apple", "monkey", "plea"]))
// console.log(findLongestWord("aaa", ["aaa","aa","a"]))
console.log(findLongestWord("bab", ["ba","ab","a","b"]))
