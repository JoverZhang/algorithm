/**
 * @param {string} s
 * @return {boolean}
 */
// let isPalindrome = function (s) {
//     s = s.toLowerCase().replace(/[^a-zA-Z0-9]/gi, '')
//     for (let i = 0, j = s.length - 1; i < j; i++, j--) {
//         if (s[i] !== s[j]) return false
//     }
//     return true
// };

// let isPalindrome = function (s) {
//     s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
//     let i = 0
//     let j = s.length - 1
//     while (i < j){
//         if (s[i] !== s[j]) return false
//         i++
//         j--
//     }
//     return true
// };

let isPalindrome = function (s) {
    if (s.length === 1) return true
    let str = ''
    for (const c of s) {
        if ('a' <= c && c <= 'z' || '0' <= c && c <= '9') {
            str += c
        } else if ('A' <= c && c <= 'Z') {
            str += c.toLowerCase()
        }
    }
    let i = 0
    let j = str.length - 1
    while (i < j) {
        if (str[i] !== str[j]) return false
        i++
        j--
    }
    return true
};

console.log(isPalindrome("A man, a plan, a canal: Panama"))
console.log(isPalindrome("race a car"))
console.log(isPalindrome(" "))
