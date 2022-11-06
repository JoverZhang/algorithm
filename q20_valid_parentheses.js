// var isValid = function (s) {
//     let tempArr = []
//     for (let i = 0; i < s.length; i++) {
//         if (s[0] === ')' || s[0] === '}' || s[0] === ']' || s.length === 1) return false
//         if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
//             tempArr.push(s[i])
//         } else if (s[i] === ')') {
//             if (tempArr[tempArr.length - 1] && tempArr[tempArr.length - 1] === '(') {
//                 tempArr = tempArr.slice(0, tempArr.length -1)
//                 continue
//             }
//             return false
//         } else if (s[i] === '}') {
//             if (tempArr[tempArr.length - 1] && tempArr[tempArr.length - 1] === '{') {
//                 tempArr = tempArr.slice(0, tempArr.length -1)
//                 continue
//             }
//             return false
//         } else {
//             if (tempArr[tempArr.length - 1] && tempArr[tempArr.length - 1] === '[') {
//                 tempArr = tempArr.slice(0, tempArr.length -1)
//                 continue
//             }
//             return false
//         }
//     }
//     return tempArr.length === 0
// };

// var isValid = function (s) {
//     let tempStack = []
//     for (let item of s) {
//         switch (item) {
//             case '(':
//                 tempStack.push(')')
//                 break
//             case '{':
//                 tempStack.push('}')
//                 break
//             case '[':
//                 tempStack.push(']')
//                 break
//             case ')':
//             case '}':
//             case ']':
//                 if (tempStack.pop() !== item) return false
//                 break
//         }
//     }
//     return tempStack.length === 0
// }

var isValid = function (s) {
    let tempStack = []
    if (s.length % 2 !== 0) return false
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            tempStack.push(')')
        } else if (s[i] === '{') {
            tempStack.push('}')
        } else if (s[i] === '[') {
            tempStack.push(']')
        } else if(s.length === 0 || tempStack.pop() !== s[i]){
            return false
        }
    }
    return tempStack.length === 0
}

console.log(isValid('()'));
console.log(isValid('()[]{}'));
console.log(isValid('(]'));
console.log(isValid('{[]}'));
