module.exports=({alt})=>{
const C=s=>s.replace(/^\n/,"").replace(/\n$/,"").split("\n");
// ---- Microsoft (2)
alt(2028,{name:"Hand out the extra pips round-robin",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"Start with all 1s and add one pip at a time around the rolls until the missing total is used.",code:C(`
class Solution:
    def missingRolls(self, rolls, mean, n):
        missing = mean * (len(rolls) + n) - sum(rolls)
        if not n <= missing <= 6 * n:
            return []
        res = [1] * n
        for k in range(missing - n):
            res[k % n] += 1
        return sorted(res, reverse=True)
`)});
alt(2098,{name:"Brute force over subsequences",tag:"Brute force",time:"O(C(n, k))",space:"O(k)",explain:"Try every subsequence of size k.",code:C(`
class Solution:
    def largestEvenSum(self, nums, k):
        best = -1
        for c in combinations(nums, k):
            s = sum(c)
            if s % 2 == 0:
                best = max(best, s)
        return best
`)});
alt(2107,{name:"Count flavours inside and outside the window",tag:"Brute force",time:"O(n·k)",space:"O(n)",explain:"For every window count the flavours of the remaining candies directly.",code:C(`
class Solution:
    def shareCandies(self, candies, k):
        n = len(candies)
        if k >= n:
            return 0 if k == n else len(set(candies))
        return max(len(set(candies[:i] + candies[i + k:])) for i in range(n - k + 1))
`)});
alt(2208,{name:"Sorted list, halve the largest",tag:"Alternative",time:"O(n²)",space:"O(n)",explain:"Keep the values sorted and halve the last one.",code:C(`
class Solution:
    def halveArray(self, nums):
        vals = sorted(nums)
        target = sum(nums) / 2
        removed = 0
        ops = 0
        while removed < target:
            x = vals.pop()
            removed += x / 2
            insort(vals, x / 2)
            ops += 1
        return ops
`)});
alt(2391,{name:"Simulate each truck",tag:"Alternative",time:"O(total length)",space:"O(n)",explain:"Walk each truck's route to its last needed house.",code:C(`
class Solution:
    def garbageCollection(self, garbage, travel):
        total = 0
        for kind in 'MPG':
            last = -1
            for i, g in enumerate(garbage):
                total += g.count(kind)
                if kind in g:
                    last = i
            total += sum(travel[:max(last, 0)])
        return total
`)});
alt(2450,{name:"Count by brute force on tiny strings",tag:"Brute force",time:"O(2^n)",space:"O(2^n)",explain:"Apply every subset of flips and count the distinct results.",code:C(`
class Solution:
    def countDistinctStrings(self, s, k):
        starts = len(s) - k + 1
        seen = set()
        for mask in range(1 << starts):
            bits = [int(c) for c in s]
            for st in range(starts):
                if mask >> st & 1:
                    for j in range(st, st + k):
                        bits[j] ^= 1
            seen.add(tuple(bits))
        return len(seen) % (10**9 + 7)
`)});
alt(2599,{name:"Brute force over choices",tag:"Brute force",time:"exponential",space:"O(n)",explain:"Try moving each subset of negative numbers to the end and keep the smallest valid count.",code:C(`
class Solution:
    def makePrefSumNonNegative(self, nums):
        n = len(nums)
        best = n
        for mask in range(1 << n):
            moved = [nums[i] for i in range(n) if mask >> i & 1]
            kept = [nums[i] for i in range(n) if not mask >> i & 1]
            arr = kept + moved
            total = 0
            ok = True
            for x in arr:
                total += x
                if total < 0:
                    ok = False
                    break
            if ok:
                best = min(best, len(moved))
        return best
`)});
alt(2548,{name:"Greedy with fractions",tag:"Alternative",time:"O(n log n)",space:"O(n)",explain:"Use Fraction for an exact fractional knapsack and round at the end.",code:C(`
from fractions import Fraction

class Solution:
    def maxPrice(self, items, capacity):
        if sum(w for _, w in items) < capacity:
            return -1
        total = Fraction(0)
        left = Fraction(capacity)
        for price, weight in sorted(items, key=lambda it: Fraction(it[0], it[1]), reverse=True):
            take = min(Fraction(weight), left)
            total += Fraction(price) * take / weight
            left -= take
            if left == 0:
                break
        return round(float(total), 5)
`)});
alt(2847,{name:"Search numbers upwards",tag:"Brute force",time:"O(answer)",space:"O(1)",explain:"Try 1, 2, 3, … until the digit product equals n (small n).",code:C(`
class Solution:
    def smallestNumber(self, n):
        for x in range(1, 10**6):
            p = 1
            for d in str(x):
                p *= int(d)
            if p == n:
                return str(x)
        return "-1"
`)});
alt(3002,{name:"Greedy removals",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"Keep unique values first, count what has to be removed.",code:C(`
class Solution:
    def maximumSetSize(self, nums1, nums2):
        n = len(nums1)
        only1 = set(nums1) - set(nums2)
        only2 = set(nums2) - set(nums1)
        common = set(nums1) & set(nums2)
        keep1 = min(len(only1), n // 2)
        keep2 = min(len(only2), n // 2)
        room = (n // 2 - keep1) + (n // 2 - keep2)
        return keep1 + keep2 + min(len(common), room)
`)});
alt(3004,{name:"Recursive DFS (Depth-First Search)",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"Return (size, monochrome?) from the recursion.",code:C(`
class Solution:
    def maximumSubtreeSize(self, edges, colors):
        n = len(colors)
        adj = defaultdict(list)
        for a, b in edges:
            adj[a].append(b)
            adj[b].append(a)
        best = 1
        def dfs(u, parent):
            nonlocal best
            size, same = 1, True
            for v in adj[u]:
                if v != parent:
                    s, ok = dfs(v, u)
                    size += s
                    if not ok or colors[v] != colors[u]:
                        same = False
            if same:
                best = max(best, size)
            return size, same
        dfs(0, -1)
        return best
`)});
alt(3009,{name:"Test every level",tag:"Brute force",time:"O(n²)",space:"O(n)",explain:"For each doubled level count the vertices and segment interiors it meets.",code:C(`
class Solution:
    def maxIntersectionCount(self, y):
        best = 0
        levels = {2 * v + d for v in y for d in (-1, 0, 1)}
        for L in levels:
            c = 0
            for i in range(len(y) - 1):
                a, b = 2 * y[i], 2 * y[i + 1]
                if min(a, b) <= L <= max(a, b):
                    c += 1
            for i in range(1, len(y) - 1):
                if 2 * y[i] == L:
                    c -= 1
            best = max(best, c)
        return best
`)});
alt(3038,{name:"Pair up with zip",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"Zip the even and odd positions.",code:C(`
class Solution:
    def maxOperations(self, nums):
        score = nums[0] + nums[1]
        count = 0
        for a, b in zip(nums[0::2], nums[1::2]):
            if a + b != score:
                break
            count += 1
        return count
`)});
alt(3134,{name:"List the uniqueness array",tag:"Brute force",time:"O(n³)",space:"O(n²)",explain:"Compute the distinct count of every subarray and read the median.",code:C(`
class Solution:
    def medianOfUniquenessArray(self, nums):
        vals = sorted(len(set(nums[i:j])) for i in range(len(nums)) for j in range(i + 1, len(nums) + 1))
        return vals[(len(vals) - 1) // 2]
`)});
alt(3111,{name:"Sweep with a pointer",tag:"Alternative",time:"O(n log n)",space:"O(n)",explain:"Jump to the first x beyond the current rectangle with binary search.",code:C(`
class Solution:
    def minRectanglesToCoverPoints(self, points, w):
        xs = sorted(x for x, _ in points)
        i = count = 0
        while i < len(xs):
            count += 1
            i = bisect_right(xs, xs[i] + w)
        return count
`)});
alt(3157,{name:"DFS (Depth-First Search) collecting level sums",tag:"Alternative",time:"O(n)",space:"O(h)",explain:"Recurse with the depth and add into an array.",code:C(`
class Solution:
    def minimumLevel(self, root):
        sums = []
        def go(node, depth):
            if not node:
                return
            if depth == len(sums):
                sums.append(0)
            sums[depth] += node.val
            go(node.left, depth + 1)
            go(node.right, depth + 1)
        go(root, 0)
        return sums.index(min(sums)) + 1
`)});
alt(3212,{name:"Brute force over bottom-right corners",tag:"Brute force",time:"O(m²·n²)",space:"O(1)",explain:"Count X and Y in each prefix rectangle directly.",code:C(`
class Solution:
    def numberOfSubmatrices(self, grid):
        m, n = len(grid), len(grid[0])
        res = 0
        for i in range(m):
            for j in range(n):
                x = y = 0
                for a in range(i + 1):
                    for b in range(j + 1):
                        x += grid[a][b] == 'X'
                        y += grid[a][b] == 'Y'
                if x == y and x > 0:
                    res += 1
        return res
`)});
alt(3728,{name:"Brute force over subarrays",tag:"Brute force",time:"O(n³)",space:"O(1)",explain:"Check each subarray's interior sum.",code:C(`
class Solution:
    def countStableSubarrays(self, capacity):
        n = len(capacity)
        count = 0
        for l in range(n):
            for r in range(l + 2, n):
                if capacity[l] == capacity[r] == sum(capacity[l + 1:r]):
                    count += 1
        return count
`)});
alt(1716,{name:"Closed form per week",tag:"Alternative",time:"O(1)",space:"O(1)",explain:"Sum full weeks arithmetically, then the partial week.",code:C(`
class Solution:
    def totalMoney(self, n):
        weeks, days = divmod(n, 7)
        total = 28 * weeks + 7 * weeks * (weeks - 1) // 2
        total += days * (days + 1) // 2 + days * weeks
        return total
`)});
alt(1317,{name:"Check with arithmetic digits",tag:"Alternative",time:"O(n log n)",space:"O(1)",explain:"Test for a zero digit with divmod.",code:C(`
class Solution:
    def getNoZeroIntegers(self, n):
        def clean(x):
            while x:
                x, d = divmod(x, 10)
                if d == 0:
                    return False
            return True
        for a in range(1, n):
            if clean(a) and clean(n - a):
                return [a, n - a]
`)});
alt(3754,{name:"Digit by digit",tag:"Alternative",time:"O(log n)",space:"O(1)",explain:"Rebuild the number with arithmetic.",code:C(`
class Solution:
    def sumAndMultiply(self, n):
        digits = []
        while n:
            n, d = divmod(n, 10)
            if d:
                digits.append(d)
        x = 0
        for d in reversed(digits):
            x = x * 10 + d
        return x * sum(digits)
`)});
alt(2054,{name:"Suffix maximum + binary search",tag:"Alternative",time:"O(n log n)",space:"O(n)",explain:"For each event find the first later event starting after its end.",code:C(`
class Solution:
    def maxTwoEvents(self, events):
        events.sort()
        starts = [e[0] for e in events]
        suffix = [0] * (len(events) + 1)
        for i in range(len(events) - 1, -1, -1):
            suffix[i] = max(suffix[i + 1], events[i][2])
        best = 0
        for s, e, v in events:
            j = bisect_right(starts, e)
            best = max(best, v + suffix[j])
        return best
`)});
alt(449,{name:"Level-order with null markers",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"Serialize breadth-first with '#' for missing children.",code:C(`
class Codec:
    def serialize(self, root):
        out = []
        q = deque([root])
        while q:
            node = q.popleft()
            if node is None:
                out.append('#')
            else:
                out.append(str(node.val))
                q.append(node.left)
                q.append(node.right)
        return ','.join(out)

    def deserialize(self, data):
        parts = data.split(',')
        if parts[0] == '#':
            return None
        root = TreeNode(int(parts[0]))
        q = deque([root])
        i = 1
        while q:
            node = q.popleft()
            if parts[i] != '#':
                node.left = TreeNode(int(parts[i]))
                q.append(node.left)
            i += 1
            if parts[i] != '#':
                node.right = TreeNode(int(parts[i]))
                q.append(node.right)
            i += 1
        return root
`)});
alt(372,{name:"Python big integers",tag:"Alternative",time:"O(len(b))",space:"O(len(b))",explain:"Join the digits into one number and use pow with a modulus.",code:C(`
class Solution:
    def superPow(self, a, b):
        return pow(a, int(''.join(map(str, b))), 1337)
`)});
alt(2487,{name:"Reverse, filter, reverse",tag:"Alternative",time:"O(n)",space:"O(1)",explain:"Reverse the list, keep nodes not smaller than the running max, reverse again.",code:C(`
class Solution:
    def removeNodes(self, head):
        def reverse(h):
            prev = None
            while h:
                h.next, prev, h = prev, h, h.next
            return prev
        head = reverse(head)
        cur = head
        while cur.next:
            if cur.next.val < cur.val:
                cur.next = cur.next.next
            else:
                cur = cur.next
        return reverse(head)
`)});
alt(3442,{name:"Sorted counts",tag:"Alternative",time:"O(n)",space:"O(1)",explain:"Sort the frequencies, then pick from each parity.",code:C(`
class Solution:
    def maxDifference(self, s):
        counts = sorted(Counter(s).values())
        odd = [c for c in counts if c % 2]
        even = [c for c in counts if c % 2 == 0]
        return odd[-1] - even[0]
`)});
alt(1356,{name:"Counting bits by hand",tag:"Alternative",time:"O(n log n)",space:"O(n)",explain:"Count the set bits with a small helper.",code:C(`
class Solution:
    def sortByBits(self, arr):
        def bits(x):
            c = 0
            while x:
                x &= x - 1
                c += 1
            return c
        return sorted(arr, key=lambda x: (bits(x), x))
`)});
alt(728,{name:"Digit loop with divmod",tag:"Alternative",time:"O((right − left) log right)",space:"O(1)",explain:"Check each digit arithmetically.",code:C(`
class Solution:
    def selfDividingNumbers(self, left, right):
        res = []
        for x in range(left, right + 1):
            y = x
            ok = True
            while y:
                y, d = divmod(y, 10)
                if d == 0 or x % d:
                    ok = False
                    break
            if ok:
                res.append(x)
        return res
`)});
alt(2029,{name:"Minimax over the stone counts",tag:"Brute force",time:"O(c0·c1·c2)",space:"O(c0·c1·c2)",explain:"Play the game out recursively on (stones left of each remainder, running sum mod 3, whose turn).",code:C(`
class Solution:
    def stoneGameIX(self, stones):
        counts = [0, 0, 0]
        for s in stones:
            counts[s % 3] += 1
        @lru_cache(None)
        def alice_wins(c0, c1, c2, total, alice_turn):
            if c0 + c1 + c2 == 0:
                return False
            results = []
            for r, c in enumerate((c0, c1, c2)):
                if c == 0:
                    continue
                nt = (total + r) % 3
                if nt == 0:
                    results.append(not alice_turn)
                else:
                    results.append(alice_wins(c0 - (r == 0), c1 - (r == 1), c2 - (r == 2), nt, not alice_turn))
            return any(results) if alice_turn else all(results)
        return alice_wins(counts[0], counts[1], counts[2], 0, True)
`)});
alt(3883,{name:"Brute force over arrays",tag:"Brute force",time:"exponential",space:"O(n)",explain:"Recursively count arrays position by position.",code:C(`
class Solution:
    def countArrays(self, digitSum):
        MOD = 10**9 + 7
        by = defaultdict(list)
        for x in range(5001):
            by[sum(map(int, str(x)))].append(x)
        lists = [by.get(d, []) for d in digitSum]
        @lru_cache(None)
        def go(i, last):
            if i == len(digitSum):
                return 1
            return sum(go(i + 1, v) for v in lists[i] if v >= last)
        return go(0, 0) % MOD
`)});
alt(1884,{name:"DP over floors",tag:"Brute force",time:"O(n²)",space:"O(n)",explain:"dp[f] = fewest drops for f floors, choosing the first floor to drop from.",code:C(`
class Solution:
    def twoEggDrop(self, n):
        dp = [0] * (n + 1)
        for f in range(1, n + 1):
            dp[f] = min(1 + max(x - 1, dp[f - x]) for x in range(1, f + 1))
        return dp[n]
`)});
alt(2616,{name:"Pair by sorted gaps (DP)",tag:"Alternative",time:"O(n log V)",space:"O(n)",explain:"Binary search with a DP (Dynamic Programming) that counts the maximum number of valid pairs.",code:C(`
class Solution:
    def minimizeMax(self, nums, p):
        nums = sorted(nums)
        n = len(nums)
        def pairs(d):
            dp = [0] * (n + 1)
            for i in range(2, n + 1):
                dp[i] = dp[i - 1]
                if nums[i - 1] - nums[i - 2] <= d:
                    dp[i] = max(dp[i], dp[i - 2] + 1)
            return dp[n]
        lo, hi = 0, nums[-1] - nums[0]
        while lo < hi:
            mid = (lo + hi) // 2
            if pairs(mid) >= p:
                hi = mid
            else:
                lo = mid + 1
        return lo
`)});
alt(3121,{name:"Check each letter over the string",tag:"Brute force",time:"O(26·n)",space:"O(1)",explain:"For each letter compare its last lower-case and first upper-case index with find / rfind.",code:C(`
class Solution:
    def numberOfSpecialChars(self, word):
        count = 0
        for c in 'abcdefghijklmnopqrstuvwxyz':
            lo, up = word.rfind(c), word.find(c.upper())
            if lo != -1 and up != -1 and lo < up:
                count += 1
        return count
`)});
alt(2182,{name:"Max-heap",tag:"Alternative",time:"O(n log 26)",space:"O(26)",explain:"Pop the largest letter from a heap, push it back when counts remain.",code:C(`
class Solution:
    def repeatLimitedString(self, s, repeatLimit):
        heap = [(-ord(c), n) for c, n in Counter(s).items()]
        heapify(heap)
        out = []
        while heap:
            neg, n = heappop(heap)
            ch = chr(-neg)
            take = min(n, repeatLimit)
            out.append(ch * take)
            n -= take
            if n:
                if not heap:
                    break
                neg2, n2 = heappop(heap)
                out.append(chr(-neg2))
                if n2 > 1:
                    heappush(heap, (neg2, n2 - 1))
                heappush(heap, (neg, n))
        return ''.join(out)
`)});
alt(3243,{name:"DP over the forward-only graph",tag:"Alternative",time:"O(q·(n + q))",space:"O(n + q)",explain:"Roads only go forward, so compute distances in index order.",code:C(`
class Solution:
    def shortestDistanceAfterQueries(self, n, queries):
        incoming = defaultdict(list)
        for i in range(1, n):
            incoming[i].append(i - 1)
        res = []
        for u, v in queries:
            incoming[v].append(u)
            dist = [0] * n
            for i in range(1, n):
                dist[i] = min(dist[j] for j in incoming[i]) + 1
            res.append(dist[n - 1])
        return res
`)});
alt(2017,{name:"Compute both sums for each split",tag:"Brute force",time:"O(n²)",space:"O(1)",explain:"Directly sum the suffix and prefix for every column.",code:C(`
class Solution:
    def gridGame(self, grid):
        n = len(grid[0])
        return min(max(sum(grid[0][i + 1:]), sum(grid[1][:i])) for i in range(n))
`)});
alt(2594,{name:"Linear search on time",tag:"Brute force",time:"O(answer·n)",space:"O(1)",explain:"Try t = 1, 2, … until enough cars are repaired.",code:C(`
class Solution:
    def repairCars(self, ranks, cars):
        t = 1
        while True:
            if sum(int((t // r) ** 0.5 + 1e-9) for r in ranks) >= cars:
                return t
            t += 1
`)});
alt(1859,{name:"Place words in an array",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"Write each word to the slot given by its number.",code:C(`
class Solution:
    def sortSentence(self, s):
        words = s.split()
        out = [''] * len(words)
        for w in words:
            out[int(w[-1]) - 1] = w[:-1]
        return ' '.join(out)
`)});
alt(538,{name:"Recursive reverse in-order",tag:"Alternative",time:"O(n)",space:"O(h)",explain:"Recurse right, node, left with a running total.",code:C(`
class Solution:
    def convertBST(self, root):
        total = 0
        def go(node):
            nonlocal total
            if not node:
                return
            go(node.right)
            total += node.val
            node.val = total
            go(node.left)
        go(root)
        return root
`)});
alt(313,{name:"Min-heap of products",tag:"Alternative",time:"O(n·k log k)",space:"O(n + k)",explain:"Pop the smallest, push its multiples by all primes, skip duplicates.",code:C(`
class Solution:
    def nthSuperUglyNumber(self, n, primes):
        seen = {1}
        heap = [1]
        x = 1
        for _ in range(n):
            x = heappop(heap)
            for p in primes:
                if x * p not in seen:
                    seen.add(x * p)
                    heappush(heap, x * p)
        return x
`)});
alt(1186,{name:"Prefix and suffix Kadane",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"Best sum ending at i and starting at i, joined across one deleted element.",code:C(`
class Solution:
    def maximumSum(self, arr):
        n = len(arr)
        left = arr[:]
        right = arr[:]
        for i in range(1, n):
            left[i] = max(left[i - 1] + arr[i], arr[i])
        for i in range(n - 2, -1, -1):
            right[i] = max(right[i + 1] + arr[i], arr[i])
        best = max(left)
        for i in range(1, n - 1):
            best = max(best, left[i - 1] + right[i + 1])
        return best
`)});
alt(3370,{name:"Bit length",tag:"Alternative",time:"O(1)",space:"O(1)",explain:"The result is 2^(bit length of n) − 1 unless n already is such a number.",code:C(`
class Solution:
    def smallestNumber(self, n):
        return (1 << n.bit_length()) - 1
`)});
alt(757,{name:"Brute force over points",tag:"Brute force",time:"O(n·range)",space:"O(range)",explain:"Add points one at a time as late as possible in each interval until all have two.",code:C(`
class Solution:
    def intersectionSizeTwo(self, intervals):
        chosen = []
        for s, e in sorted(intervals, key=lambda iv: (iv[1], -iv[0])):
            have = sum(1 for p in chosen if s <= p <= e)
            p = e
            while have < 2:
                while p in chosen:
                    p -= 1
                chosen.append(p)
                have += 1
        return len(chosen)
`)});
alt(1463,{name:"Memoised recursion",tag:"Alternative",time:"O(m·n²·9)",space:"O(m·n²)",explain:"Top-down version of the same state.",code:C(`
class Solution:
    def cherryPickup(self, grid):
        m, n = len(grid), len(grid[0])
        @lru_cache(None)
        def go(r, a, b):
            if r == m:
                return 0
            gain = grid[r][a] + (grid[r][b] if a != b else 0)
            best = 0
            for x in (a - 1, a, a + 1):
                for y in (b - 1, b, b + 1):
                    if 0 <= x < n and 0 <= y < n:
                        best = max(best, go(r + 1, x, y))
            return gain + best
        return go(0, 0, n - 1)
`)});
alt(3075,{name:"Simulate the turns",tag:"Brute force",time:"O(n·k)",space:"O(n)",explain:"Reduce everyone's happiness after each pick.",code:C(`
class Solution:
    def maximumHappinessSum(self, happiness, k):
        vals = sorted(happiness, reverse=True)
        total = 0
        for turn in range(k):
            total += max(0, vals[turn] - turn)
        return total
`)});
alt(3315,{name:"Lowest zero bit formula",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"For odd x find the lowest 0 bit p; the answer is x with bit p − 1 cleared.",code:C(`
class Solution:
    def minBitwiseArray(self, nums):
        res = []
        for x in nums:
            if x % 2 == 0:
                res.append(-1)
            else:
                lowest_zero = (~x) & (x + 1)
                res.append(x ^ (lowest_zero >> 1))
        return res
`)});
alt(1776,{name:"Brute force over later cars",tag:"Brute force",time:"O(n²)",space:"O(n)",explain:"For each car find the earliest collision considering that cars ahead may merge first.",code:C(`
class Solution:
    def getCollisionTimes(self, cars):
        n = len(cars)
        res = [-1.0] * n
        for i in range(n - 1, -1, -1):
            pos, speed = cars[i]
            best = None
            for j in range(i + 1, n):
                pj, sj = cars[j]
                if speed <= sj:
                    continue
                t = (pj - pos) / (speed - sj)
                if res[j] != -1 and t > res[j]:
                    continue
                if best is None or t < best:
                    best = t
            if best is not None:
                res[i] = best
        return res
`)});
alt(3814,{name:"Check every pair",tag:"Brute force",time:"O(n²)",space:"O(1)",explain:"Try all single machines and all pairs.",code:C(`
class Solution:
    def maxCapacity(self, costs, capacity, budget):
        n = len(costs)
        best = 0
        for i in range(n):
            if costs[i] < budget:
                best = max(best, capacity[i])
            for j in range(i + 1, n):
                if costs[i] + costs[j] < budget:
                    best = max(best, capacity[i] + capacity[j])
        return best
`)});
alt(1000,{name:"Memoised recursion with a pile count",tag:"Alternative",time:"O(n³·k)",space:"O(n²·k)",explain:"dp(i, j, p) = cost to turn stones i…j into p piles.",code:C(`
class Solution:
    def mergeStones(self, stones, k):
        n = len(stones)
        if (n - 1) % (k - 1):
            return -1
        pref = [0]
        for s in stones:
            pref.append(pref[-1] + s)
        INF = float('inf')
        @lru_cache(None)
        def go(i, j, p):
            if i == j:
                return 0 if p == 1 else INF
            if p == 1:
                cost = go(i, j, k)
                return cost + pref[j + 1] - pref[i] if cost < INF else INF
            return min(go(i, m, 1) + go(m + 1, j, p - 1) for m in range(i, j))
        return go(0, n - 1, 1)
`)});
alt(1594,{name:"DFS over all paths",tag:"Brute force",time:"O(2^(m+n))",space:"O(m+n)",explain:"Enumerate every path and keep the best non-negative product.",code:C(`
class Solution:
    def maxProductPath(self, grid):
        m, n = len(grid), len(grid[0])
        best = [-1]
        def go(i, j, prod):
            prod *= grid[i][j]
            if i == m - 1 and j == n - 1:
                best[0] = max(best[0], prod)
                return
            if i + 1 < m:
                go(i + 1, j, prod)
            if j + 1 < n:
                go(i, j + 1, prod)
        go(0, 0, 1)
        return best[0] % (10**9 + 7) if best[0] >= 0 else -1
`)});
alt(462,{name:"Pair up the extremes",tag:"Alternative",time:"O(n log n)",space:"O(1)",explain:"Each pair (smallest, largest) needs largest − smallest moves.",code:C(`
class Solution:
    def minMoves2(self, nums):
        nums.sort()
        i, j = 0, len(nums) - 1
        total = 0
        while i < j:
            total += nums[j] - nums[i]
            i += 1
            j -= 1
        return total
`)});
alt(1007,{name:"Count occurrences",tag:"Alternative",time:"O(n)",space:"O(1)",explain:"A value works if tops and bottoms together cover every domino.",code:C(`
class Solution:
    def minDominoRotations(self, tops, bottoms):
        n = len(tops)
        for v in (tops[0], bottoms[0]):
            if all(t == v or b == v for t, b in zip(tops, bottoms)):
                top_only = sum(1 for t, b in zip(tops, bottoms) if t != v)
                bottom_only = sum(1 for t, b in zip(tops, bottoms) if b != v)
                return min(top_only, bottom_only)
        return -1
`)});
alt(1035,{name:"Memoised recursion",tag:"Alternative",time:"O(n·m)",space:"O(n·m)",explain:"Top-down LCS (Longest Common Subsequence).",code:C(`
class Solution:
    def maxUncrossedLines(self, nums1, nums2):
        @lru_cache(None)
        def go(i, j):
            if i == len(nums1) or j == len(nums2):
                return 0
            if nums1[i] == nums2[j]:
                return 1 + go(i + 1, j + 1)
            return max(go(i + 1, j), go(i, j + 1))
        return go(0, 0)
`)});
alt(1404,{name:"Convert to an integer and simulate",tag:"Brute force",time:"O(n)",space:"O(n)",explain:"Use Python integers directly.",code:C(`
class Solution:
    def numSteps(self, s):
        x = int(s, 2)
        steps = 0
        while x != 1:
            x = x // 2 if x % 2 == 0 else x + 1
            steps += 1
        return steps
`)});
};
