/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
let twoSum = function (numbers, target) {
    let leftInd = 0
    let rightInd = numbers.length - 1
    while (leftInd < rightInd) {
        let sum = numbers[leftInd] + numbers[rightInd]
        if (sum === target) {
            return [leftInd + 1, rightInd + 1]
        } else if (sum > target){
            rightInd--
        } else {
            leftInd ++
        }
    }
};

console.log(twoSum([2, 7, 11, 15], 9))
console.log(twoSum([2, 3, 4], 6))
console.log(twoSum([-1, 0], -1))
