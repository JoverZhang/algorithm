/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// let twoSum = function(nums, target) {
//     const map = {}
//     for (let i = 0; i < nums.length; i++){
//         map[nums[i]]=i
//     }
//     for (let i = 0; i < nums.length; i++){
//         let diff = target - nums[i]
//         if (map[diff] !== undefined & map[diff] !== i){
//             return [i, map[diff]]
//         }
//     }
// };

let twoSum = function (nums, target) {
    const map = {}
    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i]
        if (map[diff] !== undefined) {
            return [map[diff], i]
        }
        map[nums[i]] = i
    }
};

console.log(twoSum([2, 7, 11, 15], 9))
console.log(twoSum([3, 2, 4], 6))
console.log(twoSum([3, 3], 6))
