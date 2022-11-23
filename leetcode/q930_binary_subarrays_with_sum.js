/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */

//1. two pointers

// let numSubarraysWithSum = function (nums, goal) {
//     let sum = 0
//     let res = 0
//     let j = 0
//
//     for (let i = 0; i < nums.length; i++) {
//         sum += nums[i]
//         if (sum === goal) {
//             res++
//
//             if (i === nums.length - 1) {
//                 i = j ++
//                 sum = 0
//             }
//
//         } else if (sum > goal) {
//             i = j ++
//             sum = 0
//         }
//     }
//
//     return res
// };

//2. Map

let numSubarraysWithSum = function (nums, goal) {
    let res = 0
    let sum = 0
    const map = new Map([[0,1]])     // to better deal with the equal situation

    for (const num of nums){
        sum += num
        if (sum >= goal) res += map.get(sum - goal) || 0
        map.set(sum, map.get(sum) + 1 || 1)
    }

    return res
}

console.log(numSubarraysWithSum([1, 0, 1, 0, 1], 2))
console.log(numSubarraysWithSum([0, 0, 0, 0, 0, 0, 1, 0, 0, 0], 0))
