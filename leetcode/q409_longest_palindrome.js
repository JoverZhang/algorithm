/**
 * @param {string} s
 * @return {number}
 */

// 1. object

// const longestPalindrome = function (s) {
//     let sum = 0
//     const map = {}
//     for (const i of s) {
//         map[i] = map[i] ? map[i] + 1 : 1
//         if (map[i] % 2 === 0) sum += 2
//     }
//     return sum === s.length? sum : sum + 1
// };

// 2. hash table - set

const longestPalindrome = function (s) {
    const set = new Set()
    let total = 0
    for (let i = 0; i < s.length; i++) {
        if (set.has(s[i])) {
            total += 2
            set.delete(s[i])
        } else {
            set.add(s[i])
        }
    }
    return total + (set.size ? 1 : 0)
}

console.log(longestPalindrome("abccccdd"))
console.log(longestPalindrome("civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth"))
