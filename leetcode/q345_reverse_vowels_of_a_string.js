/**
 * @param {string} s
 * @return {string}
 */

//1. String

// let reverseVowels = function (s) {
//     let left = 0
//     let right = s.length - 1
//     const vowelArray = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
//     let set = new Set(vowelArray)
//     while (left < right) {
//         if (set.has(s[left]) && set.has(s[right])) {
//             let s1 = s.substring(0, left)
//             let s2 = s.substring(left + 1, right)
//             let s3 = s.substring(right + 1)
//             s = s1 + s[right--] + s2 + s[left++] +s3
//         }
//
//         if (!set.has(s[left])) left++
//         if (!set.has(s[right])) right--
//     }
//     return s
// };

//2. String -> Array -> String

let reverseVowels = function (s) {
    let vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'])
    let result = s.split('')

    let left = 0
    let right = s.length - 1

    while (left < right) {
        let leftChar = result[left]
        let rightChar = result[right]

        if (!vowels.has(leftChar)) left++
        if (!vowels.has(rightChar)) right--

        if (vowels.has(leftChar) && vowels.has(rightChar)){
            let temp = result[left]
            result[left++] = result[right]
            result[right--] = temp
        }
    }

    return result.join('')
}

console.log(reverseVowels("hello"))
console.log(reverseVowels("leetcode"))
console.log(reverseVowels("a."))
