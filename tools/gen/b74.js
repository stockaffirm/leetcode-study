const {lite}=require("./lib");
const C=s=>s.replace(/^\n/,"").replace(/\n$/,"").split("\n");
const ARR="Array / String",HM="Hash Map / Set",STK="Stack / Monotonic Stack",BT="Binary Tree",GR="Graph",HP="Heap",DP="Dynamic Programming",GD="Greedy",MB="Math / Bit Manipulation",BS="Binary Search",SRT="Sorting",SW="Sliding Window",MX="Matrix",UF="Union Find / Segment Tree",TP="Two Pointers",IV="Intervals",BTK="Backtracking",DS="Design",LL="Linked List",TR="Trie",PS="Prefix Sum";
// ---- Microsoft (2)
lite({id:2028,slug:"find-missing-observations",title:"Find Missing Observations",level:"Medium",topic:MB,name:"Missing total split as evenly as possible",
w:"rolls [3,2,4,3], mean 4, n=2 → total must be 24; known 12; missing 12 → [6,6].",k:"The total of all n + m rolls must be mean·(n + m). Subtract the known rolls to get the missing total; it must be between n and 6n. Spread it evenly: every roll gets total // n and the first total % n rolls get one more.",
i:"rolls = [3,2,4,3], mean = 4, n = 2",o:"[6, 6]",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def missingRolls(self, rolls, mean, n):
        missing = mean * (len(rolls) + n) - sum(rolls)
        if not n <= missing <= 6 * n:
            return []
        base, extra = divmod(missing, n)
        return [base + 1] * extra + [base] * (n - extra)
`)});
lite({id:2098,slug:"subsequence-of-size-k-with-the-largest-even-sum",title:"Subsequence of Size K With the Largest Even Sum",level:"Medium",topic:GD,name:"Top k, then swap one element to fix the parity",
w:"[4,1,5,3,1], k=3 → 5 + 4 + 3 = 12 is even → 12.",k:"Sort descending and take the k largest. If the sum is even we are done. Otherwise change the parity by exchanging one chosen element for an unchosen one of the opposite parity with the smallest loss: replace the smallest chosen odd by the largest unchosen even, or the smallest chosen even by the largest unchosen odd; take the better. If neither exchange exists return −1.",
i:"nums = [4,1,5,3,1], k = 3",o:"12",time:"O(n log n)",space:"O(n)",
code:C(`
class Solution:
    def largestEvenSum(self, nums, k):
        nums = sorted(nums, reverse=True)
        chosen, rest = nums[:k], nums[k:]
        total = sum(chosen)
        if total % 2 == 0:
            return total
        best = -1
        odd_in = [x for x in chosen if x % 2]
        even_in = [x for x in chosen if x % 2 == 0]
        even_out = [x for x in rest if x % 2 == 0]
        odd_out = [x for x in rest if x % 2]
        if odd_in and even_out:
            best = max(best, total - min(odd_in) + max(even_out))
        if even_in and odd_out:
            best = max(best, total - min(even_in) + max(odd_out))
        return best
`)});
lite({id:2107,slug:"number-of-unique-flavors-after-sharing-k-candies",title:"Number of Unique Flavors After Sharing K Candies",level:"Medium",topic:SW,name:"Sliding window of the candies given away",
w:"[1,2,2,3,4,3], k=3 → give away 2,3,4 → keep flavours {1,2,3} → 3.",k:"You give k consecutive candies to your sister. Count each flavour's frequency in the whole bag; slide a window of k candies and keep the number of flavours whose frequency inside the window is less than the total. Track the maximum number of flavours that remain.",
i:"candies = [1,2,2,3,4,3], k = 3",o:"3",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def shareCandies(self, candies, k):
        total = Counter(candies)
        window = Counter()
        remaining = len(total)
        best = 0
        for i, c in enumerate(candies):
            window[c] += 1
            if window[c] == total[c]:
                remaining -= 1
            if i >= k:
                out = candies[i - k]
                if window[out] == total[out]:
                    remaining += 1
                window[out] -= 1
            if i >= k - 1:
                best = max(best, remaining)
        return best if k <= len(candies) else len(total)
`)});
lite({id:2208,slug:"minimum-operations-to-halve-array-sum",title:"Minimum Operations to Halve Array Sum",level:"Medium",topic:HP,name:"Always halve the current maximum",
w:"[5,19,8,1] → halve 19, 9.5, 8, 5 … → 3 operations.",k:"Halving the largest number reduces the sum the most. Keep a max-heap of the values and the remaining sum; halve the top until the sum has dropped by at least half of the original.",
i:"nums = [5,19,8,1]",o:"3",time:"O(n log n)",space:"O(n)",
code:C(`
class Solution:
    def halveArray(self, nums):
        heap = [-x for x in nums]
        heapify(heap)
        target = sum(nums) / 2
        removed = 0
        ops = 0
        while removed < target:
            x = -heappop(heap)
            removed += x / 2
            heappush(heap, -x / 2)
            ops += 1
        return ops
`)});
lite({id:2391,slug:"minimum-amount-of-time-to-collect-garbage",title:"Minimum Amount of Time to Collect Garbage",level:"Medium",topic:PS,name:"Pick-up time + travel up to each type's last house",
w:"garbage ['G','P','GP','GG'], travel [2,4,3] → 21.",k:"Each garbage type has its own truck. Every piece takes 1 minute to pick up, so add the total length of all strings. Each truck must drive to the last house that has its type, so add the prefix sum of travel times up to that house for each of M, P and G.",
i:"garbage = [\"G\",\"P\",\"GP\",\"GG\"], travel = [2,4,3]",o:"21",time:"O(total length)",space:"O(n)",
code:C(`
class Solution:
    def garbageCollection(self, garbage, travel):
        pref = [0]
        for t in travel:
            pref.append(pref[-1] + t)
        total = sum(len(g) for g in garbage)
        for kind in 'MPG':
            last = max((i for i, g in enumerate(garbage) if kind in g), default=0)
            total += pref[last]
        return total
`)});
lite({id:2450,slug:"number-of-distinct-binary-strings-after-applying-operations",title:"Number of Distinct Binary Strings After Applying Operations",level:"Medium",topic:MB,name:"One free bit per window position: 2^(n − k + 1)",
w:"s '1001', k=3 → 2^(4−3+1) = 4 strings.",k:"One operation flips a window of k consecutive characters. Applying flips at any subset of the n − k + 1 window positions gives distinct results because each window start determines a unique 'difference' bit. So the answer is 2^(n − k + 1) modulo 1e9+7.",
i:"s = \"1001\", k = 3",o:"4",time:"O(log n)",space:"O(1)",
code:C(`
class Solution:
    def countDistinctStrings(self, s, k):
        return pow(2, len(s) - k + 1, 10**9 + 7)
`)});
lite({id:2599,slug:"make-the-prefix-sum-non-negative",title:"Make the Prefix Sum Non-negative",level:"Medium",topic:HP,name:"Min-heap of negatives; move the most negative to the end",
w:"[3,-5,-2,6]: the prefix sum drops to −2, so move −5 to the end → [3,-2,6,-5] with prefix sums 3,1,7,2 → 1 move.",k:"Moving a number to the end changes prefix sums only before it. Scan left to right keeping the sum and a min-heap of the negative numbers seen. Whenever the sum drops below 0, move the most negative number seen so far to the end (add its absolute value back) and count a move.",
i:"nums = [3,-5,-2,6]",o:"1",time:"O(n log n)",space:"O(n)",
code:C(`
class Solution:
    def makePrefSumNonNegative(self, nums):
        heap = []
        total = moves = 0
        for x in nums:
            total += x
            if x < 0:
                heappush(heap, x)
            if total < 0:
                total -= heappop(heap)
                moves += 1
        return moves
`)});
lite({id:2548,slug:"maximum-price-to-fill-a-bag",title:"Maximum Price to Fill a Bag",level:"Medium",topic:GD,name:"Fractional knapsack by price per weight",
w:"items [[50,1],[10,8]], capacity 5 → take the whole 50 (weight 1) and 4/8 of the second → 55.",k:"Items may be split into parts with proportional price. Sort by price/weight descending and fill the bag: take whole items while they fit, then a fraction of the next one. If the total weight is less than the capacity the bag cannot be filled: −1. Round to 5 decimals.",
i:"items = [[50,1],[10,8]], capacity = 5",o:"55",time:"O(n log n)",space:"O(n)",
code:C(`
class Solution:
    def maxPrice(self, items, capacity):
        if sum(w for _, w in items) < capacity:
            return -1
        total = 0.0
        for price, weight in sorted(items, key=lambda it: it[0] / it[1], reverse=True):
            take = min(weight, capacity)
            total += price * take / weight
            capacity -= take
            if capacity == 0:
                break
        return round(total, 5)
`)});
lite({id:2847,slug:"smallest-number-with-given-digit-product",title:"Smallest Number With Given Digit Product",level:"Medium",topic:GD,name:"Divide by 9, 8, …, 2 and read the digits backwards",
w:"n=105 → 3 · 5 · 7 → '357'.",k:"To make the number small it should have as few digits as possible, with small digits on the left. Divide n by 9 as often as possible, then 8, 7, …, 2, collecting the digits; if n is not 1 afterwards (a prime factor above 7) the answer is '-1'. Sort the collected digits ascending. For n = 1 the answer is '1'.",
i:"n = 105",o:"\"357\"",time:"O(log n)",space:"O(log n)",
code:C(`
class Solution:
    def smallestNumber(self, n):
        if n == 1:
            return "1"
        digits = []
        for d in range(9, 1, -1):
            while n % d == 0:
                digits.append(d)
                n //= d
        if n != 1:
            return "-1"
        return ''.join(map(str, sorted(digits)))
`)});
lite({id:3002,slug:"maximum-size-of-a-set-after-removals",title:"Maximum Size of a Set After Removals",level:"Medium",topic:HM,name:"Bounded by n/2 per array and by the distinct counts",
w:"nums1 [1,2,1,2], nums2 [1,1,1,1] → set {1,2} → 2.",k:"After removing half of each array, at most n/2 distinct values of nums1 and n/2 of nums2 remain. Let a, b be the numbers of distinct values and c the number of common ones. The answer is min(n, min(a, n/2) + min(b, n/2), a + b − c).",
i:"nums1 = [1,2,1,2], nums2 = [1,1,1,1]",o:"2",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def maximumSetSize(self, nums1, nums2):
        n = len(nums1)
        s1, s2 = set(nums1), set(nums2)
        common = len(s1 & s2)
        return min(n, min(len(s1), n // 2) + min(len(s2), n // 2), len(s1) + len(s2) - common)
`)});
lite({id:3004,slug:"maximum-subtree-of-the-same-color",title:"Maximum Subtree of the Same Color",level:"Medium",topic:BT,name:"DFS returning (size, all same color)",
w:"A tree where nodes 1 and 2 have the same color as their parent → the largest monochrome subtree has 3 nodes.",k:"Root the tree at 0. For each node, compute the size of its subtree and whether every node in it has the node's colour: that holds if every child's subtree is monochrome and has the same colour as the node. The answer is the largest size among monochrome subtrees.",
i:"edges = [[0,1],[0,2],[0,3]], colors = [1,1,2,3]",o:"1",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def maximumSubtreeSize(self, edges, colors):
        n = len(colors)
        adj = defaultdict(list)
        for a, b in edges:
            adj[a].append(b)
            adj[b].append(a)
        parent = [-1] * n
        order = []
        stack = [0]
        while stack:
            u = stack.pop()
            order.append(u)
            for v in adj[u]:
                if v != parent[u]:
                    parent[v] = u
                    stack.append(v)
        size = [1] * n
        same = [True] * n
        best = 1
        for u in reversed(order):
            if same[u]:
                best = max(best, size[u])
            p = parent[u]
            if p != -1:
                size[p] += size[u]
                if not same[u] or colors[u] != colors[p]:
                    same[p] = False
        return best
`)});
lite({id:3009,slug:"maximum-number-of-intersections-on-the-chart",title:"Maximum Number of Intersections on the Chart",level:"Hard",topic:IV,name:"Sweep over doubled y-levels with half-open segments",
w:"y [1,2,1,2,1,3,2] → the line y = 1.5 crosses 5 segments → 5.",k:"The chart goes through (k, y[k]). A horizontal line can cross it at a vertex or inside a segment. Double all y values so interior levels become integers. Each segment covers its levels with the start vertex included and the end vertex excluded (so a shared vertex is counted once); the last vertex is added as a single point. A difference array over levels gives the maximum overlap.",
i:"y = [1,2,1,2,1,3,2]",o:"5",time:"O(n log n)",space:"O(n)",
code:C(`
class Solution:
    def maxIntersectionCount(self, y):
        events = defaultdict(int)
        for i in range(len(y) - 1):
            a, b = y[i], y[i + 1]
            if a < b:
                lo, hi = 2 * a, 2 * b - 1
            else:
                lo, hi = 2 * b + 1, 2 * a
            events[lo] += 1
            events[hi + 1] -= 1
        events[2 * y[-1]] += 1
        events[2 * y[-1] + 1] -= 1
        cur = best = 0
        for level in sorted(events):
            cur += events[level]
            best = max(best, cur)
        return best
`)});
lite({id:3038,slug:"maximum-number-of-operations-with-the-same-score-i",title:"Maximum Number of Operations With the Same Score I",level:"Easy",topic:ARR,name:"Delete pairs from the front while the sum stays the same",
w:"[3,2,1,4,5] → 3 + 2 = 5, 1 + 4 = 5, then one element left → 2.",k:"Operations always delete the first two elements. The score is fixed by the first pair; keep deleting pairs while their sum equals it and count them.",
i:"nums = [3,2,1,4,5]",o:"2",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def maxOperations(self, nums):
        score = nums[0] + nums[1]
        count = 0
        for i in range(0, len(nums) - 1, 2):
            if nums[i] + nums[i + 1] != score:
                break
            count += 1
        return count
`)});
lite({id:3134,slug:"find-the-median-of-the-uniqueness-array",title:"Find the Median of the Uniqueness Array",level:"Hard",topic:BS,name:"Binary search the median + count subarrays with ≤ k distinct",
w:"[1,2,3] → uniqueness array [1,1,1,2,2,3] → median 1.",k:"The uniqueness array lists the number of distinct elements of every subarray, sorted. Its median (the smaller middle for even length) is the smallest k such that at least half of all subarrays have ≤ k distinct values. Binary search k; count subarrays with at most k distinct values with a sliding window.",
i:"nums = [1,2,3]",o:"1",time:"O(n log n)",space:"O(n)",
code:C(`
class Solution:
    def medianOfUniquenessArray(self, nums):
        n = len(nums)
        need = (n * (n + 1) // 2 + 1) // 2
        def at_most(k):
            cnt = Counter()
            left = res = 0
            for right, x in enumerate(nums):
                cnt[x] += 1
                while len(cnt) > k:
                    cnt[nums[left]] -= 1
                    if cnt[nums[left]] == 0:
                        del cnt[nums[left]]
                    left += 1
                res += right - left + 1
            return res
        lo, hi = 1, len(set(nums))
        while lo < hi:
            mid = (lo + hi) // 2
            if at_most(mid) >= need:
                hi = mid
            else:
                lo = mid + 1
        return lo
`)});
lite({id:3111,slug:"minimum-rectangles-to-cover-points",title:"Minimum Rectangles to Cover Points",level:"Medium",topic:GD,name:"Sort the x-coordinates, greedy windows of width w",
w:"points x = 2,1,1,1,3,4, w=1 → windows [1,2], [3,4] → 2.",k:"Only the x-coordinates matter (a rectangle can be as tall as needed). Sort them and sweep: start a rectangle at the first uncovered x, covering every x up to x + w; repeat.",
i:"points = [[2,1],[1,0],[1,4],[1,8],[3,5],[4,6]], w = 1",o:"2",time:"O(n log n)",space:"O(n)",
code:C(`
class Solution:
    def minRectanglesToCoverPoints(self, points, w):
        xs = sorted(x for x, _ in points)
        count = 0
        reach = float('-inf')
        for x in xs:
            if x > reach:
                count += 1
                reach = x + w
        return count
`)});
lite({id:3157,slug:"find-the-level-of-tree-with-minimum-sum",title:"Find the Level of Tree with Minimum Sum",level:"Medium",topic:BT,name:"BFS (Breadth-First Search) level sums",
w:"[50,6,2,30,80,7] → level sums 50, 8, 117 → level 2.",k:"Do a BFS (Breadth-First Search) over the levels, adding up the values of each level. Return the 1-based level with the smallest sum (the lowest level on ties).",
i:"root = [50,6,2,30,80,7]",o:"2",time:"O(n)",space:"O(w)",
code:C(`
class Solution:
    def minimumLevel(self, root):
        level = [root]
        best_sum, best_level = float('inf'), 1
        depth = 1
        while level:
            total = sum(node.val for node in level)
            if total < best_sum:
                best_sum, best_level = total, depth
            level = [c for node in level for c in (node.left, node.right) if c]
            depth += 1
        return best_level
`)});
lite({id:3212,slug:"count-submatrices-with-equal-frequency-of-x-and-y",title:"Count Submatrices With Equal Frequency of X and Y",level:"Medium",topic:PS,name:"2D prefix sums from the top-left corner",
w:"[['X','Y','.'],['Y','.','.']] → 3 submatrices anchored at (0,0) have equal X and Y and one X.",k:"Every counted submatrix starts at (0,0), so it is a prefix rectangle ending at (i, j). Keep 2D prefix sums of the balance (+1 for X, −1 for Y) and of the number of X. A corner counts when the balance is 0 and there is at least one X.",
i:"grid = [[\"X\",\"Y\",\".\"],[\"Y\",\".\",\".\"]]",o:"3",time:"O(m·n)",space:"O(m·n)",
code:C(`
class Solution:
    def numberOfSubmatrices(self, grid):
        m, n = len(grid), len(grid[0])
        bal = [[0] * (n + 1) for _ in range(m + 1)]
        xs = [[0] * (n + 1) for _ in range(m + 1)]
        res = 0
        for i in range(m):
            for j in range(n):
                c = grid[i][j]
                d = (c == 'X') - (c == 'Y')
                x = int(c == 'X')
                bal[i + 1][j + 1] = bal[i][j + 1] + bal[i + 1][j] - bal[i][j] + d
                xs[i + 1][j + 1] = xs[i][j + 1] + xs[i + 1][j] - xs[i][j] + x
                if bal[i + 1][j + 1] == 0 and xs[i + 1][j + 1] > 0:
                    res += 1
        return res
`)});
lite({id:3728,slug:"stable-subarrays-with-equal-boundary-and-interior-sum",title:"Stable Subarrays With Equal Boundary and Interior Sum",level:"Medium",topic:PS,name:"Hash of (value, prefix) pairs for the left boundary",
w:"[9,3,3,3,9] → [9,3,3,3,9] and [3,3,3] are stable → 2.",k:"For a subarray [l, r] we need capacity[l] = capacity[r] = v and the sum strictly between = v, i.e. prefix[r] − prefix[l+1] = v. Walk r from left to right and keep a Counter of keys (capacity[l], prefix[l+1]) for all l ≤ r − 2; the number of stable subarrays ending at r is the count of the key (capacity[r], prefix[r] − capacity[r]).",
i:"capacity = [9,3,3,3,9]",o:"2",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def countStableSubarrays(self, capacity):
        pref = [0]
        for x in capacity:
            pref.append(pref[-1] + x)
        seen = Counter()
        total = 0
        for r in range(len(capacity)):
            if r >= 2:
                l = r - 2
                seen[(capacity[l], pref[l + 1])] += 1
            total += seen[(capacity[r], pref[r] - capacity[r])]
        return total
`)});
lite({id:1716,slug:"calculate-money-in-leetcode-bank",title:"Calculate Money in Leetcode Bank",level:"Easy",topic:MB,name:"Weeks of an arithmetic progression",
w:"n=10 → week 1: 28, week 2 so far: 2+3+4 = 9 → 37.",k:"Monday of week w deposits w; each next day is 1 more. Full weeks give 28, 35, 42, …; the remaining days of the last week follow the same pattern. Simulate by weeks: for each day add (day_of_week + week index).",
i:"n = 10",o:"37",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def totalMoney(self, n):
        total = 0
        for day in range(n):
            week, d = divmod(day, 7)
            total += week + d + 1
        return total
`)});
lite({id:1317,slug:"convert-integer-to-the-sum-of-two-no-zero-integers",title:"Convert Integer to the Sum of Two No-Zero Integers",level:"Easy",topic:MB,name:"Try a = 1, 2, … until neither a nor n − a contains a 0",
w:"n=11 → [2, 9].",k:"A no-zero integer has no digit 0. Try a from 1 upwards and return [a, n − a] for the first a where neither number contains the digit '0' in its decimal form.",
i:"n = 11",o:"[2, 9]",time:"O(n log n)",space:"O(1)",
code:C(`
class Solution:
    def getNoZeroIntegers(self, n):
        for a in range(1, n):
            if '0' not in str(a) and '0' not in str(n - a):
                return [a, n - a]
`)});
lite({id:3754,slug:"concatenate-non-zero-digits-and-multiply-by-sum-i",title:"Concatenate Non-Zero Digits and Multiply by Sum I",level:"Easy",topic:ARR,name:"Drop the zeros, read the number, multiply by the digit sum",
w:"n=10203004 → x = 1234, sum 10 → 12340.",k:"Remove every digit 0 from n, read the remaining digits as the number x (0 if none), and return x times the sum of the digits.",
i:"n = 10203004",o:"12340",time:"O(log n)",space:"O(log n)",
code:C(`
class Solution:
    def sumAndMultiply(self, n):
        digits = [c for c in str(n) if c != '0']
        x = int(''.join(digits)) if digits else 0
        return x * sum(int(c) for c in digits)
`)});
lite({id:2054,slug:"two-best-non-overlapping-events",title:"Two Best Non-Overlapping Events",level:"Medium",topic:IV,name:"Sort by start, best value among events that already ended",
w:"events [[1,3,2],[4,5,2],[2,4,3]] → choose [1,3,2] and [4,5,2] → 4.",k:"Choose at most two events whose time ranges do not overlap (the second must start strictly after the first ends). Sort events by start time and keep a min-heap of (end, value) of earlier events. Before using an event, pop all earlier events that ended before its start and track the best value among them; answer = max(single event value, value + best finished).",
i:"events = [[1,3,2],[4,5,2],[2,4,3]]",o:"4",time:"O(n log n)",space:"O(n)",
code:C(`
class Solution:
    def maxTwoEvents(self, events):
        events.sort()
        heap = []
        best_done = 0
        res = 0
        for start, end, value in events:
            while heap and heap[0][0] < start:
                best_done = max(best_done, heappop(heap)[1])
            res = max(res, value + best_done)
            heappush(heap, (end, value))
        return res
`)});
lite({id:449,slug:"serialize-and-deserialize-bst",title:"Serialize and Deserialize BST",level:"Medium",topic:BT,name:"Preorder values, rebuild with bounds",
w:"BST (Binary Search Tree) [2,1,3] → '2,1,3' → the same tree.",k:"A BST is determined by its preorder sequence. Serialize by writing the values in preorder. To deserialize, read values with an upper bound: a value belongs to the current subtree if it is below the bound; recurse left with the node's value as the new bound and right with the old bound.",
i:"Codec(); serialize(root); deserialize(data)  with root = [2,1,3]",o:"[2, 1, 3]",time:"O(n)",space:"O(n)",
code:C(`
class Codec:
    def serialize(self, root):
        out = []
        def pre(node):
            if node:
                out.append(str(node.val))
                pre(node.left)
                pre(node.right)
        pre(root)
        return ','.join(out)

    def deserialize(self, data):
        if not data:
            return None
        vals = deque(int(x) for x in data.split(','))
        def build(bound):
            if not vals or vals[0] > bound:
                return None
            node = TreeNode(vals.popleft())
            node.left = build(node.val)
            node.right = build(bound)
            return node
        return build(float('inf'))
`)});
lite({id:372,slug:"super-pow",title:"Super Pow",level:"Medium",topic:MB,name:"Digit by digit modular exponentiation",
w:"a=2, b=[1,0] → 2^10 mod 1337 = 1024.",k:"b is a huge number given as digits. Use a^(10·x + d) = (a^x)^10 · a^d: process the digits from the left, result = pow(result, 10, 1337) · pow(a, d, 1337) mod 1337.",
i:"a = 2, b = [1,0]",o:"1024",time:"O(len(b))",space:"O(1)",
code:C(`
class Solution:
    def superPow(self, a, b):
        MOD = 1337
        result = 1
        for d in b:
            result = pow(result, 10, MOD) * pow(a, d, MOD) % MOD
        return result
`)});
lite({id:2487,slug:"remove-nodes-from-linked-list",title:"Remove Nodes From Linked List",level:"Medium",topic:LL,name:"Monotonic stack: keep nodes with no larger node to their right",
w:"[5,2,13,3,8] → [13,8].",k:"A node is removed if some node to its right has a greater value. Scan the list keeping a stack of nodes with decreasing values: pop smaller nodes when a bigger one arrives. The stack then holds the surviving nodes in order; relink them.",
i:"head = [5,2,13,3,8]",o:"[13, 8]",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def removeNodes(self, head):
        stack = []
        node = head
        while node:
            while stack and stack[-1].val < node.val:
                stack.pop()
            stack.append(node)
            node = node.next
        for a, b in zip(stack, stack[1:]):
            a.next = b
        stack[-1].next = None
        return stack[0]
`)});
lite({id:3442,slug:"maximum-difference-between-even-and-odd-frequency-i",title:"Maximum Difference Between Even and Odd Frequency I",level:"Easy",topic:HM,name:"Largest odd count minus smallest even count",
w:"'aaaaabbc' → a occurs 5 (odd), b occurs 2 (even) → 3.",k:"Count each letter. The best difference takes the letter with the largest odd frequency and the letter with the smallest even frequency.",
i:"s = \"aaaaabbc\"",o:"3",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def maxDifference(self, s):
        cnt = Counter(s).values()
        return max(c for c in cnt if c % 2) - min(c for c in cnt if c % 2 == 0)
`)});
lite({id:1356,slug:"sort-integers-by-the-number-of-1-bits",title:"Sort Integers by The Number of 1 Bits",level:"Easy",topic:SRT,name:"Sort by (popcount, value)",
w:"[0,1,2,3,4,5,6,7,8] → [0,1,2,4,8,3,5,6,7].",k:"Sort with the key (number of 1 bits in the binary form, value).",
i:"arr = [0,1,2,3,4,5,6,7,8]",o:"[0, 1, 2, 4, 8, 3, 5, 6, 7]",time:"O(n log n)",space:"O(n)",
code:C(`
class Solution:
    def sortByBits(self, arr):
        return sorted(arr, key=lambda x: (bin(x).count('1'), x))
`)});
lite({id:728,slug:"self-dividing-numbers",title:"Self Dividing Numbers",level:"Easy",topic:MB,name:"Test every digit",
w:"1..22 → 1–9, 11, 12, 15, 22.",k:"A number is self-dividing if it has no zero digit and is divisible by each of its digits. Test every number in the range.",
i:"left = 1, right = 22",o:"[1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]",time:"O((right − left) log right)",space:"O(1)",
code:C(`
class Solution:
    def selfDividingNumbers(self, left, right):
        def ok(x):
            return all(d != '0' and x % int(d) == 0 for d in str(x))
        return [x for x in range(left, right + 1) if ok(x)]
`)});
lite({id:2029,slug:"stone-game-ix",title:"Stone Game IX",level:"Medium",topic:MB,name:"Count the stones by value mod 3",
w:"[2,1] → Alice picks 1, Bob must pick 2: total 3 divisible by 3 → Bob loses → true.",k:"Only each stone's value mod 3 matters. Let c0, c1, c2 be the counts. Stones divisible by 3 only swap whose turn it is. If c0 is even they cancel out: Alice wins iff both c1 and c2 are non-zero. If c0 is odd the turns flip: Alice wins iff |c1 − c2| > 2.",
i:"stones = [2,1]",o:"true",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def stoneGameIX(self, stones):
        cnt = [0, 0, 0]
        for s in stones:
            cnt[s % 3] += 1
        if cnt[0] % 2 == 0:
            return cnt[1] > 0 and cnt[2] > 0
        return abs(cnt[1] - cnt[2]) > 2
`)});
lite({id:3883,slug:"count-non-decreasing-arrays-with-given-digit-sums",title:"Count Non-Decreasing Arrays With Given Digit Sums",level:"Hard",topic:DP,name:"dp over candidate numbers with prefix sums",
w:"digitSum [25,1] → [799,1000] … 6 arrays.",k:"Group the numbers 0…5000 by digit sum (each group sorted). dp[i][v] = number of valid prefixes ending with the value v at position i. For the next position, the count for v is the sum of dp values of the previous position's candidates ≤ v: a prefix sum over two sorted lists (two pointers). Add the final counts, modulo 1e9+7.",
i:"digitSum = [25,1]",o:"6",time:"O(n·5000)",space:"O(5000)",
code:C(`
class Solution:
    def countArrays(self, digitSum):
        MOD = 10**9 + 7
        by = defaultdict(list)
        for x in range(5001):
            by[sum(map(int, str(x)))].append(x)
        cur = by.get(digitSum[0], [])
        if not cur:
            return 0
        cnt = [1] * len(cur)
        for d in digitSum[1:]:
            nxt = by.get(d, [])
            if not nxt:
                return 0
            new = [0] * len(nxt)
            j = run = 0
            for i, v in enumerate(nxt):
                while j < len(cur) and cur[j] <= v:
                    run = (run + cnt[j]) % MOD
                    j += 1
                new[i] = run
            cur, cnt = nxt, new
        return sum(cnt) % MOD
`)});
lite({id:1884,slug:"egg-drop-with-2-eggs-and-n-floors",title:"Egg Drop With 2 Eggs and N Floors",level:"Medium",topic:MB,name:"Smallest m with m(m + 1)/2 ≥ n",
w:"n=6 → 3 drops.",k:"With two eggs, drop the first from floor m, then m + (m−1), … : m drops cover m + (m−1) + … + 1 = m(m+1)/2 floors. The answer is the smallest m with m(m + 1)/2 ≥ n.",
i:"n = 6",o:"3",time:"O(√n)",space:"O(1)",
code:C(`
class Solution:
    def twoEggDrop(self, n):
        m = 0
        while m * (m + 1) // 2 < n:
            m += 1
        return m
`)});
lite({id:2616,slug:"minimize-the-maximum-difference-of-pairs",title:"Minimize the Maximum Difference of Pairs",level:"Medium",topic:BS,name:"Binary search the difference, greedy adjacent pairs",
w:"[10,1,2,7,1,3], p=2 → pairs (1,1) and (2,3) → 1.",k:"Sort the numbers. For a candidate maximum difference d, greedily pair neighbours: if nums[i + 1] − nums[i] ≤ d take the pair and skip both, otherwise move on by one. d works if at least p pairs can be formed. Binary search the smallest working d.",
i:"nums = [10,1,2,7,1,3], p = 2",o:"1",time:"O(n log V)",space:"O(1)",
code:C(`
class Solution:
    def minimizeMax(self, nums, p):
        nums.sort()
        def pairs(d):
            count = i = 0
            while i < len(nums) - 1:
                if nums[i + 1] - nums[i] <= d:
                    count += 1
                    i += 2
                else:
                    i += 1
            return count
        lo, hi = 0, nums[-1] - nums[0]
        while lo < hi:
            mid = (lo + hi) // 2
            if pairs(mid) >= p:
                hi = mid
            else:
                lo = mid + 1
        return lo
`)});
lite({id:3121,slug:"count-the-number-of-special-characters-ii",title:"Count the Number of Special Characters II",level:"Medium",topic:HM,name:"Last lower-case before first upper-case",
w:"'aaAbcBC' → a, b, c are special → 3.",k:"A letter is special if it occurs in both cases and all its lower-case copies come before its first upper-case copy. Record the last index of each lower-case letter and the first index of each upper-case letter and compare.",
i:"word = \"aaAbcBC\"",o:"3",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def numberOfSpecialChars(self, word):
        last_lower, first_upper = {}, {}
        for i, c in enumerate(word):
            if c.islower():
                last_lower[c] = i
            else:
                first_upper.setdefault(c.lower(), i)
        return sum(1 for c in last_lower if c in first_upper and last_lower[c] < first_upper[c])
`)});
lite({id:2182,slug:"construct-string-with-repeat-limit",title:"Construct String With Repeat Limit",level:"Medium",topic:HP,name:"Always append the largest letter; interleave the next one when the limit hits",
w:"'cczazcc', limit 3 → 'zzcccac'.",k:"To get the lexicographically largest string use the largest available letter. Take up to repeatLimit copies of it; if letters of that kind remain, insert a single copy of the next largest letter, then continue with the largest again. If no smaller letter is available, stop.",
i:"s = \"cczazcc\", repeatLimit = 3",o:"\"zzcccac\"",time:"O(n log 26)",space:"O(26)",
code:C(`
class Solution:
    def repeatLimitedString(self, s, repeatLimit):
        cnt = Counter(s)
        letters = sorted(cnt, reverse=True)
        out = []
        while True:
            top = next((c for c in letters if cnt[c] > 0), None)
            if top is None:
                break
            take = min(cnt[top], repeatLimit)
            out.append(top * take)
            cnt[top] -= take
            if cnt[top] > 0:
                nxt = next((c for c in letters if c < top and cnt[c] > 0), None)
                if nxt is None:
                    break
                out.append(nxt)
                cnt[nxt] -= 1
        return ''.join(out)
`)});
lite({id:3243,slug:"shortest-distance-after-road-addition-queries-i",title:"Shortest Distance After Road Addition Queries I",level:"Medium",topic:GR,name:"BFS (Breadth-First Search) after each added road",
w:"n=5, queries [[2,4],[0,2],[1,3]] → [3,2,2].",k:"Cities 0…n−1 start with roads i → i + 1. After every query add the one-way road and run a BFS (Breadth-First Search) from city 0 to find the shortest path to city n − 1.",
i:"n = 5, queries = [[2,4],[0,2],[1,3]]",o:"[3, 2, 2]",time:"O(q·(n + q))",space:"O(n + q)",
code:C(`
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
lite({id:2017,slug:"grid-game",title:"Grid Game",level:"Medium",topic:PS,name:"The second robot gets max(top suffix, bottom prefix)",
w:"[[2,5,4],[1,5,1]] → first robot goes down at column 0... → 4.",k:"The first robot goes along the top row to some column i, then down and along the bottom row. The second robot then collects either what is left on the top row after column i (suffix) or what is left on the bottom row before column i (prefix), whichever is larger. The first robot picks i to minimise that maximum.",
i:"grid = [[2,5,4],[1,5,1]]",o:"4",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def gridGame(self, grid):
        top, bottom = sum(grid[0]), 0
        best = float('inf')
        for i in range(len(grid[0])):
            top -= grid[0][i]
            best = min(best, max(top, bottom))
            bottom += grid[1][i]
        return best
`)});
lite({id:2594,slug:"minimum-time-to-repair-cars",title:"Minimum Time to Repair Cars",level:"Medium",topic:BS,name:"Binary search the time",
w:"ranks [4,2,3,1], cars 10 → 16 minutes.",k:"A mechanic with rank r repairs n cars in r·n² minutes. In time t he can repair floor(sqrt(t / r)) cars. Binary search the smallest t such that the total over all mechanics is at least cars.",
i:"ranks = [4,2,3,1], cars = 10",o:"16",time:"O(n log(r·cars²))",space:"O(1)",
code:C(`
class Solution:
    def repairCars(self, ranks, cars):
        lo, hi = 1, min(ranks) * cars * cars
        while lo < hi:
            mid = (lo + hi) // 2
            if sum(isqrt(mid // r) for r in ranks) >= cars:
                hi = mid
            else:
                lo = mid + 1
        return lo
`)});
lite({id:1859,slug:"sorting-the-sentence",title:"Sorting the Sentence",level:"Easy",topic:ARR,name:"Order the words by their trailing number",
w:"'is2 sentence4 This1 a3' → 'This is a sentence'.",k:"Each word ends with its 1-based position. Sort the words by that last digit and remove it.",
i:"s = \"is2 sentence4 This1 a3\"",o:"\"This is a sentence\"",time:"O(n log n)",space:"O(n)",
code:C(`
class Solution:
    def sortSentence(self, s):
        words = sorted(s.split(), key=lambda w: w[-1])
        return ' '.join(w[:-1] for w in words)
`)});
lite({id:538,slug:"convert-bst-to-greater-tree",title:"Convert BST to Greater Tree",level:"Medium",topic:BT,name:"Reverse in-order with a running sum",
w:"[4,1,6,0,2,5,7,null,null,null,3,null,null,null,8] → every value becomes itself plus all larger ones.",k:"Visit the nodes from the largest to the smallest (right, node, left) keeping the sum of everything visited. Add the running sum to each node's value as you pass.",
i:"root = [4,1,6,0,2,5,7,None,None,None,3,None,None,None,8]",o:"[30, 36, 21, 36, 35, 26, 15, None, None, None, 33, None, None, None, 8]",time:"O(n)",space:"O(h)",
code:C(`
class Solution:
    def convertBST(self, root):
        total = 0
        stack = []
        node = root
        while stack or node:
            while node:
                stack.append(node)
                node = node.right
            node = stack.pop()
            total += node.val
            node.val = total
            node = node.left
        return root
`)});
lite({id:313,slug:"super-ugly-number",title:"Super Ugly Number",level:"Medium",topic:DP,name:"One pointer per prime, merge like ugly numbers",
w:"n=12, primes [2,7,13,19] → 32.",k:"Keep the ugly numbers found so far. For each prime keep a pointer to the smallest ugly number it has not yet multiplied. The next ugly number is the minimum of prime × ugly[pointer]; advance every pointer that produced it (to avoid duplicates).",
i:"n = 12, primes = [2,7,13,19]",o:"32",time:"O(n·k)",space:"O(n + k)",
code:C(`
class Solution:
    def nthSuperUglyNumber(self, n, primes):
        ugly = [1]
        ptr = [0] * len(primes)
        while len(ugly) < n:
            nxt = min(p * ugly[i] for p, i in zip(primes, ptr))
            ugly.append(nxt)
            for j, p in enumerate(primes):
                if p * ugly[ptr[j]] == nxt:
                    ptr[j] += 1
        return ugly[-1]
`)});
lite({id:1186,slug:"maximum-subarray-sum-with-one-deletion",title:"Maximum Subarray Sum with One Deletion",level:"Medium",topic:DP,name:"Kadane with a 'deleted one' state",
w:"[1,-2,0,3] → delete −2 → 1 + 0 + 3 = 4.",k:"Keep two values for subarrays ending at i: keep_all (no deletion) and one_deleted (one element removed). keep_all = max(keep_all + x, x); one_deleted = max(one_deleted + x, previous keep_all) (delete the current element). The answer is the best of both over all i.",
i:"arr = [1,-2,0,3]",o:"4",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def maximumSum(self, arr):
        keep = arr[0]
        deleted = float('-inf')
        best = arr[0]
        for x in arr[1:]:
            deleted = max(deleted + x, keep)
            keep = max(keep + x, x)
            best = max(best, keep, deleted)
        return best
`)});
lite({id:3370,slug:"smallest-number-with-all-set-bits",title:"Smallest Number With All Set Bits",level:"Easy",topic:MB,name:"Next number of the form 2^k − 1",
w:"n=5 → 7.",k:"Numbers whose binary form is all 1s look like 1, 3, 7, 15, …. Starting from 1, double and add 1 until the value is at least n.",
i:"n = 5",o:"7",time:"O(log n)",space:"O(1)",
code:C(`
class Solution:
    def smallestNumber(self, n):
        x = 1
        while x < n:
            x = x * 2 + 1
        return x
`)});
lite({id:757,slug:"set-intersection-size-at-least-two",title:"Set Intersection Size At Least Two",level:"Hard",topic:GD,name:"Sort by end; greedily pick the two largest points",
w:"[[1,3],[3,7],[8,9]] → {2,3,4,8,9} → 5.",k:"We need a smallest set with at least two points inside every interval. Sort the intervals by end (and by start descending on ties). Keep the two largest chosen points a < b. For the next interval: if its start is above b, add its two last points; if it contains only b (start > a), add its end; otherwise nothing is needed.",
i:"intervals = [[1,3],[3,7],[8,9]]",o:"5",time:"O(n log n)",space:"O(1)",
code:C(`
class Solution:
    def intersectionSizeTwo(self, intervals):
        intervals.sort(key=lambda iv: (iv[1], -iv[0]))
        a, b = -1, -1
        count = 0
        for s, e in intervals:
            if s > b:
                a, b = e - 1, e
                count += 2
            elif s > a:
                a, b = b, e
                count += 1
        return count
`)});
lite({id:1463,slug:"cherry-pickup-ii",title:"Cherry Pickup II",level:"Hard",topic:DP,name:"dp over rows and the two robots' columns",
w:"[[3,1,1],[2,5,1],[1,5,5],[2,1,1]] → robots collect 24.",k:"Both robots move down one row per step, each shifting its column by −1, 0 or +1. Let dp[r][c1][c2] be the best cherries collected from row r onward with the robots at c1 and c2 (cells shared by both count once). Fill from the bottom row up and read dp[0][0][last column].",
i:"grid = [[3,1,1],[2,5,1],[1,5,5],[2,1,1]]",o:"24",time:"O(m·n²·9)",space:"O(n²)",
code:C(`
class Solution:
    def cherryPickup(self, grid):
        m, n = len(grid), len(grid[0])
        nxt = [[0] * n for _ in range(n)]
        for r in range(m - 1, -1, -1):
            cur = [[float('-inf')] * n for _ in range(n)]
            for a in range(n):
                for b in range(n):
                    gain = grid[r][a] + (grid[r][b] if a != b else 0)
                    best = max(nxt[x][y]
                               for x in (a - 1, a, a + 1) if 0 <= x < n
                               for y in (b - 1, b, b + 1) if 0 <= y < n)
                    cur[a][b] = gain + best
            nxt = cur
        return nxt[0][n - 1]
`)});
lite({id:3075,slug:"maximize-happiness-of-selected-children",title:"Maximize Happiness of Selected Children",level:"Medium",topic:GD,name:"Take the happiest first; each pick lowers the rest by 1",
w:"[1,2,3], k=2 → 3 + (2 − 1) = 4.",k:"Each time you select a child the others lose 1 happiness (not below 0). Selecting the happiest first is best: the i-th pick (0-based) yields max(0, happiness[i] − i) after sorting descending. Add the first k.",
i:"happiness = [1,2,3], k = 2",o:"4",time:"O(n log n)",space:"O(1)",
code:C(`
class Solution:
    def maximumHappinessSum(self, happiness, k):
        happiness.sort(reverse=True)
        return sum(max(0, happiness[i] - i) for i in range(k))
`)});
lite({id:3315,slug:"construct-the-minimum-bitwise-array-ii",title:"Construct the Minimum Bitwise Array II",level:"Medium",topic:MB,name:"Clear the highest bit of the trailing run of 1s",
w:"[11,13,31] → [9,12,15].",k:"We need the smallest a with a | (a + 1) = x. This requires x to be odd; then a = x with the highest bit of its trailing run of 1s turned off (that is x − 2^(t−1) for a run of t ones). Even x has no solution.",
i:"nums = [11,13,31]",o:"[9, 12, 15]",time:"O(n log V)",space:"O(n)",
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
lite({id:1776,slug:"car-fleet-ii",title:"Car Fleet II",level:"Hard",topic:STK,name:"Monotonic stack from the last car",
w:"cars [[1,2],[2,1],[4,3],[7,2]] → [1.0, -1.0, 3.0, -1.0].",k:"Process cars from the front (last in the list) backwards. A car can only collide with a slower car ahead. Keep a stack of candidate cars ahead; pop a car if it is faster than the current car cannot catch it or if the current car would reach it only after that car has itself collided. The collision time is computed from positions and speeds.",
i:"cars = [[1,2],[2,1],[4,3],[7,2]]",o:"[1, -1, 3, -1]",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def getCollisionTimes(self, cars):
        n = len(cars)
        res = [-1.0] * n
        stack = []
        for i in range(n - 1, -1, -1):
            pos, speed = cars[i]
            while stack:
                j = stack[-1]
                pj, sj = cars[j]
                if speed <= sj:
                    stack.pop()
                    continue
                t = (pj - pos) / (speed - sj)
                if res[j] != -1 and t > res[j]:
                    stack.pop()
                    continue
                res[i] = t
                break
            stack.append(i)
        return res
`)});
lite({id:3814,slug:"maximum-capacity-within-budget",title:"Maximum Capacity Within Budget",level:"Medium",topic:BS,name:"Best single machine, or the best pair via a prefix maximum",
w:"costs [4,8,5,3], capacity [1,5,2,7], budget 8 → machines 0 and 3 → 8.",k:"Sort the machines by cost. A single machine is valid if cost < budget. For a pair, fix the more expensive machine i and look for the best partner among cheaper machines j < i with cost < budget − cost[i]: binary search the limit and use a prefix maximum of capacities. Answer = best single or pair.",
i:"costs = [4,8,5,3], capacity = [1,5,2,7], budget = 8",o:"8",time:"O(n log n)",space:"O(n)",
code:C(`
class Solution:
    def maxCapacity(self, costs, capacity, budget):
        machines = sorted(zip(costs, capacity))
        cs = [c for c, _ in machines]
        prefix = []
        best = 0
        res = 0
        for _, cap in machines:
            best = max(best, cap)
            prefix.append(best)
        for i, (c, cap) in enumerate(machines):
            if c >= budget:
                break
            res = max(res, cap)
            limit = bisect_left(cs, budget - c, 0, i)
            if limit > 0:
                res = max(res, cap + prefix[limit - 1])
        return res
`)});
lite({id:1000,slug:"minimum-cost-to-merge-stones",title:"Minimum Cost to Merge Stones",level:"Hard",topic:DP,name:"Interval DP over piles reduced to a given count",
w:"stones [3,2,4,1], k=2 → 20.",k:"Merging k consecutive piles costs their total. Only possible to end with one pile if (n − 1) % (k − 1) == 0. dp[i][j] = minimum cost to merge stones i…j as far as possible: split at points that differ by k − 1 piles and add the total when the interval can collapse into one pile ((j − i) % (k − 1) == 0).",
i:"stones = [3,2,4,1], k = 2",o:"20",time:"O(n³ / k)",space:"O(n²)",
code:C(`
class Solution:
    def mergeStones(self, stones, k):
        n = len(stones)
        if (n - 1) % (k - 1):
            return -1
        pref = [0]
        for s in stones:
            pref.append(pref[-1] + s)
        INF = float('inf')
        dp = [[0] * n for _ in range(n)]
        for length in range(2, n + 1):
            for i in range(n - length + 1):
                j = i + length - 1
                dp[i][j] = min(dp[i][m] + dp[m + 1][j] for m in range(i, j, k - 1))
                if (length - 1) % (k - 1) == 0:
                    dp[i][j] += pref[j + 1] - pref[i]
        return dp[0][n - 1]
`)});
lite({id:1594,slug:"maximum-non-negative-product-in-a-matrix",title:"Maximum Non Negative Product in a Matrix",level:"Medium",topic:DP,name:"Track the max and min product reaching each cell",
w:"[[1,-2,1],[1,-2,1],[3,-4,1]] → 1 · 1 · -2 · -4 · 1 = 8.",k:"Moving right or down, a negative number can turn the smallest (most negative) product into the largest. Keep for each cell both the maximum and the minimum product of paths reaching it. At the end, if the maximum is negative return −1, else the maximum modulo 1e9+7.",
i:"grid = [[1,-2,1],[1,-2,1],[3,-4,1]]",o:"8",time:"O(m·n)",space:"O(m·n)",
code:C(`
class Solution:
    def maxProductPath(self, grid):
        m, n = len(grid), len(grid[0])
        hi = [[0] * n for _ in range(m)]
        lo = [[0] * n for _ in range(m)]
        hi[0][0] = lo[0][0] = grid[0][0]
        for i in range(m):
            for j in range(n):
                if i == 0 and j == 0:
                    continue
                cands = []
                if i:
                    cands += [hi[i - 1][j] * grid[i][j], lo[i - 1][j] * grid[i][j]]
                if j:
                    cands += [hi[i][j - 1] * grid[i][j], lo[i][j - 1] * grid[i][j]]
                hi[i][j], lo[i][j] = max(cands), min(cands)
        return hi[-1][-1] % (10**9 + 7) if hi[-1][-1] >= 0 else -1
`)});
lite({id:462,slug:"minimum-moves-to-equal-array-elements-ii",title:"Minimum Moves to Equal Array Elements II",level:"Medium",topic:MB,name:"Move everything to the median",
w:"[1,2,3] → move to 2 → 2 moves.",k:"Each move changes one element by 1. The total number of moves to bring everything to a value x is Σ|a_i − x|, which is minimised at the median.",
i:"nums = [1,2,3]",o:"2",time:"O(n log n)",space:"O(1)",
code:C(`
class Solution:
    def minMoves2(self, nums):
        nums.sort()
        median = nums[len(nums) // 2]
        return sum(abs(x - median) for x in nums)
`)});
lite({id:1007,slug:"minimum-domino-rotations-for-equal-row",title:"Minimum Domino Rotations For Equal Row",level:"Medium",topic:GD,name:"Only tops[0] and bottoms[0] can be the common value",
w:"tops [2,1,2,4,2,2], bottoms [5,2,6,2,3,2] → make the top row all 2s → 2 rotations.",k:"The common value must appear on the first domino, so only tops[0] or bottoms[0] are candidates. For a candidate v every domino must show v on a side; the number of rotations to put it on top is (dominoes without v on top), or on the bottom is (dominoes without v on the bottom). Take the minimum over candidates.",
i:"tops = [2,1,2,4,2,2], bottoms = [5,2,6,2,3,2]",o:"2",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def minDominoRotations(self, tops, bottoms):
        n = len(tops)
        best = float('inf')
        for v in {tops[0], bottoms[0]}:
            if all(t == v or b == v for t, b in zip(tops, bottoms)):
                best = min(best, n - tops.count(v), n - bottoms.count(v))
        return -1 if best == float('inf') else best
`)});
lite({id:1035,slug:"uncrossed-lines",title:"Uncrossed Lines",level:"Medium",topic:DP,name:"Longest common subsequence",
w:"nums1 [1,4,2], nums2 [1,2,4] → 2 lines.",k:"Drawing non-crossing lines between equal numbers is exactly finding the longest common subsequence. dp[i][j] = dp[i−1][j−1] + 1 if the numbers match, else max(dp[i−1][j], dp[i][j−1]).",
i:"nums1 = [1,4,2], nums2 = [1,2,4]",o:"2",time:"O(n·m)",space:"O(n·m)",
code:C(`
class Solution:
    def maxUncrossedLines(self, nums1, nums2):
        n, m = len(nums1), len(nums2)
        dp = [[0] * (m + 1) for _ in range(n + 1)]
        for i in range(1, n + 1):
            for j in range(1, m + 1):
                if nums1[i - 1] == nums2[j - 1]:
                    dp[i][j] = dp[i - 1][j - 1] + 1
                else:
                    dp[i][j] = max(dp[i - 1][j], dp[i][j - 1])
        return dp[n][m]
`)});
lite({id:1404,slug:"number-of-steps-to-reduce-a-number-in-binary-representation-to-one",title:"Number of Steps to Reduce a Number in Binary Representation to One",level:"Medium",topic:MB,name:"Walk the bits from the right with a carry",
w:"'1101' (13) → 6 steps.",k:"Even numbers are halved (drop the last 0: 1 step); odd numbers get +1 (which makes a carry) then are halved. Scan the binary string from the right keeping a carry: a bit plus the carry gives 1 → odd: 2 steps (add 1, halve) and carry becomes 1; 0 → even: 1 step. Stop before the leading bit.",
i:"s = \"1101\"",o:"6",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def numSteps(self, s):
        steps = carry = 0
        for c in reversed(s[1:]):
            bit = int(c) + carry
            if bit == 1:
                steps += 2
                carry = 1
            else:
                steps += 1
        return steps + carry
`)});
