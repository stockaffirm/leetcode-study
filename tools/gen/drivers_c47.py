# Intuit
S = lambda call: "Solution()." + call
UNORD = set()
D = {
3619: S("countIslands([[0,2,1,0,0],[0,5,0,0,5],[0,0,1,0,0],[0,1,4,7,0],[0,2,0,0,8]],5)"),
3148: S("maxScore([[9,5,7,3],[8,9,6,1],[6,7,14,3],[2,5,3,1]])"),
2915: S("lengthOfLongestSubsequence([1,2,3,4,5],9)"),
2234: S("maximumBeauty([1,3,1,1],7,6,12,1)"),
3088: S("makeAntiPalindrome('abca')"),
2453: S("destroyTargets([3,7,8,1,1,5],2)"),
2489: S("fixedRatio('0110011',1,2)"),
770: S("basicCalculatorIV('e + 8 - a + 5',['e'],[1])"),
1411: S("numOfWays(2)"),
3719: S("longestBalanced([2,5,4,3])"),
1760: S("minimumSize([9],2)"),
1647: S("minDeletions('aaabbbcc')"),
546: S("removeBoxes([1,3,2,2,2,3,4,3,1])"),
}
D2 = {
3619: (S("countIslands([[3,0,3,0],[0,3,0,3],[3,0,3,0],[0,3,0,3]],3)"), "Eight single-cell islands each worth 3.", "separate cells"),
3148: (S("maxScore([[4,3,2],[3,2,1]])"), "Every move loses points; the best loses 1.", "negative answer"),
2915: (S("lengthOfLongestSubsequence([1,1,5,4,5],3)"), "No subset adds to 3.", "impossible"),
2234: (S("maximumBeauty([2,4,5,3],10,5,2,6)"), "Complete three gardens and level the last.", "second sample"),
3088: (S("makeAntiPalindrome('cccd')"), "Three c's cannot all avoid each other.", "impossible"),
2453: (S("destroyTargets([1,3,5,2,4,6],2)"), "Odd remainder and even remainder tie; the smaller seed wins.", "tie"),
2489: (S("fixedRatio('10101',3,1)"), "No substring has three 0s per 1.", "no match"),
770: (S("basicCalculatorIV('(e + 8) * (e - 8)',[],[])"), "e² − 64.", "product"),
1411: (S("numOfWays(5000)"), "A large n.", "large n"),
3719: (S("longestBalanced([3,2,2,5,4])"), "Whole array: evens {2,4}, odds {3,5}.", "repeated values"),
1760: (S("minimumSize([2,4,8,2],4)"), "Penalty 2.", "several bags"),
1647: (S("minDeletions('ceabaacb')"), "Two deletions.", "mixed letters"),
546: (S("removeBoxes([1,1,1])"), "All three at once: 9.", "one colour"),
}
