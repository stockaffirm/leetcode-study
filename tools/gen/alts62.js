module.exports=({alt})=>{
const C=s=>s.replace(/^\n/,"").replace(/\n$/,"").split("\n");
// ---- Bloomberg (1)
alt(1396,{name:"Store every trip",tag:"Brute force",time:"O(trips) per query",space:"O(trips)",explain:"Keep a list of trip times per route and average on request.",code:C(`
class UndergroundSystem:
    def __init__(self):
        self.inn = {}
        self.trips = defaultdict(list)

    def checkIn(self, id, stationName, t):
        self.inn[id] = (stationName, t)

    def checkOut(self, id, stationName, t):
        s, t0 = self.inn.pop(id)
        self.trips[(s, stationName)].append(t - t0)

    def getAverageTime(self, startStation, endStation):
        lst = self.trips[(startStation, endStation)]
        return sum(lst) / len(lst)
`)});
alt(1274,{name:"Split into halves along the longer side",tag:"Alternative",time:"O(ships · log size)",space:"O(log size)",explain:"Bisect the rectangle in two instead of four.",code:C(`
class Solution:
    def countShips(self, sea, topRight, bottomLeft):
        def go(tx, ty, bx, by):
            if tx < bx or ty < by or not sea.hasShips(Point(tx, ty), Point(bx, by)):
                return 0
            if tx == bx and ty == by:
                return 1
            if tx - bx >= ty - by:
                mx = (tx + bx) // 2
                return go(mx, ty, bx, by) + go(tx, ty, mx + 1, by)
            my = (ty + by) // 2
            return go(tx, my, bx, by) + go(tx, ty, bx, my + 1)
        return go(topRight.x, topRight.y, bottomLeft.x, bottomLeft.y)
`)});
alt(1387,{name:"Compute powers iteratively",tag:"Alternative",time:"O(n log n)",space:"O(n)",explain:"Loop instead of recursion for each number.",code:C(`
class Solution:
    def getKth(self, lo, hi, k):
        def power(x):
            steps = 0
            while x != 1:
                x = x // 2 if x % 2 == 0 else 3 * x + 1
                steps += 1
            return steps
        return sorted(range(lo, hi + 1), key=lambda x: (power(x), x))[k - 1]
`)});
alt(2423,{name:"Remove each position",tag:"Brute force",time:"O(n²)",space:"O(n)",explain:"Delete every character in turn and test the rest.",code:C(`
class Solution:
    def equalFrequency(self, word):
        for i in range(len(word)):
            rest = word[:i] + word[i + 1:]
            if len(set(Counter(rest).values())) == 1:
                return True
        return False
`)});
alt(1656,{name:"Pointer over a dictionary",tag:"Alternative",time:"O(n) total",space:"O(n)",explain:"Store values in a dict and extend the pointer while keys exist.",code:C(`
class OrderedStream:
    def __init__(self, n):
        self.d = {}
        self.ptr = 1

    def insert(self, idKey, value):
        self.d[idKey] = value
        out = []
        while self.ptr in self.d:
            out.append(self.d[self.ptr])
            self.ptr += 1
        return out
`)});
alt(1583,{name:"Compare with dictionaries of preference order",tag:"Alternative",time:"O(n²)",space:"O(n²)",explain:"Use position lookups via list.index instead of a rank table.",code:C(`
class Solution:
    def unhappyFriends(self, n, preferences, pairs):
        partner = {}
        for a, b in pairs:
            partner[a], partner[b] = b, a
        res = 0
        for x in range(n):
            y = partner[x]
            for u in preferences[x][:preferences[x].index(y)]:
                v = partner[u]
                if preferences[u].index(x) < preferences[u].index(v):
                    res += 1
                    break
        return res
`)});
alt(386,{name:"Sort as strings",tag:"Brute force",time:"O(n log n)",space:"O(n)",explain:"Sort 1…n by their string form.",code:C(`
class Solution:
    def lexicalOrder(self, n):
        return sorted(range(1, n + 1), key=str)
`)});
alt(676,{name:"Trie with a one-change search",tag:"Alternative",time:"O(26·L)",space:"O(total length)",explain:"Store words in a trie; search allows exactly one mismatching letter while walking.",code:C(`
class MagicDictionary:
    def __init__(self):
        self.root = {}

    def buildDict(self, dictionary):
        for w in dictionary:
            node = self.root
            for c in w:
                node = node.setdefault(c, {})
            node['$'] = True

    def search(self, searchWord):
        def go(node, i, used):
            if i == len(searchWord):
                return used and '$' in node
            for c, child in node.items():
                if c == '$':
                    continue
                if c == searchWord[i]:
                    if go(child, i + 1, used):
                        return True
                elif not used and go(child, i + 1, True):
                    return True
            return False
        return go(self.root, 0, False)
`)});
alt(869,{name:"Digit counts",tag:"Alternative",time:"O(31·10)",space:"O(31)",explain:"Compare 10-slot digit count tuples.",code:C(`
class Solution:
    def reorderedPowerOf2(self, n):
        def sig(x):
            c = [0] * 10
            for d in str(x):
                c[int(d)] += 1
            return tuple(c)
        target = sig(n)
        return any(sig(1 << i) == target for i in range(31))
`)});
alt(279,{name:"BFS over remainders",tag:"Alternative",time:"O(n√n)",space:"O(n)",explain:"Breadth-first search from n subtracting squares; the first time 0 is reached is the answer.",code:C(`
class Solution:
    def numSquares(self, n):
        q = deque([n])
        seen = {n}
        steps = 0
        while q:
            steps += 1
            for _ in range(len(q)):
                x = q.popleft()
                j = 1
                while j * j <= x:
                    y = x - j * j
                    if y == 0:
                        return steps
                    if y not in seen:
                        seen.add(y)
                        q.append(y)
                    j += 1
        return steps
`)});
alt(1971,{name:"BFS",tag:"Alternative",time:"O(n + e)",space:"O(n + e)",explain:"Traverse from the source.",code:C(`
class Solution:
    def validPath(self, n, edges, source, destination):
        g = [[] for _ in range(n)]
        for a, b in edges:
            g[a].append(b)
            g[b].append(a)
        seen = {source}
        q = deque([source])
        while q:
            u = q.popleft()
            if u == destination:
                return True
            for v in g[u]:
                if v not in seen:
                    seen.add(v)
                    q.append(v)
        return False
`)});
alt(2461,{name:"Check every window",tag:"Brute force",time:"O(n·k)",space:"O(k)",explain:"For each window test distinctness with a set.",code:C(`
class Solution:
    def maximumSubarraySum(self, nums, k):
        best = 0
        for i in range(len(nums) - k + 1):
            w = nums[i:i + k]
            if len(set(w)) == k:
                best = max(best, sum(w))
        return best
`)});
alt(60,{name:"Generate permutations in order",tag:"Brute force",time:"O(n!)",space:"O(n)",explain:"Enumerate permutations lexicographically and take the k-th.",code:C(`
class Solution:
    def getPermutation(self, n, k):
        for i, p in enumerate(permutations(range(1, n + 1)), 1):
            if i == k:
                return ''.join(map(str, p))
`)});
alt(1609,{name:"DFS storing the last value per level",tag:"Alternative",time:"O(n)",space:"O(h)",explain:"Visit left to right with a dict level → last value.",code:C(`
class Solution:
    def isEvenOddTree(self, root):
        last = {}
        def dfs(node, d):
            if not node:
                return True
            v = node.val
            if d % 2 == 0:
                if v % 2 == 0:
                    return False
                if d in last and v <= last[d]:
                    return False
            else:
                if v % 2 == 1:
                    return False
                if d in last and v >= last[d]:
                    return False
            last[d] = v
            return dfs(node.left, d + 1) and dfs(node.right, d + 1)
        return dfs(root, 0)
`)});
alt(1365,{name:"Count array of values",tag:"Alternative",time:"O(n + 100)",space:"O(100)",explain:"Values are small: prefix-count them.",code:C(`
class Solution:
    def smallerNumbersThanCurrent(self, nums):
        cnt = [0] * 102
        for x in nums:
            cnt[x + 1] += 1
        for i in range(1, 102):
            cnt[i] += cnt[i - 1]
        return [cnt[x] for x in nums]
`)});
alt(389,{name:"Compare letter counts",tag:"Alternative",time:"O(n)",space:"O(1)",explain:"The Counter difference leaves the extra letter.",code:C(`
class Solution:
    def findTheDifference(self, s, t):
        return next(iter(Counter(t) - Counter(s)))
`)});
alt(1009,{name:"Flip each bit",tag:"Alternative",time:"O(log n)",space:"O(log n)",explain:"Invert the binary string.",code:C(`
class Solution:
    def bitwiseComplement(self, n):
        return int(''.join('1' if c == '0' else '0' for c in bin(n)[2:]), 2)
`)});
alt(1104,{name:"Build the normal path then mirror odd levels",tag:"Alternative",time:"O(log n)",space:"O(log n)",explain:"The path of heap labels is label, label//2, …; mirror the labels on alternate rows.",code:C(`
class Solution:
    def pathInZigZagTree(self, label):
        path = []
        x = label
        while x:
            path.append(x)
            x //= 2
        path.reverse()
        res = []
        for depth, v in enumerate(path):
            if depth == len(path) - 1 or (len(path) - 1 - depth) % 2 == 0:
                res.append(v)
            else:
                lo, hi = 1 << depth, (1 << (depth + 1)) - 1
                res.append(lo + hi - v)
        return res
`)});
alt(1700,{name:"Simulate with a queue",tag:"Brute force",time:"O(n²)",space:"O(n)",explain:"Rotate the queue until nobody wants the top sandwich.",code:C(`
class Solution:
    def countStudents(self, students, sandwiches):
        q = deque(students)
        i = 0
        stuck = 0
        while q and stuck < len(q) and i < len(sandwiches):
            if q[0] == sandwiches[i]:
                q.popleft()
                i += 1
                stuck = 0
            else:
                q.append(q.popleft())
                stuck += 1
        return len(q)
`)});
alt(1816,{name:"Cut at the k-th space",tag:"Alternative",time:"O(n)",space:"O(1)",explain:"Find the k-th space and slice.",code:C(`
class Solution:
    def truncateSentence(self, s, k):
        seen = 0
        for i, c in enumerate(s):
            if c == ' ':
                seen += 1
                if seen == k:
                    return s[:i]
        return s
`)});
alt(1820,{name:"Max-flow style with repeated DFS from each girl",tag:"Alternative",time:"O(V·E)",space:"O(V)",explain:"Same matching, augmenting from the girls' side.",code:C(`
class Solution:
    def maximumInvitations(self, grid):
        m, n = len(grid), len(grid[0])
        owner = [-1] * m
        def try_girl(g, seen):
            for b in range(m):
                if grid[b][g] and b not in seen:
                    seen.add(b)
                    if owner[b] == -1 or try_girl(owner[b], seen):
                        owner[b] = g
                        return True
            return False
        return sum(try_girl(g, set()) for g in range(n))
`)});
alt(1893,{name:"Difference array",tag:"Alternative",time:"O(n + 50)",space:"O(50)",explain:"Count coverage with a difference array.",code:C(`
class Solution:
    def isCovered(self, ranges, left, right):
        diff = [0] * 52
        for a, b in ranges:
            diff[a] += 1
            diff[b + 1] -= 1
        cov = list(accumulate(diff))
        return all(cov[x] > 0 for x in range(left, right + 1))
`)});
alt(2161,{name:"Single pass with three lists",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"Append to the right list while scanning once.",code:C(`
class Solution:
    def pivotArray(self, nums, pivot):
        lo, eq, hi = [], [], []
        for x in nums:
            (lo if x < pivot else eq if x == pivot else hi).append(x)
        return lo + eq + hi
`)});
alt(315,{name:"Merge sort with indices",tag:"Alternative",time:"O(n log n)",space:"O(n)",explain:"Count while merging: elements moving left past a smaller one add to its count.",code:C(`
class Solution:
    def countSmaller(self, nums):
        n = len(nums)
        res = [0] * n
        idx = list(range(n))
        def sort(lo, hi):
            if hi - lo <= 1:
                return
            mid = (lo + hi) // 2
            sort(lo, mid)
            sort(mid, hi)
            tmp = []
            i, j = lo, mid
            while i < mid or j < hi:
                if j == hi or (i < mid and nums[idx[i]] <= nums[idx[j]]):
                    res[idx[i]] += j - mid
                    tmp.append(idx[i])
                    i += 1
                else:
                    tmp.append(idx[j])
                    j += 1
            idx[lo:hi] = tmp
        sort(0, n)
        return res
`)});
alt(459,{name:"Try every block length",tag:"Brute force",time:"O(n²)",space:"O(n)",explain:"For each divisor length repeat the prefix and compare.",code:C(`
class Solution:
    def repeatedSubstringPattern(self, s):
        n = len(s)
        return any(n % k == 0 and s[:k] * (n // k) == s for k in range(1, n // 2 + 1))
`)});
alt(1512,{name:"Check all pairs",tag:"Brute force",time:"O(n²)",space:"O(1)",explain:"Compare every pair.",code:C(`
class Solution:
    def numIdenticalPairs(self, nums):
        return sum(nums[i] == nums[j] for i in range(len(nums)) for j in range(i + 1, len(nums)))
`)});
alt(2560,{name:"Dynamic programming for each guess (small)",tag:"Alternative",time:"O(n log max)",space:"O(n)",explain:"For each capability guess compute the best count with a robber DP (Dynamic Programming).",code:C(`
class Solution:
    def minCapability(self, nums, k):
        def best(c):
            take = skip = 0
            for x in nums:
                take, skip = (skip + 1 if x <= c else 0), max(take, skip)
            return max(take, skip)
        lo, hi = min(nums), max(nums)
        while lo < hi:
            mid = (lo + hi) // 2
            if best(mid) >= k:
                hi = mid
            else:
                lo = mid + 1
        return lo
`)});
alt(507,{name:"Try every divisor",tag:"Brute force",time:"O(n)",space:"O(1)",explain:"Add every divisor below n.",code:C(`
class Solution:
    def checkPerfectNumber(self, num):
        return num > 1 and sum(d for d in range(1, num) if num % d == 0) == num
`)});
alt(1658,{name:"Prefix sums with a hash map",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"Find the longest subarray with sum total − x via prefix sums.",code:C(`
class Solution:
    def minOperations(self, nums, x):
        target = sum(nums) - x
        if target < 0:
            return -1
        first = {0: -1}
        run = 0
        best = -1
        for i, v in enumerate(nums):
            run += v
            if run - target in first:
                best = max(best, i - first[run - target])
            first.setdefault(run, i)
        return len(nums) - best if best >= 0 else -1
`)});
alt(390,{name:"Simulate with lists",tag:"Brute force",time:"O(n)",space:"O(n)",explain:"Remove alternating elements from alternating sides.",code:C(`
class Solution:
    def lastRemaining(self, n):
        a = list(range(1, n + 1))
        left = True
        while len(a) > 1:
            a = a[1::2] if left else a[::-1][1::2][::-1]
            left = not left
        return a[0]
`)});
alt(1346,{name:"Sort and binary search",tag:"Alternative",time:"O(n log n)",space:"O(1)",explain:"For each element binary search its double (handle zero separately).",code:C(`
class Solution:
    def checkIfExist(self, arr):
        a = sorted(arr)
        for i, x in enumerate(a):
            j = bisect_left(a, 2 * x)
            if j < len(a) and a[j] == 2 * x and j != i:
                return True
            if j < len(a) and a[j] == 2 * x and x == 0 and a.count(0) > 1:
                return True
        return False
`)});
alt(3174,{name:"Repeated removal",tag:"Brute force",time:"O(n²)",space:"O(n)",explain:"Find the first digit and delete it with the letter before it, repeat.",code:C(`
class Solution:
    def clearDigits(self, s):
        a = list(s)
        while True:
            i = next((k for k, c in enumerate(a) if c.isdigit()), None)
            if i is None:
                return ''.join(a)
            del a[i - 1:i + 1]
`)});
alt(1506,{name:"Set of all children",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"The root is the node that is not in the set of children.",code:C(`
class Solution:
    def findRoot(self, tree):
        children = {id(c) for node in tree for c in node.children}
        for node in tree:
            if id(node) not in children:
                return node
`)});
alt(3136,{name:"Count with sets",tag:"Alternative",time:"O(n)",space:"O(1)",explain:"Use set intersections for vowel and consonant tests.",code:C(`
class Solution:
    def isValid(self, word):
        letters = {c.lower() for c in word if c.isalpha()}
        v = letters & set('aeiou')
        return len(word) >= 3 and word.isalnum() and bool(v) and bool(letters - v)
`)});
alt(812,{name:"Cross product of vectors",tag:"Alternative",time:"O(n³)",space:"O(1)",explain:"Area = half the absolute cross product of two edge vectors.",code:C(`
class Solution:
    def largestTriangleArea(self, points):
        best = 0
        n = len(points)
        for i in range(n):
            for j in range(i + 1, n):
                for k in range(j + 1, n):
                    ax, ay = points[j][0] - points[i][0], points[j][1] - points[i][1]
                    bx, by = points[k][0] - points[i][0], points[k][1] - points[i][1]
                    best = max(best, abs(ax * by - ay * bx) / 2)
        return best
`)});
alt(2048,{name:"Search with a generator of balanced numbers",tag:"Alternative",time:"small",space:"O(1)",explain:"Compare digit counts with the digit value using str.count.",code:C(`
class Solution:
    def nextBeautifulNumber(self, n):
        x = n + 1
        while True:
            s = str(x)
            if all(s.count(d) == int(d) for d in set(s)):
                return x
            x += 1
`)});
alt(1022,{name:"Collect root-to-leaf strings",tag:"Alternative",time:"O(n·h)",space:"O(h)",explain:"Build each path as a binary string and convert it.",code:C(`
class Solution:
    def sumRootToLeaf(self, root):
        total = 0
        st = [(root, '')]
        while st:
            node, path = st.pop()
            path += str(node.val)
            if not node.left and not node.right:
                total += int(path, 2)
            if node.left:
                st.append((node.left, path))
            if node.right:
                st.append((node.right, path))
        return total
`)});
alt(2833,{name:"Try both directions",tag:"Alternative",time:"O(n)",space:"O(1)",explain:"Send every underscore left, then right, and take the larger distance.",code:C(`
class Solution:
    def furthestDistanceFromOrigin(self, moves):
        left = moves.count('L') + moves.count('_') - moves.count('R')
        right = moves.count('R') + moves.count('_') - moves.count('L')
        return max(abs(left), abs(right))
`)});
alt(119,{name:"Binomial coefficients",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"Row n holds C(n, 0) … C(n, n).",code:C(`
class Solution:
    def getRow(self, rowIndex):
        row = [1]
        for k in range(1, rowIndex + 1):
            row.append(row[-1] * (rowIndex - k + 1) // k)
        return row
`)});
alt(241,{name:"Iterative split with memo dict",tag:"Alternative",time:"exponential",space:"O(n · Catalan)",explain:"Memoise with an explicit dictionary.",code:C(`
class Solution:
    def diffWaysToCompute(self, expression):
        memo = {}
        def go(e):
            if e in memo:
                return memo[e]
            if e.isdigit():
                memo[e] = [int(e)]
                return memo[e]
            out = []
            for i, c in enumerate(e):
                if c in '+-*':
                    for a in go(e[:i]):
                        for b in go(e[i + 1:]):
                            out.append(a + b if c == '+' else a - b if c == '-' else a * b)
            memo[e] = out
            return out
        return sorted(go(expression), reverse=True)
`)});
alt(308,{name:"Row prefix sums",tag:"Alternative",time:"O(n) per call",space:"O(m·n)",explain:"Keep a prefix-sum array per row; update rebuilds one row.",code:C(`
class NumMatrix:
    def __init__(self, matrix):
        self.mat = [row[:] for row in matrix]
        self.pre = [[0] + list(accumulate(row)) for row in matrix]

    def update(self, row, col, val):
        self.mat[row][col] = val
        self.pre[row] = [0] + list(accumulate(self.mat[row]))

    def sumRegion(self, row1, col1, row2, col2):
        return sum(self.pre[r][col2 + 1] - self.pre[r][col1] for r in range(row1, row2 + 1))
`)});
alt(561,{name:"Bucket by value",tag:"Alternative",time:"O(n + range)",space:"O(range)",explain:"Counting sort then take every other element.",code:C(`
class Solution:
    def arrayPairSum(self, nums):
        cnt = Counter(nums)
        total = 0
        take = True
        for v in range(min(nums), max(nums) + 1):
            c = cnt.get(v, 0)
            while c:
                if take:
                    total += v
                take = not take
                c -= 1
        return total
`)});
alt(885,{name:"Generate with direction vectors",tag:"Alternative",time:"O(max(m,n)²)",space:"O(m·n)",explain:"Same spiral using a step counter.",code:C(`
class Solution:
    def spiralMatrixIII(self, rows, cols, rStart, cStart):
        res = [[rStart, cStart]]
        r, c = rStart, cStart
        dr, dc = 0, 1
        steps = 1
        while len(res) < rows * cols:
            for _ in range(2):
                for _ in range(steps):
                    r, c = r + dr, c + dc
                    if 0 <= r < rows and 0 <= c < cols:
                        res.append([r, c])
                dr, dc = dc, -dr
            steps += 1
        return res
`)});
alt(2769,{name:"Simulate the operations",tag:"Brute force",time:"O(t)",space:"O(1)",explain:"Raise x and num apart by one each operation.",code:C(`
class Solution:
    def theMaximumAchievableX(self, num, t):
        x = num
        for _ in range(t):
            x += 2
        return x
`)});
alt(1941,{name:"Compare to the first count",tag:"Alternative",time:"O(n)",space:"O(1)",explain:"Every count must equal the first one.",code:C(`
class Solution:
    def areOccurrencesEqual(self, s):
        counts = list(Counter(s).values())
        return all(c == counts[0] for c in counts)
`)});
alt(1014,{name:"Check all pairs",tag:"Brute force",time:"O(n²)",space:"O(1)",explain:"Try every pair.",code:C(`
class Solution:
    def maxScoreSightseeingPair(self, values):
        n = len(values)
        return max(values[i] + values[j] + i - j for i in range(n) for j in range(i + 1, n))
`)});
alt(3405,{name:"DP over positions and equal-neighbour count",tag:"Brute force",time:"O(n·k)",space:"O(k)",explain:"dp[j] = arrays of the current length with exactly j equal neighbours.",code:C(`
class Solution:
    def countGoodArrays(self, n, m, k):
        MOD = 10**9 + 7
        dp = [0] * (k + 1)
        dp[0] = m
        for _ in range(n - 1):
            new = [0] * (k + 1)
            for j in range(k + 1):
                new[j] = dp[j] * (m - 1) % MOD
                if j:
                    new[j] = (new[j] + dp[j - 1]) % MOD
            dp = new
        return dp[k] % MOD
`)});
};
