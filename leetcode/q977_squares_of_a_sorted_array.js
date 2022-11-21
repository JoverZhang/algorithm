/**
 * @param {number[]} nums
 * @return {number[]}
 */

//1. direct solution

// let sortedSquares = function (nums) {
//     return nums.map(el => el * el).sort((a, b) => a - b)
// }

//2. two pointers

let sortedSquares = function (nums) {
    let i = 0
    let j = nums.length - 1
    let res = []
    let k = j
    while (i <= j) {
        let left = nums[i] * nums[i]
        let right = nums[j] * nums[j]
        if (left < right) {
            res[k--] = right
            j--
        } else {
            res[k--] = left
            i++
        }
    }
    return res
};

console.log(sortedSquares([-4, -1, 0, 3, 10]))
