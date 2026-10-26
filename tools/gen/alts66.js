module.exports=({alt})=>{
const C=s=>s.replace(/^\n/,"").replace(/\n$/,"").split("\n");
// ---- Bloomberg (5)
alt(1260,{name:"Direct index mapping",tag:"Alternative",time:"O(m·n)",space:"O(m·n)",explain:"Place each cell straight at its shifted position without flattening.",code:C(`
class Solution:
    def shiftGrid(self, grid, k):
        m, n = len(grid), len(grid[0])
        res = [[0] * n for _ in range(m)]
        for i in range(m):
            for j in range(n):
                pos = (i * n + j + k) % (m * n)
                res[pos // n][pos % n] = grid[i][j]
        return res
`)});
alt(3536,{name:"Try every pair of digits",tag:"Alternative",time:"O(d²)",space:"O(d)",explain:"Check all pairs of digit positions.",code:C(`
class Solution:
    def maxProduct(self, n):
        d = list(map(int, str(n)))
        return max(d[i] * d[j] for i in range(len(d)) for j in range(i + 1, len(d)))
`)});
alt(2996,{name:"Count-up until missing",tag:"Alternative",time:"O(n + s)",space:"O(n)",explain:"Build the prefix sum with an index loop and probe from the sum upward.",code:C(`
class Solution:
    def missingInteger(self, nums):
        i = 1
        while i < len(nums) and nums[i] == nums[i - 1] + 1:
            i += 1
        x = sum(nums[:i])
        seen = set(nums)
        while x in seen:
            x += 1
        return x
`)});
alt(3116,{name:"Binary search with a recursive subset count",tag:"Alternative",time:"O(2ⁿ · log(answer))",space:"O(n)",explain:"Same inclusion–exclusion, written as a recursion that chooses or skips each coin.",code:C(`
class Solution:
    def findKthSmallest(self, coins, k):
        n = len(coins)
        def count(x):
            def go(i, l, chosen):
                if i == n:
                    if chosen == 0:
                        return 0
                    return (1 if chosen % 2 else -1) * (x // l)
                return go(i + 1, l, chosen) + go(i + 1, l * coins[i] // gcd(l, coins[i]), chosen + 1)
            return go(0, 1, 0)
        lo, hi = 1, min(coins) * k
        while lo < hi:
            mid = (lo + hi) // 2
            if count(mid) >= k:
                hi = mid
            else:
                lo = mid + 1
        return lo
`)});
alt(2615,{name:"Brute force pair sums",tag:"Alternative",time:"O(n²)",space:"O(n)",explain:"For every index add up the distances to equal values directly.",code:C(`
class Solution:
    def distance(self, nums):
        return [sum(abs(i - j) for j, y in enumerate(nums) if y == x and j != i) for i, x in enumerate(nums)]
`)});
alt(2091,{name:"Try every front removal count",tag:"Alternative",time:"O(n)",space:"O(1)",explain:"Remove t elements from the front, then the fewest from the back that still reach both targets.",code:C(`
class Solution:
    def minimumDeletions(self, nums):
        n = len(nums)
        targets = (nums.index(min(nums)), nums.index(max(nums)))
        best = n
        for t in range(n + 1):
            left = [x for x in targets if x >= t]
            back = n - min(left) if left else 0
            best = min(best, t + back)
        return best
`)});
alt(3870,{name:"Sum the commas number by number",tag:"Alternative",time:"O(n)",space:"O(1)",explain:"Count the commas of each formatted number.",code:C(`
class Solution:
    def countCommas(self, n):
        return sum(len(format(x, ',')) - len(str(x)) for x in range(1, n + 1))
`)});
alt(3414,{name:"Bottom-up DP from the last interval",tag:"Alternative",time:"O(n log n)",space:"O(n)",explain:"Fill the table of best (score, indices) from the right instead of recursing.",code:C(`
class Solution:
    def maximumWeight(self, intervals):
        n = len(intervals)
        order = sorted(range(n), key=lambda i: (intervals[i][0], i))
        starts = [intervals[i][0] for i in order]
        dp = [[(0, ())] * 5 for _ in range(n + 1)]
        for p in range(n - 1, -1, -1):
            i = order[p]
            l, r, w = intervals[i]
            nxt = bisect_right(starts, r)
            for k in range(1, 5):
                best = dp[p + 1][k]
                sc, idx = dp[nxt][k - 1]
                cand = (sc + w, tuple(sorted(idx + (i,))))
                if cand[0] > best[0] or (cand[0] == best[0] and cand[1] < best[1]):
                    best = cand
                dp[p][k] = best
        return list(dp[0][4][1])
`)});
alt(835,{name:"Try every shift and count",tag:"Alternative",time:"O(n⁴)",space:"O(1)",explain:"Slide img1 over img2 by each offset and count matching 1s.",code:C(`
class Solution:
    def largestOverlap(self, img1, img2):
        n = len(img1)
        best = 0
        for dx in range(-n + 1, n):
            for dy in range(-n + 1, n):
                c = 0
                for i in range(n):
                    for j in range(n):
                        a, b = i + dx, j + dy
                        if 0 <= a < n and 0 <= b < n and img1[i][j] and img2[a][b]:
                            c += 1
                best = max(best, c)
        return best
`)});
alt(1572,{name:"Loop with a skip for the centre",tag:"Alternative",time:"O(n)",space:"O(1)",explain:"Add the second diagonal only when it does not hit the main one.",code:C(`
class Solution:
    def diagonalSum(self, mat):
        n = len(mat)
        total = 0
        for i in range(n):
            total += mat[i][i]
            if i != n - 1 - i:
                total += mat[i][n - 1 - i]
        return total
`)});
alt(2529,{name:"Linear count",tag:"Alternative",time:"O(n)",space:"O(1)",explain:"Count the negatives and positives in one pass.",code:C(`
class Solution:
    def maximumCount(self, nums):
        neg = sum(1 for x in nums if x < 0)
        pos = sum(1 for x in nums if x > 0)
        return max(neg, pos)
`)});
alt(3498,{name:"Use the alphabet string",tag:"Alternative",time:"O(n)",space:"O(1)",explain:"Reverse the alphabet and look letters up by index.",code:C(`
class Solution:
    def reverseDegree(self, s):
        rev = 'zyxwvutsrqponmlkjihgfedcba'
        total = 0
        for i, c in enumerate(s, 1):
            total += (rev.index(c) + 1) * i
        return total
`)});
alt(1096,{name:"Stack-based evaluation",tag:"Alternative",time:"O(output size)",space:"O(output size)",explain:"Keep a stack of partial unions and products instead of recursing.",code:C(`
class Solution:
    def braceExpansionII(self, expression):
        stack = []
        union, cur = set(), {""}
        for c in expression:
            if c == '{':
                stack.append((union, cur))
                union, cur = set(), {""}
            elif c == '}':
                inner = union | cur
                union, cur = stack.pop()
                cur = {a + b for a in cur for b in inner}
            elif c == ',':
                union |= cur
                cur = {""}
            else:
                cur = {a + c for a in cur}
        return sorted(union | cur)
`)});
alt(1111,{name:"Alternate by position",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"Give '(' alternating groups by its count; its matching ')' follows via a stack.",code:C(`
class Solution:
    def maxDepthAfterSplit(self, seq):
        res = []
        stack = []
        for c in seq:
            if c == '(':
                g = len(stack) % 2
                stack.append(g)
                res.append(g)
            else:
                res.append(stack.pop())
        return res
`)});
alt(2778,{name:"Check every index",tag:"Alternative",time:"O(n)",space:"O(1)",explain:"Loop with enumerate and test divisibility.",code:C(`
class Solution:
    def sumOfSquares(self, nums):
        n = len(nums)
        total = 0
        for i, x in enumerate(nums, 1):
            if n % i == 0:
                total += x * x
        return total
`)});
alt(436,{name:"Brute force minimum",tag:"Alternative",time:"O(n²)",space:"O(1)",explain:"For each interval scan all others for the smallest valid start.",code:C(`
class Solution:
    def findRightInterval(self, intervals):
        res = []
        for _, e in intervals:
            best, idx = float('inf'), -1
            for j, (s, _) in enumerate(intervals):
                if e <= s < best:
                    best, idx = s, j
            res.append(idx)
        return res
`)});
alt(501,{name:"Recursive count with a dictionary",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"Ignore the BST (Binary Search Tree) order and count values in a hash map.",code:C(`
class Solution:
    def findMode(self, root):
        cnt = Counter()
        def go(node):
            if node:
                cnt[node.val] += 1
                go(node.left)
                go(node.right)
        go(root)
        top = max(cnt.values())
        return sorted(v for v, c in cnt.items() if c == top)
`)});
alt(705,{name:"Boolean array",tag:"Alternative",time:"O(1)",space:"O(range)",explain:"Keys are limited, so a plain presence array works.",code:C(`
class MyHashSet:
    def __init__(self):
        self.present = {}

    def add(self, key):
        self.present[key] = True

    def remove(self, key):
        self.present.pop(key, None)

    def contains(self, key):
        return key in self.present
`)});
alt(1027,{name:"Position map per difference",tag:"Alternative",time:"O(n²)",space:"O(n²)",explain:"Process left to right with a table keyed by (value, difference).",code:C(`
class Solution:
    def longestArithSeqLength(self, nums):
        best = 2
        table = {}
        for i, x in enumerate(nums):
            for j in range(i):
                d = x - nums[j]
                table[(i, d)] = table.get((j, d), 1) + 1
                best = max(best, table[(i, d)])
        return best
`)});
alt(1042,{name:"Colour with a fixed palette check",tag:"Alternative",time:"O(n + p)",space:"O(n + p)",explain:"Same greedy but checking colours 1–4 with an adjacency list of sets.",code:C(`
class Solution:
    def gardenNoAdj(self, n, paths):
        adj = [set() for _ in range(n + 1)]
        for a, b in paths:
            adj[a].add(b)
            adj[b].add(a)
        res = [0] * (n + 1)
        for u in range(1, n + 1):
            for c in (1, 2, 3, 4):
                if all(res[v] != c for v in adj[u]):
                    res[u] = c
                    break
        return res[1:]
`)});
alt(1122,{name:"Counting sort",tag:"Alternative",time:"O(n + m)",space:"O(n)",explain:"Count every value; emit arr2's values first, then the rest ascending.",code:C(`
class Solution:
    def relativeSortArray(self, arr1, arr2):
        cnt = Counter(arr1)
        res = []
        for v in arr2:
            res += [v] * cnt.pop(v)
        for v in sorted(cnt):
            res += [v] * cnt[v]
        return res
`)});
alt(1289,{name:"Recompute minimum over other columns",tag:"Alternative",time:"O(n³)",space:"O(n)",explain:"For each cell scan every other column of the previous row.",code:C(`
class Solution:
    def minFallingPathSum(self, grid):
        prev = grid[0][:]
        for row in grid[1:]:
            prev = [v + min(prev[k] for k in range(len(prev)) if k != j) for j, v in enumerate(row)]
        return min(prev)
`)});
alt(1547,{name:"Memoised recursion on cut segments",tag:"Alternative",time:"O(c³)",space:"O(c²)",explain:"Same intervals, solved top-down with a cache.",code:C(`
class Solution:
    def minCost(self, n, cuts):
        pos = [0] + sorted(cuts) + [n]
        @lru_cache(None)
        def f(i, j):
            if j - i < 2:
                return 0
            return pos[j] - pos[i] + min(f(i, k) + f(k, j) for k in range(i + 1, j))
        return f(0, len(pos) - 1)
`)});
alt(1578,{name:"Running maximum of the run",tag:"Alternative",time:"O(n)",space:"O(1)",explain:"Pay the smaller of the neighbour pair each time.",code:C(`
class Solution:
    def minCost(self, colors, neededTime):
        total = 0
        keep = neededTime[0]
        for i in range(1, len(colors)):
            if colors[i] == colors[i - 1]:
                total += min(keep, neededTime[i])
                keep = max(keep, neededTime[i])
            else:
                keep = neededTime[i]
        return total
`)});
alt(2956,{name:"Counters",tag:"Alternative",time:"O(n + m)",space:"O(n + m)",explain:"Use two Counters and add the matching counts.",code:C(`
class Solution:
    def findIntersectionValues(self, nums1, nums2):
        c1, c2 = Counter(nums1), Counter(nums2)
        return [sum(c for v, c in c1.items() if v in c2), sum(c for v, c in c2.items() if v in c1)]
`)});
alt(357,{name:"Backtracking count",tag:"Alternative",time:"O(10!)",space:"O(10)",explain:"Build numbers digit by digit, never reusing a digit, and count every number built.",code:C(`
class Solution:
    def countNumbersWithUniqueDigits(self, n):
        if n == 0:
            return 1
        def go(length, used):
            total = 1
            if length < n:
                for d in range(10):
                    if not used >> d & 1:
                        total += go(length + 1, used | 1 << d)
            return total
        return 1 + sum(go(1, 1 << d) for d in range(1, 10))
`)});
alt(2011,{name:"Simulate the variable",tag:"Alternative",time:"O(n)",space:"O(1)",explain:"Actually apply each operation to X.",code:C(`
class Solution:
    def finalValueAfterOperations(self, operations):
        x = 0
        for op in operations:
            if op in ('++X', 'X++'):
                x += 1
            else:
                x -= 1
        return x
`)});
alt(1508,{name:"Heap of running sums",tag:"Alternative",time:"O(n² log n)",space:"O(n)",explain:"Pop the smallest subarray sums in order, extending each one to the right.",code:C(`
class Solution:
    def rangeSum(self, nums, n, left, right):
        heap = [(x, i) for i, x in enumerate(nums)]
        heapify(heap)
        total = 0
        for k in range(1, right + 1):
            s, i = heappop(heap)
            if k >= left:
                total += s
            if i + 1 < n:
                heappush(heap, (s + nums[i + 1], i + 1))
        return total % (10**9 + 7)
`)});
alt(725,{name:"Copy into lists then relink",tag:"Alternative",time:"O(n + k)",space:"O(n)",explain:"Put the nodes in an array, then cut the chain at each part boundary.",code:C(`
class Solution:
    def splitListToParts(self, head, k):
        nodes = []
        while head:
            nodes.append(head)
            head = head.next
        size, extra = divmod(len(nodes), k)
        res = []
        idx = 0
        for i in range(k):
            ln = size + (1 if i < extra else 0)
            if ln == 0:
                res.append(None)
                continue
            res.append(nodes[idx])
            nodes[idx + ln - 1].next = None
            idx += ln
        return res
`)});
alt(590,{name:"Iterative with a reversed preorder",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"Walk root, then children right to left, and reverse the output.",code:C(`
class Solution:
    def postorder(self, root):
        if not root:
            return []
        out, stack = [], [root]
        while stack:
            node = stack.pop()
            out.append(node.val)
            stack.extend(node.children)
        return out[::-1]
`)});
alt(2419,{name:"Group by value with itertools",tag:"Alternative",time:"O(n)",space:"O(1)",explain:"Use groupby on equality to the maximum.",code:C(`
class Solution:
    def longestSubarray(self, nums):
        m = max(nums)
        return max((len(list(g)) for k, g in groupby(x == m for x in nums) if k), default=0)
`)});
alt(1590,{name:"Brute force on window length",tag:"Alternative",time:"O(n²)",space:"O(n)",explain:"Try removing every subarray of each length with prefix sums.",code:C(`
class Solution:
    def minSubarray(self, nums, p):
        n = len(nums)
        total = sum(nums)
        if total % p == 0:
            return 0
        pre = [0]
        for x in nums:
            pre.append(pre[-1] + x)
        for length in range(1, n):
            for i in range(n - length + 1):
                if (total - (pre[i + length] - pre[i])) % p == 0:
                    return length
        return -1
`)});
alt(2463,{name:"Memoised recursion",tag:"Alternative",time:"O(R·F·cap)",space:"O(R·F)",explain:"Decide robot by robot which factory takes it.",code:C(`
class Solution:
    def minimumTotalDistance(self, robot, factory):
        robot.sort()
        factory.sort()
        @lru_cache(None)
        def f(i, j, used):
            if i == len(robot):
                return 0
            if j == len(factory):
                return float('inf')
            pos, cap = factory[j]
            skip = f(i, j + 1, 0)
            take = float('inf')
            if used < cap:
                take = abs(robot[i] - pos) + f(i + 1, j, used + 1)
            return min(skip, take)
        return f(0, 0, 0)
`)});
alt(1534,{name:"Prune with early checks",tag:"Alternative",time:"O(n³)",space:"O(1)",explain:"Nested loops that skip impossible pairs early.",code:C(`
class Solution:
    def countGoodTriplets(self, arr, a, b, c):
        n = len(arr)
        count = 0
        for i in range(n):
            for j in range(i + 1, n):
                if abs(arr[i] - arr[j]) > a:
                    continue
                for k in range(j + 1, n):
                    if abs(arr[j] - arr[k]) <= b and abs(arr[i] - arr[k]) <= c:
                        count += 1
        return count
`)});
alt(3286,{name:"Dijkstra on health lost",tag:"Alternative",time:"O(m·n log(m·n))",space:"O(m·n)",explain:"A heap instead of the deque.",code:C(`
class Solution:
    def findSafeWalk(self, grid, health):
        m, n = len(grid), len(grid[0])
        best = {(0, 0): grid[0][0]}
        pq = [(grid[0][0], 0, 0)]
        while pq:
            d, i, j = heappop(pq)
            if best.get((i, j), 1e9) < d:
                continue
            for a, b in ((i + 1, j), (i - 1, j), (i, j + 1), (i, j - 1)):
                if 0 <= a < m and 0 <= b < n:
                    nd = d + grid[a][b]
                    if nd < best.get((a, b), 1e9):
                        best[(a, b)] = nd
                        heappush(pq, (nd, a, b))
        return health - best[(m - 1, n - 1)] >= 1
`)});
alt(1373,{name:"Validate each subtree separately",tag:"Alternative",time:"O(n²)",space:"O(h)",explain:"For every node check if its subtree is a BST (Binary Search Tree) and sum it.",code:C(`
class Solution:
    def maxSumBST(self, root):
        def vals(node):
            return vals(node.left) + [node.val] + vals(node.right) if node else []
        def is_bst(node):
            v = vals(node)
            return all(a < b for a, b in zip(v, v[1:]))
        best = 0
        stack = [root]
        while stack:
            node = stack.pop()
            if node:
                if is_bst(node):
                    best = max(best, sum(vals(node)))
                stack.append(node.left)
                stack.append(node.right)
        return best
`)});
alt(3152,{name:"Sorted list of bad positions",tag:"Alternative",time:"O((n + q) log n)",space:"O(n)",explain:"Binary search the first bad index after l.",code:C(`
class Solution:
    def isArraySpecial(self, nums, queries):
        bad = [i for i in range(1, len(nums)) if nums[i] % 2 == nums[i - 1] % 2]
        res = []
        for l, r in queries:
            j = bisect_right(bad, l)
            res.append(not (j < len(bad) and bad[j] <= r))
        return res
`)});
alt(2185,{name:"Slice compare",tag:"Alternative",time:"O(n·L)",space:"O(1)",explain:"Compare a slice of each word.",code:C(`
class Solution:
    def prefixCount(self, words, pref):
        return sum(1 for w in words if w[:len(pref)] == pref)
`)});
alt(916,{name:"Check each word per requirement",tag:"Alternative",time:"O(n·m·L)",space:"O(26)",explain:"Test each word against every word of words2 separately.",code:C(`
class Solution:
    def wordSubsets(self, words1, words2):
        reqs = [Counter(w) for w in words2]
        return [w for w in words1 if all(not (r - Counter(w)) for r in reqs)]
`)});
alt(624,{name:"Compare every pair of arrays",tag:"Alternative",time:"O(m²)",space:"O(1)",explain:"Try all pairs of arrays.",code:C(`
class Solution:
    def maxDistance(self, arrays):
        best = 0
        for i in range(len(arrays)):
            for j in range(len(arrays)):
                if i != j:
                    best = max(best, arrays[j][-1] - arrays[i][0])
        return best
`)});
alt(3429,{name:"Memoised recursion on the pair index",tag:"Alternative",time:"O(n·81)",space:"O(n)",explain:"Recursion from the outside inwards.",code:C(`
class Solution:
    def minCost(self, n, cost):
        @lru_cache(None)
        def f(i, pa, pb):
            if i == n // 2:
                return 0
            best = float('inf')
            for a in range(3):
                for b in range(3):
                    if a != b and a != pa and b != pb:
                        best = min(best, cost[i][a] + cost[n - 1 - i][b] + f(i + 1, a, b))
            return best
        return f(0, -1, -1)
`)});
alt(2418,{name:"Dictionary from height to name",tag:"Alternative",time:"O(n log n)",space:"O(n)",explain:"Heights are distinct, so map height to name.",code:C(`
class Solution:
    def sortPeople(self, names, heights):
        by_height = dict(zip(heights, names))
        return [by_height[h] for h in sorted(heights, reverse=True)]
`)});
alt(1763,{name:"Check every substring",tag:"Alternative",time:"O(n³)",space:"O(1)",explain:"Test every substring for niceness.",code:C(`
class Solution:
    def longestNiceSubstring(self, s):
        best = ""
        for i in range(len(s)):
            for j in range(i + len(best) + 1, len(s) + 1):
                sub = s[i:j]
                if all(c.swapcase() in sub for c in sub):
                    best = sub
        return best
`)});
alt(1980,{name:"Flip the diagonal with arithmetic",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"Same diagonal idea, flipping each bit as 1 − bit.",code:C(`
class Solution:
    def findDifferentBinaryString(self, nums):
        return ''.join(str(1 - int(s[i])) for i, s in enumerate(nums))
`)});
alt(1028,{name:"Recursive descent",tag:"Alternative",time:"O(n)",space:"O(h)",explain:"Parse with a position pointer and the expected depth.",code:C(`
class Solution:
    def recoverFromPreorder(self, traversal):
        s = traversal
        pos = 0
        def parse(depth):
            nonlocal pos
            j = pos
            while j < len(s) and s[j] == '-':
                j += 1
            if j - pos != depth:
                return None
            k = j
            while k < len(s) and s[k].isdigit():
                k += 1
            node = TreeNode(int(s[j:k]))
            pos = k
            node.left = parse(depth + 1)
            node.right = parse(depth + 1)
            return node
        return parse(0)
`)});
alt(1780,{name:"Subtract the largest power",tag:"Alternative",time:"O(log n)",space:"O(1)",explain:"Greedily subtract powers of three from large to small.",code:C(`
class Solution:
    def checkPowersOfThree(self, n):
        p = 1
        while p * 3 <= n:
            p *= 3
        while p:
            if n >= p:
                n -= p
            if n >= p:
                return False
            p //= 3
        return n == 0
`)});
alt(3306,{name:"Count by starting index with next-consonant jumps",tag:"Alternative",time:"O(n²)",space:"O(1)",explain:"Fix the left end, extend to the right and count the windows that match.",code:C(`
class Solution:
    def countOfSubstrings(self, word, k):
        n = len(word)
        res = 0
        for i in range(n):
            vow = set()
            cons = 0
            for j in range(i, n):
                if word[j] in 'aeiou':
                    vow.add(word[j])
                else:
                    cons += 1
                if cons > k:
                    break
                if len(vow) == 5 and cons == k:
                    res += 1
        return res
`)});
alt(2206,{name:"Sort and compare pairs",tag:"Alternative",time:"O(n log n)",space:"O(n)",explain:"After sorting, equal values must pair up.",code:C(`
class Solution:
    def divideArray(self, nums):
        s = sorted(nums)
        return all(s[i] == s[i + 1] for i in range(0, len(s), 2))
`)});
alt(2058,{name:"Convert to an array",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"Store the values and scan the array.",code:C(`
class Solution:
    def nodesBetweenCriticalPoints(self, head):
        a = []
        while head:
            a.append(head.val)
            head = head.next
        pos = [i for i in range(1, len(a) - 1) if (a[i] > a[i - 1] and a[i] > a[i + 1]) or (a[i] < a[i - 1] and a[i] < a[i + 1])]
        if len(pos) < 2:
            return [-1, -1]
        return [min(y - x for x, y in zip(pos, pos[1:])), pos[-1] - pos[0]]
`)});
alt(848,{name:"Difference array",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"Add each shift to a difference array over the prefix, then sweep.",code:C(`
class Solution:
    def shiftingLetters(self, s, shifts):
        n = len(s)
        diff = [0] * (n + 1)
        for i, sh in enumerate(shifts):
            diff[0] += sh
            diff[i + 1] -= sh
        out = []
        run = 0
        for i in range(n):
            run += diff[i]
            out.append(chr((ord(s[i]) - 97 + run) % 26 + 97))
        return ''.join(out)
`)});
alt(747,{name:"Sort by value",tag:"Alternative",time:"O(n log n)",space:"O(n)",explain:"Sort the values and compare the top two.",code:C(`
class Solution:
    def dominantIndex(self, nums):
        order = sorted(range(len(nums)), key=lambda i: nums[i])
        if len(nums) == 1:
            return 0
        a, b = order[-1], order[-2]
        return a if nums[a] >= 2 * nums[b] else -1
`)});
alt(2179,{name:"Brute force over triples",tag:"Alternative",time:"O(n³)",space:"O(n)",explain:"Check every triple of values against both orders.",code:C(`
class Solution:
    def goodTriplets(self, nums1, nums2):
        p1 = {v: i for i, v in enumerate(nums1)}
        p2 = {v: i for i, v in enumerate(nums2)}
        vals = list(range(len(nums1)))
        count = 0
        for a, b, c in combinations(vals, 3):
            for x, y, z in permutations((a, b, c)):
                if p1[x] < p1[y] < p1[z] and p2[x] < p2[y] < p2[z]:
                    count += 1
        return count
`)});
alt(2176,{name:"Group indices by value",tag:"Alternative",time:"O(n²)",space:"O(n)",explain:"Only compare indices that hold equal values.",code:C(`
class Solution:
    def countPairs(self, nums, k):
        pos = defaultdict(list)
        for i, x in enumerate(nums):
            pos[x].append(i)
        return sum(1 for p in pos.values() for a, b in combinations(p, 2) if a * b % k == 0)
`)});
alt(1778,{name:"BFS (Breadth-First Search) that re-walks the robot",tag:"Alternative",time:"O(m·n)",space:"O(m·n)",explain:"Explore the grid with DFS (Depth-First Search) but keep the discovered edges, then BFS (Breadth-First Search) on them.",code:C(`
class Solution:
    def findShortestPath(self, master):
        dirs = {'U': (-1, 0), 'D': (1, 0), 'L': (0, -1), 'R': (0, 1)}
        back = {'U': 'D', 'D': 'U', 'L': 'R', 'R': 'L'}
        adj = defaultdict(set)
        seen = {(0, 0)}
        goal = []
        def dfs(x, y):
            if master.isTarget():
                goal.append((x, y))
            for d, (dx, dy) in dirs.items():
                nx, ny = x + dx, y + dy
                if master.canMove(d):
                    adj[(x, y)].add((nx, ny))
                    if (nx, ny) not in seen:
                        seen.add((nx, ny))
                        master.move(d)
                        dfs(nx, ny)
                        master.move(back[d])
        dfs(0, 0)
        if not goal:
            return -1
        dist = {(0, 0): 0}
        q = deque([(0, 0)])
        while q:
            u = q.popleft()
            if u == goal[0]:
                return dist[u]
            for v in adj[u]:
                if v not in dist:
                    dist[v] = dist[u] + 1
                    q.append(v)
        return -1
`)});
};
