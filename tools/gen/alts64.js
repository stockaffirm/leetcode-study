module.exports=({alt})=>{
const C=s=>s.replace(/^\n/,"").replace(/\n$/,"").split("\n");
// ---- Bloomberg (3)
alt(2749,{name:"Simulate by BFS over values (small)",tag:"Brute force",time:"O(60·bits)",space:"O(1)",explain:"Try each operation count and check by greedy popcount (same test written with a loop).",code:C(`
class Solution:
    def makeTheIntegerZero(self, num1, num2):
        k = 1
        while k <= 60:
            x = num1 - k * num2
            if x < k:
                k += 1
                continue
            bits = 0
            y = x
            while y:
                bits += y & 1
                y >>= 1
            if bits <= k:
                return k
            k += 1
        return -1
`)});
alt(966,{name:"Linear scans per query",tag:"Brute force",time:"O(q·w·L)",space:"O(1)",explain:"For each query test the three rules by scanning the whole list.",code:C(`
class Solution:
    def spellchecker(self, wordlist, queries):
        def mask(w):
            return ''.join('*' if c in 'aeiou' else c for c in w.lower())
        res = []
        for q in queries:
            if q in wordlist:
                res.append(q)
                continue
            hit = next((w for w in wordlist if w.lower() == q.lower()), None)
            if hit is None:
                hit = next((w for w in wordlist if mask(w) == mask(q)), "")
            res.append(hit)
        return res
`)});
alt(401,{name:"Choose LEDs with combinations",tag:"Alternative",time:"O(C(10,k))",space:"O(1)",explain:"Pick turnedOn of the 10 LEDs, compute the time and keep valid ones, then sort.",code:C(`
class Solution:
    def readBinaryWatch(self, turnedOn):
        res = []
        for leds in combinations(range(10), turnedOn):
            h = sum(1 << i for i in leds if i < 4)
            m = sum(1 << (i - 4) for i in leds if i >= 4)
            if h < 12 and m < 60:
                res.append((h, m))
        return ["%d:%02d" % t for t in sorted(res)]
`)});
alt(3542,{name:"Recursive splitting at the minimum",tag:"Alternative",time:"O(n²)",space:"O(n)",explain:"Zero the minimum non-zero value (1 operation) and solve the pieces between its positions.",code:C(`
class Solution:
    def minOperations(self, nums):
        def go(a):
            vals = [x for x in a if x > 0]
            if not vals:
                return 0
            m = min(vals)
            ops = 1
            piece = []
            for x in a + [0]:
                if x == m or x == 0:
                    ops += go(piece) if piece else 0
                    piece = []
                else:
                    piece.append(x)
            return ops
        res = 0
        seg = []
        for x in nums + [0]:
            if x == 0:
                res += go(seg) if seg else 0
                seg = []
            else:
                seg.append(x)
        return res
`)});
alt(3583,{name:"Check every triple",tag:"Brute force",time:"O(n³)",space:"O(1)",explain:"Test all index triples.",code:C(`
class Solution:
    def specialTriplets(self, nums):
        n = len(nums)
        return sum(1 for i, j, k in combinations(range(n), 3)
                   if nums[i] == nums[k] == 2 * nums[j]) % (10**9 + 7)
`)});
alt(2492,{name:"BFS from city 1",tag:"Alternative",time:"O(V + E)",space:"O(V + E)",explain:"Traverse the component of city 1 and take the smallest road weight seen.",code:C(`
class Solution:
    def minScore(self, n, roads):
        g = defaultdict(list)
        for a, b, w in roads:
            g[a].append((b, w))
            g[b].append((a, w))
        seen = {1}
        q = deque([1])
        best = float('inf')
        while q:
            u = q.popleft()
            for v, w in g[u]:
                best = min(best, w)
                if v not in seen:
                    seen.add(v)
                    q.append(v)
        return best
`)});
alt(840,{name:"Check with the centre rule",tag:"Alternative",time:"O(m·n)",space:"O(1)",explain:"The centre must be 5; test all eight lines through it.",code:C(`
class Solution:
    def numMagicSquaresInside(self, grid):
        res = 0
        for r in range(len(grid) - 2):
            for c in range(len(grid[0]) - 2):
                if grid[r + 1][c + 1] != 5:
                    continue
                cells = [grid[r + i][c + j] for i in range(3) for j in range(3)]
                if sorted(cells) != list(range(1, 10)):
                    continue
                g = grid
                lines = [
                    g[r][c] + g[r][c + 1] + g[r][c + 2], g[r + 1][c] + g[r + 1][c + 1] + g[r + 1][c + 2],
                    g[r + 2][c] + g[r + 2][c + 1] + g[r + 2][c + 2], g[r][c] + g[r + 1][c] + g[r + 2][c],
                    g[r][c + 1] + g[r + 1][c + 1] + g[r + 2][c + 1], g[r][c + 2] + g[r + 1][c + 2] + g[r + 2][c + 2],
                    g[r][c] + g[r + 1][c + 1] + g[r + 2][c + 2], g[r][c + 2] + g[r + 1][c + 1] + g[r + 2][c]]
                if all(x == 15 for x in lines):
                    res += 1
        return res
`)});
alt(1536,{name:"Simulate swaps one by one",tag:"Brute force",time:"O(n³)",space:"O(n)",explain:"Bubble the first suitable row upwards with single adjacent swaps.",code:C(`
class Solution:
    def minSwaps(self, grid):
        n = len(grid)
        rows = [r[:] for r in grid]
        def tz(row):
            c = 0
            for v in reversed(row):
                if v:
                    break
                c += 1
            return c
        swaps = 0
        for i in range(n):
            j = i
            while j < n and tz(rows[j]) < n - 1 - i:
                j += 1
            if j == n:
                return -1
            while j > i:
                rows[j], rows[j - 1] = rows[j - 1], rows[j]
                j -= 1
                swaps += 1
        return swaps
`)});
alt(3471,{name:"Count window membership with a sliding window",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"A value in a single window is one that, over its occurrences, is covered by exactly one start position; count start positions directly.",code:C(`
class Solution:
    def largestInteger(self, nums, k):
        n = len(nums)
        best = -1
        for x in set(nums):
            starts = set()
            for i, v in enumerate(nums):
                if v == x:
                    starts.update(range(max(0, i - k + 1), min(i, n - k) + 1))
            if len(starts) == 1:
                best = max(best, x)
        return best
`)});
alt(3783,{name:"Reverse by arithmetic",tag:"Alternative",time:"O(d)",space:"O(1)",explain:"Reverse the digits with divmod.",code:C(`
class Solution:
    def mirrorDistance(self, n):
        r, x = 0, n
        while x:
            x, d = divmod(x, 10)
            r = r * 10 + d
        return abs(n - r)
`)});
alt(1871,{name:"BFS with a farthest pointer",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"BFS (Breadth-First Search) over positions, remembering the farthest index already queued.",code:C(`
class Solution:
    def canReach(self, s, minJump, maxJump):
        n = len(s)
        q = deque([0])
        farthest = 0
        while q:
            i = q.popleft()
            for j in range(max(i + minJump, farthest + 1), min(i + maxJump, n - 1) + 1):
                if s[j] == '0':
                    if j == n - 1:
                        return True
                    q.append(j)
            farthest = max(farthest, i + maxJump)
        return n == 1
`)});
alt(3753,{name:"Brute force over the range",tag:"Brute force",time:"O((b−a)·len)",space:"O(1)",explain:"Add the waviness of every number directly (only for small ranges).",code:C(`
class Solution:
    def totalWaviness(self, num1, num2):
        total = 0
        for x in range(num1, num2 + 1):
            s = list(map(int, str(x)))
            for i in range(1, len(s) - 1):
                if (s[i] > s[i - 1] and s[i] > s[i + 1]) or (s[i] < s[i - 1] and s[i] < s[i + 1]):
                    total += 1
        return total
`)});
alt(1840,{name:"Sweep with explicit height per building (small n)",tag:"Brute force",time:"O(n)",space:"O(n)",explain:"Build the height array limit by limit with two sweeps and take the maximum.",code:C(`
class Solution:
    def maxBuilding(self, n, restrictions):
        cap = [float('inf')] * (n + 1)
        cap[1] = 0
        for i, h in restrictions:
            cap[i] = min(cap[i], h)
        for i in range(2, n + 1):
            cap[i] = min(cap[i], cap[i - 1] + 1)
        for i in range(n - 1, 0, -1):
            cap[i] = min(cap[i], cap[i + 1] + 1)
        return max(cap[1:])
`)});
alt(3700,{name:"Plain DP for small n",tag:"Brute force",time:"O(n·m²)",space:"O(m)",explain:"Step through the array positions one by one without matrix powers.",code:C(`
class Solution:
    def zigZagArrays(self, n, l, r):
        MOD = 10**9 + 7
        m = r - l + 1
        up = [v for v in range(m)]
        down = [m - 1 - v for v in range(m)]
        for _ in range(n - 2):
            nu = [sum(down[:v]) % MOD for v in range(m)]
            nd = [sum(up[v + 1:]) % MOD for v in range(m)]
            up, down = nu, nd
        return (sum(up) + sum(down)) % MOD
`)});
alt(3483,{name:"Loop over three digit positions",tag:"Brute force",time:"O(n³)",space:"O(n³)",explain:"Nested loops choosing three different positions.",code:C(`
class Solution:
    def totalNumbers(self, digits):
        seen = set()
        n = len(digits)
        for i in range(n):
            for j in range(n):
                for k in range(n):
                    if len({i, j, k}) == 3 and digits[i] != 0 and digits[k] % 2 == 0:
                        seen.add(digits[i] * 100 + digits[j] * 10 + digits[k])
        return len(seen)
`)});
alt(3517,{name:"Sort the half letters",tag:"Alternative",time:"O(n log n)",space:"O(n)",explain:"Sort the first half of the palindrome and mirror it.",code:C(`
class Solution:
    def smallestPalindrome(self, s):
        n = len(s)
        half = sorted(s[:n // 2])
        mid = s[n // 2] if n % 2 else ''
        return ''.join(half) + mid + ''.join(half[::-1])
`)});
alt(3345,{name:"Digit product with arithmetic",tag:"Alternative",time:"O(small)",space:"O(1)",explain:"Compute the product with divmod.",code:C(`
class Solution:
    def smallestNumber(self, n, t):
        x = n
        while True:
            p, y = 1, x
            while y:
                y, d = divmod(y, 10)
                p *= d
            if p % t == 0:
                return x
            x += 1
`)});
alt(1510,{name:"Top-down memo",tag:"Alternative",time:"O(n√n)",space:"O(n)",explain:"Recursive win(i) with caching.",code:C(`
class Solution:
    def winnerSquareGame(self, n):
        @lru_cache(None)
        def win(i):
            j = 1
            while j * j <= i:
                if not win(i - j * j):
                    return True
                j += 1
            return False
        return win(n)
`)});
alt(583,{name:"Edit distance with deletions only",tag:"Alternative",time:"O(n·m)",space:"O(n·m)",explain:"dp[i][j] = deletions to make the prefixes equal.",code:C(`
class Solution:
    def minDistance(self, word1, word2):
        n, m = len(word1), len(word2)
        dp = [[0] * (m + 1) for _ in range(n + 1)]
        for i in range(n + 1):
            for j in range(m + 1):
                if i == 0 or j == 0:
                    dp[i][j] = i + j
                elif word1[i - 1] == word2[j - 1]:
                    dp[i][j] = dp[i - 1][j - 1]
                else:
                    dp[i][j] = 1 + min(dp[i - 1][j], dp[i][j - 1])
        return dp[n][m]
`)});
alt(940,{name:"Set of all subsequences (tiny strings)",tag:"Brute force",time:"O(2ⁿ)",space:"O(2ⁿ)",explain:"Enumerate every subsequence and count the distinct ones.",code:C(`
class Solution:
    def distinctSubseqII(self, s):
        seen = set()
        for mask in range(1, 1 << len(s)):
            seen.add(''.join(s[i] for i in range(len(s)) if mask >> i & 1))
        return len(seen) % (10**9 + 7)
`)});
alt(2409,{name:"Count the days one by one",tag:"Brute force",time:"O(365)",space:"O(1)",explain:"Mark the days of each stay and intersect.",code:C(`
class Solution:
    def countDaysTogether(self, arriveAlice, leaveAlice, arriveBob, leaveBob):
        months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
        def day(s):
            return sum(months[:int(s[:2]) - 1]) + int(s[3:])
        a = set(range(day(arriveAlice), day(leaveAlice) + 1))
        b = set(range(day(arriveBob), day(leaveBob) + 1))
        return len(a & b)
`)});
alt(145,{name:"Recursive",tag:"Alternative",time:"O(n)",space:"O(h)",explain:"Left, right, then the node.",code:C(`
class Solution:
    def postorderTraversal(self, root):
        res = []
        def go(node):
            if node:
                go(node.left)
                go(node.right)
                res.append(node.val)
        go(root)
        return res
`)});
alt(888,{name:"Sorted Bob list and binary search",tag:"Alternative",time:"O((n + m) log m)",space:"O(m)",explain:"Binary search Bob's sorted list for the matching box.",code:C(`
class Solution:
    def fairCandySwap(self, aliceSizes, bobSizes):
        delta = (sum(bobSizes) - sum(aliceSizes)) // 2
        bob = sorted(bobSizes)
        for x in aliceSizes:
            j = bisect_left(bob, x + delta)
            if j < len(bob) and bob[j] == x + delta:
                return [x, x + delta]
`)});
alt(950,{name:"Reverse the process",tag:"Alternative",time:"O(n log n)",space:"O(n)",explain:"Build the answer by working backwards from the largest card.",code:C(`
class Solution:
    def deckRevealedIncreasing(self, deck):
        res = deque()
        for card in sorted(deck, reverse=True):
            if res:
                res.appendleft(res.pop())
            res.appendleft(card)
        return list(res)
`)});
alt(1550,{name:"Window of three",tag:"Alternative",time:"O(n)",space:"O(1)",explain:"Check every window of three neighbours.",code:C(`
class Solution:
    def threeConsecutiveOdds(self, arr):
        return any(a % 2 and b % 2 and c % 2 for a, b, c in zip(arr, arr[1:], arr[2:]))
`)});
alt(1608,{name:"Count for every x",tag:"Brute force",time:"O(n²)",space:"O(1)",explain:"Try x = 0…n and count the numbers ≥ x.",code:C(`
class Solution:
    def specialArray(self, nums):
        for x in range(len(nums) + 1):
            if sum(v >= x for v in nums) == x:
                return x
        return -1
`)});
alt(1717,{name:"Count letters on a stack-free pass",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"Split at other letters and process each a/b block with counters.",code:C(`
class Solution:
    def maximumGain(self, s, x, y):
        hi, lo = ('a', 'b') if x >= y else ('b', 'a')
        big, small = max(x, y), min(x, y)
        total = 0
        block = [c for c in ''.join(ch if ch in 'ab' else '|' for ch in s).split('|')]
        for b in block:
            a_cnt = b_cnt = 0
            for c in b:
                if c == hi:
                    a_cnt += 1
                elif a_cnt:
                    a_cnt -= 1
                    total += big
                else:
                    b_cnt += 1
            total += min(a_cnt, b_cnt) * small
        return total
`)});
alt(2073,{name:"Simulate the queue",tag:"Brute force",time:"O(sum)",space:"O(n)",explain:"Rotate people until person k finishes.",code:C(`
class Solution:
    def timeRequiredToBuy(self, tickets, k):
        q = deque((t, i) for i, t in enumerate(tickets))
        time = 0
        while True:
            t, i = q.popleft()
            time += 1
            if t == 1:
                if i == k:
                    return time
            else:
                q.append((t - 1, i))
`)});
alt(1304,{name:"Compute with a comprehension of pairs",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"The same symmetric list built by indexing arithmetic.",code:C(`
class Solution:
    def sumZero(self, n):
        return list(range(-(n - 1), n, 2))
`)});
alt(2104,{name:"All subarrays",tag:"Brute force",time:"O(n²)",space:"O(1)",explain:"Extend each start keeping the running max and min.",code:C(`
class Solution:
    def subArrayRanges(self, nums):
        total = 0
        for i in range(len(nums)):
            hi = lo = nums[i]
            for j in range(i + 1, len(nums)):
                hi = max(hi, nums[j])
                lo = min(lo, nums[j])
                total += hi - lo
        return total
`)});
alt(2239,{name:"Sort by distance then value",tag:"Alternative",time:"O(n log n)",space:"O(n)",explain:"Sort with the same key and take the first.",code:C(`
class Solution:
    def findClosestNumber(self, nums):
        best = nums[0]
        for x in nums:
            if abs(x) < abs(best) or (abs(x) == abs(best) and x > best):
                best = x
        return best
`)});
alt(3254,{name:"Check every window",tag:"Brute force",time:"O(n·k)",space:"O(k)",explain:"A window is good if sorted equals consecutive numbers.",code:C(`
class Solution:
    def resultsArray(self, nums, k):
        res = []
        for i in range(len(nums) - k + 1):
            w = nums[i:i + k]
            good = all(w[t + 1] == w[t] + 1 for t in range(k - 1))
            res.append(w[-1] if good else -1)
        return res
`)});
alt(2590,{name:"Sorted insert per user",tag:"Alternative",time:"O(t) per add",space:"O(t)",explain:"Keep each user's pending tasks in a list sorted by due date using insort.",code:C(`
class TodoList:
    def __init__(self):
        self.next_id = 1
        self.pending = defaultdict(list)
        self.owner = {}

    def addTask(self, userId, taskDescription, dueDate, tags):
        tid = self.next_id
        self.next_id += 1
        insort(self.pending[userId], (dueDate, tid, taskDescription, frozenset(tags)))
        self.owner[tid] = userId
        return tid

    def getAllTasks(self, userId):
        return [d for _, _, d, _ in self.pending[userId]]

    def getTasksForTag(self, userId, tag):
        return [d for _, _, d, tags in self.pending[userId] if tag in tags]

    def completeTask(self, userId, taskId):
        if self.owner.get(taskId) == userId:
            self.pending[userId] = [t for t in self.pending[userId] if t[1] != taskId]
`)});
alt(1464,{name:"Scan for the two largest",tag:"Alternative",time:"O(n)",space:"O(1)",explain:"Track the largest and second largest in one pass.",code:C(`
class Solution:
    def maxProduct(self, nums):
        a = b = 0
        for x in nums:
            if x > a:
                a, b = x, a
            elif x > b:
                b = x
        return (a - 1) * (b - 1)
`)});
alt(3190,{name:"Remainder cost",tag:"Alternative",time:"O(n)",space:"O(1)",explain:"Each remainder costs min(r, 3 − r) = 1.",code:C(`
class Solution:
    def minimumOperations(self, nums):
        return sum(min(x % 3, 3 - x % 3) for x in nums)
`)});
alt(1671,{name:"Binary-search LIS lengths",tag:"Alternative",time:"O(n log n)",space:"O(n)",explain:"Compute the left and right LIS (Longest Increasing Subsequence) lengths with patience sorting.",code:C(`
class Solution:
    def minimumMountainRemovals(self, nums):
        n = len(nums)
        def lis_lengths(a):
            tails = []
            out = []
            for x in a:
                i = bisect_left(tails, x)
                if i == len(tails):
                    tails.append(x)
                else:
                    tails[i] = x
                out.append(i + 1)
            return out
        left = lis_lengths(nums)
        right = lis_lengths(nums[::-1])[::-1]
        keep = max(left[i] + right[i] - 1 for i in range(n) if left[i] > 1 and right[i] > 1)
        return n - keep
`)});
alt(3133,{name:"Walk through the n-th valid number",tag:"Alternative",time:"O(log)",space:"O(1)",explain:"Interleave bits of n−1 with the zero bits of x using string positions.",code:C(`
class Solution:
    def minEnd(self, n, x):
        k = n - 1
        res = x
        pos = 0
        while k:
            while (x >> pos) & 1:
                pos += 1
            if k & 1:
                res |= 1 << pos
            k >>= 1
            pos += 1
        return res
`)});
alt(2413,{name:"lcm",tag:"Alternative",time:"O(log)",space:"O(1)",explain:"The answer is lcm(2, n).",code:C(`
class Solution:
    def smallestEvenMultiple(self, n):
        return 2 * n // gcd(2, n)
`)});
alt(2593,{name:"Heap of (value, index)",tag:"Alternative",time:"O(n log n)",space:"O(n)",explain:"Pop the smallest unmarked element from a heap.",code:C(`
class Solution:
    def findScore(self, nums):
        heap = [(v, i) for i, v in enumerate(nums)]
        heapify(heap)
        seen = set()
        score = 0
        while heap:
            v, i = heappop(heap)
            if i in seen:
                continue
            score += v
            seen.update({i - 1, i, i + 1})
        return score
`)});
alt(2762,{name:"Sorted container window",tag:"Alternative",time:"O(n log n)",space:"O(n)",explain:"Keep the window values in a Counter and check max − min.",code:C(`
class Solution:
    def continuousSubarrays(self, nums):
        cnt = Counter()
        left = res = 0
        for r, x in enumerate(nums):
            cnt[x] += 1
            while max(cnt) - min(cnt) > 2:
                cnt[nums[left]] -= 1
                if cnt[nums[left]] == 0:
                    del cnt[nums[left]]
                left += 1
            res += r - left + 1
        return res
`)});
alt(1792,{name:"Recompute all gains each step",tag:"Brute force",time:"O(k·n)",space:"O(n)",explain:"Pick the best class with max() each time.",code:C(`
class Solution:
    def maxAverageRatio(self, classes, extraStudents):
        c = [list(x) for x in classes]
        for _ in range(extraStudents):
            i = max(range(len(c)), key=lambda t: (c[t][0] + 1) / (c[t][1] + 1) - c[t][0] / c[t][1])
            c[i][0] += 1
            c[i][1] += 1
        return round(sum(p / t for p, t in c) / len(c), 5)
`)});
alt(3354,{name:"Simulate both directions",tag:"Brute force",time:"O(n²·sum)",space:"O(n)",explain:"For every zero and every direction run the bouncing process.",code:C(`
class Solution:
    def countValidSelections(self, nums):
        n = len(nums)
        count = 0
        for start in range(n):
            if nums[start] != 0:
                continue
            for d in (-1, 1):
                a = nums[:]
                i, dd = start, d
                while 0 <= i < n:
                    if a[i] == 0:
                        i += dd
                    else:
                        a[i] -= 1
                        dd = -dd
                        i += dd
                if all(v == 0 for v in a):
                    count += 1
        return count
`)});
alt(3388,{name:"Compare slices directly",tag:"Brute force",time:"O(n³)",space:"O(1)",explain:"For every split test the two prefix conditions with slice comparison.",code:C(`
class Solution:
    def beautifulSplits(self, nums):
        n = len(nums)
        res = 0
        for i in range(1, n - 1):
            for j in range(i + 1, n):
                a, b, c = nums[:i], nums[i:j], nums[j:]
                if b[:len(a)] == a and len(b) >= len(a):
                    res += 1
                elif c[:len(b)] == b and len(c) >= len(b):
                    res += 1
        return res
`)});
alt(1791,{name:"Degree counting",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"The centre has degree n−1.",code:C(`
class Solution:
    def findCenter(self, edges):
        deg = Counter()
        for a, b in edges:
            deg[a] += 1
            deg[b] += 1
        return max(deg, key=deg.get)
`)});
alt(3160,{name:"Replay with sets per colour",tag:"Alternative",time:"O(q)",space:"O(q)",explain:"Keep a set of balls for every colour and count the non-empty ones.",code:C(`
class Solution:
    def queryResults(self, limit, queries):
        balls = {}
        by_color = defaultdict(set)
        res = []
        for ball, c in queries:
            if ball in balls:
                by_color[balls[ball]].discard(ball)
            balls[ball] = c
            by_color[c].add(ball)
            res.append(sum(1 for s in by_color.values() if s))
        return res
`)});
alt(2579,{name:"Add the layers",tag:"Alternative",time:"O(n)",space:"O(1)",explain:"Layer k adds 4(k − 1) cells.",code:C(`
class Solution:
    def coloredCells(self, n):
        return 1 + sum(4 * k for k in range(1, n))
`)});
alt(3453,{name:"Sweep over breakpoints",tag:"Alternative",time:"O(n log n)",space:"O(n)",explain:"Between consecutive square edges the area grows linearly with the covered width; solve exactly in the right segment.",code:C(`
class Solution:
    def separateSquares(self, squares):
        total = sum(l * l for _, _, l in squares)
        events = []
        for _, y, l in squares:
            events.append((y, l))
            events.append((y + l, -l))
        events.sort()
        area = 0.0
        width = 0
        prev = events[0][0]
        for y, dw in events:
            gain = width * (y - prev)
            if width > 0 and (area + gain) * 2 >= total:
                return round(prev + (total / 2 - area) / width, 5)
            area += gain
            width += dw
            prev = y
        return round(prev, 5)
`)});
alt(3396,{name:"Simulate the removals",tag:"Brute force",time:"O(n²)",space:"O(n)",explain:"Remove three elements from the front until the rest is distinct.",code:C(`
class Solution:
    def minimumOperations(self, nums):
        ops = 0
        a = nums[:]
        while len(set(a)) != len(a):
            a = a[3:]
            ops += 1
        return ops
`)});
alt(1399,{name:"Digit sums with arithmetic",tag:"Alternative",time:"O(n log n)",space:"O(log n)",explain:"Compute digit sums with divmod.",code:C(`
class Solution:
    def countLargestGroup(self, n):
        cnt = Counter()
        for x in range(1, n + 1):
            s, y = 0, x
            while y:
                y, d = divmod(y, 10)
                s += d
            cnt[s] += 1
        top = max(cnt.values())
        return list(cnt.values()).count(top)
`)});
alt(2974,{name:"Heap simulation",tag:"Alternative",time:"O(n log n)",space:"O(n)",explain:"Pop two smallest values per round and append Bob's first.",code:C(`
class Solution:
    def numberGame(self, nums):
        heap = nums[:]
        heapify(heap)
        res = []
        while heap:
            a = heappop(heap)
            b = heappop(heap)
            res += [b, a]
        return res
`)});
alt(3310,{name:"BFS for suspicious methods",tag:"Alternative",time:"O(n + e)",space:"O(n + e)",explain:"Breadth-first search from k, then check for outside callers.",code:C(`
class Solution:
    def remainingMethods(self, n, k, invocations):
        g = defaultdict(list)
        for a, b in invocations:
            g[a].append(b)
        sus = {k}
        q = deque([k])
        while q:
            u = q.popleft()
            for v in g[u]:
                if v not in sus:
                    sus.add(v)
                    q.append(v)
        if any(a not in sus and b in sus for a, b in invocations):
            return list(range(n))
        return sorted(set(range(n)) - sus)
`)});
alt(2894,{name:"Closed form",tag:"Alternative",time:"O(1)",space:"O(1)",explain:"total − 2 · (sum of multiples of m).",code:C(`
class Solution:
    def differenceOfSums(self, n, m):
        k = n // m
        return n * (n + 1) // 2 - m * k * (k + 1)
`)});
alt(1684,{name:"Set difference",tag:"Alternative",time:"O(total length)",space:"O(1)",explain:"A word is consistent when it has no letter outside allowed.",code:C(`
class Solution:
    def countConsistentStrings(self, allowed, words):
        return sum(not (set(w) - set(allowed)) for w in words)
`)});
};
