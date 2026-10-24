# Meta (7/8)
S = lambda call: "Solution()." + call
UNORD = set()
SER = "def ser(t):\n    out = []\n    q = deque([t])\n    while q:\n        n = q.popleft()\n        if n is None:\n            out.append(None)\n            continue\n        out.append(n.val)\n        q.append(n.left)\n        q.append(n.right)\n    while out and out[-1] is None: out.pop()\n    return out\n"
SETP = "def setp(n, p):\n    if n:\n        n.parent = p\n        setp(n.left, n)\n        setp(n.right, n)\n"
TOUR = "[[0,11,16,5,20],[17,4,19,10,15],[12,1,8,21,6],[3,18,23,14,9],[24,13,2,7,22]]"
D = {
1352: "p=ProductOfNumbers()\nfor x in (3,0,2,5,4): p.add(x)\nRESULT=[p.getProduct(2),p.getProduct(3),p.getProduct(4),p.add(8),p.getProduct(2)]",
1460: S("canBeEqual([1,2,3,4],[2,4,1,3])"),
1453: S("numPoints([[-2,0],[2,0],[0,2],[0,-2]],2)"),
1781: S("beautySum('aabcb')"),
1826: S("badSensor([2,3,4,5],[2,1,3,4])"),
1947: S("maxCompatibilitySum([[1,1,0],[1,0,1],[0,0,1]],[[1,0,0],[0,0,1],[1,1,0]])"),
1973: "r=mk_tree([10,3,4,2,1])\nRESULT=Solution().equalToDescendants(r)",
2014: S("longestSubsequenceRepeatedK('letsleetcode',2)"),
2289: S("totalSteps([5,3,4,4,7,3,6,11,8,5,11])"),
2452: S("twoEditWords(['word','note','ants','wood'],['wood','joke','moat'])"),
2596: S("checkValidGrid(%s)" % TOUR),
1832: S("checkIfPangram('thequickbrownfoxjumpsoverthelazydog')"),
1545: S("findKthBit(4,11)"),
856: S("scoreOfParentheses('(()(()))')"),
510: SETP + "r=mk_tree([2,1,3])\nsetp(r,None)\nres=Solution().inorderSuccessor(r.left)\nRESULT=res.val",
1319: S("makeConnected(4,[[0,1],[0,2],[1,2]])"),
867: S("transpose([[1,2,3],[4,5,6],[7,8,9]])"),
132: S("minCut('aab')"),
1470: S("shuffle([2,5,1,3,4,7],3)"),
2094: S("findEvenNumbers([2,1,3,0])"),
3304: S("kthCharacter(5)"),
}
D2 = {
1352: ("p=ProductOfNumbers()\nRESULT=[p.add(1),p.getProduct(1),p.add(0),p.getProduct(1)]", "After a 0 the last number is 0.", "a zero at the end"),
1460: (S("canBeEqual([3,7,9],[3,7,11])"), "11 is not in the target.", "different numbers"),
1453: (S("numPoints([[-3,0],[3,0],[2,6],[5,4],[0,9],[7,8]],5)"), "One board covers 5 of the 6 darts.", "darts spread out"),
1781: (S("beautySum('aabcbaa')"), "More repeated letters give more beautiful substrings: 17.", "a longer string"),
1826: (S("badSensor([2,3,2,2,3,2],[2,3,2,3,2,7])"), "From index 3 sensor 2's readings are sensor 1's shifted by one → 2.", "the other sensor"),
1947: (S("maxCompatibilitySum([[0,0],[0,0],[0,0]],[[1,1],[1,1],[1,1]])"), "No answer ever matches: 0.", "nothing matches"),
1973: ("r=mk_tree([0])\nRESULT=Solution().equalToDescendants(r)", "A leaf with 0 equals the empty sum 0.", "a zero leaf"),
2014: (S("longestSubsequenceRepeatedK('bb',2)"), "'b' twice is 'bb'.", "tiny string"),
2289: (S("totalSteps([4,5,7,7,13])"), "Already non-decreasing: 0 steps.", "already sorted"),
2452: (S("twoEditWords(['yes'],['not'])"), "'yes' and 'not' differ in 3 letters.", "no close word"),
2596: (S("checkValidGrid([[0,3,6],[5,8,1],[2,7,4]])"), "From 0 there is no knight jump to 1.", "not a knight's tour"),
1832: (S("checkIfPangram('leetcode')"), "Most letters are missing.", "not a pangram"),
1545: (S("findKthBit(3,1)"), "The first bit is always 0.", "first bit"),
856: (S("scoreOfParentheses('()')"), "One pair: 1.", "a single pair"),
510: (SETP + "r=mk_tree([2,1,3])\nsetp(r,None)\nres=Solution().inorderSuccessor(r.right)\nRESULT=res", "3 is the largest: no successor.", "no successor"),
1319: (S("makeConnected(6,[[0,1],[0,2],[0,3],[1,2]])"), "4 cables cannot connect 6 computers (needs 5).", "not enough cables"),
867: (S("transpose([[1,2,3],[4,5,6]])"), "A 2 × 3 matrix becomes 3 × 2.", "not square"),
132: (S("minCut('ab')"), "Two different letters need one cut.", "no palindrome longer than 1"),
1470: (S("shuffle([1,1,2,2],2)"), "1,2,1,2.", "four numbers"),
2094: (S("findEvenNumbers([2,2,8,8,2])"), "Only the digits 2 and 8 exist, with at most three 2s and two 8s.", "repeated digits"),
3304: (S("kthCharacter(10)"), "The 10th letter is 'c'.", "a later position"),
}
