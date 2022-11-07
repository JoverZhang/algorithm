/**
 * @param {number} c
 * @return {boolean}
 */

// The Math.sqrt() function returns the square root of a number.

let judgeSquareSum = function (c) {
    let smallNum = 0
    let bigNum = Math.floor(Math.sqrt(c))
    while (smallNum <= bigNum) {
        let sum = smallNum * smallNum + bigNum * bigNum
        if (sum === c) {
            return true
        } else if (sum < c) {
            smallNum++
        } else {
            bigNum--
        }
    }
    return false
};

console.log(judgeSquareSum(5))
console.log(judgeSquareSum(3))
