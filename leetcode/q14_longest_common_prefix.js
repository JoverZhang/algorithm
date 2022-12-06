/**
 * @param {string[]} strs
 * @return {string}
 */
// const longestCommonPrefix = function (strs) {
//     for (let i = 0; i < strs[0].length; i++) {
//         for (let s of strs) {
//             if (s[i] !== strs[0][i]) {
//                 return s.slice(0, i)
//             }
//         }
//     }
//
//     return strs[0]
// };

const longestCommonPrefix = function (strs) {
    let prefix = strs[0]
    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) != 0) {
            prefix = prefix.slice(0, prefix.length - 1)
            if (prefix === '') return ''
        }
    }
    return prefix
}

console.log(longestCommonPrefix(["flower", "flow", "flight"]))
// console.log(longestCommonPrefix(["dog", "racecar", "car"]))
