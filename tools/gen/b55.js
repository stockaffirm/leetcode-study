const {lite}=require("./lib");
const C=s=>s.replace(/^\n/,"").replace(/\n$/,"").split("\n");
const ARR="Array / String",HM="Hash Map / Set",STK="Stack / Monotonic Stack",BT="Binary Tree",GR="Graph",HP="Heap",DP="Dynamic Programming",GD="Greedy",MB="Math / Bit Manipulation",BS="Binary Search",SRT="Sorting",SW="Sliding Window",MX="Matrix",UF="Union Find / Segment Tree",TP="Two Pointers",IV="Intervals",BTK="Backtracking",DS="Design",LL="Linked List",TR="Trie",PS="Prefix Sum";
// ---- Cisco
lite({id:3508,slug:"implement-router",title:"Implement Router",level:"Medium",topic:DS,name:"FIFO queue + duplicate set + per-destination timestamps",
w:"Router with capacity 3: adding a 4th packet evicts the oldest; getCount(5,100,110) counts packets for destination 5 in that time range.",k:"Keep packets in a FIFO deque (oldest first) with a set for duplicate detection. For getCount, store each destination's timestamps in a list (they arrive in non-decreasing order) plus how many of its oldest entries have been removed; binary search the live part of the list. Evicting or forwarding a packet pops the deque front and advances that destination's removed counter.",
i:"Router(3); addPacket(1,4,90); addPacket(2,5,90); addPacket(1,4,90); addPacket(3,5,95); addPacket(4,5,105); forwardPacket(); addPacket(5,2,110); getCount(5,100,110)",o:"[True, True, False, True, True, [2, 5, 90], True, 1]",time:"O(log n) per call",space:"O(memoryLimit)",
code:C(`
class Router:
    def __init__(self, memoryLimit):
        self.cap = memoryLimit
        self.q = deque()
        self.seen = set()
        self.ts = defaultdict(list)
        self.head = defaultdict(int)

    def addPacket(self, source, destination, timestamp):
        key = (source, destination, timestamp)
        if key in self.seen:
            return False
        if len(self.q) == self.cap:
            self._pop()
        self.q.append(key)
        self.seen.add(key)
        self.ts[destination].append(timestamp)
        return True

    def _pop(self):
        s, d, t = self.q.popleft()
        self.seen.discard((s, d, t))
        self.head[d] += 1
        return [s, d, t]

    def forwardPacket(self):
        return self._pop() if self.q else []

    def getCount(self, destination, startTime, endTime):
        lst = self.ts[destination]
        h = self.head[destination]
        return bisect_right(lst, endTime, h) - bisect_left(lst, startTime, h)
`)});
lite({id:2081,slug:"sum-of-k-mirror-numbers",title:"Sum of k-Mirror Numbers",level:"Hard",topic:MB,name:"Generate decimal palindromes, test base k",
w:"k=2, n=5: the smallest numbers that are palindromes in base 10 and base 2 are 1, 3, 5, 7, 9 → 25.",k:"Instead of testing every integer, generate base-10 palindromes in increasing order (by length, then by their first half mirrored). For each, check whether its base-k digits form a palindrome, collect the first n that do, and add them up.",
i:"k = 2, n = 5",o:"25",time:"depends on n",space:"O(1)",
code:C(`
class Solution:
    def kMirror(self, k, n):
        def pal_in_base(x):
            d = []
            while x:
                d.append(x % k)
                x //= k
            return d == d[::-1]
        found = []
        length = 1
        while len(found) < n:
            half = (length + 1) // 2
            for h in range(10 ** (half - 1), 10 ** half):
                s = str(h)
                p = int(s + s[::-1][length % 2:])
                if pal_in_base(p):
                    found.append(p)
                    if len(found) == n:
                        break
            length += 1
        return sum(found)
`)});
lite({id:2067,slug:"number-of-equal-count-substrings",title:"Number of Equal Count Substrings",level:"Medium",topic:SW,name:"Sliding window for each number of distinct letters",
w:"'aaabcbbcc', count=3: three substrings (e.g. 'aaa') have every present letter exactly 3 times → 3.",k:"A substring where every letter that occurs does so exactly `count` times and which has d distinct letters has length d × count. For each d from 1 to 26 slide a window of that length while tracking how many letters currently occur exactly count times; when that number equals d the window is valid.",
i:"s = \"aaabcbbcc\", count = 3",o:"3",time:"O(26·n)",space:"O(1)",
code:C(`
class Solution:
    def equalCountSubstrings(self, s, count):
        n = len(s)
        res = 0
        for d in range(1, 27):
            L = d * count
            if L > n:
                break
            freq = Counter()
            good = 0
            for i, c in enumerate(s):
                freq[c] += 1
                if freq[c] == count:
                    good += 1
                elif freq[c] == count + 1:
                    good -= 1
                if i >= L:
                    old = s[i - L]
                    if freq[old] == count:
                        good -= 1
                    freq[old] -= 1
                    if freq[old] == count:
                        good += 1
                if i >= L - 1 and good == d:
                    res += 1
        return res
`)});
lite({id:3047,slug:"find-the-largest-area-of-square-inside-two-rectangles",title:"Find the Largest Area of Square Inside Two Rectangles",level:"Medium",topic:ARR,name:"Intersect every pair of rectangles",
w:"Rectangles overlapping in a 1×1 region → largest square has area 1.",k:"A square inside the overlap of two rectangles is limited by the overlap's width and height. For each pair compute width = min(right) − max(left) and height = min(top) − max(bottom); if both are positive the biggest square has side min(width, height). Take the largest side over all pairs and return its square.",
i:"bottomLeft = [[1,1],[2,2],[3,1]], topRight = [[3,3],[4,4],[6,6]]",o:"1",time:"O(n²)",space:"O(1)",
code:C(`
class Solution:
    def largestSquareArea(self, bottomLeft, topRight):
        n = len(bottomLeft)
        side = 0
        for i in range(n):
            for j in range(i + 1, n):
                w = min(topRight[i][0], topRight[j][0]) - max(bottomLeft[i][0], bottomLeft[j][0])
                h = min(topRight[i][1], topRight[j][1]) - max(bottomLeft[i][1], bottomLeft[j][1])
                side = max(side, min(w, h))
        return side * side if side > 0 else 0
`)});
lite({id:1784,slug:"check-if-binary-string-has-at-most-one-segment-of-ones",title:"Check if Binary String Has at Most One Segment of Ones",level:"Easy",topic:ARR,name:"No '01' after the first 1",
w:"'1001' has two segments of ones → false; '110' has one → true.",k:"The string starts with '1'. A second segment of ones exists exactly when the pattern '01' appears (a zero followed by a one).",
i:"s = \"1001\"",o:"false",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def checkOnesSegment(self, s):
        return '01' not in s
`)});
lite({id:3648,slug:"minimum-sensors-to-cover-grid",title:"Minimum Sensors to Cover Grid",level:"Medium",topic:MB,name:"Tile the grid with (2k+1)×(2k+1) squares",
w:"5×5 with k=1: each sensor covers a 3×3 block → 2 × 2 = 4 sensors.",k:"A sensor covers every cell within Chebyshev distance k: a (2k+1)×(2k+1) square. Tiling the n×m grid with these squares needs ceil(n/(2k+1)) rows and ceil(m/(2k+1)) columns of sensors.",
i:"n = 5, m = 5, k = 1",o:"4",time:"O(1)",space:"O(1)",
code:C(`
class Solution:
    def minSensors(self, n, m, k):
        side = 2 * k + 1
        return ((n + side - 1) // side) * ((m + side - 1) // side)
`)});
lite({id:2016,slug:"maximum-difference-between-increasing-elements",title:"Maximum Difference Between Increasing Elements",level:"Easy",topic:ARR,name:"Track the minimum so far",
w:"[7,1,5,4]: buy at 1, sell at 5 → 4.",k:"For each j find the smallest earlier value; if it is smaller than nums[j], nums[j] − that min is a candidate. Return the largest candidate, or −1 if no pair has nums[i] < nums[j].",
i:"nums = [7,1,5,4]",o:"4",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def maximumDifference(self, nums):
        best = -1
        lo = nums[0]
        for x in nums[1:]:
            if x > lo:
                best = max(best, x - lo)
            else:
                lo = x
        return best
`)});
lite({id:486,slug:"predict-the-winner",title:"Predict the Winner",level:"Medium",topic:DP,name:"Interval DP on the score difference",
w:"[1,5,2]: player 1 takes 1 and loses to 5+...; best difference is −2 → false.",k:"dp[i][j] is the best (current player − opponent) score difference on nums[i..j]. The player takes the left end or the right end and then faces the opponent's best difference: dp[i][j] = max(nums[i] − dp[i+1][j], nums[j] − dp[i][j−1]). Player 1 wins if dp[0][n−1] ≥ 0.",
i:"nums = [1,5,2]",o:"false",time:"O(n²)",space:"O(n²)",
code:C(`
class Solution:
    def predictTheWinner(self, nums):
        n = len(nums)
        dp = [[0] * n for _ in range(n)]
        for i in range(n):
            dp[i][i] = nums[i]
        for length in range(2, n + 1):
            for i in range(n - length + 1):
                j = i + length - 1
                dp[i][j] = max(nums[i] - dp[i + 1][j], nums[j] - dp[i][j - 1])
        return dp[0][n - 1] >= 0
`)});
lite({id:646,slug:"maximum-length-of-pair-chain",title:"Maximum Length of Pair Chain",level:"Medium",topic:GD,name:"Sort by end, take whatever starts after",
w:"[[1,2],[2,3],[3,4]]: take [1,2] then [3,4] → chain of 2.",k:"A pair (c,d) can follow (a,b) if b < c. This is activity selection: sort pairs by their right end and greedily take each pair that starts after the end of the last chosen one.",
i:"pairs = [[1,2],[2,3],[3,4]]",o:"2",time:"O(n log n)",space:"O(1)",
code:C(`
class Solution:
    def findLongestChain(self, pairs):
        end = float('-inf')
        count = 0
        for a, b in sorted(pairs, key=lambda p: p[1]):
            if a > end:
                end = b
                count += 1
        return count
`)});
