/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

//1. array

// const isAnagram = function(s, t) {
//     if (s.length !== t.length) return false
//     let charArr = new Array(26).fill(0)
//     const aCode = 'a'.charCodeAt()
//     for (const i of s){
//         charArr[i.charCodeAt() - aCode]++
//     }
//     for (const i of t){
//         charArr[i.charCodeAt() - aCode]--
//     }
//     for (const i of charArr){
//         if (i !== 0) return false
//     }
//     return true
// };

//2. object

// const isAnagram = function (s, t) {
//         if (s.length !== t.length) return false
//         const map = {}
//         for (const a of s) map[a] = (map[a] || 0) + 1
//         for (const a of t) map[a] = (map[a] || 0) - 1
//         for (const a in map) if (map[a] !== 0) return false
//         return true
// };

//3. map

const isAnagram = function (s, t) {
    if (s.length !== t.length) return false
    const map = new Map()
    for (const a of s) {
        map.has(a) ? map.set(a, map.get(a)+1) : map.set(a, 1)
    }
    for (const a of t){
        if (!map.get(a)){
            return false
        } else {
            map.set(a, map.get(a)-1)
        }
    }
    return true
}

console.log(isAnagram("anagram", "nagaram"))
console.log(isAnagram("rat", "car"))
console.log(isAnagram("aaca", "acca"))
