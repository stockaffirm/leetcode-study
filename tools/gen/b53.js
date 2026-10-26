const {lite}=require("./lib");
const C=s=>s.replace(/^\n/,"").replace(/\n$/,"").split("\n");
const ARR="Array / String",HM="Hash Map / Set",STK="Stack / Monotonic Stack",BT="Binary Tree",GR="Graph",HP="Heap",DP="Dynamic Programming",GD="Greedy",MB="Math / Bit Manipulation",BS="Binary Search",SRT="Sorting",SW="Sliding Window",MX="Matrix",UF="Union Find / Segment Tree",TP="Two Pointers",IV="Intervals",BTK="Backtracking",DS="Design",LL="Linked List",TR="Trie",PS="Prefix Sum";
// ---- Visa
lite({id:3459,slug:"length-of-longest-v-shaped-diagonal-segment",title:"Length of Longest V-Shaped Diagonal Segment",level:"Hard",topic:MX,name:"Memoised DFS along diagonals with one turn",
w:"In the sample grid the segment 1 → 2 → 0 → 2 → 0 along a diagonal with one clockwise turn has length 5.",k:"A segment starts at a 1 and then follows 2, 0, 2, 0 … along a diagonal, and may turn clockwise once. State = (cell, direction, turned yet?). From a cell with value v the next required value is 2 (after 1 or 0) or 0 (after 2). Continue straight, or turn to the next clockwise diagonal if no turn has been used; take the longer result. Memoise and try every 1 with every direction.",
i:"grid = [[2,2,1,2,2],[2,0,2,2,0],[2,0,1,1,0],[1,0,2,2,2],[2,0,0,2,2]]",o:"5",time:"O(m·n·4·2)",space:"O(m·n·8)",
code:C(`
class Solution:
    def lenOfVDiagonal(self, grid):
        m, n = len(grid), len(grid[0])
        dirs = [(1, 1), (1, -1), (-1, -1), (-1, 1)]
        @lru_cache(None)
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
        res = 0
        for i in range(m):
            for j in range(n):
                if grid[i][j] == 1:
                    for d in range(4):
                        res = max(res, go(i, j, d, False))
        return res
`)});
lite({id:1389,slug:"create-target-array-in-the-given-order",title:"Create Target Array in the Given Order",level:"Easy",topic:ARR,name:"Insert each value at its index",
w:"nums [0,1,2,3,4], index [0,1,2,2,1] → [0,4,1,3,2].",k:"Start with an empty list and for each position i insert nums[i] at position index[i] (this shifts later elements right).",
i:"nums = [0,1,2,3,4], index = [0,1,2,2,1]",o:"[0, 4, 1, 3, 2]",time:"O(n²)",space:"O(n)",
code:C(`
class Solution:
    def createTargetArray(self, nums, index):
        res = []
        for v, i in zip(nums, index):
            res.insert(i, v)
        return res
`)});
lite({id:2078,slug:"two-furthest-houses-with-different-colors",title:"Two Furthest Houses With Different Colors",level:"Easy",topic:ARR,name:"One of the two houses is an end house",
w:"[1,1,1,6,1,1,1]: the 6 and the first or last 1 → farthest distance 3.",k:"For the farthest pair with different colours, one house can be moved to an end of the row. So compare the first house with the last different one, and the last house with the first different one; the larger distance wins.",
i:"colors = [1,1,1,6,1,1,1]",o:"3",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def maxDistance(self, colors):
        n = len(colors)
        j = n - 1
        while colors[j] == colors[0]:
            j -= 1
        i = 0
        while colors[i] == colors[-1]:
            i += 1
        return max(j, n - 1 - i)
`)});
lite({id:2136,slug:"earliest-possible-day-of-full-bloom",title:"Earliest Possible Day to Full Bloom",level:"Hard",topic:GD,name:"Plant the slowest growers first",
w:"plant [1,4,3], grow [2,3,1] → plant the 3-day grower first, then the 2-day grower, then the 1-day one → day 9.",k:"Planting takes your own time one seed after another, but growing runs in the background. To finish soonest, plant seeds with the longest grow time first. Then the finish day is the maximum over seeds of (planting finished + grow time).",
i:"plantTime = [1,4,3], growTime = [2,3,1]",o:"9",time:"O(n log n)",space:"O(n)",
code:C(`
class Solution:
    def earliestFullBloom(self, plantTime, growTime):
        t = best = 0
        for g, p in sorted(zip(growTime, plantTime), reverse=True):
            t += p
            best = max(best, t + g)
        return best
`)});
lite({id:3915,slug:"maximum-sum-of-alternating-subsequence-with-distance-at-least-k",title:"Maximum Sum of Alternating Subsequence With Distance at Least K",level:"Hard",topic:UF,name:"Two DP arrays with Fenwick prefix maxima",
w:"[3,5,4,2,4], k=1: 3 < 5 > 2 < 4 uses indices 0,1,3,4 → 14.",k:"Let peak[i] be the best sum of a valid subsequence ending at i where nums[i] is higher than the previous chosen value, and valley[i] the same with nums[i] lower. peak[i] = nums[i] + max(0, best valley[j]) over j ≤ i − k with nums[j] < nums[i]; valley[i] is symmetric. Two Fenwick trees (prefix maximum over compressed values) answer those queries; insert index j only once i − j reaches k.",
i:"nums = [5,4,2], k = 2",o:"7",time:"O(n log n)",space:"O(n)",
code:C(`
class Solution:
    def maxAlternatingSum(self, nums, k):
        n = len(nums)
        rank = {v: i + 1 for i, v in enumerate(sorted(set(nums)))}
        m = len(rank)
        NEG = float('-inf')
        def upd(t, i, v):
            while i <= m:
                if v > t[i]:
                    t[i] = v
                i += i & -i
        def qry(t, i):
            r = NEG
            while i > 0:
                if t[i] > r:
                    r = t[i]
                i -= i & -i
            return r
        low = [NEG] * (m + 1)
        high = [NEG] * (m + 1)
        peak = [0] * n
        valley = [0] * n
        best = NEG
        for i in range(n):
            j = i - k
            if j >= 0:
                upd(low, rank[nums[j]], valley[j])
                upd(high, m + 1 - rank[nums[j]], peak[j])
            a = qry(low, rank[nums[i]] - 1)
            b = qry(high, m - rank[nums[i]])
            peak[i] = nums[i] + max(0, a)
            valley[i] = nums[i] + max(0, b)
            best = max(best, peak[i], valley[i])
        return best
`)});
lite({id:526,slug:"beautiful-arrangement",title:"Beautiful Arrangement",level:"Medium",topic:BTK,name:"Backtrack position by position",
w:"n=2: [1,2] and [2,1] both satisfy 'divisible one way' at every position → 2.",k:"A permutation of 1…n is beautiful if for each position i, perm[i] is divisible by i or i is divisible by perm[i]. Fill positions 1, 2, 3… with unused numbers that satisfy the rule (a bitmask records used numbers) and count complete arrangements.",
i:"n = 2",o:"2",time:"O(k)",space:"O(n)",
code:C(`
class Solution:
    def countArrangement(self, n):
        @lru_cache(None)
        def go(pos, used):
            if pos > n:
                return 1
            total = 0
            for v in range(1, n + 1):
                if not (used >> v) & 1 and (v % pos == 0 or pos % v == 0):
                    total += go(pos + 1, used | (1 << v))
            return total
        return go(1, 0)
`)});
lite({id:3552,slug:"grid-teleportation-traversal",title:"Grid Teleportation Traversal",level:"Medium",topic:GR,name:"0-1 BFS: portals cost nothing, once per letter",
w:"['A..','.A.','...']: step onto an A, jump free to the other A and walk the rest → 2 moves.",k:"Moves cost 1 and teleports cost 0, so use a 0-1 BFS (Breadth-First Search) with a deque. The first time any cell of letter c is reached, that is the cheapest moment to use portal c: push all other cells of c at the same distance to the front of the queue and mark c as used. Walk the four directions otherwise.",
i:"matrix = [\"A..\",\".A.\",\"...\"]",o:"2",time:"O(m·n)",space:"O(m·n)",
code:C(`
class Solution:
    def minMoves(self, matrix):
        m, n = len(matrix), len(matrix[0])
        pos = defaultdict(list)
        for i in range(m):
            for j in range(n):
                if matrix[i][j].isalpha():
                    pos[matrix[i][j]].append((i, j))
        dist = [[-1] * n for _ in range(m)]
        dist[0][0] = 0
        q = deque([(0, 0)])
        used = set()
        while q:
            i, j = q.popleft()
            d = dist[i][j]
            ch = matrix[i][j]
            if ch.isalpha() and ch not in used:
                used.add(ch)
                for a, b in pos[ch]:
                    if dist[a][b] < 0:
                        dist[a][b] = d
                        q.appendleft((a, b))
            for a, b in ((i + 1, j), (i - 1, j), (i, j + 1), (i, j - 1)):
                if 0 <= a < m and 0 <= b < n and matrix[a][b] != '#' and dist[a][b] < 0:
                    dist[a][b] = d + 1
                    q.append((a, b))
        return dist[m - 1][n - 1]
`)});
lite({id:2491,slug:"divide-players-into-teams-of-equal-skill",title:"Divide Players Into Teams of Equal Skill",level:"Medium",topic:SRT,name:"Pair smallest with largest",
w:"[3,2,5,1,3,4] → pairs (1,5), (2,4), (3,3) all sum to 6 → 3·... chemistry 5 + 8 + 9 = 22.",k:"All teams of two must have the same total skill. After sorting, the only way is to pair the smallest with the largest, the second smallest with the second largest, and so on, and every pair must have the same sum. Add up the products; return −1 if a pair differs.",
i:"skill = [3,2,5,1,3,4]",o:"22",time:"O(n log n)",space:"O(1)",
code:C(`
class Solution:
    def dividePlayers(self, skill):
        skill.sort()
        target = skill[0] + skill[-1]
        total = 0
        for i in range(len(skill) // 2):
            a, b = skill[i], skill[-1 - i]
            if a + b != target:
                return -1
            total += a * b
        return total
`)});
lite({id:1314,slug:"matrix-block-sum",title:"Matrix Block Sum",level:"Medium",topic:PS,name:"2D prefix sums",
w:"[[1,2,3],[4,5,6],[7,8,9]], k=1: the centre cell sums the whole grid, 45.",k:"answer[i][j] is the sum of the block from (i−k, j−k) to (i+k, j+k), clamped to the matrix. A 2D prefix-sum table gives any rectangle sum in O(1) by inclusion–exclusion.",
i:"mat = [[1,2,3],[4,5,6],[7,8,9]], k = 1",o:"[[12, 21, 16], [27, 45, 33], [24, 39, 28]]",time:"O(m·n)",space:"O(m·n)",
code:C(`
class Solution:
    def matrixBlockSum(self, mat, k):
        m, n = len(mat), len(mat[0])
        P = [[0] * (n + 1) for _ in range(m + 1)]
        for i in range(m):
            for j in range(n):
                P[i + 1][j + 1] = mat[i][j] + P[i][j + 1] + P[i + 1][j] - P[i][j]
        res = [[0] * n for _ in range(m)]
        for i in range(m):
            for j in range(n):
                r1, c1 = max(0, i - k), max(0, j - k)
                r2, c2 = min(m, i + k + 1), min(n, j + k + 1)
                res[i][j] = P[r2][c2] - P[r1][c2] - P[r2][c1] + P[r1][c1]
        return res
`)});
lite({id:3651,slug:"minimum-cost-path-with-teleportations",title:"Minimum Cost Path with Teleportations",level:"Hard",topic:DP,name:"Layered DP with a suffix minimum by value",
w:"[[1,3,3],[2,5,4],[4,3,5]], k=2: walk down, right (cost 7), then teleport to the bottom-right (value 5 ≤ 5) → 7.",k:"Layer t = best cost to reach each cell using at most t teleports. Layer 0 is the usual right/down DP (cost = destination value). For the next layer, a cell can be entered for free from any cell with a value ≥ its own, so keep the cheapest previous-layer cost among cells with value ≥ v (a suffix minimum over values), then rerun the right/down DP (Dynamic Programming) seeded with those teleport costs.",
i:"grid = [[1,3,3],[2,5,4],[4,3,5]], k = 2",o:"7",time:"O(k·m·n)",space:"O(m·n)",
code:C(`
class Solution:
    def minCost(self, grid, k):
        m, n = len(grid), len(grid[0])
        INF = float('inf')
        def walk(seed):
            dp = [[INF] * n for _ in range(m)]
            for i in range(m):
                for j in range(n):
                    if i == 0 and j == 0:
                        dp[i][j] = 0
                        continue
                    best = seed[i][j]
                    if i:
                        best = min(best, dp[i - 1][j] + grid[i][j])
                    if j:
                        best = min(best, dp[i][j - 1] + grid[i][j])
                    dp[i][j] = best
            return dp
        dp = walk([[INF] * n for _ in range(m)])
        vals = sorted({v for row in grid for v in row}, reverse=True)
        for _ in range(k):
            at = defaultdict(lambda: INF)
            for i in range(m):
                for j in range(n):
                    at[grid[i][j]] = min(at[grid[i][j]], dp[i][j])
            suffix = {}
            cur = INF
            for v in vals:
                cur = min(cur, at[v])
                suffix[v] = cur
            dp = walk([[suffix[grid[i][j]] for j in range(n)] for i in range(m)])
        return dp[m - 1][n - 1]
`)});
lite({id:2680,slug:"maximum-or",title:"Maximum OR",level:"Medium",topic:MB,name:"Spend all k doublings on one number",
w:"[12,9], k=1: double 9 → 18, OR with 12 = 30.",k:"Doubling shifts a number left, so it is best to put all k shifts on one element to make its high bits count. Try each element with prefix OR and suffix OR of the others: prefix[i] | (nums[i] << k) | suffix[i+1].",
i:"nums = [12,9], k = 1",o:"30",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def maximumOr(self, nums, k):
        n = len(nums)
        suf = [0] * (n + 1)
        for i in range(n - 1, -1, -1):
            suf[i] = suf[i + 1] | nums[i]
        pre = 0
        best = 0
        for i, x in enumerate(nums):
            best = max(best, pre | (x << k) | suf[i + 1])
            pre |= x
        return best
`)});
lite({id:3919,slug:"minimum-cost-to-move-between-indices",title:"Minimum Cost to Move Between Indices",level:"Medium",topic:PS,name:"Prefix sums of one-step costs, both directions",
w:"nums [-5,-2,3]: 0→1 costs 1 (closest), 1→2 costs 5 → query [0,2] = 6.",k:"nums is strictly increasing, so a jump equals the sum of single steps and walking step by step is never worse. A right step from i costs 1 if i's closest neighbour is i+1, otherwise the gap; a left step from i costs 1 if the closest is i−1, otherwise the gap. Build prefix sums for right steps and for left steps and answer each query in O(1).",
i:"nums = [-5,-2,3], queries = [[0,2],[2,0],[1,2]]",o:"[6, 2, 5]",time:"O(n + q)",space:"O(n)",
code:C(`
class Solution:
    def minCost(self, nums, queries):
        n = len(nums)
        right = [0] * n
        left = [0] * n
        for i in range(n):
            gl = nums[i] - nums[i - 1] if i else float('inf')
            gr = nums[i + 1] - nums[i] if i + 1 < n else float('inf')
            closest_right = gr < gl
            if i + 1 < n:
                right[i + 1] = right[i] + (1 if closest_right else gr)
        for i in range(n - 1, -1, -1):
            gl = nums[i] - nums[i - 1] if i else float('inf')
            gr = nums[i + 1] - nums[i] if i + 1 < n else float('inf')
            closest_right = gr < gl
            if i:
                left[i - 1] = left[i] + (1 if not closest_right else gl)
        res = []
        for l, r in queries:
            res.append(right[r] - right[l] if l < r else left[r] - left[l])
        return res
`)});
lite({id:846,slug:"hand-of-straights",title:"Hand of Straights",level:"Medium",topic:GD,name:"Always start a group at the smallest card",
w:"[1,2,3,6,2,3,4,7,8], groupSize 3 → [1,2,3], [2,3,4], [6,7,8] → true.",k:"Count the cards. The smallest remaining card must start a group of consecutive numbers: remove one of each of value, value+1, …, value+groupSize−1. If any is missing, return false.",
i:"hand = [1,2,3,6,2,3,4,7,8], groupSize = 3",o:"true",time:"O(n log n)",space:"O(n)",
code:C(`
class Solution:
    def isNStraightHand(self, hand, groupSize):
        if len(hand) % groupSize:
            return False
        cnt = Counter(hand)
        for x in sorted(cnt):
            c = cnt[x]
            if c:
                for y in range(x, x + groupSize):
                    if cnt[y] < c:
                        return False
                    cnt[y] -= c
        return True
`)});
lite({id:928,slug:"minimize-malware-spread-ii",title:"Minimize Malware Spread II",level:"Hard",topic:GR,name:"Remove each infected node, count the spread",
w:"graph [[1,1,0],[1,1,0],[0,0,1]], initial [0,1]: removing node 0 leaves 1 infected; removing 1 leaves 1 → pick the smaller index 0.",k:"Removing a node deletes it and its edges. For each node in initial, delete it, spread the infection from the other initial nodes through the remaining graph with BFS (Breadth-First Search) and count infected nodes. Choose the removal with the fewest infected nodes (smallest index on ties). n ≤ 300 keeps this fast enough.",
i:"graph = [[1,1,0],[1,1,0],[0,0,1]], initial = [0,1]",o:"0",time:"O(k·n²)",space:"O(n)",
code:C(`
class Solution:
    def minMalwareSpread(self, graph, initial):
        n = len(graph)
        best = (n + 1, 0)
        for rem in sorted(initial):
            seen = {rem}
            q = deque(x for x in initial if x != rem)
            seen.update(q)
            while q:
                u = q.popleft()
                for v in range(n):
                    if graph[u][v] and v not in seen:
                        seen.add(v)
                        q.append(v)
            infected = len(seen) - 1
            if infected < best[0]:
                best = (infected, rem)
        return best[1]
`)});
lite({id:1876,slug:"substrings-of-size-three-with-distinct-characters",title:"Substrings of Size Three with Distinct Characters",level:"Easy",topic:SW,name:"Window of three",
w:"'xyzzaz': 'xyz' is good, 'yzz' no, 'zza' no, 'zaz' no → 1.",k:"Look at every window of three consecutive letters and count those with three different letters.",
i:"s = \"xyzzaz\"",o:"1",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def countGoodSubstrings(self, s):
        return sum(len(set(s[i:i + 3])) == 3 for i in range(len(s) - 2))
`)});
lite({id:264,slug:"ugly-number-ii",title:"Ugly Number II",level:"Medium",topic:DP,name:"Merge three multiples with pointers",
w:"The first 10 ugly numbers are 1,2,3,4,5,6,8,9,10,12 → the 10th is 12.",k:"Ugly numbers have only the prime factors 2, 3 and 5. Each is an earlier ugly number times 2, 3 or 5. Keep three pointers into the list built so far; the next ugly number is the smallest of the three candidates, and every pointer whose candidate equals it advances.",
i:"n = 10",o:"12",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def nthUglyNumber(self, n):
        ugly = [1]
        i2 = i3 = i5 = 0
        while len(ugly) < n:
            nxt = min(ugly[i2] * 2, ugly[i3] * 3, ugly[i5] * 5)
            ugly.append(nxt)
            if nxt == ugly[i2] * 2:
                i2 += 1
            if nxt == ugly[i3] * 3:
                i3 += 1
            if nxt == ugly[i5] * 5:
                i5 += 1
        return ugly[-1]
`)});
lite({id:3433,slug:"count-mentions-per-user",title:"Count Mentions Per User",level:"Medium",topic:ARR,name:"Process events in time order, offline first",
w:"Users 0,1: message mentions both, user 0 goes offline for a minute, then HERE at time 71 reaches both → [2,2].",k:"Sort events by time; at the same time OFFLINE events come before MESSAGE events. Remember the time each user comes back online (offline time + 60). A message with 'id…' tokens increases each mentioned id (duplicates count), 'ALL' increases everyone, 'HERE' increases only users who are online at that time.",
i:"numberOfUsers = 2, events = [[\"MESSAGE\",\"10\",\"id1 id0\"],[\"OFFLINE\",\"11\",\"0\"],[\"MESSAGE\",\"71\",\"HERE\"]]",o:"[2, 2]",time:"O(e log e + e·n)",space:"O(n)",
code:C(`
class Solution:
    def countMentions(self, numberOfUsers, events):
        cnt = [0] * numberOfUsers
        back = [0] * numberOfUsers
        for typ, ts, s in sorted(events, key=lambda e: (int(e[1]), e[0] == "MESSAGE")):
            t = int(ts)
            if typ == "OFFLINE":
                back[int(s)] = t + 60
            elif s == "ALL":
                for u in range(numberOfUsers):
                    cnt[u] += 1
            elif s == "HERE":
                for u in range(numberOfUsers):
                    if back[u] <= t:
                        cnt[u] += 1
            else:
                for tok in s.split():
                    cnt[int(tok[2:])] += 1
        return cnt
`)});
lite({id:2530,slug:"maximal-score-after-applying-k-operations",title:"Maximal Score After Applying K Operations",level:"Medium",topic:HP,name:"Always take the biggest, put back a third",
w:"[1,10,3,3,3], k=3: take 10 (→4), then 4 (→2), then 3 → 17.",k:"Each operation adds nums[i] to the score and replaces it with ceil(nums[i] / 3). Greedy: always operate on the current maximum. Use a max-heap.",
i:"nums = [1,10,3,3,3], k = 3",o:"17",time:"O(k log n)",space:"O(n)",
code:C(`
class Solution:
    def maxKelements(self, nums, k):
        heap = [-x for x in nums]
        heapify(heap)
        score = 0
        for _ in range(k):
            x = -heappop(heap)
            score += x
            heappush(heap, -((x + 2) // 3))
        return score
`)});
lite({id:1696,slug:"jump-game-vi",title:"Jump Game VI",level:"Medium",topic:DP,name:"DP with a monotonic deque of the best last k",
w:"[1,-1,-2,4,-7,3], k=2 → path 1, -1, 4, 3 gives 7.",k:"dp[i] = nums[i] + max(dp[i−k..i−1]). The sliding-window maximum is kept with a decreasing deque of indices: drop indices that left the window and any with values ≤ the new dp.",
i:"nums = [1,-1,-2,4,-7,3], k = 2",o:"7",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def maxResult(self, nums, k):
        dp = [0] * len(nums)
        dp[0] = nums[0]
        dq = deque([0])
        for i in range(1, len(nums)):
            while dq[0] < i - k:
                dq.popleft()
            dp[i] = nums[i] + dp[dq[0]]
            while dq and dp[dq[-1]] <= dp[i]:
                dq.pop()
            dq.append(i)
        return dp[-1]
`)});
lite({id:1529,slug:"minimum-suffix-flips",title:"Minimum Suffix Flips",level:"Medium",topic:GD,name:"Count the changes in the target",
w:"'10111' changes at 0→1, 1→0, 0→1 → 3 flips.",k:"A flip inverts everything from index i to the end, so only the places where the target changes from the previous bit need a flip (starting from an all-0 string). Count the positions where the bit differs from the one before it (with an initial 0).",
i:"target = \"10111\"",o:"3",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def minFlips(self, target):
        flips = 0
        prev = '0'
        for c in target:
            if c != prev:
                flips += 1
                prev = c
        return flips
`)});
lite({id:2583,slug:"kth-largest-sum-in-a-binary-tree",title:"Kth Largest Sum in a Binary Tree",level:"Medium",topic:BT,name:"Level sums, then sort",
w:"[5,8,9,2,1,3,7,4,6] has level sums 5, 17, 13, 10; the 2nd largest is 13.",k:"Do a BFS (Breadth-First Search) and compute the sum of each level. If there are fewer than k levels return −1, otherwise sort the sums in descending order and take the k-th.",
i:"root = [5,8,9,2,1,3,7,4,6], k = 2",o:"13",time:"O(n + h log h)",space:"O(n)",
code:C(`
class Solution:
    def kthLargestLevelSum(self, root, k):
        sums = []
        q = deque([root])
        while q:
            total = 0
            for _ in range(len(q)):
                node = q.popleft()
                total += node.val
                if node.left:
                    q.append(node.left)
                if node.right:
                    q.append(node.right)
            sums.append(total)
        if len(sums) < k:
            return -1
        return sorted(sums, reverse=True)[k - 1]
`)});
lite({id:2771,slug:"longest-non-decreasing-subarray-from-two-arrays",title:"Longest Non-decreasing Subarray From Two Arrays",level:"Medium",topic:DP,name:"Two states per index: took nums1 or nums2",
w:"nums1 [2,3,1], nums2 [1,2,1]: choose 2,3,... → best subarray length 2.",k:"At each index build nums3[i] from nums1 or nums2. Keep a1 = longest non-decreasing subarray ending here if we pick nums1[i], and a2 for nums2[i]. Each extends the previous a1 or a2 when the earlier value is ≤ the current one; otherwise restart at 1.",
i:"nums1 = [2,3,1], nums2 = [1,2,1]",o:"2",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def maxNonDecreasingLength(self, nums1, nums2):
        a1 = a2 = best = 1
        for i in range(1, len(nums1)):
            b1 = b2 = 1
            if nums1[i - 1] <= nums1[i]:
                b1 = max(b1, a1 + 1)
            if nums2[i - 1] <= nums1[i]:
                b1 = max(b1, a2 + 1)
            if nums1[i - 1] <= nums2[i]:
                b2 = max(b2, a1 + 1)
            if nums2[i - 1] <= nums2[i]:
                b2 = max(b2, a2 + 1)
            a1, a2 = b1, b2
            best = max(best, a1, a2)
        return best
`)});
lite({id:1930,slug:"unique-length-3-palindromic-subsequences",title:"Unique Length-3 Palindromic Subsequences",level:"Medium",topic:HM,name:"Between first and last occurrence of each letter",
w:"'aabca': 'aba', 'aca', 'aaa' → 3.",k:"A length-3 palindrome is x y x. For every letter x take its first and last positions; every distinct letter strictly between them is a valid middle y. Add up the number of distinct letters in each such interval.",
i:"s = \"aabca\"",o:"3",time:"O(26·n)",space:"O(1)",
code:C(`
class Solution:
    def countPalindromicSubsequence(self, s):
        res = 0
        for c in set(s):
            i, j = s.index(c), s.rindex(c)
            if j - i > 1:
                res += len(set(s[i + 1:j]))
        return res
`)});
lite({id:3069,slug:"distribute-elements-into-two-arrays-i",title:"Distribute Elements Into Two Arrays I",level:"Easy",topic:ARR,name:"Simulate the rule",
w:"[2,1,3]: arr1=[2], arr2=[1], then 2 > 1 so 3 goes to arr1 → [2,3,1].",k:"The first element goes to arr1 and the second to arr2. For each later element, put it into arr1 if the last element of arr1 is larger than the last of arr2, else into arr2. The answer is arr1 followed by arr2.",
i:"nums = [2,1,3]",o:"[2, 3, 1]",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def resultArray(self, nums):
        a, b = [nums[0]], [nums[1]]
        for x in nums[2:]:
            if a[-1] > b[-1]:
                a.append(x)
            else:
                b.append(x)
        return a + b
`)});
lite({id:2537,slug:"count-the-number-of-good-subarrays",title:"Count the Number of Good Subarrays",level:"Medium",topic:SW,name:"Sliding window counting equal pairs",
w:"[3,1,4,3,2,2,4], k=2: four subarrays contain at least 2 equal pairs → 4.",k:"A subarray is good if it has at least k pairs (i<j) with equal values. Maintain the pair count of the window with a frequency map (adding x adds freq[x] pairs; removing x removes freq[x]−1). When the window has ≥ k pairs, every extension to the right is good, so add n − r and shrink from the left.",
i:"nums = [3,1,4,3,2,2,4], k = 2",o:"4",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def countGood(self, nums, k):
        freq = Counter()
        pairs = l = res = 0
        n = len(nums)
        for r, x in enumerate(nums):
            pairs += freq[x]
            freq[x] += 1
            while pairs >= k:
                res += n - r
                freq[nums[l]] -= 1
                pairs -= freq[nums[l]]
                l += 1
        return res
`)});
