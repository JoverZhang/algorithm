/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
let minSubArrayLen = function (target, nums) {
    let j = 0
    let sum = 0
    let res = Infinity
    let subLength = 0
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
        while (sum >= target) {
            subLength = i - j + 1
            res = Math.min(res, subLength)
            sum -= nums[j++]
        }
    }
    return res === Infinity? 0 : res
};

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]))
