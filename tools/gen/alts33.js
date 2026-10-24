module.exports=({alt})=>{
const C=s=>s.replace(/^\n/,"").replace(/\n$/,"").split("\n");
// ---- Uber (5/5)
alt(696,{name:"Expand around every boundary",tag:"Brute force",time:"O(n²)",space:"O(1)",explain:"At every place where the character changes, grow outwards while both sides keep their character.",code:C(`
class Solution:
    def countBinarySubstrings(self, s):
        res = 0
        for i in range(len(s) - 1):
            if s[i] != s[i + 1]:
                l, r = i, i + 1
                while l >= 0 and r < len(s) and s[l] == s[i] and s[r] == s[i + 1]:
                    res += 1
                    l -= 1
                    r += 1
        return res
`)});
alt(719,{name:"List every pair distance",tag:"Brute force",time:"O(n² log n)",space:"O(n²)",explain:"Build all pair distances, sort them and pick the k-th.",code:C(`
class Solution:
    def smallestDistancePair(self, nums, k):
        d = sorted(abs(a - b) for a, b in combinations(nums, 2))
        return d[k - 1]
`)});
alt(824,{name:"Build the suffix as you go",tag:"Alternative",time:"O(n²)",space:"O(n²)",explain:"Keep a growing string of 'a's and append it after each word.",code:C(`
class Solution:
    def toGoatLatin(self, sentence):
        res = []
        tail = "ma"
        for w in sentence.split():
            tail += "a"
            if w[0].lower() in "aeiou":
                res.append(w + tail)
            else:
                res.append(w[1:] + w[0] + tail)
        return " ".join(res)
`)});
alt(968,{name:"DP with three states per node",tag:"Alternative",time:"O(n)",space:"O(h)",explain:"For each node compute the cheapest cost if it has a camera, if it is watched by a child, and if it is not yet watched.",code:C(`
class Solution:
    def minCameraCover(self, root):
        INF = 10 ** 9
        def dfs(node):
            if not node:
                return (INF, 0, 0)
            la, lb, lc = dfs(node.left)
            ra, rb, rc = dfs(node.right)
            a = 1 + min(la, lb, lc) + min(ra, rb, rc)
            b = min(la + min(ra, rb), ra + min(la, lb))
            c = lb + rb
            return (a, b, c)
        a, b, c = dfs(root)
        return min(a, b)
`)});
alt(983,{name:"Top-down memo over trip days",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"For each trip day try each ticket and jump to the first day it does not cover.",code:C(`
class Solution:
    def mincostTickets(self, days, costs):
        n = len(days)
        @lru_cache(None)
        def go(i):
            if i == n:
                return 0
            best = float("inf")
            for c, span in ((costs[0], 1), (costs[1], 7), (costs[2], 30)):
                j = i
                while j < n and days[j] < days[i] + span:
                    j += 1
                best = min(best, c + go(j))
            return best
        return go(0)
`)});
alt(1005,{name:"Sort, flip negatives, fix the parity",tag:"Alternative",time:"O(n log n)",space:"O(1)",explain:"Flip the negatives from the smallest up; if flips remain and are odd, flip the smallest absolute value once.",code:C(`
class Solution:
    def largestSumAfterKNegations(self, nums, k):
        nums.sort()
        for i in range(len(nums)):
            if nums[i] < 0 and k > 0:
                nums[i] = -nums[i]
                k -= 1
        return sum(nums) - (k % 2) * 2 * min(nums)
`)});
alt(1020,{name:"DFS each island, check the border",tag:"Alternative",time:"O(m·n)",space:"O(m·n)",explain:"Flood each land island and add its size only if it never touches the border.",code:C(`
class Solution:
    def numEnclaves(self, grid):
        m, n = len(grid), len(grid[0])
        seen = set()
        res = 0
        for si in range(m):
            for sj in range(n):
                if grid[si][sj] == 1 and (si, sj) not in seen:
                    seen.add((si, sj))
                    stack = [(si, sj)]
                    size, edge = 0, False
                    while stack:
                        i, j = stack.pop()
                        size += 1
                        if i in (0, m - 1) or j in (0, n - 1):
                            edge = True
                        for a, b in ((i + 1, j), (i - 1, j), (i, j + 1), (i, j - 1)):
                            if 0 <= a < m and 0 <= b < n and grid[a][b] == 1 and (a, b) not in seen:
                                seen.add((a, b))
                                stack.append((a, b))
                    if not edge:
                        res += size
        return res
`)});
alt(1697,{name:"BFS for every query",tag:"Brute force",time:"O(Q · (n + E))",space:"O(n + E)",explain:"For each query walk the graph using only edges shorter than the limit.",code:C(`
class Solution:
    def distanceLimitedPathsExist(self, n, edgeList, queries):
        res = []
        for p, q, limit in queries:
            g = defaultdict(list)
            for a, b, w in edgeList:
                if w < limit:
                    g[a].append(b)
                    g[b].append(a)
            seen = {p}
            dq = deque([p])
            while dq:
                u = dq.popleft()
                for v in g[u]:
                    if v not in seen:
                        seen.add(v)
                        dq.append(v)
            res.append(q in seen)
        return res
`)});
alt(1698,{name:"Set of every substring",tag:"Brute force",time:"O(n³)",space:"O(n³)",explain:"Slice every substring and count the different ones.",code:C(`
class Solution:
    def countDistinct(self, s):
        n = len(s)
        return len({s[i:j] for i in range(n) for j in range(i + 1, n + 1)})
`)});
alt(1698,{name:"Sorted suffixes minus common prefixes",tag:"Alternative",time:"O(n² log n)",space:"O(n²)",explain:"All substrings minus the ones repeated: neighbours in the sorted suffix list share their common prefix.",code:C(`
class Solution:
    def countDistinct(self, s):
        n = len(s)
        suf = sorted(s[i:] for i in range(n))
        total = n * (n + 1) // 2
        for a, b in zip(suf, suf[1:]):
            l = 0
            while l < len(a) and l < len(b) and a[l] == b[l]:
                l += 1
            total -= l
        return total
`)});
alt(1901,{name:"Check every cell",tag:"Brute force",time:"O(m·n)",space:"O(1)",explain:"Look at all four neighbours of every cell and return the first one that is bigger than all of them.",code:C(`
class Solution:
    def findPeakGrid(self, mat):
        m, n = len(mat), len(mat[0])
        for i in range(m):
            for j in range(n):
                if all(mat[i][j] > mat[a][b] for a, b in ((i - 1, j), (i + 1, j), (i, j - 1), (i, j + 1))
                       if 0 <= a < m and 0 <= b < n):
                    return [i, j]
`)});
alt(1915,{name:"Check every substring",tag:"Brute force",time:"O(n²)",space:"O(1)",explain:"Extend each start letter by letter, keeping the odd-count mask, and count when at most one bit is set.",code:C(`
class Solution:
    def wonderfulSubstrings(self, word):
        res = 0
        for i in range(len(word)):
            mask = 0
            for j in range(i, len(word)):
                mask ^= 1 << (ord(word[j]) - 97)
                if mask & (mask - 1) == 0:
                    res += 1
        return res
`)});
alt(1931,{name:"Paint cell by cell with backtracking",tag:"Brute force",time:"O(3^(m·n))",space:"O(m·n)",explain:"Try each of the 3 colours in every cell, skipping the ones that match the cell above or to the left.",code:C(`
class Solution:
    def colorTheGrid(self, m, n):
        grid = [[-1] * n for _ in range(m)]
        def go(pos):
            if pos == m * n:
                return 1
            i, j = divmod(pos, n)
            total = 0
            for c in range(3):
                if (i and grid[i - 1][j] == c) or (j and grid[i][j - 1] == c):
                    continue
                grid[i][j] = c
                total += go(pos + 1)
                grid[i][j] = -1
            return total
        return go(0) % (10 ** 9 + 7)
`)});
alt(2076,{name:"Add the friendship, then test every restriction",tag:"Brute force",time:"O(Q · R · (n + E))",space:"O(n + E)",explain:"Tentatively add the edge, search the graph for each restricted pair, and undo it if one is connected.",code:C(`
class Solution:
    def friendRequests(self, n, restrictions, requests):
        adj = [set() for _ in range(n)]
        def connected(a, b):
            seen = {a}
            dq = deque([a])
            while dq:
                u = dq.popleft()
                if u == b:
                    return True
                for v in adj[u]:
                    if v not in seen:
                        seen.add(v)
                        dq.append(v)
            return False
        res = []
        for u, v in requests:
            if v in adj[u]:
                res.append(True)
                continue
            adj[u].add(v)
            adj[v].add(u)
            bad = any(connected(x, y) for x, y in restrictions)
            if bad:
                adj[u].remove(v)
                adj[v].remove(u)
            res.append(not bad)
        return res
`)});
alt(2092,{name:"Repeat spreading inside each time",tag:"Alternative",time:"O(M²)",space:"O(M)",explain:"For one time keep scanning its meetings until nobody new learns the secret.",code:C(`
class Solution:
    def findAllPeople(self, n, meetings, firstPerson):
        know = {0, firstPerson}
        by_time = defaultdict(list)
        for x, y, t in meetings:
            by_time[t].append((x, y))
        for t in sorted(by_time):
            changed = True
            while changed:
                changed = False
                for x, y in by_time[t]:
                    if (x in know) != (y in know):
                        know.add(x)
                        know.add(y)
                        changed = True
        return sorted(know)
`)});
alt(2093,{name:"Bellman-Ford over discount levels",tag:"Alternative",time:"O(n · E · D)",space:"O(n · D)",explain:"Keep the best cost to every city for each number of discounts used and relax all roads until nothing improves.",code:C(`
class Solution:
    def minimumCost(self, n, highways, discounts):
        INF = float("inf")
        dp = [[INF] * n for _ in range(discounts + 1)]
        dp[0][0] = 0
        changed = True
        while changed:
            changed = False
            for a, b, t in highways:
                for u, v in ((a, b), (b, a)):
                    for k in range(discounts + 1):
                        if dp[k][u] + t < dp[k][v]:
                            dp[k][v] = dp[k][u] + t
                            changed = True
                        if k < discounts and dp[k][u] + t // 2 < dp[k + 1][v]:
                            dp[k + 1][v] = dp[k][u] + t // 2
                            changed = True
        res = min(dp[k][n - 1] for k in range(discounts + 1))
        return -1 if res == INF else res
`)});
alt(2158,{name:"Set of painted cells",tag:"Brute force",time:"O(total length)",space:"O(total length)",explain:"Remember every painted unit cell and count the ones in the new range that are not in the set yet.",code:C(`
class Solution:
    def amountPainted(self, paint):
        painted = set()
        res = []
        for s, e in paint:
            new = [c for c in range(s, e) if c not in painted]
            painted.update(new)
            res.append(len(new))
        return res
`)});
alt(2163,{name:"Try every split with sorting",tag:"Brute force",time:"O(n² log n)",space:"O(n)",explain:"For each split point, sort both sides and take the n smallest on the left and the n largest on the right.",code:C(`
class Solution:
    def minimumDifference(self, nums):
        n = len(nums) // 3
        return min(sum(sorted(nums[:i])[:n]) - sum(sorted(nums[i:])[-n:]) for i in range(n, 2 * n + 1))
`)});
alt(2226,{name:"Try sizes from the biggest down",tag:"Brute force",time:"O(n · max)",space:"O(1)",explain:"Start at the largest pile and try smaller sizes until k children can be served.",code:C(`
class Solution:
    def maximumCandies(self, candies, k):
        for x in range(max(candies), 0, -1):
            if sum(c // x for c in candies) >= k:
                return x
        return 0
`)});
alt(2251,{name:"Check every flower for every person",tag:"Brute force",time:"O(n·m)",space:"O(1)",explain:"For each person count the flowers whose range contains the time.",code:C(`
class Solution:
    def fullBloomFlowers(self, flowers, people):
        return [sum(s <= p <= e for s, e in flowers) for p in people]
`)});
alt(2296,{name:"One string and a cursor index",tag:"Brute force",time:"O(n) per call",space:"O(n)",explain:"Keep the whole text and the cursor position and slice around the cursor on every call.",code:C(`
class TextEditor:
    def __init__(self):
        self.s = ""
        self.c = 0
    def addText(self, text):
        self.s = self.s[:self.c] + text + self.s[self.c:]
        self.c += len(text)
    def deleteText(self, k):
        k = min(k, self.c)
        self.s = self.s[:self.c - k] + self.s[self.c:]
        self.c -= k
        return k
    def cursorLeft(self, k):
        self.c = max(0, self.c - k)
        return self.s[max(0, self.c - 10):self.c]
    def cursorRight(self, k):
        self.c = min(len(self.s), self.c + k)
        return self.s[max(0, self.c - 10):self.c]
`)});
alt(2389,{name:"Greedy for each query",tag:"Brute force",time:"O(q · n)",space:"O(n)",explain:"Add the smallest numbers one by one until the next would exceed the query.",code:C(`
class Solution:
    def answerQueries(self, nums, queries):
        nums = sorted(nums)
        res = []
        for q in queries:
            total = cnt = 0
            for x in nums:
                if total + x > q:
                    break
                total += x
                cnt += 1
            res.append(cnt)
        return res
`)});
alt(2477,{name:"Peel leaves from the outside in",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"Process leaves first, pushing each city's people onto its only remaining neighbour.",code:C(`
class Solution:
    def minimumFuelCost(self, roads, seats):
        n = len(roads) + 1
        g = defaultdict(list)
        deg = [0] * n
        for a, b in roads:
            g[a].append(b)
            g[b].append(a)
            deg[a] += 1
            deg[b] += 1
        people = [1] * n
        q = deque(i for i in range(1, n) if deg[i] == 1)
        fuel = 0
        while q:
            u = q.popleft()
            fuel += (people[u] + seats - 1) // seats
            deg[u] = 0
            for v in g[u]:
                if deg[v]:
                    people[v] += people[u]
                    deg[v] -= 1
                    if deg[v] == 1 and v != 0:
                        q.append(v)
        return fuel
`)});
alt(3202,{name:"DP over the last two chosen elements",tag:"Brute force",time:"O(n³)",space:"O(n²)",explain:"dp[i][j] is the longest valid subsequence ending with nums[i], nums[j]; extend it by an earlier element with the same pair-sum remainder.",code:C(`
class Solution:
    def maximumLength(self, nums, k):
        n = len(nums)
        dp = [[2] * n for _ in range(n)]
        best = 2
        for j in range(n):
            for i in range(j):
                for p in range(i):
                    if (nums[p] + nums[i]) % k == (nums[i] + nums[j]) % k:
                        dp[i][j] = max(dp[i][j], dp[p][i] + 1)
                best = max(best, dp[i][j])
        return best
`)});
alt(3356,{name:"Sweep with a running capacity",tag:"Alternative",time:"O(n + q)",space:"O(n)",explain:"Go left to right; whenever the capacity at a cell is too small, apply the next query to it.",code:C(`
class Solution:
    def minZeroArray(self, nums, queries):
        n = len(nums)
        diff = [0] * (n + 1)
        total = k = 0
        for i in range(n):
            total += diff[i]
            while total < nums[i]:
                if k == len(queries):
                    return -1
                l, r, v = queries[k]
                k += 1
                if r < i:
                    continue
                if l <= i:
                    total += v
                else:
                    diff[l] += v
                diff[r + 1] -= v
        return k
`)});
alt(3419,{name:"Binary search the limit + BFS to node 0",tag:"Alternative",time:"O((n+E) log E)",space:"O(n + E)",explain:"For a limit W, walk the reversed graph from node 0 using edges up to W and check that every node is reached.",code:C(`
class Solution:
    def minMaxWeight(self, n, edges, threshold):
        ws = sorted({w for _, _, w in edges})
        def ok(W):
            rev = defaultdict(list)
            for a, b, w in edges:
                if w <= W:
                    rev[b].append(a)
            seen = {0}
            dq = deque([0])
            while dq:
                u = dq.popleft()
                for v in rev[u]:
                    if v not in seen:
                        seen.add(v)
                        dq.append(v)
            return len(seen) == n
        if not ok(ws[-1]):
            return -1
        lo, hi = 0, len(ws) - 1
        while lo < hi:
            mid = (lo + hi) // 2
            if ok(ws[mid]):
                hi = mid
            else:
                lo = mid + 1
        return ws[lo]
`)});
alt(3443,{name:"Pick a direction and flip the worst moves",tag:"Alternative",time:"O(n)",space:"O(1)",explain:"For each of the 4 diagonal targets, a move is +1 if it heads there and −1 if not; flipping up to k of the −1 moves adds 2 each.",code:C(`
class Solution:
    def maxDistance(self, s, k):
        best = 0
        dxs = {"E": 1, "W": -1}
        dys = {"N": 1, "S": -1}
        for sx in (1, -1):
            for sy in (1, -1):
                cur = bad = 0
                for ch in s:
                    v = dxs.get(ch, 0) * sx + dys.get(ch, 0) * sy
                    cur += v
                    if v < 0:
                        bad += 1
                    best = max(best, cur + 2 * min(bad, k))
        return best
`)});
};
