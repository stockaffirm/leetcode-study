module.exports=({alt})=>{
const C=s=>s.replace(/^\n/,"").replace(/\n$/,"").split("\n");
// ---- IBM
alt(3159,{name:"Count while scanning",tag:"Alternative",time:"O(n·q)",space:"O(1)",explain:"For each query scan the array and stop at the q-th match.",code:C(`
class Solution:
    def occurrencesOfElement(self, nums, queries, x):
        res = []
        for q in queries:
            seen = 0
            ans = -1
            for i, v in enumerate(nums):
                if v == x:
                    seen += 1
                    if seen == q:
                        ans = i
                        break
            res.append(ans)
        return res
`)});
alt(3402,{name:"Walk columns with zip",tag:"Alternative",time:"O(m·n)",space:"O(m)",explain:"Transpose the grid and fix each column in turn.",code:C(`
class Solution:
    def minimumOperations(self, grid):
        ops = 0
        for col in zip(*grid):
            prev = col[0]
            for v in col[1:]:
                if v <= prev:
                    ops += prev + 1 - v
                    v = prev + 1
                prev = v
        return ops
`)});
alt(3175,{name:"Queue simulation",tag:"Brute force",time:"O(n)",space:"O(n)",explain:"Simulate the line: the front two play, the loser goes to the back (k is capped at n − 1).",code:C(`
class Solution:
    def findWinningPlayer(self, skills, k):
        n = len(skills)
        k = min(k, n - 1)
        q = deque(range(n))
        champ = q.popleft()
        wins = 0
        while True:
            challenger = q.popleft()
            if skills[champ] > skills[challenger]:
                wins += 1
                q.append(challenger)
            else:
                q.append(champ)
                champ = challenger
                wins = 1
            if wins == k:
                return champ
`)});
alt(2545,{name:"Sort row indices",tag:"Alternative",time:"O(m log m)",space:"O(m)",explain:"Order the row numbers by their kth score and read the rows in that order.",code:C(`
class Solution:
    def sortTheStudents(self, score, k):
        order = sorted(range(len(score)), key=lambda i: score[i][k], reverse=True)
        return [score[i] for i in order]
`)});
alt(3820,{name:"DFS for the distances",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"Same test, distances computed with an iterative DFS (Depth-First Search).",code:C(`
class Solution:
    def specialNodes(self, n, edges, x, y, z):
        g = [[] for _ in range(n)]
        for a, b in edges:
            g[a].append(b)
            g[b].append(a)
        def dist(s):
            d = [-1] * n
            d[s] = 0
            st = [s]
            while st:
                u = st.pop()
                for v in g[u]:
                    if d[v] < 0:
                        d[v] = d[u] + 1
                        st.append(v)
            return d
        D = [dist(x), dist(y), dist(z)]
        res = 0
        for i in range(n):
            t = sorted(d[i] for d in D)
            res += t[0] ** 2 + t[1] ** 2 == t[2] ** 2
        return res
`)});
alt(2907,{name:"Chain DP",tag:"Alternative",time:"O(n²)",space:"O(n)",explain:"two[j] = best profit of a pair ending at j; three[k] = best triple ending at k.",code:C(`
class Solution:
    def maxProfit(self, prices, profits):
        n = len(prices)
        two = [-1] * n
        best = -1
        for k in range(n):
            for j in range(k):
                if prices[j] < prices[k]:
                    if two[j] > 0:
                        best = max(best, two[j] + profits[k])
                    two[k] = max(two[k], profits[j] + profits[k])
        return best
`)});
alt(2921,{name:"Chain DP (quadratic)",tag:"Brute force",time:"O(n²)",space:"O(n)",explain:"Reference solution that is too slow for n = 50 000.",code:C(`
class Solution:
    def maxProfit(self, prices, profits):
        n = len(prices)
        two = [-1] * n
        best = -1
        for k in range(n):
            for j in range(k):
                if prices[j] < prices[k]:
                    if two[j] > 0:
                        best = max(best, two[j] + profits[k])
                    two[k] = max(two[k], profits[j] + profits[k])
        return best
`)});
alt(3024,{name:"Explicit comparisons",tag:"Alternative",time:"O(1)",space:"O(1)",explain:"Check the triangle inequality for every side, then equality of sides.",code:C(`
class Solution:
    def triangleType(self, nums):
        a, b, c = nums
        if a + b <= c or a + c <= b or b + c <= a:
            return "none"
        if a == b == c:
            return "equilateral"
        if a == b or b == c or a == c:
            return "isosceles"
        return "scalene"
`)});
alt(3096,{name:"Try every split with sums",tag:"Brute force",time:"O(n²)",space:"O(1)",explain:"For each split recompute Alice's and Bob's totals.",code:C(`
class Solution:
    def minimumLevels(self, possible):
        score = [1 if p else -1 for p in possible]
        for i in range(1, len(score)):
            if sum(score[:i]) > sum(score[i:]):
                return i
        return -1
`)});
alt(3147,{name:"Top-down recursion",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"total(i) = energy[i] + total(i + k) with memoisation.",code:C(`
class Solution:
    def maximumEnergy(self, energy, k):
        n = len(energy)
        @lru_cache(None)
        def total(i):
            return energy[i] + (total(i + k) if i + k < n else 0)
        return max(total(i) for i in range(n))
`)});
alt(3107,{name:"Nudge the median step by step",tag:"Brute force",time:"O(ops·n log n)",space:"O(1)",explain:"Repeatedly move the median element one step toward k and re-sort until the median equals k.",code:C(`
class Solution:
    def minOperationsToMakeMedianK(self, nums, k):
        nums.sort()
        m = len(nums) // 2
        ops = 0
        while nums[m] != k:
            nums[m] += 1 if nums[m] < k else -1
            nums.sort()
            ops += 1
        return ops
`)});
alt(3145,{name:"Build big_nums explicitly",tag:"Brute force",time:"O(to)",space:"O(to)",explain:"For small ranges create big_nums by writing out each number's powers of two and multiply the slice.",code:C(`
class Solution:
    def findProductsOfElements(self, queries):
        need = max(r for _, r, _ in queries) + 1
        big = []
        i = 1
        while len(big) < need:
            big.extend(1 << b for b in range(60) if (i >> b) & 1)
            i += 1
        res = []
        for l, r, m in queries:
            p = 1
            for v in big[l:r + 1]:
                p = p * v % m
            res.append(p % m)
        return res
`)});
alt(2455,{name:"Single pass",tag:"Alternative",time:"O(n)",space:"O(1)",explain:"Keep a running sum and count of multiples of 6.",code:C(`
class Solution:
    def averageValue(self, nums):
        total = cnt = 0
        for x in nums:
            if x % 2 == 0 and x % 3 == 0:
                total += x
                cnt += 1
        return total // cnt if cnt else 0
`)});
alt(2562,{name:"Deque from both ends",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"Pop the front and back of a deque and glue the numbers.",code:C(`
class Solution:
    def findTheArrayConcVal(self, nums):
        q = deque(nums)
        total = 0
        while len(q) > 1:
            total += int(str(q.popleft()) + str(q.pop()))
        return total + (q[0] if q else 0)
`)});
alt(3223,{name:"Simulate the deletions",tag:"Brute force",time:"O(n)",space:"O(1)",explain:"For each letter remove two occurrences at a time while at least three remain.",code:C(`
class Solution:
    def minimumLength(self, s):
        total = 0
        for c in Counter(s).values():
            while c >= 3:
                c -= 2
            total += c
        return total
`)});
alt(754,{name:"Closed form with square root",tag:"Alternative",time:"O(1)",space:"O(1)",explain:"Jump straight to k ≈ (√(1 + 8t) − 1) / 2, then increase k until the parity is right.",code:C(`
class Solution:
    def reachNumber(self, target):
        t = abs(target)
        k = int(((1 + 8 * t) ** 0.5 - 1) / 2)
        while k * (k + 1) // 2 < t or (k * (k + 1) // 2 - t) % 2:
            k += 1
        return k
`)});
alt(1888,{name:"Try every rotation",tag:"Brute force",time:"O(n²)",space:"O(n)",explain:"For each rotation count mismatches with both alternating patterns.",code:C(`
class Solution:
    def minFlips(self, s):
        n = len(s)
        best = n
        for r in range(n):
            t = s[r:] + s[:r]
            d0 = sum(c != str(i % 2) for i, c in enumerate(t))
            best = min(best, d0, n - d0)
        return best
`)});
alt(1518,{name:"Closed form",tag:"Alternative",time:"O(1)",space:"O(1)",explain:"Every exchange removes numExchange − 1 empties net, so the total is n + (n − 1) // (numExchange − 1).",code:C(`
class Solution:
    def numWaterBottles(self, numBottles, numExchange):
        return numBottles + (numBottles - 1) // (numExchange - 1)
`)});
alt(2602,{name:"Sum per query",tag:"Brute force",time:"O(n·q)",space:"O(1)",explain:"Add up |x − q| directly for every query.",code:C(`
class Solution:
    def minOperations(self, nums, queries):
        return [sum(abs(x - q) for x in nums) for q in queries]
`)});
alt(1648,{name:"Max-heap simulation",tag:"Brute force",time:"O(orders log n)",space:"O(n)",explain:"Sell one ball at a time: take the largest stock, add its value, push back value − 1.",code:C(`
class Solution:
    def maxProfit(self, inventory, orders):
        heap = [-x for x in inventory]
        heapify(heap)
        res = 0
        for _ in range(orders):
            v = -heappop(heap)
            res += v
            heappush(heap, -(v - 1))
        return res % (10**9 + 7)
`)});
alt(1167,{name:"Keep a sorted list",tag:"Alternative",time:"O(n²)",space:"O(n)",explain:"Remove the two smallest from a sorted list and insert their sum in order.",code:C(`
class Solution:
    def connectSticks(self, sticks):
        s = sorted(sticks)
        cost = 0
        while len(s) > 1:
            a, b = s.pop(0), s.pop(0)
            cost += a + b
            insort(s, a + b)
        return cost
`)});
alt(3627,{name:"Two pointers over the sorted array",tag:"Alternative",time:"O(n log n)",space:"O(1)",explain:"Each step removes the smallest plus the two largest remaining numbers and scores the second largest.",code:C(`
class Solution:
    def maximumMedianSum(self, nums):
        nums.sort()
        lo, hi = 0, len(nums) - 1
        total = 0
        while lo < hi:
            total += nums[hi - 1]
            lo += 1
            hi -= 2
        return total
`)});
alt(1910,{name:"Replace the leftmost occurrence",tag:"Brute force",time:"O(n²/m)",space:"O(n)",explain:"Use str.replace with count 1 until the part no longer occurs.",code:C(`
class Solution:
    def removeOccurrences(self, s, part):
        while part in s:
            s = s.replace(part, '', 1)
        return s
`)});
alt(1802,{name:"Try peaks from large to small",tag:"Brute force",time:"O(maxSum)",space:"O(1)",explain:"Test candidate peaks from maxSum downwards with the same pyramid sum.",code:C(`
class Solution:
    def maxValue(self, n, index, maxSum):
        def side(length, peak):
            if peak > length:
                return (peak + peak - length + 1) * length // 2
            return peak * (peak + 1) // 2 + (length - peak)
        for v in range(maxSum, 0, -1):
            if side(index + 1, v) + side(n - index, v) - v <= maxSum:
                return v
`)});
alt(2405,{name:"Bitmask of used letters",tag:"Alternative",time:"O(n)",space:"O(1)",explain:"Track used letters in an integer mask.",code:C(`
class Solution:
    def partitionString(self, s):
        mask = 0
        parts = 1
        for c in s:
            bit = 1 << (ord(c) - 97)
            if mask & bit:
                parts += 1
                mask = 0
            mask |= bit
        return parts
`)});
alt(2193,{name:"Match the first letter with its last twin",tag:"Alternative",time:"O(n²)",space:"O(n)",explain:"Mirror image of the main idea: take the first letter and bring its farthest twin to the end.",code:C(`
class Solution:
    def minMovesToMakePalindrome(self, s):
        s = list(s)
        moves = 0
        while len(s) > 1:
            c = s[0]
            j = len(s) - 1 - s[::-1].index(c)
            if j == 0:
                moves += len(s) // 2
                s.pop(0)
            else:
                moves += len(s) - 1 - j
                s.pop(j)
                s.pop(0)
        return moves
`)});
alt(1685,{name:"Sum every difference",tag:"Brute force",time:"O(n²)",space:"O(1)",explain:"Add |nums[i] − nums[j]| over all j for each i.",code:C(`
class Solution:
    def getSumAbsoluteDifferences(self, nums):
        return [sum(abs(a - b) for b in nums) for a in nums]
`)});
alt(2645,{name:"Walk the expected letter",tag:"Alternative",time:"O(n)",space:"O(1)",explain:"Keep the letter the pattern abcabc… expects next and insert letters until it matches the word's letter.",code:C(`
class Solution:
    def addMinimum(self, word):
        need = 0
        exp = 0
        for c in word:
            target = ord(c) - 97
            while exp != target:
                need += 1
                exp = (exp + 1) % 3
            exp = (exp + 1) % 3
        return need + (3 - exp) % 3
`)});
alt(324,{name:"Virtual index mapping",tag:"Alternative",time:"O(n log n)",space:"O(n)",explain:"Write the sorted values from largest to smallest into positions 1, 3, 5 … then 0, 2, 4 … using (1 + 2i) mod (n | 1).",code:C(`
class Solution:
    def wiggleSort(self, nums):
        s = sorted(nums, reverse=True)
        n = len(nums)
        for i, v in enumerate(s):
            nums[(1 + 2 * i) % (n | 1)] = v
        return nums
`)});
alt(1208,{name:"Prefix costs and binary search",tag:"Alternative",time:"O(n log n)",space:"O(n)",explain:"With prefix sums of costs, for each right end binary search the leftmost start that is still affordable.",code:C(`
class Solution:
    def equalSubstring(self, s, t, maxCost):
        pre = [0]
        for a, b in zip(s, t):
            pre.append(pre[-1] + abs(ord(a) - ord(b)))
        best = 0
        for r in range(1, len(pre)):
            l = bisect_left(pre, pre[r] - maxCost)
            best = max(best, r - l)
        return best
`)});
alt(2432,{name:"Durations with max()",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"Build the list of (duration, −id) and take the maximum.",code:C(`
class Solution:
    def hardestWorker(self, n, logs):
        prev = 0
        best = (-1, 0)
        for emp, end in logs:
            best = max(best, (end - prev, -emp))
            prev = end
        return -best[1]
`)});
alt(2134,{name:"Count zeros in every circular window",tag:"Brute force",time:"O(n·w)",space:"O(1)",explain:"For every start position count the zeros in the next w slots (wrapping around).",code:C(`
class Solution:
    def minSwaps(self, nums):
        n = len(nums)
        w = sum(nums)
        if w in (0, n):
            return 0
        return min(sum(nums[(i + j) % n] == 0 for j in range(w)) for i in range(n))
`)});
alt(453,{name:"Add up the gaps",tag:"Alternative",time:"O(n)",space:"O(1)",explain:"Sum x − min for each element.",code:C(`
class Solution:
    def minMoves(self, nums):
        m = min(nums)
        return sum(x - m for x in nums)
`)});
alt(1413,{name:"Try start values upwards",tag:"Brute force",time:"O(n·answer)",space:"O(1)",explain:"For start = 1, 2, 3 … simulate the sums and return the first that never drops below 1.",code:C(`
class Solution:
    def minStartValue(self, nums):
        start = 1
        while True:
            run = start
            ok = True
            for x in nums:
                run += x
                if run < 1:
                    ok = False
                    break
            if ok:
                return start
            start += 1
`)});
alt(89,{name:"Reflect and prefix",tag:"Alternative",time:"O(2ⁿ)",space:"O(2ⁿ)",explain:"Start with [0]; for each bit append the reversed list with that bit set.",code:C(`
class Solution:
    def grayCode(self, n):
        res = [0]
        for b in range(n):
            res += [x | (1 << b) for x in reversed(res)]
        return res
`)});
alt(1163,{name:"Compare every suffix",tag:"Brute force",time:"O(n²)",space:"O(n)",explain:"Take the maximum over all suffixes.",code:C(`
class Solution:
    def lastSubstring(self, s):
        return max(s[i:] for i in range(len(s)))
`)});
alt(1513,{name:"Group the runs",tag:"Alternative",time:"O(n)",space:"O(1)",explain:"For every run of 1s of length L add L(L+1)/2.",code:C(`
class Solution:
    def numSub(self, s):
        total = 0
        for ch, g in groupby(s):
            if ch == '1':
                L = len(list(g))
                total += L * (L + 1) // 2
        return total % (10**9 + 7)
`)});
alt(1877,{name:"Two pointers",tag:"Alternative",time:"O(n log n)",space:"O(1)",explain:"After sorting, move one pointer from each end and track the largest sum.",code:C(`
class Solution:
    def minPairSum(self, nums):
        nums.sort()
        i, j = 0, len(nums) - 1
        best = 0
        while i < j:
            best = max(best, nums[i] + nums[j])
            i += 1
            j -= 1
        return best
`)});
alt(2273,{name:"Letter-count signature",tag:"Alternative",time:"O(n·L)",space:"O(n·L)",explain:"Compare words by their letter counts instead of sorting.",code:C(`
class Solution:
    def removeAnagrams(self, words):
        res = []
        last = None
        for w in words:
            sig = tuple(sorted(Counter(w).items()))
            if sig != last:
                res.append(w)
                last = sig
        return res
`)});
alt(371,{name:"Full adder bit by bit",tag:"Alternative",time:"O(1)",space:"O(1)",explain:"Add the 32 bits one at a time with an explicit carry.",code:C(`
class Solution:
    def getSum(self, a, b):
        mask = 0xFFFFFFFF
        res = carry = 0
        for i in range(32):
            x = (a >> i) & 1
            y = (b >> i) & 1
            res |= (x ^ y ^ carry) << i
            carry = (x & y) | (carry & (x ^ y))
        return res if res <= 0x7FFFFFFF else ~(res ^ mask)
`)});
alt(941,{name:"Locate the peak first",tag:"Alternative",time:"O(n)",space:"O(1)",explain:"Find the maximum's index and check both sides are strictly monotone.",code:C(`
class Solution:
    def validMountainArray(self, arr):
        p = arr.index(max(arr))
        if p == 0 or p == len(arr) - 1:
            return False
        return all(arr[i] < arr[i + 1] for i in range(p)) and all(arr[i] > arr[i + 1] for i in range(p, len(arr) - 1))
`)});
alt(413,{name:"Count by maximal runs",tag:"Alternative",time:"O(n)",space:"O(1)",explain:"A maximal arithmetic run of length L ≥ 3 contains (L−1)(L−2)/2 slices.",code:C(`
class Solution:
    def numberOfArithmeticSlices(self, nums):
        total = 0
        run = 2
        for i in range(2, len(nums)):
            if nums[i] - nums[i - 1] == nums[i - 1] - nums[i - 2]:
                run += 1
            else:
                total += (run - 1) * (run - 2) // 2
                run = 2
        return total + (run - 1) * (run - 2) // 2
`)});
alt(2414,{name:"Group by (letter − position)",tag:"Alternative",time:"O(n)",space:"O(1)",explain:"Letters of an alphabetical run share the same value ord(c) − index.",code:C(`
class Solution:
    def longestContinuousSubstring(self, s):
        return max(len(list(g)) for _, g in groupby(enumerate(s), key=lambda p: ord(p[1]) - p[0]))
`)});
alt(2697,{name:"Build from zipped pairs",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"Take the min of each mirrored pair for the first half and mirror it.",code:C(`
class Solution:
    def makeSmallestPalindrome(self, s):
        n = len(s)
        half = [min(a, b) for a, b in zip(s[:n // 2], reversed(s[n - n // 2:]))]
        mid = [s[n // 2]] if n % 2 else []
        return ''.join(half + mid + half[::-1])
`)});
alt(1665,{name:"Binary search the start energy",tag:"Alternative",time:"O(n log S)",space:"O(1)",explain:"Sort tasks by slack and binary search the smallest start energy for which the whole sequence can be run.",code:C(`
class Solution:
    def minimumEffort(self, tasks):
        order = sorted(tasks, key=lambda t: t[0] - t[1])
        def ok(e):
            for actual, minimum in order:
                if e < minimum:
                    return False
                e -= actual
            return True
        lo, hi = 1, sum(m for _, m in tasks) + sum(a for a, _ in tasks)
        while lo < hi:
            mid = (lo + hi) // 2
            if ok(mid):
                hi = mid
            else:
                lo = mid + 1
        return lo
`)});
alt(2914,{name:"Zip the pairs",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"Pair even and odd positions with zip.",code:C(`
class Solution:
    def minChanges(self, s):
        return sum(a != b for a, b in zip(s[::2], s[1::2]))
`)});
};
