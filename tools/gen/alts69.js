module.exports=({alt})=>{
const C=s=>s.replace(/^\n/,"").replace(/\n$/,"").split("\n");
// ---- Bloomberg (8)
alt(1846,{name:"Counting sort with a running cap",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"Count values capped at n, then hand out the largest reachable value.",code:C(`
class Solution:
    def maximumElementAfterDecrementingAndRearranging(self, arr):
        n = len(arr)
        cnt = [0] * (n + 1)
        for x in arr:
            cnt[min(x, n)] += 1
        cur = 0
        for v in range(1, n + 1):
            cur = min(cur + cnt[v], v)
        return cur
`)});
alt(504,{name:"Recursion",tag:"Alternative",time:"O(log n)",space:"O(log n)",explain:"Convert num // 7 first, then append the last digit.",code:C(`
class Solution:
    def convertToBase7(self, num):
        if num < 0:
            return "-" + self.convertToBase7(-num)
        if num < 7:
            return str(num)
        return self.convertToBase7(num // 7) + str(num % 7)
`)});
alt(2350,{name:"Brute force over sequence lengths",tag:"Brute force",time:"O(kᴸ·n)",space:"O(L)",explain:"For L = 1, 2, … test whether every sequence of length L is a subsequence of rolls.",code:C(`
class Solution:
    def shortestSequence(self, rolls, k):
        def is_subseq(seq):
            it = iter(rolls)
            return all(any(x == r for r in it) for x in seq)
        L = 1
        while True:
            for seq in product(range(1, k + 1), repeat=L):
                if not is_subseq(seq):
                    return L
            L += 1
`)});
alt(3016,{name:"Place letters onto the 8 keys one by one",tag:"Alternative",time:"O(n)",space:"O(1)",explain:"Give each letter (by frequency) to the key with the fewest letters.",code:C(`
class Solution:
    def minimumPushes(self, word):
        keys = [0] * 8
        total = 0
        for f in sorted(Counter(word).values(), reverse=True):
            i = keys.index(min(keys))
            keys[i] += 1
            total += f * keys[i]
        return total
`)});
alt(3620,{name:"Enumerate every path",tag:"Brute force",time:"exponential",space:"O(n)",explain:"DFS (Depth-First Search) over all paths, keep the best minimum edge among valid ones.",code:C(`
class Solution:
    def findMaxPathScore(self, edges, online, k):
        n = len(online)
        adj = defaultdict(list)
        for u, v, c in edges:
            adj[u].append((v, c))
        best = -1
        def dfs(u, cost, low):
            nonlocal best
            if cost > k:
                return
            if u == n - 1:
                best = max(best, low)
                return
            for v, c in adj[u]:
                if v == n - 1 or online[v]:
                    dfs(v, cost + c, min(low, c))
        dfs(0, 0, float('inf'))
        return best
`)});
alt(3756,{name:"Build each substring number",tag:"Brute force",time:"O(n·q)",space:"O(n)",explain:"Extract the non-zero digits of each query range and compute x · sum directly.",code:C(`
class Solution:
    def sumAndMultiply(self, s, queries):
        MOD = 10**9 + 7
        res = []
        for l, r in queries:
            digits = [c for c in s[l:r + 1] if c != '0']
            x = int(''.join(digits)) if digits else 0
            res.append(x * sum(int(c) for c in digits) % MOD)
        return res
`)});
alt(3534,{name:"BFS (Breadth-First Search) per query",tag:"Brute force",time:"O(q·n²)",space:"O(n)",explain:"Search the implicit graph for every query.",code:C(`
class Solution:
    def pathExistenceQueries(self, n, nums, maxDiff, queries):
        res = []
        for u, v in queries:
            dist = {u: 0}
            q = deque([u])
            while q:
                x = q.popleft()
                for y in range(n):
                    if y not in dist and abs(nums[x] - nums[y]) <= maxDiff:
                        dist[y] = dist[x] + 1
                        q.append(y)
            res.append(dist.get(v, -1))
        return res
`)});
alt(3312,{name:"List all pair gcds",tag:"Brute force",time:"O(n² log V)",space:"O(n²)",explain:"Compute and sort every pair's gcd.",code:C(`
class Solution:
    def gcdValues(self, nums, queries):
        pairs = sorted(gcd(a, b) for a, b in combinations(nums, 2))
        return [pairs[q] for q in queries]
`)});
alt(834,{name:"BFS (Breadth-First Search) from every node",tag:"Brute force",time:"O(n²)",space:"O(n)",explain:"Sum distances from each node separately.",code:C(`
class Solution:
    def sumOfDistancesInTree(self, n, edges):
        adj = defaultdict(list)
        for a, b in edges:
            adj[a].append(b)
            adj[b].append(a)
        res = []
        for s in range(n):
            dist = {s: 0}
            q = deque([s])
            while q:
                u = q.popleft()
                for v in adj[u]:
                    if v not in dist:
                        dist[v] = dist[u] + 1
                        q.append(v)
            res.append(sum(dist.values()))
        return res
`)});
alt(654,{name:"Recursive split at the maximum",tag:"Alternative",time:"O(n²)",space:"O(n)",explain:"Pick the maximum and recurse on both sides.",code:C(`
class Solution:
    def constructMaximumBinaryTree(self, nums):
        if not nums:
            return None
        i = nums.index(max(nums))
        node = TreeNode(nums[i])
        node.left = self.constructMaximumBinaryTree(nums[:i])
        node.right = self.constructMaximumBinaryTree(nums[i + 1:])
        return node
`)});
alt(3499,{name:"Try every trade",tag:"Brute force",time:"O(n⁴)",space:"O(n)",explain:"Enumerate every legal pair of block conversions on the augmented string.",code:C(`
class Solution:
    def maxActiveSectionsAfterTrade(self, s):
        t = '1' + s + '1'
        n = len(t)
        best = s.count('1')
        for i in range(1, n - 1):
            for j in range(i, n - 1):
                if all(c == '1' for c in t[i:j + 1]) and t[i - 1] == '0' and t[j + 1] == '0':
                    t2 = t[:i] + '0' * (j - i + 1) + t[j + 1:]
                    for a in range(1, n - 1):
                        for b in range(a, n - 1):
                            if all(c == '0' for c in t2[a:b + 1]) and t2[a - 1] == '1' and t2[b + 1] == '1':
                                t3 = t2[:a] + '1' * (b - a + 1) + t2[b + 1:]
                                best = max(best, t3[1:-1].count('1'))
        return best
`)});
alt(3501,{name:"Solve each substring with the block scan",tag:"Brute force",time:"O(q·n)",space:"O(n)",explain:"Run the single-string block scan on each query's substring.",code:C(`
class Solution:
    def maxActiveSectionsAfterTrade(self, s, queries):
        def solve(t):
            blocks = [(c, len(list(g))) for c, g in groupby(t)]
            best = 0
            for k in range(1, len(blocks) - 1):
                if blocks[k][0] == '1':
                    best = max(best, blocks[k - 1][1] + blocks[k + 1][1])
            return t.count('1') + best
        return [solve(s[l:r + 1]) for l, r in queries]
`)});
alt(3514,{name:"Triple loop",tag:"Brute force",time:"O(n³)",space:"O(V)",explain:"XOR (exclusive OR) every i ≤ j ≤ k directly.",code:C(`
class Solution:
    def uniqueXorTriplets(self, nums):
        seen = set()
        n = len(nums)
        for i in range(n):
            for j in range(i, n):
                for k in range(j, n):
                    seen.add(nums[i] ^ nums[j] ^ nums[k])
        return len(seen)
`)});
alt(420,{name:"Greedy edits, one at a time",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"Compute the minimum edits per length case with a list of run lengths.",code:C(`
class Solution:
    def strongPasswordChecker(self, password):
        n = len(password)
        kinds = sum([any(c.islower() for c in password), any(c.isupper() for c in password), any(c.isdigit() for c in password)])
        missing = 3 - kinds
        runs = []
        i = 0
        while i < n:
            j = i
            while j < n and password[j] == password[i]:
                j += 1
            if j - i >= 3:
                runs.append(j - i)
            i = j
        if n < 6:
            return max(6 - n, missing)
        if n <= 20:
            return max(missing, sum(r // 3 for r in runs))
        extra = n - 20
        deletions = extra
        for mod in (0, 1, 2):
            for idx in range(len(runs)):
                while extra > 0 and runs[idx] >= 3 and runs[idx] % 3 == mod:
                    take = min(extra, mod + 1)
                    runs[idx] -= take
                    extra -= take
                    if take < mod + 1:
                        break
        return deletions + max(missing, sum(r // 3 for r in runs if r >= 3))
`)});
alt(1592,{name:"Count gaps by hand",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"Scan the text, collect words and spaces separately.",code:C(`
class Solution:
    def reorderSpaces(self, text):
        words = []
        word = ""
        spaces = 0
        for c in text:
            if c == ' ':
                spaces += 1
                if word:
                    words.append(word)
                    word = ""
            else:
                word += c
        if word:
            words.append(word)
        if len(words) == 1:
            return words[0] + ' ' * spaces
        gap = spaces // (len(words) - 1)
        out = ""
        for i, w in enumerate(words):
            out += w
            if i < len(words) - 1:
                out += ' ' * gap
        return out + ' ' * (spaces - gap * (len(words) - 1))
`)});
alt(629,{name:"Memoised recursion",tag:"Alternative",time:"O(n·k·n)",space:"O(n·k)",explain:"Place the new largest element at each position.",code:C(`
class Solution:
    def kInversePairs(self, n, k):
        MOD = 10**9 + 7
        @lru_cache(None)
        def f(m, j):
            if j < 0:
                return 0
            if m == 1:
                return 1 if j == 0 else 0
            return sum(f(m - 1, j - t) for t in range(m)) % MOD
        return f(n, k)
`)});
alt(1406,{name:"Minimax on stones",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"Memoised recursion on the score difference for the player to move.",code:C(`
class Solution:
    def stoneGameIII(self, stoneValue):
        n = len(stoneValue)
        @lru_cache(None)
        def f(i):
            if i >= n:
                return 0
            best = float('-inf')
            take = 0
            for j in range(i, min(i + 3, n)):
                take += stoneValue[j]
                best = max(best, take - f(j + 1))
            return best
        d = f(0)
        return "Alice" if d > 0 else "Bob" if d < 0 else "Tie"
`)});
alt(2528,{name:"Binary search with a queue of placed stations",tag:"Alternative",time:"O(n log(sum + k))",space:"O(n)",explain:"Same greedy, tracking placed stations in a deque instead of a difference array.",code:C(`
class Solution:
    def maxPower(self, stations, r, k):
        n = len(stations)
        pref = [0]
        for x in stations:
            pref.append(pref[-1] + x)
        base = [pref[min(n, i + r + 1)] - pref[max(0, i - r)] for i in range(n)]
        def ok(target):
            placed = deque()
            current = 0
            used = 0
            for i in range(n):
                while placed and placed[0][0] <= i:
                    current -= placed.popleft()[1]
                need = target - base[i] - current
                if need > 0:
                    used += need
                    if used > k:
                        return False
                    placed.append((i + 2 * r + 1, need))
                    current += need
            return True
        lo, hi = min(base), min(base) + k
        while lo < hi:
            mid = (lo + hi + 1) // 2
            if ok(mid):
                lo = mid
            else:
                hi = mid - 1
        return lo
`)});
alt(1984,{name:"Sort and zip",tag:"Alternative",time:"O(n log n)",space:"O(n)",explain:"Pair each element with the one k − 1 places later.",code:C(`
class Solution:
    def minimumDifference(self, nums, k):
        s = sorted(nums)
        return min(b - a for a, b in zip(s, s[k - 1:]))
`)});
alt(3867,{name:"Two-ended deque",tag:"Alternative",time:"O(n log n)",space:"O(n)",explain:"Pop the smallest and largest prefix gcds alternately.",code:C(`
class Solution:
    def gcdSum(self, nums):
        best = 0
        values = []
        for x in nums:
            best = max(best, x)
            values.append(gcd(x, best))
        dq = deque(sorted(values))
        total = 0
        while len(dq) > 1:
            total += gcd(dq.popleft(), dq.pop())
        return total
`)});
alt(2013,{name:"List of points, scan pairs",tag:"Brute force",time:"O(points²) per count",space:"O(points)",explain:"Keep every added point (with repeats) and test all opposite corners.",code:C(`
class DetectSquares:
    def __init__(self):
        self.points = []

    def add(self, point):
        self.points.append(tuple(point))

    def count(self, point):
        x, y = point
        total = 0
        for px, py in self.points:
            if abs(px - x) == abs(py - y) and px != x:
                a = self.points.count((x, py))
                b = self.points.count((px, y))
                total += a * b
        return total
`)});
alt(2410,{name:"Match each player to the smallest fitting trainer",tag:"Alternative",time:"O(n log m)",space:"O(m)",explain:"Binary search the sorted trainers for every player (strongest first).",code:C(`
class Solution:
    def matchPlayersAndTrainers(self, players, trainers):
        trainers = sorted(trainers)
        count = 0
        for p in sorted(players):
            i = bisect_left(trainers, p)
            if i < len(trainers):
                trainers.pop(i)
                count += 1
        return count
`)});
alt(2213,{name:"Recompute the string after each update",tag:"Brute force",time:"O(q·n)",space:"O(n)",explain:"Apply the update and scan for the longest run.",code:C(`
class Solution:
    def longestRepeating(self, s, queryCharacters, queryIndices):
        chars = list(s)
        res = []
        for ch, idx in zip(queryCharacters, queryIndices):
            chars[idx] = ch
            res.append(max(len(list(g)) for _, g in groupby(chars)))
        return res
`)});
alt(3702,{name:"Check the XOR of everything",tag:"Alternative",time:"O(n)",space:"O(1)",explain:"Use functools.reduce for the total XOR (exclusive OR).",code:C(`
class Solution:
    def longestSubsequence(self, nums):
        total = reduce(lambda a, b: a ^ b, nums, 0)
        if total:
            return len(nums)
        return len(nums) - 1 if any(nums) else 0
`)});
alt(1377,{name:"BFS (Breadth-First Search) with probabilities",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"Spread probability level by level instead of recursing.",code:C(`
class Solution:
    def frogPosition(self, n, edges, t, target):
        adj = defaultdict(list)
        for a, b in edges:
            adj[a].append(b)
            adj[b].append(a)
        prob = {1: 1.0}
        parent = {1: 0}
        q = deque([(1, 0)])
        while q:
            u, time = q.popleft()
            children = [v for v in adj[u] if v != parent[u]]
            if u == target:
                return prob[u] if time == t or not children else 0
            if time == t:
                continue
            for v in children:
                parent[v] = u
                prob[v] = prob[u] / len(children)
                q.append((v, time + 1))
        return 0
`)});
alt(2607,{name:"Try every target per cycle",tag:"Brute force",time:"O(n²)",space:"O(n)",explain:"For each cycle try every value as the common target.",code:C(`
class Solution:
    def makeSubKSumEqual(self, arr, k):
        n = len(arr)
        g = gcd(n, k)
        res = 0
        for start in range(g):
            vals = arr[start::g]
            res += min(sum(abs(v - t) for v in vals) for t in vals)
        return res
`)});
alt(352,{name:"Set of values, rebuild the intervals",tag:"Brute force",time:"O(n log n) per query",space:"O(n)",explain:"Store the numbers and build the ranges on demand.",code:C(`
class SummaryRanges:
    def __init__(self):
        self.vals = set()

    def addNum(self, value):
        self.vals.add(value)

    def getIntervals(self):
        res = []
        for v in sorted(self.vals):
            if res and res[-1][1] + 1 == v:
                res[-1][1] = v
            else:
                res.append([v, v])
        return res
`)});
alt(913,{name:"Iterate the game values to a fixed point",tag:"Alternative",time:"O(n³ · rounds)",space:"O(n²)",explain:"Repeatedly mark states whose outcome is forced until nothing changes.",code:C(`
class Solution:
    def catMouseGame(self, graph):
        n = len(graph)
        result = {}
        for t in range(2):
            for c in range(1, n):
                result[(0, c, t)] = 1
                result[(c, c, t)] = 2
        changed = True
        while changed:
            changed = False
            for m in range(n):
                for c in range(1, n):
                    for t in range(2):
                        if (m, c, t) in result:
                            continue
                        if t == 0:
                            outcomes = [result.get((nm, c, 1), 0) for nm in graph[m]]
                            mine, other = 1, 2
                        else:
                            outcomes = [result.get((m, nc, 0), 0) for nc in graph[c] if nc != 0]
                            mine, other = 2, 1
                        if mine in outcomes:
                            result[(m, c, t)] = mine
                            changed = True
                        elif outcomes and all(o == other for o in outcomes):
                            result[(m, c, t)] = other
                            changed = True
        return result.get((1, 2, 0), 0)
`)});
alt(1542,{name:"Brute force over substrings",tag:"Brute force",time:"O(n²)",space:"O(1)",explain:"Check the parity mask of every substring.",code:C(`
class Solution:
    def longestAwesome(self, s):
        best = 0
        for i in range(len(s)):
            mask = 0
            for j in range(i, len(s)):
                mask ^= 1 << int(s[j])
                if mask & (mask - 1) == 0:
                    best = max(best, j - i + 1)
        return best
`)});
alt(3558,{name:"DFS (Depth-First Search) for the depth, then parity DP",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"Count odd-sum assignments on the longest path with a two-state DP (Dynamic Programming).",code:C(`
class Solution:
    def assignEdgeWeights(self, edges):
        MOD = 10**9 + 7
        adj = defaultdict(list)
        for a, b in edges:
            adj[a].append(b)
            adj[b].append(a)
        depth = 0
        stack = [(1, 0, 0)]
        while stack:
            u, parent, d = stack.pop()
            depth = max(depth, d)
            for v in adj[u]:
                if v != parent:
                    stack.append((v, u, d + 1))
        even, odd = 1, 0
        for _ in range(depth):
            even, odd = (even + odd) % MOD, (even + odd) % MOD
        return odd
`)});
alt(1927,{name:"Minimax over the question marks",tag:"Brute force",time:"O(10^q)",space:"O(q)",explain:"Play the game out with full search (small inputs).",code:C(`
class Solution:
    def sumGame(self, num):
        n = len(num)
        @lru_cache(None)
        def play(state, alice):
            if '?' not in state:
                half = n // 2
                return sum(map(int, state[:half])) != sum(map(int, state[half:]))
            options = []
            i = state.index('?')
            for d in '0123456789':
                options.append(play(state[:i] + d + state[i + 1:], not alice))
            return any(options) if alice else all(options)
        return play(num, True)
`)});
alt(3169,{name:"Mark every day",tag:"Brute force",time:"O(days)",space:"O(days)",explain:"Use a difference array over the days.",code:C(`
class Solution:
    def countDays(self, days, meetings):
        diff = [0] * (days + 2)
        for s, e in meetings:
            diff[s] += 1
            diff[e + 1] -= 1
        free = 0
        cur = 0
        for d in range(1, days + 1):
            cur += diff[d]
            if cur == 0:
                free += 1
        return free
`)});
alt(2290,{name:"Dijkstra",tag:"Alternative",time:"O(m·n log(m·n))",space:"O(m·n)",explain:"A heap instead of the deque.",code:C(`
class Solution:
    def minimumObstacles(self, grid):
        m, n = len(grid), len(grid[0])
        best = {(0, 0): 0}
        pq = [(0, 0, 0)]
        while pq:
            d, i, j = heappop(pq)
            if (i, j) == (m - 1, n - 1):
                return d
            if best.get((i, j), 1e9) < d:
                continue
            for a, b in ((i + 1, j), (i - 1, j), (i, j + 1), (i, j - 1)):
                if 0 <= a < m and 0 <= b < n:
                    nd = d + grid[a][b]
                    if nd < best.get((a, b), 1e9):
                        best[(a, b)] = nd
                        heappush(pq, (nd, a, b))
        return -1
`)});
alt(3903,{name:"Check each index directly",tag:"Brute force",time:"O(n²)",space:"O(1)",explain:"Take the maximum of the prefix and the minimum of the suffix for every index.",code:C(`
class Solution:
    def firstStableIndex(self, nums, k):
        for i in range(len(nums)):
            if max(nums[:i + 1]) - min(nums[i:]) <= k:
                return i
        return -1
`)});
alt(948,{name:"Deque of sorted tokens",tag:"Alternative",time:"O(n log n)",space:"O(n)",explain:"Same greedy with a deque.",code:C(`
class Solution:
    def bagOfTokensScore(self, tokens, power):
        dq = deque(sorted(tokens))
        score = best = 0
        while dq:
            if power >= dq[0]:
                power -= dq.popleft()
                score += 1
                best = max(best, score)
            elif score > 0:
                power += dq.pop()
                score -= 1
            else:
                break
        return best
`)});
alt(3244,{name:"Recompute the shortest path after each query",tag:"Brute force",time:"O(q·(n + q))",space:"O(n + q)",explain:"BFS (Breadth-First Search) on the graph after each added road.",code:C(`
class Solution:
    def shortestDistanceAfterQueries(self, n, queries):
        adj = defaultdict(list)
        for i in range(n - 1):
            adj[i].append(i + 1)
        res = []
        for u, v in queries:
            adj[u].append(v)
            dist = {0: 0}
            q = deque([0])
            while q:
                x = q.popleft()
                for y in adj[x]:
                    if y not in dist:
                        dist[y] = dist[x] + 1
                        q.append(y)
            res.append(dist[n - 1])
        return res
`)});
alt(1921,{name:"Simulate minute by minute",tag:"Brute force",time:"O(n²)",space:"O(n)",explain:"Shoot the nearest monster each minute and check if any reached the city.",code:C(`
class Solution:
    def eliminateMaximum(self, dist, speed):
        alive = list(zip(dist, speed))
        killed = 0
        minute = 0
        while alive:
            if any(d - s * minute <= 0 for d, s in alive):
                return killed
            alive.sort(key=lambda p: (p[0] - p[1] * minute + p[1] - 1) // p[1])
            alive.pop(0)
            killed += 1
            minute += 1
        return killed
`)});
alt(819,{name:"Manual tokenising",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"Scan characters, build words and count the allowed ones.",code:C(`
class Solution:
    def mostCommonWord(self, paragraph, banned):
        ban = set(banned)
        counts = {}
        word = ""
        for c in paragraph.lower() + ' ':
            if c.isalpha():
                word += c
            else:
                if word and word not in ban:
                    counts[word] = counts.get(word, 0) + 1
                word = ""
        return max(counts, key=counts.get)
`)});
alt(1886,{name:"Rotate in place",tag:"Alternative",time:"O(n²)",space:"O(1)",explain:"Transpose and reverse rows, up to four times.",code:C(`
class Solution:
    def findRotation(self, mat, target):
        n = len(mat)
        for _ in range(4):
            if mat == target:
                return True
            for i in range(n):
                for j in range(i + 1, n):
                    mat[i][j], mat[j][i] = mat[j][i], mat[i][j]
            for row in mat:
                row.reverse()
        return False
`)});
alt(2739,{name:"Closed form",tag:"Alternative",time:"O(1)",space:"O(1)",explain:"Number of litres transferred is min((main − 1) // 4, additional).",code:C(`
class Solution:
    def distanceTraveled(self, mainTank, additionalTank):
        return (mainTank + min((mainTank - 1) // 4, additionalTank)) * 10
`)});
alt(2024,{name:"Prefix counts with binary search",tag:"Alternative",time:"O(n log n)",space:"O(n)",explain:"For each start find the farthest end with at most k mismatches.",code:C(`
class Solution:
    def maxConsecutiveAnswers(self, answerKey, k):
        n = len(answerKey)
        best = 0
        for ch in 'TF':
            pref = [0]
            for c in answerKey:
                pref.append(pref[-1] + (c != ch))
            for i in range(n):
                j = bisect_right(pref, pref[i] + k) - 1
                best = max(best, j - i)
        return best
`)});
alt(1800,{name:"Split into ascending runs",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"Break the array where it stops increasing and sum each piece.",code:C(`
class Solution:
    def maxAscendingSum(self, nums):
        runs = [[nums[0]]]
        for x in nums[1:]:
            if x > runs[-1][-1]:
                runs[-1].append(x)
            else:
                runs.append([x])
        return max(sum(r) for r in runs)
`)});
alt(4052,{name:"Shift with list slicing",tag:"Alternative",time:"O(n²)",space:"O(n²)",explain:"Rotate rows with slices, then rotate each column by transposing.",code:C(`
class Solution:
    def cyclicShift(self, n, grid, rowShift, colShift):
        rows = [row[rowShift[i] % n:] + row[:rowShift[i] % n] for i, row in enumerate(grid)]
        cols = [list(c) for c in zip(*rows)]
        cols = [c[colShift[j] % n:] + c[:colShift[j] % n] for j, c in enumerate(cols)]
        return [list(r) for r in zip(*cols)]
`)});
alt(3524,{name:"Brute force over subarrays",tag:"Brute force",time:"O(n²)",space:"O(k)",explain:"Extend every subarray and count its product's remainder.",code:C(`
class Solution:
    def resultArray(self, nums, k):
        res = [0] * k
        for i in range(len(nums)):
            prod = 1
            for j in range(i, len(nums)):
                prod = prod * nums[j] % k
                res[prod] += 1
        return res
`)});
alt(3550,{name:"Digit sum with divmod",tag:"Alternative",time:"O(n log V)",space:"O(1)",explain:"Peel digits with divmod.",code:C(`
class Solution:
    def smallestIndex(self, nums):
        for i, x in enumerate(nums):
            s = 0
            while x:
                x, d = divmod(x, 10)
                s += d
            if s == i:
                return i
        return -1
`)});
alt(1675,{name:"Sorted values, try each minimum",tag:"Brute force",time:"O(n² log V)",space:"O(n)",explain:"Expand every number into all its possible values and slide over the sorted list.",code:C(`
class Solution:
    def minimumDeviation(self, nums):
        options = []
        for x in nums:
            vals = set()
            if x % 2:
                vals |= {x, x * 2}
            else:
                y = x
                while y % 2 == 0:
                    vals.add(y)
                    y //= 2
                vals.add(y)
            options.append(sorted(vals))
        best = float('inf')
        for lo in {v for opt in options for v in opt}:
            hi = lo
            ok = True
            for opt in options:
                i = bisect_left(opt, lo)
                if i == len(opt):
                    ok = False
                    break
                hi = max(hi, opt[i])
            if ok:
                best = min(best, hi - lo)
        return best
`)});
alt(1523,{name:"Count odds by length",tag:"Alternative",time:"O(1)",space:"O(1)",explain:"Half of the numbers, rounded up when the range starts on an odd number.",code:C(`
class Solution:
    def countOdds(self, low, high):
        length = high - low + 1
        return length // 2 + (1 if length % 2 and low % 2 else 0)
`)});
alt(1674,{name:"Brute force over targets",tag:"Brute force",time:"O(n·limit)",space:"O(1)",explain:"Compute the cost of every possible common sum.",code:C(`
class Solution:
    def minMoves(self, nums, limit):
        n = len(nums)
        best = float('inf')
        for t in range(2, 2 * limit + 1):
            cost = 0
            for i in range(n // 2):
                a, b = nums[i], nums[n - 1 - i]
                if a + b == t:
                    continue
                if min(a, b) + 1 <= t <= max(a, b) + limit:
                    cost += 1
                else:
                    cost += 2
            best = min(best, cost)
        return best
`)});
alt(3727,{name:"Pick the plus squares with a heap",tag:"Alternative",time:"O(n log n)",space:"O(n)",explain:"Take the largest squares for plus slots, the smallest for minus.",code:C(`
class Solution:
    def maxAlternatingSum(self, nums):
        sq = sorted(x * x for x in nums)
        minus = len(sq) // 2
        return sum(sq[minus:]) - sum(sq[:minus])
`)});
alt(2001,{name:"Compare every pair",tag:"Brute force",time:"O(n²)",space:"O(1)",explain:"Cross-multiply to compare ratios.",code:C(`
class Solution:
    def interchangeableRectangles(self, rectangles):
        n = len(rectangles)
        return sum(1 for i in range(n) for j in range(i + 1, n)
                   if rectangles[i][0] * rectangles[j][1] == rectangles[j][0] * rectangles[i][1])
`)});
alt(2913,{name:"Count by contribution",tag:"Alternative",time:"O(n²)",space:"O(n)",explain:"Track distinct counts with a dictionary.",code:C(`
class Solution:
    def sumCounts(self, nums):
        total = 0
        n = len(nums)
        for i in range(n):
            seen = {}
            for j in range(i, n):
                seen[nums[j]] = True
                total += len(seen) * len(seen)
        return total
`)});
alt(667,{name:"Two pointers on the first k + 1 numbers",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"Alternate lo / hi explicitly with a flag.",code:C(`
class Solution:
    def constructArray(self, n, k):
        res = []
        lo, hi = 1, k + 1
        take_lo = True
        for _ in range(k + 1):
            if take_lo:
                res.append(lo)
                lo += 1
            else:
                res.append(hi)
                hi -= 1
            take_lo = not take_lo
        res.extend(range(k + 2, n + 1))
        return res
`)});
alt(1569,{name:"Count same-BST permutations",tag:"Brute force",time:"O(n!·n)",space:"O(n)",explain:"Build the BST (Binary Search Tree) for every permutation and compare its shape (tiny n).",code:C(`
class Solution:
    def numOfWays(self, nums):
        def shape(arr):
            if not arr:
                return ()
            return (arr[0], shape([x for x in arr[1:] if x < arr[0]]), shape([x for x in arr[1:] if x > arr[0]]))
        target = shape(list(nums))
        count = sum(1 for p in permutations(nums) if shape(list(p)) == target)
        return (count - 1) % (10**9 + 7)
`)});
};
