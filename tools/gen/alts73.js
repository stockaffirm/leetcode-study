module.exports=({alt})=>{
const C=s=>s.replace(/^\n/,"").replace(/\n$/,"").split("\n");
// ---- Microsoft (4)
alt(3097,{name:"Brute force over subarrays",tag:"Brute force",time:"O(n²)",space:"O(1)",explain:"Extend each start until the OR reaches k.",code:C(`
class Solution:
    def minimumSubarrayLength(self, nums, k):
        best = float('inf')
        for i in range(len(nums)):
            cur = 0
            for j in range(i, len(nums)):
                cur |= nums[j]
                if cur >= k:
                    best = min(best, j - i + 1)
                    break
        return -1 if best == float('inf') else best
`)});
alt(2601,{name:"Binary search the largest allowed prime",tag:"Alternative",time:"O(n log π)",space:"O(V)",explain:"The best prime is the largest one below x − previous.",code:C(`
class Solution:
    def primeSubOperation(self, nums):
        limit = max(nums)
        flags = [True] * (limit + 1)
        primes = []
        for i in range(2, limit + 1):
            if flags[i]:
                primes.append(i)
                for j in range(i * i, limit + 1, i):
                    flags[j] = False
        prev = 0
        for x in nums:
            if x <= prev:
                return False
            idx = bisect_left(primes, x - prev) - 1
            prev = x - primes[idx] if idx >= 0 else x
        return True
`)});
alt(1455,{name:"Scan with index()",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"Find the first prefix match with a generator.",code:C(`
class Solution:
    def isPrefixOfWord(self, sentence, searchWord):
        words = sentence.split()
        return next((i + 1 for i, w in enumerate(words) if w[:len(searchWord)] == searchWord), -1)
`)});
alt(2165,{name:"Try every permutation",tag:"Brute force",time:"O(d!)",space:"O(d)",explain:"Enumerate the digit orders and keep the smallest valid number.",code:C(`
class Solution:
    def smallestNumber(self, num):
        if num == 0:
            return 0
        digits = str(abs(num))
        vals = []
        for p in set(permutations(digits)):
            if p[0] == '0':
                continue
            vals.append(int(''.join(p)))
        if not vals:
            return 0
        return min(vals) if num > 0 else -max(vals)
`)});
alt(2061,{name:"Simulate step by step with a direction index",tag:"Alternative",time:"O(m·n)",space:"O(m·n)",explain:"Track visited states in a 3D array.",code:C(`
class Solution:
    def numberOfCleanSpaces(self, room):
        m, n = len(room), len(room[0])
        dx = [0, 1, 0, -1]
        dy = [1, 0, -1, 0]
        state = [[[False] * 4 for _ in range(n)] for _ in range(m)]
        clean = [[False] * n for _ in range(m)]
        x = y = d = 0
        while not state[x][y][d]:
            state[x][y][d] = True
            clean[x][y] = True
            nx, ny = x + dx[d], y + dy[d]
            if 0 <= nx < m and 0 <= ny < n and room[nx][ny] == 0:
                x, y = nx, ny
            else:
                d = (d + 1) % 4
        return sum(map(sum, clean))
`)});
alt(2981,{name:"Count every special substring",tag:"Brute force",time:"O(n³)",space:"O(n²)",explain:"Count how often each repeated-letter substring occurs.",code:C(`
class Solution:
    def maximumLength(self, s):
        cnt = Counter()
        n = len(s)
        for i in range(n):
            for j in range(i, n):
                if s[j] != s[i]:
                    break
                cnt[s[i:j + 1]] += 1
        return max((len(t) for t, c in cnt.items() if c >= 3), default=-1)
`)});
alt(2109,{name:"Insert from the right",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"Insert spaces from the last index so earlier indices stay valid.",code:C(`
class Solution:
    def addSpaces(self, s, spaces):
        chars = list(s)
        for i in reversed(spaces):
            chars.insert(i, ' ')
        return ''.join(chars)
`)});
alt(1524,{name:"Brute force over subarrays",tag:"Brute force",time:"O(n²)",space:"O(1)",explain:"Sum every subarray.",code:C(`
class Solution:
    def numOfSubarrays(self, arr):
        count = 0
        for i in range(len(arr)):
            s = 0
            for j in range(i, len(arr)):
                s += arr[j]
                if s % 2:
                    count += 1
        return count % (10**9 + 7)
`)});
alt(1129,{name:"Two BFS runs, one per starting colour",tag:"Alternative",time:"O(n + e)",space:"O(n + e)",explain:"Take the minimum of the two distance arrays.",code:C(`
class Solution:
    def shortestAlternatingPaths(self, n, redEdges, blueEdges):
        graph = {0: defaultdict(list), 1: defaultdict(list)}
        for a, b in redEdges:
            graph[0][a].append(b)
        for a, b in blueEdges:
            graph[1][a].append(b)
        INF = float('inf')
        def bfs(first):
            dist = [INF] * n
            dist[0] = 0
            seen = set()
            q = deque([(0, 1 - first, 0)])
            while q:
                u, last, d = q.popleft()
                color = 1 - last
                for v in graph[color][u]:
                    if (v, color) not in seen:
                        seen.add((v, color))
                        dist[v] = min(dist[v], d + 1)
                        q.append((v, color, d + 1))
            return dist
        a, b = bfs(0), bfs(1)
        return [min(x, y) if min(x, y) < INF else -1 for x, y in zip(a, b)]
`)});
alt(2481,{name:"Parity of n",tag:"Alternative",time:"O(1)",space:"O(1)",explain:"Same case analysis with a conditional expression.",code:C(`
class Solution:
    def numberOfCuts(self, n):
        return 0 if n == 1 else (n // 2 if not n & 1 else n)
`)});
alt(2064,{name:"Linear search on the maximum",tag:"Brute force",time:"O(max·m)",space:"O(1)",explain:"Try x = 1, 2, 3, … until the stores suffice.",code:C(`
class Solution:
    def minimizedMaximum(self, n, quantities):
        x = 1
        while sum(-(-q // x) for q in quantities) > n:
            x += 1
        return x
`)});
alt(2140,{name:"Memoised recursion",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"Top-down version of the same choice.",code:C(`
class Solution:
    def mostPoints(self, questions):
        n = len(questions)
        @lru_cache(None)
        def go(i):
            if i >= n:
                return 0
            points, skip = questions[i]
            return max(go(i + 1), points + go(i + skip + 1))
        return go(0)
`)});
alt(3392,{name:"Index loop",tag:"Alternative",time:"O(n)",space:"O(1)",explain:"Check nums[i] + nums[i + 2] against half of nums[i + 1].",code:C(`
class Solution:
    def countSubarrays(self, nums):
        count = 0
        for i in range(len(nums) - 2):
            if (nums[i] + nums[i + 2]) * 2 == nums[i + 1]:
                count += 1
        return count
`)});
alt(434,{name:"split()",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"Split on whitespace and count the pieces.",code:C(`
class Solution:
    def countSegments(self, s):
        return len(s.split())
`)});
alt(3576,{name:"Brute force over flip sequences",tag:"Brute force",time:"exponential",space:"O(states)",explain:"Breadth-first search over arrays reachable with at most k flips (tiny inputs).",code:C(`
class Solution:
    def canMakeEqual(self, nums, k):
        start = tuple(nums)
        seen = {start}
        level = [start]
        for step in range(k + 1):
            nxt = []
            for a in level:
                if len(set(a)) == 1:
                    return True
                for i in range(len(a) - 1):
                    b = list(a)
                    b[i], b[i + 1] = -b[i], -b[i + 1]
                    b = tuple(b)
                    if b not in seen:
                        seen.add(b)
                        nxt.append(b)
            level = nxt
        return False
`)});
alt(2114,{name:"Count words with split",tag:"Alternative",time:"O(total length)",space:"O(n)",explain:"Split each sentence.",code:C(`
class Solution:
    def mostWordsFound(self, sentences):
        return max(len(s.split()) for s in sentences)
`)});
alt(2322,{name:"Remove every pair of edges and measure",tag:"Brute force",time:"O(n³)",space:"O(n)",explain:"Delete two edges, find the three components and compute the score.",code:C(`
class Solution:
    def minimumScore(self, nums, edges):
        n = len(nums)
        best = float('inf')
        for a, b in combinations(range(len(edges)), 2):
            adj = defaultdict(list)
            for idx, (u, v) in enumerate(edges):
                if idx not in (a, b):
                    adj[u].append(v)
                    adj[v].append(u)
            seen = set()
            xors = []
            for s in range(n):
                if s in seen:
                    continue
                seen.add(s)
                stack = [s]
                x = 0
                while stack:
                    u = stack.pop()
                    x ^= nums[u]
                    for v in adj[u]:
                        if v not in seen:
                            seen.add(v)
                            stack.append(v)
                xors.append(x)
            best = min(best, max(xors) - min(xors))
        return best
`)});
alt(3665,{name:"Memoised recursion from the start",tag:"Alternative",time:"O(m·n)",space:"O(m·n)",explain:"Count the ways to finish from each empty cell.",code:C(`
class Solution:
    def uniquePaths(self, grid):
        MOD = 10**9 + 7
        m, n = len(grid), len(grid[0])
        def land(i, j, d):
            x, y = i, j
            while True:
                x, y = (x, y + 1) if d == 0 else (x + 1, y)
                if x >= m or y >= n:
                    return None
                if grid[x][y] == 0:
                    return (x, y)
                d = 1 - d
        @lru_cache(None)
        def ways(i, j):
            if (i, j) == (m - 1, n - 1):
                return 1
            total = 0
            for d in (0, 1):
                t = land(i, j, d)
                if t:
                    total += ways(*t)
            return total % MOD
        return ways(0, 0)
`)});
alt(1451,{name:"Bucket the words by length",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"Group words by length, then read the groups in order.",code:C(`
class Solution:
    def arrangeWords(self, text):
        buckets = defaultdict(list)
        for w in text.lower().split():
            buckets[len(w)].append(w)
        words = [w for length in sorted(buckets) for w in buckets[length]]
        out = ' '.join(words)
        return out[0].upper() + out[1:]
`)});
alt(1995,{name:"Brute force over quadruples",tag:"Brute force",time:"O(n⁴)",space:"O(1)",explain:"Try every four indices.",code:C(`
class Solution:
    def countQuadruplets(self, nums):
        return sum(1 for a, b, c, d in combinations(range(len(nums)), 4)
                   if nums[a] + nums[b] + nums[c] == nums[d])
`)});
alt(2221,{name:"Binomial coefficients",tag:"Alternative",time:"O(n)",space:"O(1)",explain:"The answer is Σ C(n−1, i)·nums[i] mod 10.",code:C(`
class Solution:
    def triangularSum(self, nums):
        n = len(nums)
        return sum(comb(n - 1, i) * x for i, x in enumerate(nums)) % 10
`)});
alt(2320,{name:"Count states plot by plot",tag:"Alternative",time:"O(n)",space:"O(1)",explain:"One side: ways ending with an empty or a built plot.",code:C(`
class Solution:
    def countHousePlacements(self, n):
        MOD = 10**9 + 7
        empty, house = 1, 1
        for _ in range(n - 1):
            empty, house = (empty + house) % MOD, empty
        side = (empty + house) % MOD
        return side * side % MOD
`)});
alt(3461,{name:"String-based reduction",tag:"Alternative",time:"O(n²)",space:"O(n)",explain:"Rebuild the digit string each round.",code:C(`
class Solution:
    def hasSameDigits(self, s):
        while len(s) > 2:
            s = ''.join(str((int(s[i]) + int(s[i + 1])) % 10) for i in range(len(s) - 1))
        return s[0] == s[1]
`)});
alt(1845,{name:"Next-seat pointer plus a heap of returned seats",tag:"Alternative",time:"O(log n) per call",space:"O(n)",explain:"Hand out new seat numbers in order; reuse returned ones first.",code:C(`
class SeatManager:
    def __init__(self, n):
        self.next = 1
        self.returned = []

    def reserve(self):
        if self.returned:
            return heappop(self.returned)
        seat = self.next
        self.next += 1
        return seat

    def unreserve(self, seatNumber):
        heappush(self.returned, seatNumber)
`)});
alt(2370,{name:"O(n²) dp over earlier positions",tag:"Brute force",time:"O(n²)",space:"O(n)",explain:"Extend every earlier ideal subsequence.",code:C(`
class Solution:
    def longestIdealString(self, s, k):
        dp = [1] * len(s)
        for i in range(len(s)):
            for j in range(i):
                if abs(ord(s[i]) - ord(s[j])) <= k:
                    dp[i] = max(dp[i], dp[j] + 1)
        return max(dp)
`)});
alt(2908,{name:"Brute force over triplets",tag:"Brute force",time:"O(n³)",space:"O(1)",explain:"Test every triplet.",code:C(`
class Solution:
    def minimumSum(self, nums):
        best = float('inf')
        for i, j, k in combinations(range(len(nums)), 3):
            if nums[i] < nums[j] > nums[k]:
                best = min(best, nums[i] + nums[j] + nums[k])
        return -1 if best == float('inf') else best
`)});
alt(3289,{name:"Seen set",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"Collect values met a second time.",code:C(`
class Solution:
    def getSneakyNumbers(self, nums):
        seen = set()
        res = []
        for x in nums:
            if x in seen:
                res.append(x)
            seen.add(x)
        return sorted(res)
`)});
alt(3446,{name:"Insertion sort along each diagonal",tag:"Alternative",time:"O(n³)",space:"O(1)",explain:"Sort every diagonal in place with a bubble pass.",code:C(`
class Solution:
    def sortMatrix(self, grid):
        n = len(grid)
        for key in range(-(n - 1), n):
            cells = [(i, i - key) for i in range(n) if 0 <= i - key < n]
            vals = [grid[i][j] for i, j in cells]
            for a in range(len(vals)):
                for b in range(len(vals) - 1 - a):
                    if (vals[b] < vals[b + 1]) if key >= 0 else (vals[b] > vals[b + 1]):
                        vals[b], vals[b + 1] = vals[b + 1], vals[b]
            for (i, j), v in zip(cells, vals):
                grid[i][j] = v
        return grid
`)});
alt(2872,{name:"Recursive subtree sums",tag:"Alternative",time:"O(n)",space:"O(h)",explain:"Return the remaining sum from each child.",code:C(`
class Solution:
    def maxKDivisibleComponents(self, n, edges, values, k):
        adj = defaultdict(list)
        for a, b in edges:
            adj[a].append(b)
            adj[b].append(a)
        count = 0
        def dfs(u, parent):
            nonlocal count
            total = values[u]
            for v in adj[u]:
                if v != parent:
                    total += dfs(v, u)
            if total % k == 0:
                count += 1
                return 0
            return total
        dfs(0, -1)
        return count
`)});
alt(3578,{name:"O(n²) dp recomputing max and min",tag:"Brute force",time:"O(n²)",space:"O(n)",explain:"For each end try every start of the last segment.",code:C(`
class Solution:
    def countPartitions(self, nums, k):
        MOD = 10**9 + 7
        n = len(nums)
        dp = [0] * (n + 1)
        dp[0] = 1
        for i in range(1, n + 1):
            for j in range(i - 1, -1, -1):
                seg = nums[j:i]
                if max(seg) - min(seg) > k:
                    break
                dp[i] = (dp[i] + dp[j]) % MOD
        return dp[n]
`)});
alt(1018,{name:"Python big integers",tag:"Alternative",time:"O(n²)",space:"O(n)",explain:"Build each prefix as an integer.",code:C(`
class Solution:
    def prefixesDivBy5(self, nums):
        return [int(''.join(map(str, nums[:i + 1])), 2) % 5 == 0 for i in range(len(nums))]
`)});
alt(1250,{name:"Loop with gcd",tag:"Alternative",time:"O(n log V)",space:"O(1)",explain:"Fold the gcd and stop early at 1.",code:C(`
class Solution:
    def isGoodArray(self, nums):
        g = 0
        for x in nums:
            g = gcd(g, x)
            if g == 1:
                return True
        return False
`)});
alt(2110,{name:"Brute force over subarrays",tag:"Brute force",time:"O(n²)",space:"O(1)",explain:"Check every subarray for the descent pattern.",code:C(`
class Solution:
    def getDescentPeriods(self, prices):
        n = len(prices)
        count = 0
        for i in range(n):
            ok = True
            j = i
            while j < n and ok:
                count += 1
                j += 1
                if j < n and prices[j - 1] - prices[j] != 1:
                    ok = False
        return count
`)});
alt(2798,{name:"filter",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"Filter then count.",code:C(`
class Solution:
    def numberOfEmployeesWhoMetTarget(self, hours, target):
        return len([h for h in hours if h >= target])
`)});
alt(3803,{name:"Recompute the distinct count per prefix",tag:"Brute force",time:"O(n²)",space:"O(26)",explain:"Take the set of each prefix.",code:C(`
class Solution:
    def residuePrefixes(self, s):
        return sum(1 for i in range(1, len(s) + 1) if len(set(s[:i])) == i % 3)
`)});
alt(3510,{name:"Simulate on a plain list",tag:"Brute force",time:"O(n²)",space:"O(n)",explain:"Repeatedly merge the leftmost minimum-sum adjacent pair.",code:C(`
class Solution:
    def minimumPairRemoval(self, nums):
        a = nums[:]
        ops = 0
        while any(a[i] > a[i + 1] for i in range(len(a) - 1)):
            i = min(range(len(a) - 1), key=lambda t: (a[t] + a[t + 1], t))
            a[i:i + 2] = [a[i] + a[i + 1]]
            ops += 1
        return ops
`)});
alt(3797,{name:"Enumerate every route",tag:"Brute force",time:"exponential",space:"O(n)",explain:"DFS (Depth-First Search) over all legal move sequences (tiny grids).",code:C(`
class Solution:
    def numberOfRoutes(self, grid, d):
        n, m = len(grid), len(grid[0])
        count = 0
        def near(a, b):
            return (a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2 <= d * d
        def dfs(r, c, stayed):
            nonlocal count
            if r == 0:
                count += 1
            if not stayed:
                for c2 in range(m):
                    if c2 != c and grid[r][c2] == '.' and near((r, c), (r, c2)):
                        dfs(r, c2, True)
            if r > 0:
                for c2 in range(m):
                    if grid[r - 1][c2] == '.' and near((r, c), (r - 1, c2)):
                        dfs(r - 1, c2, False)
        for c in range(m):
            if grid[n - 1][c] == '.':
                dfs(n - 1, c, False)
        return count % (10**9 + 7)
`)});
alt(1624,{name:"Brute force over pairs",tag:"Brute force",time:"O(n²)",space:"O(1)",explain:"Compare every pair of positions.",code:C(`
class Solution:
    def maxLengthBetweenEqualCharacters(self, s):
        best = -1
        for i in range(len(s)):
            for j in range(i + 1, len(s)):
                if s[i] == s[j]:
                    best = max(best, j - i - 1)
        return best
`)});
alt(3379,{name:"Explicit loop",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"Walk the circle step by step.",code:C(`
class Solution:
    def constructTransformedArray(self, nums):
        n = len(nums)
        res = []
        for i, x in enumerate(nums):
            if x == 0:
                res.append(0)
                continue
            pos = i
            step = 1 if x > 0 else -1
            for _ in range(abs(x)):
                pos = (pos + step) % n
            res.append(nums[pos])
        return res
`)});
alt(1348,{name:"Sorted lists with bisect",tag:"Alternative",time:"O(log n) + chunk counts",space:"O(n)",explain:"Keep each name's times sorted and count each chunk with two binary searches.",code:C(`
class TweetCounts:
    def __init__(self):
        self.times = defaultdict(list)

    def recordTweet(self, tweetName, time):
        insort(self.times[tweetName], time)

    def getTweetCountsPerFrequency(self, freq, tweetName, startTime, endTime):
        size = {"minute": 60, "hour": 3600, "day": 86400}[freq]
        ts = self.times[tweetName]
        res = []
        lo = startTime
        while lo <= endTime:
            hi = min(lo + size - 1, endTime)
            res.append(bisect_right(ts, hi) - bisect_left(ts, lo))
            lo += size
        return res
`)});
alt(1037,{name:"Triangle area",tag:"Alternative",time:"O(1)",space:"O(1)",explain:"Non-zero shoelace area means the points are not collinear.",code:C(`
class Solution:
    def isBoomerang(self, points):
        (x1, y1), (x2, y2), (x3, y3) = points
        area2 = x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2)
        return area2 != 0
`)});
alt(693,{name:"Binary string check",tag:"Alternative",time:"O(log n)",space:"O(log n)",explain:"Compare neighbouring characters.",code:C(`
class Solution:
    def hasAlternatingBits(self, n):
        b = bin(n)[2:]
        return all(x != y for x, y in zip(b, b[1:]))
`)});
alt(388,{name:"Stack of names",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"Keep the actual path components on a stack.",code:C(`
class Solution:
    def lengthLongestPath(self, input):
        stack = []
        best = 0
        for line in input.split('\\n'):
            name = line.lstrip('\\t')
            depth = len(line) - len(name)
            del stack[depth:]
            stack.append(name)
            if '.' in name:
                best = max(best, len('/'.join(stack)))
        return best
`)});
alt(3600,{name:"Brute force over spanning trees",tag:"Brute force",time:"O(C(m, n−1))",space:"O(n)",explain:"Enumerate edge subsets of size n−1 and upgrade the weakest optional edges.",code:C(`
class Solution:
    def maxStability(self, n, edges, k):
        best = -1
        m = len(edges)
        for sub in combinations(range(m), n - 1):
            parent = list(range(n))
            def find(x):
                while parent[x] != x:
                    parent[x] = parent[parent[x]]
                    x = parent[x]
                return x
            ok = True
            for i in sub:
                ru, rv = find(edges[i][0]), find(edges[i][1])
                if ru == rv:
                    ok = False
                    break
                parent[ru] = rv
            if not ok or any(edges[i][3] and i not in sub for i in range(m)):
                continue
            optional = sorted(edges[i][2] for i in sub if not edges[i][3])
            vals = [edges[i][2] for i in sub if edges[i][3]] + [2 * x for x in optional[:k]] + optional[k:]
            best = max(best, min(vals))
        return best
`)});
alt(2831,{name:"Brute force over subarrays",tag:"Brute force",time:"O(n³)",space:"O(n)",explain:"For every subarray count the most common value and the deletions needed.",code:C(`
class Solution:
    def longestEqualSubarray(self, nums, k):
        best = 0
        n = len(nums)
        for i in range(n):
            for j in range(i, n):
                sub = nums[i:j + 1]
                top = max(Counter(sub).values())
                if len(sub) - top <= k:
                    best = max(best, top)
        return best
`)});
alt(2151,{name:"Backtracking on who is good",tag:"Alternative",time:"O(2ⁿ·n)",space:"O(n)",explain:"Decide each person good or bad and prune on contradictions.",code:C(`
class Solution:
    def maximumGood(self, statements):
        n = len(statements)
        best = 0
        def consistent(assign):
            for i, a in enumerate(assign):
                if a == 1:
                    for j, b in enumerate(assign):
                        s = statements[i][j]
                        if s != 2 and s != b:
                            return False
            return True
        def go(i, assign):
            nonlocal best
            if i == n:
                if consistent(assign):
                    best = max(best, sum(assign))
                return
            for v in (0, 1):
                go(i + 1, assign + [v])
        go(0, [])
        return best
`)});
alt(3548,{name:"Try every cell removal with a connectivity check",tag:"Brute force",time:"O((m·n)²)",space:"O(m·n)",explain:"For every cut and every discount candidate verify the section stays connected.",code:C(`
class Solution:
    def canPartitionGrid(self, grid):
        m, n = len(grid), len(grid[0])
        def connected(cells):
            if not cells:
                return True
            cells = set(cells)
            start = next(iter(cells))
            seen = {start}
            stack = [start]
            while stack:
                i, j = stack.pop()
                for a, b in ((i + 1, j), (i - 1, j), (i, j + 1), (i, j - 1)):
                    if (a, b) in cells and (a, b) not in seen:
                        seen.add((a, b))
                        stack.append((a, b))
            return len(seen) == len(cells)
        cuts = []
        for c in range(1, m):
            cuts.append(([(i, j) for i in range(c) for j in range(n)], [(i, j) for i in range(c, m) for j in range(n)]))
        for c in range(1, n):
            cuts.append(([(i, j) for i in range(m) for j in range(c)], [(i, j) for i in range(m) for j in range(c, n)]))
        for A, B in cuts:
            sa = sum(grid[i][j] for i, j in A)
            sb = sum(grid[i][j] for i, j in B)
            if sa == sb:
                return True
            for sec, mine, other in ((A, sa, sb), (B, sb, sa)):
                for cell in sec:
                    rest = [c for c in sec if c != cell]
                    if rest and mine - grid[cell[0]][cell[1]] == other and connected(rest):
                        return True
        return False
`)});
alt(2839,{name:"Search the reachable strings",tag:"Brute force",time:"O(1)",space:"O(1)",explain:"BFS (Breadth-First Search) over the strings reachable by swapping positions two apart.",code:C(`
class Solution:
    def canBeEqual(self, s1, s2):
        seen = {s1}
        q = deque([s1])
        while q:
            cur = q.popleft()
            if cur == s2:
                return True
            for i in range(2):
                chars = list(cur)
                chars[i], chars[i + 2] = chars[i + 2], chars[i]
                nxt = ''.join(chars)
                if nxt not in seen:
                    seen.add(nxt)
                    q.append(nxt)
        return False
`)});
alt(2840,{name:"Counters of each parity class",tag:"Alternative",time:"O(n)",space:"O(1)",explain:"Compare character counts of even and odd positions.",code:C(`
class Solution:
    def checkStrings(self, s1, s2):
        return Counter(s1[0::2]) == Counter(s2[0::2]) and Counter(s1[1::2]) == Counter(s2[1::2])
`)});
alt(2751,{name:"Repeated collision scan",tag:"Brute force",time:"O(n²)",space:"O(n)",explain:"Resolve adjacent right/left pairs in position order until none remain.",code:C(`
class Solution:
    def survivedRobotsHealths(self, positions, healths, directions):
        n = len(positions)
        order = sorted(range(n), key=lambda i: positions[i])
        line = [[i, healths[i], directions[i]] for i in order]
        changed = True
        while changed:
            changed = False
            for k in range(len(line) - 1):
                a, b = line[k], line[k + 1]
                if a[2] == 'R' and b[2] == 'L':
                    if a[1] > b[1]:
                        a[1] -= 1
                        line.pop(k + 1)
                    elif a[1] < b[1]:
                        b[1] -= 1
                        line.pop(k)
                    else:
                        line.pop(k + 1)
                        line.pop(k)
                    changed = True
                    break
        health = {i: h for i, h, _ in line}
        return [health[i] for i in range(n) if i in health]
`)});
alt(3661,{name:"Enumerate every firing direction",tag:"Brute force",time:"O(2ⁿ·(n + w))",space:"O(w)",explain:"Try all left/right choices and count the destroyed walls directly.",code:C(`
class Solution:
    def maxWalls(self, robots, distance, walls):
        bots = sorted(zip(robots, distance))
        n = len(bots)
        ws = set(walls)
        best = 0
        for dirs in product((0, 1), repeat=n):
            hit = set()
            for i, (x, d) in enumerate(bots):
                if dirs[i] == 1:
                    lo, hi = x, x + d
                    for j in range(n):
                        if x < bots[j][0] <= x + d:
                            hi = min(hi, bots[j][0] - 1)
                else:
                    lo, hi = x - d, x
                    for j in range(n):
                        if x - d <= bots[j][0] < x:
                            lo = max(lo, bots[j][0] + 1)
                hit |= {w for w in ws if lo <= w <= hi}
            best = max(best, len(hit))
        return best
`)});
alt(508,{name:"Recursive subtree sums",tag:"Alternative",time:"O(n)",space:"O(h)",explain:"Post-order recursion with a Counter.",code:C(`
class Solution:
    def findFrequentTreeSum(self, root):
        sums = []
        def go(node):
            if not node:
                return 0
            s = node.val + go(node.left) + go(node.right)
            sums.append(s)
            return s
        go(root)
        cnt = Counter(sums)
        top = max(cnt.values())
        return sorted(v for v, c in cnt.items() if c == top)
`)});
alt(1320,{name:"Memoised recursion on both fingers",tag:"Alternative",time:"O(n·26²)",space:"O(n·26²)",explain:"State: index and positions of the two fingers.",code:C(`
class Solution:
    def minimumDistance(self, word):
        letters = [ord(c) - 65 for c in word]
        def dist(a, b):
            if a is None:
                return 0
            return abs(a // 6 - b // 6) + abs(a % 6 - b % 6)
        @lru_cache(None)
        def go(i, f1, f2):
            if i == len(letters):
                return 0
            c = letters[i]
            return min(dist(f1, c) + go(i + 1, c, f2), dist(f2, c) + go(i + 1, f1, c))
        return go(0, None, None)
`)});
alt(3741,{name:"Brute force over triples",tag:"Brute force",time:"O(n³)",space:"O(1)",explain:"Evaluate every good tuple.",code:C(`
class Solution:
    def minimumDistance(self, nums):
        best = float('inf')
        for i, j, k in combinations(range(len(nums)), 3):
            if nums[i] == nums[j] == nums[k]:
                best = min(best, abs(i - j) + abs(j - k) + abs(k - i))
        return -1 if best == float('inf') else best
`)});
};
