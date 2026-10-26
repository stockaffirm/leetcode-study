module.exports=({alt})=>{
const C=s=>s.replace(/^\n/,"").replace(/\n$/,"").split("\n");
// ---- Bloomberg (2)
alt(1255,{name:"Bitmask over word subsets",tag:"Alternative",time:"O(2ⁿ·L)",space:"O(26)",explain:"Enumerate every subset of words with a bitmask and test the letter budget.",code:C(`
class Solution:
    def maxScoreWords(self, words, letters, score):
        have = Counter(letters)
        best = 0
        n = len(words)
        for mask in range(1 << n):
            need = Counter()
            total = 0
            for i in range(n):
                if mask >> i & 1:
                    need.update(words[i])
                    total += sum(score[ord(c) - 97] for c in words[i])
            if all(have[c] >= v for c, v in need.items()):
                best = max(best, total)
        return best
`)});
alt(3105,{name:"Two passes",tag:"Alternative",time:"O(n)",space:"O(1)",explain:"Find the longest increasing run, then the longest decreasing run.",code:C(`
class Solution:
    def longestMonotonicSubarray(self, nums):
        def longest(sign):
            best = cur = 1
            for a, b in zip(nums, nums[1:]):
                cur = cur + 1 if (b - a) * sign > 0 else 1
                best = max(best, cur)
            return best
        return max(longest(1), longest(-1))
`)});
alt(1019,{name:"Brute force scan",tag:"Brute force",time:"O(n²)",space:"O(n)",explain:"For each node scan forward for the first larger value.",code:C(`
class Solution:
    def nextLargerNodes(self, head):
        vals = []
        while head:
            vals.append(head.val)
            head = head.next
        res = []
        for i, v in enumerate(vals):
            res.append(next((w for w in vals[i + 1:] if w > v), 0))
        return res
`)});
alt(2698,{name:"Digit DP check",tag:"Alternative",time:"O(n·2^digits)",space:"O(digits)",explain:"Memoised check of whether the digits of i² can be split to sum to i.",code:C(`
class Solution:
    def punishmentNumber(self, n):
        def ok(i):
            s = str(i * i)
            @lru_cache(None)
            def go(pos, rem):
                if pos == len(s):
                    return rem == 0
                v = 0
                for e in range(pos, len(s)):
                    v = v * 10 + int(s[e])
                    if v > rem:
                        break
                    if go(e + 1, rem - v):
                        return True
                return False
            return go(0, i)
        return sum(i * i for i in range(1, n + 1) if ok(i))
`)});
alt(1415,{name:"Generate all happy strings",tag:"Brute force",time:"O(3·2ⁿ)",space:"O(2ⁿ)",explain:"Build the happy strings in order and index the k-th.",code:C(`
class Solution:
    def getHappyString(self, n, k):
        res = []
        def go(cur):
            if len(cur) == n:
                res.append(cur)
                return
            for c in 'abc':
                if not cur or cur[-1] != c:
                    go(cur + c)
        go("")
        return res[k - 1] if k <= len(res) else ""
`)});
alt(1217,{name:"Try each target position",tag:"Brute force",time:"O(n²)",space:"O(1)",explain:"Cost of gathering at position p is the number of chips with different parity.",code:C(`
class Solution:
    def minCostToMoveChips(self, position):
        return min(sum((x - p) % 2 for x in position) for p in set(position))
`)});
alt(520,{name:"Count capital letters",tag:"Alternative",time:"O(n)",space:"O(1)",explain:"Count the capitals: 0, all, or exactly the first letter.",code:C(`
class Solution:
    def detectCapitalUse(self, word):
        caps = sum(c.isupper() for c in word)
        return caps == 0 or caps == len(word) or (caps == 1 and word[0].isupper())
`)});
alt(1979,{name:"Euclid by hand",tag:"Alternative",time:"O(log)",space:"O(1)",explain:"Run Euclid's algorithm explicitly.",code:C(`
class Solution:
    def findGCD(self, nums):
        a, b = max(nums), min(nums)
        while b:
            a, b = b, a % b
        return a
`)});
alt(3355,{name:"Apply every query to a counter array",tag:"Brute force",time:"O(n·q)",space:"O(n)",explain:"Count coverage index by index.",code:C(`
class Solution:
    def isZeroArray(self, nums, queries):
        cover = [0] * len(nums)
        for l, r in queries:
            for i in range(l, r + 1):
                cover[i] += 1
        return all(c >= x for c, x in zip(cover, nums))
`)});
alt(2200,{name:"Check every index against every key",tag:"Brute force",time:"O(n²)",space:"O(1)",explain:"Index i is k-distant if some key is within k.",code:C(`
class Solution:
    def findKDistantIndices(self, nums, key, k):
        keys = [j for j, v in enumerate(nums) if v == key]
        return [i for i in range(len(nums)) if any(abs(i - j) <= k for j in keys)]
`)});
alt(2311,{name:"Try subsequence from the right with int()",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"Count the zeros plus the largest suffix of ones that keeps the value ≤ k.",code:C(`
class Solution:
    def longestSubsequence(self, s, k):
        zeros = s.count('0')
        value = 0
        ones = 0
        bits = 0
        for ch in reversed(s):
            if ch == '1':
                if bits < 31 and value + (1 << bits) <= k:
                    value += 1 << bits
                    ones += 1
            bits += 1
        return zeros + ones
`)});
alt(421,{name:"Trie of binary numbers",tag:"Alternative",time:"O(32·n)",space:"O(32·n)",explain:"Insert all numbers into a binary trie and for each number walk the opposite bits.",code:C(`
class Solution:
    def findMaximumXOR(self, nums):
        root = {}
        for x in nums:
            node = root
            for b in range(31, -1, -1):
                node = node.setdefault((x >> b) & 1, {})
        best = 0
        for x in nums:
            node = root
            cur = 0
            for b in range(31, -1, -1):
                bit = (x >> b) & 1
                if 1 - bit in node:
                    cur |= 1 << b
                    node = node[1 - bit]
                else:
                    node = node[bit]
            best = max(best, cur)
        return best
`)});
alt(898,{name:"All subarrays",tag:"Brute force",time:"O(n²)",space:"O(n)",explain:"Compute every subarray OR with a running value.",code:C(`
class Solution:
    def subarrayBitwiseORs(self, arr):
        seen = set()
        for i in range(len(arr)):
            cur = 0
            for j in range(i, len(arr)):
                cur |= arr[j]
                seen.add(cur)
        return len(seen)
`)});
alt(2787,{name:"Top-down recursion",tag:"Alternative",time:"O(n·n^(1/x))",space:"O(n)",explain:"count(remaining, next base) with memoisation.",code:C(`
class Solution:
    def numberOfWays(self, n, x):
        MOD = 10**9 + 7
        @lru_cache(None)
        def go(rem, i):
            if rem == 0:
                return 1
            if i ** x > rem:
                return 0
            return (go(rem - i ** x, i + 1) + go(rem, i + 1)) % MOD
        return go(n, 1)
`)});
alt(837,{name:"Plain recursion over scores",tag:"Alternative",time:"O(k·maxPts)",space:"O(k)",explain:"f(points) = probability of finishing ≤ n.",code:C(`
class Solution:
    def new21Game(self, n, k, maxPts):
        @lru_cache(None)
        def f(p):
            if p >= k:
                return 1.0 if p <= n else 0.0
            return sum(f(p + i) for i in range(1, maxPts + 1)) / maxPts
        return f(0)
`)});
alt(1504,{name:"Count every rectangle by corners",tag:"Brute force",time:"O(m²n²)",space:"O(m·n)",explain:"Check each rectangle using 2D prefix sums of ones.",code:C(`
class Solution:
    def numSubmat(self, mat):
        m, n = len(mat), len(mat[0])
        P = [[0] * (n + 1) for _ in range(m + 1)]
        for i in range(m):
            for j in range(n):
                P[i + 1][j + 1] = mat[i][j] + P[i][j + 1] + P[i + 1][j] - P[i][j]
        res = 0
        for r1 in range(m):
            for r2 in range(r1, m):
                for c1 in range(n):
                    for c2 in range(c1, n):
                        area = (r2 - r1 + 1) * (c2 - c1 + 1)
                        if P[r2 + 1][c2 + 1] - P[r1][c2 + 1] - P[r2 + 1][c1] + P[r1][c1] == area:
                            res += 1
        return res
`)});
alt(2327,{name:"Simulate each person's sharing days",tag:"Brute force",time:"O(n·forget)",space:"O(n)",explain:"Each new learner adds sharers on days learn+delay … learn+forget−1.",code:C(`
class Solution:
    def peopleAwareOfSecret(self, n, delay, forget):
        MOD = 10**9 + 7
        new = [0] * (n + 2)
        new[1] = 1
        for d in range(1, n + 1):
            for t in range(d + delay, min(n, d + forget - 1) + 1):
                new[t] = (new[t] + new[d]) % MOD
        return sum(new[max(1, n - forget + 1):n + 1]) % MOD
`)});
alt(3005,{name:"Sort counts",tag:"Alternative",time:"O(n log n)",space:"O(n)",explain:"Group by frequency and add the top group.",code:C(`
class Solution:
    def maxFrequencyElements(self, nums):
        counts = sorted(Counter(nums).values(), reverse=True)
        return sum(c for c in counts if c == counts[0])
`)});
alt(3217,{name:"Rebuild a list of kept values",tag:"Alternative",time:"O(n + m)",space:"O(n)",explain:"Collect the kept values and build a new list.",code:C(`
class Solution:
    def modifiedList(self, nums, head):
        bad = set(nums)
        vals = []
        while head:
            if head.val not in bad:
                vals.append(head.val)
            head = head.next
        dummy = tail = ListNode()
        for v in vals:
            tail.next = ListNode(v)
            tail = tail.next
        return dummy.next
`)});
alt(3010,{name:"Try all pairs of cut points",tag:"Brute force",time:"O(n²)",space:"O(1)",explain:"Cost = nums[0] + nums[i] + nums[j] for 0 < i < j.",code:C(`
class Solution:
    def minimumCost(self, nums):
        n = len(nums)
        return min(nums[0] + nums[i] + nums[j] for i in range(1, n) for j in range(i + 1, n))
`)});
alt(396,{name:"Compute every rotation",tag:"Brute force",time:"O(n²)",space:"O(n)",explain:"Evaluate F(k) directly for each rotation.",code:C(`
class Solution:
    def maxRotateFunction(self, nums):
        n = len(nums)
        return max(sum(i * nums[(i - k) % n] for i in range(n)) for k in range(n))
`)});
alt(3302,{name:"DP over (position, skip used)",tag:"Alternative",time:"O(n·m)",space:"O(n·m)",explain:"best(i, j, used) returns the smallest index list; try matching word1[i] to word2[j] or skipping.",code:C(`
class Solution:
    def validSequence(self, word1, word2):
        n, m = len(word1), len(word2)
        @lru_cache(None)
        def go(i, j, used):
            if j == m:
                return ()
            best = None
            for p in range(i, n):
                if n - p < m - j:
                    break
                if word1[p] == word2[j]:
                    rest = go(p + 1, j + 1, used)
                    if rest is not None:
                        return (p,) + rest
                elif not used:
                    rest = go(p + 1, j + 1, True)
                    if rest is not None:
                        cand = (p,) + rest
                        if best is None or cand < best:
                            best = cand
                if best is not None:
                    break
            return best
        r = go(0, 0, False)
        return list(r) if r is not None else []
`)});
alt(3718,{name:"Linear scan on sorted values",tag:"Alternative",time:"O(n log n)",space:"O(1)",explain:"Check multiples against a sorted copy.",code:C(`
class Solution:
    def missingMultiple(self, nums, k):
        s = set(nums)
        return next(m for m in count(k, k) if m not in s)
`)});
alt(836,{name:"Separating-axis test",tag:"Alternative",time:"O(1)",space:"O(1)",explain:"Rectangles do not overlap if one is entirely left, right, above or below the other.",code:C(`
class Solution:
    def isRectangleOverlap(self, rec1, rec2):
        return not (rec1[2] <= rec2[0] or rec2[2] <= rec1[0] or rec1[3] <= rec2[1] or rec2[3] <= rec1[1])
`)});
alt(506,{name:"Heap of scores",tag:"Alternative",time:"O(n log n)",space:"O(n)",explain:"Pop the scores from a max-heap to assign places.",code:C(`
class Solution:
    def findRelativeRanks(self, score):
        heap = [(-s, i) for i, s in enumerate(score)]
        heapify(heap)
        res = [""] * len(score)
        place = 1
        while heap:
            _, i = heappop(heap)
            res[i] = ["Gold Medal", "Silver Medal", "Bronze Medal"][place - 1] if place <= 3 else str(place)
            place += 1
        return res
`)});
alt(513,{name:"DFS tracking depth",tag:"Alternative",time:"O(n)",space:"O(h)",explain:"The first node found at the greatest depth (left first) is the answer.",code:C(`
class Solution:
    def findBottomLeftValue(self, root):
        best = [-1, None]
        def dfs(node, d):
            if not node:
                return
            if d > best[0]:
                best[0], best[1] = d, node.val
            dfs(node.left, d + 1)
            dfs(node.right, d + 1)
        dfs(root, 0)
        return best[1]
`)});
alt(997,{name:"In/out degree arrays",tag:"Alternative",time:"O(n + t)",space:"O(n)",explain:"The judge has in-degree n−1 and out-degree 0.",code:C(`
class Solution:
    def findJudge(self, n, trust):
        indeg = [0] * (n + 1)
        outdeg = [0] * (n + 1)
        for a, b in trust:
            outdeg[a] += 1
            indeg[b] += 1
        for i in range(1, n + 1):
            if indeg[i] == n - 1 and outdeg[i] == 0:
                return i
        return -1
`)});
alt(1002,{name:"Check each letter",tag:"Alternative",time:"O(26·n)",space:"O(1)",explain:"For each letter take the minimum count over words.",code:C(`
class Solution:
    def commonChars(self, words):
        res = []
        for c in 'abcdefghijklmnopqrstuvwxyz':
            res += [c] * min(w.count(c) for w in words)
        return res
`)});
alt(1089,{name:"Build a new list then copy",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"Construct the expanded list and cut it to the array length.",code:C(`
class Solution:
    def duplicateZeros(self, arr):
        out = []
        for x in arr:
            out.append(x)
            if x == 0:
                out.append(0)
        arr[:] = out[:len(arr)]
        return arr
`)});
alt(1653,{name:"Prefix b's and suffix a's",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"For each split delete the b's on the left and the a's on the right.",code:C(`
class Solution:
    def minimumDeletions(self, s):
        a_right = s.count('a')
        b_left = 0
        best = a_right
        for c in s:
            if c == 'a':
                a_right -= 1
            else:
                b_left += 1
            best = min(best, b_left + a_right)
        return best
`)});
alt(2574,{name:"Prefix and suffix arrays",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"Build left and right sums explicitly.",code:C(`
class Solution:
    def leftRightDifference(self, nums):
        left = [0] + list(accumulate(nums))[:-1]
        right = list(accumulate(reversed(nums)))[::-1]
        right = right[1:] + [0]
        return [abs(a - b) for a, b in zip(left, right)]
`)});
alt(3110,{name:"Index loop",tag:"Alternative",time:"O(n)",space:"O(1)",explain:"Loop over neighbouring positions.",code:C(`
class Solution:
    def scoreOfString(self, s):
        total = 0
        for i in range(len(s) - 1):
            total += abs(ord(s[i]) - ord(s[i + 1]))
        return total
`)});
alt(942,{name:"Deque of unused numbers",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"Pop from the left for I and from the right for D.",code:C(`
class Solution:
    def diStringMatch(self, s):
        q = deque(range(len(s) + 1))
        return [q.popleft() if c == 'I' else q.pop() for c in s] + [q.pop()]
`)});
alt(3381,{name:"Check every starting remainder",tag:"Brute force",time:"O(n²/k)",space:"O(n)",explain:"Try all subarrays with length divisible by k.",code:C(`
class Solution:
    def maxSubarraySum(self, nums, k):
        n = len(nums)
        pre = [0] + list(accumulate(nums))
        best = float('-inf')
        for i in range(n + 1):
            for j in range(i + k, n + 1, k):
                best = max(best, pre[j] - pre[i])
        return best
`)});
alt(1408,{name:"Join all words and count occurrences",tag:"Alternative",time:"O(n·L)",space:"O(n·L)",explain:"A word is a substring of another if it occurs more than once in the joined string.",code:C(`
class Solution:
    def stringMatching(self, words):
        big = ' '.join(words)
        return [w for w in words if big.count(w) > 1]
`)});
alt(1726,{name:"Count by sorted pairs",tag:"Alternative",time:"O(n²)",space:"O(n²)",explain:"Group pairs by product using a dictionary of lists.",code:C(`
class Solution:
    def tupleSameProduct(self, nums):
        groups = defaultdict(int)
        for a, b in combinations(nums, 2):
            groups[a * b] += 1
        return sum(8 * c * (c - 1) // 2 for c in groups.values())
`)});
alt(310,{name:"Try every node as root",tag:"Brute force",time:"O(n²)",space:"O(n)",explain:"Compute the height from each root with BFS (Breadth-First Search) and keep the minimum.",code:C(`
class Solution:
    def findMinHeightTrees(self, n, edges):
        g = [[] for _ in range(n)]
        for a, b in edges:
            g[a].append(b)
            g[b].append(a)
        heights = []
        for r in range(n):
            seen = {r}
            q = deque([r])
            h = -1
            while q:
                h += 1
                for _ in range(len(q)):
                    u = q.popleft()
                    for v in g[u]:
                        if v not in seen:
                            seen.add(v)
                            q.append(v)
            heights.append(h)
        m = min(heights)
        return [i for i, h in enumerate(heights) if h == m]
`)});
alt(575,{name:"Sort and count changes",tag:"Alternative",time:"O(n log n)",space:"O(1)",explain:"Count distinct values in sorted order.",code:C(`
class Solution:
    def distributeCandies(self, candyType):
        s = sorted(candyType)
        kinds = 1 + sum(a != b for a, b in zip(s, s[1:]))
        return min(kinds, len(s) // 2)
`)});
alt(1749,{name:"Kadane both ways",tag:"Alternative",time:"O(n)",space:"O(1)",explain:"Run Kadane for the maximum and the minimum sum.",code:C(`
class Solution:
    def maxAbsoluteSum(self, nums):
        hi = lo = best_hi = best_lo = 0
        for x in nums:
            hi = max(0, hi + x)
            lo = min(0, lo + x)
            best_hi = max(best_hi, hi)
            best_lo = min(best_lo, lo)
        return max(best_hi, -best_lo)
`)});
alt(2401,{name:"Try every start with expansion",tag:"Brute force",time:"O(n²)",space:"O(1)",explain:"Expand from each start while the OR and sum agree (disjoint bits).",code:C(`
class Solution:
    def longestNiceSubarray(self, nums):
        best = 1
        for i in range(len(nums)):
            used = 0
            for j in range(i, len(nums)):
                if used & nums[j]:
                    break
                used |= nums[j]
                best = max(best, j - i + 1)
        return best
`)});
alt(3394,{name:"Sweep with a running maximum end",tag:"Alternative",time:"O(r log r)",space:"O(r)",explain:"Count the gaps between merged intervals on each axis; two gaps give three groups.",code:C(`
class Solution:
    def checkValidCuts(self, n, rectangles):
        def cuts(a, b):
            ivs = sorted((r[a], r[b]) for r in rectangles)
            gaps = 0
            end = ivs[0][1]
            for s, e in ivs[1:]:
                if s >= end:
                    gaps += 1
                end = max(end, e)
            return gaps
        return cuts(0, 2) >= 2 or cuts(1, 3) >= 2
`)});
alt(2874,{name:"Check every triple",tag:"Brute force",time:"O(n³)",space:"O(1)",explain:"Evaluate (nums[i] − nums[j]) · nums[k] for all i<j<k.",code:C(`
class Solution:
    def maximumTripletValue(self, nums):
        best = 0
        for i, j, k in combinations(range(len(nums)), 3):
            best = max(best, (nums[i] - nums[j]) * nums[k])
        return best
`)});
alt(2843,{name:"Arithmetic on digits",tag:"Alternative",time:"O(range)",space:"O(1)",explain:"Split with divmod instead of strings (only 2 or 4 digit numbers can be symmetric in range).",code:C(`
class Solution:
    def countSymmetricIntegers(self, low, high):
        res = 0
        for x in range(low, high + 1):
            if 10 <= x <= 99 and x // 10 == x % 10:
                res += 1
            elif 1000 <= x <= 9999 and x // 1000 + x // 100 % 10 == x // 10 % 10 + x % 10:
                res += 1
        return res
`)});
alt(2404,{name:"Sort evens by (−count, value)",tag:"Alternative",time:"O(n log n)",space:"O(n)",explain:"Sort the even values by frequency then value.",code:C(`
class Solution:
    def mostFrequentEven(self, nums):
        evens = [x for x in nums if x % 2 == 0]
        if not evens:
            return -1
        cnt = Counter(evens)
        return sorted(cnt, key=lambda x: (-cnt[x], x))[0]
`)});
alt(838,{name:"Simulate rounds",tag:"Brute force",time:"O(n²)",space:"O(n)",explain:"Apply pushes simultaneously until nothing changes.",code:C(`
class Solution:
    def pushDominoes(self, dominoes):
        cur = list(dominoes)
        while True:
            new = cur[:]
            for i, c in enumerate(cur):
                if c == '.':
                    l = cur[i - 1] == 'R' if i else False
                    r = cur[i + 1] == 'L' if i + 1 < len(cur) else False
                    if l and not r:
                        new[i] = 'R'
                    elif r and not l:
                        new[i] = 'L'
            if new == cur:
                return ''.join(cur)
            cur = new
`)});
alt(3362,{name:"Try removing every subset of queries",tag:"Brute force",time:"O(2^q·(n+q))",space:"O(n)",explain:"Only for tiny inputs: test each subset of kept queries.",code:C(`
class Solution:
    def maxRemoval(self, nums, queries):
        q = len(queries)
        best = -1
        for mask in range(1 << q):
            cover = [0] * len(nums)
            kept = 0
            for t in range(q):
                if mask >> t & 1:
                    kept += 1
                    for i in range(queries[t][0], queries[t][1] + 1):
                        cover[i] += 1
            if all(c >= x for c, x in zip(cover, nums)):
                best = max(best, q - kept)
        return best
`)});
alt(1544,{name:"Remove pairs repeatedly",tag:"Brute force",time:"O(n²)",space:"O(n)",explain:"Delete the first bad pair until none is left.",code:C(`
class Solution:
    def makeGood(self, s):
        changed = True
        while changed:
            changed = False
            for i in range(len(s) - 1):
                if abs(ord(s[i]) - ord(s[i + 1])) == 32:
                    s = s[:i] + s[i + 2:]
                    changed = True
                    break
        return s
`)});
alt(2460,{name:"Two-pointer compaction",tag:"Alternative",time:"O(n)",space:"O(1)",explain:"After merging, move non-zero numbers forward in place and fill the rest with zeros.",code:C(`
class Solution:
    def applyOperations(self, nums):
        for i in range(len(nums) - 1):
            if nums[i] == nums[i + 1]:
                nums[i] *= 2
                nums[i + 1] = 0
        w = 0
        for x in nums:
            if x:
                nums[w] = x
                w += 1
        for i in range(w, len(nums)):
            nums[i] = 0
        return nums
`)});
alt(2643,{name:"Loop with a running best",tag:"Alternative",time:"O(m·n)",space:"O(1)",explain:"Keep the best row so far.",code:C(`
class Solution:
    def rowAndMaximumOnes(self, mat):
        bi, bc = 0, -1
        for i, row in enumerate(mat):
            c = sum(row)
            if c > bc:
                bi, bc = i, c
        return [bi, bc]
`)});
alt(2411,{name:"OR of each suffix then shortest",tag:"Brute force",time:"O(n²)",space:"O(n)",explain:"For each start compute the target OR and extend until reached.",code:C(`
class Solution:
    def smallestSubarrays(self, nums):
        n = len(nums)
        res = []
        for i in range(n):
            target = 0
            for x in nums[i:]:
                target |= x
            cur = 0
            for j in range(i, n):
                cur |= nums[j]
                if cur == target:
                    res.append(j - i + 1)
                    break
        return res
`)});
alt(2264,{name:"Check all digits",tag:"Alternative",time:"O(1)",space:"O(1)",explain:"Look for 999, 888, … 000 inside the string.",code:C(`
class Solution:
    def largestGoodInteger(self, num):
        for d in '9876543210':
            if d * 3 in num:
                return d * 3
        return ""
`)});
alt(342,{name:"Divide by four",tag:"Alternative",time:"O(log n)",space:"O(1)",explain:"Divide by 4 while divisible, check we reach 1.",code:C(`
class Solution:
    def isPowerOfFour(self, n):
        if n <= 0:
            return False
        while n % 4 == 0:
            n //= 4
        return n == 1
`)});
alt(1323,{name:"Digit list",tag:"Alternative",time:"O(d)",space:"O(d)",explain:"Change the first 6 in the digit list.",code:C(`
class Solution:
    def maximum69Number(self, num):
        d = list(str(num))
        for i, c in enumerate(d):
            if c == '6':
                d[i] = '9'
                break
        return int(''.join(d))
`)});
alt(1300,{name:"Try every value",tag:"Brute force",time:"O(n·max)",space:"O(1)",explain:"Test each cap value and keep the closest sum.",code:C(`
class Solution:
    def findBestValue(self, arr, target):
        best, ans = float('inf'), 0
        for v in range(max(arr) + 1):
            diff = abs(sum(min(x, v) for x in arr) - target)
            if diff < best:
                best, ans = diff, v
        return ans
`)});
};
