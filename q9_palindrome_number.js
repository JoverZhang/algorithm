// var isPalindrome = function (x) {
//     x = x.toString()
//     for (let i = 0; i < x.length; i++) {
//         if (i < x.length - 1 - i && x[i] !== x[x.length - 1 - i]) {            
//                 return false
//         }
//     }
//     return true
// };
// 
// console.log(isPalindrome(121))
// console.log(isPalindrome(-121))
// console.log(isPalindrome(10))

var isPalindrome = function (x) {
    if (x < 0) return false
    let n = 0;
    let temp = x;
    while (temp > 0) {
        n = 10 * n + temp % 10
        temp = Math.floor(temp / 10) 
    }
    return n === x
};

console.log(isPalindrome(121))
console.log(isPalindrome(-121))
console.log(isPalindrome(10))
