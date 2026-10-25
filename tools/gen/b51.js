const {lite}=require("./lib");
const C=s=>s.replace(/^\n/,"").replace(/\n$/,"").split("\n");
const ARR="Array / String",HM="Hash Map / Set",STK="Stack / Monotonic Stack",BT="Binary Tree",GR="Graph",HP="Heap",DP="Dynamic Programming",GD="Greedy",MB="Math / Bit Manipulation",BS="Binary Search",SRT="Sorting",SW="Sliding Window",MX="Matrix",UF="Union Find / Segment Tree",TP="Two Pointers",IV="Intervals",BTK="Backtracking",DS="Design",LL="Linked List",TR="Trie",PS="Prefix Sum";
// ---- IBM
lite({id:3159,slug:"find-occurrences-of-an-element-in-an-array",title:"Find Occurrences of an Element in an Array",level:"Medium",topic:HM,name:"List the positions of x, answer by index",
w:"nums [1,3,1,7], x=1: positions are [0,2]; the 1st → 0, 3rd → −1.",k:"Store the indices where x occurs. The k-th occurrence is positions[k−1] if it exists, otherwise −1.",
i:"nums = [1,3,1,7], queries = [1,3,2,4], x = 1",o:"[0, -1, 2, -1]",time:"O(n + q)",space:"O(n)",
code:C(`
class Solution:
    def occurrencesOfElement(self, nums, queries, x):
        pos = [i for i, v in enumerate(nums) if v == x]
        return [pos[q - 1] if q <= len(pos) else -1 for q in queries]
`)});
lite({id:3402,slug:"minimum-operations-to-make-columns-strictly-increasing",title:"Minimum Operations to Make Columns Strictly Increasing",level:"Easy",topic:MX,name:"Raise each cell just above the one over it",
w:"Column [3,1,3,0] becomes [3,4,5,6]: 0 + 3 + 2 + 6 = 11 operations for that column.",k:"Handle each column independently, top to bottom. A cell must be at least (value above) + 1; if it is smaller, raise it by the difference and count those increments.",
i:"grid = [[3,2],[1,3],[3,4],[0,1]]",o:"15",time:"O(m·n)",space:"O(1)",
code:C(`
class Solution:
    def minimumOperations(self, grid):
        ops = 0
        for j in range(len(grid[0])):
            prev = grid[0][j]
            for i in range(1, len(grid)):
                need = max(0, prev + 1 - grid[i][j])
                ops += need
                prev = grid[i][j] + need
        return ops
`)});
lite({id:3175,slug:"find-the-first-player-to-win-k-games-in-a-row",title:"Find The First Player to win K Games in a Row",level:"Medium",topic:ARR,name:"Track the current champion's streak",
w:"skills [4,2,6,3,9], k=2: 4 beats 2, loses to 6; 6 beats 3 (2 wins in a row) → player 2.",k:"The front player plays the next in line; the winner stays and the loser goes to the back. That is the same as keeping a champion index and a win streak while scanning the others. If nobody reaches k wins, the strongest player ends up as champion.",
i:"skills = [4,2,6,3,9], k = 2",o:"2",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def findWinningPlayer(self, skills, k):
        cur, wins = 0, 0
        for i in range(1, len(skills)):
            if skills[i] > skills[cur]:
                cur, wins = i, 1
            else:
                wins += 1
            if wins == k:
                return cur
        return cur
`)});
lite({id:2545,slug:"sort-the-students-by-their-kth-score",title:"Sort the Students by Their Kth Score",level:"Medium",topic:SRT,name:"Sort rows by one column, descending",
w:"Sorting by column 2: scores 11, 9, 3 → rows come out [7,5,11,2], [10,6,9,1], [4,8,3,15].",k:"Each row is a student. Sort the rows by the value in column k, largest first.",
i:"score = [[10,6,9,1],[7,5,11,2],[4,8,3,15]], k = 2",o:"[[7, 5, 11, 2], [10, 6, 9, 1], [4, 8, 3, 15]]",time:"O(m log m)",space:"O(m)",
code:C(`
class Solution:
    def sortTheStudents(self, score, k):
        return sorted(score, key=lambda row: -row[k])
`)});
lite({id:3820,slug:"pythagorean-distance-nodes-in-a-tree",title:"Pythagorean Distance Nodes in a Tree",level:"Medium",topic:GR,name:"BFS from x, y and z, test each node",
w:"Star with centre 0 and targets 1, 2, 3: node 1 sees distances (0, 2, 2) and 0² + 2² = 2² → special; same for 2 and 3 → 3.",k:"Run a BFS from each of the three target nodes to get the distance of every node to x, y and z. For a node sort its three distances (a ≤ b ≤ c) and check a² + b² = c².",
i:"n = 4, edges = [[0,1],[0,2],[0,3]], x = 1, y = 2, z = 3",o:"3",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def specialNodes(self, n, edges, x, y, z):
        g = [[] for _ in range(n)]
        for a, b in edges:
            g[a].append(b)
            g[b].append(a)
        def bfs(s):
            d = [-1] * n
            d[s] = 0
            q = deque([s])
            while q:
                u = q.popleft()
                for v in g[u]:
                    if d[v] < 0:
                        d[v] = d[u] + 1
                        q.append(v)
            return d
        dx, dy, dz = bfs(x), bfs(y), bfs(z)
        res = 0
        for i in range(n):
            a, b, c = sorted((dx[i], dy[i], dz[i]))
            if a * a + b * b == c * c:
                res += 1
        return res
`)});
lite({id:2907,slug:"maximum-profitable-triplets-with-increasing-prices-i",title:"Maximum Profitable Triplets With Increasing Prices I",level:"Medium",topic:ARR,name:"Best left and best right around every middle",
w:"prices [10,2,3,4], profits [100,2,7,10]: pick 2,3,4 → 2 + 7 + 10 = 19.",k:"Fix the middle index j. On its left take the most profitable item with a lower price; on its right the most profitable item with a higher price. If both exist, that triple's profit is a candidate. Check all j (n is at most 2000, so O(n²) is fine).",
i:"prices = [10,2,3,4], profits = [100,2,7,10]",o:"19",time:"O(n²)",space:"O(1)",
code:C(`
class Solution:
    def maxProfit(self, prices, profits):
        n = len(prices)
        best = -1
        for j in range(n):
            left = max((profits[i] for i in range(j) if prices[i] < prices[j]), default=-1)
            right = max((profits[k] for k in range(j + 1, n) if prices[k] > prices[j]), default=-1)
            if left > 0 and right > 0:
                best = max(best, left + profits[j] + right)
        return best
`)});
lite({id:2921,slug:"maximum-profitable-triplets-with-increasing-prices-ii",title:"Maximum Profitable Triplets With Increasing Prices II",level:"Hard",topic:UF,name:"Two Fenwick trees for prefix maxima",
w:"Same as part I with much larger input: left/right best profits are found with Fenwick trees → 19 for the sample.",k:"Same idea as part I, but n is up to 50 000. Compress the prices, then use a Fenwick tree that stores the maximum profit seen for each price rank: scanning left to right it answers 'best profit among cheaper items' as a prefix maximum; scanning right to left with reversed ranks it answers 'best profit among pricier items'.",
i:"prices = [10,2,3,4], profits = [100,2,7,10]",o:"19",time:"O(n log n)",space:"O(n)",
code:C(`
class Solution:
    def maxProfit(self, prices, profits):
        n = len(prices)
        rank = {v: i + 1 for i, v in enumerate(sorted(set(prices)))}
        m = len(rank)
        def update(t, i, v):
            while i <= m:
                t[i] = max(t[i], v)
                i += i & -i
        def query(t, i):
            r = -1
            while i > 0:
                r = max(r, t[i])
                i -= i & -i
            return r
        left = [-1] * n
        t = [-1] * (m + 1)
        for j in range(n):
            left[j] = query(t, rank[prices[j]] - 1)
            update(t, rank[prices[j]], profits[j])
        best = -1
        t = [-1] * (m + 1)
        for j in range(n - 1, -1, -1):
            r = query(t, m - rank[prices[j]])
            update(t, m - rank[prices[j]] + 1, profits[j])
            if left[j] > 0 and r > 0:
                best = max(best, left[j] + profits[j] + r)
        return best
`)});
lite({id:3024,slug:"type-of-triangle",title:"Type of Triangle",level:"Easy",topic:MB,name:"Triangle inequality, then count equal sides",
w:"[3,4,5] → all sides different → scalene; [8,4,4] → 4 + 4 is not more than 8 → none.",k:"Sort the sides; a triangle exists only if the two smaller add up to more than the largest. Then 1 distinct length means equilateral, 2 isosceles, 3 scalene.",
i:"nums = [3,4,5]",o:"\"scalene\"",time:"O(1)",space:"O(1)",
code:C(`
class Solution:
    def triangleType(self, nums):
        a, b, c = sorted(nums)
        if a + b <= c:
            return "none"
        return ["equilateral", "isosceles", "scalene"][len(set(nums)) - 1]
`)});
lite({id:3096,slug:"minimum-levels-to-gain-more-points",title:"Minimum Levels to Gain More Points",level:"Medium",topic:PS,name:"Prefix sum of +1 / −1",
w:"possible [1,0,1,0]: Alice plays level 0 (+1), Bob plays 1,0,1... Alice 1 > Bob −1 → 1 level.",k:"A playable level gives +1 and an impossible one gives −1. Alice plays the first i levels, Bob the rest (each must play at least one). Using the total score, Alice's prefix p beats Bob when p > total − p. Return the smallest i that works.",
i:"possible = [1,0,1,0]",o:"1",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def minimumLevels(self, possible):
        score = [1 if p else -1 for p in possible]
        total = sum(score)
        pre = 0
        for i in range(len(score) - 1):
            pre += score[i]
            if pre > total - pre:
                return i + 1
        return -1
`)});
lite({id:3147,slug:"taking-maximum-energy-from-the-mystic-dungeon",title:"Taking Maximum Energy From the Mystic Dungeon",level:"Medium",topic:DP,name:"Suffix sums with stride k",
w:"[5,2,−10,−5,1], k=3: start at 0 → 5 + (−5) = 0; start at 1 → 2 + 1 = 3 → best 3.",k:"From a start you jump k places until you fall off the end, collecting energy. Define total[i] = energy[i] + total[i+k]; compute from the right and return the maximum total.",
i:"energy = [5,2,-10,-5,1], k = 3",o:"3",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def maximumEnergy(self, energy, k):
        n = len(energy)
        total = energy[:]
        for i in range(n - 1 - k, -1, -1):
            total[i] += total[i + k]
        return max(total)
`)});
lite({id:3107,slug:"minimum-operations-to-make-median-of-array-equal-to-k",title:"Minimum Operations to Make Median of Array Equal to K",level:"Medium",topic:SRT,name:"Fix the middle, then the offenders",
w:"[2,5,6,8,5], k=4: sorted [2,5,5,6,8]; the median 5 → 4 costs 1, and the left 5 must also drop to 4 (1 more) → 2.",k:"After sorting, the median is the element at index n // 2 (the larger middle). Move it to k, then every element left of it must be ≤ k and every element right of it must be ≥ k, fixing only the violators.",
i:"nums = [2,5,6,8,5], k = 4",o:"2",time:"O(n log n)",space:"O(1)",
code:C(`
class Solution:
    def minOperationsToMakeMedianK(self, nums, k):
        nums.sort()
        m = len(nums) // 2
        ops = abs(nums[m] - k)
        for i in range(m):
            ops += max(0, nums[i] - k)
        for i in range(m + 1, len(nums)):
            ops += max(0, k - nums[i])
        return ops
`)});
lite({id:3145,slug:"find-products-of-elements-of-big-array",title:"Find Products of Elements of Big Array",level:"Hard",topic:MB,name:"Count set bits and exponent sums up to n",
w:"big_nums starts 1,2,1,2,4,1,4,2,4,1,… so the product of positions 1…3 is 2·1·2 = 4.",k:"big_nums is the concatenation, for i = 1, 2, 3 …, of the powers of two in i's binary expansion. Every element is a power of two, so a product is 2^(sum of exponents). Let pre(k) be the sum of exponents of the first k elements: binary search the largest number m whose total set-bit count up to m is ≤ k, add the exponent sum of 1…m (counted bit by bit) and the lowest remaining set bits of m+1. The answer is 2^(pre(to+1) − pre(from)) mod m.",
i:"queries = [[1,3,7]]",o:"[4]",time:"O(q · log² N)",space:"O(1)",
code:C(`
class Solution:
    def findProductsOfElements(self, queries):
        def ones(n):
            total = 0
            for b in range(60):
                step = 1 << (b + 1)
                total += (n + 1) // step * (1 << b) + max(0, (n + 1) % step - (1 << b))
            return total
        def exps(n):
            total = 0
            for b in range(60):
                step = 1 << (b + 1)
                total += b * ((n + 1) // step * (1 << b) + max(0, (n + 1) % step - (1 << b)))
            return total
        def pre(k):
            lo, hi = 0, 1 << 50
            while lo < hi:
                mid = (lo + hi + 1) // 2
                if ones(mid) <= k:
                    lo = mid
                else:
                    hi = mid - 1
            rem = k - ones(lo)
            res = exps(lo)
            x = lo + 1
            for _ in range(rem):
                low = x & -x
                res += low.bit_length() - 1
                x -= low
            return res
        return [pow(2, pre(r + 1) - pre(l), m) for l, r, m in queries]
`)});
lite({id:2455,slug:"average-value-of-even-numbers-that-are-divisible-by-three",title:"Average Value of Even Numbers That Are Divisible by Three",level:"Easy",topic:ARR,name:"Keep multiples of 6",
w:"[1,3,6,10,12,15]: 6 and 12 qualify → (6 + 12) / 2 = 9.",k:"Even and divisible by 3 means divisible by 6. Average those with integer division, or 0 if none.",
i:"nums = [1,3,6,10,12,15]",o:"9",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def averageValue(self, nums):
        good = [x for x in nums if x % 6 == 0]
        return sum(good) // len(good) if good else 0
`)});
lite({id:2562,slug:"find-the-array-concatenation-value",title:"Find the Array Concatenation Value",level:"Easy",topic:TP,name:"Concatenate first and last, move inwards",
w:"[7,52,2,4]: 74 + 522 = 596.",k:"Take the first and last numbers, glue their digits (first then last) and add the result; then move both ends inwards. A middle leftover is added as is.",
i:"nums = [7,52,2,4]",o:"596",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def findTheArrayConcVal(self, nums):
        i, j = 0, len(nums) - 1
        total = 0
        while i < j:
            total += int(str(nums[i]) + str(nums[j]))
            i += 1
            j -= 1
        if i == j:
            total += nums[i]
        return total
`)});
lite({id:3223,slug:"minimum-length-of-string-after-operations",title:"Minimum Length of String After Operations",level:"Medium",topic:HM,name:"Odd count leaves one, even count leaves two",
w:"'abaacbcbb': a×3 → 1, b×4 → 2, c×2 → 2 → 5.",k:"An operation deletes the nearest equal letters on both sides of a chosen letter, removing 2 of that letter at a time while at least 3 remain. So a letter with count c shrinks to 1 if c is odd, or to 2 if c is even (c ≥ 2). Sum over the letters.",
i:"s = \"abaacbcbb\"",o:"5",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def minimumLength(self, s):
        return sum(1 if c % 2 else 2 for c in Counter(s).values())
`)});
lite({id:754,slug:"reach-a-number",title:"Reach a Number",level:"Medium",topic:MB,name:"Smallest k whose sum covers the target with right parity",
w:"target 2: 1+2 = 3 overshoots by 1 (odd), 1+2+3 = 6 overshoots by 4 (even) → flip −2: 1−2+3 = 2 → 3 moves.",k:"On move i you step i left or right. Work with |target|. Take the smallest k with 1+…+k ≥ target. The overshoot (sum − target) can be fixed by flipping a step of size overshoot/2 to the other direction, which needs the overshoot to be even; otherwise keep increasing k until it is.",
i:"target = 2",o:"3",time:"O(√target)",space:"O(1)",
code:C(`
class Solution:
    def reachNumber(self, target):
        target = abs(target)
        k = 0
        total = 0
        while total < target or (total - target) % 2:
            k += 1
            total += k
        return k
`)});
lite({id:1888,slug:"minimum-number-of-flips-to-make-the-binary-string-alternating",title:"Minimum Number of Flips to Make the Binary String Alternating",level:"Medium",topic:SW,name:"Sliding window over s + s",
w:"'111000' rotated to '110001'… best alternating target needs 2 flips.",k:"Moving the first character to the end (type 1) is free, so any rotation can be used; type 2 flips a bit. Look at s+s with a window of length n and compare it to the two alternating patterns 0101… and 1010…, tracking mismatches incrementally as the window slides. The answer is the smallest mismatch count seen.",
i:"s = \"111000\"",o:"2",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def minFlips(self, s):
        n = len(s)
        t = s + s
        diff0 = diff1 = 0
        best = n
        for i, c in enumerate(t):
            if c != str(i % 2):
                diff0 += 1
            else:
                diff1 += 1
            if i >= n:
                old = t[i - n]
                if old != str((i - n) % 2):
                    diff0 -= 1
                else:
                    diff1 -= 1
            if i >= n - 1:
                best = min(best, diff0, diff1)
        return best
`)});
lite({id:1518,slug:"water-bottles",title:"Water Bottles",level:"Easy",topic:MB,name:"Drink, then exchange empties",
w:"9 full bottles, 3 empties per new one: drink 9, exchange 9 → 3 new, drink, exchange → 1 more → 13.",k:"Keep drinking everything you have, then trade numExchange empties for one full bottle. Repeat while you have enough empties, adding every new bottle to the total.",
i:"numBottles = 9, numExchange = 3",o:"13",time:"O(log n)",space:"O(1)",
code:C(`
class Solution:
    def numWaterBottles(self, numBottles, numExchange):
        total = empty = numBottles
        while empty >= numExchange:
            new = empty // numExchange
            total += new
            empty = empty % numExchange + new
        return total
`)});
lite({id:2602,slug:"minimum-operations-to-make-all-array-elements-equal",title:"Minimum Operations to Make All Array Elements Equal",level:"Medium",topic:PS,name:"Sorted prefix sums and binary search",
w:"nums [3,1,6,8], query 5: |3−5|+|1−5|+|6−5|+|8−5| = 10.",k:"For each query q the cost is Σ|nums[i] − q|. Sort the numbers and build prefix sums. Binary search how many numbers are below q; those cost q·count − their sum, the rest cost their sum − q·count.",
i:"nums = [3,1,6,8], queries = [1,5]",o:"[14, 10]",time:"O((n + q) log n)",space:"O(n)",
code:C(`
class Solution:
    def minOperations(self, nums, queries):
        nums.sort()
        n = len(nums)
        pre = [0]
        for x in nums:
            pre.append(pre[-1] + x)
        res = []
        for q in queries:
            i = bisect_left(nums, q)
            left = q * i - pre[i]
            right = (pre[n] - pre[i]) - q * (n - i)
            res.append(left + right)
        return res
`)});
lite({id:1648,slug:"sell-diminishing-valued-colored-balls",title:"Sell Diminishing-Valued Colored Balls",level:"Medium",topic:GD,name:"Sell the highest values level by level",
w:"inventory [2,5], 4 orders: sell 5,4,3 and then a 2 → 14.",k:"Each sale takes the ball with the largest current value, which drops by 1 after the sale. Sort the stocks descending and lower the top group of w colours together, level by level, with arithmetic-series sums; when the orders run out in the middle of a level, handle the partial level.",
i:"inventory = [2,5], orders = 4",o:"14",time:"O(n log n)",space:"O(1)",
code:C(`
class Solution:
    def maxProfit(self, inventory, orders):
        inv = sorted(inventory, reverse=True) + [0]
        res = 0
        w = 1
        for i in range(len(inv) - 1):
            hi, lo = inv[i], inv[i + 1]
            cnt = w * (hi - lo)
            if orders >= cnt:
                res += w * (hi + lo + 1) * (hi - lo) // 2
                orders -= cnt
            else:
                full, rem = divmod(orders, w)
                res += w * (hi + hi - full + 1) * full // 2 + rem * (hi - full)
                return res % (10**9 + 7)
            w += 1
        return res % (10**9 + 7)
`)});
lite({id:1167,slug:"minimum-cost-to-connect-sticks",title:"Minimum Cost to Connect Sticks",level:"Medium",topic:HP,name:"Always join the two shortest sticks",
w:"[2,4,3]: join 2+3 (cost 5), then 5+4 (cost 9) → 14.",k:"Joining two sticks costs their sum, and sticks joined early get re-counted in later joins. So join the two shortest sticks every time (Huffman style) using a min-heap.",
i:"sticks = [2,4,3]",o:"14",time:"O(n log n)",space:"O(n)",
code:C(`
class Solution:
    def connectSticks(self, sticks):
        heapify(sticks)
        cost = 0
        while len(sticks) > 1:
            a = heappop(sticks)
            b = heappop(sticks)
            cost += a + b
            heappush(sticks, a + b)
        return cost
`)});
lite({id:3627,slug:"maximum-median-sum-of-subsequences-of-size-3",title:"Maximum Median Sum of Subsequences of Size 3",level:"Medium",topic:GD,name:"Take the second largest, then every second one",
w:"[2,1,3,2,1,3] sorted [1,1,2,2,3,3]: medians 3 and 2 → 5.",k:"Each step removes three numbers and scores their median. The best step takes the two largest numbers plus the smallest: the median is the second largest. Sort, then repeatedly take the second largest of what remains, jumping two positions each time, for n/3 steps.",
i:"nums = [2,1,3,2,1,3]",o:"5",time:"O(n log n)",space:"O(1)",
code:C(`
class Solution:
    def maximumMedianSum(self, nums):
        nums.sort()
        steps = len(nums) // 3
        return sum(nums[-2 - 2 * i] for i in range(steps))
`)});
lite({id:1910,slug:"remove-all-occurrences-of-a-substring",title:"Remove All Occurrences of a Substring",level:"Medium",topic:STK,name:"Stack of characters, pop when the tail matches",
w:"'daabcbaabcbc' removing 'abc' repeatedly → 'dab'.",k:"Push characters one by one; whenever the top of the stack spells part, pop those characters. Removing as soon as a match completes is the same as removing the leftmost occurrence repeatedly.",
i:"s = \"daabcbaabcbc\", part = \"abc\"",o:"\"dab\"",time:"O(n·m)",space:"O(n)",
code:C(`
class Solution:
    def removeOccurrences(self, s, part):
        st = []
        m = len(part)
        for c in s:
            st.append(c)
            if len(st) >= m and ''.join(st[-m:]) == part:
                del st[-m:]
        return ''.join(st)
`)});
lite({id:1802,slug:"maximum-value-at-a-given-index-in-a-bounded-array",title:"Maximum Value at a Given Index in a Bounded Array",level:"Medium",topic:BS,name:"Binary search the peak value",
w:"n=4, index 2, maxSum 6: [1,2,2,1] gives 2 at index 2 → 2.",k:"Positions are positive and neighbours differ by at most 1, so the best shape is a pyramid peaking at index. Binary search the peak v and compute the minimum sum: each side is an arithmetic descent from v down to 1, then 1s. Accept v if the sum fits in maxSum.",
i:"n = 4, index = 2, maxSum = 6",o:"2",time:"O(log maxSum)",space:"O(1)",
code:C(`
class Solution:
    def maxValue(self, n, index, maxSum):
        def side(length, peak):
            if peak > length:
                return (peak + peak - length + 1) * length // 2
            return peak * (peak + 1) // 2 + (length - peak)
        def total(v):
            return side(index + 1, v) + side(n - index, v) - v
        lo, hi = 1, maxSum
        while lo < hi:
            mid = (lo + hi + 1) // 2
            if total(mid) <= maxSum:
                lo = mid
            else:
                hi = mid - 1
        return lo
`)});
lite({id:2405,slug:"optimal-partition-of-string",title:"Optimal Partition of String",level:"Medium",topic:GD,name:"Cut just before a repeated letter",
w:"'abacaba': ab | ac | ab | a → 4 pieces.",k:"Each piece must have all-distinct letters. Extend the current piece while letters are new; when a letter repeats, start a new piece with it. Greedy is optimal.",
i:"s = \"abacaba\"",o:"4",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def partitionString(self, s):
        seen = set()
        parts = 1
        for c in s:
            if c in seen:
                parts += 1
                seen = set()
            seen.add(c)
        return parts
`)});
lite({id:2193,slug:"minimum-number-of-moves-to-make-palindrome",title:"Minimum Number of Moves to Make Palindrome",level:"Hard",topic:GD,name:"Match the last letter with its nearest partner",
w:"'aabb': the last b's partner is at index 2; two adjacent swaps → 'abba' → 2.",k:"Look at the last character. Find the first occurrence of the same letter: bringing it to the front costs that index in swaps. Remove both and repeat on the inside. If the last letter is unique (the odd-length middle), move it to the centre at the cost of len // 2 and remove it.",
i:"s = \"aabb\"",o:"2",time:"O(n²)",space:"O(n)",
code:C(`
class Solution:
    def minMovesToMakePalindrome(self, s):
        s = list(s)
        moves = 0
        while len(s) > 1:
            i = s.index(s[-1])
            if i == len(s) - 1:
                moves += len(s) // 2
                s.pop()
            else:
                moves += i
                s.pop(i)
                s.pop()
        return moves
`)});
lite({id:1685,slug:"sum-of-absolute-differences-in-a-sorted-array",title:"Sum of Absolute Differences in a Sorted Array",level:"Medium",topic:PS,name:"Left and right prefix sums",
w:"[2,3,5]: for 3: |3−2| + |3−5| = 3; the answers are [4,3,5].",k:"The array is sorted, so for index i every earlier element is ≤ nums[i] and every later one is ≥. The sum is nums[i]·i − prefix_left + suffix_right − nums[i]·(n−i−1).",
i:"nums = [2,3,5]",o:"[4, 3, 5]",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def getSumAbsoluteDifferences(self, nums):
        total = sum(nums)
        left = 0
        n = len(nums)
        res = []
        for i, x in enumerate(nums):
            right = total - left - x
            res.append(x * i - left + right - x * (n - i - 1))
            left += x
        return res
`)});
lite({id:2645,slug:"minimum-additions-to-make-valid-string",title:"Minimum Additions to Make Valid String",level:"Medium",topic:GD,name:"Count the 'abc' groups needed",
w:"'b' needs an 'a' before and a 'c' after → 2 insertions.",k:"A valid string is a concatenation of 'abc'. Scan the word: a new group starts whenever a letter is not greater than the previous one. With g groups the final length is 3g, so the additions are 3g − len(word).",
i:"word = \"b\"",o:"2",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def addMinimum(self, word):
        groups = 1
        for a, b in zip(word, word[1:]):
            if b <= a:
                groups += 1
        return 3 * groups - len(word)
`)});
lite({id:324,slug:"wiggle-sort-ii",title:"Wiggle Sort II",level:"Medium",topic:SRT,name:"Smaller half to even slots, larger half to odd slots (both reversed)",
w:"[1,5,1,1,6,4] → [1,6,1,5,1,4] has nums[0] < nums[1] > nums[2] < nums[3] > …",k:"Sort the array. Put the smaller half, in reverse order, into the even positions and the larger half, in reverse order, into the odd positions. Reversing keeps equal middle values apart so strict inequalities hold.",
i:"nums = [1,5,1,1,6,4]",o:"[1, 6, 1, 5, 1, 4]",time:"O(n log n)",space:"O(n)",
code:C(`
class Solution:
    def wiggleSort(self, nums):
        s = sorted(nums)
        half = (len(nums) + 1) // 2
        nums[::2] = s[:half][::-1]
        nums[1::2] = s[half:][::-1]
        return nums
`)});
lite({id:1208,slug:"get-equal-substrings-within-budget",title:"Get Equal Substrings Within Budget",level:"Medium",topic:SW,name:"Window of letters whose total cost fits maxCost",
w:"'abcd' → 'bcdf' costs 1,1,1,2; with budget 3 the longest affordable window is 3.",k:"Turning s[i] into t[i] costs |s[i] − t[i]|. Find the longest window whose total cost ≤ maxCost: expand the right end, shrink from the left while the cost is too high.",
i:"s = \"abcd\", t = \"bcdf\", maxCost = 3",o:"3",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def equalSubstring(self, s, t, maxCost):
        l = cost = best = 0
        for r in range(len(s)):
            cost += abs(ord(s[r]) - ord(t[r]))
            while cost > maxCost:
                cost -= abs(ord(s[l]) - ord(t[l]))
                l += 1
            best = max(best, r - l + 1)
        return best
`)});
lite({id:2432,slug:"the-employee-that-worked-on-the-longest-task",title:"The Employee That Worked on the Longest Task",level:"Easy",topic:ARR,name:"Task durations from consecutive leave times",
w:"logs [[0,3],[2,5],[0,9],[1,15]]: durations 3, 2, 4, 6 → employee 1.",k:"A task starts when the previous one ended (the first starts at 0), so its duration is leave − previous leave. Keep the longest duration and, on a tie, the smaller id.",
i:"n = 10, logs = [[0,3],[2,5],[0,9],[1,15]]",o:"1",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def hardestWorker(self, n, logs):
        best, who, prev = -1, -1, 0
        for emp, end in logs:
            d = end - prev
            if d > best or (d == best and emp < who):
                best, who = d, emp
            prev = end
        return who
`)});
lite({id:2134,slug:"minimum-swaps-to-group-all-1s-together-ii",title:"Minimum Swaps to Group All 1's Together II",level:"Medium",topic:SW,name:"Window of size = number of ones on a circle",
w:"[0,1,0,1,1,0,0]: three ones; the best circular window of length 3 holds 2 ones → 1 swap.",k:"Let w be the number of 1s. The ones must end up in some window of length w on the circular array; the swaps needed equal the zeros inside that window. Slide a window over nums + nums and take the minimum zero count.",
i:"nums = [0,1,0,1,1,0,0]",o:"1",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def minSwaps(self, nums):
        w = sum(nums)
        if w in (0, len(nums)):
            return 0
        t = nums + nums
        zeros = t[:w].count(0)
        best = zeros
        for i in range(w, len(nums) + w):
            zeros += (t[i] == 0) - (t[i - w] == 0)
            best = min(best, zeros)
        return best
`)});
lite({id:453,slug:"minimum-moves-to-equal-array-elements",title:"Minimum Moves to Equal Array Elements",level:"Medium",topic:MB,name:"Incrementing n−1 is decrementing one",
w:"[1,2,3] → 3 moves: [2,3,3] → [3,4,3] → [4,4,4].",k:"Adding 1 to n−1 elements changes the gaps exactly like subtracting 1 from the remaining one. So the answer is how far every element is above the minimum: sum − n × min.",
i:"nums = [1,2,3]",o:"3",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def minMoves(self, nums):
        return sum(nums) - len(nums) * min(nums)
`)});
lite({id:1413,slug:"minimum-value-to-get-positive-step-by-step-sum",title:"Minimum Value to Get Positive Step by Step Sum",level:"Easy",topic:PS,name:"Lift the lowest prefix sum to 1",
w:"[-3,2,-3,4,2]: prefix sums −3,−1,−4,0,2; lowest is −4 so the start must be 5.",k:"With start value v the running sum after i steps is v + prefix[i]; it must stay ≥ 1. The worst case is the lowest prefix, so v = 1 − min prefix (at least 1).",
i:"nums = [-3,2,-3,4,2]",o:"5",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def minStartValue(self, nums):
        lowest = run = 0
        for x in nums:
            run += x
            lowest = min(lowest, run)
        return 1 - lowest
`)});
lite({id:89,slug:"gray-code",title:"Gray Code",level:"Medium",topic:MB,name:"i XOR (i >> 1)",
w:"n=2 → 00, 01, 11, 10 → [0,1,3,2].",k:"The i-th Gray code is i ^ (i >> 1): consecutive values differ in exactly one bit. Generate it for i = 0 … 2ⁿ − 1.",
i:"n = 2",o:"[0, 1, 3, 2]",time:"O(2ⁿ)",space:"O(2ⁿ)",
code:C(`
class Solution:
    def grayCode(self, n):
        return [i ^ (i >> 1) for i in range(1 << n)]
`)});
lite({id:1163,slug:"last-substring-in-lexicographical-order",title:"Last Substring in Lexicographical Order",level:"Hard",topic:TP,name:"Two candidate starts with a match length",
w:"'abab': the largest suffix starting with the biggest letter is 'bab'.",k:"The answer is always a suffix. Keep two candidate starts i < j and compare s[i+k] with s[j+k] as k grows. When one candidate loses at k, skip every start that lies inside the matched part (jump past k positions). The survivor i is the answer start.",
i:"s = \"abab\"",o:"\"bab\"",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def lastSubstring(self, s):
        n = len(s)
        i, j, k = 0, 1, 0
        while j + k < n:
            if s[i + k] == s[j + k]:
                k += 1
            elif s[i + k] < s[j + k]:
                i = max(i + k + 1, j)
                j = i + 1
                k = 0
            else:
                j += k + 1
                k = 0
        return s[i:]
`)});
lite({id:1513,slug:"number-of-substrings-with-only-1s",title:"Number of Substrings With Only 1s",level:"Medium",topic:ARR,name:"Run of length L gives L(L+1)/2",
w:"'0110111': runs of 2 and 3 ones → 3 + 6 = 9.",k:"Every substring of all 1s lies inside one run of consecutive 1s. A run of length L contains L(L+1)/2 substrings. Count them with a running length (each new 1 adds 'current run length' new substrings).",
i:"s = \"0110111\"",o:"9",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def numSub(self, s):
        run = total = 0
        for c in s:
            run = run + 1 if c == '1' else 0
            total += run
        return total % (10**9 + 7)
`)});
lite({id:1877,slug:"minimize-maximum-pair-sum-in-array",title:"Minimize Maximum Pair Sum in Array",level:"Medium",topic:TP,name:"Pair the smallest with the largest",
w:"[3,5,2,3]: pairs (2,5) and (3,3) → max pair sum 7.",k:"To keep the biggest pair sum low, pair the smallest number with the largest, the second smallest with the second largest and so on. Return the maximum of those sums.",
i:"nums = [3,5,2,3]",o:"7",time:"O(n log n)",space:"O(1)",
code:C(`
class Solution:
    def minPairSum(self, nums):
        nums.sort()
        return max(nums[i] + nums[-1 - i] for i in range(len(nums) // 2))
`)});
lite({id:2273,slug:"find-resultant-array-after-removing-anagrams",title:"Find Resultant Array After Removing Anagrams",level:"Easy",topic:HM,name:"Drop a word that is an anagram of its predecessor",
w:"['abba','baba','bbaa','cd','cd'] → 'baba' and 'bbaa' are anagrams of the previous kept word, the second 'cd' too → ['abba','cd'].",k:"Whenever a word is an anagram of the word before it, remove it; comparing against the last kept word is enough. Anagrams have equal sorted letters.",
i:"words = [\"abba\",\"baba\",\"bbaa\",\"cd\",\"cd\"]",o:"['abba', 'cd']",time:"O(n·L log L)",space:"O(n·L)",
code:C(`
class Solution:
    def removeAnagrams(self, words):
        res = []
        for w in words:
            if not res or sorted(res[-1]) != sorted(w):
                res.append(w)
        return res
`)});
lite({id:371,slug:"sum-of-two-integers",title:"Sum of Two Integers",level:"Medium",topic:MB,name:"XOR for the sum, AND-shift for the carry",
w:"1 + 2: xor 3, carry 0 → 3. Python needs a 32-bit mask to behave like fixed-width ints.",k:"a XOR b adds without carrying; (a AND b) << 1 is the carry. Repeat until the carry is 0. Python integers are unbounded, so mask to 32 bits and convert back to a negative number if the sign bit is set.",
i:"a = 1, b = 2",o:"3",time:"O(1)",space:"O(1)",
code:C(`
class Solution:
    def getSum(self, a, b):
        mask = 0xFFFFFFFF
        while b:
            a, b = (a ^ b) & mask, ((a & b) << 1) & mask
        return a if a <= 0x7FFFFFFF else ~(a ^ mask)
`)});
lite({id:941,slug:"valid-mountain-array",title:"Valid Mountain Array",level:"Easy",topic:TP,name:"Climb, then descend, ending at the end",
w:"[0,3,2,1] is a mountain; [3,5,5] is not (flat step).",k:"Walk up while values strictly increase, then walk down while they strictly decrease. It is a mountain if the peak is neither the first nor the last position and the walk reached the end.",
i:"arr = [0,3,2,1]",o:"true",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def validMountainArray(self, arr):
        n = len(arr)
        i = 0
        while i + 1 < n and arr[i] < arr[i + 1]:
            i += 1
        if i == 0 or i == n - 1:
            return False
        while i + 1 < n and arr[i] > arr[i + 1]:
            i += 1
        return i == n - 1
`)});
lite({id:413,slug:"arithmetic-slices",title:"Arithmetic Slices",level:"Medium",topic:DP,name:"Extend the previous arithmetic run",
w:"[1,2,3,4]: slices [1,2,3], [2,3,4], [1,2,3,4] → 3.",k:"Let cur be the number of arithmetic slices ending at i. If nums[i] continues the same difference as the previous pair, cur = cur + 1 (every earlier slice extends, plus one new slice of length 3); otherwise cur = 0. Add cur each step.",
i:"nums = [1,2,3,4]",o:"3",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def numberOfArithmeticSlices(self, nums):
        cur = total = 0
        for i in range(2, len(nums)):
            if nums[i] - nums[i - 1] == nums[i - 1] - nums[i - 2]:
                cur += 1
                total += cur
            else:
                cur = 0
        return total
`)});
lite({id:2414,slug:"length-of-the-longest-alphabetical-continuous-substring",title:"Length of the Longest Alphabetical Continuous Substring",level:"Medium",topic:SW,name:"Longest run where each letter is the next one",
w:"'abacaba': 'ab' has length 2 and no longer run exists → 2.",k:"A continuous substring has each letter exactly one after the previous (abc, not ace). Scan and extend the current run when the code is previous + 1, else restart at 1.",
i:"s = \"abacaba\"",o:"2",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def longestContinuousSubstring(self, s):
        best = run = 1
        for a, b in zip(s, s[1:]):
            run = run + 1 if ord(b) == ord(a) + 1 else 1
            best = max(best, run)
        return best
`)});
lite({id:2697,slug:"lexicographically-smallest-palindrome",title:"Lexicographically Smallest Palindrome",level:"Easy",topic:TP,name:"Mirror pairs take the smaller letter",
w:"'egcfe': pair (e,e) ok, pair (g,f) → both f → 'efcfe'.",k:"Changing letters is the only operation and we want the fewest changes and then the smallest string. For every mirrored pair keep the smaller letter on both sides.",
i:"s = \"egcfe\"",o:"\"efcfe\"",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def makeSmallestPalindrome(self, s):
        a = list(s)
        i, j = 0, len(a) - 1
        while i < j:
            a[i] = a[j] = min(a[i], a[j])
            i += 1
            j -= 1
        return ''.join(a)
`)});
lite({id:1665,slug:"minimum-initial-energy-to-finish-tasks",title:"Minimum Initial Energy to Finish Tasks",level:"Hard",topic:GD,name:"Do tasks with the biggest minimum − actual gap first",
w:"tasks [[1,2],[2,4],[4,8]] (actual, minimum): start with 8 energy.",k:"A task needs at least `minimum` energy to start and uses `actual`. Order tasks by (minimum − actual) descending — the ones that leave the most 'slack' unused go first. Simulate: whenever current energy is below a task's minimum, top it up and count what you added.",
i:"tasks = [[1,2],[2,4],[4,8]]",o:"8",time:"O(n log n)",space:"O(1)",
code:C(`
class Solution:
    def minimumEffort(self, tasks):
        need = cur = 0
        for actual, minimum in sorted(tasks, key=lambda t: t[0] - t[1]):
            if cur < minimum:
                need += minimum - cur
                cur = minimum
            cur -= actual
        return need
`)});
lite({id:2914,slug:"minimum-number-of-changes-to-make-binary-string-beautiful",title:"Minimum Number of Changes to Make Binary String Beautiful",level:"Medium",topic:GD,name:"Make every aligned pair equal",
w:"'1001': pairs '10' and '01' both differ → 2 changes.",k:"A beautiful string can be cut into even-length blocks of equal bits; every block splits into aligned pairs of equal letters, and pairs are enough. So count aligned pairs (positions 2i, 2i+1) whose letters differ.",
i:"s = \"1001\"",o:"2",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def minChanges(self, s):
        return sum(s[i] != s[i + 1] for i in range(0, len(s), 2))
`)});
