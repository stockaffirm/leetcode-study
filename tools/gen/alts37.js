module.exports=({alt})=>{
const C=s=>s.replace(/^\n/,"").replace(/\n$/,"").split("\n");
// ---- Meta (4/8)
alt(639,{name:"Expand every '*' and count plain decodings",tag:"Brute force",time:"O(9^stars · n)",space:"O(n)",explain:"Try every digit for each star, count the decodings of the ordinary string, and add them all up.",code:C(`
class Solution:
    def numDecodings(self, s):
        MOD = 10 ** 9 + 7
        def plain(t):
            dp = [1] + [0] * len(t)
            for i in range(1, len(t) + 1):
                if t[i - 1] != "0":
                    dp[i] += dp[i - 1]
                if i >= 2 and 10 <= int(t[i - 2:i]) <= 26:
                    dp[i] += dp[i - 2]
            return dp[len(t)]
        total = 0
        for combo in product("123456789", repeat=s.count("*")):
            it = iter(combo)
            t = "".join(next(it) if ch == "*" else ch for ch in s)
            total += plain(t)
        return total % MOD
`)});
alt(682,{name:"List with a running total",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"Keep the scores in a list and update the total as scores are added or removed.",code:C(`
class Solution:
    def calPoints(self, operations):
        scores = []
        total = 0
        for op in operations:
            if op == "C":
                total -= scores.pop()
                continue
            if op == "D":
                v = 2 * scores[-1]
            elif op == "+":
                v = scores[-1] + scores[-2]
            else:
                v = int(op)
            scores.append(v)
            total += v
        return total
`)});
alt(907,{name:"Check every subarray",tag:"Brute force",time:"O(n²)",space:"O(1)",explain:"Extend each start to the right, keeping the running minimum.",code:C(`
class Solution:
    def sumSubarrayMins(self, arr):
        total = 0
        for i in range(len(arr)):
            m = arr[i]
            for j in range(i, len(arr)):
                m = min(m, arr[j])
                total += m
        return total % (10 ** 9 + 7)
`)});
alt(1331,{name:"Sort the pairs",tag:"Alternative",time:"O(n log n)",space:"O(n)",explain:"Sort (value, index) pairs and hand out ranks, repeating the rank for equal values.",code:C(`
class Solution:
    def arrayRankTransform(self, arr):
        res = [0] * len(arr)
        rank = 0
        prev = None
        for v, i in sorted((v, i) for i, v in enumerate(arr)):
            if v != prev:
                rank += 1
                prev = v
            res[i] = rank
        return res
`)});
alt(1379,{name:"BFS over both trees",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"Keep pairs (original node, cloned node) in a queue.",code:C(`
class Solution:
    def getTargetCopy(self, original, cloned, target):
        q = deque([(original, cloned)])
        while q:
            o, c = q.popleft()
            if o is target:
                return c
            if o.left:
                q.append((o.left, c.left))
            if o.right:
                q.append((o.right, c.right))
`)});
alt(1614,{name:"Stack of open brackets",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"Push '(' and pop on ')'. The deepest the stack gets is the answer.",code:C(`
class Solution:
    def maxDepth(self, s):
        st = []
        best = 0
        for ch in s:
            if ch == "(":
                st.append(ch)
                best = max(best, len(st))
            elif ch == ")":
                st.pop()
        return best
`)});
alt(1748,{name:"Count with list.count",tag:"Brute force",time:"O(n²)",space:"O(n)",explain:"For every different number check how often it occurs.",code:C(`
class Solution:
    def sumOfUnique(self, nums):
        return sum(x for x in set(nums) if nums.count(x) == 1)
`)});
alt(2210,{name:"Remove equal neighbours first",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"Squash runs of equal numbers into one, then every inner element is a hill or a valley or neither.",code:C(`
class Solution:
    def countHillValley(self, nums):
        a = [x for i, x in enumerate(nums) if i == 0 or x != nums[i - 1]]
        res = 0
        for i in range(1, len(a) - 1):
            if (a[i] > a[i - 1] and a[i] > a[i + 1]) or (a[i] < a[i - 1] and a[i] < a[i + 1]):
                res += 1
        return res
`)});
alt(2965,{name:"Sum formulas",tag:"Alternative",time:"O(n²)",space:"O(n²)",explain:"The repeated value is (sum − sum of distinct); the missing one is (expected total − sum of distinct).",code:C(`
class Solution:
    def findMissingAndRepeatedValues(self, grid):
        flat = [x for row in grid for x in row]
        n2 = len(grid) ** 2
        distinct = sum(set(flat))
        return [sum(flat) - distinct, n2 * (n2 + 1) // 2 - distinct]
`)});
alt(441,{name:"Subtract row by row",tag:"Brute force",time:"O(√n)",space:"O(1)",explain:"Fill row 1, then row 2 … while enough coins remain.",code:C(`
class Solution:
    def arrangeCoins(self, n):
        k = 0
        while n >= k + 1:
            k += 1
            n -= k
        return k
`)});
alt(159,{name:"Remember the last position of each letter",tag:"Alternative",time:"O(n)",space:"O(1)",explain:"Keep the last index of the two letters in the window; when a third appears drop the one whose last index is smaller.",code:C(`
class Solution:
    def lengthOfLongestSubstringTwoDistinct(self, s):
        last = {}
        left = best = 0
        for i, ch in enumerate(s):
            last[ch] = i
            if len(last) > 2:
                drop = min(last, key=last.get)
                left = last.pop(drop) + 1
            best = max(best, i - left + 1)
        return best
`)});
alt(275,{name:"Linear scan",tag:"Brute force",time:"O(n)",space:"O(1)",explain:"Go through the sorted citations and stop at the first paper with enough citations.",code:C(`
class Solution:
    def hIndex(self, citations):
        n = len(citations)
        for i, c in enumerate(citations):
            if c >= n - i:
                return n - i
        return 0
`)});
alt(455,{name:"Check every child against every cookie",tag:"Brute force",time:"O(n·m)",space:"O(m)",explain:"For each child (least greedy first) take the smallest unused cookie that is big enough.",code:C(`
class Solution:
    def findContentChildren(self, g, s):
        used = [False] * len(s)
        s2 = sorted(range(len(s)), key=lambda i: s[i])
        res = 0
        for greed in sorted(g):
            for i in s2:
                if not used[i] and s[i] >= greed:
                    used[i] = True
                    res += 1
                    break
        return res
`)});
alt(554,{name:"Sets of joints per row",tag:"Alternative",time:"O(total bricks · joints)",space:"O(total bricks)",explain:"For every joint position count the rows that have a joint exactly there.",code:C(`
class Solution:
    def leastBricks(self, wall):
        edges = [set(accumulate(row[:-1])) for row in wall]
        cand = {x for e in edges for x in e}
        return len(wall) - max((sum(x in e for e in edges) for x in cand), default=0)
`)});
alt(673,{name:"Memoized recursion from each start",tag:"Alternative",time:"O(n²)",space:"O(n)",explain:"go(i) returns (longest length, how many) of increasing subsequences starting at i.",code:C(`
class Solution:
    def findNumberOfLIS(self, nums):
        n = len(nums)
        @lru_cache(None)
        def go(i):
            best, cnt = 1, 1
            for j in range(i + 1, n):
                if nums[j] > nums[i]:
                    l, c = go(j)
                    if l + 1 > best:
                        best, cnt = l + 1, c
                    elif l + 1 == best:
                        cnt += c
            return best, cnt
        res = [go(i) for i in range(n)]
        m = max(l for l, c in res)
        return sum(c for l, c in res if l == m)
`)});
alt(764,{name:"Grow a plus from every centre",tag:"Brute force",time:"O(n³)",space:"O(mines)",explain:"For every cell that is not a hole keep growing the plus while all four new arm cells are free.",code:C(`
class Solution:
    def orderOfLargestPlusSign(self, n, mines):
        banned = {(x, y) for x, y in mines}
        best = 0
        for i in range(n):
            for j in range(n):
                if (i, j) in banned:
                    continue
                k = 1
                while all(0 <= a < n and 0 <= b < n and (a, b) not in banned
                          for a, b in ((i - k, j), (i + k, j), (i, j - k), (i, j + k))):
                    k += 1
                best = max(best, k)
        return best
`)});
alt(1213,{name:"Set intersection",tag:"Pythonic",time:"O(a+b+c)",space:"O(a+b+c)",explain:"Intersect the three sets and sort.",code:C(`
class Solution:
    def arraysIntersection(self, arr1, arr2, arr3):
        return sorted(set(arr1) & set(arr2) & set(arr3))
`)});
alt(1110,{name:"Level-order cutting",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"Walk the tree level by level; cut links to deleted children and collect the surviving children of deleted nodes.",code:C(`
class Solution:
    def delNodes(self, root, to_delete):
        drop = set(to_delete)
        res = []
        if root and root.val not in drop:
            res.append(root)
        q = deque([root])
        while q:
            node = q.popleft()
            for attr in ("left", "right"):
                child = getattr(node, attr)
                if not child:
                    continue
                q.append(child)
                if node.val in drop and child.val not in drop:
                    res.append(child)
                if child.val in drop:
                    setattr(node, attr, None)
        return res
`)});
alt(1361,{name:"DFS from the root counting visited nodes",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"Find the single parentless node, walk down, and fail if a node is reached twice.",code:C(`
class Solution:
    def validateBinaryTreeNodes(self, n, leftChild, rightChild):
        has_parent = [False] * n
        for c in leftChild + rightChild:
            if c != -1:
                if has_parent[c]:
                    return False
                has_parent[c] = True
        roots = [i for i in range(n) if not has_parent[i]]
        if len(roots) != 1:
            return False
        seen = {roots[0]}
        stack = [roots[0]]
        while stack:
            u = stack.pop()
            for c in (leftChild[u], rightChild[u]):
                if c != -1:
                    if c in seen:
                        return False
                    seen.add(c)
                    stack.append(c)
        return len(seen) == n
`)});
alt(1239,{name:"Backtracking over the words",tag:"Alternative",time:"O(2ⁿ)",space:"O(n)",explain:"For each word either skip it or add it if its letters are all new.",code:C(`
class Solution:
    def maxLength(self, arr):
        best = 0
        def go(i, used, length):
            nonlocal best
            best = max(best, length)
            for j in range(i, len(arr)):
                w = arr[j]
                if len(set(w)) == len(w) and not used & set(w):
                    go(j + 1, used | set(w), length + len(w))
        go(0, set(), 0)
        return best
`)});
alt(1498,{name:"Count every subset (small inputs)",tag:"Brute force",time:"O(2ⁿ · n)",space:"O(n)",explain:"Try every non-empty subsequence and test min + max against the target.",code:C(`
class Solution:
    def numSubseq(self, nums, target):
        n = len(nums)
        res = 0
        for mask in range(1, 1 << n):
            pick = [nums[i] for i in range(n) if mask >> i & 1]
            if min(pick) + max(pick) <= target:
                res += 1
        return res % (10 ** 9 + 7)
`)});
alt(1920,{name:"In place with packed values",tag:"Alternative",time:"O(n)",space:"O(1)",explain:"Store the new value in the high part (× n) of each cell, then divide by n.",code:C(`
class Solution:
    def buildArray(self, nums):
        n = len(nums)
        for i in range(n):
            nums[i] += n * (nums[nums[i]] % n)
        for i in range(n):
            nums[i] //= n
        return nums
`)});
alt(2824,{name:"Check every pair",tag:"Brute force",time:"O(n²)",space:"O(1)",explain:"Test each pair of positions.",code:C(`
class Solution:
    def countPairs(self, nums, target):
        return sum(1 for a, b in combinations(nums, 2) if a + b < target)
`)});
alt(860,{name:"Make change with the largest coins first",tag:"Alternative",time:"O(n)",space:"O(1)",explain:"Return change greedily using 10s before 5s.",code:C(`
class Solution:
    def lemonadeChange(self, bills):
        cash = {5: 0, 10: 0}
        for b in bills:
            change = b - 5
            for coin in (10, 5):
                while change >= coin and cash[coin] > 0:
                    change -= coin
                    cash[coin] -= 1
            if change:
                return False
            if b in cash:
                cash[b] += 1
        return True
`)});
alt(684,{name:"Detect the cycle with DFS",tag:"Alternative",time:"O(n²)",space:"O(n)",explain:"Add edges one at a time; if the ends are already connected through the graph so far, this edge closes a cycle.",code:C(`
class Solution:
    def findRedundantConnection(self, edges):
        g = defaultdict(list)
        def connected(a, b):
            seen = {a}
            stack = [a]
            while stack:
                u = stack.pop()
                if u == b:
                    return True
                for v in g[u]:
                    if v not in seen:
                        seen.add(v)
                        stack.append(v)
            return False
        for a, b in edges:
            if connected(a, b):
                return [a, b]
            g[a].append(b)
            g[b].append(a)
`)});
alt(1903,{name:"Strip the even digits",tag:"Pythonic",time:"O(n)",space:"O(n)",explain:"Remove trailing even digits.",code:C(`
class Solution:
    def largestOddNumber(self, num):
        return num.rstrip("02468")
`)});
};
