// var searchInsert = function (nums, target) {
//     let res = 0
//     if (nums[0] > target) {
//         res = 0
//     } else if (nums[nums.length - 1] < target) {
//         res = nums.length
//     } else {
//         for (let i = 0; i < nums.length; i++) {
//             if (nums[i] === target) {
//                 res = i
//             } else if (nums[i] < target && nums[i + 1] > target) {
//                 res = i + 1
//             }
//         }
//     }
//     return res
// };

var searchInsert = function (nums, target) {
    let left = 0
    let right = nums.length - 1
    while (left <= right) {
        let middle = Math.floor((left + right) / 2)
        if (nums[middle] === target) {
            return middle
        } else if (nums[middle] > target) {
            right = middle - 1
        } else {
            left = middle + 1
        }
    }
    return left
}

console.log(searchInsert([1, 3, 5, 6], 5))
console.log(searchInsert([1, 3, 5, 6], 2))
console.log(searchInsert([1, 3, 5, 6], 7))
console.log(searchInsert([1], 2))
console.log(searchInsert([1, 4, 6, 7, 8, 9], 6))
