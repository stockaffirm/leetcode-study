# Snapchat
S = lambda call: "Solution()." + call
UNORD = set()
D = {
803: S("hitBricks([[1,0,0,0],[1,1,1,0]],[[1,0]])"),
439: S("parseTernary('F?1:T?4:5')"),
527: S("wordsAbbreviation(['like','god','internal','me','internet','interval','intension','face','intrusion'])"),
1754: S("largestMerge('cabaa','bcaaa')"),
964: S("leastOpsExpressTarget(3,19)"),
2316: S("countPairs(7,[[0,2],[0,5],[2,4],[1,6],[5,4]])"),
1074: S("numSubmatrixSumTarget([[0,1,0],[1,1,1],[0,1,0]],0)"),
3014: S("minimumPushes('abcde')"),
351: S("numberOfPatterns(1,1)"),
}
D2 = {
803: (S("hitBricks([[1,0,0,0],[1,1,0,0]],[[1,1],[1,0]])"), "Nothing falls.", "no falls"),
439: (S("parseTernary('T?T?F:5:3')"), "Nested true branch.", "nested"),
527: (S("wordsAbbreviation(['abcdefg','abccefg','abcckkg'])"), "Common prefixes force longer ones.", "shared prefixes"),
1754: (S("largestMerge('abcabc','abdcaba')"), "Equal starts need whole-suffix compares.", "equal starts"),
964: (S("leastOpsExpressTarget(5,501)"), "8 operators.", "x = 5"),
2316: (S("countPairs(3,[[0,1],[0,2],[1,2]])"), "One component.", "all connected"),
1074: (S("numSubmatrixSumTarget([[1,-1],[-1,1]],0)"), "Five submatrices sum to 0.", "negatives"),
3014: (S("minimumPushes('xyzxyzxyzxyz')"), "Three letters on separate keys.", "repeats"),
351: (S("numberOfPatterns(1,2)"), "9 + 56 = 65.", "up to length 2"),
}
