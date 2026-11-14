const {lite}=require("./lib");
const C=s=>s.replace(/^\n/,"").replace(/\n$/,"").split("\n");
const ARR="Array / String",HM="Hash Map / Set",STK="Stack / Monotonic Stack",BT="Binary Tree",GR="Graph",HP="Heap",DP="Dynamic Programming",GD="Greedy",MB="Math / Bit Manipulation",BS="Binary Search",SRT="Sorting",SW="Sliding Window",MX="Matrix",UF="Union Find / Segment Tree",TP="Two Pointers",IV="Intervals",BTK="Backtracking",DS="Design",LL="Linked List",TR="Trie",PS="Prefix Sum";
// ---- Microsoft (4)
lite({id:3097,slug:"shortest-subarray-with-or-at-least-k-ii",title:"Shortest Subarray With OR at Least K II",level:"Medium",topic:SW,name:"Sliding window with a count of every bit",
w:"nums [2,1,8], k=10 → 2 | 1 | 8 = 11 ≥ 10 → length 3.",k:"The OR of a window only grows when the window grows and only shrinks when elements leave. Keep for each bit how many window elements have it set; the window's OR is the set of bits with a positive count. Extend the right end, and while the OR is at least k record the length and shrink from the left.",
i:"nums = [2,1,8], k = 10",o:"3",time:"O(n·30)",space:"O(30)",
code:C(`
class Solution:
    def minimumSubarrayLength(self, nums, k):
        cnt = [0] * 31
        cur = 0
        left = 0
        best = float('inf')
        def add(x, delta):
            nonlocal cur
            for b in range(31):
                if x >> b & 1:
                    cnt[b] += delta
                    if cnt[b] == 1 and delta == 1:
                        cur |= 1 << b
                    elif cnt[b] == 0:
                        cur &= ~(1 << b)
        for right, x in enumerate(nums):
            add(x, 1)
            while cur >= k and left <= right:
                best = min(best, right - left + 1)
                add(nums[left], -1)
                left += 1
        return -1 if best == float('inf') else best
`)});
lite({id:2601,slug:"prime-subtraction-operation",title:"Prime Subtraction Operation",level:"Medium",topic:GD,name:"Subtract the largest prime that keeps the order",
w:"[4,9,6,10] → 4−3 = 1, 9−7 = 2, 6−3 = 3, 10−5 = 5 → 1,2,3,5 strictly increasing → true.",k:"You may subtract at most one prime (smaller than the element) from each element. Go left to right keeping the previous value; for nums[i] subtract the largest prime p with nums[i] − p > previous (making it as small as possible while still strictly greater). If nums[i] ≤ previous the answer is false.",
i:"nums = [4,9,6,10]",o:"true",time:"O(n·π(V))",space:"O(V)",
code:C(`
class Solution:
    def primeSubOperation(self, nums):
        limit = max(nums)
        sieve = [True] * (limit + 1)
        primes = []
        for i in range(2, limit + 1):
            if sieve[i]:
                primes.append(i)
                for j in range(i * i, limit + 1, i):
                    sieve[j] = False
        prev = 0
        for x in nums:
            if x <= prev:
                return False
            best = x
            for p in primes:
                if p >= x:
                    break
                if x - p > prev:
                    best = x - p
            prev = best
        return True
`)});
lite({id:1455,slug:"check-if-a-word-occurs-as-a-prefix-of-any-word-in-a-sentence",title:"Check If a Word Occurs As a Prefix of Any Word in a Sentence",level:"Easy",topic:ARR,name:"First word that starts with the search word",
w:"'i love eating burger', 'burg' → the 4th word → 4.",k:"Split the sentence into words and return the 1-based index of the first word starting with searchWord, or −1.",
i:"sentence = \"i love eating burger\", searchWord = \"burg\"",o:"4",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def isPrefixOfWord(self, sentence, searchWord):
        for i, w in enumerate(sentence.split(), 1):
            if w.startswith(searchWord):
                return i
        return -1
`)});
lite({id:2165,slug:"smallest-value-of-the-rearranged-number",title:"Smallest Value of the Rearranged Number",level:"Medium",topic:GD,name:"Positive: ascending with the smallest non-zero first; negative: descending",
w:"310 → 103; −7605 → −7650.",k:"For a positive number sort the digits ascending, but the first digit must not be 0: swap the first non-zero digit to the front. For a negative number the value is smallest when the magnitude is largest: sort the digits descending. Zero stays zero.",
i:"num = 310",o:"103",time:"O(d log d)",space:"O(d)",
code:C(`
class Solution:
    def smallestNumber(self, num):
        if num == 0:
            return 0
        digits = sorted(str(abs(num)))
        if num < 0:
            return -int(''.join(reversed(digits)))
        for i, d in enumerate(digits):
            if d != '0':
                digits[0], digits[i] = digits[i], digits[0]
                break
        return int(''.join(digits))
`)});
lite({id:2061,slug:"number-of-spaces-cleaning-robot-cleaned",title:"Number of Spaces Cleaning Robot Cleaned",level:"Medium",topic:MX,name:"Simulate until a (cell, direction) state repeats",
w:"A robot starting at the top-left facing right cleans every empty cell it passes.",k:"The room has empty cells (0) and objects (1). The robot starts at (0,0) facing right and repeats: clean the current cell, move one step forward if that cell is inside the room and empty, otherwise turn 90° clockwise. Stop as soon as a state (position, direction) repeats; the answer is the number of distinct cleaned cells.",
i:"room = [[0,0,0],[1,1,0],[0,0,0]]",o:"7",time:"O(m·n·4)",space:"O(m·n·4)",
code:C(`
class Solution:
    def numberOfCleanSpaces(self, room):
        m, n = len(room), len(room[0])
        dirs = [(0, 1), (1, 0), (0, -1), (-1, 0)]
        i = j = d = 0
        seen = set()
        cleaned = set()
        while (i, j, d) not in seen:
            seen.add((i, j, d))
            cleaned.add((i, j))
            a, b = i + dirs[d][0], j + dirs[d][1]
            if 0 <= a < m and 0 <= b < n and room[a][b] == 0:
                i, j = a, b
            else:
                d = (d + 1) % 4
        return len(cleaned)
`)});
lite({id:2981,slug:"find-longest-special-substring-that-occurs-thrice-i",title:"Find Longest Special Substring That Occurs Thrice I",level:"Medium",topic:HM,name:"Run lengths per letter: the best of three cases",
w:"'aaaa' → 'aa' occurs 3 times → 2.",k:"A special substring is one repeated letter. For each letter list the lengths of its runs, longest first: a ≥ b ≥ c. The best length occurring three times is the maximum of a − 2 (three copies inside the longest run), min(a − 1, b) (two copies from the longest, one from the second), and c (one from each of three runs). Return the best positive value, or −1.",
i:"s = \"aaaa\"",o:"2",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def maximumLength(self, s):
        runs = defaultdict(list)
        for c, g in groupby(s):
            runs[c].append(len(list(g)))
        best = -1
        for lens in runs.values():
            lens.sort(reverse=True)
            lens += [0, 0]
            cand = max(lens[0] - 2, min(lens[0] - 1, lens[1]), lens[2])
            best = max(best, cand if cand > 0 else -1)
        return best
`)});
lite({id:2109,slug:"adding-spaces-to-a-string",title:"Adding Spaces to a String",level:"Medium",topic:TP,name:"Copy the string, inserting a space at each listed index",
w:"'LeetcodeHelpsMeLearn', spaces [8,13,15] → 'Leetcode Helps Me Learn'.",k:"Walk the string with a pointer into the sorted spaces list; before writing character i, if i equals the next space index add a space.",
i:"s = \"LeetcodeHelpsMeLearn\", spaces = [8,13,15]",o:"\"Leetcode Helps Me Learn\"",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def addSpaces(self, s, spaces):
        out = []
        j = 0
        for i, c in enumerate(s):
            if j < len(spaces) and spaces[j] == i:
                out.append(' ')
                j += 1
            out.append(c)
        return ''.join(out)
`)});
lite({id:1524,slug:"number-of-sub-arrays-with-odd-sum",title:"Number of Sub-arrays With Odd Sum",level:"Medium",topic:PS,name:"Prefix parities: odd sums pair even with odd prefixes",
w:"[1,3,5] → 4 subarrays have an odd sum.",k:"A subarray sum is odd when its two prefix sums have different parity. Walk the array counting how many earlier prefixes were even and odd; each new prefix of one parity pairs with all earlier prefixes of the other parity. Modulo 1e9+7.",
i:"arr = [1,3,5]",o:"4",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def numOfSubarrays(self, arr):
        MOD = 10**9 + 7
        even, odd = 1, 0
        parity = 0
        total = 0
        for x in arr:
            parity ^= x & 1
            if parity:
                total += even
                odd += 1
            else:
                total += odd
                even += 1
        return total % MOD
`)});
lite({id:1129,slug:"shortest-path-with-alternating-colors",title:"Shortest Path with Alternating Colors",level:"Medium",topic:GR,name:"BFS (Breadth-First Search) over (node, colour of the last edge)",
w:"n=3, red [[0,1],[1,2]], blue [] → [0, 1, −1].",k:"The path must alternate red and blue edges. Run a BFS (Breadth-First Search) whose state is (node, colour of the edge just used) starting from node 0 with both colours; from a state take an edge of the other colour. The answer for a node is the smallest distance over its two states, or −1.",
i:"n = 3, redEdges = [[0,1],[1,2]], blueEdges = []",o:"[0, 1, -1]",time:"O(n + e)",space:"O(n + e)",
code:C(`
class Solution:
    def shortestAlternatingPaths(self, n, redEdges, blueEdges):
        adj = [defaultdict(list), defaultdict(list)]
        for a, b in redEdges:
            adj[0][a].append(b)
        for a, b in blueEdges:
            adj[1][a].append(b)
        res = [-1] * n
        res[0] = 0
        seen = {(0, 0), (0, 1)}
        q = deque([(0, 0, 0), (0, 1, 0)])
        while q:
            u, color, d = q.popleft()
            nxt = 1 - color
            for v in adj[nxt][u]:
                if (v, nxt) not in seen:
                    seen.add((v, nxt))
                    if res[v] == -1:
                        res[v] = d + 1
                    q.append((v, nxt, d + 1))
        return res
`)});
lite({id:2481,slug:"minimum-cuts-to-divide-a-circle",title:"Minimum Cuts to Divide a Circle",level:"Easy",topic:MB,name:"n/2 through-the-centre cuts, or n radii",
w:"n=4 → 2 cuts; n=3 → 3 cuts.",k:"For n = 1 no cut is needed. If n is even, n/2 straight cuts through the centre make n equal slices. If n is odd the slices need n radius cuts.",
i:"n = 4",o:"2",time:"O(1)",space:"O(1)",
code:C(`
class Solution:
    def numberOfCuts(self, n):
        if n == 1:
            return 0
        return n // 2 if n % 2 == 0 else n
`)});
lite({id:2064,slug:"minimized-maximum-of-products-distributed-to-any-store",title:"Minimized Maximum of Products Distributed to Any Store",level:"Medium",topic:BS,name:"Binary search the maximum per store",
w:"n=6 stores, quantities [11,6] → 3 per store works → 3.",k:"Each store gets products of at most one type. If a store may hold at most x products, a type with q products needs ceil(q / x) stores. Binary search the smallest x for which the total number of stores needed is at most n.",
i:"n = 6, quantities = [11,6]",o:"3",time:"O(m log max)",space:"O(1)",
code:C(`
class Solution:
    def minimizedMaximum(self, n, quantities):
        lo, hi = 1, max(quantities)
        while lo < hi:
            mid = (lo + hi) // 2
            if sum((q + mid - 1) // mid for q in quantities) <= n:
                hi = mid
            else:
                lo = mid + 1
        return lo
`)});
lite({id:2140,slug:"solving-questions-with-brainpower",title:"Solving Questions With Brainpower",level:"Medium",topic:DP,name:"dp from the end: solve (and skip the next b) or skip",
w:"[[3,2],[4,3],[4,4],[2,5]] → solve question 0 (3 points), skip 2, solve question 3 (2 points) → 5.",k:"Question i gives points p and, if solved, you must skip the next b questions. dp[i] = best total from question i onward: max(dp[i + 1], p + dp[i + b + 1]), with dp beyond the end equal to 0.",
i:"questions = [[3,2],[4,3],[4,4],[2,5]]",o:"5",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def mostPoints(self, questions):
        n = len(questions)
        dp = [0] * (n + 1)
        for i in range(n - 1, -1, -1):
            points, skip = questions[i]
            dp[i] = max(dp[i + 1], points + (dp[i + skip + 1] if i + skip + 1 <= n else 0))
        return dp[0]
`)});
lite({id:3392,slug:"count-subarrays-of-length-three-with-a-condition",title:"Count Subarrays of Length Three With a Condition",level:"Easy",topic:ARR,name:"Check every window of three",
w:"[1,2,1,4,1] → (1,2,1) and (1,4,1) qualify → 1.",k:"A window (a, b, c) qualifies when a + c is exactly half of b, i.e. 2·(a + c) == b. Test each window.",
i:"nums = [1,2,1,4,1]",o:"1",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def countSubarrays(self, nums):
        return sum(1 for a, b, c in zip(nums, nums[1:], nums[2:]) if 2 * (a + c) == b)
`)});
lite({id:434,slug:"number-of-segments-in-a-string",title:"Number of Segments in a String",level:"Easy",topic:ARR,name:"Count the maximal blocks of non-space characters",
w:"'Hello, my name is John' → 5.",k:"A segment is a maximal run of non-space characters. Count the positions where a non-space character follows a space (or starts the string).",
i:"s = \"Hello, my name is John\"",o:"5",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def countSegments(self, s):
        return sum(1 for i, c in enumerate(s) if c != ' ' and (i == 0 or s[i - 1] == ' '))
`)});
lite({id:3576,slug:"transform-array-to-all-equal-elements",title:"Transform Array to All Equal Elements",level:"Medium",topic:GD,name:"Greedy left to right for target 1 and target −1",
w:"[1,-1,1,-1,1], k=3 → 2 flips make everything 1 → true.",k:"A flip negates two neighbours. Try each target value (1 or −1): go left to right, and whenever the current element differs from the target flip it together with the next one (count a move). The last element then matches only if the total parity works out. The array can be made equal if some target needs at most k moves and ends with all elements equal.",
i:"nums = [1,-1,1,-1,1], k = 3",o:"true",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def canMakeEqual(self, nums, k):
        for target in (1, -1):
            a = nums[:]
            moves = 0
            for i in range(len(a) - 1):
                if a[i] != target:
                    a[i] = -a[i]
                    a[i + 1] = -a[i + 1]
                    moves += 1
            if a[-1] == target and moves <= k:
                return True
        return False
`)});
lite({id:2114,slug:"maximum-number-of-words-found-in-sentences",title:"Maximum Number of Words Found in Sentences",level:"Easy",topic:ARR,name:"Count the spaces + 1",
w:"['alice and bob love leetcode','i think so too','this is great thanks very much'] → 6.",k:"A sentence's word count is its number of spaces plus 1. Return the maximum.",
i:"sentences = [\"alice and bob love leetcode\",\"i think so too\",\"this is great thanks very much\"]",o:"6",time:"O(total length)",space:"O(1)",
code:C(`
class Solution:
    def mostWordsFound(self, sentences):
        return max(s.count(' ') + 1 for s in sentences)
`)});
lite({id:2322,slug:"minimum-score-after-removals-on-a-tree",title:"Minimum Score After Removals on a Tree",level:"Hard",topic:BT,name:"Subtree XOR values + ancestor test for every pair of edges",
w:"nums [1,5,5,4,11], a 5-node tree → remove two edges, components XOR (exclusive OR) 1⁵... → score 9.",k:"Removing two edges leaves three components. Root the tree and record each node's subtree XOR, and entry / exit times for ancestor tests. Treat each removed edge as a non-root node v (the edge to its parent). For two nodes a and b: if a is an ancestor of b the components are sub[b], sub[a] ^ sub[b] and total ^ sub[a]; if neither is an ancestor they are sub[a], sub[b] and total ^ sub[a] ^ sub[b]. The score is max − min of the three; take the minimum over all pairs.",
i:"nums = [1,5,5,4,11], edges = [[0,1],[1,2],[1,3],[3,4]]",o:"9",time:"O(n²)",space:"O(n)",
code:C(`
class Solution:
    def minimumScore(self, nums, edges):
        n = len(nums)
        adj = defaultdict(list)
        for a, b in edges:
            adj[a].append(b)
            adj[b].append(a)
        sub = nums[:]
        tin = [0] * n
        tout = [0] * n
        parent = [-1] * n
        order = []
        timer = 0
        stack = [(0, False)]
        while stack:
            u, done = stack.pop()
            if done:
                tout[u] = timer
                timer += 1
                if parent[u] != -1:
                    sub[parent[u]] ^= sub[u]
                continue
            tin[u] = timer
            timer += 1
            stack.append((u, True))
            for v in adj[u]:
                if v != parent[u]:
                    parent[v] = u
                    stack.append((v, False))
        total = sub[0]
        def ancestor(a, b):
            return tin[a] <= tin[b] and tout[b] <= tout[a]
        best = float('inf')
        for a in range(1, n):
            for b in range(a + 1, n):
                if ancestor(a, b):
                    parts = (sub[b], sub[a] ^ sub[b], total ^ sub[a])
                elif ancestor(b, a):
                    parts = (sub[a], sub[b] ^ sub[a], total ^ sub[b])
                else:
                    parts = (sub[a], sub[b], total ^ sub[a] ^ sub[b])
                best = min(best, max(parts) - min(parts))
        return best
`)});
lite({id:3665,slug:"twisted-mirror-path-count",title:"Twisted Mirror Path Count",level:"Medium",topic:DP,name:"Count paths with reflections resolved per move",
w:"[[0,1,0],[0,0,1],[1,0,0]] → 5 paths.",k:"A move from an empty cell to the right or down may enter a mirror and get reflected (right → down, down → right), possibly several times, until it lands on an empty cell or leaves the grid (invalid). Resolve each move to its landing cell; since every landing is below or to the right, a DP (Dynamic Programming) over cells in row-major order counts the paths: dp[landing] += dp[cell].",
i:"grid = [[0,1,0],[0,0,1],[1,0,0]]",o:"5",time:"O(m·n)",space:"O(m·n)",
code:C(`
class Solution:
    def uniquePaths(self, grid):
        MOD = 10**9 + 7
        m, n = len(grid), len(grid[0])
        dp = [[0] * n for _ in range(m)]
        dp[0][0] = 1
        def land(i, j, d):
            x, y = i, j
            while True:
                if d == 0:
                    y += 1
                else:
                    x += 1
                if x >= m or y >= n:
                    return None
                if grid[x][y] == 0:
                    return (x, y)
                d = 1 - d
        for i in range(m):
            for j in range(n):
                if grid[i][j] == 0 and dp[i][j]:
                    for d in (0, 1):
                        t = land(i, j, d)
                        if t:
                            dp[t[0]][t[1]] = (dp[t[0]][t[1]] + dp[i][j]) % MOD
        return dp[m - 1][n - 1]
`)});
lite({id:1451,slug:"rearrange-words-in-a-sentence",title:"Rearrange Words in a Sentence",level:"Medium",topic:SRT,name:"Stable sort of the words by length",
w:"'Leetcode is cool' → 'Is cool leetcode'.",k:"Lower-case every word, sort them by length (the sort is stable, so equal lengths keep their order), join with spaces and capitalise the first letter.",
i:"text = \"Leetcode is cool\"",o:"\"Is cool leetcode\"",time:"O(n log n)",space:"O(n)",
code:C(`
class Solution:
    def arrangeWords(self, text):
        words = sorted(text.lower().split(), key=len)
        return ' '.join(words).capitalize()
`)});
lite({id:1995,slug:"count-special-quadruplets",title:"Count Special Quadruplets",level:"Easy",topic:HM,name:"Hash map of nums[d] − nums[c] over later indices",
w:"[1,2,3,6] → 1 + 2 + 3 = 6 → 1 quadruplet.",k:"Count index quadruples a < b < c < d with nums[a] + nums[b] + nums[c] = nums[d], i.e. nums[a] + nums[b] = nums[d] − nums[c]. Sweep b from the right keeping a counter of nums[d] − nums[c] over pairs to its right; for each b add the counts of nums[a] + nums[b] for all a < b.",
i:"nums = [1,2,3,6]",o:"1",time:"O(n²)",space:"O(n²)",
code:C(`
class Solution:
    def countQuadruplets(self, nums):
        n = len(nums)
        diffs = Counter()
        total = 0
        for b in range(n - 3, 0, -1):
            c = b + 1
            for d in range(c + 1, n):
                diffs[nums[d] - nums[c]] += 1
            for a in range(b):
                total += diffs[nums[a] + nums[b]]
        return total
`)});
lite({id:2221,slug:"find-triangular-sum-of-an-array",title:"Find Triangular Sum of an Array",level:"Medium",topic:ARR,name:"Repeated adjacent sums modulo 10",
w:"[1,2,3,4,5] → 8.",k:"Replace the array by the sums of neighbouring pairs (mod 10) repeatedly until one number remains.",
i:"nums = [1,2,3,4,5]",o:"8",time:"O(n²)",space:"O(n)",
code:C(`
class Solution:
    def triangularSum(self, nums):
        while len(nums) > 1:
            nums = [(a + b) % 10 for a, b in zip(nums, nums[1:])]
        return nums[0]
`)});
lite({id:2320,slug:"count-number-of-ways-to-place-houses",title:"Count Number of Ways to Place Houses",level:"Medium",topic:DP,name:"Each side is an independent Fibonacci count",
w:"n=2 → 9.",k:"The two sides of the street are independent. On one side with n plots, f(n) = ways to place houses with none adjacent: f(1) = 2, f(2) = 3, f(n) = f(n−1) + f(n−2). The answer is f(n)², modulo 1e9+7.",
i:"n = 2",o:"9",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def countHousePlacements(self, n):
        MOD = 10**9 + 7
        a, b = 1, 2
        for _ in range(n - 1):
            a, b = b, (a + b) % MOD
        return b * b % MOD
`)});
lite({id:3461,slug:"check-if-digits-are-equal-in-string-after-operations-i",title:"Check If Digits Are Equal in String After Operations I",level:"Easy",topic:ARR,name:"Reduce with pairwise sums modulo 10 until two digits remain",
w:"'3902' → '292' → '11' → equal → true.",k:"While the string has more than two digits replace it by the digits (s[i] + s[i+1]) mod 10. At the end return whether the two remaining digits are equal.",
i:"s = \"3902\"",o:"true",time:"O(n²)",space:"O(n)",
code:C(`
class Solution:
    def hasSameDigits(self, s):
        digits = [int(c) for c in s]
        while len(digits) > 2:
            digits = [(a + b) % 10 for a, b in zip(digits, digits[1:])]
        return digits[0] == digits[1]
`)});
lite({id:1845,slug:"seat-reservation-manager",title:"Seat Reservation Manager",level:"Medium",topic:DS,name:"Min-heap of the free seat numbers",
w:"reserve → 1, reserve → 2, unreserve 2, reserve → 2.",k:"Keep a min-heap of unreserved seat numbers starting with 1…n. reserve pops the smallest, unreserve pushes the seat back.",
i:"SeatManager(5); reserve(); reserve(); unreserve(2); reserve(); reserve(); reserve(); reserve(); unreserve(5)",o:"[1, 2, None, 2, 3, 4, 5, None]",time:"O(log n) per call",space:"O(n)",
code:C(`
class SeatManager:
    def __init__(self, n):
        self.free = list(range(1, n + 1))
        heapify(self.free)

    def reserve(self):
        return heappop(self.free)

    def unreserve(self, seatNumber):
        heappush(self.free, seatNumber)
`)});
lite({id:2370,slug:"longest-ideal-subsequence",title:"Longest Ideal Subsequence",level:"Medium",topic:DP,name:"dp over the last letter",
w:"'acfgbd', k=2 → 'acbd' → 4.",k:"A subsequence is ideal if adjacent letters differ by at most k in alphabet position. Keep best[c] = longest ideal subsequence ending with letter c. For each letter c of the string, best[c] = 1 + max(best[x] for letters x within k of c).",
i:"s = \"acfgbd\", k = 2",o:"4",time:"O(26·n)",space:"O(26)",
code:C(`
class Solution:
    def longestIdealString(self, s, k):
        best = [0] * 26
        for ch in s:
            c = ord(ch) - 97
            lo, hi = max(0, c - k), min(25, c + k)
            best[c] = 1 + max(best[lo:hi + 1])
        return max(best)
`)});
lite({id:2908,slug:"minimum-sum-of-mountain-triplets-i",title:"Minimum Sum of Mountain Triplets I",level:"Easy",topic:ARR,name:"Smallest smaller value on each side of every peak",
w:"[8,6,1,5,3] → (2,3,4): 1 + 5 + 3 = 9.",k:"A mountain triplet i < j < k has nums[i] < nums[j] > nums[k]. For every middle j find the smallest earlier value and the smallest later value (prefix and suffix minima); if both are below nums[j] the triplet sum is min_left + nums[j] + min_right. Return the smallest sum or −1.",
i:"nums = [8,6,1,5,3]",o:"9",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def minimumSum(self, nums):
        n = len(nums)
        left = [0] * n
        right = [0] * n
        left[0] = nums[0]
        for i in range(1, n):
            left[i] = min(left[i - 1], nums[i])
        right[-1] = nums[-1]
        for i in range(n - 2, -1, -1):
            right[i] = min(right[i + 1], nums[i])
        best = float('inf')
        for j in range(1, n - 1):
            if left[j - 1] < nums[j] > right[j + 1]:
                best = min(best, left[j - 1] + nums[j] + right[j + 1])
        return -1 if best == float('inf') else best
`)});
lite({id:3289,slug:"the-two-sneaky-numbers-of-digitville",title:"The Two Sneaky Numbers of Digitville",level:"Easy",topic:HM,name:"The values that occur twice",
w:"[0,1,1,0] → [0, 1].",k:"The list holds 0…n−1 once each plus two values that appear twice. Count occurrences and return the values seen twice (in ascending order).",
i:"nums = [0,1,1,0]",o:"[0, 1]",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def getSneakyNumbers(self, nums):
        cnt = Counter(nums)
        return sorted(v for v, c in cnt.items() if c == 2)
`)});
lite({id:3446,slug:"sort-matrix-by-diagonals",title:"Sort Matrix by Diagonals",level:"Medium",topic:MX,name:"Sort every diagonal (down below the main one, up above it)",
w:"[[1,7,3],[9,8,2],[4,5,6]] → [[8,2,3],[9,6,7],[4,5,1]].",k:"Group the cells by diagonal (i − j). Diagonals on or below the main diagonal (i ≥ j) are sorted in non-increasing order; those above it in non-decreasing order. Write the sorted values back along each diagonal.",
i:"grid = [[1,7,3],[9,8,2],[4,5,6]]",o:"[[8, 2, 3], [9, 6, 7], [4, 5, 1]]",time:"O(n² log n)",space:"O(n²)",
code:C(`
class Solution:
    def sortMatrix(self, grid):
        n = len(grid)
        diag = defaultdict(list)
        for i in range(n):
            for j in range(n):
                diag[i - j].append(grid[i][j])
        for key in diag:
            diag[key].sort(reverse=key >= 0)
        pos = defaultdict(int)
        for i in range(n):
            for j in range(n):
                key = i - j
                grid[i][j] = diag[key][pos[key]]
                pos[key] += 1
        return grid
`)});
lite({id:2872,slug:"maximum-number-of-k-divisible-components",title:"Maximum Number of K-Divisible Components",level:"Hard",topic:BT,name:"Cut an edge whenever the subtree sum is divisible by k",
w:"n=5, edges [[0,2],[1,2],[1,3],[2,4]], values [1,8,1,4,4], k=6 → 2 components.",k:"The total of all values is divisible by k. Root the tree and compute each subtree's sum bottom-up. Whenever a subtree's sum is divisible by k, cutting the edge to its parent makes a valid component (the rest stays divisible too). The answer is the number of such subtrees, counting the whole tree as one.",
i:"n = 5, edges = [[0,2],[1,2],[1,3],[2,4]], values = [1,8,1,4,4], k = 6",o:"2",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def maxKDivisibleComponents(self, n, edges, values, k):
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
        total = values[:]
        count = 0
        for u in reversed(order):
            if total[u] % k == 0:
                count += 1
            elif parent[u] != -1:
                total[parent[u]] += total[u]
        return count
`)});
lite({id:3578,slug:"count-partitions-with-max-min-difference-at-most-k",title:"Count Partitions With Max-Min Difference at Most K",level:"Medium",topic:DP,name:"dp with prefix sums and monotonic deques",
w:"[9,4,1,3,7], k=4 → 6 partitions.",k:"dp[i] = number of ways to split the first i elements into segments whose max − min ≤ k. The last segment [j, i) is valid for j in a contiguous range [lo, i) found with two monotonic deques (window max and min). So dp[i] = sum of dp[lo…i−1], computed with prefix sums, modulo 1e9+7.",
i:"nums = [9,4,1,3,7], k = 4",o:"6",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def countPartitions(self, nums, k):
        MOD = 10**9 + 7
        n = len(nums)
        dp = [0] * (n + 1)
        pref = [0] * (n + 2)
        dp[0] = 1
        pref[1] = 1
        mx, mn = deque(), deque()
        lo = 0
        for i in range(n):
            while mx and nums[mx[-1]] <= nums[i]:
                mx.pop()
            mx.append(i)
            while mn and nums[mn[-1]] >= nums[i]:
                mn.pop()
            mn.append(i)
            while nums[mx[0]] - nums[mn[0]] > k:
                lo += 1
                if mx[0] < lo:
                    mx.popleft()
                if mn[0] < lo:
                    mn.popleft()
            dp[i + 1] = (pref[i + 1] - pref[lo]) % MOD
            pref[i + 2] = (pref[i + 1] + dp[i + 1]) % MOD
        return dp[n]
`)});
lite({id:1018,slug:"binary-prefix-divisible-by-5",title:"Binary Prefix Divisible By 5",level:"Easy",topic:MB,name:"Keep the prefix value modulo 5",
w:"[0,1,1] → 0, 1, 3 → [true, false, false].",k:"Read the bits as a growing binary number, keeping only its remainder modulo 5: rem = (rem · 2 + bit) % 5. Record whether it is 0.",
i:"nums = [0,1,1]",o:"[True, False, False]",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def prefixesDivBy5(self, nums):
        rem = 0
        res = []
        for b in nums:
            rem = (rem * 2 + b) % 5
            res.append(rem == 0)
        return res
`)});
lite({id:1250,slug:"check-if-it-is-a-good-array",title:"Check If It Is a Good Array",level:"Hard",topic:MB,name:"Bézout: a subset sums to 1 iff the gcd is 1",
w:"[12,5,7,23] → gcd 1 → true.",k:"By Bézout's identity, integer combinations of the numbers can make 1 exactly when the gcd of the whole array is 1 (a good subset exists in that case).",
i:"nums = [12,5,7,23]",o:"true",time:"O(n log V)",space:"O(1)",
code:C(`
class Solution:
    def isGoodArray(self, nums):
        return reduce(gcd, nums) == 1
`)});
lite({id:2110,slug:"number-of-smooth-descent-periods-of-a-stock",title:"Number of Smooth Descent Periods of a Stock",level:"Medium",topic:ARR,name:"Runs where each price is exactly 1 lower",
w:"[3,2,1,4] → 3,2,1 / 3,2 / 2,1 / singles → 7.",k:"A smooth descent period is a contiguous run where each price is exactly 1 less than the previous. Track the length of the current run; every new day adds that many periods ending on it.",
i:"prices = [3,2,1,4]",o:"7",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def getDescentPeriods(self, prices):
        total = run = 0
        for i, p in enumerate(prices):
            run = run + 1 if i and prices[i - 1] - p == 1 else 1
            total += run
        return total
`)});
lite({id:2798,slug:"number-of-employees-who-met-the-target",title:"Number of Employees Who Met the Target",level:"Easy",topic:ARR,name:"Count hours ≥ target",
w:"hours [0,1,2,3,4], target 2 → 3.",k:"Count the employees who worked at least the target number of hours.",
i:"hours = [0,1,2,3,4], target = 2",o:"3",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def numberOfEmployeesWhoMetTarget(self, hours, target):
        return sum(h >= target for h in hours)
`)});
lite({id:3803,slug:"count-residue-prefixes",title:"Count Residue Prefixes",level:"Easy",topic:HM,name:"Distinct count equals length mod 3",
w:"'abc' → 'a' and 'ab' are residues → 2.",k:"Walk the prefixes keeping a set of the distinct letters; count the prefixes whose number of distinct letters equals the prefix length modulo 3.",
i:"s = \"abc\"",o:"2",time:"O(n)",space:"O(26)",
code:C(`
class Solution:
    def residuePrefixes(self, s):
        seen = set()
        count = 0
        for i, c in enumerate(s, 1):
            seen.add(c)
            if len(seen) == i % 3:
                count += 1
        return count
`)});
lite({id:3510,slug:"minimum-pair-removal-to-sort-array-ii",title:"Minimum Pair Removal to Sort Array II",level:"Hard",topic:HP,name:"Linked list + heap with lazy deletion, tracking the number of descents",
w:"[5,2,3,1] → merge (3,1), then (2,4) → 2 operations.",k:"Each operation merges the adjacent pair with the smallest sum (leftmost on ties). Simulate it with a doubly linked list of values and a min-heap of (pair sum, left node) entries; an entry is valid only if both nodes are still alive with unchanged values (version stamps). Keep a counter of 'bad' adjacent pairs (left > right), updating it around every merge; stop when it reaches 0.",
i:"nums = [5,2,3,1]",o:"2",time:"O(n log n)",space:"O(n)",
code:C(`
class Solution:
    def minimumPairRemoval(self, nums):
        n = len(nums)
        a = nums[:]
        prev = list(range(-1, n - 1))
        nxt = list(range(1, n + 1))
        alive = [True] * n
        ver = [0] * n
        bad = sum(1 for i in range(n - 1) if a[i] > a[i + 1])
        heap = [(a[i] + a[i + 1], i, 0, 0) for i in range(n - 1)]
        heapify(heap)
        ops = 0
        while bad > 0:
            s, i, vi, vj = heappop(heap)
            j = nxt[i]
            if not alive[i] or j >= n or not alive[j] or ver[i] != vi or ver[j] != vj or a[i] + a[j] != s:
                continue
            p, q = prev[i], nxt[j]
            if p >= 0 and a[p] > a[i]:
                bad -= 1
            if a[i] > a[j]:
                bad -= 1
            if q < n and a[j] > a[q]:
                bad -= 1
            a[i] += a[j]
            alive[j] = False
            ver[i] += 1
            nxt[i] = q
            if q < n:
                prev[q] = i
            if p >= 0 and a[p] > a[i]:
                bad += 1
            if q < n and a[i] > a[q]:
                bad += 1
            if p >= 0:
                heappush(heap, (a[p] + a[i], p, ver[p], ver[i]))
            if q < n:
                heappush(heap, (a[i] + a[q], i, ver[i], ver[q]))
            ops += 1
        return ops
`)});
lite({id:3797,slug:"count-routes-to-climb-a-rectangular-grid",title:"Count Routes to Climb a Rectangular Grid",level:"Hard",topic:DP,name:"Row-by-row DP with two states and window sums",
w:"['..','#.'], d=1 → 2 routes; ['..'], d=1 → 4 routes (including zero-move ones).",k:"Every route starts on the bottom row and ends anywhere on the top row (a route may be zero moves long when there is a single row). Keep for each cell A = routes arriving by an 'up' move (or as the start) and B = routes arriving by a same-row move. A same-row move goes from A (not from B) to another cell within distance d in the row: B[c] = sum of A in [c − d, c + d] minus A[c]. An up move goes from A + B to a cell of the row above within |Δcol| ≤ floor(√(d² − 1)). Prefix sums make each row O(m). The answer is the total of A + B on the top row, modulo 1e9+7.",
i:"grid = [\"..\",\"#.\"], d = 2",o:"4",time:"O(n·m)",space:"O(m)",
code:C(`
class Solution:
    def numberOfRoutes(self, grid, d):
        MOD = 10**9 + 7
        n, m = len(grid), len(grid[0])
        up = int((d * d - 1) ** 0.5)
        while (up + 1) ** 2 + 1 <= d * d:
            up += 1
        while up > 0 and up * up + 1 > d * d:
            up -= 1
        avail = [[c == '.' for c in row] for row in grid]
        A = [1 if avail[n - 1][c] else 0 for c in range(m)]
        r = n - 1
        while True:
            pre = [0]
            for c in range(m):
                pre.append(pre[-1] + A[c])
            B = [0] * m
            for c in range(m):
                if avail[r][c]:
                    lo, hi = max(0, c - d), min(m - 1, c + d)
                    B[c] = (pre[hi + 1] - pre[lo] - A[c]) % MOD
            if r == 0:
                return (sum(A) + sum(B)) % MOD
            total = [(A[c] + B[c]) % MOD for c in range(m)]
            pre = [0]
            for c in range(m):
                pre.append(pre[-1] + total[c])
            new_A = [0] * m
            for c in range(m):
                if avail[r - 1][c]:
                    lo, hi = max(0, c - up), min(m - 1, c + up)
                    new_A[c] = (pre[hi + 1] - pre[lo]) % MOD
            A = new_A
            r -= 1
`)});
lite({id:1624,slug:"largest-substring-between-two-equal-characters",title:"Largest Substring Between Two Equal Characters",level:"Easy",topic:HM,name:"Distance between the first and last occurrence of each letter",
w:"'abca' → between the two a's: 'bc' → 2.",k:"For each letter the longest substring between two equal copies lies between its first and last occurrence: last − first − 1. Return the maximum, or −1 if no letter repeats.",
i:"s = \"abca\"",o:"2",time:"O(n)",space:"O(26)",
code:C(`
class Solution:
    def maxLengthBetweenEqualCharacters(self, s):
        first = {}
        best = -1
        for i, c in enumerate(s):
            first.setdefault(c, i)
            best = max(best, i - first[c] - 1)
        return best
`)});
lite({id:3379,slug:"transformed-array",title:"Transformed Array",level:"Easy",topic:ARR,name:"Circular index arithmetic",
w:"[3,-2,1,1] → [1,1,1,3].",k:"For each i: if nums[i] is 0 the result is 0; otherwise move nums[i] steps (right if positive, left if negative) around the circular array and take the value there: nums[(i + nums[i]) % n].",
i:"nums = [3,-2,1,1]",o:"[1, 1, 1, 3]",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def constructTransformedArray(self, nums):
        n = len(nums)
        return [nums[(i + x) % n] if x else 0 for i, x in enumerate(nums)]
`)});
lite({id:1348,slug:"tweet-counts-per-frequency",title:"Tweet Counts Per Frequency",level:"Medium",topic:DS,name:"Store times per tweet name, bucket on demand",
w:"record 'tweet3' at 0, 60, 10 → per minute over [0, 59] → [2], over [0, 60] → [2, 1].",k:"Keep the times of each tweet name. A query splits [startTime, endTime] into chunks of 60, 3600 or 86400 seconds (the last chunk may be shorter) and counts the times falling in each chunk.",
i:"TweetCounts(); recordTweet('tweet3', 0); recordTweet('tweet3', 60); recordTweet('tweet3', 10); getTweetCountsPerFrequency('minute', 'tweet3', 0, 59); getTweetCountsPerFrequency('minute', 'tweet3', 0, 60); recordTweet('tweet3', 120); getTweetCountsPerFrequency('hour', 'tweet3', 0, 210)",o:"[None, None, None, [2], [2, 1], None, [4]]",time:"O(n) per query",space:"O(n)",
code:C(`
class TweetCounts:
    def __init__(self):
        self.times = defaultdict(list)

    def recordTweet(self, tweetName, time):
        self.times[tweetName].append(time)

    def getTweetCountsPerFrequency(self, freq, tweetName, startTime, endTime):
        size = {"minute": 60, "hour": 3600, "day": 86400}[freq]
        buckets = [0] * ((endTime - startTime) // size + 1)
        for t in self.times[tweetName]:
            if startTime <= t <= endTime:
                buckets[(t - startTime) // size] += 1
        return buckets
`)});
lite({id:1037,slug:"valid-boomerang",title:"Valid Boomerang",level:"Easy",topic:MB,name:"Three distinct points that are not collinear",
w:"[[1,1],[2,3],[3,2]] → true.",k:"Three points form a boomerang when they are distinct and not on one line. The cross product (p2 − p1) × (p3 − p1) is non-zero exactly in that case.",
i:"points = [[1,1],[2,3],[3,2]]",o:"true",time:"O(1)",space:"O(1)",
code:C(`
class Solution:
    def isBoomerang(self, points):
        (x1, y1), (x2, y2), (x3, y3) = points
        return (x2 - x1) * (y3 - y1) != (x3 - x1) * (y2 - y1)
`)});
lite({id:693,slug:"binary-number-with-alternating-bits",title:"Binary Number with Alternating Bits",level:"Easy",topic:MB,name:"x ^ (x >> 1) is all ones",
w:"5 = 101 → true; 7 = 111 → false.",k:"If the bits alternate, x XOR (x >> 1) has only 1s (101 ^ 010 = 111). A number whose binary form is all 1s satisfies y & (y + 1) == 0.",
i:"n = 5",o:"true",time:"O(1)",space:"O(1)",
code:C(`
class Solution:
    def hasAlternatingBits(self, n):
        y = n ^ (n >> 1)
        return y & (y + 1) == 0
`)});
lite({id:388,slug:"longest-absolute-file-path",title:"Longest Absolute File Path",level:"Medium",topic:STK,name:"Stack of directory-path lengths by depth",
w:"'dir\\n\\tsubdir1\\n\\tsubdir2\\n\\t\\tfile.ext' → 'dir/subdir2/file.ext' → 20.",k:"Each line's depth is the number of leading tabs. Keep lengths[d] = length of the path of the directory at depth d. For a line with depth d: length = lengths[d − 1] + 1 + len(name) (or just len(name) at depth 0). Files (names with a dot) update the answer; directories store their length for deeper lines.",
i:"input = \"dir\\n\\tsubdir1\\n\\tsubdir2\\n\\t\\tfile.ext\"",o:"20",time:"O(n)",space:"O(depth)",
code:C(`
class Solution:
    def lengthLongestPath(self, input):
        lengths = {0: 0}
        best = 0
        for line in input.split('\\n'):
            name = line.lstrip('\\t')
            depth = len(line) - len(name)
            if '.' in name:
                best = max(best, lengths[depth] + len(name))
            else:
                lengths[depth + 1] = lengths[depth] + len(name) + 1
        return best
`)});
lite({id:3600,slug:"maximize-spanning-tree-stability-with-upgrades",title:"Maximize Spanning Tree Stability With Upgrades",level:"Hard",topic:UF,name:"Binary search the stability, union-find check with the upgrade budget",
w:"n=3, edges [[0,1,4,0],[1,2,3,0],[0,2,1,0]], k=2 → upgrade 4 → 8 and 3 → 6 → stability 6.",k:"The stability of a tree is its weakest edge. Binary search the target X. To check X: mandatory edges must all have strength ≥ X and must not form a cycle (union them first). Then join components with optional edges of strength ≥ X for free, and finally with optional edges that only reach X after doubling (2·s ≥ X > s), each of which costs one upgrade. X is feasible when all nodes get connected using at most k upgrades.",
i:"n = 3, edges = [[0,1,4,0],[1,2,3,0],[0,2,1,0]], k = 2",o:"6",time:"O(E α log V)",space:"O(n)",
code:C(`
class Solution:
    def maxStability(self, n, edges, k):
        def feasible(X):
            parent = list(range(n))
            def find(x):
                while parent[x] != x:
                    parent[x] = parent[parent[x]]
                    x = parent[x]
                return x
            comps = n
            for u, v, s, must in edges:
                if must:
                    if s < X:
                        return False
                    ru, rv = find(u), find(v)
                    if ru == rv:
                        return False
                    parent[ru] = rv
                    comps -= 1
            for u, v, s, must in edges:
                if not must and s >= X:
                    ru, rv = find(u), find(v)
                    if ru != rv:
                        parent[ru] = rv
                        comps -= 1
            used = 0
            for u, v, s, must in edges:
                if not must and s < X <= 2 * s:
                    ru, rv = find(u), find(v)
                    if ru != rv:
                        parent[ru] = rv
                        comps -= 1
                        used += 1
            return comps == 1 and used <= k
        if not feasible(1):
            return -1
        lo, hi = 1, 2 * max(s for _, _, s, _ in edges)
        while lo < hi:
            mid = (lo + hi + 1) // 2
            if feasible(mid):
                lo = mid
            else:
                hi = mid - 1
        return lo
`)});
lite({id:2831,slug:"find-the-longest-equal-subarray",title:"Find the Longest Equal Subarray",level:"Medium",topic:SW,name:"Per value: window over its positions with at most k gaps",
w:"[1,3,2,3,1,3], k=3 → delete 2 and 1 and 1 → 3,3,3 → 3.",k:"For each value list its positions. A group of positions i…j of that value can be made contiguous by deleting the other elements between them: (pos[j] − pos[i]) − (j − i) elements. Slide a window over the positions keeping that number ≤ k; the best window size is the answer.",
i:"nums = [1,3,2,3,1,3], k = 3",o:"3",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def longestEqualSubarray(self, nums, k):
        pos = defaultdict(list)
        for i, x in enumerate(nums):
            pos[x].append(i)
        best = 0
        for p in pos.values():
            left = 0
            for right in range(len(p)):
                while p[right] - p[left] - (right - left) > k:
                    left += 1
                best = max(best, right - left + 1)
        return best
`)});
lite({id:2151,slug:"maximum-good-people-based-on-statements",title:"Maximum Good People Based on Statements",level:"Hard",topic:BTK,name:"Try every set of good people and check consistency",
w:"statements [[2,1,2],[1,2,2],[2,0,2]] → persons 0 and 1 are good → 2.",k:"statements[i][j] is 0 (i says j is bad), 1 (i says j is good) or 2 (no statement). Good people always tell the truth; bad people may say anything. Try every subset of people as 'good' (n ≤ 15): it is consistent when every statement made by a good person is true. The answer is the size of the largest consistent subset.",
i:"statements = [[2,1,2],[1,2,2],[2,0,2]]",o:"2",time:"O(2ⁿ·n²)",space:"O(1)",
code:C(`
class Solution:
    def maximumGood(self, statements):
        n = len(statements)
        best = 0
        for mask in range(1 << n):
            ok = True
            for i in range(n):
                if mask >> i & 1:
                    for j in range(n):
                        s = statements[i][j]
                        if s != 2 and s != (mask >> j & 1):
                            ok = False
                            break
                if not ok:
                    break
            if ok:
                best = max(best, bin(mask).count('1'))
        return best
`)});
lite({id:3548,slug:"equal-sum-grid-partition-ii",title:"Equal Sum Grid Partition II",level:"Hard",topic:PS,name:"For each cut: equal sums, or one removable cell equal to the difference",
w:"[[1,4],[2,3]] → the horizontal cut gives 5 and 5 → true.",k:"Try every horizontal and vertical cut (a vertical cut is a horizontal cut of the transposed grid). If the two sums are equal the answer is true. Otherwise the larger section must lose one cell whose value equals the difference, and the rest of that section must stay connected: in a rectangle with at least two rows and two columns any cell may be removed; in a single row or column only an end cell may be removed. Check this with the values of the larger section.",
i:"grid = [[1,4],[2,3]]",o:"true",time:"O(m·n)",space:"O(m·n)",
code:C(`
class Solution:
    def canPartitionGrid(self, grid):
        def check(g):
            rows, cols = len(g), len(g[0])
            prefix = [0]
            for r in g:
                prefix.append(prefix[-1] + sum(r))
            total = prefix[-1]
            for cut in range(1, rows):
                top, bottom = prefix[cut], total - prefix[cut]
                if top == bottom:
                    return True
                if top > bottom:
                    diff, section = top - bottom, g[:cut]
                else:
                    diff, section = bottom - top, g[cut:]
                h = len(section)
                if h == 1:
                    cands = [section[0][0], section[0][-1]]
                elif cols == 1:
                    cands = [section[0][0], section[-1][0]]
                else:
                    cands = [v for row in section for v in row]
                if diff in cands:
                    return True
            return False
        return check(grid) or check([list(c) for c in zip(*grid)])
`)});
lite({id:2839,slug:"check-if-strings-can-be-made-equal-with-operations-i",title:"Check if Strings Can be Made Equal With Operations I",level:"Easy",topic:ARR,name:"Positions 0 and 2 swap, positions 1 and 3 swap",
w:"s1 'abcd', s2 'cdab' → swap (0,2) and (1,3) → true.",k:"Strings have length 4 and you may swap characters two apart. The characters at the even positions (0, 2) can be reordered among themselves, as can those at the odd positions (1, 3). So the strings can be made equal if the two even characters match as a multiset and the two odd ones too.",
i:"s1 = \"abcd\", s2 = \"cdab\"",o:"true",time:"O(1)",space:"O(1)",
code:C(`
class Solution:
    def canBeEqual(self, s1, s2):
        return sorted(s1[0::2]) == sorted(s2[0::2]) and sorted(s1[1::2]) == sorted(s2[1::2])
`)});
lite({id:2840,slug:"check-if-strings-can-be-made-equal-with-operations-ii",title:"Check if Strings Can be Made Equal With Operations II",level:"Medium",topic:SRT,name:"Even positions and odd positions are two independent bags",
w:"'abcdba', 'cabdab' → true.",k:"Swapping characters two apart lets any character move to any position of the same parity. So the strings can be made equal if the multisets of characters at even positions match and the multisets at odd positions match.",
i:"s1 = \"abcdba\", s2 = \"cabdab\"",o:"true",time:"O(n log n)",space:"O(n)",
code:C(`
class Solution:
    def checkStrings(self, s1, s2):
        return sorted(s1[0::2]) == sorted(s2[0::2]) and sorted(s1[1::2]) == sorted(s2[1::2])
`)});
lite({id:2751,slug:"robot-collisions",title:"Robot Collisions",level:"Hard",topic:STK,name:"Sort by position, stack of right-moving robots",
w:"positions [5,4,3,2,1], healths [2,17,9,15,10], 'RRRRR' → nobody collides.",k:"Robots on a line move left or right at the same speed. Process them in order of position with a stack of robots moving right. A robot moving left collides with the stack top while it exists: the weaker robot is destroyed and the stronger loses 1 health; equal robots both go. Right-moving robots are pushed. The survivors' healths are returned in the original order.",
i:"positions = [3,5,2,6], healths = [10,10,15,12], directions = \"RLRL\"",o:"[14]",time:"O(n log n)",space:"O(n)",
code:C(`
class Solution:
    def survivedRobotsHealths(self, positions, healths, directions):
        n = len(positions)
        health = healths[:]
        order = sorted(range(n), key=lambda i: positions[i])
        stack = []
        for i in order:
            if directions[i] == 'R':
                stack.append(i)
                continue
            while stack and health[i] > 0:
                j = stack[-1]
                if health[j] < health[i]:
                    stack.pop()
                    health[j] = 0
                    health[i] -= 1
                elif health[j] > health[i]:
                    health[j] -= 1
                    health[i] = 0
                else:
                    stack.pop()
                    health[j] = health[i] = 0
        return [h for h in health if h > 0]
`)});
lite({id:3661,slug:"maximum-walls-destroyed-by-robots",title:"Maximum Walls Destroyed by Robots",level:"Hard",topic:DP,name:"DP over robots in order with their firing direction",
w:"robots [4], distance [3], walls [1,10] → fire left: destroys the wall at 1 → 1.",k:"Sort the robots by position. A robot firing right covers positions from itself up to min(position + distance, next robot's position − 1); firing left covers from max(position − distance, previous robot's position + 1) to itself. Walls on a robot's own position are always destroyed. For each pair of neighbouring robots count the walls in the union of the intervals that their chosen directions cover in the gap between them (bisect on the sorted walls). dp[i][direction] = best count with robot i firing that way; add the walls left of the first robot (if it fires left) and right of the last (if it fires right).",
i:"robots = [4], distance = [3], walls = [1,10]",o:"1",time:"O((n + w) log w)",space:"O(n)",
code:C(`
class Solution:
    def maxWalls(self, robots, distance, walls):
        bots = sorted(zip(robots, distance))
        walls = sorted(set(walls))
        n = len(bots)
        xs = [x for x, _ in bots]
        def count(lo, hi):
            if lo > hi:
                return 0
            return bisect_right(walls, hi) - bisect_left(walls, lo)
        def right_iv(i):
            x, d = bots[i]
            hi = x + d
            if i + 1 < n:
                hi = min(hi, xs[i + 1] - 1)
            return (x + 1, hi)
        def left_iv(i):
            x, d = bots[i]
            lo = x - d
            if i > 0:
                lo = max(lo, xs[i - 1] + 1)
            return (lo, x - 1)
        at_robots = sum(1 for w in walls if w in set(xs))
        dp = [[0, 0] for _ in range(n)]
        dp[0][0] = count(*left_iv(0))
        for i in range(1, n):
            for di in (0, 1):
                best = float('-inf')
                for dj in (0, 1):
                    parts = []
                    if dj == 1:
                        parts.append(right_iv(i - 1))
                    if di == 0:
                        parts.append(left_iv(i))
                    parts = sorted(p for p in parts if p[0] <= p[1])
                    gap = 0
                    cur = None
                    for lo, hi in parts:
                        if cur is None:
                            cur = [lo, hi]
                        elif lo <= cur[1] + 1:
                            cur[1] = max(cur[1], hi)
                        else:
                            gap += count(*cur)
                            cur = [lo, hi]
                    if cur:
                        gap += count(*cur)
                    best = max(best, dp[i - 1][dj] + gap)
                dp[i][di] = best
        return at_robots + max(dp[n - 1][0], dp[n - 1][1] + count(*right_iv(n - 1)))
`)});
lite({id:508,slug:"most-frequent-subtree-sum",title:"Most Frequent Subtree Sum",level:"Medium",topic:BT,name:"Count every subtree sum from the bottom up",
w:"[5,2,-3] → sums 2, −3, 4 occur once each → [2, −3, 4].",k:"A subtree sum is the node's value plus its children's subtree sums. Compute all of them in one post-order pass, count how often each occurs and return the sums with the maximum count (in ascending order).",
i:"root = [5,2,-3]",o:"[-3, 2, 4]",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def findFrequentTreeSum(self, root):
        cnt = Counter()
        def go(node):
            if not node:
                return 0
            s = node.val + go(node.left) + go(node.right)
            cnt[s] += 1
            return s
        go(root)
        top = max(cnt.values())
        return sorted(s for s, c in cnt.items() if c == top)
`)});
lite({id:1320,slug:"minimum-distance-to-type-a-word-using-two-fingers",title:"Minimum Distance to Type a Word Using Two Fingers",level:"Hard",topic:DP,name:"dp over the position of the other finger",
w:"'CAKE' → 3.",k:"Letters sit on a 6-column keyboard grid; the distance between two letters is their Manhattan distance. After typing the i-th letter one finger is on it; dp[j] = minimum total distance when the other finger is on letter j (or not yet placed, cost 0). Typing the next letter with the finger on the previous letter costs dist(prev, cur) for every state; typing it with the other finger moves that finger from j to cur and the 'other' becomes prev.",
i:"word = \"CAKE\"",o:"3",time:"O(26·n)",space:"O(26)",
code:C(`
class Solution:
    def minimumDistance(self, word):
        def dist(a, b):
            if a is None:
                return 0
            return abs(a // 6 - b // 6) + abs(a % 6 - b % 6)
        letters = [ord(c) - 65 for c in word]
        dp = {None: 0}
        prev = letters[0]
        for cur in letters[1:]:
            new = {}
            for other, cost in dp.items():
                same = cost + dist(prev, cur)
                if other not in new or same < new[other]:
                    new[other] = same
                swap = cost + dist(other, cur)
                if prev not in new or swap < new[prev]:
                    new[prev] = swap
            dp = new
            prev = cur
        return min(dp.values())
`)});
lite({id:3741,slug:"minimum-distance-between-three-equal-elements-ii",title:"Minimum Distance Between Three Equal Elements II",level:"Medium",topic:HM,name:"Three consecutive positions of a value: distance 2·(k − i)",
w:"[1,2,1,1,3] → positions 0, 2, 3 of the value 1 → 6.",k:"For a tuple of three equal values at indices i < j < k the distance abs(i−j) + abs(j−k) + abs(k−i) equals 2·(k − i). For each value list its positions; the best triple uses three consecutive positions p[t], p[t+1], p[t+2], giving 2·(p[t+2] − p[t]). Take the minimum over values and t, or −1.",
i:"nums = [1,2,1,1,3]",o:"6",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def minimumDistance(self, nums):
        pos = defaultdict(list)
        for i, x in enumerate(nums):
            pos[x].append(i)
        best = float('inf')
        for p in pos.values():
            for t in range(len(p) - 2):
                best = min(best, 2 * (p[t + 2] - p[t]))
        return -1 if best == float('inf') else best
`)});
