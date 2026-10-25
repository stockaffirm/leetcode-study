module.exports=({alt})=>{
const C=s=>s.replace(/^\n/,"").replace(/\n$/,"").split("\n");
// ---- Intuit
alt(3619,{name:"Recursive DFS",tag:"Alternative",time:"O(m·n)",space:"O(m·n)",explain:"Sum an island recursively and zero the cells as they are visited.",code:C(`
class Solution:
    def countIslands(self, grid, k):
        m, n = len(grid), len(grid[0])
        def dfs(i, j):
            if not (0 <= i < m and 0 <= j < n) or grid[i][j] <= 0:
                return 0
            v = grid[i][j]
            grid[i][j] = 0
            return v + dfs(i + 1, j) + dfs(i - 1, j) + dfs(i, j + 1) + dfs(i, j - 1)
        res = 0
        for i in range(m):
            for j in range(n):
                if grid[i][j] > 0 and dfs(i, j) % k == 0:
                    res += 1
        return res
`)});
alt(3148,{name:"Try every start and end",tag:"Brute force",time:"O((mn)²)",space:"O(1)",explain:"Score of any move chain is end − start; test every pair where the end is right/below the start.",code:C(`
class Solution:
    def maxScore(self, grid):
        m, n = len(grid), len(grid[0])
        best = float('-inf')
        for i in range(m):
            for j in range(n):
                for a in range(i, m):
                    for b in range(j, n):
                        if (a, b) != (i, j):
                            best = max(best, grid[a][b] - grid[i][j])
        return best
`)});
alt(2915,{name:"Top-down recursion",tag:"Alternative",time:"O(n·target)",space:"O(n·target)",explain:"best(i, remaining) = longest subsequence from nums[i:] summing to remaining.",code:C(`
class Solution:
    def lengthOfLongestSubsequence(self, nums, target):
        NEG = float('-inf')
        @lru_cache(None)
        def best(i, rem):
            if rem == 0:
                return 0
            if i == len(nums) or rem < 0:
                return NEG
            return max(best(i + 1, rem), 1 + best(i + 1, rem - nums[i]))
        r = best(0, target)
        return r if r > 0 else -1
`)});
alt(2234,{name:"Linear scan for the minimum",tag:"Brute force",time:"O(n·target)",space:"O(n)",explain:"Same plan, but find the best partial level by trying each v from high to low.",code:C(`
class Solution:
    def maximumBeauty(self, flowers, newFlowers, target, full, partial):
        f = sorted(min(x, target) for x in flowers)
        n = len(f)
        if f[0] == target:
            return n * full
        best = 0
        for k in range(n + 1):
            top = f[n - k:]
            cost = sum(target - x for x in top)
            if cost > newFlowers:
                continue
            rem = newFlowers - cost
            if k == n:
                best = max(best, k * full)
                continue
            rest = f[:n - k]
            for v in range(target - 1, f[0] - 1, -1):
                need = sum(v - x for x in rest if x < v)
                if need <= rem:
                    best = max(best, k * full + v * partial)
                    break
        return best
`)});
alt(3088,{name:"Place letters by counting",tag:"Alternative",time:"O(n)",space:"O(26)",explain:"Build the sorted string from letter counts and apply the same fix-up on the second half.",code:C(`
class Solution:
    def makeAntiPalindrome(self, s):
        cnt = Counter(s)
        a = []
        for c in sorted(cnt):
            a.extend(c * cnt[c])
        n = len(a)
        for i in range(n // 2, n):
            if a[i] == a[n - 1 - i]:
                j = i + 1
                while j < n and a[j] == a[i]:
                    j += 1
                if j == n:
                    return "-1"
                a[i], a[j] = a[j], a[i]
        return ''.join(a)
`)});
alt(2453,{name:"Try every seed",tag:"Brute force",time:"O(n²)",space:"O(1)",explain:"Count the targets each seed destroys and pick the best (smallest on ties).",code:C(`
class Solution:
    def destroyTargets(self, nums, space):
        best, who = -1, None
        for s in sorted(nums):
            c = sum(1 for x in nums if (x - s) % space == 0 and x >= s)
            if c > best:
                best, who = c, s
        return who
`)});
alt(2489,{name:"Check every substring",tag:"Brute force",time:"O(n²)",space:"O(1)",explain:"Count zeros and ones of every substring and compare the ratio by cross-multiplying.",code:C(`
class Solution:
    def fixedRatio(self, s, num1, num2):
        n = len(s)
        res = 0
        for i in range(n):
            z = o = 0
            for j in range(i, n):
                if s[j] == '0':
                    z += 1
                else:
                    o += 1
                if z * num2 == o * num1:
                    res += 1
        return res
`)});
alt(770,{name:"Stack-based evaluation",tag:"Alternative",time:"O(size of polynomials)",space:"O(size of polynomials)",explain:"Shunting-yard: operator and operand stacks hold polynomials (dictionaries).",code:C(`
class Solution:
    def basicCalculatorIV(self, expression, evalvars, evalints):
        env = dict(zip(evalvars, evalints))
        toks = []
        i = 0
        s = expression
        while i < len(s):
            if s[i] == ' ':
                i += 1
            elif s[i] in '()+-*':
                toks.append(s[i])
                i += 1
            else:
                j = i
                while j < len(s) and s[j] not in ' ()+-*':
                    j += 1
                toks.append(s[i:j])
                i = j
        def clean(p):
            return {k: v for k, v in p.items() if v}
        def operand(t):
            if t.isdigit():
                return clean({(): int(t)})
            if t in env:
                return clean({(): env[t]})
            return {(t,): 1}
        def apply(a, b, op):
            r = Counter()
            if op == '*':
                for k1, v1 in a.items():
                    for k2, v2 in b.items():
                        r[tuple(sorted(k1 + k2))] += v1 * v2
            else:
                for k, v in a.items():
                    r[k] += v
                for k, v in b.items():
                    r[k] += v if op == '+' else -v
            return clean(r)
        prec = {'+': 1, '-': 1, '*': 2}
        vals, ops = [], []
        def reduce_top():
            b = vals.pop()
            a = vals.pop()
            vals.append(apply(a, b, ops.pop()))
        for t in toks:
            if t == '(':
                ops.append(t)
            elif t == ')':
                while ops[-1] != '(':
                    reduce_top()
                ops.pop()
            elif t in prec:
                while ops and ops[-1] != '(' and prec[ops[-1]] >= prec[t]:
                    reduce_top()
                ops.append(t)
            else:
                vals.append(operand(t))
        while ops:
            reduce_top()
        poly = vals[0]
        return ['*'.join([str(poly[m])] + list(m)) for m in sorted(poly, key=lambda m: (-len(m), m))]
`)});
alt(1411,{name:"DP over all 12 row patterns",tag:"Brute force",time:"O(n·144)",space:"O(12)",explain:"List the 12 valid rows; row r can follow row q if no column has the same colour.",code:C(`
class Solution:
    def numOfWays(self, n):
        MOD = 10**9 + 7
        rows = [r for r in product(range(3), repeat=3) if r[0] != r[1] and r[1] != r[2]]
        ways = {r: 1 for r in rows}
        for _ in range(n - 1):
            ways = {r: sum(ways[q] for q in rows if all(a != b for a, b in zip(r, q))) % MOD for r in rows}
        return sum(ways.values()) % MOD
`)});
alt(3719,{name:"Count distinct with dictionaries",tag:"Alternative",time:"O(n²)",space:"O(n)",explain:"Maintain counts of distinct even and odd values with two dictionaries.",code:C(`
class Solution:
    def longestBalanced(self, nums):
        best = 0
        n = len(nums)
        for i in range(n):
            ev, od = {}, {}
            for j in range(i, n):
                d = ev if nums[j] % 2 == 0 else od
                d[nums[j]] = 1
                if len(ev) == len(od):
                    best = max(best, j - i + 1)
        return best
`)});
alt(1760,{name:"Try every penalty",tag:"Brute force",time:"O(n·max)",space:"O(1)",explain:"Test penalties 1, 2, 3 … and return the first that fits the operation budget.",code:C(`
class Solution:
    def minimumSize(self, nums, maxOperations):
        for p in range(1, max(nums) + 1):
            if sum((x - 1) // p for x in nums) <= maxOperations:
                return p
`)});
alt(1647,{name:"Max-heap of frequencies",tag:"Alternative",time:"O(n log 26)",space:"O(26)",explain:"Take the largest frequency; if it equals the next one, delete a character and push it back.",code:C(`
class Solution:
    def minDeletions(self, s):
        heap = [-c for c in Counter(s).values()]
        heapify(heap)
        deletions = 0
        while len(heap) > 1:
            top = -heappop(heap)
            if top == -heap[0]:
                deletions += 1
                if top - 1 > 0:
                    heappush(heap, -(top - 1))
            else:
                pass
        return deletions
`)});
alt(546,{name:"Bottom-up table",tag:"Alternative",time:"O(n⁴)",space:"O(n³)",explain:"Same recurrence filled iteratively by interval length.",code:C(`
class Solution:
    def removeBoxes(self, boxes):
        n = len(boxes)
        dp = [[[0] * n for _ in range(n)] for _ in range(n)]
        def get(l, r, k):
            return dp[l][r][k] if l <= r else 0
        for length in range(1, n + 1):
            for l in range(n - length + 1):
                r = l + length - 1
                for k in range(0, l + 1):
                    res = get(l + 1, r, 0) + (k + 1) ** 2
                    for m in range(l + 1, r + 1):
                        if boxes[m] == boxes[l]:
                            res = max(res, get(l + 1, m - 1, 0) + get(m, r, k + 1))
                    dp[l][r][k] = res
        return dp[0][n - 1][0]
`)});
};
