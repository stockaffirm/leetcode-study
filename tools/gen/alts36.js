module.exports=({alt})=>{
const C=s=>s.replace(/^\n/,"").replace(/\n$/,"").split("\n");
// ---- Meta (3/8)
alt(247,{name:"Grow layer by layer from the centre",tag:"Alternative",time:"O(5^(n/2))",space:"O(5^(n/2))",explain:"Start with the middle (empty or 0/1/8) and wrap every number in a pair, two digits at a time.",code:C(`
class Solution:
    def findStrobogrammatic(self, n):
        pairs = (("0", "0"), ("1", "1"), ("6", "9"), ("8", "8"), ("9", "6"))
        cur = [""] if n % 2 == 0 else ["0", "1", "8"]
        for length in range(n % 2 + 2, n + 1, 2):
            nxt = []
            for s in cur:
                for a, b in pairs:
                    if length == n and a == "0":
                        continue
                    nxt.append(a + s + b)
            cur = nxt
        return cur
`)});
alt(2149,{name:"Split, then interleave",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"Collect positives and negatives separately and alternate them.",code:C(`
class Solution:
    def rearrangeArray(self, nums):
        pos = [x for x in nums if x > 0]
        neg = [x for x in nums if x < 0]
        res = []
        for a, b in zip(pos, neg):
            res += [a, b]
        return res
`)});
alt(572,{name:"Serialize both trees and search the text",tag:"Alternative",time:"O(m + n)",space:"O(m + n)",explain:"Write each tree as a string with markers for missing children; subRoot is a subtree exactly when its string occurs inside the other.",code:C(`
class Solution:
    def isSubtree(self, root, subRoot):
        def ser(n):
            return "^" + str(n.val) + "," + ser(n.left) + "," + ser(n.right) if n else "#"
        return ser(subRoot) in ser(root)
`)});
alt(653,{name:"In-order list + two pointers",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"The in-order walk of a BST is sorted, so look for the pair with two pointers.",code:C(`
class Solution:
    def findTarget(self, root, k):
        vals = []
        def inorder(node):
            if node:
                inorder(node.left)
                vals.append(node.val)
                inorder(node.right)
        inorder(root)
        l, r = 0, len(vals) - 1
        while l < r:
            s = vals[l] + vals[r]
            if s == k:
                return True
            if s < k:
                l += 1
            else:
                r -= 1
        return False
`)});
alt(493,{name:"Check every pair",tag:"Brute force",time:"O(n²)",space:"O(1)",explain:"Compare each number with every number after it.",code:C(`
class Solution:
    def reversePairs(self, nums):
        n = len(nums)
        return sum(1 for i in range(n) for j in range(i + 1, n) if nums[i] > 2 * nums[j])
`)});
alt(912,{name:"Heap sort",tag:"Alternative",time:"O(n log n)",space:"O(n)",explain:"Push everything on a heap and pop the numbers in increasing order.",code:C(`
class Solution:
    def sortArray(self, nums):
        h = list(nums)
        heapify(h)
        return [heappop(h) for _ in range(len(h))]
`)});
alt(1108,{name:"Split and join",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"Cut the address at the dots and join the parts with '[.]'.",code:C(`
class Solution:
    def defangIPaddr(self, address):
        return "[.]".join(address.split("."))
`)});
alt(1480,{name:"Add into the same array",tag:"Alternative",time:"O(n)",space:"O(1)",explain:"Each entry adds the previous one, in place.",code:C(`
class Solution:
    def runningSum(self, nums):
        for i in range(1, len(nums)):
            nums[i] += nums[i - 1]
        return nums
`)});
alt(115,{name:"Memoized recursion",tag:"Alternative",time:"O(|s|·|t|)",space:"O(|s|·|t|)",explain:"go(i, j) counts the ways to form t[j:] from s[i:].",code:C(`
class Solution:
    def numDistinct(self, s, t):
        @lru_cache(None)
        def go(i, j):
            if j == len(t):
                return 1
            if i == len(s):
                return 0
            res = go(i + 1, j)
            if s[i] == t[j]:
                res += go(i + 1, j + 1)
            return res
        return go(0, 0)
`)});
alt(95,{name:"DP on sizes with shifted copies",tag:"Alternative",time:"O(Catalan(n))",space:"O(Catalan(n))",explain:"Trees on 1…m are built from trees on 1…i−1 and copies of trees on 1…m−i whose values are shifted by i.",code:C(`
class Solution:
    def generateTrees(self, n):
        if n == 0:
            return []
        def clone(t, off):
            return None if not t else TreeNode(t.val + off, clone(t.left, off), clone(t.right, off))
        dp = [[None]]
        for m in range(1, n + 1):
            dp.append([TreeNode(i, l, clone(r, i)) for i in range(1, m + 1)
                       for l in dp[i - 1] for r in dp[m - i]])
        return dp[n]
`)});
alt(404,{name:"Iterative with a stack",tag:"Alternative",time:"O(n)",space:"O(h)",explain:"The same idea without recursion: look at the left child when popping a node.",code:C(`
class Solution:
    def sumOfLeftLeaves(self, root):
        total = 0
        stack = [root] if root else []
        while stack:
            node = stack.pop()
            if node.left:
                if not node.left.left and not node.left.right:
                    total += node.left.val
                else:
                    stack.append(node.left)
            if node.right:
                stack.append(node.right)
        return total
`)});
alt(989,{name:"Python big integers",tag:"Pythonic",time:"O(n)",space:"O(n)",explain:"Turn the digits into a number, add k and turn it back into digits.",code:C(`
class Solution:
    def addToArrayForm(self, num, k):
        return [int(c) for c in str(int("".join(map(str, num))) + k)]
`)});
alt(1266,{name:"Diagonal steps plus straight steps",tag:"Alternative",time:"O(n)",space:"O(1)",explain:"Go diagonally as long as both coordinates differ, then straight for the rest.",code:C(`
class Solution:
    def minTimeToVisitAllPoints(self, points):
        t = 0
        for (x1, y1), (x2, y2) in zip(points, points[1:]):
            dx, dy = abs(x2 - x1), abs(y2 - y1)
            diag = min(dx, dy)
            t += diag + (dx - diag) + (dy - diag)
        return t
`)});
alt(1662,{name:"Compare letter by letter without joining",tag:"Alternative",time:"O(n)",space:"O(1)",explain:"Stream the letters of both arrays and compare them pairwise.",code:C(`
class Solution:
    def arrayStringsAreEqual(self, word1, word2):
        def chars(ws):
            for w in ws:
                yield from w
        return all(x == y for x, y in zip_longest(chars(word1), chars(word2)))
`)});
alt(1922,{name:"Multiply position by position",tag:"Brute force",time:"O(n)",space:"O(1)",explain:"Multiply the number of choices of every position (5 for even, 4 for odd).",code:C(`
class Solution:
    def countGoodNumbers(self, n):
        MOD = 10 ** 9 + 7
        res = 1
        for i in range(n):
            res = res * (5 if i % 2 == 0 else 4) % MOD
        return res
`)});
alt(168,{name:"Recursion",tag:"Alternative",time:"O(log n)",space:"O(log n)",explain:"The title of n is the title of (n−1) // 26 followed by one more letter.",code:C(`
class Solution:
    def convertToTitle(self, columnNumber):
        if columnNumber == 0:
            return ""
        n = columnNumber - 1
        return self.convertToTitle(n // 26) + chr(65 + n % 26)
`)});
alt(343,{name:"DP over splits",tag:"Brute force",time:"O(n²)",space:"O(n)",explain:"The best product for i is the best over all first cuts j, where each part is either kept whole or split further.",code:C(`
class Solution:
    def integerBreak(self, n):
        dp = [0] * (n + 1)
        dp[1] = 1
        for i in range(2, n + 1):
            for j in range(1, i):
                dp[i] = max(dp[i], max(j, dp[j]) * max(i - j, dp[i - j]))
        return dp[n]
`)});
alt(442,{name:"Count the numbers",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"Use a counter and keep the numbers that appear twice.",code:C(`
class Solution:
    def findDuplicates(self, nums):
        return [x for x, c in Counter(nums).items() if c == 2]
`)});
alt(1021,{name:"Cut into primitives and trim",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"Find where each primitive piece ends (depth back to 0) and drop its first and last bracket.",code:C(`
class Solution:
    def removeOuterParentheses(self, s):
        res = []
        depth = start = 0
        for i, ch in enumerate(s):
            depth += 1 if ch == "(" else -1
            if depth == 0:
                res.append(s[start + 1:i])
                start = i + 1
        return "".join(res)
`)});
alt(1482,{name:"Test each bloom day in order",tag:"Brute force",time:"O(n · distinct days)",space:"O(n)",explain:"Try the distinct bloom days from the smallest; the first one that gives m bouquets is the answer.",code:C(`
class Solution:
    def minDays(self, bloomDay, m, k):
        if m * k > len(bloomDay):
            return -1
        def can(day):
            bouquets = run = 0
            for b in bloomDay:
                if b <= day:
                    run += 1
                    if run == k:
                        bouquets += 1
                        run = 0
                else:
                    run = 0
            return bouquets >= m
        for d in sorted(set(bloomDay)):
            if can(d):
                return d
`)});
alt(83,{name:"Recursion",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"Clean the rest of the list first; then drop the head if it equals the next one.",code:C(`
class Solution:
    def deleteDuplicates(self, head):
        if not head or not head.next:
            return head
        head.next = self.deleteDuplicates(head.next)
        return head.next if head.val == head.next.val else head
`)});
alt(541,{name:"Join slices",tag:"Pythonic",time:"O(n)",space:"O(n)",explain:"For each block of 2k reverse the first k letters and keep the next k.",code:C(`
class Solution:
    def reverseStr(self, s, k):
        return "".join(s[i:i + k][::-1] + s[i + k:i + 2 * k] for i in range(0, len(s), 2 * k))
`)});
alt(368,{name:"Memoized longest chain from each start",tag:"Alternative",time:"O(n²)",space:"O(n²)",explain:"go(i) is the longest divisibility chain starting at nums[i].",code:C(`
class Solution:
    def largestDivisibleSubset(self, nums):
        nums.sort()
        @lru_cache(None)
        def go(i):
            best = ()
            for j in range(i + 1, len(nums)):
                if nums[j] % nums[i] == 0:
                    c = go(j)
                    if len(c) > len(best):
                        best = c
            return (nums[i],) + best
        return list(max((go(i) for i in range(len(nums))), key=len))
`)});
alt(113,{name:"Iterative DFS with a stack",tag:"Alternative",time:"O(n²)",space:"O(n)",explain:"Keep (node, path, remaining sum) on a stack instead of using recursion.",code:C(`
class Solution:
    def pathSum(self, root, targetSum):
        res = []
        stack = [(root, [], targetSum)] if root else []
        while stack:
            node, path, left = stack.pop()
            path = path + [node.val]
            left -= node.val
            if not node.left and not node.right and left == 0:
                res.append(path)
            if node.right:
                stack.append((node.right, path, left))
            if node.left:
                stack.append((node.left, path, left))
        return res
`)});
alt(377,{name:"Memoized recursion",tag:"Alternative",time:"O(target · n)",space:"O(target)",explain:"ways(t) tries every number as the last one.",code:C(`
class Solution:
    def combinationSum4(self, nums, target):
        @lru_cache(None)
        def ways(t):
            if t == 0:
                return 1
            return sum(ways(t - x) for x in nums if x <= t)
        return ways(target)
`)});
alt(674,{name:"DP array",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"dp[i] is the length of the run ending at i.",code:C(`
class Solution:
    def findLengthOfLCIS(self, nums):
        dp = [1] * len(nums)
        for i in range(1, len(nums)):
            if nums[i] > nums[i - 1]:
                dp[i] = dp[i - 1] + 1
        return max(dp)
`)});
};
