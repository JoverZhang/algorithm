// var searchRange = function (nums, target) {
//     let res = []
//     if (nums.length === 0 || nums.indexOf(target) === -1) {
//         res.push(-1)
//     } else {
//         for (let i = 0; i < nums.length; i++) {
//             if (nums[i] === target) {
//                 res.push(i)
//             }
//         }
//     }
//     if (res.length === 1) res.push(res[0])
//     if (res.length > 2) res.splice(1, res.length - 2)
//     return res
// };

let searchRange = function (nums, target) {
    const getLeftBorder = function (nums, target) {
        let left = 0
        let right = nums.length - 1
        let leftBorder = -1
        while (left <= right) {
            let middle = Math.floor((left + right) / 2)
            if (nums[middle] === target && nums[middle - 1] < target || nums[middle] === target && nums[middle - 1] === undefined) {
                return leftBorder = middle
            } else if (nums[middle] < target) {
                left = middle + 1
            } else {
                right = middle - 1
            }
        }
        return leftBorder
    }
    const getRightBorder = function (nums, target) {
        let left = 0
        let right = nums.length - 1
        let rightBorder = -1
        while (left <= right) {
            let middle = Math.floor((left + right) / 2)
            if (nums[middle] === target && nums[middle + 1] > target || nums[middle] === target && nums[middle + 1] === undefined) {
                return rightBorder = middle
            } else if (nums[middle] > target) {
                right = middle - 1
            } else {
                left = middle + 1
            }
        }
        return rightBorder
    }
    return [getLeftBorder(nums, target), getRightBorder(nums, target)]
}

console.log(searchRange([5, 7, 7, 8, 8, 10], 8))
console.log(searchRange([5, 7, 7, 8, 8, 10], 6))
console.log(searchRange([], 0))
console.log(searchRange([1], 1))
console.log(searchRange([3, 3, 3], 3))
