module.exports=({alt})=>{
const C=s=>s.replace(/^\n/,"").replace(/\n$/,"").split("\n");
// ---- Salesforce (2/3)
alt(3125,{name:"Walk down until the AND is zero",tag:"Brute force",time:"O(n)",space:"O(1)",explain:"Keep AND-ing n−1, n−2 … into a running value; the first x that makes it 0 is the answer.",code:C(`
class Solution:
    def maxNumber(self, n):
        acc = x = n
        while acc:
            x -= 1
            acc &= x
        return x
`)});
alt(3171,{name:"Check every subarray",tag:"Brute force",time:"O(n²)",space:"O(1)",explain:"For every start extend to the right, keep the running OR and the best difference; stop early once the OR exceeds k.",code:C(`
class Solution:
    def minimumDifference(self, nums, k):
        best = float('inf')
        for i in range(len(nums)):
            cur = 0
            for j in range(i, len(nums)):
                cur |= nums[j]
                best = min(best, abs(cur - k))
                if cur > k:
                    break
        return best
`)});
alt(3135,{name:"Try every substring of initial",tag:"Brute force",time:"O(n²·m)",space:"O(1)",explain:"Find the longest substring of the first string that also occurs in the second one.",code:C(`
class Solution:
    def minOperations(self, initial, target):
        best = 0
        for i in range(len(initial)):
            for j in range(i + 1, len(initial) + 1):
                if initial[i:j] in target:
                    best = max(best, j - i)
        return len(initial) + len(target) - 2 * best
`)});
alt(3197,{name:"Recursive guillotine cuts",tag:"Alternative",time:"O((mn)²)",space:"O(mn)",explain:"f(region, k) = best cost to cover the ones of a region with k rectangles: try every horizontal or vertical cut and split k between the two sides.",code:C(`
class Solution:
    def minimumSum(self, grid):
        m, n = len(grid), len(grid[0])
        def box(r1, r2, c1, c2):
            pts = [(i, j) for i in range(r1, r2 + 1) for j in range(c1, c2 + 1) if grid[i][j]]
            if not pts:
                return 0
            rs = [p[0] for p in pts]
            cs = [p[1] for p in pts]
            return (max(rs) - min(rs) + 1) * (max(cs) - min(cs) + 1)
        @lru_cache(None)
        def f(r1, r2, c1, c2, k):
            a = box(r1, r2, c1, c2)
            if k == 1 or a == 0:
                return a
            best = a
            for r in range(r1, r2):
                for j in range(1, k):
                    best = min(best, f(r1, r, c1, c2, j) + f(r + 1, r2, c1, c2, k - j))
            for c in range(c1, c2):
                for j in range(1, k):
                    best = min(best, f(r1, r2, c1, c, j) + f(r1, r2, c + 1, c2, k - j))
            return best
        return f(0, m - 1, 0, n - 1, 3)
`)});
alt(3195,{name:"Track min and max while scanning",tag:"Alternative",time:"O(m·n)",space:"O(1)",explain:"Visit every cell and keep the smallest/largest row and column that held a 1.",code:C(`
class Solution:
    def minimumArea(self, grid):
        r1 = c1 = 10**9
        r2 = c2 = -1
        for i, row in enumerate(grid):
            for j, v in enumerate(row):
                if v:
                    r1, r2 = min(r1, i), max(r2, i)
                    c1, c2 = min(c1, j), max(c2, j)
        return (r2 - r1 + 1) * (c2 - c1 + 1)
`)});
alt(3200,{name:"Closed form per height",tag:"Alternative",time:"O(√n)",space:"O(1)",explain:"A triangle of height h needs ((h+1)//2)² balls for the odd rows and (h//2)(h//2+1) for the even rows; test that for both colour orders.",code:C(`
class Solution:
    def maxHeightOfTriangle(self, red, blue):
        best = 0
        for a, b in ((red, blue), (blue, red)):
            h = 0
            while True:
                nxt = h + 1
                odd = ((nxt + 1) // 2) ** 2
                even = (nxt // 2) * (nxt // 2 + 1)
                if odd <= a and even <= b:
                    h = nxt
                else:
                    break
            best = max(best, h)
        return best
`)});
alt(1659,{name:"Try every placement",tag:"Brute force",time:"O(3^(m·n))",space:"O(m·n)",explain:"Only for tiny grids: place nothing / an introvert / an extrovert in each cell and compute the happiness of full layouts.",code:C(`
class Solution:
    def getMaxGridHappiness(self, m, n, introvertsCount, extrovertsCount):
        grid = [[0] * n for _ in range(m)]
        def score():
            total = 0
            for i in range(m):
                for j in range(n):
                    t = grid[i][j]
                    if t == 1:
                        total += 120
                    elif t == 2:
                        total += 40
                    for di, dj in ((1, 0), (0, 1)):
                        a, b = i + di, j + dj
                        if t and a < m and b < n and grid[a][b]:
                            u = grid[a][b]
                            for x in (t, u):
                                total += -30 if x == 1 else 20
            return total
        best = 0
        def go(pos, i, e):
            nonlocal best
            if pos == m * n:
                best = max(best, score())
                return
            r, c = divmod(pos, n)
            go(pos + 1, i, e)
            if i:
                grid[r][c] = 1
                go(pos + 1, i - 1, e)
                grid[r][c] = 0
            if e:
                grid[r][c] = 2
                go(pos + 1, i, e - 1)
                grid[r][c] = 0
        go(0, introvertsCount, extrovertsCount)
        return best
`)});
alt(1701,{name:"Start and finish lists",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"First compute every finishing time, then average finish − arrival.",code:C(`
class Solution:
    def averageWaitingTime(self, customers):
        finish = []
        t = 0
        for a, c in customers:
            t = max(t, a) + c
            finish.append(t)
        return sum(f - a for f, (a, _) in zip(finish, customers)) / len(customers)
`)});
alt(3313,{name:"BFS from every node",tag:"Brute force",time:"O(n²)",space:"O(n)",explain:"Run a BFS from each node; the last node dequeued is the farthest one (ties resolved toward the later endpoint of the diameter).",code:C(`
class Solution:
    def lastMarkedNodes(self, edges):
        n = len(edges) + 1
        g = [[] for _ in range(n)]
        for a, b in edges:
            g[a].append(b)
            g[b].append(a)
        res = []
        for s in range(n):
            d = {s: 0}
            q = deque([s])
            last = s
            while q:
                u = q.popleft()
                last = u
                for v in g[u]:
                    if v not in d:
                        d[v] = d[u] + 1
                        q.append(v)
            res.append(last)
        return res
`)});
alt(3634,{name:"Binary search for each minimum",tag:"Alternative",time:"O(n log n)",space:"O(1)",explain:"After sorting, take each value as the minimum and binary search how many values stay within k times it.",code:C(`
class Solution:
    def minRemoval(self, nums, k):
        nums.sort()
        best = 0
        for i, x in enumerate(nums):
            j = bisect_right(nums, k * x)
            best = max(best, j - i)
        return len(nums) - best
`)});
alt(2488,{name:"Check every subarray around k",tag:"Brute force",time:"O(n²)",space:"O(1)",explain:"Only subarrays containing k can have median k: count bigger and smaller numbers and accept when bigger − smaller is 0 or 1.",code:C(`
class Solution:
    def countSubarrays(self, nums, k):
        p = nums.index(k)
        res = 0
        for i in range(p + 1):
            for j in range(p, len(nums)):
                big = sum(x > k for x in nums[i:j + 1])
                small = sum(x < k for x in nums[i:j + 1])
                if big - small in (0, 1):
                    res += 1
        return res
`)});
alt(532,{name:"Collect pairs in a set",tag:"Brute force",time:"O(n²)",space:"O(n)",explain:"Look at every pair of positions and store the (smaller, larger) value pair when the difference is k.",code:C(`
class Solution:
    def findPairs(self, nums, k):
        pairs = set()
        for i in range(len(nums)):
            for j in range(i + 1, len(nums)):
                if abs(nums[i] - nums[j]) == k:
                    pairs.add((min(nums[i], nums[j]), max(nums[i], nums[j])))
        return len(pairs)
`)});
alt(3295,{name:"Loop with early exit",tag:"Alternative",time:"O(n + m)",space:"O(m)",explain:"Count matches while scanning and stop as soon as two are found.",code:C(`
class Solution:
    def reportSpam(self, message, bannedWords):
        banned = set(bannedWords)
        hits = 0
        for w in message:
            if w in banned:
                hits += 1
                if hits == 2:
                    return True
        return False
`)});
alt(3893,{name:"Count overlaps for every hub",tag:"Brute force",time:"O(n²)",space:"O(1)",explain:"For each interval count the intervals that share a point with it.",code:C(`
class Solution:
    def maximumTeamSize(self, startTime, endTime):
        n = len(startTime)
        best = 0
        for i in range(n):
            cnt = sum(startTime[j] <= endTime[i] and startTime[i] <= endTime[j] for j in range(n))
            best = max(best, cnt)
        return best
`)});
alt(233,{name:"Count digits of every number",tag:"Brute force",time:"O(n log n)",space:"O(1)",explain:"Loop from 1 to n and count the '1' characters.",code:C(`
class Solution:
    def countDigitOne(self, n):
        return sum(str(i).count('1') for i in range(1, n + 1))
`)});
alt(2451,{name:"Compare the first three words",tag:"Alternative",time:"O(n·L)",space:"O(L)",explain:"Only one word differs: decide from the first three which difference pattern is the majority, then find the word that breaks it.",code:C(`
class Solution:
    def oddString(self, words):
        def d(w):
            return tuple(ord(b) - ord(a) for a, b in zip(w, w[1:]))
        a, b, c = d(words[0]), d(words[1]), d(words[2])
        if a == b:
            common = a
        elif a == c:
            common = a
        else:
            common = b
        for w in words:
            if d(w) != common:
                return w
`)});
alt(1219,{name:"DFS with a visited set",tag:"Alternative",time:"O(m·n·3^g)",space:"O(g)",explain:"Keep the grid unchanged and carry a set of cells on the current path.",code:C(`
class Solution:
    def getMaximumGold(self, grid):
        m, n = len(grid), len(grid[0])
        seen = set()
        def dfs(i, j):
            if not (0 <= i < m and 0 <= j < n) or grid[i][j] == 0 or (i, j) in seen:
                return 0
            seen.add((i, j))
            best = max(dfs(i + 1, j), dfs(i - 1, j), dfs(i, j + 1), dfs(i, j - 1))
            seen.discard((i, j))
            return grid[i][j] + best
        return max(dfs(i, j) for i in range(m) for j in range(n))
`)});
alt(664,{name:"Top-down memoised recursion",tag:"Alternative",time:"O(n³)",space:"O(n²)",explain:"Same recurrence written recursively with caching.",code:C(`
class Solution:
    def strangePrinter(self, s):
        s = ''.join(c for c, _ in groupby(s))
        @lru_cache(None)
        def go(i, j):
            if i > j:
                return 0
            best = 1 + go(i + 1, j)
            for k in range(i + 1, j + 1):
                if s[k] == s[i]:
                    best = min(best, go(i + 1, k - 1) + go(k, j))
            return best
        return go(0, len(s) - 1)
`)});
alt(2366,{name:"Search the number of parts",tag:"Alternative",time:"O(n·x)",space:"O(1)",explain:"For a too-large number find the smallest split count whose biggest part fits under the limit, by trying 2, 3, 4 … parts.",code:C(`
class Solution:
    def minimumReplacement(self, nums):
        ops = 0
        prev = nums[-1]
        for x in reversed(nums[:-1]):
            if x <= prev:
                prev = x
                continue
            k = 2
            while (x + k - 1) // k > prev:
                k += 1
            ops += k - 1
            prev = x // k
        return ops
`)});
alt(255,{name:"Recursion with value bounds",tag:"Alternative",time:"O(n)",space:"O(h)",explain:"Read the preorder with an index: a subtree may only use values between its bounds; a value outside ends that subtree.",code:C(`
class Solution:
    def verifyPreorder(self, preorder):
        i = 0
        def go(lo, hi):
            nonlocal i
            if i == len(preorder) or not (lo < preorder[i] < hi):
                return
            root = preorder[i]
            i += 1
            go(lo, root)
            go(root, hi)
        go(float('-inf'), float('inf'))
        return i == len(preorder)
`)});
};
