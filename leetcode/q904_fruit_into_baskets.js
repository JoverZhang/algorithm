/**
 * @param {number[]} fruits
 * @return {number}
 */
let totalFruit = function (fruits) {
    const map = new Map()
    let max = 1
    let j = 0
    for (let i = 0; i < fruits.length; i++) {
        map.set(fruits[i], i)
        if (map.size > 2) {
            let minIndex = fruits.length - 1
            for (const [fruit, index] of map) {
                if (index < minIndex) {
                    minIndex = index
                }
            }
            map.delete(fruits[minIndex])
            j = minIndex + 1
        }
        max = Math.max(max, i - j + 1)
    }
    return max
};

console.log(totalFruit([1, 2, 1]))
console.log(totalFruit([1, 2, 3, 2, 2]))
console.log(totalFruit([0, 1, 2, 2]))
