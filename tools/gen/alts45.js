module.exports=({alt})=>{
const C=s=>s.replace(/^\n/,"").replace(/\n$/,"").split("\n");
// ---- Adobe
alt(910,{name:"Try every sign pattern",tag:"Brute force",time:"O(2ⁿ·n)",space:"O(n)",explain:"Only for tiny arrays: try +k or −k on every number and keep the smallest range.",code:C(`
class Solution:
    def smallestRangeII(self, nums, k):
        best = float('inf')
        for signs in product((k, -k), repeat=len(nums)):
            v = [x + s for x, s in zip(nums, signs)]
            best = min(best, max(v) - min(v))
        return best
`)});
alt(2328,{name:"Process cells from largest to smallest",tag:"Alternative",time:"O(mn log mn)",space:"O(mn)",explain:"Sort cells by value descending; each cell's count is 1 plus the counts of larger neighbours, which are already computed.",code:C(`
class Solution:
    def countPaths(self, grid):
        MOD = 10**9 + 7
        m, n = len(grid), len(grid[0])
        cells = sorted(((grid[i][j], i, j) for i in range(m) for j in range(n)), reverse=True)
        dp = [[1] * n for _ in range(m)]
        for v, i, j in cells:
            for a, b in ((i + 1, j), (i - 1, j), (i, j + 1), (i, j - 1)):
                if 0 <= a < m and 0 <= b < n and grid[a][b] > v:
                    dp[i][j] = (dp[i][j] + dp[a][b]) % MOD
        return sum(map(sum, dp)) % MOD
`)});
alt(292,{name:"Win/lose table",tag:"Brute force",time:"O(n)",space:"O(n)",explain:"win[i] is true if some move of 1-3 stones leaves the opponent in a losing position.",code:C(`
class Solution:
    def canWinNim(self, n):
        win = [False] * (n + 4)
        for i in range(1, n + 1):
            win[i] = i <= 3 or not (win[i - 1] and win[i - 2] and win[i - 3])
        return win[n]
`)});
alt(793,{name:"Walk through multiples of 5",tag:"Brute force",time:"O(k)",space:"O(1)",explain:"Trailing zeros only change at multiples of 5; walk x = 0, 5, 10 … counting zeros until we reach or pass k.",code:C(`
class Solution:
    def preimageSizeFZF(self, k):
        x = 0
        zeros = 0
        while zeros < k:
            x += 5
            y = x
            zeros = 0
            while y:
                y //= 5
                zeros += y
        return 5 if zeros == k else 0
`)});
alt(908,{name:"Shift both ends explicitly",tag:"Alternative",time:"O(n)",space:"O(1)",explain:"Move the smallest value up by k and the largest down by k and look at the gap.",code:C(`
class Solution:
    def smallestRangeI(self, nums, k):
        lo, hi = min(nums) + k, max(nums) - k
        return hi - lo if hi > lo else 0
`)});
alt(1190,{name:"Teleport through matching brackets",tag:"Optimal",time:"O(n)",space:"O(n)",explain:"Match the brackets first. Walking the string, hitting a bracket jumps to its partner and flips direction, so each letter is visited once.",code:C(`
class Solution:
    def reverseParentheses(self, s):
        n = len(s)
        pair = [0] * n
        st = []
        for i, c in enumerate(s):
            if c == '(':
                st.append(i)
            elif c == ')':
                j = st.pop()
                pair[i], pair[j] = j, i
        res = []
        i, d = 0, 1
        while i < n:
            if s[i] in '()':
                i = pair[i]
                d = -d
            else:
                res.append(s[i])
            i += d
        return ''.join(res)
`)});
alt(1916,{name:"Recursive combinations",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"ways(u) = product of the children's ways times the number of ways to interleave their orders (a multinomial coefficient).",code:C(`
class Solution:
    def waysToBuildRooms(self, prevRoom):
        MOD = 10**9 + 7
        n = len(prevRoom)
        children = [[] for _ in range(n)]
        for i in range(1, n):
            children[prevRoom[i]].append(i)
        fact = [1] * (n + 1)
        for i in range(1, n + 1):
            fact[i] = fact[i - 1] * i % MOD
        def go(u):
            size, ways = 1, 1
            sizes = []
            for v in children[u]:
                s, w = go(v)
                sizes.append(s)
                ways = ways * w % MOD
                size += s
            total = fact[size - 1]
            for s in sizes:
                total = total * pow(fact[s], MOD - 2, MOD) % MOD
            return size, ways * total % MOD
        return go(0)[1]
`)});
alt(2055,{name:"Count per query",tag:"Brute force",time:"O(q·n)",space:"O(1)",explain:"Trim each range to its first and last candle and count the plates between them.",code:C(`
class Solution:
    def platesBetweenCandles(self, s, queries):
        res = []
        for l, r in queries:
            sub = s[l:r + 1]
            a, b = sub.find('|'), sub.rfind('|')
            res.append(sub[a:b].count('*') if a >= 0 and a < b else 0)
        return res
`)});
alt(2143,{name:"Try every range and every choice",tag:"Brute force",time:"O(n²·2ⁿ)",space:"O(n)",explain:"Only for tiny arrays: for each range test all 2^len ways of picking from nums1 or nums2.",code:C(`
class Solution:
    def countSubranges(self, nums1, nums2):
        n = len(nums1)
        res = 0
        for l in range(n):
            for r in range(l, n):
                for pick in product((0, 1), repeat=r - l + 1):
                    s1 = sum(nums1[l + i] for i, p in enumerate(pick) if p == 0)
                    s2 = sum(nums2[l + i] for i, p in enumerate(pick) if p == 1)
                    res += s1 == s2
        return res % (10**9 + 7)
`)});
alt(2406,{name:"Sweep over start/end events",tag:"Alternative",time:"O(n log n)",space:"O(n)",explain:"Sort start events (+1) and end events (−1, placed just after the end); the biggest running total is the group count.",code:C(`
class Solution:
    def minGroups(self, intervals):
        events = []
        for s, e in intervals:
            events.append((s, 1))
            events.append((e + 1, -1))
        events.sort()
        cur = best = 0
        for _, d in events:
            cur += d
            best = max(best, cur)
        return best
`)});
alt(2429,{name:"Try every candidate x",tag:"Brute force",time:"O(2^(bits))",space:"O(1)",explain:"Check all x below a bound and pick the smallest XOR among those with the right number of set bits.",code:C(`
class Solution:
    def minimizeXor(self, num1, num2):
        cnt = bin(num2).count('1')
        best, ans = float('inf'), 0
        for x in range(1 << (num1.bit_length() + cnt)):
            if bin(x).count('1') == cnt and x ^ num1 < best:
                best, ans = x ^ num1, x
        return ans
`)});
alt(2422,{name:"Two pointers with running sums",tag:"Alternative",time:"O(n)",space:"O(1)",explain:"Same idea without changing the array: keep the current left and right block sums.",code:C(`
class Solution:
    def minimumOperations(self, nums):
        l, r = 0, len(nums) - 1
        a, b = nums[l], nums[r]
        ops = 0
        while l < r:
            if a == b:
                l += 1
                r -= 1
                a, b = nums[l], nums[r]
            elif a < b:
                l += 1
                a += nums[l]
                ops += 1
            else:
                r -= 1
                b += nums[r]
                ops += 1
        return ops
`)});
alt(2892,{name:"Merge adjacent pairs until stuck",tag:"Brute force",time:"O(n²)",space:"O(n)",explain:"Keep merging the leftmost adjacent pair whose product is at most k.",code:C(`
class Solution:
    def minArrayLength(self, nums, k):
        if 0 in nums:
            return 1
        a = list(nums)
        changed = True
        while changed:
            changed = False
            for i in range(len(a) - 1):
                if a[i] * a[i + 1] <= k:
                    a[i:i + 2] = [a[i] * a[i + 1]]
                    changed = True
                    break
        return len(a)
`)});
alt(2962,{name:"Positions of the maximum",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"Take the indices p of the maximum. For each run of k consecutive maxima p[i..i+k−1], the start can be any index after p[i−1] and the end any index from p[i+k−1].",code:C(`
class Solution:
    def countSubarrays(self, nums, k):
        M = max(nums)
        p = [i for i, x in enumerate(nums) if x == M]
        n = len(nums)
        res = 0
        for i in range(len(p) - k + 1):
            prev = p[i - 1] if i else -1
            res += (p[i] - prev) * (n - p[i + k - 1])
        return res
`)});
alt(3173,{name:"Index loop",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"Plain loop over i from 0 to n−2.",code:C(`
class Solution:
    def orArray(self, nums):
        res = []
        for i in range(len(nums) - 1):
            res.append(nums[i] | nums[i + 1])
        return res
`)});
alt(3636,{name:"Count every query directly",tag:"Brute force",time:"O(q·n)",space:"O(n)",explain:"Count the values in each range, pick the highest frequency (smallest value on ties) and compare to the threshold.",code:C(`
class Solution:
    def subarrayMajority(self, nums, queries):
        res = []
        for l, r, t in queries:
            cnt = Counter(nums[l:r + 1])
            f, v = max((c, -x) for x, c in cnt.items())
            res.append(-v if f >= t else -1)
        return res
`)});
alt(3736,{name:"Add up the gaps",tag:"Alternative",time:"O(n)",space:"O(1)",explain:"Sum max − x for every element.",code:C(`
class Solution:
    def minMoves(self, nums):
        m = max(nums)
        return sum(m - x for x in nums)
`)});
alt(1636,{name:"Group by frequency",tag:"Alternative",time:"O(n log n)",space:"O(n)",explain:"Bucket values by count, then output buckets in increasing count with values descending.",code:C(`
class Solution:
    def frequencySort(self, nums):
        cnt = Counter(nums)
        groups = defaultdict(list)
        for v, c in cnt.items():
            groups[c].append(v)
        res = []
        for c in sorted(groups):
            for v in sorted(groups[c], reverse=True):
                res.extend([v] * c)
        return res
`)});
alt(2506,{name:"Compare every pair",tag:"Brute force",time:"O(n²·L)",space:"O(1)",explain:"Check all pairs of words for equal letter sets.",code:C(`
class Solution:
    def similarPairs(self, words):
        res = 0
        for i in range(len(words)):
            for j in range(i + 1, len(words)):
                res += set(words[i]) == set(words[j])
        return res
`)});
alt(1863,{name:"Enumerate every subset",tag:"Brute force",time:"O(2ⁿ·n)",space:"O(n)",explain:"Compute the XOR of each subset (bitmask) and add them up.",code:C(`
class Solution:
    def subsetXORSum(self, nums):
        total = 0
        n = len(nums)
        for mask in range(1 << n):
            x = 0
            for i in range(n):
                if mask >> i & 1:
                    x ^= nums[i]
            total += x
        return total
`)});
alt(3528,{name:"Iterative DFS",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"Same multiplication along tree edges, using a stack instead of a queue.",code:C(`
class Solution:
    def baseUnitConversions(self, conversions):
        MOD = 10**9 + 7
        n = len(conversions) + 1
        g = [[] for _ in range(n)]
        for a, b, f in conversions:
            g[a].append((b, f))
        res = [0] * n
        res[0] = 1
        st = [0]
        while st:
            u = st.pop()
            for v, f in g[u]:
                res[v] = res[u] * f % MOD
                st.append(v)
        return res
`)});
alt(475,{name:"Two pointers over sorted houses",tag:"Alternative",time:"O(n log n + m log m)",space:"O(1)",explain:"Sort both lists and advance the heater pointer while the next heater is at least as close.",code:C(`
class Solution:
    def findRadius(self, houses, heaters):
        houses.sort()
        heaters.sort()
        j = res = 0
        for h in houses:
            while j + 1 < len(heaters) and abs(heaters[j + 1] - h) <= abs(heaters[j] - h):
                j += 1
            res = max(res, abs(heaters[j] - h))
        return res
`)});
alt(430,{name:"Recursive flatten returning the tail",tag:"Alternative",time:"O(n)",space:"O(depth)",explain:"flat(node) splices child lists in and returns the tail of the flattened list.",code:C(`
class Solution:
    def flatten(self, head):
        def flat(node):
            tail = node
            while node:
                nxt = node.next
                if node.child:
                    ctail = flat(node.child)
                    node.next = node.child
                    node.child.prev = node
                    ctail.next = nxt
                    if nxt:
                        nxt.prev = ctail
                    node.child = None
                    tail = ctail
                else:
                    tail = node
                node = nxt
            return tail
        flat(head)
        return head
`)});
alt(1739,{name:"Binary search the floor size",tag:"Alternative",time:"O(log n)",space:"O(1)",explain:"For a given floor size f compute the most boxes it can hold (full pyramid layers plus a partial layer); binary search the smallest f that holds n.",code:C(`
class Solution:
    def minimumBoxes(self, n):
        def cap(f):
            k = 0
            while (k + 1) * (k + 2) // 2 <= f:
                k += 1
            total = sum(i * (i + 1) // 2 for i in range(1, k + 1))
            m = f - k * (k + 1) // 2
            return total + m * (m + 1) // 2
        lo, hi = 1, n
        while lo < hi:
            mid = (lo + hi) // 2
            if cap(mid) >= n:
                hi = mid
            else:
                lo = mid + 1
        return lo
`)});
alt(993,{name:"DFS recording depth and parent",tag:"Alternative",time:"O(n)",space:"O(h)",explain:"Recursive walk that remembers the parent and depth of x and y.",code:C(`
class Solution:
    def isCousins(self, root, x, y):
        info = {}
        def dfs(node, parent, depth):
            if not node:
                return
            if node.val in (x, y):
                info[node.val] = (parent, depth)
            dfs(node.left, node, depth + 1)
            dfs(node.right, node, depth + 1)
        dfs(root, None, 0)
        (px, dx), (py, dy) = info[x], info[y]
        return dx == dy and px is not py
`)});
alt(307,{name:"Segment tree",tag:"Alternative",time:"O(log n) per call",space:"O(n)",explain:"A bottom-up segment tree: leaves hold the numbers, each parent holds the sum of its two children.",code:C(`
class NumArray:
    def __init__(self, nums):
        self.n = len(nums)
        self.t = [0] * (2 * self.n)
        for i, v in enumerate(nums):
            self.t[self.n + i] = v
        for i in range(self.n - 1, 0, -1):
            self.t[i] = self.t[2 * i] + self.t[2 * i + 1]

    def update(self, index, val):
        i = index + self.n
        self.t[i] = val
        while i > 1:
            i //= 2
            self.t[i] = self.t[2 * i] + self.t[2 * i + 1]

    def sumRange(self, left, right):
        l, r = left + self.n, right + self.n + 1
        s = 0
        while l < r:
            if l & 1:
                s += self.t[l]
                l += 1
            if r & 1:
                r -= 1
                s += self.t[r]
            l //= 2
            r //= 2
        return s
`)});
alt(3046,{name:"Sort and compare i and i+2",tag:"Alternative",time:"O(n log n)",space:"O(1)",explain:"After sorting, a value appearing three times shows up as nums[i] == nums[i+2].",code:C(`
class Solution:
    def isPossibleToSplit(self, nums):
        nums = sorted(nums)
        return all(nums[i] != nums[i + 2] for i in range(len(nums) - 2))
`)});
alt(2536,{name:"Increment cell by cell",tag:"Brute force",time:"O(q·n²)",space:"O(n²)",explain:"Add 1 to every cell of every rectangle directly.",code:C(`
class Solution:
    def rangeAddQueries(self, n, queries):
        mat = [[0] * n for _ in range(n)]
        for r1, c1, r2, c2 in queries:
            for i in range(r1, r2 + 1):
                for j in range(c1, c2 + 1):
                    mat[i][j] += 1
        return mat
`)});
alt(669,{name:"Iterative trim",tag:"Alternative",time:"O(n)",space:"O(1)",explain:"Move the root into range, then fix the left spine (drop too-small nodes) and the right spine (drop too-large nodes).",code:C(`
class Solution:
    def trimBST(self, root, low, high):
        while root and not (low <= root.val <= high):
            root = root.right if root.val < low else root.left
        node = root
        while node:
            while node.left and node.left.val < low:
                node.left = node.left.right
            node = node.left
        node = root
        while node:
            while node.right and node.right.val > high:
                node.right = node.right.left
            node = node.right
        return root
`)});
alt(2275,{name:"Binary strings per bit",tag:"Alternative",time:"O(n log max)",space:"O(1)",explain:"Format each number as a 25-bit string and count the 1s in every column.",code:C(`
class Solution:
    def largestCombination(self, candidates):
        cols = [0] * 25
        for x in candidates:
            s = format(x, '025b')
            for i, ch in enumerate(s):
                if ch == '1':
                    cols[i] += 1
        return max(cols)
`)});
alt(1507,{name:"Month dictionary and slicing",tag:"Alternative",time:"O(1)",space:"O(1)",explain:"Look the month up in a dict and slice the day digits.",code:C(`
class Solution:
    def reformatDate(self, date):
        mm = {"Jan": "01", "Feb": "02", "Mar": "03", "Apr": "04", "May": "05", "Jun": "06",
              "Jul": "07", "Aug": "08", "Sep": "09", "Oct": "10", "Nov": "11", "Dec": "12"}
        parts = date.split(' ')
        day = parts[0][:-2].zfill(2)
        return parts[2] + '-' + mm[parts[1]] + '-' + day
`)});
alt(1823,{name:"Simulate with a list",tag:"Brute force",time:"O(n²)",space:"O(n)",explain:"Remove the k-th friend repeatedly from a circle until one is left.",code:C(`
class Solution:
    def findTheWinner(self, n, k):
        friends = list(range(1, n + 1))
        i = 0
        while len(friends) > 1:
            i = (i + k - 1) % len(friends)
            friends.pop(i)
        return friends[0]
`)});
};
