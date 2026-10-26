module.exports=({alt})=>{
const C=s=>s.replace(/^\n/,"").replace(/\n$/,"").split("\n");
// ---- Bloomberg (4)
alt(3568,{name:"Dijkstra-style layered search",tag:"Alternative",time:"O(m·n·2^L·E)",space:"O(m·n·2^L·E)",explain:"Same state space explored with a heap keyed by moves.",code:C(`
class Solution:
    def minMoves(self, classroom, energy):
        m, n = len(classroom), len(classroom[0])
        lit = {}
        start = None
        for i in range(m):
            for j in range(n):
                if classroom[i][j] == 'L':
                    lit[(i, j)] = len(lit)
                elif classroom[i][j] == 'S':
                    start = (i, j)
        full = (1 << len(lit)) - 1
        if full == 0:
            return 0
        best = {(start[0], start[1], 0, energy): 0}
        pq = [(0, start[0], start[1], 0, energy)]
        while pq:
            d, r, c, mask, e = heappop(pq)
            if best.get((r, c, mask, e), 1e9) < d or e == 0:
                continue
            for a, b in ((r + 1, c), (r - 1, c), (r, c + 1), (r, c - 1)):
                if 0 <= a < m and 0 <= b < n and classroom[a][b] != 'X':
                    ne, nm = e - 1, mask
                    if classroom[a][b] == 'R':
                        ne = energy
                    elif (a, b) in lit:
                        nm |= 1 << lit[(a, b)]
                    if nm == full:
                        return d + 1
                    key = (a, b, nm, ne)
                    if d + 1 < best.get(key, 1e9):
                        best[key] = d + 1
                        heappush(pq, (d + 1, a, b, nm, ne))
        return -1
`)});
alt(1432,{name:"Try every digit replacement",tag:"Brute force",time:"O(100·d)",space:"O(d)",explain:"Try replacing every digit x by every digit y and keep valid results.",code:C(`
class Solution:
    def maxDiff(self, num):
        s = str(num)
        vals = []
        for x in '0123456789':
            for y in '0123456789':
                t = s.replace(x, y)
                if t[0] != '0':
                    vals.append(int(t))
        return max(vals) - min(vals)
`)});
alt(2966,{name:"Check groups with indices",tag:"Alternative",time:"O(n log n)",space:"O(n)",explain:"Slice sorted indices in threes and check the span.",code:C(`
class Solution:
    def divideArray(self, nums, k):
        a = sorted(nums)
        groups = [a[i:i + 3] for i in range(0, len(a), 3)]
        return groups if all(g[2] - g[0] <= k for g in groups) else []
`)});
alt(2138,{name:"Pad with ljust",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"Use slicing and ljust for the last group.",code:C(`
class Solution:
    def divideString(self, s, k, fill):
        return [s[i:i + k].ljust(k, fill) for i in range(0, len(s), k)]
`)});
alt(3085,{name:"Try every target range [low, low + k]",tag:"Brute force",time:"O(n·26)",space:"O(26)",explain:"For every low frequency keep letters within [low, low + k].",code:C(`
class Solution:
    def minimumDeletions(self, word, k):
        cnt = sorted(Counter(word).values())
        best = len(word)
        for low in range(0, max(cnt) + 1):
            cost = 0
            for c in cnt:
                if c < low:
                    cost += c
                elif c > low + k:
                    cost += c - low - k
            best = min(best, cost)
        return best
`)});
alt(3330,{name:"groupby runs",tag:"Alternative",time:"O(n)",space:"O(1)",explain:"Each run of length L contributes L − 1 alternatives.",code:C(`
class Solution:
    def possibleStringCount(self, word):
        return 1 + sum(len(list(g)) - 1 for _, g in groupby(word))
`)});
alt(1991,{name:"Prefix sums array",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"Precompute prefix sums.",code:C(`
class Solution:
    def findMiddleIndex(self, nums):
        pre = [0] + list(accumulate(nums))
        for i in range(len(nums)):
            if pre[i] == pre[-1] - pre[i + 1]:
                return i
        return -1
`)});
alt(3151,{name:"Compare parity explicitly",tag:"Alternative",time:"O(n)",space:"O(1)",explain:"Loop with an index.",code:C(`
class Solution:
    def isArraySpecial(self, nums):
        for i in range(len(nums) - 1):
            if nums[i] % 2 == nums[i + 1] % 2:
                return False
        return True
`)});
alt(3440,{name:"Try each meeting by rebuilding gaps",tag:"Brute force",time:"O(n²)",space:"O(n)",explain:"Remove meeting i, merge the gaps and test if it fits in another gap.",code:C(`
class Solution:
    def maxFreeTime(self, eventTime, startTime, endTime):
        n = len(startTime)
        gaps = [startTime[0]] + [startTime[i] - endTime[i - 1] for i in range(1, n)] + [eventTime - endTime[-1]]
        best = 0
        for i in range(n):
            dur = endTime[i] - startTime[i]
            others = gaps[:i] + gaps[i + 2:]
            fits = any(g >= dur for g in others)
            best = max(best, gaps[i] + gaps[i + 1] + (dur if fits else 0))
        return best
`)});
alt(3487,{name:"Sort and unique",tag:"Alternative",time:"O(n log n)",space:"O(n)",explain:"Use sorted(set()) and take positives.",code:C(`
class Solution:
    def maxSum(self, nums):
        vals = sorted(set(nums))
        pos = [v for v in vals if v > 0]
        return sum(pos) if pos else vals[-1]
`)});
alt(3479,{name:"Linear scan for each fruit",tag:"Brute force",time:"O(n²)",space:"O(n)",explain:"Find the leftmost unused basket by scanning.",code:C(`
class Solution:
    def numOfUnplacedFruits(self, fruits, baskets):
        b = baskets[:]
        un = 0
        for f in fruits:
            for i, cap in enumerate(b):
                if cap >= f:
                    b[i] = 0
                    break
            else:
                un += 1
        return un
`)});
alt(3363,{name:"Memoised recursion for the two triangles",tag:"Alternative",time:"O(n²)",space:"O(n²)",explain:"Top-down recursion over the upper triangle with the grid transposed for the third child.",code:C(`
class Solution:
    def maxCollectedFruits(self, fruits):
        n = len(fruits)
        NEG = float('-inf')
        def solve(g):
            @lru_cache(None)
            def go(i, j):
                if i == n - 2 and j == n - 1:
                    return g[i][j]
                if i >= n - 1 or j <= i or j >= n:
                    return NEG
                return g[i][j] + max(go(i + 1, j - 1), go(i + 1, j), go(i + 1, j + 1))
            return go(0, n - 1)
        t = tuple(tuple(r) for r in zip(*fruits))
        g = tuple(tuple(r) for r in fruits)
        return sum(fruits[i][i] for i in range(n)) + solve(g) + solve(t)
`)});
alt(363,{name:"Kadane with a brute-force inner scan",tag:"Brute force",time:"O(m²n²)",space:"O(n)",explain:"For each row pair try every column interval.",code:C(`
class Solution:
    def maxSumSubmatrix(self, matrix, k):
        m, n = len(matrix), len(matrix[0])
        best = float('-inf')
        for top in range(m):
            cols = [0] * n
            for bottom in range(top, m):
                for j in range(n):
                    cols[j] += matrix[bottom][j]
                for i in range(n):
                    s = 0
                    for j in range(i, n):
                        s += cols[j]
                        if s <= k:
                            best = max(best, s)
        return best
`)});
alt(1342,{name:"Simulate",tag:"Brute force",time:"O(log n)",space:"O(1)",explain:"Halve even numbers and subtract 1 from odd ones.",code:C(`
class Solution:
    def numberOfSteps(self, num):
        steps = 0
        while num:
            num = num // 2 if num % 2 == 0 else num - 1
            steps += 1
        return steps
`)});
alt(3495,{name:"Sum steps per number (small ranges)",tag:"Brute force",time:"O(range·log)",space:"O(1)",explain:"Count the base-4 digits of every number directly.",code:C(`
class Solution:
    def minOperations(self, queries):
        res = 0
        for l, r in queries:
            total = 0
            for x in range(l, r + 1):
                while x:
                    total += 1
                    x //= 4
            res += (total + 1) // 2
        return res
`)});
alt(1668,{name:"Count by repeated find",tag:"Alternative",time:"O(n²/m)",space:"O(n)",explain:"Build the repetition until it stops being a substring (same idea, explicit loop).",code:C(`
class Solution:
    def maxRepeating(self, sequence, word):
        best = 0
        for i in range(len(sequence)):
            k = 0
            while sequence.startswith(word, i + k * len(word)):
                k += 1
            best = max(best, k)
        return best
`)});
alt(2074,{name:"Collect values, rewrite the list",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"Read all values, reverse the even-length groups in the array, write them back.",code:C(`
class Solution:
    def reverseEvenLengthGroups(self, head):
        vals = []
        node = head
        while node:
            vals.append(node.val)
            node = node.next
        i, size = 0, 1
        while i < len(vals):
            j = min(i + size, len(vals))
            if (j - i) % 2 == 0:
                vals[i:j] = vals[i:j][::-1]
            i = j
            size += 1
        node = head
        for v in vals:
            node.val = v
            node = node.next
        return head
`)});
alt(976,{name:"Check every triple",tag:"Brute force",time:"O(n³)",space:"O(1)",explain:"Try all triples for the triangle inequality.",code:C(`
class Solution:
    def largestPerimeter(self, nums):
        best = 0
        for a, b, c in combinations(nums, 3):
            x, y, z = sorted((a, b, c))
            if x + y > z:
                best = max(best, a + b + c)
        return best
`)});
alt(2517,{name:"Try every gap value (small prices)",tag:"Brute force",time:"O(n·range)",space:"O(1)",explain:"Test every gap from the largest down.",code:C(`
class Solution:
    def maximumTastiness(self, price, k):
        price = sorted(price)
        for g in range(price[-1] - price[0], -1, -1):
            cnt, last = 1, price[0]
            for p in price[1:]:
                if p - last >= g:
                    cnt += 1
                    last = p
            if cnt >= k:
                return g
`)});
alt(3703,{name:"Repeated string replace",tag:"Brute force",time:"O(n²)",space:"O(n)",explain:"Remove the pattern '(' * k + ')' * k until the string stops changing.",code:C(`
class Solution:
    def removeSubstring(self, s, k):
        pat = '(' * k + ')' * k
        while pat in s:
            s = s.replace(pat, '')
        return s
`)});
alt(3713,{name:"Prefix counts per letter",tag:"Alternative",time:"O(26·n²)",space:"O(26·n)",explain:"Use prefix counts to read each substring's counts.",code:C(`
class Solution:
    def longestBalanced(self, s):
        n = len(s)
        pre = [[0] * 26 for _ in range(n + 1)]
        for i, c in enumerate(s):
            pre[i + 1] = pre[i][:]
            pre[i + 1][ord(c) - 97] += 1
        best = 0
        for i in range(n):
            for j in range(i + 1, n + 1):
                counts = {pre[j][t] - pre[i][t] for t in range(26) if pre[j][t] - pre[i][t]}
                if len(counts) == 1:
                    best = max(best, j - i)
        return best
`)});
alt(3318,{name:"Sliding Counter",tag:"Alternative",time:"O(n·k)",space:"O(k)",explain:"Maintain the Counter by adding and removing one element per slide.",code:C(`
class Solution:
    def findXSum(self, nums, k, x):
        cnt = Counter(nums[:k])
        res = []
        for i in range(len(nums) - k + 1):
            if i:
                cnt[nums[i - 1]] -= 1
                cnt[nums[i + k - 1]] += 1
            top = sorted(((c, v) for v, c in cnt.items() if c), reverse=True)[:x]
            res.append(sum(c * v for c, v in top))
        return res
`)});
alt(1765,{name:"Two-pass distance DP",tag:"Alternative",time:"O(m·n)",space:"O(m·n)",explain:"Manhattan distance to the nearest water with two sweeps.",code:C(`
class Solution:
    def highestPeak(self, isWater):
        m, n = len(isWater), len(isWater[0])
        INF = 10**9
        h = [[0 if isWater[i][j] else INF for j in range(n)] for i in range(m)]
        for i in range(m):
            for j in range(n):
                if i:
                    h[i][j] = min(h[i][j], h[i - 1][j] + 1)
                if j:
                    h[i][j] = min(h[i][j], h[i][j - 1] + 1)
        for i in range(m - 1, -1, -1):
            for j in range(n - 1, -1, -1):
                if i < m - 1:
                    h[i][j] = min(h[i][j], h[i + 1][j] + 1)
                if j < n - 1:
                    h[i][j] = min(h[i][j], h[i][j + 1] + 1)
        return h
`)});
alt(808,{name:"Bottom-up table",tag:"Alternative",time:"O(1)",space:"O(1)",explain:"Fill the probability table iteratively in units of 25 ml.",code:C(`
class Solution:
    def soupServings(self, n):
        if n >= 4800:
            return 1.0
        k = (n + 24) // 25
        p = [[0.0] * (k + 1) for _ in range(k + 1)]
        def get(a, b):
            if a <= 0 and b <= 0:
                return 0.5
            if a <= 0:
                return 1.0
            if b <= 0:
                return 0.0
            return p[a][b]
        for a in range(1, k + 1):
            for b in range(1, k + 1):
                p[a][b] = 0.25 * (get(a - 4, b) + get(a - 3, b - 1) + get(a - 2, b - 2) + get(a - 1, b - 3))
        return get(k, k)
`)});
alt(1975,{name:"Sort absolute values",tag:"Alternative",time:"O(mn log mn)",space:"O(mn)",explain:"Sum absolute values, subtract twice the minimum if the negative count is odd.",code:C(`
class Solution:
    def maxMatrixSum(self, matrix):
        vals = sorted(abs(v) for row in matrix for v in row)
        negs = sum(v < 0 for row in matrix for v in row)
        return sum(vals) - (2 * vals[0] if negs % 2 else 0)
`)});
alt(911,{name:"Linear scan",tag:"Brute force",time:"O(n) per query",space:"O(n)",explain:"Recount the votes up to time t on every query.",code:C(`
class TopVotedCandidate:
    def __init__(self, persons, times):
        self.p = persons
        self.t = times

    def q(self, t):
        cnt = Counter()
        lead = -1
        for p, tm in zip(self.p, self.t):
            if tm > t:
                break
            cnt[p] += 1
            if lead == -1 or cnt[p] >= cnt[lead]:
                lead = p
        return lead
`)});
alt(1339,{name:"Iterative post-order",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"Collect nodes in post-order and accumulate subtree sums.",code:C(`
class Solution:
    def maxProduct(self, root):
        order = []
        st = [root]
        while st:
            node = st.pop()
            order.append(node)
            if node.left:
                st.append(node.left)
            if node.right:
                st.append(node.right)
        sums = {}
        for node in reversed(order):
            sums[id(node)] = node.val + sums.get(id(node.left), 0) + sums.get(id(node.right), 0)
        total = sums[id(root)]
        return max(s * (total - s) for s in sums.values()) % (10**9 + 7)
`)});
alt(2975,{name:"Differences via sorted lists",tag:"Alternative",time:"O(h² + v²)",space:"O(h² + v²)",explain:"Pairwise differences with nested loops.",code:C(`
class Solution:
    def maximizeSquareArea(self, m, n, hFences, vFences):
        h = sorted(hFences + [1, m])
        v = sorted(vFences + [1, n])
        hs = set()
        for i in range(len(h)):
            for j in range(i + 1, len(h)):
                hs.add(h[j] - h[i])
        best = -1
        for i in range(len(v)):
            for j in range(i + 1, len(v)):
                d = v[j] - v[i]
                if d in hs:
                    best = max(best, d)
        return best * best % (10**9 + 7) if best > 0 else -1
`)});
alt(3731,{name:"Sorted scan",tag:"Alternative",time:"O(n log n)",space:"O(n)",explain:"Sort and list the gaps.",code:C(`
class Solution:
    def findMissingElements(self, nums):
        a = sorted(set(nums))
        res = []
        for x, y in zip(a, a[1:]):
            res.extend(range(x + 1, y))
        return res
`)});
alt(961,{name:"Compare nearby elements",tag:"Alternative",time:"O(n)",space:"O(1)",explain:"The repeated value always appears within 3 positions of its twin.",code:C(`
class Solution:
    def repeatedNTimes(self, nums):
        for i in range(len(nums)):
            for j in range(i + 1, min(i + 4, len(nums))):
                if nums[i] == nums[j]:
                    return nums[i]
`)});
alt(1281,{name:"Arithmetic digits",tag:"Alternative",time:"O(d)",space:"O(1)",explain:"Peel digits with divmod.",code:C(`
class Solution:
    def subtractProductAndSum(self, n):
        prod, total = 1, 0
        while n:
            n, d = divmod(n, 10)
            prod *= d
            total += d
        return prod - total
`)});
alt(3658,{name:"Compute both sums and gcd",tag:"Alternative",time:"O(n)",space:"O(1)",explain:"Add the numbers and take the gcd directly.",code:C(`
class Solution:
    def gcdOfOddEvenSums(self, n):
        odd = sum(range(1, 2 * n, 2))
        even = sum(range(2, 2 * n + 1, 2))
        return gcd(odd, even)
`)});
alt(3714,{name:"Brute force over substrings",tag:"Brute force",time:"O(n²)",space:"O(1)",explain:"Check every substring for equal counts of its distinct letters.",code:C(`
class Solution:
    def longestBalanced(self, s):
        best = 0
        for i in range(len(s)):
            cnt = Counter()
            for j in range(i, len(s)):
                cnt[s[j]] += 1
                if len(set(cnt.values())) == 1:
                    best = max(best, j - i + 1)
        return best
`)});
alt(1680,{name:"String concatenation",tag:"Brute force",time:"O(n²)",space:"O(n)",explain:"Build the binary string and convert it.",code:C(`
class Solution:
    def concatenatedBinary(self, n):
        return int(''.join(bin(i)[2:] for i in range(1, n + 1)), 2) % (10**9 + 7)
`)});
alt(1727,{name:"Sort each row of heights, take area per column",tag:"Alternative",time:"O(m·n log n)",space:"O(n)",explain:"Same idea written with explicit enumeration of the sorted heights.",code:C(`
class Solution:
    def largestSubmatrix(self, matrix):
        m, n = len(matrix), len(matrix[0])
        heights = [0] * n
        best = 0
        for row in matrix:
            heights = [h + 1 if v else 0 for h, v in zip(heights, row)]
            ordered = sorted(heights)
            for idx, h in enumerate(ordered):
                best = max(best, h * (n - idx))
        return best
`)});
alt(3418,{name:"Memoised recursion",tag:"Alternative",time:"O(m·n·3)",space:"O(m·n·3)",explain:"best(i, j, neutralisations left) from the target backwards.",code:C(`
class Solution:
    def maximumAmount(self, coins):
        m, n = len(coins), len(coins[0])
        NEG = float('-inf')
        @lru_cache(None)
        def go(i, j, left):
            if i >= m or j >= n:
                return NEG
            v = coins[i][j]
            if i == m - 1 and j == n - 1:
                if v < 0 and left > 0:
                    return 0
                return v
            nxt = max(go(i + 1, j, left), go(i, j + 1, left))
            take = v + nxt
            if v < 0 and left > 0:
                take = max(take, max(go(i + 1, j, left - 1), go(i, j + 1, left - 1)))
            return take
        return go(0, 0, 2)
`)});
alt(932,{name:"Recursive halves",tag:"Alternative",time:"O(n log n)",space:"O(n)",explain:"beautiful(n) = 2·beautiful((n+1)/2) − 1 followed by 2·beautiful(n/2).",code:C(`
class Solution:
    def beautifulArray(self, n):
        def go(m):
            if m == 1:
                return [1]
            odds = go((m + 1) // 2)
            evens = go(m // 2)
            return [2 * x - 1 for x in odds] + [2 * x for x in evens]
        return go(n)
`)});
alt(1722,{name:"DFS components",tag:"Alternative",time:"O(n + e)",space:"O(n + e)",explain:"Find components with DFS (Depth-First Search) instead of Union-Find.",code:C(`
class Solution:
    def minimumHammingDistance(self, source, target, allowedSwaps):
        n = len(source)
        g = defaultdict(list)
        for a, b in allowedSwaps:
            g[a].append(b)
            g[b].append(a)
        seen = [False] * n
        match = 0
        for s in range(n):
            if seen[s]:
                continue
            comp = []
            st = [s]
            seen[s] = True
            while st:
                u = st.pop()
                comp.append(u)
                for v in g[u]:
                    if not seen[v]:
                        seen[v] = True
                        st.append(v)
            match += sum((Counter(source[i] for i in comp) & Counter(target[i] for i in comp)).values())
        return n - match
`)});
alt(375,{name:"Bottom-up table",tag:"Alternative",time:"O(n³)",space:"O(n²)",explain:"Fill cost[l][r] by increasing interval length.",code:C(`
class Solution:
    def getMoneyAmount(self, n):
        cost = [[0] * (n + 2) for _ in range(n + 2)]
        for length in range(2, n + 1):
            for l in range(1, n - length + 2):
                r = l + length - 1
                cost[l][r] = min(x + max(cost[l][x - 1], cost[x + 1][r]) for x in range(l, r + 1))
        return cost[1][n]
`)});
alt(1721,{name:"Collect nodes in an array",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"Store nodes in a list and swap the k-th from each end.",code:C(`
class Solution:
    def swapNodes(self, head, k):
        nodes = []
        node = head
        while node:
            nodes.append(node)
            node = node.next
        a, b = nodes[k - 1], nodes[-k]
        a.val, b.val = b.val, a.val
        return head
`)});
alt(1952,{name:"Check for a prime square",tag:"Alternative",time:"O(√n)",space:"O(1)",explain:"n must be p² with p prime.",code:C(`
class Solution:
    def isThree(self, n):
        r = int(n ** 0.5)
        if r * r != n or r < 2:
            return False
        return all(r % d for d in range(2, int(r ** 0.5) + 1))
`)});
alt(447,{name:"Pairs of other points",tag:"Brute force",time:"O(n³)",space:"O(1)",explain:"Check all ordered triples.",code:C(`
class Solution:
    def numberOfBoomerangs(self, points):
        def d(a, b):
            return (a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2
        res = 0
        for i, p in enumerate(points):
            for j, q in enumerate(points):
                for k, r in enumerate(points):
                    if len({i, j, k}) == 3 and d(p, q) == d(p, r):
                        res += 1
        return res
`)});
alt(2144,{name:"Loop in triples",tag:"Alternative",time:"O(n log n)",space:"O(n)",explain:"Pay for the two biggest of each group of three.",code:C(`
class Solution:
    def minimumCost(self, cost):
        cost = sorted(cost, reverse=True)
        total = 0
        for i in range(0, len(cost), 3):
            total += sum(cost[i:i + 2])
        return total
`)});
alt(299,{name:"Two passes with counters",tag:"Alternative",time:"O(n)",space:"O(1)",explain:"Count bulls first, then match leftovers with digit counters.",code:C(`
class Solution:
    def getHint(self, secret, guess):
        bulls = 0
        s, g = Counter(), Counter()
        for a, b in zip(secret, guess):
            if a == b:
                bulls += 1
            else:
                s[a] += 1
                g[b] += 1
        cows = sum(min(s[d], g[d]) for d in s)
        return "%dA%dB" % (bulls, cows)
`)});
alt(3633,{name:"Sort rides by end time",tag:"Alternative",time:"O(l·w)",space:"O(1)",explain:"Land first then water, and water first then land, computed separately.",code:C(`
class Solution:
    def earliestFinishTime(self, landStartTime, landDuration, waterStartTime, waterDuration):
        def finish(a_start, a_dur, b_start, b_dur):
            best = float('inf')
            for s1, d1 in zip(a_start, a_dur):
                end1 = s1 + d1
                for s2, d2 in zip(b_start, b_dur):
                    best = min(best, max(end1, s2) + d2)
            return best
        return min(finish(landStartTime, landDuration, waterStartTime, waterDuration),
                   finish(waterStartTime, waterDuration, landStartTime, landDuration))
`)});
alt(3559,{name:"Walk up the tree for the path length",tag:"Brute force",time:"O(q·depth)",space:"O(n)",explain:"Find the path length by climbing parents (no lifting table).",code:C(`
class Solution:
    def assignEdgeWeights(self, edges, queries):
        MOD = 10**9 + 7
        n = len(edges) + 1
        g = [[] for _ in range(n + 1)]
        for a, b in edges:
            g[a].append(b)
            g[b].append(a)
        parent = [0] * (n + 1)
        depth = [0] * (n + 1)
        seen = {1}
        q = deque([1])
        while q:
            u = q.popleft()
            for v in g[u]:
                if v not in seen:
                    seen.add(v)
                    parent[v] = u
                    depth[v] = depth[u] + 1
                    q.append(v)
        res = []
        for u, v in queries:
            d = 0
            while u != v:
                if depth[u] >= depth[v]:
                    u = parent[u]
                else:
                    v = parent[v]
                d += 1
            res.append(pow(2, d - 1, MOD) if d else 0)
        return res
`)});
alt(3612,{name:"Deque simulation",tag:"Alternative",time:"O(n·2ⁿ) worst",space:"O(result)",explain:"Keep the result in a deque so reversal flags could be used; here we simply rebuild.",code:C(`
class Solution:
    def processStr(self, s):
        d = deque()
        for c in s:
            if c == '*':
                if d:
                    d.pop()
            elif c == '#':
                d.extend(list(d))
            elif c == '%':
                d.reverse()
            else:
                d.append(c)
        return ''.join(d)
`)});
alt(3020,{name:"Try every start and square chain with a Counter copy",tag:"Brute force",time:"O(n·log)",space:"O(n)",explain:"For each value follow the chain consuming counts from a copy.",code:C(`
class Solution:
    def maximumLength(self, nums):
        cnt = Counter(nums)
        best = 1
        for x in cnt:
            if x == 1:
                c = cnt[1]
                best = max(best, c if c % 2 else c - 1)
                continue
            c = dict(cnt)
            length = 0
            y = x
            while c.get(y, 0) >= 2:
                length += 2
                y *= y
            if c.get(y, 0) >= 1:
                length += 1
            else:
                length -= 1
            best = max(best, length)
        return best
`)});
alt(1301,{name:"Top-down recursion",tag:"Alternative",time:"O(n²)",space:"O(n²)",explain:"From the top-left, ask for the best score and ways to reach the bottom-right.",code:C(`
class Solution:
    def pathsWithMaxScore(self, board):
        MOD = 10**9 + 7
        n = len(board)
        @lru_cache(None)
        def best(i, j):
            if board[i][j] == 'X':
                return (-1, 0)
            if i == 0 and j == 0:
                return (0, 1)
            val = 0 if board[i][j] in 'ES' else int(board[i][j])
            top, ways = -1, 0
            for a, b in ((i - 1, j), (i, j - 1), (i - 1, j - 1)):
                if a >= 0 and b >= 0:
                    s, w = best(a, b)
                    if s > top:
                        top, ways = s, w
                    elif s == top:
                        ways += w
            return (top + val, ways % MOD) if top >= 0 else (-1, 0)
        s, w = best(n - 1, n - 1)
        return [s, w] if s >= 0 else [0, 0]
`)});
alt(1288,{name:"Pairwise coverage check",tag:"Brute force",time:"O(n²)",space:"O(1)",explain:"An interval is covered if some other interval contains it.",code:C(`
class Solution:
    def removeCoveredIntervals(self, intervals):
        return sum(not any(a <= c and d <= b and (a, b) != (c, d) for a, b in intervals) for c, d in intervals)
`)});
alt(3532,{name:"Union-Find",tag:"Alternative",time:"O(n α)",space:"O(n)",explain:"Union neighbouring nodes whose values are close enough.",code:C(`
class Solution:
    def pathExistenceQueries(self, n, nums, maxDiff, queries):
        p = list(range(n))
        def find(x):
            while p[x] != x:
                p[x] = p[p[x]]
                x = p[x]
            return x
        for i in range(1, n):
            if nums[i] - nums[i - 1] <= maxDiff:
                p[find(i)] = find(i - 1)
        return [find(u) == find(v) for u, v in queries]
`)});
alt(3336,{name:"Enumerate all assignments (tiny)",tag:"Brute force",time:"O(3ⁿ)",space:"O(n)",explain:"Every number goes to seq 1, seq 2 or neither.",code:C(`
class Solution:
    def subsequencePairCount(self, nums):
        res = 0
        for assign in product(range(3), repeat=len(nums)):
            a = [x for x, t in zip(nums, assign) if t == 1]
            b = [x for x, t in zip(nums, assign) if t == 2]
            if a and b and reduce(gcd, a) == reduce(gcd, b):
                res += 1
        return res % (10**9 + 7)
`)});
alt(1081,{name:"Greedy by smallest valid first letter",tag:"Alternative",time:"O(26·n)",space:"O(26)",explain:"Choose the smallest letter whose suffix still contains all remaining letters, repeat.",code:C(`
class Solution:
    def smallestSubsequence(self, s):
        res = ''
        while s:
            for c in sorted(set(s)):
                i = s.index(c)
                if set(s[i:]) == set(s):
                    res += c
                    s = s[i:].replace(c, '')
                    break
        return res
`)});
};
