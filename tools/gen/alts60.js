module.exports=({alt})=>{
const C=s=>s.replace(/^\n/,"").replace(/\n$/,"").split("\n");
// ---- Citadel
alt(1801,{name:"Process one unit at a time (small amounts)",tag:"Brute force",time:"O(total amount · log n)",space:"O(total amount)",explain:"Expand each order into unit orders and match them one by one with heaps.",code:C(`
class Solution:
    def getNumberOfBacklogOrders(self, orders):
        buys, sells = [], []
        for price, amount, kind in orders:
            for _ in range(amount):
                if kind == 0:
                    if sells and sells[0] <= price:
                        heappop(sells)
                    else:
                        heappush(buys, -price)
                else:
                    if buys and -buys[0] >= price:
                        heappop(buys)
                    else:
                        heappush(sells, price)
        return (len(buys) + len(sells)) % (10**9 + 7)
`)});
alt(1515,{name:"Gradient descent with shrinking steps",tag:"Alternative",time:"O(iterations·n)",space:"O(1)",explain:"Start at the centroid and move against the gradient, shrinking the step size when it stops improving.",code:C(`
class Solution:
    def getMinDistSum(self, positions):
        n = len(positions)
        x = sum(p[0] for p in positions) / n
        y = sum(p[1] for p in positions) / n
        def total(a, b):
            return sum(((a - p) ** 2 + (b - q) ** 2) ** 0.5 for p, q in positions)
        step = 10.0
        best = total(x, y)
        while step > 1e-9:
            moved = False
            for dx, dy in ((1, 0), (-1, 0), (0, 1), (0, -1), (1, 1), (1, -1), (-1, 1), (-1, -1)):
                nx, ny = x + dx * step, y + dy * step
                v = total(nx, ny)
                if v < best:
                    best, x, y = v, nx, ny
                    moved = True
                    break
            if not moved:
                step /= 2
        return round(best, 5)
`)});
alt(2361,{name:"Recursive with memo",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"cost(i, onExpress) built from the previous stop.",code:C(`
class Solution:
    def minimumCosts(self, regular, express, expressCost):
        n = len(regular)
        @lru_cache(None)
        def cost(i, on_express):
            if i < 0:
                return expressCost if on_express else 0
            if on_express:
                return min(cost(i - 1, True), cost(i - 1, False) + expressCost) + express[i]
            return min(cost(i - 1, False), cost(i - 1, True)) + regular[i]
        return [min(cost(i, True), cost(i, False)) for i in range(n)]
`)});
alt(3186,{name:"Sorted values with a pointer",tag:"Alternative",time:"O(n log n)",space:"O(n)",explain:"Same DP with a moving pointer instead of bisect.",code:C(`
class Solution:
    def maximumTotalDamage(self, power):
        cnt = Counter(power)
        vals = sorted(cnt)
        best = [0] * (len(vals) + 1)
        j = 0
        for i, v in enumerate(vals):
            while vals[j] < v - 2:
                j += 1
            best[i + 1] = max(best[i], best[j] + v * cnt[v])
        return best[-1]
`)});
alt(2661,{name:"Check rows and columns after each paint",tag:"Brute force",time:"O(len·(m+n))",space:"O(m·n)",explain:"Mark cells painted and re-scan the row and column.",code:C(`
class Solution:
    def firstCompleteIndex(self, arr, mat):
        m, n = len(mat), len(mat[0])
        where = {mat[i][j]: (i, j) for i in range(m) for j in range(n)}
        painted = [[False] * n for _ in range(m)]
        for k, v in enumerate(arr):
            i, j = where[v]
            painted[i][j] = True
            if all(painted[i]) or all(painted[a][j] for a in range(m)):
                return k
`)});
alt(4069,{name:"Memoised recursion on the day",tag:"Alternative",time:"O(n²)",space:"O(n)",explain:"go(d) = best profit using days from d onwards, trying every buy day and sell day.",code:C(`
class Solution:
    def maxProfit(self, prices, cooldown, costs):
        n = len(prices)
        @lru_cache(None)
        def go(d):
            if d >= n:
                return 0
            best = go(d + 1)
            for j in range(d + 1, n):
                best = max(best, prices[j] - prices[d] - costs[j - d] + go(j + cooldown + 1))
            return best
        return go(0)
`)});
alt(1632,{name:"Sort all cells, union by row/column in value groups (dict DSU)",tag:"Alternative",time:"O(m·n log(m·n))",space:"O(m·n)",explain:"Sort cells by value and handle each equal-value block with a fresh union-find over row and column labels.",code:C(`
class Solution:
    def matrixRankTransform(self, matrix):
        m, n = len(matrix), len(matrix[0])
        cells = sorted((matrix[i][j], i, j) for i in range(m) for j in range(n))
        rank_row = [0] * m
        rank_col = [0] * n
        res = [[0] * n for _ in range(m)]
        k = 0
        while k < len(cells):
            e = k
            while e < len(cells) and cells[e][0] == cells[k][0]:
                e += 1
            block = cells[k:e]
            parent = {}
            def find(x):
                parent.setdefault(x, x)
                if parent[x] != x:
                    parent[x] = find(parent[x])
                return parent[x]
            for _, i, j in block:
                parent[find(('r', i))] = find(('c', j))
            top = defaultdict(int)
            for _, i, j in block:
                root = find(('r', i))
                top[root] = max(top[root], rank_row[i], rank_col[j])
            for _, i, j in block:
                res[i][j] = top[find(('r', i))] + 1
            for _, i, j in block:
                rank_row[i] = rank_col[j] = res[i][j]
            k = e
        return res
`)});
alt(2958,{name:"Longest window with a max-count check",tag:"Brute force",time:"O(n²)",space:"O(n)",explain:"For each start extend while no value exceeds k occurrences.",code:C(`
class Solution:
    def maxSubarrayLength(self, nums, k):
        best = 0
        for i in range(len(nums)):
            cnt = Counter()
            for j in range(i, len(nums)):
                cnt[nums[j]] += 1
                if cnt[nums[j]] > k:
                    break
                best = max(best, j - i + 1)
        return best
`)});
alt(1155,{name:"Top-down recursion",tag:"Alternative",time:"O(n·target·k)",space:"O(n·target)",explain:"ways(dice left, remaining target) with memoisation.",code:C(`
class Solution:
    def numRollsToTarget(self, n, k, target):
        MOD = 10**9 + 7
        @lru_cache(None)
        def go(dice, rem):
            if dice == 0:
                return 1 if rem == 0 else 0
            if rem < dice or rem > dice * k:
                return 0
            return sum(go(dice - 1, rem - f) for f in range(1, k + 1)) % MOD
        return go(n, target)
`)});
alt(935,{name:"Matrix exponentiation",tag:"Alternative",time:"O(100·log n)",space:"O(100)",explain:"The move graph is a 10×10 matrix; the answer is the sum of entries of its (n−1)-th power.",code:C(`
class Solution:
    def knightDialer(self, n):
        MOD = 10**9 + 7
        moves = {0: (4, 6), 1: (6, 8), 2: (7, 9), 3: (4, 8), 4: (0, 3, 9), 5: (), 6: (0, 1, 7), 7: (2, 6), 8: (1, 3), 9: (2, 4)}
        A = [[0] * 10 for _ in range(10)]
        for d, ts in moves.items():
            for t in ts:
                A[d][t] = 1
        def mul(X, Y):
            return [[sum(X[i][k] * Y[k][j] for k in range(10)) % MOD for j in range(10)] for i in range(10)]
        R = [[int(i == j) for j in range(10)] for i in range(10)]
        e = n - 1
        while e:
            if e & 1:
                R = mul(R, A)
            A = mul(A, A)
            e >>= 1
        return sum(map(sum, R)) % MOD
`)});
};
