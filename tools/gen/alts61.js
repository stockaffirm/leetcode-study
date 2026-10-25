module.exports=({alt})=>{
const C=s=>s.replace(/^\n/,"").replace(/\n$/,"").split("\n");
// ---- TikTok
alt(1405,{name:"Sort the three piles every step",tag:"Alternative",time:"O(n)",space:"O(1)",explain:"Same greedy without a heap: sort the (count, letter) piles each step.",code:C(`
class Solution:
    def longestDiverseString(self, a, b, c):
        cnt = {'a': a, 'b': b, 'c': c}
        res = []
        while True:
            order = sorted((ch for ch in cnt if cnt[ch] > 0), key=lambda ch: (-cnt[ch], ch))
            for ch in order:
                if len(res) >= 2 and res[-1] == res[-2] == ch:
                    continue
                res.append(ch)
                cnt[ch] -= 1
                break
            else:
                return ''.join(res)
`)});
alt(3389,{name:"Full carry range DP",tag:"Brute force",time:"O(n·26·n)",space:"O(n)",explain:"Same idea but try every possible carry (any number of excess copies moved to the next letter).",code:C(`
class Solution:
    def makeStringGood(self, s):
        cnt = Counter(s)
        c = [cnt.get(chr(97 + i), 0) for i in range(26)]
        n = len(s)
        best = n
        for f in range(1, n + 1):
            dp = {0: 0}
            for i in range(26):
                new = {}
                for x, cost in dp.items():
                    t = c[i] + x
                    for fin in (0, f):
                        if t >= fin:
                            ex = t - fin
                            for carry in range(ex + 1):
                                if i == 25 and carry:
                                    continue
                                if cost + ex < new.get(carry, 10**9):
                                    new[carry] = cost + ex
                        elif cost + fin - t < new.get(0, 10**9):
                            new[0] = cost + fin - t
                dp = new
            best = min(best, dp.get(0, 10**9))
        return best
`)});
alt(3441,{name:"Brute force over all captions",tag:"Brute force",time:"O(kⁿ)",space:"O(n)",explain:"Only for very short captions: try every string over the letters between the smallest and largest letter of the caption and keep the cheapest, smallest good one.",code:C(`
class Solution:
    def minCostGoodCaption(self, caption):
        n = len(caption)
        if n < 3:
            return ""
        letters = [chr(c) for c in range(ord(min(caption)), ord(max(caption)) + 1)]
        best = (float('inf'), "")
        for t in product(letters, repeat=n):
            s = ''.join(t)
            if all(len(list(g)) >= 3 for _, g in groupby(s)):
                cost = sum(abs(ord(x) - ord(y)) for x, y in zip(s, caption))
                best = min(best, (cost, s))
        return best[1]
`)});
alt(3474,{name:"Try every word over a, b, c",tag:"Brute force",time:"O(3^(n+m))",space:"O(n+m)",explain:"For tiny inputs enumerate all strings over {a, b, c} in order and return the first that satisfies every T/F condition.",code:C(`
class Solution:
    def generateString(self, str1, str2):
        n, m = len(str1), len(str2)
        for t in product('abc', repeat=n + m - 1):
            w = ''.join(t)
            if all((w[i:i + m] == str2) == (str1[i] == 'T') for i in range(n)):
                return w
        return ""
`)});
alt(2145,{name:"Count the starting values directly",tag:"Brute force",time:"O(n·range)",space:"O(1)",explain:"Try every starting value in [lower, upper] and check the whole sequence stays in range.",code:C(`
class Solution:
    def numberOfArrays(self, differences, lower, upper):
        count = 0
        for x in range(lower, upper + 1):
            cur = x
            ok = True
            for d in differences:
                cur += d
                if not lower <= cur <= upper:
                    ok = False
                    break
            count += ok
        return count
`)});
alt(2456,{name:"Group videos per creator",tag:"Alternative",time:"O(n log n)",space:"O(n)",explain:"Collect all videos per creator, sort them, and read off the total and best id.",code:C(`
class Solution:
    def mostPopularCreator(self, creators, ids, views):
        vids = defaultdict(list)
        for c, i, v in zip(creators, ids, views):
            vids[c].append((-v, i))
        total = {c: -sum(v for v, _ in lst) for c, lst in vids.items()}
        top = min(total.values())
        return sorted([c, min(vids[c])[1]] for c in vids if total[c] == top)
`)});
alt(2523,{name:"Trial division",tag:"Brute force",time:"O((R-L)·√R)",space:"O(1)",explain:"Test each number for primality directly.",code:C(`
class Solution:
    def closestPrimes(self, left, right):
        def is_prime(x):
            if x < 2:
                return False
            d = 2
            while d * d <= x:
                if x % d == 0:
                    return False
                d += 1
            return True
        primes = [x for x in range(left, right + 1) if is_prime(x)]
        best = [-1, -1]
        gap = float('inf')
        for a, b in zip(primes, primes[1:]):
            if b - a < gap:
                gap = b - a
                best = [a, b]
        return best
`)});
alt(2640,{name:"Two passes",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"First build the conversion array with accumulate(max), then prefix-sum it.",code:C(`
class Solution:
    def findPrefixScore(self, nums):
        conv = [x + m for x, m in zip(nums, accumulate(nums, max))]
        return list(accumulate(conv))
`)});
alt(2799,{name:"Check every subarray",tag:"Brute force",time:"O(n²)",space:"O(n)",explain:"Extend each start and stop counting once all distinct values were seen.",code:C(`
class Solution:
    def countCompleteSubarrays(self, nums):
        total = len(set(nums))
        res = 0
        for i in range(len(nums)):
            seen = set()
            for j in range(i, len(nums)):
                seen.add(nums[j])
                if len(seen) == total:
                    res += len(nums) - j
                    break
        return res
`)});
alt(3086,{name:"Try every Alice index with sorted distances",tag:"Alternative",time:"O(n log n)",space:"O(n)",explain:"For each index compute the cost of the k cheapest sources: own one free, neighbours 1, other ones by distance, created ones 2 each, using maxChanges and taking the cheapest mix.",code:C(`
class Solution:
    def minimumMoves(self, nums, k, maxChanges):
        n = len(nums)
        best = float('inf')
        for i in range(n):
            costs = []
            for j, v in enumerate(nums):
                if v:
                    costs.append(abs(i - j))
            costs.sort()
            costs += [2] * maxChanges
            costs.sort()
            # a created one needs a free neighbour cell different from i
            if len(costs) >= k:
                best = min(best, sum(costs[:k]))
        return best
`)});
alt(1860,{name:"Closed-form step then simulate",tag:"Alternative",time:"O(√m)",space:"O(1)",explain:"Same simulation with the larger stick chosen by comparing explicitly.",code:C(`
class Solution:
    def memLeak(self, memory1, memory2):
        i = 1
        while True:
            if memory1 >= memory2 and memory1 >= i:
                memory1 -= i
            elif memory2 > memory1 and memory2 >= i:
                memory2 -= i
            else:
                return [i, memory1, memory2]
            i += 1
`)});
alt(887,{name:"Dynamic programming on floors",tag:"Brute force",time:"O(k·n²)",space:"O(k·n)",explain:"dp[e][f] = fewest drops to settle f floors with e eggs: try each floor x, worst of (breaks → below, survives → above).",code:C(`
class Solution:
    def superEggDrop(self, k, n):
        @lru_cache(None)
        def go(e, f):
            if f == 0:
                return 0
            if e == 1:
                return f
            return 1 + min(max(go(e - 1, x - 1), go(e, f - x)) for x in range(1, f + 1))
        return go(k, n)
`)});
alt(902,{name:"Digit DP with a tight flag",tag:"Alternative",time:"O(len·d)",space:"O(len)",explain:"count(pos, tight): numbers of the remaining length built from the digit set while staying ≤ N.",code:C(`
class Solution:
    def atMostNGivenDigitSet(self, digits, n):
        s = str(n)
        @lru_cache(None)
        def go(pos, tight, started):
            if pos == len(s):
                return 1 if started else 0
            total = 0 if started else go(pos + 1, False, False)
            for d in digits:
                if tight and d > s[pos]:
                    continue
                total += go(pos + 1, tight and d == s[pos], True)
            return total
        return go(0, True, False)
`)});
alt(298,{name:"BFS with run lengths",tag:"Alternative",time:"O(n)",space:"O(w)",explain:"Carry the run length in the queue instead of recursion.",code:C(`
class Solution:
    def longestConsecutive(self, root):
        if not root:
            return 0
        best = 1
        q = deque([(root, 1)])
        while q:
            node, run = q.popleft()
            best = max(best, run)
            for child in (node.left, node.right):
                if child:
                    q.append((child, run + 1 if child.val == node.val + 1 else 1))
        return best
`)});
alt(581,{name:"Scan from both ends",tag:"Optimal",time:"O(n)",space:"O(1)",explain:"The right end is the last position smaller than the running maximum; the left end is the last position larger than the running minimum from the right.",code:C(`
class Solution:
    def findUnsortedSubarray(self, nums):
        n = len(nums)
        end, start = -1, 0
        mx, mn = nums[0], nums[-1]
        for i in range(n):
            mx = max(mx, nums[i])
            if nums[i] < mx:
                end = i
        for i in range(n - 1, -1, -1):
            mn = min(mn, nums[i])
            if nums[i] > mn:
                start = i
        return end - start + 1 if end >= 0 else 0
`)});
alt(395,{name:"Try 1…26 distinct letters with a window",tag:"Alternative",time:"O(26·n)",space:"O(1)",explain:"For each target number of distinct letters slide a window and require every letter in it to appear at least k times.",code:C(`
class Solution:
    def longestSubstring(self, s, k):
        best = 0
        for target in range(1, 27):
            cnt = Counter()
            left = distinct = enough = 0
            for r, ch in enumerate(s):
                cnt[ch] += 1
                if cnt[ch] == 1:
                    distinct += 1
                if cnt[ch] == k:
                    enough += 1
                while distinct > target:
                    c = s[left]
                    if cnt[c] == k:
                        enough -= 1
                    cnt[c] -= 1
                    if cnt[c] == 0:
                        distinct -= 1
                    left += 1
                if distinct == enough == target:
                    best = max(best, r - left + 1)
        return best
`)});
alt(1813,{name:"Compare with deques",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"Pop equal words from the front, then from the back, until the shorter sentence is empty.",code:C(`
class Solution:
    def areSentencesSimilar(self, sentence1, sentence2):
        a, b = deque(sentence1.split()), deque(sentence2.split())
        if len(a) > len(b):
            a, b = b, a
        while a and a[0] == b[0]:
            a.popleft()
            b.popleft()
        while a and a[-1] == b[-1]:
            a.pop()
            b.pop()
        return not a
`)});
alt(2673,{name:"Recursive tree walk",tag:"Alternative",time:"O(n)",space:"O(log n)",explain:"path(i) = best cost from node i to a leaf, adding the gap to the smaller child.",code:C(`
class Solution:
    def minIncrements(self, n, cost):
        ops = 0
        def go(i):
            nonlocal ops
            if 2 * i > n:
                return cost[i - 1]
            l, r = go(2 * i), go(2 * i + 1)
            ops += abs(l - r)
            return cost[i - 1] + max(l, r)
        go(1)
        return ops
`)});
alt(799,{name:"Pour one cup at a time (small poured)",tag:"Brute force",time:"O(poured·rows)",space:"O(rows²)",explain:"Fill the glasses in a triangle and push overflow down repeatedly.",code:C(`
class Solution:
    def champagneTower(self, poured, query_row, query_glass):
        g = [[0.0] * (r + 1) for r in range(query_row + 2)]
        g[0][0] = float(poured)
        for r in range(query_row + 1):
            for c in range(r + 1):
                if g[r][c] > 1:
                    over = (g[r][c] - 1) / 2
                    g[r + 1][c] += over
                    g[r + 1][c + 1] += over
                    g[r][c] = 1.0
        return min(1.0, g[query_row][query_glass])
`)});
alt(1530,{name:"Collect leaf paths and test pairs",tag:"Brute force",time:"O(L²·h)",space:"O(n)",explain:"Record the root path of every leaf; two leaves are close if their paths minus the common prefix are short.",code:C(`
class Solution:
    def countPairs(self, root, distance):
        paths = []
        def dfs(node, path):
            if not node:
                return
            path = path + [node]
            if not node.left and not node.right:
                paths.append(path)
                return
            dfs(node.left, path)
            dfs(node.right, path)
        dfs(root, [])
        res = 0
        for i in range(len(paths)):
            for j in range(i + 1, len(paths)):
                a, b = paths[i], paths[j]
                k = 0
                while k < min(len(a), len(b)) and a[k] is b[k]:
                    k += 1
                if (len(a) - k) + (len(b) - k) <= distance:
                    res += 1
        return res
`)});
alt(616,{name:"Merge intervals of matches",tag:"Alternative",time:"O(n·w·L)",space:"O(n)",explain:"Collect every match as an interval, merge touching ones, and insert the tags.",code:C(`
class Solution:
    def addBoldTag(self, s, words):
        spans = []
        for w in words:
            i = s.find(w)
            while i != -1:
                spans.append((i, i + len(w)))
                i = s.find(w, i + 1)
        spans.sort()
        merged = []
        for a, b in spans:
            if merged and a <= merged[-1][1]:
                merged[-1][1] = max(merged[-1][1], b)
            else:
                merged.append([a, b])
        res = []
        prev = 0
        for a, b in merged:
            res.append(s[prev:a] + '<b>' + s[a:b] + '</b>')
            prev = b
        res.append(s[prev:])
        return ''.join(res)
`)});
alt(1302,{name:"DFS tracking the maximum depth",tag:"Alternative",time:"O(n)",space:"O(h)",explain:"Recurse with the depth; reset the sum when a deeper level is found.",code:C(`
class Solution:
    def deepestLeavesSum(self, root):
        best, total = -1, 0
        def dfs(node, d):
            nonlocal best, total
            if not node:
                return
            if d > best:
                best, total = d, node.val
            elif d == best:
                total += node.val
            dfs(node.left, d + 1)
            dfs(node.right, d + 1)
        dfs(root, 0)
        return total
`)});
alt(99,{name:"Recursive in-order",tag:"Alternative",time:"O(n)",space:"O(h)",explain:"The same detection with a recursive in-order traversal.",code:C(`
class Solution:
    def recoverTree(self, root):
        first = second = prev = None
        def inorder(node):
            nonlocal first, second, prev
            if not node:
                return
            inorder(node.left)
            if prev and prev.val > node.val:
                if not first:
                    first = prev
                second = node
            prev = node
            inorder(node.right)
        inorder(root)
        first.val, second.val = second.val, first.val
`)});
alt(691,{name:"Memoised recursion on the remaining target",tag:"Alternative",time:"exponential (bounded by 2ᵗ)",space:"O(2ᵗ)",explain:"best(target string) = 1 + min over stickers containing the first letter, removing the covered letters.",code:C(`
class Solution:
    def minStickers(self, stickers, target):
        stick = [Counter(s) for s in stickers]
        @lru_cache(None)
        def go(t):
            if not t:
                return 0
            need = Counter(t)
            best = float('inf')
            for st in stick:
                if t[0] not in st:
                    continue
                rest = ''.join(sorted((need - st).elements()))
                best = min(best, 1 + go(rest))
            return best
        r = go(''.join(sorted(target)))
        return r if r < float('inf') else -1
`)});
alt(2850,{name:"BFS over grid states",tag:"Brute force",time:"exponential",space:"O(states)",explain:"Move one stone to a neighbour cell per step until every cell holds one stone.",code:C(`
class Solution:
    def minimumMoves(self, grid):
        start = tuple(tuple(r) for r in grid)
        goal = tuple(tuple(1 for _ in range(3)) for _ in range(3))
        seen = {start}
        q = deque([(start, 0)])
        while q:
            st, d = q.popleft()
            if st == goal:
                return d
            for i in range(3):
                for j in range(3):
                    if st[i][j] > 1:
                        for a, b in ((i + 1, j), (i - 1, j), (i, j + 1), (i, j - 1)):
                            if 0 <= a < 3 and 0 <= b < 3:
                                g = [list(r) for r in st]
                                g[i][j] -= 1
                                g[a][b] += 1
                                ns = tuple(tuple(r) for r in g)
                                if ns not in seen:
                                    seen.add(ns)
                                    q.append((ns, d + 1))
        return -1
`)});
alt(1151,{name:"Prefix sums of ones",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"With prefix counts of ones, the ones inside each window of size w come from two lookups.",code:C(`
class Solution:
    def minSwaps(self, data):
        w = sum(data)
        pre = [0] + list(accumulate(data))
        best = w
        for i in range(len(data) - w + 1):
            best = min(best, w - (pre[i + w] - pre[i]))
        return best if w else 0
`)});
alt(473,{name:"Bitmask DP over sticks",tag:"Alternative",time:"O(2ⁿ·n)",space:"O(2ⁿ)",explain:"dp[mask] = length filled in the current side modulo the target side, or −1 if mask is unreachable.",code:C(`
class Solution:
    def makesquare(self, matchsticks):
        total = sum(matchsticks)
        if total % 4:
            return False
        side = total // 4
        n = len(matchsticks)
        dp = [-1] * (1 << n)
        dp[0] = 0
        for mask in range(1 << n):
            if dp[mask] < 0:
                continue
            for i in range(n):
                if not (mask >> i) & 1 and dp[mask] + matchsticks[i] <= side:
                    nm = mask | 1 << i
                    dp[nm] = (dp[mask] + matchsticks[i]) % side
        return dp[-1] == 0
`)});
alt(962,{name:"Sort indices by value",tag:"Alternative",time:"O(n log n)",space:"O(n)",explain:"Sort indices by value and keep the smallest index seen so far; each later index gives a ramp.",code:C(`
class Solution:
    def maxWidthRamp(self, nums):
        best = 0
        lowest = len(nums)
        for i in sorted(range(len(nums)), key=lambda i: nums[i]):
            best = max(best, i - lowest)
            lowest = min(lowest, i)
        return best
`)});
alt(2931,{name:"Heap of the rightmost items",tag:"Alternative",time:"O(mn log m)",space:"O(m)",explain:"Simulate the days: buy the globally cheapest available item each day with a min-heap over shops.",code:C(`
class Solution:
    def maxSpending(self, values):
        heap = [(row[-1], i, len(row) - 1) for i, row in enumerate(values)]
        heapify(heap)
        day = total = 0
        while heap:
            v, i, j = heappop(heap)
            day += 1
            total += v * day
            if j:
                heappush(heap, (values[i][j - 1], i, j - 1))
        return total
`)});
alt(440,{name:"Sort all numbers as strings (small n)",tag:"Brute force",time:"O(n log n)",space:"O(n)",explain:"Build 1…n, sort as strings, and take the k-th.",code:C(`
class Solution:
    def findKthNumber(self, n, k):
        return int(sorted(map(str, range(1, n + 1)))[k - 1])
`)});
alt(1383,{name:"Try each engineer as the minimum efficiency",tag:"Brute force",time:"O(n²)",space:"O(n)",explain:"For each engineer as the weakest link take the k fastest among those at least as efficient.",code:C(`
class Solution:
    def maxPerformance(self, n, speed, efficiency, k):
        best = 0
        for i in range(n):
            speeds = sorted((speed[j] for j in range(n) if efficiency[j] >= efficiency[i]), reverse=True)
            best = max(best, sum(speeds[:k]) * efficiency[i])
        return best % (10**9 + 7)
`)});
alt(593,{name:"Check by sides and diagonals",tag:"Alternative",time:"O(1)",space:"O(1)",explain:"Use the set of distinct squared distances: a square has exactly two (side², diagonal²) and the larger is twice the smaller.",code:C(`
class Solution:
    def validSquare(self, p1, p2, p3, p4):
        d = [(a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2 for a, b in combinations([p1, p2, p3, p4], 2)]
        s = set(d)
        return len(s) == 2 and 0 not in s and max(s) == 2 * min(s) and d.count(min(s)) == 4
`)});
alt(2945,{name:"Quadratic DP",tag:"Brute force",time:"O(n²)",space:"O(n)",explain:"For each prefix try every previous cut and keep the longest chain with the smallest last sum.",code:C(`
class Solution:
    def findMaximumLength(self, nums):
        n = len(nums)
        pre = [0]
        for x in nums:
            pre.append(pre[-1] + x)
        best = [(0, 0)] + [None] * n
        for i in range(1, n + 1):
            cand = None
            for j in range(i):
                ln, ls = best[j]
                if pre[i] - pre[j] >= ls:
                    c = (ln + 1, pre[i] - pre[j])
                    if cand is None or c[0] > cand[0] or (c[0] == cand[0] and c[1] < cand[1]):
                        cand = c
            best[i] = cand
        return best[n][0]
`)});
alt(280,{name:"Fix pairs by position parity",tag:"Alternative",time:"O(n)",space:"O(1)",explain:"For each neighbouring pair enforce ≤ at even positions and ≥ at odd positions.",code:C(`
class Solution:
    def wiggleSort(self, nums):
        for i in range(len(nums) - 1):
            a, b = nums[i], nums[i + 1]
            if i % 2 == 0 and a > b:
                nums[i], nums[i + 1] = b, a
            elif i % 2 == 1 and a < b:
                nums[i], nums[i + 1] = b, a
        return nums
`)});
alt(1827,{name:"Use max with the next required value",tag:"Alternative",time:"O(n)",space:"O(1)",explain:"The next element must be at least previous + 1; add the shortfall.",code:C(`
class Solution:
    def minOperations(self, nums):
        ops = 0
        need = nums[0] + 1
        for x in nums[1:]:
            ops += max(0, need - x)
            need = max(x, need) + 1
        return ops
`)});
alt(1162,{name:"Dynamic programming in two sweeps",tag:"Alternative",time:"O(n²)",space:"O(n²)",explain:"Distance to land from the top-left, then from the bottom-right.",code:C(`
class Solution:
    def maxDistance(self, grid):
        n = len(grid)
        INF = 10**9
        d = [[0 if grid[i][j] else INF for j in range(n)] for i in range(n)]
        for i in range(n):
            for j in range(n):
                if i:
                    d[i][j] = min(d[i][j], d[i - 1][j] + 1)
                if j:
                    d[i][j] = min(d[i][j], d[i][j - 1] + 1)
        for i in range(n - 1, -1, -1):
            for j in range(n - 1, -1, -1):
                if i < n - 1:
                    d[i][j] = min(d[i][j], d[i + 1][j] + 1)
                if j < n - 1:
                    d[i][j] = min(d[i][j], d[i][j + 1] + 1)
        best = max(max(r) for r in d)
        return best if 0 < best < INF else -1
`)});
alt(1029,{name:"Sort by cost of A minus cost of B (index form)",tag:"Alternative",time:"O(n log n)",space:"O(n)",explain:"Sort the indices by the saving of choosing A and assign the best half to A.",code:C(`
class Solution:
    def twoCitySchedCost(self, costs):
        order = sorted(range(len(costs)), key=lambda i: costs[i][0] - costs[i][1])
        half = len(costs) // 2
        return sum(costs[i][0] for i in order[:half]) + sum(costs[i][1] for i in order[half:])
`)});
alt(1345,{name:"Bidirectional BFS",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"Search from the start and from the goal alternately, meeting in the middle.",code:C(`
class Solution:
    def minJumps(self, arr):
        n = len(arr)
        if n == 1:
            return 0
        same = defaultdict(list)
        for i, v in enumerate(arr):
            same[v].append(i)
        front, back = {0}, {n - 1}
        seen = {0, n - 1}
        steps = 0
        while front:
            if len(front) > len(back):
                front, back = back, front
            nxt = set()
            for i in front:
                for j in same[arr[i]] + [i - 1, i + 1]:
                    if j in back:
                        return steps + 1
                    if 0 <= j < n and j not in seen:
                        seen.add(j)
                        nxt.add(j)
                same[arr[i]] = []
            front = nxt
            steps += 1
        return steps
`)});
};
