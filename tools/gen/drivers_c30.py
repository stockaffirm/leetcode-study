# Meta (6/8)
S = lambda call: "Solution()." + call
UNORD = set()
SER = "def ser(t):\n    out = []\n    q = deque([t])\n    while q:\n        n = q.popleft()\n        if n is None:\n            out.append(None)\n            continue\n        out.append(n.val)\n        q.append(n.left)\n        q.append(n.right)\n    while out and out[-1] is None: out.pop()\n    return out\n"
CYC = "h=mk_list(%s)\nnodes=[]\np=h\nwhile p:\n    nodes.append(p)\n    p=p.next\nnodes[-1].next=nodes[%d]\nr=Solution().detectCycle(h)\nRESULT=r.val"
ITEMS = "[['phone','blue','pixel'],['computer','silver','lenovo'],['phone','gold','iphone']]"
D = {
1773: S("countMatches(%s,'color','silver')" % ITEMS),
1976: S("countPaths(7,[[0,6,7],[0,1,2],[1,2,3],[1,3,3],[6,3,3],[3,5,1],[6,5,1],[2,5,1],[0,4,5],[4,6,2]])"),
2553: S("separateDigits([13,25,83,77])"),
1283: S("smallestDivisor([1,2,5,9],6)"),
142: CYC % ("[3,2,0,-4]", 1),
144: "r=mk_tree([1,None,2,3])\nRESULT=Solution().preorderTraversal(r)",
285: "r=mk_tree([2,1,3])\nres=Solution().inorderSuccessor(r,r.left)\nRESULT=res.val",
316: S("removeDuplicateLetters('cbacdcbc')"),
326: S("isPowerOfThree(27)"),
407: S("trapRainWater([[1,4,3,1,3,2],[3,2,1,3,2,4],[2,3,3,2,3,1]])"),
461: S("hammingDistance(1,4)"),
750: S("countCornerRectangles([[1,0,0,1,0],[0,0,1,0,1],[0,0,0,1,0],[1,0,1,0,1]])"),
801: S("minSwap([1,3,5,4],[1,2,3,7])"),
844: S("backspaceCompare('ab#c','ad#c')"),
893: S("numSpecialEquivGroups(['abcd','cdab','cbad','xyzz','zzxy','zzyx'])"),
998: SER + "r=mk_tree([4,1,3,None,None,2])\nRESULT=ser(Solution().insertIntoMaxTree(r,5))",
1033: S("numMovesStones(1,2,5)"),
1040: S("numMovesStonesII([7,4,9])"),
1248: S("numberOfSubarrays([1,1,2,1,1],3)"),
1344: S("angleClock(12,30)"),
1351: S("countNegatives([[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]])"),
}
D2 = {
1773: (S("countMatches(%s,'type','phone')" % ITEMS), "Two phones.", "match on type"),
1976: (S("countPaths(1,[])"), "Already at the destination: one (empty) way.", "a single node"),
2553: (S("separateDigits([7,1,3,9])"), "Single-digit numbers stay as they are.", "single digits"),
1283: (S("smallestDivisor([44,22,33,11,1],5)"), "Each number must give 1 → the divisor must be at least 44.", "tight threshold"),
142: ("h=mk_list([1,2])\nRESULT=Solution().detectCycle(h)", "No cycle: None.", "no cycle"),
144: ("r=mk_tree([])\nRESULT=Solution().preorderTraversal(r)", "An empty tree.", "empty tree"),
285: ("r=mk_tree([2,1,3])\nres=Solution().inorderSuccessor(r,r.right)\nRESULT=res", "3 is the largest value: no successor.", "no successor"),
316: (S("removeDuplicateLetters('bcabc')"), "'abc' is the smallest result.", "a small string"),
326: (S("isPowerOfThree(45)"), "45 = 3² · 5: false.", "not a power"),
407: (S("trapRainWater([[3,3,3,3,3],[3,2,2,2,3],[3,2,1,2,3],[3,2,2,2,3],[3,3,3,3,3]])"), "A pit of 2s with a 1 inside holds 10 units.", "a basin"),
461: (S("hammingDistance(3,1)"), "3 = 11 and 1 = 01 differ in one bit.", "one different bit"),
750: (S("countCornerRectangles([[1,1,1,1]])"), "Only one row: no rectangle.", "a single row"),
801: (S("minSwap([0,3,5,8,9],[2,1,4,6,9])"), "Swapping index 1 makes both rows increasing.", "swap in the middle"),
844: (S("backspaceCompare('a#c','b')"), "'a#c' is 'c' but the other is 'b'.", "different results"),
893: (S("numSpecialEquivGroups(['abc','acb','bac','bca','cab','cba'])"), "Letters can only swap within even or odd positions: 3 groups.", "permutations"),
998: (SER + "r=mk_tree([5,2,4,None,1])\nRESULT=ser(Solution().insertIntoMaxTree(r,3))", "3 is smaller than 4, so it goes below it.", "a smaller value"),
1033: (S("numMovesStones(4,3,2)"), "Already consecutive.", "already consecutive"),
1040: (S("numMovesStonesII([6,5,4,3,10])"), "Minimum 2 (the far stone needs two moves), maximum 3.", "a far stone"),
1248: (S("numberOfSubarrays([2,4,6],1)"), "No odd numbers at all.", "no odd numbers"),
1344: (S("angleClock(3,15)"), "Hour hand at 97.5°, minute hand at 90°.", "hands close together"),
1351: (S("countNegatives([[3,2],[1,0]])"), "No negative numbers.", "no negatives"),
}
