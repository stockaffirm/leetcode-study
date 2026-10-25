const {lite}=require("./lib");
const C=s=>s.replace(/^\n/,"").replace(/\n$/,"").split("\n");
const ARR="Array / String",HM="Hash Map / Set",STK="Stack / Monotonic Stack",BT="Binary Tree",GR="Graph",HP="Heap",DP="Dynamic Programming",GD="Greedy",MB="Math / Bit Manipulation",BS="Binary Search",SRT="Sorting",SW="Sliding Window",MX="Matrix",UF="Union Find / Segment Tree",TP="Two Pointers",IV="Intervals",BTK="Backtracking",DS="Design",LL="Linked List",TR="Trie",PS="Prefix Sum";
// ---- Citadel
lite({id:1801,slug:"number-of-orders-in-the-backlog",title:"Number of Orders in the Backlog",level:"Medium",topic:HP,name:"Two heaps: best sell vs best buy",
w:"Orders [[10,5,0],[15,2,1],[25,1,1],[30,4,0]]: after matching, 6 orders remain in the backlog.",k:"Keep a max-heap of buy orders and a min-heap of sell orders. A new buy order matches the cheapest sells priced at or below it; a new sell order matches the highest buys priced at or above it. Match amounts until one side is exhausted; leftovers go into the backlog heap. Answer = total remaining amount mod 1e9+7.",
i:"orders = [[10,5,0],[15,2,1],[25,1,1],[30,4,0]]",o:"6",time:"O(n log n)",space:"O(n)",
code:C(`
class Solution:
    def getNumberOfBacklogOrders(self, orders):
        buys, sells = [], []
        for price, amount, kind in orders:
            if kind == 0:
                while amount and sells and sells[0][0] <= price:
                    p, a = heappop(sells)
                    take = min(a, amount)
                    amount -= take
                    if a > take:
                        heappush(sells, (p, a - take))
                if amount:
                    heappush(buys, (-price, amount))
            else:
                while amount and buys and -buys[0][0] >= price:
                    p, a = heappop(buys)
                    take = min(a, amount)
                    amount -= take
                    if a > take:
                        heappush(buys, (p, a - take))
                if amount:
                    heappush(sells, (price, amount))
        return (sum(a for _, a in buys) + sum(a for _, a in sells)) % (10**9 + 7)
`)});
lite({id:1515,slug:"best-position-for-a-service-centre",title:"Best Position for a Service Centre",level:"Hard",topic:BS,name:"Nested ternary search on a convex function",
w:"Four customers at (0,1), (1,0), (1,2), (2,1): the centre (1,1) gives total distance 4.",k:"The sum of Euclidean distances to the customers is a convex function of the centre (x, y). Convex functions can be minimised by ternary search: search x in the coordinate range, and for each x search y the same way. A hundred iterations give far more precision than needed; round the answer to 5 decimals.",
i:"positions = [[0,1],[1,0],[1,2],[2,1]]",o:"4.0",time:"O(iter² · n)",space:"O(1)",
code:C(`
class Solution:
    def getMinDistSum(self, positions):
        def total(x, y):
            return sum(((x - a) ** 2 + (y - b) ** 2) ** 0.5 for a, b in positions)
        def best_y(x):
            lo, hi = 0.0, 100.0
            for _ in range(60):
                m1 = lo + (hi - lo) / 3
                m2 = hi - (hi - lo) / 3
                if total(x, m1) < total(x, m2):
                    hi = m2
                else:
                    lo = m1
            return total(x, (lo + hi) / 2)
        lo, hi = 0.0, 100.0
        for _ in range(60):
            m1 = lo + (hi - lo) / 3
            m2 = hi - (hi - lo) / 3
            if best_y(m1) < best_y(m2):
                hi = m2
            else:
                lo = m1
        return round(best_y((lo + hi) / 2), 5)
`)});
lite({id:2361,slug:"minimum-costs-using-the-train-line",title:"Minimum Costs Using the Train Line",level:"Hard",topic:DP,name:"Two-state DP: on the regular or express route",
w:"regular [1,6,9,5], express [5,2,3,10], expressCost 8 → costs to stops 1…4: [1,7,14,19].",k:"Track two numbers while moving stop by stop: the cheapest cost to be at the stop on the regular route, and on the express route. Staying on a route adds that route's segment cost; switching to the express route costs expressCost extra, switching back to regular is free. The answer for each stop is the smaller of the two.",
i:"regular = [1,6,9,5], express = [5,2,3,10], expressCost = 8",o:"[1, 7, 14, 19]",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def minimumCosts(self, regular, express, expressCost):
        reg, exp = 0, expressCost
        res = []
        for r, e in zip(regular, express):
            new_reg = min(reg, exp) + r
            new_exp = min(exp, reg + expressCost) + e
            reg, exp = new_reg, new_exp
            res.append(min(reg, exp))
        return res
`)});
lite({id:3186,slug:"maximum-total-damage-with-spell-casting",title:"Maximum Total Damage With Spell Casting",level:"Medium",topic:DP,name:"House-robber over distinct damage values",
w:"[1,1,3,4]: cast both 1s and the 4 → 6 (3 is too close to both 1 and 4).",k:"Casting a spell with damage p blocks any spell with damage p−2 … p+2, but spells with the same damage can all be cast. Group by value: taking value v earns v × count(v) and excludes the previous two smaller values. Over the sorted distinct values: best[i] = max(best[i−1], best[j] + v × count) where j counts the values at least 3 below v.",
i:"power = [1,1,3,4]",o:"6",time:"O(n log n)",space:"O(n)",
code:C(`
class Solution:
    def maximumTotalDamage(self, power):
        cnt = Counter(power)
        vals = sorted(cnt)
        best = [0] * (len(vals) + 1)
        for i, v in enumerate(vals):
            j = bisect_left(vals, v - 2)
            best[i + 1] = max(best[i], best[j] + v * cnt[v])
        return best[-1]
`)});
lite({id:2661,slug:"first-completely-painted-row-or-column",title:"First Completely Painted Row or Column",level:"Medium",topic:MX,name:"Position map and row/column counters",
w:"arr [1,3,4,2], mat [[1,4],[2,3]]: after painting 1, 3, 4 the first row (1,4) is complete at index 2.",k:"Record where each number sits in the matrix. Paint numbers in the order of arr, counting how many cells of each row and each column are painted. The first index where some row or column reaches its full size is the answer.",
i:"arr = [1,3,4,2], mat = [[1,4],[2,3]]",o:"2",time:"O(m·n)",space:"O(m·n)",
code:C(`
class Solution:
    def firstCompleteIndex(self, arr, mat):
        m, n = len(mat), len(mat[0])
        where = {}
        for i in range(m):
            for j in range(n):
                where[mat[i][j]] = (i, j)
        rows = [0] * m
        cols = [0] * n
        for k, v in enumerate(arr):
            i, j = where[v]
            rows[i] += 1
            cols[j] += 1
            if rows[i] == n or cols[j] == m:
                return k
`)});
lite({id:4069,slug:"best-time-to-buy-and-sell-stock-with-cooldown-ii",title:"Best Time to Buy and Sell Stock with Cooldown II",level:"Medium",topic:DP,name:"best[d] = most profit using days up to d",
w:"prices [1,5,3] with a holding fee that grows with days: the best single trade buys on day 0 and sells on day 1.",k:"A trade buys on day i and sells on day j for prices[j] − prices[i] − costs[j−i]; after selling on day j the next buy is allowed from day j + cooldown + 1. Let best[d] be the best total profit using days up to d. Then best[j] = max(best[j−1], max over buy days i < j of best[i − cooldown − 1] + trade profit(i, j)) with best of a negative index = 0.",
i:"prices = [1,5,3], cooldown = 1, costs = [0,1,2]",o:"3",time:"O(n²)",space:"O(n)",
code:C(`
class Solution:
    def maxProfit(self, prices, cooldown, costs):
        n = len(prices)
        best = [0] * n
        for j in range(n):
            b = best[j - 1] if j else 0
            for i in range(j):
                prev = best[i - cooldown - 1] if i - cooldown - 1 >= 0 else 0
                b = max(b, prev + prices[j] - prices[i] - costs[j - i])
            best[j] = b
        return best[-1]
`)});
lite({id:1632,slug:"rank-transform-of-a-matrix",title:"Rank Transform of a Matrix",level:"Hard",topic:UF,name:"Process values in order; Union-Find equal cells in the same row/column",
w:"[[1,2],[3,4]] → ranks [[1,2],[2,3]].",k:"The rank of a cell is one more than the largest rank among smaller cells in its row and column. Process distinct values from small to large. Cells with the same value that share a row or column must get the same rank, so union them (rows and columns as nodes). For each connected group the rank is 1 + the largest current rank in any of its rows or columns; then update the row/column maxima.",
i:"matrix = [[1,2],[3,4]]",o:"[[1, 2], [2, 3]]",time:"O(m·n log(m·n))",space:"O(m·n)",
code:C(`
class Solution:
    def matrixRankTransform(self, matrix):
        m, n = len(matrix), len(matrix[0])
        groups = defaultdict(list)
        for i in range(m):
            for j in range(n):
                groups[matrix[i][j]].append((i, j))
        row_max = [0] * m
        col_max = [0] * n
        ans = [[0] * n for _ in range(m)]
        for v in sorted(groups):
            p = {}
            def find(x):
                p.setdefault(x, x)
                while p[x] != x:
                    p[x] = p[p[x]]
                    x = p[x]
                return x
            for i, j in groups[v]:
                p[find(i)] = find(m + j)
            best = defaultdict(int)
            for i, j in groups[v]:
                r = find(i)
                best[r] = max(best[r], row_max[i], col_max[j])
            for i, j in groups[v]:
                rank = best[find(i)] + 1
                ans[i][j] = rank
            for i, j in groups[v]:
                row_max[i] = col_max[j] = ans[i][j]
        return ans
`)});
lite({id:2958,slug:"length-of-longest-subarray-with-at-most-k-frequency",title:"Length of Longest Subarray With at Most K Frequency",level:"Medium",topic:SW,name:"Shrink while a value is too frequent",
w:"[1,2,3,1,2,3,1,2], k=2: the window [2,3,1,2,3,1] has every value at most twice → 6.",k:"Slide a window and count each value. When adding the right element makes its count exceed k, move the left end forward until that count is back to k. Track the longest window.",
i:"nums = [1,2,3,1,2,3,1,2], k = 2",o:"6",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def maxSubarrayLength(self, nums, k):
        cnt = Counter()
        left = best = 0
        for r, x in enumerate(nums):
            cnt[x] += 1
            while cnt[x] > k:
                cnt[nums[left]] -= 1
                left += 1
            best = max(best, r - left + 1)
        return best
`)});
lite({id:1155,slug:"number-of-dice-rolls-with-target-sum",title:"Number of Dice Rolls With Target Sum",level:"Medium",topic:DP,name:"DP over dice and running sum",
w:"2 dice with 6 faces, target 7 → 6 ways.",k:"ways[d][s] = number of ways to reach sum s with d dice = sum of ways[d−1][s−f] over faces f = 1…k. Build up the table die by die; answer ways[n][target] modulo 1e9+7.",
i:"n = 2, k = 6, target = 7",o:"6",time:"O(n·target·k)",space:"O(target)",
code:C(`
class Solution:
    def numRollsToTarget(self, n, k, target):
        MOD = 10**9 + 7
        dp = [0] * (target + 1)
        dp[0] = 1
        for _ in range(n):
            new = [0] * (target + 1)
            for s in range(1, target + 1):
                for f in range(1, min(k, s) + 1):
                    new[s] = (new[s] + dp[s - f]) % MOD
            dp = new
        return dp[target]
`)});
lite({id:935,slug:"knight-dialer",title:"Knight Dialer",level:"Medium",topic:DP,name:"Count paths along the knight's moves",
w:"n=2: from each of the 10 keys the knight has some moves; total 20 numbers.",k:"On a phone keypad a knight moves from each digit to a fixed list of digits (e.g. 1 → 6, 8). Let ways[d] be the number of numbers of the current length ending on digit d; for the next length each digit's ways are the sum over the digits that can jump to it. Repeat n − 1 times and add everything up modulo 1e9+7.",
i:"n = 2",o:"20",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def knightDialer(self, n):
        MOD = 10**9 + 7
        moves = {0: (4, 6), 1: (6, 8), 2: (7, 9), 3: (4, 8), 4: (0, 3, 9), 5: (), 6: (0, 1, 7), 7: (2, 6), 8: (1, 3), 9: (2, 4)}
        ways = [1] * 10
        for _ in range(n - 1):
            new = [0] * 10
            for d in range(10):
                for t in moves[d]:
                    new[t] = (new[t] + ways[d]) % MOD
            ways = new
        return sum(ways) % MOD
`)});
