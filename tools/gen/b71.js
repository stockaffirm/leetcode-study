const {lite}=require("./lib");
const C=s=>s.replace(/^\n/,"").replace(/\n$/,"").split("\n");
const ARR="Array / String",HM="Hash Map / Set",STK="Stack / Monotonic Stack",BT="Binary Tree",GR="Graph",HP="Heap",DP="Dynamic Programming",GD="Greedy",MB="Math / Bit Manipulation",BS="Binary Search",SRT="Sorting",SW="Sliding Window",MX="Matrix",UF="Union Find / Segment Tree",TP="Two Pointers",IV="Intervals",BTK="Backtracking",DS="Design",LL="Linked List",TR="Trie",PS="Prefix Sum";
// ---- Bloomberg (7)
lite({id:1015,slug:"smallest-integer-divisible-by-k",title:"Smallest Integer Divisible by K",level:"Medium",topic:MB,name:"Grow 1, 11, 111 … modulo K",
w:"K=3 → 111 is divisible by 3 → length 3.",k:"We only need the remainder of the repunit (1, 11, 111, …) modulo K: next = (rem·10 + 1) % K. If K is even or a multiple of 5 the answer is −1; otherwise a remainder of 0 appears within K steps (pigeonhole), and that step count is the length.",
i:"k = 3",o:"3",time:"O(K)",space:"O(1)",
code:C(`
class Solution:
    def smallestRepunitDivByK(self, k):
        if k % 2 == 0 or k % 5 == 0:
            return -1
        rem = 0
        for length in range(1, k + 1):
            rem = (rem * 10 + 1) % k
            if rem == 0:
                return length
        return -1
`)});
lite({id:3432,slug:"count-partitions-with-even-sum-difference",title:"Count Partitions with Even Sum Difference",level:"Easy",topic:MB,name:"Difference parity = total parity",
w:"[10,10,3,7,6] → total 36 is even → all 4 cut positions work.",k:"left − right = 2·left − total, so its parity equals the parity of the total sum. If the total is even every cut works (n − 1 cuts), otherwise none does.",
i:"nums = [10,10,3,7,6]",o:"4",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def countPartitions(self, nums):
        return len(nums) - 1 if sum(nums) % 2 == 0 else 0
`)});
lite({id:552,slug:"student-attendance-record-ii",title:"Student Attendance Record II",level:"Hard",topic:DP,name:"DP over (absences, current late streak)",
w:"n=2 → 8 of the 9 two-day records are rewarded (only 'AA' fails).",k:"A record is rewarded if it has fewer than 2 'A's and no 'LLL'. Track the number of valid records by state (absences used 0/1, trailing late days 0/1/2) and extend one day at a time with 'P', 'A' or 'L'. Sum the six states after n days modulo 1e9+7.",
i:"n = 2",o:"8",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def checkRecord(self, n):
        MOD = 10**9 + 7
        dp = {(a, l): 0 for a in range(2) for l in range(3)}
        dp[(0, 0)] = 1
        for _ in range(n):
            new = {k: 0 for k in dp}
            for (a, l), ways in dp.items():
                new[(a, 0)] = (new[(a, 0)] + ways) % MOD
                if a == 0:
                    new[(1, 0)] = (new[(1, 0)] + ways) % MOD
                if l < 2:
                    new[(a, l + 1)] = (new[(a, l + 1)] + ways) % MOD
            dp = new
        return sum(dp.values()) % MOD
`)});
lite({id:3623,slug:"count-number-of-trapezoids-i",title:"Count Number of Trapezoids I",level:"Medium",topic:MB,name:"Pairs of same-height segments, then pairs of rows",
w:"[[1,0],[2,0],[3,0],[2,2],[3,2]] → 3 trapezoids.",k:"A horizontal trapezoid has two horizontal sides on two different heights. For a height with c points there are c(c−1)/2 possible horizontal segments. Choose two segments from two different heights: sum over height pairs of seg(a)·seg(b), computed with a running sum, modulo 1e9+7.",
i:"points = [[1,0],[2,0],[3,0],[2,2],[3,2]]",o:"3",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def countTrapezoids(self, points):
        MOD = 10**9 + 7
        rows = Counter(y for _, y in points)
        total = 0
        res = 0
        for c in rows.values():
            seg = c * (c - 1) // 2
            res = (res + seg * total) % MOD
            total += seg
        return res
`)});
lite({id:2147,slug:"number-of-ways-to-divide-a-long-corridor",title:"Number of Ways to Divide a Long Corridor",level:"Hard",topic:MB,name:"Multiply the gaps between seat pairs",
w:"'SSPPSPS' → 3 ways.",k:"Each section needs exactly two seats. If the seat count is 0 or odd the answer is 0. Otherwise seats pair up (1–2, 3–4, …); a divider can go in any gap between the second seat of a pair and the first of the next, so multiply (plants + 1) for each such gap, modulo 1e9+7.",
i:"corridor = \"SSPPSPS\"",o:"3",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def numberOfWays(self, corridor):
        MOD = 10**9 + 7
        seats = [i for i, c in enumerate(corridor) if c == 'S']
        if len(seats) == 0 or len(seats) % 2:
            return 0
        res = 1
        for i in range(2, len(seats), 2):
            res = res * (seats[i] - seats[i - 1]) % MOD
        return res
`)});
lite({id:3347,slug:"maximum-frequency-of-an-element-after-performing-operations-ii",title:"Maximum Frequency of an Element After Performing Operations II",level:"Hard",topic:BS,name:"Candidate targets with binary search counts",
w:"[5,11,20,20], k=5, 1 operation: the two 20s are already equal → frequency 2.",k:"Choose a target value t. Elements already equal to t cost nothing; each other element within distance k of t can be moved onto it, but only numOperations of them may be. So the frequency is same(t) + min(numOperations, near(t) − same(t)). The best target is an element value, or a value x±k (where a window starts or ends), so test those candidates, counting with binary search on the sorted array.",
i:"nums = [5,11,20,20], k = 5, numOperations = 1",o:"2",time:"O(n log n)",space:"O(n)",
code:C(`
class Solution:
    def maxFrequency(self, nums, k, numOperations):
        nums.sort()
        cnt = Counter(nums)
        cand = set()
        for x in nums:
            cand |= {x, x - k, x + k}
        best = 0
        for t in cand:
            near = bisect_right(nums, t + k) - bisect_left(nums, t - k)
            same = cnt.get(t, 0)
            best = max(best, same + min(numOperations, near - same))
        return best
`)});
lite({id:1925,slug:"count-square-sum-triples",title:"Count Square Sum Triples",level:"Easy",topic:MB,name:"Try every (a, b) and test c² with a set",
w:"n=5 → (3,4,5) and (4,3,5) → 2.",k:"Count ordered (a, b, c) with a² + b² = c² and everything ≤ n. Loop over a and b, compute the sum and check that it is a perfect square not above n².",
i:"n = 5",o:"2",time:"O(n²)",space:"O(n)",
code:C(`
class Solution:
    def countTriples(self, n):
        squares = {c * c for c in range(1, n + 1)}
        return sum(1 for a in range(1, n + 1) for b in range(1, n + 1) if a * a + b * b in squares)
`)});
lite({id:3776,slug:"minimum-moves-to-balance-circular-array",title:"Minimum Moves to Balance Circular Array",level:"Medium",topic:GD,name:"Pull the deficit from the nearest donors outwards",
w:"[5,1,-4] → three units from person 0 (distance 1) and one from person 1 (distance 1) = 4 moves.",k:"At most one person is negative. If the total is negative nothing works (−1). Otherwise the deficit must be covered by other people; a unit travelling d positions costs d moves. Take units from the nearest neighbours first: at distance d look at the two people d steps away on either side, take what they can give, add d per unit.",
i:"balance = [5,1,-4]",o:"4",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def minMoves(self, balance):
        n = len(balance)
        if sum(balance) < 0:
            return -1
        j = next((i for i, v in enumerate(balance) if v < 0), None)
        if j is None:
            return 0
        need = -balance[j]
        cost = 0
        d = 1
        while need > 0:
            for idx in {(j - d) % n, (j + d) % n}:
                take = min(max(balance[idx], 0), need)
                cost += take * d
                need -= take
                if need == 0:
                    break
            d += 1
        return cost
`)});
lite({id:955,slug:"delete-columns-to-make-sorted-ii",title:"Delete Columns to Make Sorted II",level:"Medium",topic:GD,name:"Greedy over columns, tracking pairs already ordered",
w:"['ca','bb','ac'] → delete column 0: 'a','b','c' sorted → 1.",k:"Go through the columns left to right, remembering which neighbouring pairs of strings are already strictly ordered by earlier kept columns. A column is kept if it never decreases for any still-tied pair; otherwise delete it. Kept columns that strictly order a pair mark it done.",
i:"strs = [\"ca\",\"bb\",\"ac\"]",o:"1",time:"O(n·m)",space:"O(n)",
code:C(`
class Solution:
    def minDeletionSize(self, strs):
        n, m = len(strs), len(strs[0])
        done = [False] * (n - 1)
        deleted = 0
        for c in range(m):
            if any(not done[i] and strs[i][c] > strs[i + 1][c] for i in range(n - 1)):
                deleted += 1
                continue
            for i in range(n - 1):
                if strs[i][c] < strs[i + 1][c]:
                    done[i] = True
        return deleted
`)});
lite({id:2124,slug:"check-if-all-as-appears-before-all-bs",title:"Check if All A's Appears Before All B's",level:"Easy",topic:ARR,name:"No 'ba' anywhere",
w:"'aaabbb' → true; 'abab' → false.",k:"All a's come before all b's exactly when the string never has a 'b' directly followed (at any distance) by an 'a'; checking for the substring 'ba' is enough.",
i:"s = \"aaabbb\"",o:"true",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def checkString(self, s):
        return 'ba' not in s
`)});
lite({id:2421,slug:"number-of-good-paths",title:"Number of Good Paths",level:"Hard",topic:UF,name:"Union-find, adding nodes by increasing value",
w:"vals [1,3,2,1,3], a tree → 6 good paths.",k:"A good path starts and ends at equal values and never passes a larger value. Process the edges ordered by the larger endpoint value. Union two components when joined; whenever two components with the same maximum value merge, the pairs of equal-maximum nodes become good paths: add count_a · count_b and keep the merged count. Add one path per node for single-node paths.",
i:"vals = [1,3,2,1,3], edges = [[0,1],[0,2],[2,3],[2,4]]",o:"6",time:"O(n log n)",space:"O(n)",
code:C(`
class Solution:
    def numberOfGoodPaths(self, vals, edges):
        n = len(vals)
        parent = list(range(n))
        count = [1] * n
        def find(x):
            while parent[x] != x:
                parent[x] = parent[parent[x]]
                x = parent[x]
            return x
        res = n
        for a, b in sorted(edges, key=lambda e: max(vals[e[0]], vals[e[1]])):
            ra, rb = find(a), find(b)
            va, vb = vals[ra], vals[rb]
            if va == vb:
                res += count[ra] * count[rb]
                count[ra] += count[rb]
                parent[rb] = ra
            elif va < vb:
                parent[ra] = rb
            else:
                parent[rb] = ra
        return res
`)});
lite({id:3469,slug:"find-minimum-cost-to-remove-array-elements",title:"Find Minimum Cost to Remove Array Elements",level:"Medium",topic:DP,name:"DP with one carried element",
w:"[6,2,8,4] → remove 6 and 8 (cost 8), then 2 and 4 (cost 4) → 12.",k:"Each step removes two of the first three elements, so at most one older element survives at the front (the 'carry'). State: the index of the carry and the next unread index. Remove the next two (carry stays), or the carry with one of the next two (the other becomes the new carry). When fewer than three elements remain, pay the maximum of them.",
i:"nums = [6,2,8,4]",o:"12",time:"O(n²)",space:"O(n²)",
code:C(`
class Solution:
    def minCost(self, nums):
        n = len(nums)
        if n < 3:
            return max(nums)
        @lru_cache(None)
        def go(c, i):
            if n - i + 1 < 3:
                return max([nums[c]] + nums[i:])
            a, b = nums[i], nums[i + 1]
            return min(max(a, b) + go(c, i + 2),
                       max(nums[c], a) + go(i + 1, i + 2),
                       max(nums[c], b) + go(i, i + 2))
        return min(max(nums[0], nums[1]) + go(2, 3),
                   max(nums[0], nums[2]) + go(1, 3),
                   max(nums[1], nums[2]) + go(0, 3))
`)});
lite({id:967,slug:"numbers-with-same-consecutive-differences",title:"Numbers With Same Consecutive Differences",level:"Medium",topic:BTK,name:"Build digit by digit, branching ±k",
w:"n=3, k=7 → 181, 292, 707, 818, 929.",k:"The first digit is 1–9. Each next digit differs from the previous by exactly k, so it is prev + k or prev − k (once if k = 0), staying within 0–9. Build all numbers of n digits and return them sorted.",
i:"n = 3, k = 7",o:"[181, 292, 707, 818, 929]",time:"O(2ⁿ)",space:"O(2ⁿ)",
code:C(`
class Solution:
    def numsSameConsecDiff(self, n, k):
        nums = list(range(1, 10))
        for _ in range(n - 1):
            nxt = []
            for x in nums:
                last = x % 10
                for d in {last - k, last + k}:
                    if 0 <= d <= 9:
                        nxt.append(x * 10 + d)
            nums = nxt
        return sorted(nums)
`)});
lite({id:1458,slug:"max-dot-product-of-two-subsequences",title:"Max Dot Product of Two Subsequences",level:"Hard",topic:DP,name:"dp[i][j] = best dot product ending within the first i, j elements",
w:"[2,1,-2,5], [3,0,-6] → pick (2,-2) with (3,-6): 6 + 12 = 18.",k:"Choose non-empty subsequences of equal length. dp[i][j] is the best result using the first i of nums1 and j of nums2: skip nums1[i−1], skip nums2[j−1], take the pair alone, or take the pair and add dp[i−1][j−1] if that is positive. Start from −infinity.",
i:"nums1 = [2,1,-2,5], nums2 = [3,0,-6]",o:"18",time:"O(n·m)",space:"O(n·m)",
code:C(`
class Solution:
    def maxDotProduct(self, nums1, nums2):
        n, m = len(nums1), len(nums2)
        NEG = float('-inf')
        dp = [[NEG] * (m + 1) for _ in range(n + 1)]
        for i in range(1, n + 1):
            for j in range(1, m + 1):
                prod = nums1[i - 1] * nums2[j - 1]
                dp[i][j] = max(dp[i - 1][j], dp[i][j - 1], prod, prod + max(dp[i - 1][j - 1], 0))
        return dp[n][m]
`)});
lite({id:446,slug:"arithmetic-slices-ii-subsequence",title:"Arithmetic Slices II - Subsequence",level:"Hard",topic:DP,name:"dp[i][difference] = number of sequences ending at i",
w:"[2,4,6,8,10] → 7 arithmetic subsequences of length ≥ 3.",k:"For each pair j < i with difference d, every arithmetic subsequence (of length ≥ 2) ending at j with difference d can be extended by nums[i]. Keep cnt[i][d] = number of such subsequences of length ≥ 2 ending at i; the extensions of length ≥ 3 are cnt[j][d], which are added to the answer.",
i:"nums = [2,4,6,8,10]",o:"7",time:"O(n²)",space:"O(n²)",
code:C(`
class Solution:
    def numberOfArithmeticSlices(self, nums):
        n = len(nums)
        cnt = [defaultdict(int) for _ in range(n)]
        res = 0
        for i in range(n):
            for j in range(i):
                d = nums[i] - nums[j]
                res += cnt[j][d]
                cnt[i][d] += cnt[j][d] + 1
        return res
`)});
lite({id:2516,slug:"take-k-of-each-character-from-left-and-right",title:"Take K of Each Character From Left and Right",level:"Medium",topic:SW,name:"Longest middle window you can leave behind",
w:"'aabaaaacaabc', k=2 → take 8 from the ends.",k:"Taking from both ends leaves a contiguous middle window untouched. The remaining characters (outside the window) must contain at least k of each of a, b, c. So find the longest window whose removal still leaves ≥ k of each letter: slide it, shrinking from the left when some letter drops below k. Answer = n − longest window (−1 if the total counts are below k).",
i:"s = \"aabaaaacaabc\", k = 2",o:"8",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def takeCharacters(self, s, k):
        total = Counter(s)
        if any(total[c] < k for c in 'abc'):
            return -1
        left = 0
        best = 0
        window = Counter()
        for right, ch in enumerate(s):
            window[ch] += 1
            while total[ch] - window[ch] < k:
                window[s[left]] -= 1
                left += 1
            best = max(best, right - left + 1)
        return len(s) - best
`)});
lite({id:3314,slug:"construct-the-minimum-bitwise-array-i",title:"Construct the Minimum Bitwise Array I",level:"Easy",topic:MB,name:"Clear the highest trailing 1",
w:"[2,3,5,7] → [-1,1,4,3].",k:"We need the smallest a with a | (a + 1) == x. Adding 1 to a turns its trailing run of 1s into 0s and sets the next 0, so x must end in a run of at least one 1 (x odd). The minimum a is x with the top bit of that trailing run of 1s cleared: x − 2^(t−1), where t is the length of the run. Even x has no answer: −1.",
i:"nums = [2,3,5,7]",o:"[-1, 1, 4, 3]",time:"O(n log V)",space:"O(n)",
code:C(`
class Solution:
    def minBitwiseArray(self, nums):
        res = []
        for x in nums:
            if x % 2 == 0:
                res.append(-1)
                continue
            t = 0
            while x >> t & 1:
                t += 1
            res.append(x - (1 << (t - 1)))
        return res
`)});
lite({id:2236,slug:"root-equals-sum-of-children",title:"Root Equals Sum of Children",level:"Easy",topic:BT,name:"Compare the root with its two children",
w:"[10,4,6] → 10 == 4 + 6 → true.",k:"The tree has exactly three nodes. Compare the root value with the sum of the left and right child values.",
i:"root = [10,4,6]",o:"true",time:"O(1)",space:"O(1)",
code:C(`
class Solution:
    def checkTree(self, root):
        return root.val == root.left.val + root.right.val
`)});
lite({id:2716,slug:"minimize-string-length",title:"Minimize String Length",level:"Easy",topic:HM,name:"Distinct characters remain",
w:"'aaabc' → 'abc' → 3.",k:"Repeatedly deleting the nearest equal characters around a letter leaves one copy of each distinct letter, so the answer is the number of distinct characters.",
i:"s = \"aaabc\"",o:"3",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def minimizedStringLength(self, s):
        return len(set(s))
`)});
lite({id:1026,slug:"maximum-difference-between-node-and-ancestor",title:"Maximum Difference Between Node and Ancestor",level:"Medium",topic:BT,name:"Carry the min and max of the path down",
w:"[8,3,10,1,6,null,14,null,null,4,7,13] → |8 − 1| = 7.",k:"For every node the best ancestor to compare with is the smallest or largest value on the path from the root. DFS (Depth-First Search) down carrying the path's min and max; at each node update the answer with |val − min| and |val − max|.",
i:"root = [8,3,10,1,6,null,14,null,null,4,7,13]",o:"7",time:"O(n)",space:"O(h)",
code:C(`
class Solution:
    def maxAncestorDiff(self, root):
        best = 0
        def go(node, lo, hi):
            nonlocal best
            if not node:
                return
            best = max(best, abs(node.val - lo), abs(node.val - hi))
            lo, hi = min(lo, node.val), max(hi, node.val)
            go(node.left, lo, hi)
            go(node.right, lo, hi)
        go(root, root.val, root.val)
        return best
`)});
lite({id:833,slug:"find-and-replace-in-string",title:"Find And Replace in String",level:"Medium",topic:ARR,name:"Apply the replacements left to right with a pointer",
w:"s 'abcd', index 0 'a'→'eee', index 2 'cd'→'ffff' → 'eeebffff'.",k:"All replacements are checked against the original string. Order them by index, copy the untouched parts, and when s really has sources[i] at indices[i] write targets[i] instead and skip over the replaced characters.",
i:"s = \"abcd\", indices = [0,2], sources = [\"a\",\"cd\"], targets = [\"eee\",\"ffff\"]",o:"\"eeebffff\"",time:"O(n + k log k)",space:"O(n)",
code:C(`
class Solution:
    def findReplaceString(self, s, indices, sources, targets):
        out = []
        pos = 0
        for i, src, tgt in sorted(zip(indices, sources, targets)):
            if s.startswith(src, i):
                out.append(s[pos:i])
                out.append(tgt)
                pos = i + len(src)
        out.append(s[pos:])
        return ''.join(out)
`)});
lite({id:868,slug:"binary-gap",title:"Binary Gap",level:"Easy",topic:MB,name:"Distance between consecutive 1 bits",
w:"22 = 10110 → 1s at positions 4, 2, 1 → largest gap 2.",k:"Scan the bits of n from the lowest. Remember the position of the last 1 seen; each new 1 gives a gap of (position − last). Track the maximum.",
i:"n = 22",o:"2",time:"O(log n)",space:"O(1)",
code:C(`
class Solution:
    def binaryGap(self, n):
        last = None
        best = 0
        pos = 0
        while n:
            if n & 1:
                if last is not None:
                    best = max(best, pos - last)
                last = pos
            n >>= 1
            pos += 1
        return best
`)});
lite({id:3640,slug:"trionic-array-ii",title:"Trionic Array II",level:"Hard",topic:DP,name:"Three-phase DP: up, down, up",
w:"[1,4,2,7] → 1,4 up; 4,2 down; 2,7 up → sum 14.",k:"A trionic subarray is increasing, then decreasing, then increasing. Keep the best sum of a subarray ending at i in each phase: inc1[i] (first rise, ≥ 2 elements), dec[i], inc2[i]. When nums[i−1] < nums[i] extend a rise: inc1[i] = max(inc1[i−1], nums[i−1]) + nums[i], inc2[i] = max(inc2[i−1], dec[i−1]) + nums[i]; when nums[i−1] > nums[i], dec[i] = max(dec[i−1], inc1[i−1]) + nums[i]. The answer is the best inc2.",
i:"nums = [1,4,2,7]",o:"14",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def maxSumTrionic(self, nums):
        n = len(nums)
        NEG = float('-inf')
        inc1 = [NEG] * n
        dec = [NEG] * n
        inc2 = [NEG] * n
        for i in range(1, n):
            if nums[i - 1] < nums[i]:
                inc1[i] = max(inc1[i - 1], nums[i - 1]) + nums[i]
                inc2[i] = max(inc2[i - 1], dec[i - 1]) + nums[i]
            elif nums[i - 1] > nums[i]:
                dec[i] = max(dec[i - 1], inc1[i - 1]) + nums[i]
        return max(inc2)
`)});
lite({id:335,slug:"self-crossing",title:"Self Crossing",level:"Hard",topic:ARR,name:"Check the three crossing patterns",
w:"[2,1,1,2] → the path crosses itself → true.",k:"You move north, west, south, east, … by distance[i]. A crossing can only involve the previous 3, 4 or 5 segments: segment i crosses the one 3 back (i−3) when it is long enough and the previous one short; it touches segment i−4 when the two parallel segments overlap exactly; or it crosses segment i−5 after a spiral turn. Check these three patterns for every i.",
i:"distance = [2,1,1,2]",o:"true",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def isSelfCrossing(self, distance):
        d = distance
        for i in range(3, len(d)):
            if d[i] >= d[i - 2] and d[i - 1] <= d[i - 3]:
                return True
            if i >= 4 and d[i - 1] == d[i - 3] and d[i] + d[i - 4] >= d[i - 2]:
                return True
            if (i >= 5 and d[i - 2] >= d[i - 4] and d[i - 1] <= d[i - 3]
                    and d[i] >= d[i - 2] - d[i - 4] and d[i - 1] + d[i - 5] >= d[i - 3]):
                return True
        return False
`)});
lite({id:817,slug:"linked-list-components",title:"Linked List Components",level:"Medium",topic:LL,name:"Count runs of listed values",
w:"head [0,1,2,3], nums [0,1,3] → components {0,1} and {3} → 2.",k:"Put nums in a set. Walk the list; a component starts at a node whose value is in the set while the previous node's value is not (or there is no previous node).",
i:"head = [0,1,2,3], nums = [0,1,3]",o:"2",time:"O(n)",space:"O(m)",
code:C(`
class Solution:
    def numComponents(self, head, nums):
        wanted = set(nums)
        count = 0
        in_run = False
        while head:
            if head.val in wanted:
                if not in_run:
                    count += 1
                in_run = True
            else:
                in_run = False
            head = head.next
        return count
`)});
lite({id:922,slug:"sort-array-by-parity-ii",title:"Sort Array By Parity II",level:"Easy",topic:TP,name:"Two pointers: fix wrong-parity positions",
w:"[4,2,5,7] → [4,5,2,7].",k:"Keep a pointer on the even indices and one on the odd indices. Advance the even pointer to an index holding an odd number and the odd pointer to an index holding an even number; swap them. Repeat until the even pointer runs out.",
i:"nums = [4,2,5,7]",o:"[4, 5, 2, 7]",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def sortArrayByParityII(self, nums):
        i, j = 0, 1
        n = len(nums)
        while i < n and j < n:
            while i < n and nums[i] % 2 == 0:
                i += 2
            while j < n and nums[j] % 2 == 1:
                j += 2
            if i < n and j < n:
                nums[i], nums[j] = nums[j], nums[i]
        return nums
`)});
lite({id:487,slug:"max-consecutive-ones-ii",title:"Max Consecutive Ones II",level:"Medium",topic:SW,name:"Window with at most one zero",
w:"[1,0,1,1,0] → flip the first 0: 1,1,1,1 → 4.",k:"Keep a window containing at most one zero. Move the right end; when a second zero appears, move the left end past the first zero. The longest window is the answer.",
i:"nums = [1,0,1,1,0]",o:"4",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def findMaxConsecutiveOnes(self, nums):
        left = zeros = best = 0
        for right, v in enumerate(nums):
            zeros += v == 0
            while zeros > 1:
                zeros -= nums[left] == 0
                left += 1
            best = max(best, right - left + 1)
        return best
`)});
lite({id:3848,slug:"check-digitorial-permutation",title:"Check Digitorial Permutation",level:"Medium",topic:MB,name:"Compare digits with the few digitorial numbers",
w:"145 → 1! + 4! + 5! = 145 → true.",k:"A digitorial number equals the sum of the factorials of its digits. Only four exist: 1, 2, 145 and 40585. A permutation of n (not starting with 0) is one of these exactly when n has the same multiset of digits as one of them.",
i:"n = 145",o:"true",time:"O(log n)",space:"O(1)",
code:C(`
class Solution:
    def isDigitorialPermutation(self, n):
        digits = sorted(str(n))
        return any(digits == sorted(str(d)) for d in (1, 2, 145, 40585))
`)});
lite({id:777,slug:"swap-adjacent-in-lr-string",title:"Swap Adjacent in LR String",level:"Medium",topic:TP,name:"Two pointers over the X-free letters",
w:"'RXXLRXRXL' → 'XRLXXRRLX' is reachable → true.",k:"A swap 'XL' → 'LX' moves an L left, and 'RX' → 'XR' moves an R right. Ignoring X, both strings must show the same sequence of L and R; and each L may only be at the same or an earlier position in the result, each R at the same or a later one.",
i:"start = \"RXXLRXRXL\", result = \"XRLXXRRLX\"",o:"true",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def canTransform(self, start, result):
        if len(start) != len(result):
            return False
        i = j = 0
        n = len(start)
        while i < n or j < n:
            while i < n and start[i] == 'X':
                i += 1
            while j < n and result[j] == 'X':
                j += 1
            if i == n or j == n:
                return i == n and j == n
            if start[i] != result[j]:
                return False
            if start[i] == 'L' and i < j:
                return False
            if start[i] == 'R' and i > j:
                return False
            i += 1
            j += 1
        return True
`)});
lite({id:3025,slug:"find-the-number-of-ways-to-place-people-i",title:"Find the Number of Ways to Place People I",level:"Medium",topic:GD,name:"Sort, then scan for the nearest blocking point",
w:"[[6,2],[4,4],[2,6]]: (2,6)–(4,4) and (4,4)–(6,2) work; (2,6)–(6,2) is blocked by (4,4) → 2.",k:"A pair (A, B) works if A is on the upper-left of B (x_A ≤ x_B and y_A ≥ y_B) and no other point lies in the rectangle they span. Sort points by x ascending then y descending. For each A, scan the points after it: B is valid only if its y is at most A's y and strictly above every y seen so far among valid candidates (otherwise an earlier point blocks it).",
i:"points = [[6,2],[4,4],[2,6]]",o:"2",time:"O(n²)",space:"O(1)",
code:C(`
class Solution:
    def numberOfPairs(self, points):
        points.sort(key=lambda p: (p[0], -p[1]))
        n = len(points)
        count = 0
        for i in range(n):
            top = float('-inf')
            for j in range(i + 1, n):
                if points[j][1] <= points[i][1] and points[j][1] > top:
                    count += 1
                    top = points[j][1]
        return count
`)});
lite({id:1337,slug:"the-k-weakest-rows-in-a-matrix",title:"The K Weakest Rows in a Matrix",level:"Easy",topic:SRT,name:"Sort rows by (soldiers, index)",
w:"rows with 2,4,1,2,5 soldiers, k=3 → rows [2, 0, 3].",k:"Soldiers (1s) come before civilians (0s) in each row, so the count of soldiers is the row's sum. Sort the row indices by (sum, index) and take the first k.",
i:"mat = [[1,1,0,0,0],[1,1,1,1,0],[1,0,0,0,0],[1,1,0,0,0],[1,1,1,1,1]], k = 3",o:"[2, 0, 3]",time:"O(m log m)",space:"O(m)",
code:C(`
class Solution:
    def kWeakestRows(self, mat, k):
        order = sorted(range(len(mat)), key=lambda i: (sum(mat[i]), i))
        return order[:k]
`)});
lite({id:1622,slug:"fancy-sequence",title:"Fancy Sequence",level:"Hard",topic:DS,name:"Lazy affine transform with a modular inverse",
w:"append 2, addAll 3, append 7, multAll 2, getIndex(0) → 10.",k:"Every element ends up as value·mul + add after all addAll / multAll calls. Keep the global (mul, add) and, for each appended value, store the value that will give the right result after the current global transform: x' = (x − add) · mul⁻¹ (modular inverse via pow). getIndex(i) returns stored[i]·mul + add, modulo 1e9+7.",
i:"Fancy(); append(2); addAll(3); append(7); multAll(2); getIndex(0); addAll(3); append(10); multAll(2); getIndex(0); getIndex(1); getIndex(2)",o:"[None, None, None, None, 10, None, None, None, 26, 34, 20]",time:"O(log MOD) per append",space:"O(n)",
code:C(`
class Fancy:
    MOD = 10**9 + 7

    def __init__(self):
        self.vals = []
        self.mul = 1
        self.add = 0

    def append(self, val):
        inv = pow(self.mul, self.MOD - 2, self.MOD)
        self.vals.append((val - self.add) * inv % self.MOD)

    def addAll(self, inc):
        self.add = (self.add + inc) % self.MOD

    def multAll(self, m):
        self.mul = self.mul * m % self.MOD
        self.add = self.add * m % self.MOD

    def getIndex(self, idx):
        if idx >= len(self.vals):
            return -1
        return (self.vals[idx] * self.mul + self.add) % self.MOD
`)});
lite({id:3346,slug:"maximum-frequency-of-an-element-after-performing-operations-i",title:"Maximum Frequency of an Element After Performing Operations I",level:"Medium",topic:BS,name:"Candidate targets with binary search counts",
w:"[1,4,5], k=1, 2 operations: 5 becomes 4 → two 4s (1 is too far to join) → 2.",k:"Pick a target t. Elements already equal to t are free; each other element within k of t can be moved onto it, but only numOperations elements may be changed. So frequency = same(t) + min(numOperations, near(t) − same(t)). Candidate targets are the element values and value ± k; count with binary search on the sorted array.",
i:"nums = [1,4,5], k = 1, numOperations = 2",o:"2",time:"O(n log n)",space:"O(n)",
code:C(`
class Solution:
    def maxFrequency(self, nums, k, numOperations):
        nums.sort()
        cnt = Counter(nums)
        cand = set()
        for x in nums:
            cand |= {x, x - k, x + k}
        best = 0
        for t in cand:
            near = bisect_right(nums, t + k) - bisect_left(nums, t - k)
            same = cnt.get(t, 0)
            best = max(best, same + min(numOperations, near - same))
        return best
`)});
lite({id:2906,slug:"construct-product-matrix",title:"Construct Product Matrix",level:"Medium",topic:PS,name:"Prefix and suffix products over the flattened grid",
w:"[[1,2],[3,4]] → each cell = product of all others mod 12345 → [[24,12],[8,6]].",k:"Flatten the grid in row-major order. The product of all other cells is (product of everything before) × (product of everything after), modulo 12345 (not prime, so no division). Compute running prefix and suffix products.",
i:"grid = [[1,2],[3,4]]",o:"[[24, 12], [8, 6]]",time:"O(n·m)",space:"O(n·m)",
code:C(`
class Solution:
    def constructProductMatrix(self, grid):
        MOD = 12345
        m, n = len(grid), len(grid[0])
        flat = [v for row in grid for v in row]
        size = len(flat)
        res = [1] * size
        pref = 1
        for i in range(size):
            res[i] = pref
            pref = pref * flat[i] % MOD
        suf = 1
        for i in range(size - 1, -1, -1):
            res[i] = res[i] * suf % MOD
            suf = suf * flat[i] % MOD
        return [res[i * n:(i + 1) * n] for i in range(m)]
`)});
lite({id:3546,slug:"equal-sum-grid-partition-i",title:"Equal Sum Grid Partition I",level:"Medium",topic:PS,name:"Row and column prefix sums",
w:"[[1,4],[2,3]] → cut between the rows: 5 and 5 → true.",k:"Compute the row sums and the column sums. A horizontal cut after row r splits the grid into two halves of sums prefix(r) and total − prefix(r); equal when prefix(r) · 2 == total. Same for vertical cuts with the column sums.",
i:"grid = [[1,4],[2,3]]",o:"true",time:"O(m·n)",space:"O(m + n)",
code:C(`
class Solution:
    def canPartitionGrid(self, grid):
        rows = [sum(r) for r in grid]
        cols = [sum(c) for c in zip(*grid)]
        total = sum(rows)
        for line in (rows, cols):
            run = 0
            for v in line[:-1]:
                run += v
                if run * 2 == total:
                    return True
        return False
`)});
lite({id:2257,slug:"count-unguarded-cells-in-the-grid",title:"Count Unguarded Cells in the Grid",level:"Medium",topic:MX,name:"Mark everything a guard sees",
w:"A guard sees along its row and column until a wall or another guard; free cells nobody sees are unguarded.",k:"Create a grid with the guards and walls marked. From each guard walk in the four directions, marking free cells as guarded, and stop at a wall or another guard. The unguarded cells are the free cells never marked.",
i:"m = 4, n = 6, guards = [[0,0],[1,1],[2,3]], walls = [[0,1],[2,2],[1,4]]",o:"7",time:"O(m·n·(m+n))",space:"O(m·n)",
code:C(`
class Solution:
    def countUnguarded(self, m, n, guards, walls):
        grid = [[0] * n for _ in range(m)]
        for r, c in guards:
            grid[r][c] = 2
        for r, c in walls:
            grid[r][c] = 3
        for r, c in guards:
            for dr, dc in ((1, 0), (-1, 0), (0, 1), (0, -1)):
                a, b = r + dr, c + dc
                while 0 <= a < m and 0 <= b < n and grid[a][b] not in (2, 3):
                    grid[a][b] = 1
                    a += dr
                    b += dc
        return sum(row.count(0) for row in grid)
`)});
lite({id:1092,slug:"shortest-common-supersequence",title:"Shortest Common Supersequence",level:"Hard",topic:DP,name:"DP table of supersequence lengths, then rebuild",
w:"'abac' and 'cab' → 'cabac' (length 5).",k:"dp[i][j] = length of the shortest string having both str1[i:] and str2[j:] as subsequences. If the letters match they share one character; otherwise take the better of using str1's or str2's letter. Walk the table from (0,0) writing characters, preferring str1's letter on a tie.",
i:"str1 = \"abac\", str2 = \"cab\"",o:"\"cabac\"",time:"O(n·m)",space:"O(n·m)",
code:C(`
class Solution:
    def shortestCommonSupersequence(self, str1, str2):
        n, m = len(str1), len(str2)
        dp = [[0] * (m + 1) for _ in range(n + 1)]
        for i in range(n, -1, -1):
            for j in range(m, -1, -1):
                if i == n:
                    dp[i][j] = m - j
                elif j == m:
                    dp[i][j] = n - i
                elif str1[i] == str2[j]:
                    dp[i][j] = 1 + dp[i + 1][j + 1]
                else:
                    dp[i][j] = 1 + min(dp[i + 1][j], dp[i][j + 1])
        out = []
        i = j = 0
        while i < n and j < m:
            if str1[i] == str2[j]:
                out.append(str1[i])
                i += 1
                j += 1
            elif dp[i + 1][j] <= dp[i][j + 1]:
                out.append(str1[i])
                i += 1
            else:
                out.append(str2[j])
                j += 1
        return ''.join(out) + str1[i:] + str2[j:]
`)});
lite({id:1848,slug:"minimum-distance-to-the-target-element",title:"Minimum Distance to the Target Element",level:"Easy",topic:ARR,name:"Smallest |i − start| among matches",
w:"[1,2,3,4,5], target 5, start 3 → index 4 → 1.",k:"Look at every index where nums[i] == target and take the smallest |i − start|.",
i:"nums = [1,2,3,4,5], target = 5, start = 3",o:"1",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def getMinDistance(self, nums, target, start):
        return min(abs(i - start) for i, v in enumerate(nums) if v == target)
`)});
lite({id:3464,slug:"maximize-the-distance-between-points-on-a-square",title:"Maximize the Distance Between Points on a Square",level:"Hard",topic:BS,name:"Binary search the distance, greedy around the boundary",
w:"side 2, points [[0,2],[2,0],[2,2],[0,0]], k=4 → all four corners, minimum distance 2.",k:"Binary search the answer d. Lay the points out in order around the boundary of the square. To test d, try each point as the first chosen one: greedily walk forward choosing the next point at Manhattan distance ≥ d from the last chosen, and finally check the last chosen is ≥ d from the first. If k points are reached the distance d is possible.",
i:"side = 2, points = [[0,2],[2,0],[2,2],[0,0]], k = 4",o:"2",time:"O(n² log side)",space:"O(n)",
code:C(`
class Solution:
    def maxDistance(self, side, points, k):
        def pos(p):
            x, y = p
            if y == 0:
                return x
            if x == side:
                return side + y
            if y == side:
                return 2 * side + (side - x)
            return 3 * side + (side - y)
        def dist(a, b):
            return abs(a[0] - b[0]) + abs(a[1] - b[1])
        pts = sorted(points, key=pos)
        n = len(pts)
        def ok(d):
            for st in range(n):
                cur = st
                cnt = 1
                while cnt < k:
                    j = cur + 1
                    while j < st + n and dist(pts[j % n], pts[cur % n]) < d:
                        j += 1
                    if j >= st + n:
                        break
                    cur = j
                    cnt += 1
                if cnt == k and dist(pts[cur % n], pts[st]) >= d:
                    return True
            return False
        lo, hi = 0, 2 * side
        while lo < hi:
            mid = (lo + hi + 1) // 2
            if ok(mid):
                lo = mid
            else:
                hi = mid - 1
        return lo
`)});
lite({id:147,slug:"insertion-sort-list",title:"Insertion Sort List",level:"Medium",topic:LL,name:"Insert each node into the sorted part",
w:"[4,2,1,3] → [1,2,3,4].",k:"Keep a dummy head for the sorted list. Take the nodes one by one; walk the sorted part to the first node larger than the current value and splice the node in before it.",
i:"head = [4,2,1,3]",o:"[1, 2, 3, 4]",time:"O(n²)",space:"O(1)",
code:C(`
class Solution:
    def insertionSortList(self, head):
        dummy = ListNode(0)
        cur = head
        while cur:
            nxt = cur.next
            prev = dummy
            while prev.next and prev.next.val < cur.val:
                prev = prev.next
            cur.next = prev.next
            prev.next = cur
            cur = nxt
        return dummy.next
`)});
lite({id:3660,slug:"jump-game-ix",title:"Jump Game IX",level:"Medium",topic:ARR,name:"Prefix maximum and suffix minimum",
w:"[2,1,3] → [2,2,3].",k:"Jump right to a smaller value or left to a larger one. A boundary between i and i+1 can be crossed in the right direction exactly when the largest value on the left is greater than the smallest value on the right. Scan from the right: ans[i] = ans[i+1] if prefix max of 0…i exceeds the suffix min of i+1…, otherwise the prefix max itself.",
i:"nums = [2,1,3]",o:"[2, 2, 3]",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def maxValue(self, nums):
        n = len(nums)
        pre = nums[:]
        for i in range(1, n):
            pre[i] = max(pre[i - 1], nums[i])
        suf = nums[:]
        for i in range(n - 2, -1, -1):
            suf[i] = min(suf[i + 1], nums[i])
        ans = [0] * n
        ans[-1] = pre[-1]
        for i in range(n - 2, -1, -1):
            ans[i] = ans[i + 1] if pre[i] > suf[i + 1] else pre[i]
        return ans
`)});
lite({id:1441,slug:"build-an-array-with-stack-operations",title:"Build an Array With Stack Operations",level:"Medium",topic:STK,name:"Push every number, pop the ones not wanted",
w:"target [1,3], n=3 → Push, Push, Pop, Push.",k:"Read the numbers 1, 2, 3, … in order. Always Push; if the number is not the next target value, Pop it again. Stop after the last target value.",
i:"target = [1,3], n = 3",o:"['Push', 'Push', 'Pop', 'Push']",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def buildArray(self, target, n):
        ops = []
        want = 0
        for x in range(1, n + 1):
            if want == len(target):
                break
            ops.append("Push")
            if x == target[want]:
                want += 1
            else:
                ops.append("Pop")
        return ops
`)});
lite({id:1497,slug:"check-if-array-pairs-are-divisible-by-k",title:"Check If Array Pairs Are Divisible by k",level:"Medium",topic:HM,name:"Remainder counts must mirror each other",
w:"[1,2,3,4,5,10,6,7,8,9], k=5 → true.",k:"Pairs add up to a multiple of k when remainders r and k − r match up. Count the remainders: the count of remainder r must equal the count of k − r; remainder 0 (and k/2 for even k) must appear an even number of times.",
i:"arr = [1,2,3,4,5,10,6,7,8,9], k = 5",o:"true",time:"O(n)",space:"O(k)",
code:C(`
class Solution:
    def canArrange(self, arr, k):
        cnt = Counter(x % k for x in arr)
        if cnt[0] % 2:
            return False
        for r in range(1, k):
            if r == k - r:
                if cnt[r] % 2:
                    return False
            elif cnt[r] != cnt[k - r]:
                return False
        return True
`)});
lite({id:598,slug:"range-addition-ii",title:"Range Addition II",level:"Easy",topic:MX,name:"The top-left overlap of all operations",
w:"3 × 3, ops [[2,2],[3,3]] → the cell block 2 × 2 is added to most → 4.",k:"Each operation adds 1 to the top-left a × b block. The cells incremented by every operation form the overlap, a rectangle of size min(a) × min(b); its area is the count of maximum values (the whole matrix if there are no operations).",
i:"m = 3, n = 3, ops = [[2,2],[3,3]]",o:"4",time:"O(k)",space:"O(1)",
code:C(`
class Solution:
    def maxCount(self, m, n, ops):
        for a, b in ops:
            m, n = min(m, a), min(n, b)
        return m * n
`)});
lite({id:2952,slug:"minimum-number-of-coins-to-be-added",title:"Minimum Number of Coins to be Added",level:"Medium",topic:GD,name:"Patch the first unreachable amount",
w:"coins [1,4,10], target 19 → add 2 and 8 → 2.",k:"Keep reach = the largest amount such that every value 1…reach can be formed. Sort the coins. If the next coin is ≤ reach + 1 it extends the reach by its value; otherwise add a coin of value reach + 1 (doubling the reach). Continue until reach ≥ target.",
i:"coins = [1,4,10], target = 19",o:"2",time:"O(n log n + log target)",space:"O(1)",
code:C(`
class Solution:
    def minimumAddedCoins(self, coins, target):
        coins.sort()
        reach = 0
        added = 0
        i = 0
        while reach < target:
            if i < len(coins) and coins[i] <= reach + 1:
                reach += coins[i]
                i += 1
            else:
                reach += reach + 1
                added += 1
        return added
`)});
lite({id:1654,slug:"minimum-jumps-to-reach-home",title:"Minimum Jumps to Reach Home",level:"Medium",topic:GR,name:"BFS (Breadth-First Search) on (position, came-from-a-back-jump)",
w:"a=3, b=15, x=9: three jumps forward (3, 6, 9) reach home → 3.",k:"From position p you jump forward a, or backward b (never two backward jumps in a row, never to a forbidden spot, never below 0). Search states (position, last move was backward). Bound the positions by max(x, forbidden) + a + b.",
i:"forbidden = [14,4,18,1,15], a = 3, b = 15, x = 9",o:"3",time:"O(limit)",space:"O(limit)",
code:C(`
class Solution:
    def minimumJumps(self, forbidden, a, b, x):
        bad = set(forbidden)
        limit = max(max(forbidden, default=0), x) + a + b
        q = deque([(0, False, 0)])
        seen = {(0, False)}
        while q:
            pos, back, d = q.popleft()
            if pos == x:
                return d
            nxt = [(pos + a, False)]
            if not back:
                nxt.append((pos - b, True))
            for p, bk in nxt:
                if 0 <= p <= limit and p not in bad and (p, bk) not in seen:
                    seen.add((p, bk))
                    q.append((p, bk, d + 1))
        return -1
`)});
lite({id:557,slug:"reverse-words-in-a-string-iii",title:"Reverse Words in a String III",level:"Easy",topic:ARR,name:"Reverse each word, keep the order",
w:"'Let's take LeetCode contest' → \"s'teL ekat edoCteeL tsetnoc\".",k:"Split on spaces, reverse every word and join with spaces again.",
i:"s = \"Let's take LeetCode contest\"",o:"\"s'teL ekat edoCteeL tsetnoc\"",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def reverseWords(self, s):
        return ' '.join(w[::-1] for w in s.split(' '))
`)});
lite({id:3838,slug:"weighted-word-mapping",title:"Weighted Word Mapping",level:"Easy",topic:ARR,name:"Weight mod 26, mapped from the back of the alphabet",
w:"'abcd' weighs 5+3+12+14 = 34 → 34 % 26 = 8 → 'r'.",k:"The weight of a word is the sum of its letters' weights. Take it modulo 26 and map 0 → 'z', 1 → 'y', …, 25 → 'a' (the character with code 122 − r). Join the mapped letters.",
i:"words = [\"abcd\",\"def\",\"xyz\"], weights = [5,3,12,14,1,2,3,2,10,6,6,9,7,8,7,10,8,9,6,9,9,8,3,7,7,2]",o:"\"rij\"",time:"O(total length)",space:"O(n)",
code:C(`
class Solution:
    def mapWordWeights(self, words, weights):
        out = []
        for w in words:
            total = sum(weights[ord(c) - 97] for c in w)
            out.append(chr(122 - total % 26))
        return ''.join(out)
`)});
lite({id:1833,slug:"maximum-ice-cream-bars",title:"Maximum Ice Cream Bars",level:"Medium",topic:GD,name:"Buy the cheapest first",
w:"costs [1,3,2,4,1], 7 coins → 1,1,2,3 = 7 → 4 bars.",k:"To buy as many as possible, buy the cheapest first. Sort the costs and keep buying while the coins last.",
i:"costs = [1,3,2,4,1], coins = 7",o:"4",time:"O(n log n)",space:"O(1)",
code:C(`
class Solution:
    def maxIceCream(self, costs, coins):
        bars = 0
        for c in sorted(costs):
            if c > coins:
                break
            coins -= c
            bars += 1
        return bars
`)});
lite({id:1189,slug:"maximum-number-of-balloons",title:"Maximum Number of Balloons",level:"Easy",topic:HM,name:"Limiting letter among b, a, l (twice), o (twice), n",
w:"'nlaebolko' → 1 balloon.",k:"'balloon' needs b, a, n once and l, o twice. Count the letters; the number of words is the minimum of count[b], count[a], count[n], count[l] // 2, count[o] // 2.",
i:"text = \"nlaebolko\"",o:"1",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def maxNumberOfBalloons(self, text):
        c = Counter(text)
        return min(c['b'], c['a'], c['n'], c['l'] // 2, c['o'] // 2)
`)});
lite({id:3699,slug:"number-of-zigzag-arrays-i",title:"Number of ZigZag Arrays I",level:"Hard",topic:DP,name:"dp by last value and direction with prefix sums",
w:"n=3, range [4,5] → [4,5,4] and [5,4,5] → 2.",k:"A zigzag alternates up and down. Let up[v] / down[v] be the number of valid arrays so far ending in value v after an up-step / down-step. A new up-step to v comes from any earlier down-ending smaller value; a down-step to v from an earlier up-ending larger value. Prefix sums make each layer O(range). Start with both directions allowed for length 2 and sum at the end, modulo 1e9+7.",
i:"n = 3, l = 4, r = 5",o:"2",time:"O(n·(r − l))",space:"O(r − l)",
code:C(`
class Solution:
    def zigZagArrays(self, n, l, r):
        MOD = 10**9 + 7
        size = r - l + 1
        up = [0] * size
        down = [0] * size
        for v in range(size):
            up[v] = v
            down[v] = size - 1 - v
        for _ in range(n - 2):
            new_up = [0] * size
            new_down = [0] * size
            run = 0
            for v in range(size):
                new_up[v] = run
                run = (run + down[v]) % MOD
            run = 0
            for v in range(size - 1, -1, -1):
                new_down[v] = run
                run = (run + up[v]) % MOD
            up, down = new_up, new_down
        return (sum(up) + sum(down)) % MOD
`)});
lite({id:3737,slug:"count-subarrays-with-majority-element-i",title:"Count Subarrays With Majority Element I",level:"Medium",topic:PS,name:"+1 / −1 prefix sums, count pairs with positive sum",
w:"[1,2,2,3], target 2 → 5 subarrays.",k:"Map each element to +1 if it equals target and −1 otherwise. A subarray has target as majority exactly when its sum is positive, i.e. prefix[j+1] − prefix[i] > 0. With n ≤ 1000, compare all pairs of prefix sums.",
i:"nums = [1,2,2,3], target = 2",o:"5",time:"O(n²)",space:"O(n)",
code:C(`
class Solution:
    def countMajoritySubarrays(self, nums, target):
        pref = [0]
        for x in nums:
            pref.append(pref[-1] + (1 if x == target else -1))
        n = len(nums)
        return sum(1 for i in range(n + 1) for j in range(i + 1, n + 1) if pref[j] > pref[i])
`)});
lite({id:1793,slug:"maximum-score-of-a-good-subarray",title:"Maximum Score of a Good Subarray",level:"Hard",topic:TP,name:"Expand from k, always toward the larger neighbour",
w:"[1,4,3,7,4,5], k=3 → subarray [1..5], min 3, length 5 → 15.",k:"The subarray must contain index k. Start with the window [k, k] and expand one step at a time toward the side whose next value is larger (this keeps the minimum as large as possible). After each step score = window minimum × window length; keep the best.",
i:"nums = [1,4,3,7,4,5], k = 3",o:"15",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def maximumScore(self, nums, k):
        n = len(nums)
        left = right = k
        low = nums[k]
        best = low
        while left > 0 or right < n - 1:
            if left == 0:
                right += 1
            elif right == n - 1:
                left -= 1
            elif nums[left - 1] < nums[right + 1]:
                right += 1
            else:
                left -= 1
            low = min(low, nums[left], nums[right])
            best = max(best, low * (right - left + 1))
        return best
`)});
lite({id:2306,slug:"naming-a-company",title:"Naming a Company",level:"Hard",topic:HM,name:"Group suffixes by first letter, count swappable pairs",
w:"['coffee','donuts','time','toffee'] → 6 valid names.",k:"Swapping the first letters of two ideas gives a valid name when both new words are not in the original list. Group the suffixes by first letter. For two letters a and b, let c = number of suffixes they share; the valid pairs are (|A| − c)·(|B| − c), counted twice for the two orders. Sum over all letter pairs.",
i:"ideas = [\"coffee\",\"donuts\",\"time\",\"toffee\"]",o:"6",time:"O(26²·n)",space:"O(n)",
code:C(`
class Solution:
    def distinctNames(self, ideas):
        groups = defaultdict(set)
        for w in ideas:
            groups[w[0]].add(w[1:])
        letters = list(groups)
        total = 0
        for i in range(len(letters)):
            for j in range(i + 1, len(letters)):
                a, b = groups[letters[i]], groups[letters[j]]
                shared = len(a & b)
                total += 2 * (len(a) - shared) * (len(b) - shared)
        return total
`)});
