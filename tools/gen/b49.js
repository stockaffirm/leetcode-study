const {lite}=require("./lib");
const C=s=>s.replace(/^\n/,"").replace(/\n$/,"").split("\n");
const ARR="Array / String",HM="Hash Map / Set",STK="Stack / Monotonic Stack",BT="Binary Tree",GR="Graph",HP="Heap",DP="Dynamic Programming",GD="Greedy",MB="Math / Bit Manipulation",BS="Binary Search",SRT="Sorting",SW="Sliding Window",MX="Matrix",UF="Union Find / Segment Tree",TP="Two Pointers",IV="Intervals",BTK="Backtracking",DS="Design",LL="Linked List",TR="Trie",PS="Prefix Sum";
// ---- Oracle
lite({id:3438,slug:"find-valid-pair-of-adjacent-digits-in-string",title:"Find Valid Pair of Adjacent Digits in String",level:"Easy",topic:HM,name:"Count digits, then scan neighbours",
w:"'2523533': 2 appears 2 times and 3 appears 3 times, so the first valid neighbour pair is '23'.",k:"A pair is valid when its two digits differ and each digit appears in the whole string exactly as many times as its value. Count the digits once, then scan adjacent pairs left to right and return the first valid one.",
i:"s = \"2523533\"",o:"\"23\"",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def findValidPair(self, s):
        cnt = Counter(s)
        for a, b in zip(s, s[1:]):
            if a != b and cnt[a] == int(a) and cnt[b] == int(b):
                return a + b
        return ""
`)});
lite({id:2836,slug:"maximize-value-of-function-in-a-ball-passing-game",title:"Maximize Value of Function in a Ball Passing Game",level:"Hard",topic:GR,name:"Binary lifting over k passes",
w:"receiver [2,0,1], k=4 starting at player 2: 2 → 1 → 0 → 2 → 1, ids add up to 6.",k:"f(x) = x plus the ids of the next k receivers. k can be huge, so use binary lifting: up[j][i] is the player reached after 2^j passes and total[j][i] is the sum of ids of those 2^j receivers. Decompose k into powers of two and combine the jumps for every start.",
i:"receiver = [2,0,1], k = 4",o:"6",time:"O(n log k)",space:"O(n log k)",
code:C(`
class Solution:
    def getMaxFunctionValue(self, receiver, k):
        n = len(receiver)
        up = [receiver[:]]
        tot = [receiver[:]]
        for j in range(1, k.bit_length()):
            pu, pt = up[-1], tot[-1]
            up.append([pu[pu[i]] for i in range(n)])
            tot.append([pt[i] + pt[pu[i]] for i in range(n)])
        best = 0
        for x in range(n):
            cur, s = x, x
            for j in range(k.bit_length()):
                if (k >> j) & 1:
                    s += tot[j][cur]
                    cur = up[j][cur]
            best = max(best, s)
        return best
`)});
lite({id:3799,slug:"word-squares-ii",title:"Word Squares II",level:"Medium",topic:BTK,name:"Try four distinct words and check the corners",
w:"['able','area','echo','also']: top 'able', left 'area', right 'echo', bottom 'also' share all four corner letters.",k:"A square is four distinct words top, left, right, bottom where top[0]=left[0], top[3]=right[0], bottom[0]=left[3] and bottom[3]=right[3]. With at most 15 words, trying every ordered choice of four distinct words is cheap. Collect the valid ones and sort them.",
i:"words = [\"able\",\"area\",\"echo\",\"also\"]",o:"[['able','area','echo','also'], ['area','able','also','echo']]",time:"O(n⁴)",space:"O(1)",
code:C(`
class Solution:
    def wordSquares(self, words):
        res = []
        for top, left, right, bottom in permutations(words, 4):
            if top[0] == left[0] and top[3] == right[0] and bottom[0] == left[3] and bottom[3] == right[3]:
                res.append([top, left, right, bottom])
        res.sort()
        return res
`)});
lite({id:2466,slug:"count-ways-to-build-good-strings",title:"Count Ways To Build Good Strings",level:"Medium",topic:DP,name:"Length DP: append zero or one block",
w:"low=high=3, zero=one=1: every binary string of length 3 works → 8.",k:"dp[len] is the number of strings of exactly that length: you reach len by appending a block of `zero` zeros to length len−zero or a block of `one` ones to length len−one. Add up dp[low..high].",
i:"low = 3, high = 3, zero = 1, one = 1",o:"8",time:"O(high)",space:"O(high)",
code:C(`
class Solution:
    def countGoodStrings(self, low, high, zero, one):
        MOD = 10**9 + 7
        dp = [0] * (high + 1)
        dp[0] = 1
        for n in range(1, high + 1):
            if n >= zero:
                dp[n] += dp[n - zero]
            if n >= one:
                dp[n] += dp[n - one]
            dp[n] %= MOD
        return sum(dp[low:high + 1]) % MOD
`)});
lite({id:2580,slug:"count-ways-to-group-overlapping-ranges",title:"Count Ways to Group Overlapping Ranges",level:"Medium",topic:IV,name:"2 to the number of merged groups",
w:"[[6,10],[5,15]] overlap → one component → 2 ways (all in group 1 or all in group 2).",k:"Ranges that overlap must share a group, so they form connected blocks. Sort the ranges and merge overlapping ones to count the blocks c; each block independently picks one of two groups, giving 2^c ways.",
i:"ranges = [[6,10],[5,15]]",o:"2",time:"O(n log n)",space:"O(1)",
code:C(`
class Solution:
    def countWays(self, ranges):
        comps = 0
        end = -1
        for s, e in sorted(ranges):
            if s > end:
                comps += 1
            end = max(end, e)
        return pow(2, comps, 10**9 + 7)
`)});
lite({id:2549,slug:"count-distinct-numbers-on-board",title:"Count Distinct Numbers on Board",level:"Easy",topic:MB,name:"Everything from 2 to n appears",
w:"n=5: day 1 adds 2 and 4 (5 % x = 1), later days add 3 → numbers 2..5 → 4.",k:"For any x > 2 on the board, x % (x−1) = 1, so x−1 is added; repeating, every number down to 2 ends up on the board. For n > 1 the answer is n − 1; for n = 1 it is 1.",
i:"n = 5",o:"4",time:"O(1)",space:"O(1)",
code:C(`
class Solution:
    def distinctIntegers(self, n):
        return max(1, n - 1)
`)});
lite({id:3012,slug:"minimize-length-of-array-using-operations",title:"Minimize Length of Array Using Operations",level:"Medium",topic:MB,name:"The minimum decides everything",
w:"[5,5,5,10,5]: the minimum 5 divides everything and appears 4 times → 4 / 2 = 2.",k:"Let m be the minimum. If some element is not a multiple of m, taking its remainder produces something smaller than m, which then wipes out the rest: answer 1. Otherwise only copies of m can ever be paired with each other (m % m = 0) so they vanish two at a time: answer ceil(count(m) / 2).",
i:"nums = [5,5,5,10,5]",o:"2",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def minimumArrayLength(self, nums):
        m = min(nums)
        if any(x % m for x in nums):
            return 1
        return (nums.count(m) + 1) // 2
`)});
lite({id:3015,slug:"count-the-number-of-houses-at-a-certain-distance-i",title:"Count the Number of Houses at a Certain Distance I",level:"Medium",topic:GR,name:"Shortest path of every pair with the shortcut",
w:"n=5, shortcut 2–4: 10 ordered pairs at distance 1, 8 at distance 2, 2 at distance 3 → [10,8,2,0,0].",k:"Houses 1..n lie on a line plus one extra street between x and y. The distance between i < j is the smaller of the direct walk j − i and the two routes using the shortcut (i → x, cross, y → j or i → y, cross, x → j). Count each unordered pair twice.",
i:"n = 5, x = 2, y = 4",o:"[10, 8, 2, 0, 0]",time:"O(n²)",space:"O(n)",
code:C(`
class Solution:
    def countOfPairs(self, n, x, y):
        res = [0] * n
        for i in range(1, n + 1):
            for j in range(i + 1, n + 1):
                d = min(j - i, abs(x - i) + 1 + abs(y - j), abs(y - i) + 1 + abs(x - j))
                res[d - 1] += 2
        return res
`)});
lite({id:3017,slug:"count-the-number-of-houses-at-a-certain-distance-ii",title:"Count the Number of Houses at a Certain Distance II",level:"Hard",topic:GR,name:"Cycle plus two tails, counted with difference arrays",
w:"n=5, shortcut 2–4: the cycle is 2-3-4, tails 1 and 5 → [10,8,2,0,0].",k:"With the shortcut x–y the graph is a ring of m = y−x+1 houses with a tail of a = x−1 houses on one side and b = n−y on the other. Count pairs by distance in groups: ring–ring, tail–ring (a tail node at depth s is s + ring distance away), tail–tail on opposite sides (s + t + 1) and same-side tail pairs. Each group adds a range of counts, which a difference array handles in O(1) per node.",
i:"n = 5, x = 2, y = 4",o:"[10, 8, 2, 0, 0]",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def countOfPairs(self, n, x, y):
        if x > y:
            x, y = y, x
        if y - x <= 1:
            return [2 * (n - k) for k in range(1, n + 1)]
        m, a, b = y - x + 1, x - 1, n - y
        half = (m - 1) // 2
        diff = [0] * (n + 3)
        def add(l, r, v):
            if l <= r:
                diff[l] += v
                diff[r + 1] -= v
        add(1, half, m)
        if m % 2 == 0:
            add(m // 2, m // 2, m // 2)
        for tail in (a, b):
            for s in range(1, tail + 1):
                add(s, s, 1)
                add(s + 1, s + half, 2)
                if m % 2 == 0:
                    add(s + m // 2, s + m // 2, 1)
        for s in range(1, a + 1):
            add(s + 2, s + b + 1, 1)
        cnt = [0] * (n + 2)
        cur = 0
        for d in range(n + 2):
            cur += diff[d]
            cnt[d] = cur
        for tail in (a, b):
            for d in range(1, tail):
                cnt[d] += tail - d
        return [2 * cnt[k] for k in range(1, n + 1)]
`)});
lite({id:2192,slug:"all-ancestors-of-a-node-in-a-directed-acyclic-graph",title:"All Ancestors of a Node in a Directed Acyclic Graph",level:"Medium",topic:GR,name:"Topological order, push ancestor sets down",
w:"Edges 0→3, 1→3, 3→5: node 5's ancestors are 0, 1, 3 → [0,1,3].",k:"Process nodes in topological order (Kahn). When u is processed, every child v inherits u and all of u's ancestors. Sort each node's set at the end.",
i:"n = 8, edges = [[0,3],[0,4],[1,3],[2,4],[2,7],[3,5],[3,6],[3,7],[4,6]]",o:"[[], [], [], [0, 1], [0, 2], [0, 1, 3], [0, 1, 2, 3, 4], [0, 1, 2, 3]]",time:"O(n·(n + e))",space:"O(n²)",
code:C(`
class Solution:
    def getAncestors(self, n, edges):
        g = [[] for _ in range(n)]
        indeg = [0] * n
        for a, b in edges:
            g[a].append(b)
            indeg[b] += 1
        anc = [set() for _ in range(n)]
        q = deque(i for i in range(n) if indeg[i] == 0)
        while q:
            u = q.popleft()
            for v in g[u]:
                anc[v] |= anc[u]
                anc[v].add(u)
                indeg[v] -= 1
                if indeg[v] == 0:
                    q.append(v)
        return [sorted(s) for s in anc]
`)});
lite({id:1380,slug:"lucky-numbers-in-a-matrix",title:"Lucky Numbers in a Matrix",level:"Easy",topic:MX,name:"Smallest in its row and largest in its column",
w:"[[3,7,8],[9,11,13],[15,16,17]]: 15 is the minimum of its row and the maximum of its column → [15].",k:"A lucky number is the minimum of its row and the maximum of its column. Compute every row minimum and every column maximum and keep the numbers that are both.",
i:"matrix = [[3,7,8],[9,11,13],[15,16,17]]",o:"[15]",time:"O(m·n)",space:"O(m + n)",
code:C(`
class Solution:
    def luckyNumbers(self, matrix):
        rows = [min(r) for r in matrix]
        cols = [max(c) for c in zip(*matrix)]
        return [v for i, r in enumerate(matrix) for j, v in enumerate(r) if v == rows[i] == cols[j]]
`)});
lite({id:1410,slug:"html-entity-parser",title:"HTML Entity Parser",level:"Medium",topic:ARR,name:"Replace entities, ampersand last",
w:"'&amp; is an HTML entity but &ambassador; is not.' → '& is an HTML entity but &ambassador; is not.'",k:"Replace each known entity (&quot; &apos; &gt; &lt; &frasl;) by its character. Replace &amp; last, otherwise text like &amp;gt; would wrongly turn into > instead of &gt;.",
i:"text = \"&amp; is an HTML entity but &ambassador; is not.\"",o:"\"& is an HTML entity but &ambassador; is not.\"",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def entityParser(self, text):
        for ent, ch in (("&quot;", '"'), ("&apos;", "'"), ("&gt;", ">"), ("&lt;", "<"), ("&frasl;", "/"), ("&amp;", "&")):
            text = text.replace(ent, ch)
        return text
`)});
lite({id:697,slug:"degree-of-an-array",title:"Degree of an Array",level:"Easy",topic:HM,name:"First/last position of the most frequent values",
w:"[1,2,2,3,1]: degree 2 (both 1 and 2); the shortest span is [2,2] → 2.",k:"The degree is the highest frequency. For each value remember its count, first index and last index. Among values whose count equals the degree, the answer is the shortest last − first + 1.",
i:"nums = [1,2,2,3,1]",o:"2",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def findShortestSubArray(self, nums):
        first, cnt = {}, Counter()
        best, deg = 0, 0
        for i, x in enumerate(nums):
            first.setdefault(x, i)
            cnt[x] += 1
            length = i - first[x] + 1
            if cnt[x] > deg or (cnt[x] == deg and length < best):
                deg, best = cnt[x], length
        return best
`)});
lite({id:845,slug:"longest-mountain-in-array",title:"Longest Mountain in Array",level:"Medium",topic:TP,name:"Walk up, then down",
w:"[2,1,4,7,3,2,5]: the mountain 1,4,7,3,2 has length 5.",k:"Scan left to right. From a start index climb while values increase; if you climbed and then can descend, you have a mountain whose length is the climb plus the descent. Continue scanning from the end of the descent.",
i:"arr = [2,1,4,7,3,2,5]",o:"5",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def longestMountain(self, arr):
        n = len(arr)
        res = 0
        i = 1
        while i < n:
            base = i - 1
            if arr[i] > arr[i - 1]:
                while i < n and arr[i] > arr[i - 1]:
                    i += 1
                if i < n and arr[i] < arr[i - 1]:
                    while i < n and arr[i] < arr[i - 1]:
                        i += 1
                    res = max(res, i - base)
            else:
                i += 1
        return res
`)});
lite({id:1290,slug:"convert-binary-number-in-a-linked-list-to-integer",title:"Convert Binary Number in a Linked List to Integer",level:"Easy",topic:LL,name:"Shift and add each bit",
w:"1 → 0 → 1 reads as binary 101 = 5.",k:"Walk the list from the most significant bit. For every node, shift the value left by one and add the node's bit.",
i:"head = [1,0,1]",o:"5",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def getDecimalValue(self, head):
        v = 0
        while head:
            v = v * 2 + head.val
            head = head.next
        return v
`)});
lite({id:2448,slug:"minimum-cost-to-make-array-equal",title:"Minimum Cost to Make Array Equal",level:"Hard",topic:SRT,name:"Weighted median",
w:"nums [1,3,5,2], cost [2,3,1,14]: the weighted median is 2 → cost 1·2 + 1·3 + 3·1 + 0 = 8.",k:"Changing nums[i] to t costs cost[i] × |nums[i] − t|. The sum of such absolute values is minimised at the weighted median. Sort by value and pick the first value where the running cost reaches half of the total cost, then add up the cost.",
i:"nums = [1,3,5,2], cost = [2,3,1,14]",o:"8",time:"O(n log n)",space:"O(n)",
code:C(`
class Solution:
    def minCost(self, nums, cost):
        pairs = sorted(zip(nums, cost))
        total = sum(cost)
        run = 0
        target = pairs[-1][0]
        for v, c in pairs:
            run += c
            if run * 2 >= total:
                target = v
                break
        return sum(c * abs(v - target) for v, c in pairs)
`)});
lite({id:403,slug:"frog-jump",title:"Frog Jump",level:"Hard",topic:DP,name:"For each stone, the set of jump sizes that reach it",
w:"Stones [0,1,3,5,6,8,12,17]: jumps 1,2,2,1,2,4,5 reach the last stone → true.",k:"For every stone keep the set of jump sizes with which the frog can arrive. From a stone reached with jump k, the next jump is k−1, k or k+1 (positive); if there is a stone there, record that jump for it. The frog can cross if the last stone has any arrival jump.",
i:"stones = [0,1,3,5,6,8,12,17]",o:"true",time:"O(n²)",space:"O(n²)",
code:C(`
class Solution:
    def canCross(self, stones):
        jumps = {s: set() for s in stones}
        jumps[0].add(0)
        for s in stones:
            for k in jumps[s]:
                for step in (k - 1, k, k + 1):
                    if step > 0 and s + step in jumps:
                        jumps[s + step].add(step)
        return bool(jumps[stones[-1]])
`)});
lite({id:1254,slug:"number-of-closed-islands",title:"Number of Closed Islands",level:"Medium",topic:GR,name:"Flood the border land first",
w:"Land (0) groups not touching the edge count; the sample grid has 2 such islands.",k:"An island is closed if none of its land cells touches the border. First flood-fill (turn into water) every land cell reachable from the border. Then each remaining land region is closed: count them with another flood fill.",
i:"grid = [[1,1,1,1,1,1,1,0],[1,0,0,0,0,1,1,0],[1,0,1,0,1,1,1,0],[1,0,0,0,0,1,0,1],[1,1,1,1,1,1,1,0]]",o:"2",time:"O(m·n)",space:"O(m·n)",
code:C(`
class Solution:
    def closedIsland(self, grid):
        m, n = len(grid), len(grid[0])
        def fill(i, j):
            st = [(i, j)]
            while st:
                a, b = st.pop()
                if 0 <= a < m and 0 <= b < n and grid[a][b] == 0:
                    grid[a][b] = 1
                    st += [(a + 1, b), (a - 1, b), (a, b + 1), (a, b - 1)]
        for i in range(m):
            for j in range(n):
                if (i in (0, m - 1) or j in (0, n - 1)) and grid[i][j] == 0:
                    fill(i, j)
        res = 0
        for i in range(m):
            for j in range(n):
                if grid[i][j] == 0:
                    res += 1
                    fill(i, j)
        return res
`)});
lite({id:582,slug:"kill-process",title:"Kill Process",level:"Medium",topic:GR,name:"Tree of children, BFS from the killed process",
w:"pid [1,3,10,5], ppid [3,0,5,3], kill 5 → killing 5 also kills its child 10 → [5,10].",k:"ppid tells each process's parent. Build a map parent → children, then walk down from the killed process, collecting everything under it.",
i:"pid = [1,3,10,5], ppid = [3,0,5,3], kill = 5",o:"[5, 10]",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def killProcess(self, pid, ppid, kill):
        kids = defaultdict(list)
        for p, par in zip(pid, ppid):
            kids[par].append(p)
        res = []
        q = deque([kill])
        while q:
            u = q.popleft()
            res.append(u)
            q.extend(kids[u])
        return res
`)});
lite({id:1079,slug:"letter-tile-possibilities",title:"Letter Tile Possibilities",level:"Medium",topic:BTK,name:"Count sequences with letter counts",
w:"'AAB': A, B, AA, AB, BA, AAB, ABA, BAA → 8 sequences.",k:"Keep a count of each available letter. Every time you can place a letter you get a new sequence: add 1 and continue building from the remaining counts. Using counts (not positions) avoids counting equal sequences twice.",
i:"tiles = \"AAB\"",o:"8",time:"O(n!)",space:"O(n)",
code:C(`
class Solution:
    def numTilePossibilities(self, tiles):
        cnt = Counter(tiles)
        def dfs():
            total = 0
            for c in cnt:
                if cnt[c]:
                    cnt[c] -= 1
                    total += 1 + dfs()
                    cnt[c] += 1
            return total
        return dfs()
`)});
lite({id:321,slug:"create-maximum-number",title:"Create Maximum Number",level:"Hard",topic:STK,name:"Best i from one, k−i from the other, then merge",
w:"nums1=[3,4,6,5], nums2=[9,1,2,5,8,3], k=5 → [9,8,6,5,3].",k:"Try every split: i digits from nums1 and k−i from nums2. The best i digits of an array (keeping order) come from a monotonic stack that can drop smaller digits while it still has enough left. Merge two sequences into the largest by always taking from the one that is lexicographically larger from the current position. Keep the best result over all splits.",
i:"nums1 = [3,4,6,5], nums2 = [9,1,2,5,8,3], k = 5",o:"[9, 8, 6, 5, 3]",time:"O(k·(m + n + k²))",space:"O(k)",
code:C(`
class Solution:
    def maxNumber(self, nums1, nums2, k):
        def pick(nums, t):
            drop = len(nums) - t
            st = []
            for x in nums:
                while drop and st and st[-1] < x:
                    st.pop()
                    drop -= 1
                st.append(x)
            return st[:t]
        def merge(a, b):
            res = []
            while a or b:
                big = a if a > b else b
                res.append(big.pop(0))
            return res
        best = []
        for i in range(max(0, k - len(nums2)), min(k, len(nums1)) + 1):
            cand = merge(pick(nums1, i), pick(nums2, k - i))
            best = max(best, cand)
        return best
`)});
lite({id:1824,slug:"minimum-sideway-jumps",title:"Minimum Sideway Jumps",level:"Medium",topic:DP,name:"DP over the three lanes",
w:"obstacles [0,1,2,3,0]: the frog needs 2 sideways jumps to dodge the obstacles → 2.",k:"dp[l] is the fewest side jumps to be in lane l at the current point. An obstacle in a lane makes that lane unreachable. At each point you can jump into any free lane from another lane for +1, so dp[l] = min(dp[l], min(dp) + 1) for the free lanes.",
i:"obstacles = [0,1,2,3,0]",o:"2",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def minSideJumps(self, obstacles):
        INF = float('inf')
        dp = [1, 0, 1]
        for o in obstacles[1:]:
            if o:
                dp[o - 1] = INF
            m = min(dp)
            for l in range(3):
                if l != o - 1:
                    dp[l] = min(dp[l], m + 1)
        return min(dp)
`)});
lite({id:2439,slug:"minimize-maximum-of-array",title:"Minimize Maximum of Array",level:"Medium",topic:GD,name:"Maximum of the rounded-up prefix averages",
w:"[3,7,1,6]: prefix averages 3, 5, 3.67→4, 4.25→5 → answer 5.",k:"An operation moves one unit from nums[i] to the element on its left, so the values can only be pushed toward the front. The best possible maximum is therefore the largest ceiling of any prefix average.",
i:"nums = [3,7,1,6]",o:"5",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def minimizeArrayValue(self, nums):
        res = total = 0
        for i, x in enumerate(nums):
            total += x
            res = max(res, (total + i) // (i + 1))
        return res
`)});
lite({id:259,slug:"3sum-smaller",title:"3Sum Smaller",level:"Medium",topic:TP,name:"Sort and count with two pointers",
w:"[-2,0,1,3], target 2: triples (-2,0,1) and (-2,0,3) are below 2 → 2.",k:"Sort the array. Fix the first number, then use two pointers: if nums[i] + nums[l] + nums[r] < target, then every index between l and r also works with l, so add r − l and move l; otherwise move r.",
i:"nums = [-2,0,1,3], target = 2",o:"2",time:"O(n²)",space:"O(1)",
code:C(`
class Solution:
    def threeSumSmaller(self, nums, target):
        nums.sort()
        res = 0
        for i in range(len(nums) - 2):
            l, r = i + 1, len(nums) - 1
            while l < r:
                if nums[i] + nums[l] + nums[r] < target:
                    res += r - l
                    l += 1
                else:
                    r -= 1
        return res
`)});
lite({id:2181,slug:"merge-nodes-in-between-zeros",title:"Merge Nodes in Between Zeros",level:"Medium",topic:LL,name:"Sum each block between zeros",
w:"0→3→1→0→4→5→2→0 becomes 4 → 11.",k:"The list starts and ends with 0 and has no neighbouring zeros. Walk it, adding values into a running sum; at every 0 (after the first) emit a node with the sum and reset it.",
i:"head = [0,3,1,0,4,5,2,0]",o:"[4, 11]",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def mergeNodes(self, head):
        dummy = tail = ListNode()
        total = 0
        cur = head.next
        while cur:
            if cur.val == 0:
                tail.next = ListNode(total)
                tail = tail.next
                total = 0
            else:
                total += cur.val
            cur = cur.next
        return dummy.next
`)});
lite({id:1312,slug:"minimum-insertion-steps-to-make-a-string-palindrome",title:"Minimum Insertion Steps to Make a String Palindrome",level:"Hard",topic:DP,name:"Length minus the longest palindromic subsequence",
w:"'mbadm' → keep 'mam' (3) and insert the 2 others → 2 insertions.",k:"Characters of a longest palindromic subsequence already pair up; every other character needs a partner inserted. So the answer is n − LPS (Longest Palindromic Subsequence), and LPS is the longest common subsequence of s and its reverse.",
i:"s = \"mbadm\"",o:"2",time:"O(n²)",space:"O(n)",
code:C(`
class Solution:
    def minInsertions(self, s):
        t = s[::-1]
        n = len(s)
        prev = [0] * (n + 1)
        for i in range(1, n + 1):
            cur = [0] * (n + 1)
            for j in range(1, n + 1):
                if s[i - 1] == t[j - 1]:
                    cur[j] = prev[j - 1] + 1
                else:
                    cur[j] = max(prev[j], cur[j - 1])
            prev = cur
        return n - prev[n]
`)});
lite({id:2047,slug:"number-of-valid-words-in-a-sentence",title:"Number of Valid Words in a Sentence",level:"Easy",topic:ARR,name:"Check each token against the three rules",
w:"'cat and  dog' → 3 valid words; '!this  1-s b8d!' → 0 (leading punctuation, digits).",k:"Split on spaces. A token is valid if it has no digits, at most one hyphen that sits between two letters, and punctuation (!.,) at most once and only as the last character.",
i:"sentence = \"cat and  dog\"",o:"3",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def countValidWords(self, sentence):
        def ok(w):
            hyphens = 0
            for i, c in enumerate(w):
                if c.isdigit():
                    return False
                if c == '-':
                    hyphens += 1
                    if hyphens > 1 or i == 0 or i == len(w) - 1:
                        return False
                    if not (w[i - 1].isalpha() and w[i + 1].isalpha()):
                        return False
                elif c in '!.,' and i != len(w) - 1:
                    return False
            return True
        return sum(ok(w) for w in sentence.split())
`)});
lite({id:1526,slug:"minimum-number-of-increments-on-subarrays-to-form-a-target-array",title:"Minimum Number of Increments on Subarrays to Form a Target Array",level:"Hard",topic:GD,name:"Sum of the rises",
w:"[1,2,3,2,1]: one operation per rise: 1 + 1 + 1 = 3.",k:"Each operation adds 1 to a contiguous range. Whenever the target rises from the previous element, the rise cannot be covered by operations already running, so it needs new operations. The answer is the first element plus all positive differences.",
i:"target = [1,2,3,2,1]",o:"3",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def minNumberOperations(self, target):
        res = target[0]
        for a, b in zip(target, target[1:]):
            res += max(0, b - a)
        return res
`)});
lite({id:445,slug:"add-two-numbers-ii",title:"Add Two Numbers II",level:"Medium",topic:LL,name:"Stacks give the least significant digit first",
w:"7243 + 564 = 7807 → list 7→8→0→7.",k:"The lists store the most significant digit first, so push both onto stacks to read digits from the end. Pop, add with carry, and put each new digit in front of the result list.",
i:"l1 = [7,2,4,3], l2 = [5,6,4]",o:"[7, 8, 0, 7]",time:"O(n + m)",space:"O(n + m)",
code:C(`
class Solution:
    def addTwoNumbers(self, l1, l2):
        a, b = [], []
        while l1:
            a.append(l1.val)
            l1 = l1.next
        while l2:
            b.append(l2.val)
            l2 = l2.next
        head = None
        carry = 0
        while a or b or carry:
            s = carry
            if a:
                s += a.pop()
            if b:
                s += b.pop()
            carry, d = divmod(s, 10)
            head = ListNode(d, head)
        return head
`)});
lite({id:1095,slug:"find-in-mountain-array",title:"Find in Mountain Array",level:"Hard",topic:BS,name:"Find the peak, then binary search both slopes",
w:"[1,2,3,4,5,3,1], target 3 → the smallest index holding 3 is 2.",k:"The array rises to a peak and then falls. Binary search the peak (compare get(mid) with get(mid+1)). Then binary search the ascending side for the target; only if it is missing, binary search the descending side. This uses O(log n) calls to get().",
i:"mountain_arr = [1,2,3,4,5,3,1], target = 3",o:"2",time:"O(log n)",space:"O(1)",
code:C(`
class Solution:
    def findInMountainArray(self, target, mountain_arr):
        n = mountain_arr.length()
        lo, hi = 0, n - 1
        while lo < hi:
            mid = (lo + hi) // 2
            if mountain_arr.get(mid) < mountain_arr.get(mid + 1):
                lo = mid + 1
            else:
                hi = mid
        peak = lo
        l, r = 0, peak
        while l < r:
            mid = (l + r) // 2
            if mountain_arr.get(mid) < target:
                l = mid + 1
            else:
                r = mid
        if mountain_arr.get(l) == target:
            return l
        l, r = peak, n - 1
        while l < r:
            mid = (l + r) // 2
            if mountain_arr.get(mid) > target:
                l = mid + 1
            else:
                r = mid
        return l if mountain_arr.get(l) == target else -1
`)});
lite({id:260,slug:"single-number-iii",title:"Single Number III",level:"Medium",topic:MB,name:"XOR, then split by one differing bit",
w:"[1,2,1,3,2,5]: pairs cancel, leaving 3 XOR (exclusive OR) 5 = 6; the lowest set bit separates them → [3,5].",k:"XOR of all numbers cancels the pairs and leaves a XOR b of the two singles. Any set bit of that value differs between a and b. Use the lowest set bit to split all numbers into two groups; XOR each group to get a and b.",
i:"nums = [1,2,1,3,2,5]",o:"[3, 5]",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def singleNumber(self, nums):
        x = 0
        for v in nums:
            x ^= v
        low = x & -x
        a = 0
        for v in nums:
            if v & low:
                a ^= v
        return [a, x ^ a]
`)});
lite({id:107,slug:"binary-tree-level-order-traversal-ii",title:"Binary Tree Level Order Traversal II",level:"Medium",topic:BT,name:"BFS levels, reversed",
w:"[3,9,20,null,null,15,7] → levels [3],[9,20],[15,7] listed bottom-up: [[15,7],[9,20],[3]].",k:"Do an ordinary level-order BFS (Breadth-First Search) and reverse the list of levels at the end.",
i:"root = [3,9,20,null,null,15,7]",o:"[[15, 7], [9, 20], [3]]",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def levelOrderBottom(self, root):
        res = []
        q = deque([root] if root else [])
        while q:
            level = []
            for _ in range(len(q)):
                node = q.popleft()
                level.append(node.val)
                if node.left:
                    q.append(node.left)
                if node.right:
                    q.append(node.right)
            res.append(level)
        return res[::-1]
`)});
lite({id:3680,slug:"generate-schedule",title:"Generate Schedule",level:"Medium",topic:GD,name:"Greedy: busiest teams first, never repeat a team",
w:"n=5 gives a 20-day schedule such as [0,1],[2,3],[0,4],[1,2],… with no team playing two days in a row; n ≤ 4 is impossible.",k:"There are n(n−1) matches (every ordered pair). For n ≤ 4 no schedule exists. Otherwise build the days one by one: among the remaining matches that use neither team from the previous day, play the one whose two teams still have the most matches left (ties: smallest ids). This keeps busy teams from getting stuck at the end.",
i:"n = 5",o:"20 matches, e.g. [[0,1],[2,3],[0,4],[1,2],…]",time:"O(n⁴)",space:"O(n²)",
code:C(`
class Solution:
    def generateSchedule(self, n):
        if n < 5:
            return []
        rem = {(i, j) for i in range(n) for j in range(n) if i != j}
        left = [2 * (n - 1)] * n
        res = []
        last = set()
        while rem:
            best = None
            for a, b in rem:
                if a in last or b in last:
                    continue
                key = (left[a] + left[b], -a, -b)
                if best is None or key > best[0]:
                    best = (key, (a, b))
            a, b = best[1]
            rem.discard((a, b))
            left[a] -= 1
            left[b] -= 1
            res.append([a, b])
            last = {a, b}
        return res
`)});
