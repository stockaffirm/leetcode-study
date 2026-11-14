const {lite}=require("./lib");
const C=s=>s.replace(/^\n/,"").replace(/\n$/,"").split("\n");
const ARR="Array / String",HM="Hash Map / Set",STK="Stack / Monotonic Stack",BT="Binary Tree",GR="Graph",HP="Heap",DP="Dynamic Programming",GD="Greedy",MB="Math / Bit Manipulation",BS="Binary Search",SRT="Sorting",SW="Sliding Window",MX="Matrix",UF="Union Find / Segment Tree",TP="Two Pointers",IV="Intervals",BTK="Backtracking",DS="Design",LL="Linked List",TR="Trie",PS="Prefix Sum";
// ---- Microsoft (5)
lite({id:1855,slug:"maximum-distance-between-a-pair-of-values",title:"Maximum Distance Between a Pair of Values",level:"Medium",topic:TP,name:"Two pointers on the two non-increasing arrays",
w:"nums1 [55,30,5,4,2], nums2 [100,20,10,10,5] → (2,4): 5 ≤ 5 → distance 2.",k:"Both arrays are non-increasing. A pair (i, j) is valid when i ≤ j and nums1[i] ≤ nums2[j]. Keep i and j; while nums1[i] > nums2[j] advance i, otherwise record j − i and advance j.",
i:"nums1 = [55,30,5,4,2], nums2 = [100,20,10,10,5]",o:"2",time:"O(n + m)",space:"O(1)",
code:C(`
class Solution:
    def maxDistance(self, nums1, nums2):
        i = j = best = 0
        while i < len(nums1) and j < len(nums2):
            if nums1[i] <= nums2[j]:
                best = max(best, j - i)
                j += 1
            else:
                i += 1
                j = max(j, i)
        return best
`)});
lite({id:937,slug:"reorder-data-in-log-files",title:"Reorder Data in Log Files",level:"Medium",topic:SRT,name:"Sort letter logs by content, keep digit logs in place at the end",
w:"['dig1 8 1 5 1','let1 art can','dig2 3 6','let2 own kit dig','let3 art zero'] → letter logs first.",k:"Each log is an identifier and then words. A log is a digit-log if the first word after the identifier starts with a digit. Letter-logs come first, sorted by their content and then by identifier on ties; digit-logs follow in their original order.",
i:"logs = [\"dig1 8 1 5 1\",\"let1 art can\",\"dig2 3 6\",\"let2 own kit dig\",\"let3 art zero\"]",o:"['let1 art can', 'let3 art zero', 'let2 own kit dig', 'dig1 8 1 5 1', 'dig2 3 6']",time:"O(n log n)",space:"O(n)",
code:C(`
class Solution:
    def reorderLogFiles(self, logs):
        letters, digits = [], []
        for log in logs:
            ident, rest = log.split(' ', 1)
            if rest[0].isdigit():
                digits.append(log)
            else:
                letters.append((rest, ident, log))
        letters.sort()
        return [log for _, _, log in letters] + digits
`)});
lite({id:2784,slug:"check-if-array-is-good",title:"Check if Array is Good",level:"Easy",topic:HM,name:"Compare with base[n]",
w:"[1,3,3,2] → base[3] = [1,2,3,3] → true.",k:"base[n] has length n + 1 and contains 1…n−1 once each and n twice. Take n = max(nums), check the length is n + 1 and the sorted array equals 1, 2, …, n−1, n, n.",
i:"nums = [1,3,3,2]",o:"true",time:"O(n log n)",space:"O(n)",
code:C(`
class Solution:
    def isGood(self, nums):
        n = max(nums)
        return sorted(nums) == list(range(1, n)) + [n, n]
`)});
lite({id:1313,slug:"decompress-run-length-encoded-list",title:"Decompress Run-Length Encoded List",level:"Easy",topic:ARR,name:"Repeat each value freq times",
w:"[1,2,3,4] → [2,4,4,4].",k:"The list is pairs (frequency, value). For each pair append value frequency times.",
i:"nums = [1,2,3,4]",o:"[2, 4, 4, 4]",time:"O(output)",space:"O(output)",
code:C(`
class Solution:
    def decompressRLElist(self, nums):
        res = []
        for freq, val in zip(nums[0::2], nums[1::2]):
            res += [val] * freq
        return res
`)});
lite({id:3946,slug:"maximum-number-of-items-from-sale-i",title:"Maximum Number of Items From Sale I",level:"Medium",topic:DP,name:"Knapsack: first copy gains 1 + free copies, extra copies gain 1",
w:"items [[6,2],[2,6],[3,4]], budget 9 → 2 copies of item 0 and 1 of item 2 → 4 copies.",k:"Buying item i at least once gives one free copy of every other item whose factor is a multiple of factor_i; that number g_i does not depend on what else is bought. So the first copy of item i costs price_i and gains 1 + g_i, and every further copy costs price_i and gains 1. Run a knapsack over the budget: for each item, first[b] = max(dp[b − p] + 1 + g, first[b − p] + 1) and dp[b] = max(dp[b], first[b]).",
i:"items = [[6,2],[2,6],[3,4]], budget = 9",o:"4",time:"O(n·budget)",space:"O(budget)",
code:C(`
class Solution:
    def maximumSaleItems(self, items, budget):
        n = len(items)
        free = [sum(1 for j in range(n) if j != i and items[j][0] % items[i][0] == 0) for i in range(n)]
        NEG = float('-inf')
        dp = [0] * (budget + 1)
        for i, (_, p) in enumerate(items):
            first = [NEG] * (budget + 1)
            for b in range(p, budget + 1):
                first[b] = max(dp[b - p] + 1 + free[i], first[b - p] + 1)
            dp = [max(dp[b], first[b]) for b in range(budget + 1)]
        return max(dp)
`)});
lite({id:3509,slug:"maximum-product-of-subsequences-with-an-alternating-sum-equal-to-k",title:"Maximum Product of Subsequences With an Alternating Sum Equal to K",level:"Hard",topic:DP,name:"Reachable set of (alternating sum, capped product, next sign)",
w:"nums [1,2,3], k=2, limit 10 → 1 − 2 + 3 = 2 with product 6 → 6.",k:"Build the set of reachable states (alternating sum, product, sign of the next element) element by element, adding each element either as a new start or after an existing state. Cap products at limit + 1 so that a later 0 can still bring them back down to 0 (0 · anything = 0). At the end take the largest product ≤ limit among states whose sum is k.",
i:"nums = [1,2,3], k = 2, limit = 10",o:"6",time:"O(n·states)",space:"O(states)",
code:C(`
class Solution:
    def maxProduct(self, nums, k, limit):
        cap = limit + 1
        states = set()
        for x in nums:
            new = set(states)
            new.add((x, min(x, cap), 1))
            for s, p, sign in states:
                new.add((s + x if sign == 0 else s - x, min(p * x, cap), 1 - sign))
            states = new
        best = -1
        for s, p, _ in states:
            if s == k and p <= limit:
                best = max(best, p)
        return best
`)});
lite({id:2940,slug:"find-building-where-alice-and-bob-can-meet",title:"Find Building Where Alice and Bob Can Meet",level:"Hard",topic:STK,name:"Offline queries with a monotonic stack from the right",
w:"heights [6,4,8,5,2,7], query [0,1] → they meet at building 2 → 2.",k:"A person can move to a later building only if it is taller. For a query (a, b) with a ≤ b: if a == b or heights[a] < heights[b] they meet at b. Otherwise they need the leftmost building c > b taller than max(heights[a], heights[b]) = heights[a]. Sweep the buildings from right to left keeping a stack of 'next greater' candidates (heights decreasing towards the top); answer each query when the sweep reaches b by binary searching the stack for the nearest building taller than the needed height.",
i:"heights = [6,4,8,5,2,7], queries = [[0,1],[0,3],[2,4],[3,4],[2,2]]",o:"[2, 5, -1, 5, 2]",time:"O((n + q) log n)",space:"O(n + q)",
code:C(`
class Solution:
    def leftmostBuildingQueries(self, heights, queries):
        n = len(heights)
        res = [-1] * len(queries)
        by_b = defaultdict(list)
        for qi, (a, b) in enumerate(queries):
            if a > b:
                a, b = b, a
            if a == b or heights[a] < heights[b]:
                res[qi] = b
            else:
                by_b[b].append((heights[a], qi))
        stack = []
        neg = []
        for i in range(n - 1, -1, -1):
            for need, qi in by_b[i]:
                lo, hi = 0, len(stack)
                while lo < hi:
                    mid = (lo + hi) // 2
                    if heights[stack[mid]] > need:
                        lo = mid + 1
                    else:
                        hi = mid
                if lo > 0:
                    res[qi] = stack[lo - 1]
            while stack and heights[stack[-1]] <= heights[i]:
                stack.pop()
            stack.append(i)
        return res
`)});
lite({id:3691,slug:"maximum-total-subarray-value-ii",title:"Maximum Total Subarray Value II",level:"Hard",topic:HP,name:"k largest (max − min) values via a heap over shrinking subarrays",
w:"[1,3,2], k=2 → subarrays [0..1] (2) and [0..2] (2) → 4.",k:"The value max − min of a subarray never increases when it shrinks. So the k largest values can be found like the k largest sums in a sorted matrix: start with the whole array in a max-heap, pop the best subarray, and push its two children (drop the left end, drop the right end) unless already seen. Range max / min come from sparse tables in O(1).",
i:"nums = [1,3,2], k = 2",o:"4",time:"O((n + k) log k)",space:"O(n log n + k)",
code:C(`
class Solution:
    def maxTotalValue(self, nums, k):
        n = len(nums)
        hi_t = [nums[:]]
        lo_t = [nums[:]]
        j = 1
        while (1 << j) <= n:
            ph, pl = hi_t[-1], lo_t[-1]
            half = 1 << (j - 1)
            hi_t.append([max(ph[i], ph[i + half]) for i in range(n - (1 << j) + 1)])
            lo_t.append([min(pl[i], pl[i + half]) for i in range(n - (1 << j) + 1)])
            j += 1
        def value(l, r):
            j = (r - l + 1).bit_length() - 1
            top = max(hi_t[j][l], hi_t[j][r - (1 << j) + 1])
            bottom = min(lo_t[j][l], lo_t[j][r - (1 << j) + 1])
            return top - bottom
        heap = [(-value(0, n - 1), 0, n - 1)]
        seen = {(0, n - 1)}
        total = 0
        for _ in range(k):
            v, l, r = heappop(heap)
            total -= v
            for a, b in ((l + 1, r), (l, r - 1)):
                if a <= b and (a, b) not in seen:
                    seen.add((a, b))
                    heappush(heap, (-value(a, b), a, b))
        return total
`)});
lite({id:2080,slug:"range-frequency-queries",title:"Range Frequency Queries",level:"Medium",topic:DS,name:"Positions per value + binary search",
w:"arr [12,33,4,56,22,2,34,33,22,12,34,56], query(1, 2, 4) → 1, query(0, 11, 33) → 2.",k:"Store, for every value, the sorted list of indices where it occurs. A query(left, right, value) counts the indices in [left, right] with two binary searches.",
i:"RangeFreqQuery([12,33,4,56,22,2,34,33,22,12,34,56]); query(1, 2, 4); query(0, 11, 33)",o:"[1, 2]",time:"O(log n) per query",space:"O(n)",
code:C(`
class RangeFreqQuery:
    def __init__(self, arr):
        self.pos = defaultdict(list)
        for i, x in enumerate(arr):
            self.pos[x].append(i)

    def query(self, left, right, value):
        p = self.pos.get(value, [])
        return bisect_right(p, right) - bisect_left(p, left)
`)});
lite({id:1796,slug:"second-largest-digit-in-a-string",title:"Second Largest Digit in a String",level:"Easy",topic:HM,name:"Distinct digits, sorted",
w:"'dfa12321afd' → digits 1, 2, 3 → second largest 2.",k:"Collect the distinct digit characters, sort them, and return the second largest (or −1 when fewer than two exist).",
i:"s = \"dfa12321afd\"",o:"2",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def secondHighest(self, s):
        digits = sorted({int(c) for c in s if c.isdigit()})
        return digits[-2] if len(digits) >= 2 else -1
`)});
lite({id:3668,slug:"restore-finishing-order",title:"Restore Finishing Order",level:"Easy",topic:ARR,name:"Filter the finishing order by friend",
w:"order [3,1,2,5,4], friends [1,3,4] → [3,1,4].",k:"Keep the participants of order that are friends, in the same order.",
i:"order = [3,1,2,5,4], friends = [1,3,4]",o:"[3, 1, 4]",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def recoverOrder(self, order, friends):
        mine = set(friends)
        return [x for x in order if x in mine]
`)});
lite({id:1036,slug:"escape-a-large-maze",title:"Escape a Large Maze",level:"Hard",topic:GR,name:"Two bounded BFS (Breadth-First Search) runs: enclosed or escaped",
w:"blocked [[0,1],[1,0]], source [0,0], target [0,2] → the source is sealed in → false.",k:"The grid is 10⁶ × 10⁶ but there are at most 200 blocked cells. They can enclose at most len·(len − 1)/2 cells. Run a BFS (Breadth-First Search) from the source and from the target, each stopping when it has visited more than that many cells (it escaped the enclosure) or when it reaches the other point. The target is reachable if both searches escape or one finds the other.",
i:"blocked = [[0,1],[1,0]], source = [0,0], target = [0,2]",o:"false",time:"O(B²)",space:"O(B²)",
code:C(`
class Solution:
    def isEscapePossible(self, blocked, source, target):
        wall = {tuple(b) for b in blocked}
        limit = len(blocked) * (len(blocked) - 1) // 2
        N = 10**6
        def bfs(start, goal):
            start, goal = tuple(start), tuple(goal)
            seen = {start}
            q = deque([start])
            while q:
                x, y = q.popleft()
                if (x, y) == goal:
                    return True
                if len(seen) > limit:
                    return True
                for a, b in ((x + 1, y), (x - 1, y), (x, y + 1), (x, y - 1)):
                    if 0 <= a < N and 0 <= b < N and (a, b) not in wall and (a, b) not in seen:
                        seen.add((a, b))
                        q.append((a, b))
            return False
        return bfs(source, target) and bfs(target, source)
`)});
lite({id:3739,slug:"count-subarrays-with-majority-element-ii",title:"Count Subarrays With Majority Element II",level:"Hard",topic:UF,name:"+1 / −1 prefix sums counted with a Fenwick tree",
w:"[1,2,2,3], target 2 → 5.",k:"Map each element to +1 if it equals target and −1 otherwise; a subarray has target as majority exactly when its sum is positive, i.e. prefix[j] > prefix[i] for i < j. Sweep j and count earlier prefixes smaller than the current one with a Fenwick tree (binary indexed tree) over the shifted prefix values.",
i:"nums = [1,2,2,3], target = 2",o:"5",time:"O(n log n)",space:"O(n)",
code:C(`
class Solution:
    def countMajoritySubarrays(self, nums, target):
        n = len(nums)
        size = 2 * n + 3
        tree = [0] * (size + 1)
        def add(i):
            i += 1
            while i <= size:
                tree[i] += 1
                i += i & -i
        def query(i):
            i += 1
            total = 0
            while i > 0:
                total += tree[i]
                i -= i & -i
            return total
        offset = n + 1
        pref = 0
        add(pref + offset)
        res = 0
        for x in nums:
            pref += 1 if x == target else -1
            res += query(pref + offset - 1)
            add(pref + offset)
        return res
`)});
lite({id:2652,slug:"sum-multiples",title:"Sum Multiples",level:"Easy",topic:MB,name:"Inclusion–exclusion over 3, 5 and 7",
w:"n=7 → 3 + 5 + 6 + 7 = 21.",k:"Sum the numbers up to n divisible by 3, 5 or 7. The sum of multiples of d up to n is d·m(m+1)/2 with m = n // d. Add the sums for 3, 5, 7, subtract those for 15, 21, 35 and add back the sum for 105.",
i:"n = 7",o:"21",time:"O(1)",space:"O(1)",
code:C(`
class Solution:
    def sumOfMultiples(self, n):
        def total(d):
            m = n // d
            return d * m * (m + 1) // 2
        return total(3) + total(5) + total(7) - total(15) - total(21) - total(35) + total(105)
`)});
lite({id:2063,slug:"vowels-of-all-substrings",title:"Vowels of All Substrings",level:"Medium",topic:MB,name:"A vowel at index i is in (i + 1)(n − i) substrings",
w:"'aba' → 'a' at 0 and 2 → 3 + 3 = 6.",k:"For each vowel at index i the number of substrings containing it is (i + 1) choices for the start times (n − i) choices for the end. Sum these over all vowels.",
i:"word = \"aba\"",o:"6",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def countVowels(self, word):
        n = len(word)
        return sum((i + 1) * (n - i) for i, c in enumerate(word) if c in 'aeiou')
`)});
lite({id:3969,slug:"valid-subarrays-with-matching-sum-digits-i",title:"Valid Subarrays With Matching Sum Digits I",level:"Medium",topic:PS,name:"Check the first and last digit of every subarray sum",
w:"[1,100,1], x=1 → sums 1, 101, 101, 1 → 4.",k:"With at most 1500 elements, extend every start index to the right keeping a running sum; count the subarrays whose sum starts and ends with the digit x.",
i:"nums = [1,100,1], x = 1",o:"4",time:"O(n²)",space:"O(1)",
code:C(`
class Solution:
    def countValidSubarrays(self, nums, x):
        digit = str(x)
        count = 0
        for i in range(len(nums)):
            total = 0
            for j in range(i, len(nums)):
                total += nums[j]
                s = str(total)
                if s[0] == digit and s[-1] == digit:
                    count += 1
        return count
`)});
lite({id:2760,slug:"longest-even-odd-subarray-with-threshold",title:"Longest Even Odd Subarray With Threshold",level:"Easy",topic:SW,name:"Start at an even number ≤ threshold, extend while parity alternates",
w:"[3,2,5,4], threshold 5 → [2,5,4] → 3.",k:"The subarray must start with an even number, alternate parity, and have all numbers ≤ threshold. For each start that qualifies extend while the next number alternates in parity and stays within the threshold; keep the longest.",
i:"nums = [3,2,5,4], threshold = 5",o:"3",time:"O(n²)",space:"O(1)",
code:C(`
class Solution:
    def longestAlternatingSubarray(self, nums, threshold):
        best = 0
        for i in range(len(nums)):
            if nums[i] % 2 or nums[i] > threshold:
                continue
            j = i + 1
            while j < len(nums) and nums[j] % 2 != nums[j - 1] % 2 and nums[j] <= threshold:
                j += 1
            best = max(best, j - i)
        return best
`)});
lite({id:726,slug:"number-of-atoms",title:"Number of Atoms",level:"Hard",topic:STK,name:"Stack of counters for the parentheses",
w:"'K4(ON(SO3)2)2' → 'K4N2O14S4'.",k:"Parse the formula with a stack of dictionaries. An element name is an upper-case letter followed by lower-case letters, then an optional count. '(' pushes a new dictionary; ')' reads the multiplier that follows, multiplies the top dictionary and merges it into the one below. Finally print the elements in alphabetical order with counts above 1.",
i:"formula = \"K4(ON(SO3)2)2\"",o:"\"K4N2O14S4\"",time:"O(n²)",space:"O(n)",
code:C(`
class Solution:
    def countOfAtoms(self, formula):
        stack = [defaultdict(int)]
        i = 0
        n = len(formula)
        def number():
            nonlocal i
            j = i
            while j < n and formula[j].isdigit():
                j += 1
            val = int(formula[i:j]) if j > i else 1
            i = j
            return val
        while i < n:
            c = formula[i]
            if c == '(':
                stack.append(defaultdict(int))
                i += 1
            elif c == ')':
                i += 1
                mult = number()
                top = stack.pop()
                for name, cnt in top.items():
                    stack[-1][name] += cnt * mult
            else:
                j = i + 1
                while j < n and formula[j].islower():
                    j += 1
                name = formula[i:j]
                i = j
                stack[-1][name] += number()
        return ''.join(name + (str(c) if c > 1 else '') for name, c in sorted(stack[0].items()))
`)});
lite({id:978,slug:"longest-turbulent-subarray",title:"Longest Turbulent Subarray",level:"Medium",topic:DP,name:"Length of the longest zig-zag ending here",
w:"[9,4,2,10,7,8,8,1,9] → 4 8 ... the longest is 5 (4,2,10,7,8).",k:"A turbulent subarray alternates between rising and falling. Keep up (longest ending with a rise) and down (ending with a fall): a rise extends the previous fall run and the reverse; equal neighbours reset both to 1.",
i:"arr = [9,4,2,10,7,8,8,1,9]",o:"5",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def maxTurbulenceSize(self, arr):
        up = down = best = 1
        for a, b in zip(arr, arr[1:]):
            if b > a:
                up, down = down + 1, 1
            elif b < a:
                up, down = 1, up + 1
            else:
                up = down = 1
            best = max(best, up, down)
        return best
`)});
lite({id:1311,slug:"get-watched-videos-by-your-friends",title:"Get Watched Videos by Your Friends",level:"Medium",topic:GR,name:"BFS (Breadth-First Search) to the given level, then count videos",
w:"Level 1 friends of person 0 watched 'C' and 'B','C' → ['B','C'].",k:"Run a BFS (Breadth-First Search) over the friendship graph from person id until reaching the given level; the people exactly at that level are collected. Count the videos they watched and return them sorted by frequency and then alphabetically.",
i:"watchedVideos = [[\"A\",\"B\"],[\"C\"],[\"B\",\"C\"],[\"D\"]], friends = [[1,2],[0,3],[0,3],[1,2]], id = 0, level = 1",o:"['B', 'C']",time:"O(n + e + v log v)",space:"O(n + v)",
code:C(`
class Solution:
    def watchedVideosByFriends(self, watchedVideos, friends, id, level):
        seen = {id}
        frontier = [id]
        for _ in range(level):
            nxt = []
            for u in frontier:
                for v in friends[u]:
                    if v not in seen:
                        seen.add(v)
                        nxt.append(v)
            frontier = nxt
        cnt = Counter(v for u in frontier for v in watchedVideos[u])
        return sorted(cnt, key=lambda v: (cnt[v], v))
`)});
lite({id:2670,slug:"find-the-distinct-difference-array",title:"Find the Distinct Difference Array",level:"Easy",topic:HM,name:"Distinct counts of the prefix and suffix",
w:"[1,2,3,4,5] → [-3,-1,1,3,5].",k:"For index i return (distinct values in nums[0..i]) − (distinct values in nums[i+1..]). Precompute the suffix distinct counts, then sweep a prefix set.",
i:"nums = [1,2,3,4,5]",o:"[-3, -1, 1, 3, 5]",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def distinctDifferenceArray(self, nums):
        n = len(nums)
        suffix = [0] * (n + 1)
        seen = set()
        for i in range(n - 1, -1, -1):
            seen.add(nums[i])
            suffix[i] = len(seen)
        prefix = set()
        res = []
        for i, x in enumerate(nums):
            prefix.add(x)
            res.append(len(prefix) - suffix[i + 1])
        return res
`)});
lite({id:3513,slug:"number-of-unique-xor-triplets-i",title:"Number of Unique XOR Triplets I",level:"Medium",topic:MB,name:"A permutation of 1…n: 2^(bit length) values for n ≥ 3",
w:"[1,2] → 2; [3,1,2] → 4.",k:"nums is a permutation of 1…n and triplets may repeat indices. For n ≤ 2 the answer is n. For n ≥ 3 every value from 0 up to the next power of two minus 1 can be formed, so the answer is 2^(number of bits of n).",
i:"nums = [3,1,2]",o:"4",time:"O(1)",space:"O(1)",
code:C(`
class Solution:
    def uniqueXorTriplets(self, nums):
        n = len(nums)
        return n if n <= 2 else 1 << n.bit_length()
`)});
lite({id:3614,slug:"process-string-with-special-operations-ii",title:"Process String with Special Operations II",level:"Hard",topic:ARR,name:"Track lengths, then undo the operations on the index k",
w:"'a#b%*', k=1 → the final string is 'ba' → 'a'.",k:"The result can be astronomically long, so track only its length after each operation (capped). Then walk the operations backwards with the index k: a letter that is the last character of its string ends the search; '*' keeps k; '#' (the string was doubled) moves k into the first copy; '%' (reverse) maps k to length − 1 − k. Return '.' if k is out of range.",
i:"s = \"a#b%*\", k = 1",o:"\"a\"",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def processStr(self, s, k):
        CAP = 4 * 10**15
        lengths = [0]
        for c in s:
            cur = lengths[-1]
            if c == '*':
                cur = max(0, cur - 1)
            elif c == '#':
                cur = min(CAP, 2 * cur)
            elif c != '%':
                cur += 1
            lengths.append(cur)
        if k >= lengths[-1]:
            return '.'
        for i in range(len(s) - 1, -1, -1):
            c = s[i]
            now, before = lengths[i + 1], lengths[i]
            if c == '#':
                if k >= before:
                    k -= before
            elif c == '%':
                k = now - 1 - k
            elif c != '*' and k == now - 1:
                return c
        return '.'
`)});
lite({id:2381,slug:"shifting-letters-ii",title:"Shifting Letters II",level:"Medium",topic:PS,name:"Difference array of the shifts",
w:"'abc', shifts [[0,1,0],[1,2,1],[0,2,1]] → 'ace'.",k:"Each shift [l, r, direction] moves the letters in l…r forward (1) or backward (0). Record +1 / −1 at l and the opposite at r + 1 in a difference array, take the running sum and move every letter by it (mod 26).",
i:"s = \"abc\", shifts = [[0,1,0],[1,2,1],[0,2,1]]",o:"\"ace\"",time:"O(n + q)",space:"O(n)",
code:C(`
class Solution:
    def shiftingLetters(self, s, shifts):
        n = len(s)
        diff = [0] * (n + 1)
        for l, r, d in shifts:
            delta = 1 if d else -1
            diff[l] += delta
            diff[r + 1] -= delta
        out = []
        run = 0
        for i, c in enumerate(s):
            run += diff[i]
            out.append(chr((ord(c) - 97 + run) % 26 + 97))
        return ''.join(out)
`)});
lite({id:1561,slug:"maximum-number-of-coins-you-can-get",title:"Maximum Number of Coins You Can Get",level:"Medium",topic:GD,name:"Sort, skip the largest of each triple, take the second",
w:"[2,4,1,2,7,8] → triples (8,7,1) and (4,2,2) → 7 + 2 = 9.",k:"In each round Alice takes the largest pile, you take the next largest and Bob takes the smallest. To maximise your total, sort the piles and always pick the second largest of a triple: sort, then take every second pile from the end while Bob takes the smallest n/3 piles.",
i:"piles = [2,4,1,2,7,8]",o:"9",time:"O(n log n)",space:"O(1)",
code:C(`
class Solution:
    def maxCoins(self, piles):
        piles.sort()
        return sum(piles[len(piles) // 3::2])
`)});
lite({id:491,slug:"non-decreasing-subsequences",title:"Non-decreasing Subsequences",level:"Medium",topic:BTK,name:"Backtracking without repeating a value at the same depth",
w:"[4,6,7,7] → [4,6], [4,6,7], [4,6,7,7], [4,7], [4,7,7], [6,7], [6,7,7], [7,7].",k:"Build subsequences by backtracking: at each position only take a number that is at least the last taken one, and at one recursion level never choose the same value twice (so equal subsequences are not generated twice). Record every sequence of length ≥ 2; return them sorted.",
i:"nums = [4,6,7,7]",o:"[[4, 6], [4, 6, 7], [4, 6, 7, 7], [4, 7], [4, 7, 7], [6, 7], [6, 7, 7], [7, 7]]",time:"O(2ⁿ·n)",space:"O(n)",
code:C(`
class Solution:
    def findSubsequences(self, nums):
        res = []
        path = []
        def go(start):
            if len(path) >= 2:
                res.append(path[:])
            used = set()
            for i in range(start, len(nums)):
                if nums[i] in used or (path and nums[i] < path[-1]):
                    continue
                used.add(nums[i])
                path.append(nums[i])
                go(i + 1)
                path.pop()
        go(0)
        return sorted(res)
`)});
lite({id:3129,slug:"find-all-possible-stable-binary-arrays-i",title:"Find All Possible Stable Binary Arrays I",level:"Medium",topic:DP,name:"dp over (zeros, ones, last digit) with run lengths ≤ limit",
w:"zero 1, one 1, limit 2 → [0,1] and [1,0] → 2.",k:"Every subarray longer than limit must contain both digits, which means no run of equal digits is longer than limit. Let end0[z][o] / end1[z][o] count arrays with z zeros and o ones ending in 0 / 1. An array ending in a run of t zeros (1 ≤ t ≤ limit) comes from an array ending in 1 with t fewer zeros (or from nothing when it is only zeros). The answer is end0 + end1 at (zero, one), modulo 1e9+7.",
i:"zero = 1, one = 2, limit = 1",o:"1",time:"O(zero·one·limit)",space:"O(zero·one)",
code:C(`
class Solution:
    def numberOfStableArrays(self, zero, one, limit):
        MOD = 10**9 + 7
        end0 = [[0] * (one + 1) for _ in range(zero + 1)]
        end1 = [[0] * (one + 1) for _ in range(zero + 1)]
        for z in range(zero + 1):
            for o in range(one + 1):
                if z == 0 and o == 0:
                    continue
                total = 0
                for t in range(1, min(limit, z) + 1):
                    total += 1 if (z - t == 0 and o == 0) else end1[z - t][o]
                end0[z][o] = total % MOD
                total = 0
                for t in range(1, min(limit, o) + 1):
                    total += 1 if (o - t == 0 and z == 0) else end0[z][o - t]
                end1[z][o] = total % MOD
        return (end0[zero][one] + end1[zero][one]) % MOD
`)});
lite({id:1140,slug:"stone-game-ii",title:"Stone Game II",level:"Medium",topic:DP,name:"dp(i, M) with suffix sums: take up to 2M piles",
w:"[2,7,9,4,4] → Alice gets 10.",k:"Alice starts with M = 1; on a turn the player takes the first X piles (1 ≤ X ≤ 2M) and M becomes max(M, X). Let dp(i, M) be the most stones the player to move can collect from pile i onward: choose X to maximise suffix[i] − dp(i + X, max(M, X)) (take everything else the opponent does not get). The answer is dp(0, 1).",
i:"piles = [2,7,9,4,4]",o:"10",time:"O(n³)",space:"O(n²)",
code:C(`
class Solution:
    def stoneGameII(self, piles):
        n = len(piles)
        suffix = [0] * (n + 1)
        for i in range(n - 1, -1, -1):
            suffix[i] = suffix[i + 1] + piles[i]
        @lru_cache(None)
        def go(i, M):
            if i + 2 * M >= n:
                return suffix[i]
            return max(suffix[i] - go(i + x, max(M, x)) for x in range(1, 2 * M + 1))
        return go(0, 1)
`)});
lite({id:2386,slug:"find-the-k-sum-of-an-array",title:"Find the K-Sum of an Array",level:"Hard",topic:HP,name:"Subtract absolute values: heap over the smallest losses",
w:"[2,4,-2], k=5 → the 5th largest subsequence sum is 2.",k:"The largest subsequence sum is the sum of all positive numbers (M). Every other subsequence sum is M minus some subset of the absolute values (dropping a positive or adding back a negative costs its absolute value). So the k-th largest sum is M − (the (k−1)-th smallest subset sum of the absolute values). Find the smallest subset sums with a heap over the sorted absolute values, expanding each state by 'add the next value' or 'replace the last value by the next one'.",
i:"nums = [2,4,-2], k = 5",o:"2",time:"O(n log n + k log k)",space:"O(n + k)",
code:C(`
class Solution:
    def kSum(self, nums, k):
        top = sum(x for x in nums if x > 0)
        vals = sorted(abs(x) for x in nums)
        heap = [(vals[0], 0)]
        res = top
        for _ in range(k - 1):
            s, i = heappop(heap)
            res = top - s
            if i + 1 < len(vals):
                heappush(heap, (s + vals[i + 1], i + 1))
                heappush(heap, (s - vals[i] + vals[i + 1], i + 1))
        return res
`)});
lite({id:2587,slug:"rearrange-array-to-maximize-prefix-score",title:"Rearrange Array to Maximize Prefix Score",level:"Medium",topic:GD,name:"Sort descending, count positive prefix sums",
w:"[2,-1,0,1,-3,3,-3] → 6 positive prefixes after sorting.",k:"The score is the number of positive prefix sums. Putting the largest numbers first keeps the prefix sums as large as possible for as long as possible: sort descending and count while the running sum stays positive.",
i:"nums = [2,-1,0,1,-3,3,-3]",o:"6",time:"O(n log n)",space:"O(1)",
code:C(`
class Solution:
    def maxScore(self, nums):
        total = score = 0
        for x in sorted(nums, reverse=True):
            total += x
            if total <= 0:
                break
            score += 1
        return score
`)});
lite({id:3875,slug:"construct-uniform-parity-array-i",title:"Construct Uniform Parity Array I",level:"Easy",topic:ARR,name:"Always possible",
w:"[2,3] → [−1, 3] all odd → true.",k:"If any element is odd, make all elements odd: odd elements stay, each even element x becomes x − (an odd element) which is odd. If there is no odd element, the array is already all even. So the answer is always true.",
i:"nums1 = [2,3]",o:"true",time:"O(1)",space:"O(1)",
code:C(`
class Solution:
    def uniformArray(self, nums1):
        has_odd = any(x % 2 for x in nums1)
        all_even = all(x % 2 == 0 for x in nums1)
        return has_odd or all_even
`)});
lite({id:406,slug:"queue-reconstruction-by-height",title:"Queue Reconstruction by Height",level:"Medium",topic:GD,name:"Tallest first, insert at index k",
w:"[[7,0],[4,4],[7,1],[5,0],[6,1],[5,2]] → [[5,0],[7,0],[5,2],[6,1],[4,4],[7,1]].",k:"Person [h, k] has exactly k people in front who are at least as tall. Sort by height descending (and k ascending on ties). Insert each person at index k of the result: taller people are already placed, so k is exactly the number of people in front who are at least as tall, and shorter people inserted later do not change that.",
i:"people = [[7,0],[4,4],[7,1],[5,0],[6,1],[5,2]]",o:"[[5, 0], [7, 0], [5, 2], [6, 1], [4, 4], [7, 1]]",time:"O(n²)",space:"O(n)",
code:C(`
class Solution:
    def reconstructQueue(self, people):
        res = []
        for h, k in sorted(people, key=lambda p: (-p[0], p[1])):
            res.insert(k, [h, k])
        return res
`)});
lite({id:3849,slug:"maximum-bitwise-xor-after-rearrangement",title:"Maximum Bitwise XOR After Rearrangement",level:"Medium",topic:GD,name:"Match opposite bits from the most significant end",
w:"s '101', t '011' → '110'.",k:"To maximise the XOR (exclusive OR), make as many high bits as possible equal to 1: at each position from the left, if s has 0 use a 1 of t (if any remain), if s has 1 use a 0 of t (if any remain); otherwise use whatever is left. Keep counts of the remaining ones and zeros of t.",
i:"s = \"101\", t = \"011\"",o:"\"110\"",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def maximumXor(self, s, t):
        ones = t.count('1')
        zeros = len(t) - ones
        res = []
        for c in s:
            want_one_in_t = c == '0'
            if want_one_in_t and ones:
                ones -= 1
                res.append('1')
            elif not want_one_in_t and zeros:
                zeros -= 1
                res.append('1')
            elif ones:
                ones -= 1
                res.append(str(int(c) ^ 1))
            else:
                zeros -= 1
                res.append(c)
        return ''.join(res)
`)});
lite({id:2164,slug:"sort-even-and-odd-indices-independently",title:"Sort Even and Odd Indices Independently",level:"Easy",topic:SRT,name:"Odd indices descending, even indices ascending",
w:"[4,1,2,3] → [2,3,4,1].",k:"Sort the values at even indices in non-decreasing order and the values at odd indices in non-increasing order, and write them back to their index classes.",
i:"nums = [4,1,2,3]",o:"[2, 3, 4, 1]",time:"O(n log n)",space:"O(n)",
code:C(`
class Solution:
    def sortEvenOdd(self, nums):
        nums[0::2] = sorted(nums[0::2])
        nums[1::2] = sorted(nums[1::2], reverse=True)
        return nums
`)});
lite({id:782,slug:"transform-to-chessboard",title:"Transform to Chessboard",level:"Hard",topic:MX,name:"Count row and column patterns, then count swaps",
w:"[[0,1,1,0],[0,1,1,0],[1,0,0,1],[1,0,0,1]] → 2 swaps.",k:"A swap exchanges two rows or two columns. A chessboard has exactly two row patterns that are complements of each other, and the same for columns, in equal numbers (differing by 1 when n is odd). Check these conditions on the first row and column; then count the positions that differ from the ideal alternating pattern: moves for rows (and the same for columns) is half of the mismatches for even n or the smaller valid choice for odd n.",
i:"board = [[0,1,1,0],[0,1,1,0],[1,0,0,1],[1,0,0,1]]",o:"2",time:"O(n²)",space:"O(n)",
code:C(`
class Solution:
    def movesToChessboard(self, board):
        n = len(board)
        rows = Counter(tuple(r) for r in board)
        cols = Counter(tuple(c) for c in zip(*board))
        for counter in (rows, cols):
            if len(counter) != 2:
                return -1
            (a, ca), (b, cb) = counter.items()
            if abs(ca - cb) > 1 or any(x == y for x, y in zip(a, b)):
                return -1
            if n % 2 == 0 and ca != cb:
                return -1
        def moves(line):
            mismatch = sum(1 for i, v in enumerate(line) if v != i % 2)
            if n % 2 == 0:
                return min(mismatch, n - mismatch) // 2
            return (mismatch if mismatch % 2 == 0 else n - mismatch) // 2
        return moves([r[0] for r in board]) + moves(board[0])
`)});
lite({id:655,slug:"print-binary-tree",title:"Print Binary Tree",level:"Medium",topic:BT,name:"Fill the matrix recursively, children at the quarter points",
w:"[1,2] → [['','1',''],['2','','']].",k:"The matrix has height + 1 rows and 2^(height + 1) − 1 columns. Place the root in the middle of the first row; a node at (r, c) puts its left child at (r + 1, c − 2^(height − r − 1)) and its right child at (r + 1, c + 2^(height − r − 1)).",
i:"root = [1,2]",o:"[['', '1', ''], ['2', '', '']]",time:"O(2^h)",space:"O(2^h)",
code:C(`
class Solution:
    def printTree(self, root):
        def height(node):
            return 0 if not node else 1 + max(height(node.left), height(node.right))
        h = height(root) - 1
        rows, cols = h + 1, 2 ** (h + 1) - 1
        res = [[""] * cols for _ in range(rows)]
        def put(node, r, c):
            if not node:
                return
            res[r][c] = str(node.val)
            step = 2 ** (h - r - 1)
            put(node.left, r + 1, c - step)
            put(node.right, r + 1, c + step)
        put(root, 0, (cols - 1) // 2)
        return res
`)});
lite({id:1492,slug:"the-kth-factor-of-n",title:"The kth Factor of n",level:"Medium",topic:MB,name:"Walk the divisors in increasing order",
w:"n=12, k=3 → factors 1, 2, 3, 4, 6, 12 → 3.",k:"Count the factors of n in increasing order and return the k-th (or −1 if fewer exist). Checking every number up to n is enough for the sizes involved.",
i:"n = 12, k = 3",o:"3",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def kthFactor(self, n, k):
        for d in range(1, n + 1):
            if n % d == 0:
                k -= 1
                if k == 0:
                    return d
        return -1
`)});
