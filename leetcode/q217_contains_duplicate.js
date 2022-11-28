/**
 * @param {number[]} nums
 * @return {boolean}
 */

//1. new array

// const containsDuplicate = function (nums) {
//     if (nums.length === 1) return false
//     const newArr = []
//     for (let i = 0; i < nums.length; i++) {
//         if (newArr.indexOf(nums[i]) === -1) {
//             newArr.push(nums[i])
//         } else {
//             return true
//         }
//     }
//     return false
// };

// 2. sort

// const containsDuplicate = function (nums) {
//     nums.sort((a, b) => a - b)
//     console.log(nums)
//     for (let i = 0; i < nums.length - 1; i++) {
//         if(nums[i] === nums[i+1]) return true
//     }
//     return false
// }

// 3. hash table - set

const containsDuplicate = function (nums) {
    if (nums.length === 1) return false
    const set = new Set()
    for (let i =0; i < nums.length; i ++){
        if(set.has(nums[i])){
            return true
        } else {
            set.add(nums[i])
        }
    }
    return false
}

console.log(containsDuplicate([3, 3]));
console.log(containsDuplicate([1, 2, 3, 1]));
console.log(containsDuplicate([1, 2, 3, 4]));
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
