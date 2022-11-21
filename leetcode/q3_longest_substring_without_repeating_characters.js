/**
 * @param {string} s
 * @return {number}
 */

//1. use Map

// let lengthOfLongestSubstring = function(s) {
//     const map = new Map()
//     let max = 0
//     for (let i = 0; i < s.length; i ++){
//         if (!map.has(s[i])){
//             map.set(s[i], i)
//             max = max > map.size? max : map.size
//         } else {
//             let firstInd = map.get(s[i])
//             for (let [string, index] of map){
//                 if (index < firstInd){
//                     map.delete(s[index])
//                 }
//             }
//             map.set(s[i], i)
//             max = max > map.size? max : map.size
//         }
//     }
//     return max
// };

//2. use Set

let lengthOfLongestSubstring = function (s) {
        const set = new Set()
        let max = 0
        let j = 0
        for (let i = 0; i < s.length; i++) {
            while (set.has(s[i])) {
                set.delete(s[j])
                j++
            }
            set.add(s[i])
            max = Math.max(max, i - j + 1)
        }
        return max
    };

console.log(lengthOfLongestSubstring("abcabcbb"))
console.log(lengthOfLongestSubstring("bbbbb"))
console.log(lengthOfLongestSubstring("nfpdmpi"))
