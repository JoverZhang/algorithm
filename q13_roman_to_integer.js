// var romanToInt = function (s) {
//     let sum = 0
//     for (let i = s.length - 1; i >= 0; i--) {
//         switch (s[i]) {
//             case 'M':
//                 sum += 1000
//                 break;
//             case 'D':
//                 sum += 500
//                 break;
//             case 'C':
//                 sum += sum >= 500 ? -100 : 100    //CD,CM
//                 break;
//             case 'L':
//                 sum += 50
//                 break;
//             case 'X':
//                 sum += sum >= 50 ? -10 : 10     //XL,XC
//                 break;
//             case 'V':
//                 sum += 5
//                 break;
//             case 'I':
//                 sum += sum >= 5 ? -1 : 1     //IV,IX
//                 break;
//         }
//     }
//     return sum
// };

let numbers = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
}

var romanToInt = function (s) {
    let res = 0
    for (let i = 0; i < s.length; i++) {
        let currNumber = numbers[s[i]]
        let nextNumber = numbers[s[i + 1]]
        if (currNumber < nextNumber) {
            res = res + nextNumber - currNumber
            i++
        } else {
            res = res + currNumber
        }
    }
    return res
}

console.log(romanToInt("III"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));
