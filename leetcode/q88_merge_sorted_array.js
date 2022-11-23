/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

//Two Pointers

let merge = function (nums1, m, nums2, n) {
    let insertPosition = m + n - 1
    m--
    n--

    while (n >= 0){
        if (nums1[m] > nums2[n]){
            nums1[insertPosition--] = nums1[m--]
        } else {
            nums1[insertPosition--] = nums2[n--]
        }
    }
}

merge([0], 0, [1], 1)
