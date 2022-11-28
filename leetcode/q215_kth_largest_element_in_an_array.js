/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findKthLargest = function (nums, k) {
    const indexToFind = nums.length - k
    quickSort(nums, 0,  nums.length - 1, indexToFind)
    return nums[indexToFind]
}

const quickSort = function (arr, left, right, indexToFind) {
    if (left < right) {
        const partitionInd = partition(arr, left, right)
        if (indexToFind === partitionInd) {
            return arr[indexToFind]
        } else if (indexToFind < partitionInd) {
            quickSort(arr, left, partitionInd - 1, indexToFind)
        } else {
            quickSort(arr, partitionInd + 1, right, indexToFind)
        }
    }
}

const partition = function (arr, left, right) {
    let partitionInd = left
    let pivot = arr[right]
    for (let j = left; j < right; j++) {
        if (arr[j] < pivot){
            let temp = arr[j]
            arr[j] = arr[partitionInd]
            arr[partitionInd] = temp
            partitionInd ++
        }
    }
    let final = arr[partitionInd]
    arr[partitionInd] = pivot
    arr[right] = final
    return partitionInd
}

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2))
// console.log(findKthLargest(    [3,2,3,1,2,4,5,5,6],4))
