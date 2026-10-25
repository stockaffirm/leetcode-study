const {lite}=require("./lib");
const C=s=>s.replace(/^\n/,"").replace(/\n$/,"").split("\n");
const ARR="Array / String",HM="Hash Map / Set",STK="Stack / Monotonic Stack",BT="Binary Tree",GR="Graph",HP="Heap",DP="Dynamic Programming",GD="Greedy",MB="Math / Bit Manipulation",BS="Binary Search",SRT="Sorting",SW="Sliding Window",MX="Matrix",UF="Union Find / Segment Tree",TP="Two Pointers",IV="Intervals",BTK="Backtracking",DS="Design",LL="Linked List",TR="Trie",PS="Prefix Sum";
// ---- Salesforce (1/3)
lite({id:2380,slug:"time-needed-to-rearrange-a-binary-string",title:"Time Needed to Rearrange a Binary String",level:"Medium",topic:ARR,name:"Each 1 waits for the zeros before it",
w:"'0110101': every second all '01' pairs swap to '10'. After 4 seconds all 1s are in front → 4.",k:"A 1 can only move left one step per second, and it cannot overtake another 1. Scan left to right keeping the number of zeros seen so far and the time t when the previous 1 finished: a new 1 that has zeros in front needs max(t + 1, zeros) seconds.",
i:"s = \"0110101\"",o:"4",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def secondsToRemoveOccurrences(self, s):
        t = zeros = 0
        for c in s:
            if c == '0':
                zeros += 1
            elif zeros:
                t = max(t + 1, zeros)
        return t
`)});
lite({id:3488,slug:"closest-equal-element-queries",title:"Closest Equal Element Queries",level:"Medium",topic:HM,name:"Neighbours in each value's index list",
w:"[1,3,1,4,1,3,2]: query index 0 (value 1): the closest other 1 is at index 2 → 2. Index 3 (value 4) is alone → −1.",k:"The array is circular. Group the indices of each value in order; the closest equal element to an index is one of its two neighbours in that group (wrapping around). Compute the circular distance to both and keep the smaller.",
i:"nums = [1,3,1,4,1,3,2], queries = [0,3,5]",o:"[2, -1, 3]",time:"O(n + q)",space:"O(n)",
code:C(`
class Solution:
    def solveQueries(self, nums, queries):
        n = len(nums)
        pos = defaultdict(list)
        for i, x in enumerate(nums):
            pos[x].append(i)
        best = {}
        for lst in pos.values():
            m = len(lst)
            if m == 1:
                continue
            for j, i in enumerate(lst):
                d = n
                for o in (lst[j - 1], lst[(j + 1) % m]):
                    gap = abs(i - o)
                    d = min(d, gap, n - gap)
                best[i] = d
        return [best.get(q, -1) for q in queries]
`)});
lite({id:3398,slug:"smallest-substring-with-identical-characters-i",title:"Smallest Substring With Identical Characters I",level:"Hard",topic:BS,name:"Binary search the longest allowed run",
w:"'000001', 1 flip: flipping the middle zero breaks 00000 into runs of at most 2 → 2.",k:"Guess the answer L (the longest run we allow) and count the flips needed. For L = 1 the string must alternate: flips = min(mismatches with 0101…, with 1010…). For L ≥ 2 a run of length r needs r // (L + 1) flips (flip every (L+1)-th character). A bigger L never needs more flips, so binary search the smallest L that fits in numOps.",
i:"s = \"000001\", numOps = 1",o:"2",time:"O(n log n)",space:"O(1)",
code:C(`
class Solution:
    def minLength(self, s, numOps):
        n = len(s)
        def ok(L):
            if L == 1:
                bad = sum(c != str(i % 2) for i, c in enumerate(s))
                return min(bad, n - bad) <= numOps
            ops = 0
            for _, g in groupby(s):
                ops += len(list(g)) // (L + 1)
            return ops <= numOps
        lo, hi = 1, n
        while lo < hi:
            mid = (lo + hi) // 2
            if ok(mid):
                hi = mid
            else:
                lo = mid + 1
        return lo
`)});
lite({id:3399,slug:"smallest-substring-with-identical-characters-ii",title:"Smallest Substring With Identical Characters II",level:"Hard",topic:BS,name:"Binary search the longest allowed run",
w:"'000001', 1 flip: one flip in the middle cuts the run of five 0s into pieces of at most 2 → 2.",k:"Same idea as part I with a much longer string: binary search the longest allowed run L. L = 1 means a fully alternating string; for L ≥ 2 a run of length r costs r // (L + 1) flips. Each check is linear, so the total is O(n log n).",
i:"s = \"000001\", numOps = 1",o:"2",time:"O(n log n)",space:"O(1)",
code:C(`
class Solution:
    def minLength(self, s, numOps):
        n = len(s)
        def ok(L):
            if L == 1:
                bad = sum(c != str(i % 2) for i, c in enumerate(s))
                return min(bad, n - bad) <= numOps
            ops = 0
            for _, g in groupby(s):
                ops += len(list(g)) // (L + 1)
            return ops <= numOps
        lo, hi = 1, n
        while lo < hi:
            mid = (lo + hi) // 2
            if ok(mid):
                hi = mid
            else:
                lo = mid + 1
        return lo
`)});
lite({id:3035,slug:"maximum-palindromes-after-operations",title:"Maximum Palindromes After Operations",level:"Medium",topic:GD,name:"Pool the letter pairs, serve short words first",
w:"['abbb','ba','aa']: letters can be swapped between words; pairs available = 4, enough to make all three words palindromes → 3.",k:"Swapping lets you move any character anywhere, so only the total number of PAIRS of equal letters matters (odd lengths get their middle from any leftover letter). A word of length L needs L // 2 pairs. Serve the shortest words first while pairs last.",
i:"words = [\"abbb\",\"ba\",\"aa\"]",o:"3",time:"O(n log n + total length)",space:"O(1)",
code:C(`
class Solution:
    def maxPalindromesAfterOperations(self, words):
        cnt = Counter(''.join(words))
        pairs = sum(v // 2 for v in cnt.values())
        res = 0
        for L in sorted(map(len, words)):
            if pairs < L // 2:
                break
            pairs -= L // 2
            res += 1
        return res
`)});
lite({id:2957,slug:"remove-adjacent-almost-equal-characters",title:"Remove Adjacent Almost-Equal Characters",level:"Medium",topic:GD,name:"Fix a bad pair, then skip one",
w:"'aaaaa': change the 2nd and 4th letters to something far away → 2 changes.",k:"Two neighbours are 'almost equal' if they are the same or adjacent in the alphabet. When a pair is bad, change the second letter of the pair to something far from both neighbours; that also fixes the next pair, so skip one position.",
i:"word = \"aaaaa\"",o:"2",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def removeAlmostEqualCharacters(self, word):
        ops = 0
        i = 1
        while i < len(word):
            if abs(ord(word[i]) - ord(word[i - 1])) <= 1:
                ops += 1
                i += 2
            else:
                i += 1
        return ops
`)});
lite({id:3607,slug:"power-grid-maintenance",title:"Power Grid Maintenance",level:"Medium",topic:UF,name:"Union-Find plus a lazy-delete min-heap per grid",
w:"Stations 1-5 in a line; station 3 asks → itself. Station 1 goes offline; asking 1 returns the smallest online in its grid → 2.",k:"Connected stations form a grid: union them once. Keep each grid's stations in a min-heap. For a query on an offline station, pop offline stations from the top of its grid's heap (lazy deletion) and answer with the top, or −1 if the heap empties.",
i:"c = 5, connections = [[1,2],[2,3],[3,4],[4,5]], queries = [[1,3],[2,1],[1,1],[2,2],[1,2]]",o:"[3, 2, 3]",time:"O((c + q) α + c log c)",space:"O(c)",
code:C(`
class Solution:
    def processQueries(self, c, connections, queries):
        p = list(range(c + 1))
        def find(x):
            while p[x] != x:
                p[x] = p[p[x]]
                x = p[x]
            return x
        for a, b in connections:
            p[find(a)] = find(b)
        heaps = defaultdict(list)
        for i in range(1, c + 1):
            heaps[find(i)].append(i)
        off = [False] * (c + 1)
        res = []
        for t, x in queries:
            if t == 2:
                off[x] = True
            elif not off[x]:
                res.append(x)
            else:
                h = heaps[find(x)]
                while h and off[h[0]]:
                    heappop(h)
                res.append(h[0] if h else -1)
        return res
`)});
lite({id:1221,slug:"split-a-string-in-balanced-strings",title:"Split a String in Balanced Strings",level:"Easy",topic:GD,name:"Cut whenever L and R counts match",
w:"'RLRRLLRLRL': cut after RL, RRLL, RL, RL → 4 balanced pieces.",k:"Walk through the string with a balance (+1 for R, −1 for L). Every time the balance returns to 0, the piece so far is balanced, so cut there. Cutting as early as possible gives the most pieces.",
i:"s = \"RLRRLLRLRL\"",o:"4",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def balancedStringSplit(self, s):
        bal = res = 0
        for c in s:
            bal += 1 if c == 'R' else -1
            if bal == 0:
                res += 1
        return res
`)});
lite({id:3540,slug:"minimum-time-to-visit-all-houses",title:"Minimum Time to Visit All Houses",level:"Medium",topic:PS,name:"Circular prefix sums for both directions",
w:"Three houses in a circle: 0→1 forward costs 1, 1→2 costs 4 (or 5 backward), 2→0 costs 3 backward, 0→2 costs 4 backward → 12.",k:"Houses sit on a circle; from a to b you can go forward or backward. Build prefix sums over the forward and backward costs (doubled so they wrap around) and take the cheaper direction for every consecutive pair of the visit order, starting at house 0.",
i:"forward = [1,4,4], backward = [4,1,2], queries = [1,2,0,2]",o:"12",time:"O(n + m)",space:"O(n)",
code:C(`
class Solution:
    def minTotalTime(self, forward, backward, queries):
        n = len(forward)
        F = [0]
        B = [0]
        for i in range(2 * n):
            F.append(F[-1] + forward[i % n])
            B.append(B[-1] + backward[i % n])
        total = 0
        cur = 0
        for q in queries:
            if q != cur:
                f = F[q if q > cur else q + n] - F[cur]
                b = B[cur + 1 if cur > q else cur + n + 1] - B[q + 1]
                total += min(f, b)
            cur = q
        return total
`)});
lite({id:2563,slug:"count-the-number-of-fair-pairs",title:"Count the Number of Fair Pairs",level:"Medium",topic:TP,name:"Sort, then count sums ≤ upper minus sums < lower",
w:"[0,1,7,4,4,5], 3..6: pairs (0,4)(0,4)(0,5)(1,4)(1,4)(1,5) → 6.",k:"Order does not matter for pair sums, so sort. Count pairs with sum ≤ v using two pointers (when nums[i] + nums[j] ≤ v every index between i and j also works with j). The answer is count(upper) − count(lower − 1).",
i:"nums = [0,1,7,4,4,5], lower = 3, upper = 6",o:"6",time:"O(n log n)",space:"O(1)",
code:C(`
class Solution:
    def countFairPairs(self, nums, lower, upper):
        nums.sort()
        def count(v):
            i, j, r = 0, len(nums) - 1, 0
            while i < j:
                if nums[i] + nums[j] <= v:
                    r += j - i
                    i += 1
                else:
                    j -= 1
            return r
        return count(upper) - count(lower - 1)
`)});
lite({id:3193,slug:"count-the-number-of-inversions",title:"Count the Number of Inversions",level:"Hard",topic:DP,name:"DP on prefix length and inversion count",
w:"n=3, prefix of 3 must have 2 inversions and the first element 0 inversions: [2,0,1] and [1,2,0] → 2.",k:"Build the permutation by inserting the next element's rank: the i-th element (0-based) adds anywhere from 0 to i new inversions. dp[j] = ways with j inversions so far; the next step is a sliding-window sum of the previous dp over the last i+1 values. When a requirement ends at i, keep only the required inversion count.",
i:"n = 3, requirements = [[2,2],[0,0]]",o:"2",time:"O(n · maxCnt)",space:"O(maxCnt)",
code:C(`
class Solution:
    def numberOfPermutations(self, n, requirements):
        MOD = 10**9 + 7
        req = {e: c for e, c in requirements}
        if req.get(0, 0) != 0:
            return 0
        M = max(req.values())
        dp = [1] + [0] * M
        for i in range(1, n):
            pre = [0]
            for v in dp:
                pre.append((pre[-1] + v) % MOD)
            new = [0] * (M + 1)
            for j in range(M + 1):
                new[j] = (pre[j + 1] - pre[max(0, j - i)]) % MOD
            if i in req:
                keep = new[req[i]]
                new = [0] * (M + 1)
                new[req[i]] = keep
            dp = new
        return dp[req[n - 1]] % MOD
`)});
lite({id:740,slug:"delete-and-earn",title:"Delete and Earn",level:"Medium",topic:DP,name:"House robber over the values",
w:"[3,4,2]: take 4 (earn 4), which deletes 3; then take 2 → 6.",k:"Taking value v earns v × count(v) but forbids v−1 and v+1. Sum the points per value and run house robber over the values 1 … max: best[v] = max(best[v−1], best[v−2] + points[v]).",
i:"nums = [3,4,2]",o:"6",time:"O(n + max)",space:"O(max)",
code:C(`
class Solution:
    def deleteAndEarn(self, nums):
        pts = [0] * (max(nums) + 1)
        for x in nums:
            pts[x] += x
        take, skip = 0, 0
        for v in pts:
            take, skip = skip + v, max(take, skip)
        return max(take, skip)
`)});
lite({id:1309,slug:"decrypt-string-from-alphabet-to-integer-mapping",title:"Decrypt String from Alphabet to Integer Mapping",level:"Easy",topic:ARR,name:"Read from the right, '#' means two digits",
w:"'10#11#12' → '10#' = j, '11#' = k, '1' = a, '2' = b → 'jkab'.",k:"Digits 1-9 are single letters a-i; two digits followed by '#' are 10-26 (j-z). Scan from the right: a '#' means the previous two digits form one letter, otherwise a single digit does.",
i:"s = \"10#11#12\"",o:"\"jkab\"",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def freqAlphabets(self, s):
        res = []
        i = len(s) - 1
        while i >= 0:
            if s[i] == '#':
                res.append(chr(96 + int(s[i - 2:i])))
                i -= 3
            else:
                res.append(chr(96 + int(s[i])))
                i -= 1
        return ''.join(reversed(res))
`)});
lite({id:2068,slug:"check-whether-two-strings-are-almost-equivalent",title:"Check Whether Two Strings are Almost Equivalent",level:"Easy",topic:HM,name:"Compare the 26 letter counts",
w:"'aaaa' vs 'bccb': 'a' appears 4 times in one and 0 in the other, difference 4 > 3 → false.",k:"Two words are almost equivalent when, for every letter, the counts differ by at most 3. Count letters of one word up and the other down; no letter may end beyond ±3.",
i:"word1 = \"aaaa\", word2 = \"bccb\"",o:"false",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def checkAlmostEquivalent(self, word1, word2):
        diff = Counter(word1)
        diff.subtract(Counter(word2))
        return all(abs(v) <= 3 for v in diff.values())
`)});
lite({id:2866,slug:"beautiful-towers-ii",title:"Beautiful Towers II",level:"Medium",topic:STK,name:"Monotonic stack: best left and right sums",
w:"[5,3,4,1,1]: peak at index 0 → heights [5,3,3,1,1] → sum 13.",k:"Choose the peak i. To its left heights must not decrease toward i and stay ≤ maxHeights, so each tower is capped by the minimum since it. A monotonic stack gives left[i] = best sum of 0..i when i is the right end of a non-decreasing run: reuse left of the previous smaller tower. Do the same from the right and answer max(left[i] + right[i] − h[i]).",
i:"maxHeights = [5,3,4,1,1]",o:"13",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def maximumSumOfHeights(self, maxHeights):
        h = maxHeights
        n = len(h)
        left = [0] * n
        st = []
        for i in range(n):
            while st and h[st[-1]] > h[i]:
                st.pop()
            left[i] = h[i] * (i + 1) if not st else left[st[-1]] + h[i] * (i - st[-1])
            st.append(i)
        right = [0] * n
        st = []
        for i in range(n - 1, -1, -1):
            while st and h[st[-1]] > h[i]:
                st.pop()
            right[i] = h[i] * (n - i) if not st else right[st[-1]] + h[i] * (st[-1] - i)
            st.append(i)
        return max(left[i] + right[i] - h[i] for i in range(n))
`)});
lite({id:2865,slug:"beautiful-towers-i",title:"Beautiful Towers I",level:"Medium",topic:STK,name:"Try every peak, shrink outwards",
w:"[5,3,4,1,1]: peak at index 0 → heights [5,3,3,1,1] → sum 13.",k:"Pick a peak i; going outwards each tower is the smaller of its own cap and the tower before it. Sum both sides and keep the best peak. With n up to 1000 the O(n²) scan is fine (the monotonic-stack version of part II makes it O(n)).",
i:"maxHeights = [5,3,4,1,1]",o:"13",time:"O(n²)",space:"O(1)",
code:C(`
class Solution:
    def maximumSumOfHeights(self, maxHeights):
        h = maxHeights
        n = len(h)
        best = 0
        for i in range(n):
            total = cur = h[i]
            for j in range(i - 1, -1, -1):
                cur = min(cur, h[j])
                total += cur
            cur = h[i]
            for j in range(i + 1, n):
                cur = min(cur, h[j])
                total += cur
            best = max(best, total)
        return best
`)});
lite({id:1150,slug:"check-if-a-number-is-majority-element-in-a-sorted-array",title:"Check If a Number Is Majority Element in a Sorted Array",level:"Easy",topic:BS,name:"Binary search the first and last position",
w:"[2,4,5,5,5,5,5,6,6], target 5 appears 5 times out of 9 (> 4.5) → true.",k:"In a sorted array equal values sit together. Binary search the first and the last position of target; if that block is longer than n / 2 it is the majority element.",
i:"nums = [2,4,5,5,5,5,5,6,6], target = 5",o:"true",time:"O(log n)",space:"O(1)",
code:C(`
class Solution:
    def isMajorityElement(self, nums, target):
        n = len(nums)
        return bisect_right(nums, target) - bisect_left(nums, target) > n // 2
`)});
lite({id:1051,slug:"height-checker",title:"Height Checker",level:"Easy",topic:SRT,name:"Compare with the sorted copy",
w:"[1,1,4,2,1,3] sorted is [1,1,1,2,3,4]: positions 2, 4, 5 differ → 3.",k:"The expected order is simply the sorted heights. Count the positions where the current height differs from the sorted one.",
i:"heights = [1,1,4,2,1,3]",o:"3",time:"O(n log n)",space:"O(n)",
code:C(`
class Solution:
    def heightChecker(self, heights):
        return sum(a != b for a, b in zip(heights, sorted(heights)))
`)});
lite({id:2946,slug:"matrix-similarity-after-cyclic-shifts",title:"Matrix Similarity After Cyclic Shifts",level:"Easy",topic:MX,name:"A row is unchanged if it repeats every k",
w:"[[1,2,3],[4,5,6],[7,8,9]], k=4: shifting by 4 ≡ 1 place changes the row [1,2,3] → false.",k:"Even rows shift left and odd rows shift right, but a row equals its shifted self in either direction exactly when row[j] == row[(j + k) mod n] for every j. Check that for every row.",
i:"mat = [[1,2,3],[4,5,6],[7,8,9]], k = 4",o:"false",time:"O(m·n)",space:"O(1)",
code:C(`
class Solution:
    def areSimilar(self, mat, k):
        n = len(mat[0])
        return all(row[j] == row[(j + k) % n] for row in mat for j in range(n))
`)});
lite({id:2992,slug:"number-of-self-divisible-permutations",title:"Number of Self-Divisible Permutations",level:"Medium",topic:DP,name:"Bitmask DP filling positions in order",
w:"n=3: the valid permutations of 1,2,3 where gcd(value, position)=1 everywhere are [3,1,2], [2,3,1], [1,3,2] → 3.",k:"A permutation of 1…n is self-divisible if gcd(a_i, i) = 1 for every position i. Fill positions 1, 2, 3… in order; the mask of used numbers tells how many positions are filled, so dp[mask] = ways to reach it, trying each unused value that is coprime with the next position.",
i:"n = 3",o:"3",time:"O(2ⁿ · n)",space:"O(2ⁿ)",
code:C(`
class Solution:
    def selfDivisiblePermutationCount(self, n):
        dp = [0] * (1 << n)
        dp[0] = 1
        for mask in range(1 << n):
            if not dp[mask]:
                continue
            pos = bin(mask).count('1') + 1
            for v in range(1, n + 1):
                if not (mask >> (v - 1)) & 1 and gcd(v, pos) == 1:
                    dp[mask | 1 << (v - 1)] += dp[mask]
        return dp[-1]
`)});
