# PayPal
S = lambda call: "Solution()." + call
UNORD = set()
D = {
1160: S("countCharacters(['cat','bt','hat','tree'],'atach')"),
2554: S("maxCount([1,6,5],5,6)"),
1969: S("minNonZeroProduct(3)"),
1999: S("findInteger(2,0,2)"),
2056: S("countCombinations(['rook'],[[1,1]])"),
2183: S("countPairs([1,2,3,4,5],2)"),
2586: S("vowelStrings(['are','amy','u'],0,2)"),
2524: S("maxFrequencyScore([1,1,1,2,1,2],3)"),
2557: S("maxCount([1,6,5],5,6)"),
1589: S("maxSumRangeQuery([1,2,3,4,5],[[1,3],[0,1]])"),
851: S("loudAndRich([[1,0],[2,1],[3,1],[3,7],[4,3],[5,3],[6,3]],[3,2,5,4,6,1,7,0])"),
}
D2 = {
1160: (S("countCharacters(['hello','world','leetcode'],'welldonehoneyr')"), "'hello' and 'world' can be formed.", "two words"),
2554: (S("maxCount([11],7,50)"), "Take all of 1-7.", "everything fits"),
1969: (S("minNonZeroProduct(2)"), "3 × 2 = 6.", "p = 2"),
1999: (S("findInteger(3,4,2)"), "24 is the smallest.", "digits 4 and 2"),
2056: (S("countCombinations(['queen'],[[1,1]])"), "A queen in the corner reaches 22 squares.", "queen"),
2183: (S("countPairs([1,2,3,4],5)"), "No product is divisible by 5.", "none"),
2586: (S("vowelStrings(['hey','aeo','mu','ooo','artro'],1,4)"), "Three words qualify.", "inner range"),
2524: (S("maxFrequencyScore([1,1,1,1,1,1,1],4)"), "1 to any power is 1.", "all ones"),
2557: (S("maxCount([4,3,5,6],7,18)"), "Take 1, 2 and 7.", "gap before n"),
1589: (S("maxSumRangeQuery([1,2,3,4,5,6],[[0,1]])"), "Put 6 and 5 in the two requested slots.", "single request"),
851: (S("loudAndRich([],[0])"), "One person alone.", "no edges"),
}
