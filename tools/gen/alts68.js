module.exports=({alt})=>{
const C=s=>s.replace(/^\n/,"").replace(/\n$/,"").split("\n");
// ---- Bloomberg (7)
alt(1015,{name:"Remainder set until a repeat",tag:"Alternative",time:"O(K)",space:"O(K)",explain:"Stop when a remainder repeats (no answer) or reaches 0.",code:C(`
class Solution:
    def smallestRepunitDivByK(self, k):
        seen = set()
        rem = 0
        length = 0
        while True:
            rem = (rem * 10 + 1) % k
            length += 1
            if rem == 0:
                return length
            if rem in seen:
                return -1
            seen.add(rem)
`)});
alt(3432,{name:"Check each cut",tag:"Brute force",time:"O(n)",space:"O(1)",explain:"Walk the cuts keeping the running left sum.",code:C(`
class Solution:
    def countPartitions(self, nums):
        total = sum(nums)
        left = 0
        count = 0
        for i in range(len(nums) - 1):
            left += nums[i]
            if (left - (total - left)) % 2 == 0:
                count += 1
        return count
`)});
alt(552,{name:"Memoised recursion over days",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"Count records by recursion on the remaining days and the state.",code:C(`
class Solution:
    def checkRecord(self, n):
        MOD = 10**9 + 7
        @lru_cache(None)
        def go(days, absent, late):
            if days == 0:
                return 1
            res = go(days - 1, absent, 0)
            if absent == 0:
                res += go(days - 1, 1, 0)
            if late < 2:
                res += go(days - 1, absent, late + 1)
            return res % MOD
        return go(n, 0, 0)
`)});
alt(3623,{name:"(Sum² − sum of squares) / 2",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"Pairs of segments from different rows via a square identity.",code:C(`
class Solution:
    def countTrapezoids(self, points):
        MOD = 10**9 + 7
        rows = Counter(y for _, y in points)
        segs = [c * (c - 1) // 2 for c in rows.values()]
        s = sum(segs)
        return ((s * s - sum(x * x for x in segs)) // 2) % MOD
`)});
alt(2147,{name:"DP over seats in the current section",tag:"Alternative",time:"O(n)",space:"O(1)",explain:"ways[k] counts the ways with k seats in the open section; a divider can start a new section after the second seat.",code:C(`
class Solution:
    def numberOfWays(self, corridor):
        MOD = 10**9 + 7
        w0, w1, w2 = 1, 0, 0
        for c in corridor:
            if c == 'S':
                w0, w1, w2 = 0, (w0 + w2) % MOD, w1
            else:
                w0, w1, w2 = (w0 + w2) % MOD, w1, w2
        return w2
`)});
alt(3347,{name:"Try every value in the reachable range",tag:"Brute force",time:"O(range·n)",space:"O(n)",explain:"For each value any element can reach, count equal and near elements.",code:C(`
class Solution:
    def maxFrequency(self, nums, k, numOperations):
        best = 0
        cand = set()
        for x in nums:
            cand |= set(range(x - k, x + k + 1))
        for t in cand:
            same = sum(1 for x in nums if x == t)
            near = sum(1 for x in nums if x != t and abs(x - t) <= k)
            best = max(best, same + min(numOperations, near))
        return best
`)});
alt(1925,{name:"Pythagorean check with isqrt",tag:"Alternative",time:"O(n²)",space:"O(1)",explain:"Compute the integer square root of a² + b².",code:C(`
class Solution:
    def countTriples(self, n):
        count = 0
        for a in range(1, n + 1):
            for b in range(1, n + 1):
                c = isqrt(a * a + b * b)
                if c <= n and c * c == a * a + b * b:
                    count += 1
        return count
`)});
alt(3776,{name:"Breadth-first search over balance states",tag:"Brute force",time:"exponential",space:"O(states)",explain:"Try every single-unit transfer until nobody is negative (tiny inputs).",code:C(`
class Solution:
    def minMoves(self, balance):
        n = len(balance)
        start = tuple(balance)
        q = deque([(start, 0)])
        seen = {start}
        while q:
            state, d = q.popleft()
            if all(v >= 0 for v in state):
                return d
            for i in range(n):
                if state[i] > 0:
                    for nb in ((i - 1) % n, (i + 1) % n):
                        t = list(state)
                        t[i] -= 1
                        t[nb] += 1
                        t = tuple(t)
                        if t not in seen:
                            seen.add(t)
                            q.append((t, d + 1))
        return -1
`)});
alt(955,{name:"Try removing sets of columns",tag:"Brute force",time:"O(2ᵐ·n·m)",space:"O(n·m)",explain:"Find the smallest number of deleted columns that leaves the strings sorted.",code:C(`
class Solution:
    def minDeletionSize(self, strs):
        m = len(strs[0])
        for d in range(m + 1):
            for drop in combinations(range(m), d):
                keep = [i for i in range(m) if i not in drop]
                rows = [''.join(s[i] for i in keep) for s in strs]
                if rows == sorted(rows):
                    return d
        return m
`)});
alt(2124,{name:"Compare last a and first b",tag:"Alternative",time:"O(n)",space:"O(1)",explain:"The last 'a' must be before the first 'b'.",code:C(`
class Solution:
    def checkString(self, s):
        last_a = s.rfind('a')
        first_b = s.find('b')
        return last_a == -1 or first_b == -1 or last_a < first_b
`)});
alt(2421,{name:"DFS from every node",tag:"Brute force",time:"O(n²)",space:"O(n)",explain:"From each start, walk only through values not above it and count equal endpoints.",code:C(`
class Solution:
    def numberOfGoodPaths(self, vals, edges):
        n = len(vals)
        adj = defaultdict(list)
        for a, b in edges:
            adj[a].append(b)
            adj[b].append(a)
        count = 0
        for s in range(n):
            seen = {s}
            stack = [s]
            while stack:
                u = stack.pop()
                if vals[u] == vals[s] and u >= s:
                    count += 1
                for v in adj[u]:
                    if v not in seen and vals[v] <= vals[s]:
                        seen.add(v)
                        stack.append(v)
        return count
`)});
alt(3469,{name:"Memoised search over the remaining list",tag:"Brute force",time:"exponential",space:"O(states)",explain:"Try every pair among the first three elements on the actual list.",code:C(`
class Solution:
    def minCost(self, nums):
        @lru_cache(None)
        def f(t):
            if len(t) < 3:
                return max(t) if t else 0
            best = float('inf')
            for i, j in ((0, 1), (0, 2), (1, 2)):
                rest = tuple(t[k] for k in range(len(t)) if k not in (i, j))
                best = min(best, max(t[i], t[j]) + f(rest))
            return best
        return f(tuple(nums))
`)});
alt(967,{name:"Depth-first search",tag:"Alternative",time:"O(2ⁿ)",space:"O(n)",explain:"Recursively extend each prefix by ±k.",code:C(`
class Solution:
    def numsSameConsecDiff(self, n, k):
        res = []
        def go(num, length):
            if length == n:
                res.append(num)
                return
            last = num % 10
            for d in {last + k, last - k}:
                if 0 <= d <= 9:
                    go(num * 10 + d, length + 1)
        for first in range(1, 10):
            go(first, 1)
        return sorted(res)
`)});
alt(1458,{name:"Memoised recursion",tag:"Alternative",time:"O(n·m)",space:"O(n·m)",explain:"Top-down version of the same choices.",code:C(`
class Solution:
    def maxDotProduct(self, nums1, nums2):
        @lru_cache(None)
        def go(i, j):
            if i == len(nums1) or j == len(nums2):
                return float('-inf')
            prod = nums1[i] * nums2[j]
            return max(prod + max(go(i + 1, j + 1), 0), go(i + 1, j), go(i, j + 1))
        return go(0, 0)
`)});
alt(446,{name:"Brute force over subsequences",tag:"Brute force",time:"O(2ⁿ)",space:"O(n)",explain:"Test every subsequence of length ≥ 3 for equal differences.",code:C(`
class Solution:
    def numberOfArithmeticSlices(self, nums):
        count = 0
        n = len(nums)
        for size in range(3, n + 1):
            for idx in combinations(range(n), size):
                vals = [nums[i] for i in idx]
                d = vals[1] - vals[0]
                if all(vals[t + 1] - vals[t] == d for t in range(size - 1)):
                    count += 1
        return count
`)});
alt(2516,{name:"Try every left count",tag:"Alternative",time:"O(n²)",space:"O(1)",explain:"Take i letters from the left, then walk in from the right until every letter has k.",code:C(`
class Solution:
    def takeCharacters(self, s, k):
        n = len(s)
        best = None
        for i in range(n + 1):
            have = Counter(s[:i])
            j = n
            while j > i and any(have[c] < k for c in 'abc'):
                j -= 1
                have[s[j]] += 1
            if all(have[c] >= k for c in 'abc'):
                cost = i + n - j
                best = cost if best is None else min(best, cost)
        return -1 if best is None else best
`)});
alt(3314,{name:"Search every candidate",tag:"Brute force",time:"O(n·V)",space:"O(n)",explain:"Try a = 0, 1, 2, … until a | (a + 1) equals the target.",code:C(`
class Solution:
    def minBitwiseArray(self, nums):
        res = []
        for x in nums:
            ans = -1
            for a in range(x):
                if a | (a + 1) == x:
                    ans = a
                    break
            res.append(ans)
        return res
`)});
alt(2236,{name:"Compare with a sum variable",tag:"Alternative",time:"O(1)",space:"O(1)",explain:"Same check, written step by step.",code:C(`
class Solution:
    def checkTree(self, root):
        children = root.left.val + root.right.val
        return children == root.val
`)});
alt(2716,{name:"Simulate the deletions",tag:"Brute force",time:"O(n²)",space:"O(n)",explain:"Keep removing a letter's later duplicates.",code:C(`
class Solution:
    def minimizedStringLength(self, s):
        out = ""
        for c in s:
            if c not in out:
                out += c
        return len(out)
`)});
alt(1026,{name:"Check every ancestor pair",tag:"Brute force",time:"O(n·h)",space:"O(h)",explain:"Carry the whole path and compare with each ancestor.",code:C(`
class Solution:
    def maxAncestorDiff(self, root):
        best = 0
        def go(node, path):
            nonlocal best
            if not node:
                return
            for a in path:
                best = max(best, abs(a - node.val))
            go(node.left, path + [node.val])
            go(node.right, path + [node.val])
        go(root, [])
        return best
`)});
alt(833,{name:"Apply from right to left",tag:"Alternative",time:"O(n + k log k)",space:"O(n)",explain:"Replacing from the last index keeps earlier indices valid.",code:C(`
class Solution:
    def findReplaceString(self, s, indices, sources, targets):
        for i, src, tgt in sorted(zip(indices, sources, targets), reverse=True):
            if s[i:i + len(src)] == src:
                s = s[:i] + tgt + s[i + len(src):]
        return s
`)});
alt(868,{name:"Split the binary string",tag:"Alternative",time:"O(log n)",space:"O(log n)",explain:"The gaps are the lengths of 0-runs plus one.",code:C(`
class Solution:
    def binaryGap(self, n):
        pos = [i for i, b in enumerate(bin(n)[2:]) if b == '1']
        return max((b - a for a, b in zip(pos, pos[1:])), default=0)
`)});
alt(3640,{name:"Brute force over l, p, q, r",tag:"Brute force",time:"O(n⁴)",space:"O(1)",explain:"Test every candidate quadruple.",code:C(`
class Solution:
    def maxSumTrionic(self, nums):
        n = len(nums)
        best = float('-inf')
        for l in range(n):
            for p in range(l + 1, n):
                for q in range(p + 1, n):
                    for r in range(q + 1, n):
                        if (all(nums[i] < nums[i + 1] for i in range(l, p))
                                and all(nums[i] > nums[i + 1] for i in range(p, q))
                                and all(nums[i] < nums[i + 1] for i in range(q, r))):
                            best = max(best, sum(nums[l:r + 1]))
        return best
`)});
alt(335,{name:"Intersect the segments",tag:"Brute force",time:"O(n²)",space:"O(n)",explain:"Build the path's segments and test every non-adjacent pair for an intersection.",code:C(`
class Solution:
    def isSelfCrossing(self, distance):
        x = y = 0
        pts = [(0, 0)]
        dirs = [(0, 1), (-1, 0), (0, -1), (1, 0)]
        for i, l in enumerate(distance):
            dx, dy = dirs[i % 4]
            x, y = x + dx * l, y + dy * l
            pts.append((x, y))
        segs = list(zip(pts, pts[1:]))
        def cross(o, a, b):
            return (a[0] - o[0]) * (b[1] - o[1]) - (a[1] - o[1]) * (b[0] - o[0])
        def on(p, a, b):
            return min(a[0], b[0]) <= p[0] <= max(a[0], b[0]) and min(a[1], b[1]) <= p[1] <= max(a[1], b[1])
        def inter(s, t):
            a, b = s
            c, e = t
            d1, d2, d3, d4 = cross(a, b, c), cross(a, b, e), cross(c, e, a), cross(c, e, b)
            if d1 * d2 < 0 and d3 * d4 < 0:
                return True
            return ((d1 == 0 and on(c, a, b)) or (d2 == 0 and on(e, a, b))
                    or (d3 == 0 and on(a, c, e)) or (d4 == 0 and on(b, c, e)))
        for i in range(len(segs)):
            for j in range(i + 2, len(segs)):
                if inter(segs[i], segs[j]):
                    return True
        return False
`)});
alt(817,{name:"Convert to an array first",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"Read the values, then count runs.",code:C(`
class Solution:
    def numComponents(self, head, nums):
        vals = []
        while head:
            vals.append(head.val)
            head = head.next
        wanted = set(nums)
        return sum(1 for i, v in enumerate(vals) if v in wanted and (i == len(vals) - 1 or vals[i + 1] not in wanted))
`)});
alt(922,{name:"Separate evens and odds",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"Fill even slots from the evens list and odd slots from the odds list.",code:C(`
class Solution:
    def sortArrayByParityII(self, nums):
        evens = [x for x in nums if x % 2 == 0]
        odds = [x for x in nums if x % 2 == 1]
        res = [0] * len(nums)
        res[0::2] = evens
        res[1::2] = odds
        return res
`)});
alt(487,{name:"Prefix and suffix runs",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"For each zero, add the 1-runs on both sides.",code:C(`
class Solution:
    def findMaxConsecutiveOnes(self, nums):
        n = len(nums)
        left = [0] * n
        right = [0] * n
        for i in range(n):
            left[i] = (left[i - 1] + 1 if i else 1) if nums[i] else 0
        for i in range(n - 1, -1, -1):
            right[i] = (right[i + 1] + 1 if i < n - 1 else 1) if nums[i] else 0
        best = max(left)
        for i in range(n):
            if nums[i] == 0:
                best = max(best, (left[i - 1] if i else 0) + 1 + (right[i + 1] if i < n - 1 else 0))
        return best
`)});
alt(3848,{name:"Try every permutation",tag:"Brute force",time:"O(d!)",space:"O(d)",explain:"Build every permutation without a leading zero and test it.",code:C(`
class Solution:
    def isDigitorialPermutation(self, n):
        fact = [1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880]
        for p in set(permutations(str(n))):
            if p[0] == '0':
                continue
            value = int(''.join(p))
            if sum(fact[int(d)] for d in p) == value:
                return True
        return False
`)});
alt(777,{name:"Compare the L / R sequences",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"Extract (letter, index) lists and compare movement directions.",code:C(`
class Solution:
    def canTransform(self, start, result):
        a = [(c, i) for i, c in enumerate(start) if c != 'X']
        b = [(c, i) for i, c in enumerate(result) if c != 'X']
        if len(a) != len(b):
            return False
        for (c1, i), (c2, j) in zip(a, b):
            if c1 != c2 or (c1 == 'L' and j > i) or (c1 == 'R' and j < i):
                return False
        return True
`)});
alt(3025,{name:"Check every rectangle",tag:"Brute force",time:"O(n³)",space:"O(1)",explain:"For each pair test every other point against the rectangle.",code:C(`
class Solution:
    def numberOfPairs(self, points):
        count = 0
        for i, (x1, y1) in enumerate(points):
            for j, (x2, y2) in enumerate(points):
                if i != j and x1 <= x2 and y1 >= y2:
                    if all(not (x1 <= x <= x2 and y2 <= y <= y1) for k, (x, y) in enumerate(points) if k != i and k != j):
                        count += 1
        return count
`)});
alt(1337,{name:"Heap of the k weakest",tag:"Alternative",time:"O(m log k)",space:"O(k)",explain:"Take the k smallest (soldiers, index) pairs with a heap.",code:C(`
class Solution:
    def kWeakestRows(self, mat, k):
        return [i for _, i in nsmallest(k, ((sum(r), i) for i, r in enumerate(mat)))]
`)});
alt(1622,{name:"Update every stored value",tag:"Brute force",time:"O(n) per addAll / multAll",space:"O(n)",explain:"Apply each operation to all stored numbers straight away.",code:C(`
class Fancy:
    MOD = 10**9 + 7

    def __init__(self):
        self.vals = []

    def append(self, val):
        self.vals.append(val % self.MOD)

    def addAll(self, inc):
        self.vals = [(v + inc) % self.MOD for v in self.vals]

    def multAll(self, m):
        self.vals = [(v * m) % self.MOD for v in self.vals]

    def getIndex(self, idx):
        return self.vals[idx] if idx < len(self.vals) else -1
`)});
alt(3346,{name:"Try every value in the reachable range",tag:"Brute force",time:"O(range·n)",space:"O(n)",explain:"For each value any element can reach, count equal and near elements.",code:C(`
class Solution:
    def maxFrequency(self, nums, k, numOperations):
        best = 0
        cand = set()
        for x in nums:
            cand |= set(range(x - k, x + k + 1))
        for t in cand:
            same = sum(1 for x in nums if x == t)
            near = sum(1 for x in nums if x != t and abs(x - t) <= k)
            best = max(best, same + min(numOperations, near))
        return best
`)});
alt(2906,{name:"Product of the others per cell",tag:"Brute force",time:"O((m·n)²)",space:"O(m·n)",explain:"Multiply every other cell directly.",code:C(`
class Solution:
    def constructProductMatrix(self, grid):
        MOD = 12345
        flat = [v for row in grid for v in row]
        n = len(grid[0])
        res = []
        for i in range(len(flat)):
            p = 1
            for j, v in enumerate(flat):
                if j != i:
                    p = p * v % MOD
            res.append(p)
        return [res[i * n:(i + 1) * n] for i in range(len(grid))]
`)});
alt(3546,{name:"Recompute each cut",tag:"Brute force",time:"O(m·n·(m+n))",space:"O(1)",explain:"Sum both sides of every possible cut.",code:C(`
class Solution:
    def canPartitionGrid(self, grid):
        m, n = len(grid), len(grid[0])
        total = sum(map(sum, grid))
        for r in range(1, m):
            if sum(sum(grid[i]) for i in range(r)) * 2 == total:
                return True
        for c in range(1, n):
            if sum(grid[i][j] for i in range(m) for j in range(c)) * 2 == total:
                return True
        return False
`)});
alt(2257,{name:"Check each cell's lines of sight",tag:"Brute force",time:"O(m·n·(m+n))",space:"O(m·n)",explain:"For every free cell look along its row and column for a guard before a wall.",code:C(`
class Solution:
    def countUnguarded(self, m, n, guards, walls):
        guard = set(map(tuple, guards))
        wall = set(map(tuple, walls))
        count = 0
        for r in range(m):
            for c in range(n):
                if (r, c) in guard or (r, c) in wall:
                    continue
                seen = False
                for dr, dc in ((1, 0), (-1, 0), (0, 1), (0, -1)):
                    a, b = r + dr, c + dc
                    while 0 <= a < m and 0 <= b < n and (a, b) not in wall:
                        if (a, b) in guard:
                            seen = True
                            break
                        a += dr
                        b += dc
                    if seen:
                        break
                if not seen:
                    count += 1
        return count
`)});
alt(1092,{name:"Memoised recursion building the string",tag:"Alternative",time:"O(n·m·(n+m))",space:"O(n·m)",explain:"Return the best supersequence string of the suffixes.",code:C(`
class Solution:
    def shortestCommonSupersequence(self, str1, str2):
        @lru_cache(None)
        def f(i, j):
            if i == len(str1):
                return str2[j:]
            if j == len(str2):
                return str1[i:]
            if str1[i] == str2[j]:
                return str1[i] + f(i + 1, j + 1)
            a = str1[i] + f(i + 1, j)
            b = str2[j] + f(i, j + 1)
            return a if len(a) <= len(b) else b
        return f(0, 0)
`)});
alt(1848,{name:"Expand outwards from start",tag:"Alternative",time:"O(n)",space:"O(1)",explain:"Check start − d and start + d for d = 0, 1, 2, …",code:C(`
class Solution:
    def getMinDistance(self, nums, target, start):
        n = len(nums)
        for d in range(n):
            if start - d >= 0 and nums[start - d] == target:
                return d
            if start + d < n and nums[start + d] == target:
                return d
`)});
alt(3464,{name:"Try every choice of k points",tag:"Brute force",time:"O(C(n, k)·k²)",space:"O(k)",explain:"Take the best minimum pairwise distance over all subsets of size k.",code:C(`
class Solution:
    def maxDistance(self, side, points, k):
        best = 0
        for chosen in combinations(points, k):
            best = max(best, min(abs(a[0] - b[0]) + abs(a[1] - b[1]) for a, b in combinations(chosen, 2)))
        return best
`)});
alt(147,{name:"Sort the values and rebuild",tag:"Alternative",time:"O(n log n)",space:"O(n)",explain:"Collect, sort and write the values back into the same nodes.",code:C(`
class Solution:
    def insertionSortList(self, head):
        vals = []
        node = head
        while node:
            vals.append(node.val)
            node = node.next
        vals.sort()
        node = head
        for v in vals:
            node.val = v
            node = node.next
        return head
`)});
alt(3660,{name:"Reachability search from every index",tag:"Brute force",time:"O(n³)",space:"O(n)",explain:"Follow all legal jumps from each start and take the maximum value seen.",code:C(`
class Solution:
    def maxValue(self, nums):
        n = len(nums)
        res = []
        for s in range(n):
            seen = {s}
            stack = [s]
            while stack:
                i = stack.pop()
                for j in range(n):
                    if j not in seen and ((j > i and nums[j] < nums[i]) or (j < i and nums[j] > nums[i])):
                        seen.add(j)
                        stack.append(j)
            res.append(max(nums[i] for i in seen))
        return res
`)});
alt(1441,{name:"Set of wanted numbers",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"Pop every number up to the last target that is not wanted.",code:C(`
class Solution:
    def buildArray(self, target, n):
        wanted = set(target)
        ops = []
        for x in range(1, target[-1] + 1):
            ops.append("Push")
            if x not in wanted:
                ops.append("Pop")
        return ops
`)});
alt(1497,{name:"Match remainders one by one",tag:"Brute force",time:"O(n²)",space:"O(n)",explain:"Pair each element with a partner of the complementary remainder.",code:C(`
class Solution:
    def canArrange(self, arr, k):
        rest = [x % k for x in arr]
        while rest:
            r = rest.pop()
            need = (k - r) % k
            if need in rest:
                rest.remove(need)
            else:
                return False
        return True
`)});
alt(598,{name:"Simulate the matrix",tag:"Brute force",time:"O(m·n·ops)",space:"O(m·n)",explain:"Apply the operations to a real matrix and count maxima.",code:C(`
class Solution:
    def maxCount(self, m, n, ops):
        grid = [[0] * n for _ in range(m)]
        for a, b in ops:
            for i in range(a):
                for j in range(b):
                    grid[i][j] += 1
        top = max(map(max, grid))
        return sum(row.count(top) for row in grid)
`)});
alt(2952,{name:"Track reachable sums",tag:"Brute force",time:"O(target²)",space:"O(target)",explain:"Maintain the set of reachable amounts and add the smallest missing coin.",code:C(`
class Solution:
    def minimumAddedCoins(self, coins, target):
        reach = {0}
        def add(c):
            nonlocal reach
            reach = reach | {r + c for r in reach if r + c <= target}
        for c in coins:
            add(c)
        added = 0
        for v in range(1, target + 1):
            if v not in reach:
                add(v)
                added += 1
        return added
`)});
alt(1654,{name:"Level-by-level search",tag:"Alternative",time:"O(limit)",space:"O(limit)",explain:"Process the frontier one layer at a time.",code:C(`
class Solution:
    def minimumJumps(self, forbidden, a, b, x):
        bad = set(forbidden)
        limit = max(max(forbidden, default=0), x) + a + b
        frontier = [(0, False)]
        seen = {(0, False)}
        steps = 0
        while frontier:
            nxt = []
            for pos, back in frontier:
                if pos == x:
                    return steps
                moves = [(pos + a, False)]
                if not back:
                    moves.append((pos - b, True))
                for p, bk in moves:
                    if 0 <= p <= limit and p not in bad and (p, bk) not in seen:
                        seen.add((p, bk))
                        nxt.append((p, bk))
            frontier = nxt
            steps += 1
        return -1
`)});
alt(557,{name:"Reverse in place word by word",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"Scan the characters and reverse each word segment.",code:C(`
class Solution:
    def reverseWords(self, s):
        chars = list(s)
        i = 0
        while i < len(chars):
            if chars[i] == ' ':
                i += 1
                continue
            j = i
            while j < len(chars) and chars[j] != ' ':
                j += 1
            chars[i:j] = chars[i:j][::-1]
            i = j
        return ''.join(chars)
`)});
alt(3838,{name:"Lookup string",tag:"Alternative",time:"O(total length)",space:"O(1)",explain:"Index into 'zyx…a'.",code:C(`
class Solution:
    def mapWordWeights(self, words, weights):
        rev = 'zyxwvutsrqponmlkjihgfedcba'
        res = ''
        for w in words:
            res += rev[sum(weights[ord(c) - ord('a')] for c in w) % 26]
        return res
`)});
alt(1833,{name:"Counting sort on costs",tag:"Alternative",time:"O(n + maxCost)",space:"O(maxCost)",explain:"Buy bars cheapest first using a count array.",code:C(`
class Solution:
    def maxIceCream(self, costs, coins):
        cnt = [0] * (max(costs) + 1)
        for c in costs:
            cnt[c] += 1
        bars = 0
        for price, k in enumerate(cnt):
            if price == 0 or k == 0:
                continue
            take = min(k, coins // price)
            bars += take
            coins -= take * price
            if take < k:
                break
        return bars
`)});
alt(1189,{name:"Remove letters word by word",tag:"Brute force",time:"O(n)",space:"O(n)",explain:"Spell 'balloon' repeatedly until a letter runs out.",code:C(`
class Solution:
    def maxNumberOfBalloons(self, text):
        letters = list(text)
        count = 0
        while True:
            for c in 'balloon':
                if c in letters:
                    letters.remove(c)
                else:
                    return count
            count += 1
`)});
alt(3699,{name:"Count by brute-force recursion",tag:"Brute force",time:"O((r − l)ⁿ)",space:"O(n)",explain:"Extend arrays one element at a time with the zigzag rules.",code:C(`
class Solution:
    def zigZagArrays(self, n, l, r):
        MOD = 10**9 + 7
        count = 0
        def go(arr):
            nonlocal count
            if len(arr) == n:
                count += 1
                return
            for v in range(l, r + 1):
                if v == arr[-1]:
                    continue
                if len(arr) >= 2 and (arr[-2] < arr[-1] < v or arr[-2] > arr[-1] > v):
                    continue
                go(arr + [v])
        for v in range(l, r + 1):
            go([v])
        return count % MOD
`)});
alt(3737,{name:"Count every subarray",tag:"Brute force",time:"O(n³)",space:"O(1)",explain:"Count the target in each subarray and compare with half the length.",code:C(`
class Solution:
    def countMajoritySubarrays(self, nums, target):
        n = len(nums)
        return sum(1 for i in range(n) for j in range(i, n) if 2 * nums[i:j + 1].count(target) > j - i + 1)
`)});
alt(1793,{name:"Try every window containing k",tag:"Brute force",time:"O(n²)",space:"O(1)",explain:"Extend the left end and sweep the right end, tracking the minimum.",code:C(`
class Solution:
    def maximumScore(self, nums, k):
        best = 0
        for i in range(k + 1):
            low = min(nums[i:k + 1])
            for j in range(k, len(nums)):
                low = min(low, nums[j])
                best = max(best, low * (j - i + 1))
        return best
`)});
alt(2306,{name:"Check every pair of ideas",tag:"Brute force",time:"O(n²)",space:"O(n)",explain:"Swap first letters of each pair and test against the idea set.",code:C(`
class Solution:
    def distinctNames(self, ideas):
        seen = set(ideas)
        count = 0
        for a in ideas:
            for b in ideas:
                x, y = b[0] + a[1:], a[0] + b[1:]
                if x not in seen and y not in seen:
                    count += 1
        return count
`)});
};
