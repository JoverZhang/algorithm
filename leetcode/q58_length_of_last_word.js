/**
 * @param {string} s
 * @return {number}
 */

// 1. array

// const lengthOfLastWord = function(s) {
//     let wordsArr = s.trim().split(' ')
//     let i = wordsArr.length - 1
//     return wordsArr[i].length
// };

// 2. string

const lengthOfLastWord = function (s) {
    s = s.trim()
    let i = s.length - 1
    while (i >= 0 && s[i] !== ' ') i--
    return s.length - 1 - i
}

console.log(lengthOfLastWord("   fly me   to   the moon  ")
)
