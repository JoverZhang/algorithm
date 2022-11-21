/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

//first version:

// let intersection = function (nums1, nums2) {
//     let s = new Set(nums1)
//     let temp = new Set()
//     for (let i = 0; i < nums2.length; i++) {
//         if (s.has(nums2[i])) {
//             temp.add(nums2[i])
//         }
//     }
//     return Array.from(temp)
// };

//second version

// let intersection = function (nums1, nums2) {
//     const n1Set = new Set(nums1)
//     const n2Set = new Set(nums2)
//     let res = []
//     for (let val of n1Set){
//         if (n2Set.has(val)){
//             res.push(val)
//         }
//     }
//     return res
// }

//third version

let intersection = function (nums1, nums2) {
    if (nums1.length < nums2.length){
        const temp = nums1
        nums1 = nums2
        nums2 = temp
    }
    const nums1Set = new Set(nums1)
    const resSet = new Set()
    for (let i = 0; i< nums2.length;i++){
        nums1Set.has(nums2[i]) && resSet.add(nums2[i])
    }
    return Array.from(resSet)
}

console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]))
