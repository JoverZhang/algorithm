let search = function (nums, target) {
    let beginInd = 0
    let endInd = nums.length - 1
    while (beginInd <= endInd) {
        let middleInd = Math.floor((beginInd + endInd) / 2)
        if (nums[middleInd] === target) {
            return middleInd
        } else if (nums[middleInd] > target) {
            endInd = middleInd - 1
        } else {
            beginInd = middleInd + 1
        }
    }
    return -1
};

console.log(search([-1, 0, 3, 5, 9, 12], 9));
console.log(search([-1, 0, 3, 5, 9, 12], 2));
