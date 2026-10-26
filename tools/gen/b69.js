const {lite}=require("./lib");
const C=s=>s.replace(/^\n/,"").replace(/\n$/,"").split("\n");
const ARR="Array / String",HM="Hash Map / Set",STK="Stack / Monotonic Stack",BT="Binary Tree",GR="Graph",HP="Heap",DP="Dynamic Programming",GD="Greedy",MB="Math / Bit Manipulation",BS="Binary Search",SRT="Sorting",SW="Sliding Window",MX="Matrix",UF="Union Find / Segment Tree",TP="Two Pointers",IV="Intervals",BTK="Backtracking",DS="Design",LL="Linked List",TR="Trie",PS="Prefix Sum";
// ---- Bloomberg (5)
lite({id:1260,slug:"shift-2d-grid",title:"Shift 2D Grid",level:"Easy",topic:MX,name:"Flatten, rotate by k, reshape",
w:"[[1,2,3],[4,5,6],[7,8,9]], k=1 → [[9,1,2],[3,4,5],[6,7,8]].",k:"Shifting k times moves every cell k places forward in row-major order (wrapping). Flatten the grid, rotate the list right by k mod (m·n), and cut it back into rows.",
i:"grid = [[1,2,3],[4,5,6],[7,8,9]], k = 1",o:"[[9, 1, 2], [3, 4, 5], [6, 7, 8]]",time:"O(m·n)",space:"O(m·n)",
code:C(`
class Solution:
    def shiftGrid(self, grid, k):
        m, n = len(grid), len(grid[0])
        flat = [v for row in grid for v in row]
        k %= m * n
        flat = flat[-k:] + flat[:-k] if k else flat
        return [flat[i * n:(i + 1) * n] for i in range(m)]
`)});
lite({id:3536,slug:"maximum-product-of-two-digits",title:"Maximum Product of Two Digits",level:"Easy",topic:ARR,name:"Multiply the two largest digits",
w:"n=31 → 3 × 1 = 3.",k:"The product of two digits is largest for the two largest digits of the number (the same digit may be used twice if it occurs twice). Sort the digits and multiply the last two.",
i:"n = 31",o:"3",time:"O(d log d)",space:"O(d)",
code:C(`
class Solution:
    def maxProduct(self, n):
        d = sorted(map(int, str(n)))
        return d[-1] * d[-2]
`)});
lite({id:2996,slug:"smallest-missing-integer-greater-than-sequential-prefix-sum",title:"Smallest Missing Integer Greater Than Sequential Prefix Sum",level:"Easy",topic:HM,name:"Sum the longest sequential prefix, then search upwards",
w:"[1,2,3,2,5]: the sequential prefix 1,2,3 sums to 6; 6 is missing → 6.",k:"A sequential prefix has each element equal to the previous plus 1. Take the longest one from the start and its sum s; the answer is the smallest integer ≥ s that is not in nums.",
i:"nums = [1,2,3,2,5]",o:"6",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def missingInteger(self, nums):
        s = nums[0]
        for a, b in zip(nums, nums[1:]):
            if b != a + 1:
                break
            s += b
        have = set(nums)
        while s in have:
            s += 1
        return s
`)});
lite({id:3116,slug:"kth-smallest-amount-with-single-denomination-combination",title:"Kth Smallest Amount With Single Denomination Combination",level:"Hard",topic:BS,name:"Binary search on the amount + inclusion–exclusion of LCMs",
w:"coins [3,6,9], k=3: the amounts are multiples of 3, so the third is 9.",k:"Binary search the amount x. The number of amounts ≤ x is the size of a union of multiple-sets, counted with inclusion–exclusion: for every non-empty subset of coins add or subtract floor(x / lcm(subset)) depending on the subset's parity. The answer is the smallest x with count ≥ k (at most min(coin)·k).",
i:"coins = [3,6,9], k = 3",o:"9",time:"O(2ⁿ · log(answer))",space:"O(2ⁿ)",
code:C(`
class Solution:
    def findKthSmallest(self, coins, k):
        n = len(coins)
        subsets = []
        for mask in range(1, 1 << n):
            l, bits = 1, 0
            for i in range(n):
                if mask >> i & 1:
                    l = l * coins[i] // gcd(l, coins[i])
                    bits += 1
            subsets.append((l, bits))
        def count(x):
            return sum((1 if b % 2 else -1) * (x // l) for l, b in subsets)
        lo, hi = 1, min(coins) * k
        while lo < hi:
            mid = (lo + hi) // 2
            if count(mid) >= k:
                hi = mid
            else:
                lo = mid + 1
        return lo
`)});
lite({id:2615,slug:"sum-of-distances",title:"Sum of Distances",level:"Medium",topic:PS,name:"Per value: prefix sums over its positions",
w:"[1,3,1,1,2] → arr[0] = |0−2| + |0−3| = 5, arr[2] = 2 + 1 = 3, … → [5,0,3,4,0].",k:"Group the indices of equal values. For the sorted positions p of one value, the distance sum for p[j] is (p[j]·j − sum of earlier positions) + (sum of later positions − p[j]·(count − j − 1)). Prefix sums of the positions give this in O(1) per index.",
i:"nums = [1,3,1,1,2]",o:"[5, 0, 3, 4, 0]",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def distance(self, nums):
        pos = defaultdict(list)
        for i, x in enumerate(nums):
            pos[x].append(i)
        res = [0] * len(nums)
        for p in pos.values():
            total = sum(p)
            left = 0
            m = len(p)
            for j, i in enumerate(p):
                res[i] = i * j - left + (total - left - i) - i * (m - j - 1)
                left += i
        return res
`)});
lite({id:2091,slug:"removing-minimum-and-maximum-from-array",title:"Removing Minimum and Maximum From Array",level:"Medium",topic:GD,name:"Best of three ways to clear both ends",
w:"[2,10,7,5,4,1,8,6]: min at index 5, max at index 1: removing from both ends costs 5.",k:"Let i<j be the positions of the min and max in either order. Options: remove from the front until j (j+1 deletions), from the back until i (n−i), or the front to i and the back from j (i+1 + n−j). Take the cheapest.",
i:"nums = [2,10,7,5,4,1,8,6]",o:"5",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def minimumDeletions(self, nums):
        n = len(nums)
        i, j = sorted((nums.index(min(nums)), nums.index(max(nums))))
        return min(j + 1, n - i, i + 1 + n - j)
`)});
lite({id:3870,slug:"count-commas-in-range",title:"Count Commas in Range",level:"Easy",topic:MB,name:"Numbers from 1000 up have one comma",
w:"n=1002: 1,000, 1,001, 1,002 → 3 commas.",k:"With n up to 10⁵ every number from 1000 to n has exactly one comma and smaller numbers have none, so the answer is max(0, n − 999).",
i:"n = 1002",o:"3",time:"O(1)",space:"O(1)",
code:C(`
class Solution:
    def countCommas(self, n):
        return max(0, n - 999)
`)});
lite({id:3414,slug:"maximum-score-of-non-overlapping-intervals",title:"Maximum Score of Non-overlapping Intervals",level:"Hard",topic:DP,name:"Memoised DP over start-sorted intervals with a 4-pick budget",
w:"The first sample: indices [2, 3] (weights 5 and 3) give the best score 8.",k:"Sort the interval indices by start. f(p, k) = the best (score, index list) using intervals from position p onward with at most k picks left: either skip interval p, or take it and continue at the first interval whose start is after its end (binary search) with k−1 picks. Prefer the higher score and, on equal scores, the lexicographically smaller sorted index list.",
i:"intervals = [[1,3,2],[4,5,2],[1,5,5],[6,9,3],[6,7,1],[8,9,1]]",o:"[2, 3]",time:"O(n log n)",space:"O(n)",
code:C(`
class Solution:
    def maximumWeight(self, intervals):
        n = len(intervals)
        order = sorted(range(n), key=lambda i: (intervals[i][0], i))
        starts = [intervals[i][0] for i in order]
        @lru_cache(None)
        def f(p, k):
            if p == n or k == 0:
                return (0, ())
            best = f(p + 1, k)
            i = order[p]
            l, r, w = intervals[i]
            sc, idx = f(bisect_right(starts, r), k - 1)
            cand = (sc + w, tuple(sorted(idx + (i,))))
            if cand[0] > best[0] or (cand[0] == best[0] and cand[1] < best[1]):
                best = cand
            return best
        return list(f(0, 4)[1])
`)});
lite({id:835,slug:"image-overlap",title:"Image Overlap",level:"Medium",topic:MX,name:"Count translation vectors between the 1-cells",
w:"Sliding the first image one step right and one down overlaps three 1s → 3.",k:"Slide one image over the other by every possible shift. For two 1-cells (one from each image) the shift that aligns them is their coordinate difference; count how many pairs give each shift and take the largest count.",
i:"img1 = [[1,1,0],[0,1,0],[0,1,0]], img2 = [[0,0,0],[0,1,1],[0,0,1]]",o:"3",time:"O(k1·k2)",space:"O(k1·k2)",
code:C(`
class Solution:
    def largestOverlap(self, img1, img2):
        a = [(i, j) for i, r in enumerate(img1) for j, v in enumerate(r) if v]
        b = [(i, j) for i, r in enumerate(img2) for j, v in enumerate(r) if v]
        cnt = Counter((x2 - x1, y2 - y1) for x1, y1 in a for x2, y2 in b)
        return max(cnt.values(), default=0)
`)});
lite({id:1572,slug:"matrix-diagonal-sum",title:"Matrix Diagonal Sum",level:"Easy",topic:MX,name:"Both diagonals, centre counted once",
w:"[[1,2,3],[4,5,6],[7,8,9]] → 1 + 5 + 9 + 3 + 7 = 25.",k:"Add mat[i][i] and mat[i][n−1−i] for every row; for odd n the centre cell is counted twice, so subtract it once.",
i:"mat = [[1,2,3],[4,5,6],[7,8,9]]",o:"25",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def diagonalSum(self, mat):
        n = len(mat)
        total = sum(mat[i][i] + mat[i][n - 1 - i] for i in range(n))
        return total - (mat[n // 2][n // 2] if n % 2 else 0)
`)});
lite({id:2529,slug:"maximum-count-of-positive-integer-and-negative-integer",title:"Maximum Count of Positive Integer and Negative Integer",level:"Easy",topic:BS,name:"Binary search the boundaries around zero",
w:"[-2,-1,-1,1,2,3] → 3 negatives and 3 positives → 3.",k:"The array is sorted. The number of negatives is the index of the first non-negative; the number of positives is n minus the index of the first positive. Return the larger.",
i:"nums = [-2,-1,-1,1,2,3]",o:"3",time:"O(log n)",space:"O(1)",
code:C(`
class Solution:
    def maximumCount(self, nums):
        neg = bisect_left(nums, 0)
        pos = len(nums) - bisect_right(nums, 0)
        return max(neg, pos)
`)});
lite({id:3498,slug:"reverse-degree-of-a-string",title:"Reverse Degree of a String",level:"Easy",topic:ARR,name:"Weight each letter by its reverse alphabet position and index",
w:"'abc' → 26·1 + 25·2 + 24·3 = 148.",k:"The reverse position of a letter is 26 for 'a' down to 1 for 'z'. Multiply it by the 1-based index of the letter in the string and add everything.",
i:"s = \"abc\"",o:"148",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def reverseDegree(self, s):
        return sum((26 - (ord(c) - 97)) * (i + 1) for i, c in enumerate(s))
`)});
lite({id:1096,slug:"brace-expansion-ii",title:"Brace Expansion II",level:"Hard",topic:STK,name:"Recursive descent over unions and products of sets",
w:"'{a,b}{c,{d,e}}' → {ac, ad, ae, bc, bd, be}.",k:"Grammar: an expression is a union (comma separated) of terms; a term is a concatenation (product) of factors; a factor is a letter or a braced expression. Parse with recursive descent: a union collects sets, a product combines sets by concatenating every pair of strings, and the result is returned sorted.",
i:"expression = \"{a,b}{c,{d,e}}\"",o:"['ac', 'ad', 'ae', 'bc', 'bd', 'be']",time:"O(output size)",space:"O(output size)",
code:C(`
class Solution:
    def braceExpansionII(self, expression):
        s = expression
        pos = 0
        def union():
            nonlocal pos
            res = set(product_terms())
            while pos < len(s) and s[pos] == ',':
                pos += 1
                res |= set(product_terms())
            return res
        def product_terms():
            nonlocal pos
            cur = {""}
            while pos < len(s) and s[pos] not in ',}':
                if s[pos] == '{':
                    pos += 1
                    inner = union()
                    pos += 1
                else:
                    inner = {s[pos]}
                    pos += 1
                cur = {a + b for a in cur for b in inner}
            return cur
        return sorted(union())
`)});
lite({id:1111,slug:"maximum-nesting-depth-of-two-valid-parentheses-strings",title:"Maximum Nesting Depth of Two Valid Parentheses Strings",level:"Medium",topic:GD,name:"Alternate the group by depth parity",
w:"'(()())' → [0,1,1,1,1,0].",k:"Split the parentheses into two groups so the larger nesting depth of the two is minimal: give each parenthesis to group (depth mod 2). The depth of a '(' is the nesting level after it opens; its matching ')' gets the same group.",
i:"seq = \"(()())\"",o:"[0, 1, 1, 1, 1, 0]",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def maxDepthAfterSplit(self, seq):
        res = []
        depth = 0
        for c in seq:
            if c == '(':
                depth += 1
                res.append((depth - 1) % 2)
            else:
                res.append((depth - 1) % 2)
                depth -= 1
        return res
`)});
lite({id:2778,slug:"sum-of-squares-of-special-elements",title:"Sum of Squares of Special Elements",level:"Easy",topic:ARR,name:"Indices that divide n",
w:"[1,2,3,4] (n=4): indices 1, 2, 4 divide 4 → 1 + 4 + 16 = 21.",k:"With 1-based indexing, element i is special if i divides n. Add the squares of those elements.",
i:"nums = [1,2,3,4]",o:"21",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def sumOfSquares(self, nums):
        n = len(nums)
        return sum(nums[i - 1] ** 2 for i in range(1, n + 1) if n % i == 0)
`)});
lite({id:436,slug:"find-right-interval",title:"Find Right Interval",level:"Medium",topic:BS,name:"Sorted starts and binary search",
w:"[[3,4],[2,3],[1,2]] → right intervals: [−1, 0, 1].",k:"For each interval find the interval with the smallest start ≥ its end. Sort the starts with their original indices and binary search each end.",
i:"intervals = [[3,4],[2,3],[1,2]]",o:"[-1, 0, 1]",time:"O(n log n)",space:"O(n)",
code:C(`
class Solution:
    def findRightInterval(self, intervals):
        starts = sorted((s, i) for i, (s, _) in enumerate(intervals))
        keys = [s for s, _ in starts]
        res = []
        for _, e in intervals:
            j = bisect_left(keys, e)
            res.append(starts[j][1] if j < len(starts) else -1)
        return res
`)});
lite({id:501,slug:"find-mode-in-binary-search-tree",title:"Find Mode in Binary Search Tree",level:"Easy",topic:BT,name:"In-order traversal counts equal runs",
w:"[1,null,2,2] → 2 appears most often → [2].",k:"An in-order walk of a BST (Binary Search Tree) visits values in sorted order so equal values are adjacent. Count the current run, track the maximum run length and collect the values reaching it.",
i:"root = [1,null,2,2]",o:"[2]",time:"O(n)",space:"O(h)",
code:C(`
class Solution:
    def findMode(self, root):
        best = 0
        modes = []
        prev = None
        run = 0
        stack = []
        node = root
        while stack or node:
            while node:
                stack.append(node)
                node = node.left
            node = stack.pop()
            run = run + 1 if node.val == prev else 1
            prev = node.val
            if run > best:
                best, modes = run, [node.val]
            elif run == best:
                modes.append(node.val)
            node = node.right
        return sorted(modes)
`)});
lite({id:705,slug:"design-hashset",title:"Design HashSet",level:"Easy",topic:DS,name:"Array of buckets",
w:"add(1), add(2), contains(1) → true, contains(3) → false, remove(2), contains(2) → false.",k:"Use a fixed number of buckets (lists); an element goes to the bucket of key % size. add checks for presence first, remove deletes it, contains scans the bucket.",
i:"MyHashSet(); add(1); add(2); contains(1); contains(3); add(2); contains(2); remove(2); contains(2)",o:"[None, None, True, False, None, True, None, False]",time:"O(1) average",space:"O(n)",
code:C(`
class MyHashSet:
    def __init__(self):
        self.size = 1009
        self.buckets = [[] for _ in range(self.size)]

    def add(self, key):
        b = self.buckets[key % self.size]
        if key not in b:
            b.append(key)

    def remove(self, key):
        b = self.buckets[key % self.size]
        if key in b:
            b.remove(key)

    def contains(self, key):
        return key in self.buckets[key % self.size]
`)});
lite({id:1027,slug:"longest-arithmetic-subsequence",title:"Longest Arithmetic Subsequence",level:"Medium",topic:DP,name:"dp[i][difference] = longest ending at i",
w:"[9,4,7,2,10] → 4,7,10 with difference 3 → length 3.",k:"For each pair j < i with difference d = nums[i] − nums[j], dp[i][d] = dp[j][d] + 1 (a sequence of two elements has length 2). Keep a dictionary of differences per index and track the maximum.",
i:"nums = [9,4,7,2,10]",o:"3",time:"O(n²)",space:"O(n²)",
code:C(`
class Solution:
    def longestArithSeqLength(self, nums):
        dp = [defaultdict(lambda: 1) for _ in nums]
        best = 2
        for i in range(len(nums)):
            for j in range(i):
                d = nums[i] - nums[j]
                dp[i][d] = dp[j][d] + 1
                best = max(best, dp[i][d])
        return best
`)});
lite({id:1042,slug:"flower-planting-with-no-adjacent",title:"Flower Planting With No Adjacent",level:"Medium",topic:GR,name:"Greedy: pick a colour no neighbour uses",
w:"3 gardens in a triangle: 1, 2, 3.",k:"Each garden has at most 3 neighbours and there are 4 flower types, so a free type always exists. Go through the gardens in order and give each the smallest type not used by an already-coloured neighbour.",
i:"n = 3, paths = [[1,2],[2,3],[3,1]]",o:"[1, 2, 3]",time:"O(n + p)",space:"O(n + p)",
code:C(`
class Solution:
    def gardenNoAdj(self, n, paths):
        g = defaultdict(list)
        for a, b in paths:
            g[a].append(b)
            g[b].append(a)
        color = [0] * (n + 1)
        for u in range(1, n + 1):
            used = {color[v] for v in g[u]}
            color[u] = next(c for c in range(1, 5) if c not in used)
        return color[1:]
`)});
lite({id:1122,slug:"relative-sort-array",title:"Relative Sort Array",level:"Easy",topic:SRT,name:"Sort with the position in arr2 as the key",
w:"arr1 [2,3,1,3,2,4,6,7,9,2,19], arr2 [2,1,4,3,9,6] → [2,2,2,1,4,3,3,9,6,7,19].",k:"Elements in arr2 come first in arr2's order; the rest follow in ascending order. Use the key (index in arr2 if present else a large number, value).",
i:"arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]",o:"[2, 2, 2, 1, 4, 3, 3, 9, 6, 7, 19]",time:"O(n log n)",space:"O(n)",
code:C(`
class Solution:
    def relativeSortArray(self, arr1, arr2):
        rank = {v: i for i, v in enumerate(arr2)}
        return sorted(arr1, key=lambda x: (rank.get(x, len(arr2)), x))
`)});
lite({id:1289,slug:"minimum-falling-path-sum-ii",title:"Minimum Falling Path Sum II",level:"Hard",topic:DP,name:"Keep the two smallest values of the previous row",
w:"[[1,2,3],[4,5,6],[7,8,9]] → 1 + 5 + 7 = 13.",k:"A falling path takes one element per row with no two in the same column as neighbours. For each cell the best previous cell is the smallest value in the previous row from a different column: keep the smallest and second smallest (with the column of the smallest) of the previous row.",
i:"grid = [[1,2,3],[4,5,6],[7,8,9]]",o:"13",time:"O(n²)",space:"O(n)",
code:C(`
class Solution:
    def minFallingPathSum(self, grid):
        prev = grid[0][:]
        for row in grid[1:]:
            order = sorted(range(len(prev)), key=lambda j: prev[j])
            m1, m2 = order[0], order[1] if len(order) > 1 else order[0]
            cur = []
            for j, v in enumerate(row):
                cur.append(v + (prev[m2] if j == m1 else prev[m1]))
            prev = cur
        return min(prev)
`)});
lite({id:1547,slug:"minimum-cost-to-cut-a-stick",title:"Minimum Cost to Cut a Stick",level:"Hard",topic:DP,name:"Interval DP over cut positions",
w:"n=7, cuts [1,3,4,5] → total cost 16.",k:"A cut costs the current stick length. Sort the cuts and add the ends 0 and n. dp[i][j] = cheapest way to make all cuts strictly between positions i and j: choose the first cut k and pay (pos[j] − pos[i]) + dp[i][k] + dp[k][j].",
i:"n = 7, cuts = [1,3,4,5]",o:"16",time:"O(c³)",space:"O(c²)",
code:C(`
class Solution:
    def minCost(self, n, cuts):
        pos = [0] + sorted(cuts) + [n]
        m = len(pos)
        dp = [[0] * m for _ in range(m)]
        for length in range(2, m):
            for i in range(m - length):
                j = i + length
                dp[i][j] = pos[j] - pos[i] + min(dp[i][k] + dp[k][j] for k in range(i + 1, j))
        return dp[0][m - 1]
`)});
lite({id:1578,slug:"minimum-time-to-make-rope-colorful",title:"Minimum Time to Make Rope Colorful",level:"Medium",topic:GD,name:"In each same-colour run keep the most expensive balloon",
w:"colors 'abaac', times [1,2,3,4,5]: in 'aa' remove the cheaper one (3) → 3.",k:"Neighbouring balloons of the same colour are a problem. In every run of equal colours keep the balloon with the largest removal time and remove all the others; the cost is the run's sum minus its maximum.",
i:"colors = \"abaac\", neededTime = [1,2,3,4,5]",o:"3",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def minCost(self, colors, neededTime):
        total = 0
        i = 0
        n = len(colors)
        while i < n:
            j = i
            run_sum = run_max = 0
            while j < n and colors[j] == colors[i]:
                run_sum += neededTime[j]
                run_max = max(run_max, neededTime[j])
                j += 1
            total += run_sum - run_max
            i = j
        return total
`)});
lite({id:2956,slug:"find-common-elements-between-two-arrays",title:"Find Common Elements Between Two Arrays",level:"Easy",topic:HM,name:"Count elements present in the other array",
w:"nums1 [4,3,2,3,1], nums2 [2,2,5,2,3,6] → [3, 4].",k:"answer1 is the number of indices in nums1 whose value occurs in nums2; answer2 likewise for nums2 in nums1. Use sets for membership.",
i:"nums1 = [4,3,2,3,1], nums2 = [2,2,5,2,3,6]",o:"[3, 4]",time:"O(n + m)",space:"O(n + m)",
code:C(`
class Solution:
    def findIntersectionValues(self, nums1, nums2):
        s1, s2 = set(nums1), set(nums2)
        return [sum(x in s2 for x in nums1), sum(x in s1 for x in nums2)]
`)});
lite({id:357,slug:"count-numbers-with-unique-digits",title:"Count Numbers with Unique Digits",level:"Medium",topic:MB,name:"Count by length with permutations",
w:"n=2 (numbers below 100): 91 numbers have no repeated digit.",k:"Numbers with exactly k digits (k ≥ 2) and no repeated digit: 9 choices for the first digit, then 9, 8, 7 … for the rest. Sum these over lengths 1…n plus 1 for the number 0.",
i:"n = 2",o:"91",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def countNumbersWithUniqueDigits(self, n):
        total = 1
        unique, avail = 9, 9
        for k in range(1, min(n, 10) + 1):
            if k == 1:
                total += 9
            else:
                unique *= avail
                avail -= 1
                total += unique
        return total
`)});
lite({id:2011,slug:"final-value-of-variable-after-performing-operations",title:"Final Value of Variable After Performing Operations",level:"Easy",topic:ARR,name:"Count '+' operations",
w:"['--X','X++','X++'] → 1.",k:"Each operation contains either '++' (adds 1) or '--' (subtracts 1). Check the middle character: '+' adds, '-' subtracts.",
i:"operations = [\"--X\",\"X++\",\"X++\"]",o:"1",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def finalValueAfterOperations(self, operations):
        return sum(1 if '+' in op else -1 for op in operations)
`)});
lite({id:1508,slug:"range-sum-of-sorted-subarray-sums",title:"Range Sum of Sorted Subarray Sums",level:"Medium",topic:HP,name:"Sort all subarray sums, add positions left…right",
w:"nums [1,2,3,4], left=1, right=5 → sorted sums 1,2,3,3,4 → 13.",k:"Compute the sums of all n(n+1)/2 non-empty subarrays, sort them and add the elements from position left to right (1-based) modulo 1e9+7.",
i:"nums = [1,2,3,4], n = 4, left = 1, right = 5",o:"13",time:"O(n² log n)",space:"O(n²)",
code:C(`
class Solution:
    def rangeSum(self, nums, n, left, right):
        sums = []
        for i in range(n):
            run = 0
            for j in range(i, n):
                run += nums[j]
                sums.append(run)
        sums.sort()
        return sum(sums[left - 1:right]) % (10**9 + 7)
`)});
lite({id:725,slug:"split-linked-list-in-parts",title:"Split Linked List in Parts",level:"Medium",topic:LL,name:"Parts differ in size by at most one, earlier parts bigger",
w:"[1,2,3] into 5 parts → [1],[2],[3],[],[].",k:"With length n and k parts, every part has n // k nodes and the first n % k parts get one extra. Walk the list and cut after each part's size.",
i:"head = [1,2,3], k = 5",o:"[[1], [2], [3], [], []]",time:"O(n + k)",space:"O(k)",
code:C(`
class Solution:
    def splitListToParts(self, head, k):
        n = 0
        node = head
        while node:
            n += 1
            node = node.next
        size, extra = divmod(n, k)
        parts = []
        node = head
        for i in range(k):
            parts.append(node)
            for _ in range(size + (1 if i < extra else 0) - 1):
                if node:
                    node = node.next
            if node:
                node.next, node = None, node.next
        return parts
`)});
lite({id:590,slug:"n-ary-tree-postorder-traversal",title:"N-ary Tree Postorder Traversal",level:"Easy",topic:BT,name:"Children first, then the node",
w:"root 1 with children 3, 2, 4 and 3's children 5, 6 → [5,6,3,2,4,1].",k:"Visit all children (left to right) recursively, then the node itself. An iterative version reverses a root-then-children-reversed traversal.",
i:"root = 1 with children 3 (children 5, 6), 2, 4",o:"[5, 6, 3, 2, 4, 1]",time:"O(n)",space:"O(h)",
code:C(`
class Solution:
    def postorder(self, root):
        res = []
        def go(node):
            if node:
                for c in node.children:
                    go(c)
                res.append(node.val)
        go(root)
        return res
`)});
lite({id:2419,slug:"longest-subarray-with-maximum-bitwise-and",title:"Longest Subarray With Maximum Bitwise AND",level:"Medium",topic:MB,name:"Longest run of the maximum value",
w:"[1,2,3,3,2,2] → the maximum 3 appears twice in a row → 2.",k:"The AND of a subarray is at most its minimum, and the largest possible AND equals the array maximum (achieved by subarrays of maximum values). So the answer is the longest run of consecutive copies of the maximum.",
i:"nums = [1,2,3,3,2,2]",o:"2",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def longestSubarray(self, nums):
        m = max(nums)
        best = run = 0
        for x in nums:
            run = run + 1 if x == m else 0
            best = max(best, run)
        return best
`)});
lite({id:1590,slug:"make-sum-divisible-by-p",title:"Make Sum Divisible by P",level:"Medium",topic:PS,name:"Shortest subarray with the right remainder",
w:"[3,1,4,2], p=6: remove [4] → remaining sum 6 → 1.",k:"Let r = total % p. We need to remove a subarray whose sum has remainder r, as short as possible (but not the whole array). Walk prefix remainders and store the latest index of each; at prefix remainder cur look for the earlier prefix with remainder (cur − r) mod p.",
i:"nums = [3,1,4,2], p = 6",o:"1",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def minSubarray(self, nums, p):
        r = sum(nums) % p
        if r == 0:
            return 0
        last = {0: -1}
        cur = 0
        best = len(nums)
        for i, x in enumerate(nums):
            cur = (cur + x) % p
            need = (cur - r) % p
            if need in last:
                best = min(best, i - last[need])
            last[cur] = i
        return best if best < len(nums) else -1
`)});
lite({id:2463,slug:"minimum-total-distance-traveled",title:"Minimum Total Distance Traveled",level:"Hard",topic:DP,name:"Sort both, DP over robots and factories",
w:"robots [0,4,6], factories [[2,2],[6,2]] → robots 0 and 4 to factory 2, robot 6 to factory 6 → total 4.",k:"Sort robots and factories by position. dp[i][j] = minimum distance for the first i robots using the first j factories. For factory j with capacity c, let it take the last t robots (0 ≤ t ≤ c) of the first i: dp[i][j] = min over t of dp[i−t][j−1] + sum of |robot − factory| for those t robots.",
i:"robot = [0,4,6], factory = [[2,2],[6,2]]",o:"4",time:"O(R·F·cap)",space:"O(R·F)",
code:C(`
class Solution:
    def minimumTotalDistance(self, robot, factory):
        robot.sort()
        factory.sort()
        INF = float('inf')
        n, m = len(robot), len(factory)
        dp = [[INF] * (m + 1) for _ in range(n + 1)]
        for j in range(m + 1):
            dp[0][j] = 0
        for j in range(1, m + 1):
            pos, cap = factory[j - 1]
            for i in range(1, n + 1):
                dp[i][j] = dp[i][j - 1]
                cost = 0
                for t in range(1, min(cap, i) + 1):
                    cost += abs(robot[i - t] - pos)
                    if dp[i - t][j - 1] + cost < dp[i][j]:
                        dp[i][j] = dp[i - t][j - 1] + cost
        return dp[n][m]
`)});
lite({id:1534,slug:"count-good-triplets",title:"Count Good Triplets",level:"Easy",topic:ARR,name:"Check every triple",
w:"arr [3,0,1,1,9,7], a=7, b=2, c=3 → 4 good triplets.",k:"A triplet i<j<k is good if |arr[i]−arr[j]| ≤ a, |arr[j]−arr[k]| ≤ b and |arr[i]−arr[k]| ≤ c. With n ≤ 100 just test all triples.",
i:"arr = [3,0,1,1,9,7], a = 7, b = 2, c = 3",o:"4",time:"O(n³)",space:"O(1)",
code:C(`
class Solution:
    def countGoodTriplets(self, arr, a, b, c):
        return sum(1 for i, j, k in combinations(range(len(arr)), 3)
                   if abs(arr[i] - arr[j]) <= a and abs(arr[j] - arr[k]) <= b and abs(arr[i] - arr[k]) <= c)
`)});
lite({id:3286,slug:"find-a-safe-walk-through-a-grid",title:"Find a Safe Walk Through a Grid",level:"Medium",topic:GR,name:"0-1 BFS tracking the least health lost",
w:"A grid with unsafe cells (1) that each cost 1 health: reach the bottom-right keeping health ≥ 1.",k:"Moving into an unsafe cell costs 1 health. Find the path that loses the least health with 0-1 BFS (Breadth-First Search with a deque: cost-0 moves to the front, cost-1 moves to the back). Return true if health − minimum loss is at least 1.",
i:"grid = [[0,1,0,0,0],[0,1,0,1,0],[0,0,0,1,0]], health = 1",o:"true",time:"O(m·n)",space:"O(m·n)",
code:C(`
class Solution:
    def findSafeWalk(self, grid, health):
        m, n = len(grid), len(grid[0])
        INF = float('inf')
        loss = [[INF] * n for _ in range(m)]
        loss[0][0] = grid[0][0]
        dq = deque([(0, 0)])
        while dq:
            i, j = dq.popleft()
            for a, b in ((i + 1, j), (i - 1, j), (i, j + 1), (i, j - 1)):
                if 0 <= a < m and 0 <= b < n:
                    nl = loss[i][j] + grid[a][b]
                    if nl < loss[a][b]:
                        loss[a][b] = nl
                        if grid[a][b]:
                            dq.append((a, b))
                        else:
                            dq.appendleft((a, b))
        return health - loss[m - 1][n - 1] >= 1
`)});
lite({id:1373,slug:"maximum-sum-bst-in-binary-tree",title:"Maximum Sum BST in Binary Tree",level:"Hard",topic:BT,name:"Post-order returning (isBST, min, max, sum)",
w:"[1,4,3,2,4,2,5,null,null,null,null,null,null,4,6]: the BST (Binary Search Tree) rooted at 3 has sum 20.",k:"For every node compute from its children whether the subtree is a BST (left max < node < right min), its minimum, its maximum and its sum. Update the answer with the sum of every BST subtree (never negative: an empty tree counts 0).",
i:"root = [1,4,3,2,4,2,5,null,null,null,null,null,null,4,6]",o:"20",time:"O(n)",space:"O(h)",
code:C(`
class Solution:
    def maxSumBST(self, root):
        best = 0
        def go(node):
            nonlocal best
            if not node:
                return (True, float('inf'), float('-inf'), 0)
            lb, lmin, lmax, ls = go(node.left)
            rb, rmin, rmax, rs = go(node.right)
            if lb and rb and lmax < node.val < rmin:
                s = ls + rs + node.val
                best = max(best, s)
                return (True, min(lmin, node.val), max(rmax, node.val), s)
            return (False, 0, 0, 0)
        go(root)
        return best
`)});
lite({id:3152,slug:"special-array-ii",title:"Special Array II",level:"Medium",topic:PS,name:"Prefix count of same-parity neighbour pairs",
w:"[4,3,1,6], query [2,3] → 1 and 6 have different parity → true.",k:"A subarray is special if no two neighbours share the same parity. Prefix-sum the positions i where nums[i] and nums[i−1] have the same parity; a query [l, r] is true when there is no such position in (l, r].",
i:"nums = [4,3,1,6], queries = [[0,4],[2,3]]",o:"[False, True]",time:"O(n + q)",space:"O(n)",
code:C(`
class Solution:
    def isArraySpecial(self, nums, queries):
        bad = [0] * len(nums)
        for i in range(1, len(nums)):
            bad[i] = bad[i - 1] + (nums[i] % 2 == nums[i - 1] % 2)
        return [bad[r] - bad[l] == 0 for l, r in queries]
`)});
lite({id:2185,slug:"counting-words-with-a-given-prefix",title:"Counting Words With a Given Prefix",level:"Easy",topic:ARR,name:"startswith",
w:"['pay','attention','practice','attend'] with prefix 'at' → 2.",k:"Count the words that start with the prefix.",
i:"words = [\"pay\",\"attention\",\"practice\",\"attend\"], pref = \"at\"",o:"2",time:"O(n·L)",space:"O(1)",
code:C(`
class Solution:
    def prefixCount(self, words, pref):
        return sum(w.startswith(pref) for w in words)
`)});
lite({id:916,slug:"word-subsets",title:"Word Subsets",level:"Medium",topic:HM,name:"Merge the requirements of words2 into one maximum-count table",
w:"words2 ['e','o'] needs one 'e' and one 'o' → 'facebook', 'google', 'leetcode' are universal.",k:"A word is universal if it contains every word of words2 as a subset (with multiplicity). Combine words2 into a single table: for each letter the maximum count needed by any word. Then check each word of words1 against the table.",
i:"words1 = [\"amazon\",\"apple\",\"facebook\",\"google\",\"leetcode\"], words2 = [\"e\",\"o\"]",o:"['facebook', 'google', 'leetcode']",time:"O(total length)",space:"O(26)",
code:C(`
class Solution:
    def wordSubsets(self, words1, words2):
        need = Counter()
        for w in words2:
            need |= Counter(w)
        return [w for w in words1 if not (need - Counter(w))]
`)});
lite({id:624,slug:"maximum-distance-in-arrays",title:"Maximum Distance in Arrays",level:"Medium",topic:GD,name:"Pair the smallest so far with the current largest",
w:"[[1,2,3],[4,5],[1,2,3]] → 5 − 1 = 4.",k:"The best pair uses the minimum of one array and the maximum of another. Scan the arrays keeping the smallest first element and the largest last element seen so far (from earlier arrays) and test each array against them.",
i:"arrays = [[1,2,3],[4,5],[1,2,3]]",o:"4",time:"O(m)",space:"O(1)",
code:C(`
class Solution:
    def maxDistance(self, arrays):
        lo, hi = arrays[0][0], arrays[0][-1]
        best = 0
        for a in arrays[1:]:
            best = max(best, abs(a[-1] - lo), abs(hi - a[0]))
            lo = min(lo, a[0])
            hi = max(hi, a[-1])
        return best
`)});
lite({id:3429,slug:"paint-house-iv",title:"Paint House IV",level:"Medium",topic:DP,name:"DP over mirrored pairs of houses",
w:"n=4 houses with costs for 3 colours: pair (0,3) and (1,2) get different colours inside each pair and neighbours differ.",k:"n is even; house i and n−1−i must have different colours, and neighbouring houses differ. Process the pairs from the outside to the middle: state = (colour of the left house, colour of the right house) of the current pair. A pair (c1, c2) can follow a pair (p1, p2) if c1 ≠ c2, c1 ≠ p1 and c2 ≠ p2. Minimise the total cost.",
i:"n = 4, cost = [[3,5,7],[6,2,9],[4,8,1],[7,3,5]]",o:"9",time:"O(n·81)",space:"O(9)",
code:C(`
class Solution:
    def minCost(self, n, cost):
        dp = {}
        for a in range(3):
            for b in range(3):
                if a != b:
                    dp[(a, b)] = cost[0][a] + cost[n - 1][b]
        for i in range(1, n // 2):
            new = {}
            for a in range(3):
                for b in range(3):
                    if a == b:
                        continue
                    best = min(v for (p, q), v in dp.items() if p != a and q != b)
                    new[(a, b)] = best + cost[i][a] + cost[n - 1 - i][b]
            dp = new
        return min(dp.values())
`)});
lite({id:2418,slug:"sort-the-people",title:"Sort the People",level:"Easy",topic:SRT,name:"Sort names by height descending",
w:"names ['Mary','John','Emma'], heights [180,165,170] → ['Mary','Emma','John'].",k:"Pair each name with its height and sort by height descending.",
i:"names = [\"Mary\",\"John\",\"Emma\"], heights = [180,165,170]",o:"['Mary', 'Emma', 'John']",time:"O(n log n)",space:"O(n)",
code:C(`
class Solution:
    def sortPeople(self, names, heights):
        return [n for _, n in sorted(zip(heights, names), reverse=True)]
`)});
lite({id:1763,slug:"longest-nice-substring",title:"Longest Nice Substring",level:"Easy",topic:SW,name:"Split on letters missing their other case",
w:"'YazaAay' → 'aAa'.",k:"A string is nice if every letter that appears also appears in the other case. If a letter's counterpart is missing, no nice substring can contain it: split there and solve both sides recursively. Return the longest nice piece (earliest on ties).",
i:"s = \"YazaAay\"",o:"\"aAa\"",time:"O(n²)",space:"O(n)",
code:C(`
class Solution:
    def longestNiceSubstring(self, s):
        if len(s) < 2:
            return ""
        chars = set(s)
        for i, c in enumerate(s):
            if c.swapcase() not in chars:
                left = self.longestNiceSubstring(s[:i])
                right = self.longestNiceSubstring(s[i + 1:])
                return left if len(left) >= len(right) else right
        return s
`)});
lite({id:1980,slug:"find-unique-binary-string",title:"Find Unique Binary String",level:"Medium",topic:MB,name:"Cantor's diagonal",
w:"['01','10'] → flip the diagonal bits to get '11', which differs from both.",k:"Build a string whose i-th character is the opposite of the i-th character of the i-th given string. It differs from each given string in at least one position.",
i:"nums = [\"01\",\"10\"]",o:"\"11\"",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def findDifferentBinaryString(self, nums):
        return ''.join('1' if nums[i][i] == '0' else '0' for i in range(len(nums)))
`)});
lite({id:1028,slug:"recover-a-tree-from-preorder-traversal",title:"Recover a Tree From Preorder Traversal",level:"Hard",topic:BT,name:"Stack of the current path, depth = number of dashes",
w:"'1-2--3--4-5--6--7' rebuilds the full binary tree [1,2,5,3,4,6,7].",k:"Each node is written as dashes (its depth) followed by its value. Scan the string: read the dashes and the number; pop the stack until its size equals the depth; the node is the left child of the stack top if that has no left child, otherwise its right child. Push the node.",
i:"traversal = \"1-2--3--4-5--6--7\"",o:"[1, 2, 5, 3, 4, 6, 7]",time:"O(n)",space:"O(h)",
code:C(`
class Solution:
    def recoverFromPreorder(self, traversal):
        stack = []
        i = 0
        n = len(traversal)
        while i < n:
            depth = 0
            while i < n and traversal[i] == '-':
                depth += 1
                i += 1
            j = i
            while j < n and traversal[j].isdigit():
                j += 1
            node = TreeNode(int(traversal[i:j]))
            i = j
            while len(stack) > depth:
                stack.pop()
            if stack:
                if stack[-1].left is None:
                    stack[-1].left = node
                else:
                    stack[-1].right = node
            stack.append(node)
        return stack[0]
`)});
lite({id:1780,slug:"check-if-number-is-a-sum-of-powers-of-three",title:"Check if Number is a Sum of Powers of Three",level:"Medium",topic:MB,name:"Base-3 digits must be 0 or 1",
w:"12 = 3 + 9 → true; 21 has a base-3 digit 2 → false.",k:"Each power of three can be used at most once, so n is such a sum exactly when its base-3 representation has only 0s and 1s.",
i:"n = 12",o:"true",time:"O(log n)",space:"O(1)",
code:C(`
class Solution:
    def checkPowersOfThree(self, n):
        while n:
            if n % 3 == 2:
                return False
            n //= 3
        return True
`)});
lite({id:3306,slug:"count-of-substrings-containing-every-vowel-and-k-consonants-ii",title:"Count of Substrings Containing Every Vowel and K Consonants II",level:"Medium",topic:SW,name:"atLeast(k) − atLeast(k+1)",
w:"'aeioqq', k=1: the only window with all five vowels is 'aeio' + 'q', but it needs exactly one consonant, and no vowel set completes within one; the answer is 0.",k:"Count the substrings with all five vowels and at least k consonants, then subtract those with at least k+1. For a fixed right end the valid starts form a prefix of positions, so a sliding window (move left while the window still satisfies the 'at least' condition) gives the count in O(n).",
i:"word = \"aeioqq\", k = 1",o:"0",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def countOfSubstrings(self, word, k):
        def at_least(k):
            vow = Counter()
            cons = left = res = 0
            for ch in word:
                if ch in 'aeiou':
                    vow[ch] += 1
                else:
                    cons += 1
                while len(vow) == 5 and cons >= k:
                    c = word[left]
                    if c in 'aeiou':
                        vow[c] -= 1
                        if vow[c] == 0:
                            del vow[c]
                    else:
                        cons -= 1
                    left += 1
                res += left
            return res
        return at_least(k) - at_least(k + 1)
`)});
lite({id:2206,slug:"divide-array-into-equal-pairs",title:"Divide Array Into Equal Pairs",level:"Easy",topic:HM,name:"Every value must appear an even number of times",
w:"[3,2,3,2,2,2] → 3 appears twice, 2 four times → true.",k:"The array can be split into pairs of equal numbers exactly when every value occurs an even number of times.",
i:"nums = [3,2,3,2,2,2]",o:"true",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def divideArray(self, nums):
        return all(c % 2 == 0 for c in Counter(nums).values())
`)});
lite({id:2058,slug:"find-the-minimum-and-maximum-number-of-nodes-between-critical-points",title:"Find the Minimum and Maximum Number of Nodes Between Critical Points",level:"Medium",topic:LL,name:"Collect critical positions in one pass",
w:"[5,3,1,2,5,1,2] has critical points at positions 2, 4 and 5 → [1, 3].",k:"A critical point is an inner node that is a local maximum or minimum. Record their positions. The minimum distance is the smallest gap between consecutive positions and the maximum is last − first; with fewer than two critical points return [−1, −1].",
i:"head = [5,3,1,2,5,1,2]",o:"[1, 3]",time:"O(n)",space:"O(c)",
code:C(`
class Solution:
    def nodesBetweenCriticalPoints(self, head):
        pos = []
        prev, cur = head, head.next
        i = 1
        while cur and cur.next:
            nxt = cur.next
            if (cur.val > prev.val and cur.val > nxt.val) or (cur.val < prev.val and cur.val < nxt.val):
                pos.append(i)
            prev, cur = cur, nxt
            i += 1
        if len(pos) < 2:
            return [-1, -1]
        return [min(b - a for a, b in zip(pos, pos[1:])), pos[-1] - pos[0]]
`)});
lite({id:848,slug:"shifting-letters",title:"Shifting Letters",level:"Medium",topic:PS,name:"Suffix sums of the shifts",
w:"'abc' with shifts [3,5,9] → letter 0 shifts 17, letter 1 shifts 14, letter 2 shifts 9 → 'rpl'.",k:"Shifts[i] applies to the first i+1 letters, so letter j moves by the sum of shifts[j:]. Compute suffix sums (mod 26) from the right.",
i:"s = \"abc\", shifts = [3,5,9]",o:"\"rpl\"",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def shiftingLetters(self, s, shifts):
        res = []
        total = 0
        for c, sh in zip(reversed(s), reversed(shifts)):
            total = (total + sh) % 26
            res.append(chr((ord(c) - 97 + total) % 26 + 97))
        return ''.join(reversed(res))
`)});
lite({id:747,slug:"largest-number-at-least-twice-of-others",title:"Largest Number At Least Twice of Others",level:"Easy",topic:ARR,name:"Compare the maximum with the second maximum",
w:"[3,6,1,0] → 6 ≥ 2·3 → index 1.",k:"Find the largest and second largest values. The largest is dominant if it is at least twice the second largest; return its index, else −1.",
i:"nums = [3,6,1,0]",o:"1",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def dominantIndex(self, nums):
        top = max(nums)
        second = max((x for x in nums if x != top), default=0)
        return nums.index(top) if top >= 2 * second else -1
`)});
lite({id:2179,slug:"count-good-triplets-in-an-array",title:"Count Good Triplets in an Array",level:"Hard",topic:UF,name:"Fenwick tree over positions in nums2",
w:"nums1 [2,0,1,3], nums2 [0,1,2,3] → the only good triplet is (0,1,3) → 1.",k:"A triplet of values (x, y, z) is good if they appear in the same order in both arrays. Map each value to its position in nums2. Scan nums1: for value v at nums2-position p, the number of earlier values with a smaller position is a Fenwick-tree prefix count (left), and the values still to come with a larger position = (n − 1 − p) − (earlier values with a larger position). The middle element contributes left × right.",
i:"nums1 = [2,0,1,3], nums2 = [0,1,2,3]",o:"1",time:"O(n log n)",space:"O(n)",
code:C(`
class Solution:
    def goodTriplets(self, nums1, nums2):
        n = len(nums1)
        where = {v: i for i, v in enumerate(nums2)}
        tree = [0] * (n + 1)
        def add(i):
            i += 1
            while i <= n:
                tree[i] += 1
                i += i & -i
        def query(i):
            s = 0
            while i > 0:
                s += tree[i]
                i -= i & -i
            return s
        res = 0
        for k, v in enumerate(nums1):
            p = where[v]
            left = query(p)
            right = (n - 1 - p) - (k - left)
            res += left * right
            add(p)
        return res
`)});
lite({id:2176,slug:"count-equal-and-divisible-pairs-in-an-array",title:"Count Equal and Divisible Pairs in an Array",level:"Easy",topic:ARR,name:"Check every pair",
w:"[3,1,2,2,2,1,3], k=2 → 4 pairs.",k:"Count pairs i<j with nums[i] == nums[j] and i·j divisible by k. n ≤ 100, so test all pairs.",
i:"nums = [3,1,2,2,2,1,3], k = 2",o:"4",time:"O(n²)",space:"O(1)",
code:C(`
class Solution:
    def countPairs(self, nums, k):
        n = len(nums)
        return sum(1 for i in range(n) for j in range(i + 1, n) if nums[i] == nums[j] and i * j % k == 0)
`)});
lite({id:1778,slug:"shortest-path-in-a-hidden-grid",title:"Shortest Path in a Hidden Grid",level:"Medium",topic:GR,name:"DFS to map the grid through the robot, then BFS",
w:"A robot walks in an unknown 3×3 maze; after exploring we know the free cells and the target at the far corner, and the shortest path has 4 moves.",k:"You can only call master.canMove(d), master.move(d) and master.isTarget(). First explore with DFS (Depth-First Search): from each cell try the four directions, move into new free cells, record their coordinates (relative to the start) and move back afterwards. Then run a BFS (Breadth-First Search) on the recorded cells from the start to the target; return −1 if the target was never found.",
i:"hidden grid [[0,0,1],[1,0,0],[0,0,0]], start top-left, target bottom-right",o:"4",time:"O(m·n)",space:"O(m·n)",
code:C(`
class Solution:
    def findShortestPath(self, master):
        dirs = {'U': (-1, 0), 'D': (1, 0), 'L': (0, -1), 'R': (0, 1)}
        back = {'U': 'D', 'D': 'U', 'L': 'R', 'R': 'L'}
        free = {(0, 0)}
        target = [None]
        def dfs(x, y):
            if master.isTarget():
                target[0] = (x, y)
            for d, (dx, dy) in dirs.items():
                nx, ny = x + dx, y + dy
                if (nx, ny) not in free and master.canMove(d):
                    free.add((nx, ny))
                    master.move(d)
                    dfs(nx, ny)
                    master.move(back[d])
        dfs(0, 0)
        if target[0] is None:
            return -1
        q = deque([((0, 0), 0)])
        seen = {(0, 0)}
        while q:
            (x, y), dist = q.popleft()
            if (x, y) == target[0]:
                return dist
            for dx, dy in dirs.values():
                nxt = (x + dx, y + dy)
                if nxt in free and nxt not in seen:
                    seen.add(nxt)
                    q.append((nxt, dist + 1))
        return -1
`)});
