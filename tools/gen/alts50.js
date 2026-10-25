module.exports=({alt})=>{
const C=s=>s.replace(/^\n/,"").replace(/\n$/,"").split("\n");
// ---- Visa
alt(3459,{name:"Plain recursion without memo",tag:"Brute force",time:"exponential (bounded)",space:"O(m+n)",explain:"Same search but without caching: from every 1 walk each direction, optionally turning once.",code:C(`
class Solution:
    def lenOfVDiagonal(self, grid):
        m, n = len(grid), len(grid[0])
        dirs = [(1, 1), (1, -1), (-1, -1), (-1, 1)]
        def go(i, j, d, turned):
            need = 0 if grid[i][j] == 2 else 2
            best = 1
            a, b = i + dirs[d][0], j + dirs[d][1]
            if 0 <= a < m and 0 <= b < n and grid[a][b] == need:
                best = max(best, 1 + go(a, b, d, turned))
            if not turned:
                nd = (d + 1) % 4
                a, b = i + dirs[nd][0], j + dirs[nd][1]
                if 0 <= a < m and 0 <= b < n and grid[a][b] == need:
                    best = max(best, 1 + go(a, b, nd, True))
            return best
        return max([go(i, j, d, False) for i in range(m) for j in range(n) if grid[i][j] == 1 for d in range(4)], default=0)
`)});
alt(1389,{name:"Shift by hand",tag:"Brute force",time:"O(n²)",space:"O(n)",explain:"Shift later elements to the right yourself, then place the value.",code:C(`
class Solution:
    def createTargetArray(self, nums, index):
        res = []
        for v, i in zip(nums, index):
            res.append(None)
            for j in range(len(res) - 1, i, -1):
                res[j] = res[j - 1]
            res[i] = v
        return res
`)});
alt(2078,{name:"Check every pair",tag:"Brute force",time:"O(n²)",space:"O(1)",explain:"Compare all pairs of houses and keep the largest distance between different colours.",code:C(`
class Solution:
    def maxDistance(self, colors):
        n = len(colors)
        return max(j - i for i in range(n) for j in range(i + 1, n) if colors[i] != colors[j])
`)});
alt(2136,{name:"Try both orders on a tiny set",tag:"Alternative",time:"O(n log n)",space:"O(n)",explain:"Same greedy with an index sort instead of zipped tuples.",code:C(`
class Solution:
    def earliestFullBloom(self, plantTime, growTime):
        order = sorted(range(len(plantTime)), key=lambda i: -growTime[i])
        t = best = 0
        for i in order:
            t += plantTime[i]
            best = max(best, t + growTime[i])
        return best
`)});
alt(3915,{name:"Quadratic DP",tag:"Brute force",time:"O(n²)",space:"O(n)",explain:"For each i scan every j ≤ i − k directly instead of a Fenwick tree.",code:C(`
class Solution:
    def maxAlternatingSum(self, nums, k):
        n = len(nums)
        peak = [0] * n
        valley = [0] * n
        best = float('-inf')
        for i in range(n):
            a = b = 0
            for j in range(i - k + 1):
                if nums[j] < nums[i]:
                    a = max(a, valley[j])
                elif nums[j] > nums[i]:
                    b = max(b, peak[j])
            peak[i] = nums[i] + a
            valley[i] = nums[i] + b
            best = max(best, peak[i], valley[i])
        return best
`)});
alt(526,{name:"Try every permutation",tag:"Brute force",time:"O(n!)",space:"O(n)",explain:"Generate all permutations and test the divisibility rule.",code:C(`
class Solution:
    def countArrangement(self, n):
        return sum(all(v % (i + 1) == 0 or (i + 1) % v == 0 for i, v in enumerate(p))
                   for p in permutations(range(1, n + 1)))
`)});
alt(3552,{name:"Dijkstra with a heap",tag:"Alternative",time:"O(m·n log)",space:"O(m·n)",explain:"Treat teleports as zero-weight edges in a Dijkstra search; each portal letter is used the first time it is reached.",code:C(`
class Solution:
    def minMoves(self, matrix):
        m, n = len(matrix), len(matrix[0])
        pos = defaultdict(list)
        for i in range(m):
            for j in range(n):
                if matrix[i][j].isalpha():
                    pos[matrix[i][j]].append((i, j))
        INF = float('inf')
        dist = [[INF] * n for _ in range(m)]
        dist[0][0] = 0
        pq = [(0, 0, 0)]
        used = set()
        while pq:
            d, i, j = heappop(pq)
            if d > dist[i][j]:
                continue
            ch = matrix[i][j]
            if ch.isalpha() and ch not in used:
                used.add(ch)
                for a, b in pos[ch]:
                    if d < dist[a][b]:
                        dist[a][b] = d
                        heappush(pq, (d, a, b))
            for a, b in ((i + 1, j), (i - 1, j), (i, j + 1), (i, j - 1)):
                if 0 <= a < m and 0 <= b < n and matrix[a][b] != '#' and d + 1 < dist[a][b]:
                    dist[a][b] = d + 1
                    heappush(pq, (d + 1, a, b))
        return dist[m - 1][n - 1] if dist[m - 1][n - 1] < INF else -1
`)});
alt(2491,{name:"Two pointers",tag:"Alternative",time:"O(n log n)",space:"O(1)",explain:"Sort and compare pairs from both ends with explicit pointers.",code:C(`
class Solution:
    def dividePlayers(self, skill):
        skill.sort()
        i, j = 0, len(skill) - 1
        target = skill[i] + skill[j]
        total = 0
        while i < j:
            if skill[i] + skill[j] != target:
                return -1
            total += skill[i] * skill[j]
            i += 1
            j -= 1
        return total
`)});
alt(1314,{name:"Sum every block directly",tag:"Brute force",time:"O(m·n·k²)",space:"O(m·n)",explain:"For each cell add all cells of its block.",code:C(`
class Solution:
    def matrixBlockSum(self, mat, k):
        m, n = len(mat), len(mat[0])
        return [[sum(mat[a][b] for a in range(max(0, i - k), min(m, i + k + 1)) for b in range(max(0, j - k), min(n, j + k + 1)))
                 for j in range(n)] for i in range(m)]
`)});
alt(3651,{name:"Dijkstra over (cell, teleports used)",tag:"Brute force",time:"O(k·(mn)²)",space:"O(k·m·n)",explain:"Run Dijkstra where a state also records the teleports used; from a cell you may teleport to any cell with an equal or smaller value for free.",code:C(`
class Solution:
    def minCost(self, grid, k):
        m, n = len(grid), len(grid[0])
        INF = float('inf')
        dist = {}
        pq = [(0, 0, 0, 0)]
        cells = [(i, j) for i in range(m) for j in range(n)]
        while pq:
            c, i, j, t = heappop(pq)
            if (i, j, t) in dist:
                continue
            dist[(i, j, t)] = c
            if (i, j) == (m - 1, n - 1):
                return c
            for a, b in ((i + 1, j), (i, j + 1)):
                if a < m and b < n:
                    heappush(pq, (c + grid[a][b], a, b, t))
            if t < k:
                for a, b in cells:
                    if grid[a][b] <= grid[i][j]:
                        heappush(pq, (c, a, b, t + 1))
        return -1
`)});
alt(2680,{name:"Try each element with fresh ORs",tag:"Brute force",time:"O(n²)",space:"O(1)",explain:"For every candidate recompute the OR of all the other elements.",code:C(`
class Solution:
    def maximumOr(self, nums, k):
        best = 0
        for i in range(len(nums)):
            acc = nums[i] << k
            for j, x in enumerate(nums):
                if j != i:
                    acc |= x
            best = max(best, acc)
        return best
`)});
alt(3919,{name:"Dijkstra per query",tag:"Brute force",time:"O(q·n²)",space:"O(n)",explain:"Run Dijkstra from the source with all allowed moves (any jump or the closest move).",code:C(`
class Solution:
    def minCost(self, nums, queries):
        n = len(nums)
        def closest(x):
            best = None
            for y in (x - 1, x + 1):
                if 0 <= y < n and (best is None or abs(nums[x] - nums[y]) < abs(nums[x] - nums[best])):
                    best = y
            return best
        res = []
        for l, r in queries:
            dist = [float('inf')] * n
            dist[l] = 0
            pq = [(0, l)]
            while pq:
                d, x = heappop(pq)
                if d > dist[x]:
                    continue
                for y in range(n):
                    w = 1 if y == closest(x) else abs(nums[x] - nums[y])
                    w = min(w, abs(nums[x] - nums[y])) if y != x else 0
                    if d + w < dist[y]:
                        dist[y] = d + w
                        heappush(pq, (d + w, y))
            res.append(dist[r])
        return res
`)});
alt(846,{name:"Min-heap of cards",tag:"Alternative",time:"O(n log n)",space:"O(n)",explain:"Pop the smallest card, then pop the next groupSize − 1 consecutive values.",code:C(`
class Solution:
    def isNStraightHand(self, hand, groupSize):
        if len(hand) % groupSize:
            return False
        cnt = Counter(hand)
        heap = list(cnt)
        heapify(heap)
        while heap:
            x = heap[0]
            for y in range(x, x + groupSize):
                if cnt[y] == 0:
                    return False
                cnt[y] -= 1
                if cnt[y] == 0:
                    if y != heap[0]:
                        return False
                    heappop(heap)
        return True
`)});
alt(928,{name:"Union-Find on the clean nodes",tag:"Alternative",time:"O(n²)",space:"O(n)",explain:"Union the non-infected nodes into components. A component is saved by removing infected node x if x is the only infected node adjacent to it; pick the x that saves the most nodes.",code:C(`
class Solution:
    def minMalwareSpread(self, graph, initial):
        n = len(graph)
        inf = set(initial)
        p = list(range(n))
        def find(x):
            while p[x] != x:
                p[x] = p[p[x]]
                x = p[x]
            return x
        for i in range(n):
            for j in range(i + 1, n):
                if graph[i][j] and i not in inf and j not in inf:
                    p[find(i)] = find(j)
        size = Counter(find(i) for i in range(n) if i not in inf)
        touch = defaultdict(set)
        for x in initial:
            for v in range(n):
                if v not in inf and graph[x][v]:
                    touch[find(v)].add(x)
        saved = Counter()
        for comp, xs in touch.items():
            if len(xs) == 1:
                saved[next(iter(xs))] += size[comp]
        best = min(initial)
        for x in sorted(initial):
            if saved[x] > saved[best]:
                best = x
        return best
`)});
alt(1876,{name:"Count with a loop",tag:"Alternative",time:"O(n)",space:"O(1)",explain:"Compare the three letters directly.",code:C(`
class Solution:
    def countGoodSubstrings(self, s):
        res = 0
        for i in range(len(s) - 2):
            a, b, c = s[i], s[i + 1], s[i + 2]
            if a != b and b != c and a != c:
                res += 1
        return res
`)});
alt(264,{name:"Min-heap with a seen set",tag:"Alternative",time:"O(n log n)",space:"O(n)",explain:"Pop the smallest ugly number n times, pushing its multiples by 2, 3 and 5.",code:C(`
class Solution:
    def nthUglyNumber(self, n):
        heap = [1]
        seen = {1}
        x = 1
        for _ in range(n):
            x = heappop(heap)
            for f in (2, 3, 5):
                if x * f not in seen:
                    seen.add(x * f)
                    heappush(heap, x * f)
        return x
`)});
alt(3433,{name:"Replay with explicit online flags",tag:"Alternative",time:"O(e·n)",space:"O(n)",explain:"Process events in order; before each message restore users whose 60 minutes are over.",code:C(`
class Solution:
    def countMentions(self, numberOfUsers, events):
        cnt = [0] * numberOfUsers
        online = [True] * numberOfUsers
        wake = {}
        for typ, ts, s in sorted(events, key=lambda e: (int(e[1]), e[0] == "MESSAGE")):
            t = int(ts)
            for u in list(wake):
                if wake[u] <= t:
                    online[u] = True
                    del wake[u]
            if typ == "OFFLINE":
                u = int(s)
                online[u] = False
                wake[u] = t + 60
            elif s == "ALL":
                cnt = [c + 1 for c in cnt]
            elif s == "HERE":
                cnt = [c + 1 if online[u] else c for u, c in enumerate(cnt)]
            else:
                for tok in s.split():
                    cnt[int(tok[2:])] += 1
        return cnt
`)});
alt(2530,{name:"Sort every round",tag:"Brute force",time:"O(k·n log n)",space:"O(n)",explain:"Re-sort the list after each operation instead of using a heap.",code:C(`
class Solution:
    def maxKelements(self, nums, k):
        nums = sorted(nums)
        score = 0
        for _ in range(k):
            x = nums.pop()
            score += x
            insort(nums, (x + 2) // 3)
        return score
`)});
alt(1696,{name:"Max-heap with lazy removal",tag:"Alternative",time:"O(n log n)",space:"O(n)",explain:"Keep (−dp, index) in a heap and discard entries that are more than k behind.",code:C(`
class Solution:
    def maxResult(self, nums, k):
        heap = [(-nums[0], 0)]
        dp = nums[0]
        for i in range(1, len(nums)):
            while heap[0][1] < i - k:
                heappop(heap)
            dp = nums[i] - heap[0][0]
            heappush(heap, (-dp, i))
        return dp
`)});
alt(1529,{name:"Flip a suffix at each mismatch",tag:"Brute force",time:"O(n²)",space:"O(n)",explain:"Walk left to right; whenever the current bit differs from the target, flip the whole suffix.",code:C(`
class Solution:
    def minFlips(self, target):
        cur = ['0'] * len(target)
        flips = 0
        for i, t in enumerate(target):
            if cur[i] != t:
                flips += 1
                for j in range(i, len(cur)):
                    cur[j] = '1' if cur[j] == '0' else '0'
        return flips
`)});
alt(2583,{name:"DFS collecting sums by depth",tag:"Alternative",time:"O(n)",space:"O(h)",explain:"Recurse with the depth and add each value to its level's sum.",code:C(`
class Solution:
    def kthLargestLevelSum(self, root, k):
        sums = []
        def dfs(node, d):
            if not node:
                return
            if d == len(sums):
                sums.append(0)
            sums[d] += node.val
            dfs(node.left, d + 1)
            dfs(node.right, d + 1)
        dfs(root, 0)
        if len(sums) < k:
            return -1
        return nlargest(k, sums)[-1]
`)});
alt(2771,{name:"Table over all indices",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"Store the two states for every index in arrays.",code:C(`
class Solution:
    def maxNonDecreasingLength(self, nums1, nums2):
        n = len(nums1)
        d1 = [1] * n
        d2 = [1] * n
        for i in range(1, n):
            for cur, arr, d in ((nums1[i], nums1, d1), (nums2[i], nums2, d2)):
                if nums1[i - 1] <= cur:
                    d[i] = max(d[i], d1[i - 1] + 1)
                if nums2[i - 1] <= cur:
                    d[i] = max(d[i], d2[i - 1] + 1)
        return max(max(d1), max(d2))
`)});
alt(1930,{name:"Count outer letters with sets",tag:"Alternative",time:"O(n²)",space:"O(n)",explain:"Collect distinct triples x y x in a set.",code:C(`
class Solution:
    def countPalindromicSubsequence(self, s):
        seen = set()
        for i in range(len(s)):
            for j in range(i + 2, len(s)):
                if s[i] == s[j]:
                    for c in set(s[i + 1:j]):
                        seen.add(s[i] + c + s[j])
        return len(seen)
`)});
alt(3069,{name:"Two lists with indices",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"Same rule using explicit last-element variables.",code:C(`
class Solution:
    def resultArray(self, nums):
        a, b = [nums[0]], [nums[1]]
        la, lb = nums[0], nums[1]
        for x in nums[2:]:
            if la > lb:
                a.append(x)
                la = x
            else:
                b.append(x)
                lb = x
        return a + b
`)});
alt(2537,{name:"Count pairs for each start",tag:"Brute force",time:"O(n²)",space:"O(n)",explain:"For each left end extend the right end while keeping a running pair count.",code:C(`
class Solution:
    def countGood(self, nums, k):
        n = len(nums)
        res = 0
        for l in range(n):
            freq = Counter()
            pairs = 0
            for r in range(l, n):
                pairs += freq[nums[r]]
                freq[nums[r]] += 1
                if pairs >= k:
                    res += n - r
                    break
        return res
`)});
};
