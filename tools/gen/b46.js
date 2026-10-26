const {lite}=require("./lib");
const C=s=>s.replace(/^\n/,"").replace(/\n$/,"").split("\n");
const ARR="Array / String",HM="Hash Map / Set",STK="Stack / Monotonic Stack",BT="Binary Tree",GR="Graph",HP="Heap",DP="Dynamic Programming",GD="Greedy",MB="Math / Bit Manipulation",BS="Binary Search",SRT="Sorting",SW="Sliding Window",MX="Matrix",UF="Union Find / Segment Tree",TP="Two Pointers",IV="Intervals",BTK="Backtracking",DS="Design",LL="Linked List",TR="Trie",PS="Prefix Sum";
// ---- Salesforce (1/3)
// ---- Salesforce (2/3)
lite({id:3125,slug:"maximum-number-that-makes-result-of-bitwise-and-zero",title:"Maximum Number That Makes Result of Bitwise AND Zero",level:"Medium",topic:MB,name:"Just below the highest power of two",
w:"n=7 (111): AND of 7,6,5,4 is still 4, but adding 3 (011) clears the top bit → largest x is 3.",k:"The AND of n, n−1, …, x only becomes 0 once the highest set bit of n has been cleared, i.e. when the sequence reaches the number just below that power of two. So the answer is 2^(bit_length−1) − 1.",
i:"n = 7",o:"3",time:"O(1)",space:"O(1)",
code:C(`
class Solution:
    def maxNumber(self, n):
        return (1 << (n.bit_length() - 1)) - 1
`)});
lite({id:3171,slug:"find-subarray-with-bitwise-or-closest-to-k",title:"Find Subarray With Bitwise OR Closest to K",level:"Hard",topic:MB,name:"Keep the few distinct ORs ending here",
w:"[1,2,4,5], k=3: the subarray [1,2] has OR 3 → difference 0.",k:"OR only ever adds bits, so the subarrays ending at a position have at most ~30 distinct OR values. Keep that set, update it with each new number (OR every old value, add the number itself) and track the smallest |value − k|.",
i:"nums = [1,2,4,5], k = 3",o:"0",time:"O(n log max)",space:"O(log max)",
code:C(`
class Solution:
    def minimumDifference(self, nums, k):
        best = float('inf')
        cur = set()
        for x in nums:
            cur = {x | a for a in cur}
            cur.add(x)
            for v in cur:
                best = min(best, abs(v - k))
        return best
`)});
lite({id:3135,slug:"equalize-strings-by-adding-or-removing-characters-at-ends",title:"Equalize Strings by Adding or Removing Characters at Ends",level:"Medium",topic:DP,name:"Keep the longest common substring",
w:"'abcde' → 'cdef': keep the common block 'cde' (3 chars): remove 'ab' (2) and add 'f' (1) → 3.",k:"Characters can only be added or removed at the two ends, so what stays in the middle is a contiguous block common to both strings. Keep the longest common substring: everything else of the first string is removed and everything else of the target is added.",
i:"initial = \"abcde\", target = \"cdef\"",o:"3",time:"O(n·m)",space:"O(m)",
code:C(`
class Solution:
    def minOperations(self, initial, target):
        n, m = len(initial), len(target)
        prev = [0] * (m + 1)
        best = 0
        for i in range(1, n + 1):
            cur = [0] * (m + 1)
            for j in range(1, m + 1):
                if initial[i - 1] == target[j - 1]:
                    cur[j] = prev[j - 1] + 1
                    best = max(best, cur[j])
            prev = cur
        return n + m - 2 * best
`)});
lite({id:3197,slug:"find-the-minimum-area-to-cover-all-ones-ii",title:"Find the Minimum Area to Cover All Ones II",level:"Hard",topic:MX,name:"Try the six ways to cut into three rectangles",
w:"[[1,0,1],[1,1,1]]: one rectangle for the left column (area 2), one for the middle 1 (area 1), one for the right column (area 2) → 5.",k:"Three non-overlapping rectangles can always be separated by straight cuts. There are only six shapes: three vertical strips, three horizontal strips, or one cut with the other side split once the other way (four variants). For each region the best rectangle is the bounding box of its 1s.",
i:"grid = [[1,0,1],[1,1,1]]",o:"5",time:"O(mn·(m+n)²)",space:"O(1)",
code:C(`
class Solution:
    def minimumSum(self, grid):
        m, n = len(grid), len(grid[0])
        def area(r1, r2, c1, c2):
            lo_r = lo_c = 10**9
            hi_r = hi_c = -1
            for i in range(r1, r2 + 1):
                for j in range(c1, c2 + 1):
                    if grid[i][j]:
                        lo_r = min(lo_r, i)
                        hi_r = max(hi_r, i)
                        lo_c = min(lo_c, j)
                        hi_c = max(hi_c, j)
            return 0 if hi_r < 0 else (hi_r - lo_r + 1) * (hi_c - lo_c + 1)
        best = 10**9
        for a in range(n - 1):
            for b in range(a + 1, n - 1):
                best = min(best, area(0, m - 1, 0, a) + area(0, m - 1, a + 1, b) + area(0, m - 1, b + 1, n - 1))
        for a in range(m - 1):
            for b in range(a + 1, m - 1):
                best = min(best, area(0, a, 0, n - 1) + area(a + 1, b, 0, n - 1) + area(b + 1, m - 1, 0, n - 1))
        for c in range(n - 1):
            for r in range(m - 1):
                best = min(best, area(0, m - 1, 0, c) + area(0, r, c + 1, n - 1) + area(r + 1, m - 1, c + 1, n - 1))
                best = min(best, area(0, m - 1, c + 1, n - 1) + area(0, r, 0, c) + area(r + 1, m - 1, 0, c))
        for r in range(m - 1):
            for c in range(n - 1):
                best = min(best, area(0, r, 0, n - 1) + area(r + 1, m - 1, 0, c) + area(r + 1, m - 1, c + 1, n - 1))
                best = min(best, area(r + 1, m - 1, 0, n - 1) + area(0, r, 0, c) + area(0, r, c + 1, n - 1))
        return best
`)});
lite({id:3195,slug:"find-the-minimum-area-to-cover-all-ones-i",title:"Find the Minimum Area to Cover All Ones I",level:"Medium",topic:MX,name:"Bounding box of the ones",
w:"[[0,1,0],[1,0,1]]: ones span rows 0-1 and columns 0-2 → 2 × 3 = 6.",k:"The smallest rectangle covering every 1 is the bounding box: from the smallest to the largest row and column that contain a 1.",
i:"grid = [[0,1,0],[1,0,1]]",o:"6",time:"O(m·n)",space:"O(1)",
code:C(`
class Solution:
    def minimumArea(self, grid):
        rows = [i for i, r in enumerate(grid) if any(r)]
        cols = [j for j in range(len(grid[0])) if any(r[j] for r in grid)]
        return (rows[-1] - rows[0] + 1) * (cols[-1] - cols[0] + 1)
`)});
lite({id:3200,slug:"maximum-height-of-a-triangle",title:"Maximum Height of a Triangle",level:"Easy",topic:MX,name:"Try both colours first and keep building rows",
w:"red=2, blue=4: start with blue (1), red (2), blue (3) → 3 rows, using 4 blue and 2 red.",k:"Row r needs r balls, all of one colour, and colours alternate. Rows alternate between the two colours, so try starting with red and starting with blue; keep adding rows while the colour in turn has enough balls. Take the better height.",
i:"red = 2, blue = 4",o:"3",time:"O(√n)",space:"O(1)",
code:C(`
class Solution:
    def maxHeightOfTriangle(self, red, blue):
        def build(a, b):
            row = 1
            while True:
                if row % 2 == 1:
                    if a < row:
                        break
                    a -= row
                else:
                    if b < row:
                        break
                    b -= row
                row += 1
            return row - 1
        return max(build(red, blue), build(blue, red))
`)});
lite({id:1659,slug:"maximize-grid-happiness",title:"Maximize Grid Happiness",level:"Hard",topic:DP,name:"Broken-profile DP over the last n cells",
w:"2×3 grid, 1 introvert, 2 extroverts: best placement gives happiness 240.",k:"Process cells in row-major order. A cell only interacts with the cell above and the cell to its left, so the state is the last n cells (0 empty, 1 introvert, 2 extrovert) as a base-3 number plus the people left. Placing a person adds its own base happiness plus the interaction with the up/left neighbours (a pair adds both people's changes).",
i:"m = 2, n = 3, introvertsCount = 1, extrovertsCount = 2",o:"240",time:"O(m·n·3ⁿ·I·E)",space:"O(m·n·3ⁿ·I·E)",
code:C(`
class Solution:
    def getMaxGridHappiness(self, m, n, introvertsCount, extrovertsCount):
        P = 3 ** (n - 1)
        pair = [[0, 0, 0], [0, -60, -10], [0, -10, 40]]
        base = [0, 120, 40]
        @lru_cache(None)
        def go(pos, mask, i, e):
            if pos == m * n or (i == 0 and e == 0):
                return 0
            up = mask // P
            left = mask % 3 if pos % n else 0
            nm = (mask % P) * 3
            best = go(pos + 1, nm, i, e)
            if i:
                best = max(best, base[1] + pair[1][up] + pair[1][left] + go(pos + 1, nm + 1, i - 1, e))
            if e:
                best = max(best, base[2] + pair[2][up] + pair[2][left] + go(pos + 1, nm + 2, i, e - 1))
            return best
        return go(0, 0, introvertsCount, extrovertsCount)
`)});
lite({id:1701,slug:"average-waiting-time",title:"Average Waiting Time",level:"Medium",topic:ARR,name:"Simulate the single chef",
w:"[[1,2],[2,5],[4,3]]: waits 2, 5, 8 → average 15 / 3 = 5.",k:"One chef serves customers in arrival order. Keep the time the chef becomes free: a customer starts at max(free, arrival), finishes after their cooking time, and waited finish − arrival. Average the waits.",
i:"customers = [[1,2],[2,5],[4,3]]",o:"5.0",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def averageWaitingTime(self, customers):
        t = total = 0
        for arrive, cook in customers:
            t = max(t, arrive) + cook
            total += t - arrive
        return total / len(customers)
`)});
lite({id:3313,slug:"find-the-last-marked-nodes-in-tree",title:"Find the Last Marked Nodes in Tree",level:"Hard",topic:GR,name:"Farthest node is a diameter endpoint",
w:"Path 0-1-2-3: starting at 0 the last marked node is 3; starting at 2 it is 0.",k:"Marking spreads one edge per second, so the last node marked is the farthest node from the start. In a tree the farthest node from any vertex is one of the two endpoints of the diameter. Find the endpoints A and B with two BFS (Breadth-First Search) runs, then for every node answer A if it is at least as far from A as from B, otherwise B.",
i:"edges = [[0,1],[1,2],[2,3]]",o:"[3, 3, 0, 0]",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def lastMarkedNodes(self, edges):
        n = len(edges) + 1
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
        d0 = bfs(0)
        A = d0.index(max(d0))
        dA = bfs(A)
        B = dA.index(max(dA))
        dB = bfs(B)
        return [A if dA[i] >= dB[i] else B for i in range(n)]
`)});
lite({id:3634,slug:"minimum-removals-to-balance-array",title:"Minimum Removals to Balance Array",level:"Medium",topic:SW,name:"Sort, keep the longest window with max ≤ k·min",
w:"[2,1,5], k=2: keep [1,2] (2 ≤ 2·1) and remove 5 → 1 removal.",k:"An array is balanced when max ≤ k × min. After sorting, a balanced set to keep is a window whose last value is at most k times its first. Slide a window with two pointers, find the longest, and remove everything else.",
i:"nums = [2,1,5], k = 2",o:"1",time:"O(n log n)",space:"O(1)",
code:C(`
class Solution:
    def minRemoval(self, nums, k):
        nums.sort()
        best = l = 0
        for r in range(len(nums)):
            while nums[r] > k * nums[l]:
                l += 1
            best = max(best, r - l + 1)
        return len(nums) - best
`)});
lite({id:2488,slug:"count-subarrays-with-median-k",title:"Count Subarrays With Median K",level:"Hard",topic:PS,name:"Balance of bigger vs smaller around k",
w:"[3,2,1,4,5], k=4: subarrays [4], [4,5], [1,4,5] have median 4 → 3.",k:"Replace each number by +1 (bigger than k), −1 (smaller) or 0 (k itself). A subarray containing k has median k exactly when its balance is 0 (odd length) or 1 (even length, the left middle is k). Count balances going left from k in a hash map, then for every balance going right add the matches for −bal and 1 − bal.",
i:"nums = [3,2,1,4,5], k = 4",o:"3",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def countSubarrays(self, nums, k):
        p = nums.index(k)
        cnt = Counter({0: 1})
        bal = 0
        for i in range(p - 1, -1, -1):
            bal += 1 if nums[i] > k else -1
            cnt[bal] += 1
        res = cnt[0] + cnt[1]
        bal = 0
        for i in range(p + 1, len(nums)):
            bal += 1 if nums[i] > k else -1
            res += cnt[-bal] + cnt[1 - bal]
        return res
`)});
lite({id:532,slug:"k-diff-pairs-in-an-array",title:"K-diff Pairs in an Array",level:"Medium",topic:HM,name:"Count values whose partner x + k exists",
w:"[3,1,4,1,5], k=2: pairs (1,3) and (3,5) → 2 (the repeated 1 counts once).",k:"Count each value. For k > 0 a pair is (x, x + k), so count the distinct x where x + k is also present. For k = 0 a pair needs a value that appears at least twice.",
i:"nums = [3,1,4,1,5], k = 2",o:"2",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def findPairs(self, nums, k):
        cnt = Counter(nums)
        if k == 0:
            return sum(c > 1 for c in cnt.values())
        return sum(x + k in cnt for x in cnt)
`)});
lite({id:3295,slug:"report-spam-message",title:"Report Spam Message",level:"Medium",topic:HM,name:"Count words found in the banned set",
w:"['hello','world','leetcode'] with banned ['world','hello']: two words match → true.",k:"Put the banned words in a set. A message is spam when at least two of its words are in that set (repeated words count each time).",
i:"message = [\"hello\",\"world\",\"leetcode\"], bannedWords = [\"world\",\"hello\"]",o:"true",time:"O(n + m)",space:"O(m)",
code:C(`
class Solution:
    def reportSpam(self, message, bannedWords):
        banned = set(bannedWords)
        return sum(w in banned for w in message) >= 2
`)});
lite({id:3893,slug:"maximum-team-size-with-overlapping-intervals",title:"Maximum Team Size with Overlapping Intervals",level:"Medium",topic:IV,name:"Count the intervals that overlap each hub",
w:"[1,4],[2,5],[3,6]: interval [1,4] touches both others → team of 3.",k:"A team is valid if one member (the hub) overlaps every other. So the best team for a hub is the hub plus everything overlapping it. The number overlapping interval [s, e] is n minus the intervals that end before s minus those that start after e (no interval can be both). Use sorted starts/ends and binary search; answer the maximum over hubs.",
i:"startTime = [1,2,3], endTime = [4,5,6]",o:"3",time:"O(n log n)",space:"O(n)",
code:C(`
class Solution:
    def maximumTeamSize(self, startTime, endTime):
        n = len(startTime)
        S = sorted(startTime)
        E = sorted(endTime)
        best = 0
        for s, e in zip(startTime, endTime):
            before = bisect_left(E, s)
            after = n - bisect_right(S, e)
            best = max(best, n - before - after)
        return best
`)});
lite({id:233,slug:"number-of-digit-one",title:"Number of Digit One",level:"Hard",topic:MB,name:"Count the 1s place by place",
w:"n=13: 1,10,11,12,13 contain 1s → 1+1+2+1+1 = 6.",k:"Count how many times a 1 appears in each decimal place separately. For place p (1, 10, 100…) split n into high = n // (10p), cur = digit at p, low = n % p. If cur = 0 the place is a 1 high·p times; if cur = 1, high·p + low + 1 times; if cur > 1, (high + 1)·p times.",
i:"n = 13",o:"6",time:"O(log n)",space:"O(1)",
code:C(`
class Solution:
    def countDigitOne(self, n):
        res = 0
        p = 1
        while p <= n:
            high = n // (p * 10)
            cur = (n // p) % 10
            low = n % p
            if cur == 0:
                res += high * p
            elif cur == 1:
                res += high * p + low + 1
            else:
                res += (high + 1) * p
            p *= 10
        return res
`)});
lite({id:2451,slug:"odd-string-difference",title:"Odd String Difference",level:"Easy",topic:HM,name:"Group by the difference array",
w:"['adc','wzy','abc']: differences are [3,−1], [3,−1], [1,1] → 'abc' is the odd one.",k:"Turn each word into the list of differences between neighbouring letters. All words but one share the same list; group words by that list and return the one that is alone.",
i:"words = [\"adc\",\"wzy\",\"abc\"]",o:"\"abc\"",time:"O(n·L)",space:"O(n·L)",
code:C(`
class Solution:
    def oddString(self, words):
        groups = defaultdict(list)
        for w in words:
            key = tuple(ord(b) - ord(a) for a, b in zip(w, w[1:]))
            groups[key].append(w)
        for g in groups.values():
            if len(g) == 1:
                return g[0]
`)});
lite({id:1219,slug:"path-with-maximum-gold",title:"Path with Maximum Gold",level:"Medium",topic:BTK,name:"DFS from every gold cell",
w:"[[0,6,0],[5,8,7],[0,9,0]]: path 9 → 8 → 7 collects 24.",k:"Start a DFS (Depth-First Search) from every cell with gold. Collect the gold, mark the cell as 0 so it is not reused, try the four neighbours that still have gold, then restore the cell (backtrack). The answer is the best total over all starts.",
i:"grid = [[0,6,0],[5,8,7],[0,9,0]]",o:"24",time:"O(m·n·3^g)",space:"O(g)",
code:C(`
class Solution:
    def getMaximumGold(self, grid):
        m, n = len(grid), len(grid[0])
        def dfs(i, j):
            if not (0 <= i < m and 0 <= j < n) or grid[i][j] == 0:
                return 0
            g = grid[i][j]
            grid[i][j] = 0
            best = max(dfs(i + 1, j), dfs(i - 1, j), dfs(i, j + 1), dfs(i, j - 1))
            grid[i][j] = g
            return g + best
        return max(dfs(i, j) for i in range(m) for j in range(n))
`)});
lite({id:664,slug:"strange-printer",title:"Strange Printer",level:"Hard",topic:DP,name:"Interval DP: merge with a matching letter",
w:"'aba': print 'aaa', then print 'b' over the middle → 2 turns.",k:"Squeeze runs of equal letters first. dp[i][j] = turns for s[i..j]. Print s[i] alone and solve the rest (1 + dp[i+1][j]), or, if some s[k] equals s[i], let the same print stroke cover i and k: dp[i+1][k−1] + dp[k][j].",
i:"s = \"aba\"",o:"2",time:"O(n³)",space:"O(n²)",
code:C(`
class Solution:
    def strangePrinter(self, s):
        s = ''.join(c for c, _ in groupby(s))
        n = len(s)
        dp = [[0] * n for _ in range(n)]
        for i in range(n - 1, -1, -1):
            dp[i][i] = 1
            for j in range(i + 1, n):
                dp[i][j] = dp[i + 1][j] + 1
                for k in range(i + 1, j + 1):
                    if s[k] == s[i]:
                        mid = dp[i + 1][k - 1] if k > i + 1 else 0
                        dp[i][j] = min(dp[i][j], mid + dp[k][j])
        return dp[0][n - 1]
`)});
lite({id:2366,slug:"minimum-replacements-to-sort-the-array",title:"Minimum Replacements to Sort the Array",level:"Hard",topic:GD,name:"From the right, split into the fewest, evenest parts",
w:"[3,9,3]: split 9 into 3+3+3 (2 operations) → [3,3,3,3,3] sorted → 2.",k:"Walk from the right keeping the limit prev (the smallest value allowed). If the number is ≤ prev just lower the limit to it. Otherwise it must be split into k = ceil(x / prev) parts; splitting as evenly as possible makes the smallest part x // k as large as possible, so the new limit is x // k. That costs k − 1 operations.",
i:"nums = [3,9,3]",o:"2",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def minimumReplacement(self, nums):
        ops = 0
        prev = nums[-1]
        for x in reversed(nums[:-1]):
            if x <= prev:
                prev = x
                continue
            k = (x + prev - 1) // prev
            ops += k - 1
            prev = x // k
        return ops
`)});
lite({id:255,slug:"verify-preorder-sequence-in-binary-search-tree",title:"Verify Preorder Sequence in Binary Search Tree",level:"Medium",topic:BT,name:"Stack with a rising lower bound",
w:"[5,2,1,3,6] is a valid preorder; [5,2,6,1,3] is not, because 1 comes after 6 (right side) yet is smaller than 5.",k:"In preorder, once a value is larger than something on the stack we have moved into a right subtree; every later value must exceed the last popped value (the lower bound). Keep a decreasing stack and a lower bound; fail if a value is below the bound.",
i:"preorder = [5,2,1,3,6]",o:"true",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def verifyPreorder(self, preorder):
        low = float('-inf')
        st = []
        for x in preorder:
            if x < low:
                return False
            while st and st[-1] < x:
                low = st.pop()
            st.append(x)
        return True
`)});
