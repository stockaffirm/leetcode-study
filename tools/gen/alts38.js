module.exports=({alt})=>{
const C=s=>s.replace(/^\n/,"").replace(/\n$/,"").split("\n");
// ---- Meta (5/8)
alt(3371,{name:"Try every pair of sum element and outlier",tag:"Brute force",time:"O(n²)",space:"O(1)",explain:"For every choice of two positions (sum, outlier) check that the remaining numbers add up to the sum element.",code:C(`
class Solution:
    def getLargestOutlier(self, nums):
        total = sum(nums)
        best = -inf
        for i in range(len(nums)):
            for j in range(len(nums)):
                if i != j and total - nums[i] - nums[j] == nums[i]:
                    best = max(best, nums[j])
        return best
`)});
alt(3527,{name:"Sort the pairs",tag:"Alternative",time:"O(n log n)",space:"O(n)",explain:"Sort responses by (−count, text) and take the first.",code:C(`
class Solution:
    def findCommonResponse(self, responses):
        cnt = Counter(r for day in responses for r in set(day))
        return sorted(cnt, key=lambda r: (-cnt[r], r))[0]
`)});
alt(3545,{name:"Remove letters one by one",tag:"Alternative",time:"O(n)",space:"O(1)",explain:"Repeatedly delete the letter with the fewest occurrences until at most k letters remain.",code:C(`
class Solution:
    def minDeletion(self, s, k):
        cnt = Counter(s)
        cost = 0
        while len(cnt) > k:
            rare = min(cnt, key=cnt.get)
            cost += cnt.pop(rare)
        return cost
`)});
alt(3477,{name:"Remove used baskets from a list",tag:"Alternative",time:"O(n²)",space:"O(n)",explain:"Keep the unused baskets in a list; each fruit takes the first big enough one.",code:C(`
class Solution:
    def numOfUnplacedFruits(self, fruits, baskets):
        rest = list(baskets)
        unplaced = 0
        for f in fruits:
            idx = next((i for i, b in enumerate(rest) if b >= f), None)
            if idx is None:
                unplaced += 1
            else:
                rest.pop(idx)
        return unplaced
`)});
alt(3688,{name:"reduce",tag:"Pythonic",time:"O(n)",space:"O(n)",explain:"Fold the even numbers with |.",code:C(`
class Solution:
    def evenNumberBitwiseORs(self, nums):
        return reduce(lambda a, b: a | b, [x for x in nums if x % 2 == 0], 0)
`)});
alt(3862,{name:"Check every index",tag:"Brute force",time:"O(n²)",space:"O(1)",explain:"For each index compute the left sum and the right product directly.",code:C(`
class Solution:
    def smallestBalancedIndex(self, nums):
        for i in range(len(nums)):
            if sum(nums[:i]) == prod(nums[i + 1:]):
                return i
        return -1
`)});
alt(3507,{name:"Recursion",tag:"Alternative",time:"O(n²)",space:"O(n²)",explain:"Return 0 if sorted, otherwise merge the cheapest pair and add one to the answer for the shorter array.",code:C(`
class Solution:
    def minimumPairRemoval(self, nums):
        if all(nums[i] <= nums[i + 1] for i in range(len(nums) - 1)):
            return 0
        sums = [nums[i] + nums[i + 1] for i in range(len(nums) - 1)]
        i = sums.index(min(sums))
        return 1 + self.minimumPairRemoval(nums[:i] + [sums[i]] + nums[i + 2:])
`)});
alt(3650,{name:"Bellman-Ford",tag:"Alternative",time:"O(n · E)",space:"O(n)",explain:"Relax every edge forward (cost w) and backward (cost 2w) until nothing improves.",code:C(`
class Solution:
    def minCost(self, n, edges):
        dist = [inf] * n
        dist[0] = 0
        for _ in range(n):
            changed = False
            for u, v, w in edges:
                if dist[u] + w < dist[v]:
                    dist[v] = dist[u] + w
                    changed = True
                if dist[v] + 2 * w < dist[u]:
                    dist[u] = dist[v] + 2 * w
                    changed = True
            if not changed:
                break
        return -1 if dist[n - 1] == inf else dist[n - 1]
`)});
alt(3829,{name:"Ordered dictionary of riders",tag:"Alternative",time:"O(1)",space:"O(n)",explain:"A dictionary keeps insertion order, so cancelling is a direct delete and the first key is the earliest rider.",code:C(`
class RideSharingSystem:
    def __init__(self):
        self.riders = {}
        self.drivers = deque()
    def addRider(self, riderId):
        self.riders[riderId] = True
    def addDriver(self, driverId):
        self.drivers.append(driverId)
    def matchDriverWithRider(self):
        if not self.riders or not self.drivers:
            return [-1, -1]
        rider = next(iter(self.riders))
        del self.riders[rider]
        return [self.drivers.popleft(), rider]
    def cancelRider(self, riderId):
        self.riders.pop(riderId, None)
`)});
alt(4025,{name:"Pick the best light for every car",tag:"Brute force",time:"O(n · m)",space:"O(1)",explain:"For each car try every light and take the smallest wait; the answer is the worst car.",code:C(`
class Solution:
    def minPenalty(self, period, lights, arrivalTime):
        return max(min(0 if t % period < L else period - t % period for L in lights) for t in arrivalTime)
`)});
alt(1522,{name:"Two BFS passes on the tree as a graph",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"Turn the tree into an undirected graph, find the farthest node from the root, then the farthest from that one.",code:C(`
class Solution:
    def diameter(self, root):
        g = defaultdict(list)
        stack = [root]
        while stack:
            n = stack.pop()
            for c in n.children:
                g[id(n)].append(id(c))
                g[id(c)].append(id(n))
                stack.append(c)
        def far(start):
            dist = {start: 0}
            q = deque([start])
            last = start
            while q:
                u = q.popleft()
                last = u
                for v in g[u]:
                    if v not in dist:
                        dist[v] = dist[u] + 1
                        q.append(v)
            return last, dist[last]
        a, _ = far(id(root))
        return far(a)[1]
`)});
alt(166,{name:"Remainders in a list",tag:"Alternative",time:"O(d²)",space:"O(d)",explain:"Same long division, but remember the remainders in a list and look up the first position of a repeated one.",code:C(`
class Solution:
    def fractionToDecimal(self, numerator, denominator):
        if numerator == 0:
            return "0"
        sign = "-" if (numerator < 0) != (denominator < 0) else ""
        n, d = abs(numerator), abs(denominator)
        whole, rem = divmod(n, d)
        if rem == 0:
            return sign + str(whole)
        digits, rems = [], []
        while rem and rem not in rems:
            rems.append(rem)
            rem *= 10
            digits.append(str(rem // d))
            rem %= d
        if rem == 0:
            return sign + str(whole) + "." + "".join(digits)
        i = rems.index(rem)
        return sign + str(whole) + "." + "".join(digits[:i]) + "(" + "".join(digits[i:]) + ")"
`)});
alt(1295,{name:"Use the number's size",tag:"Math",time:"O(n)",space:"O(1)",explain:"A number has an even digit count when floor(log10(x)) is odd.",code:C(`
class Solution:
    def findNumbers(self, nums):
        return sum(int(log10(x)) % 2 == 1 for x in nums)
`)});
alt(111,{name:"Recursion",tag:"Alternative",time:"O(n)",space:"O(h)",explain:"A node with one child must use that side; otherwise take the smaller depth.",code:C(`
class Solution:
    def minDepth(self, root):
        if not root:
            return 0
        if not root.left:
            return 1 + self.minDepth(root.right)
        if not root.right:
            return 1 + self.minDepth(root.left)
        return 1 + min(self.minDepth(root.left), self.minDepth(root.right))
`)});
alt(405,{name:"Built-in hex",tag:"Pythonic",time:"O(1)",space:"O(1)",explain:"Mask to 32 bits and let hex() do the work.",code:C(`
class Solution:
    def toHex(self, num):
        return hex(num & 0xFFFFFFFF)[2:]
`)});
alt(409,{name:"Toggle a set of unpaired letters",tag:"Alternative",time:"O(n)",space:"O(1)",explain:"A letter seen twice forms a pair; the unmatched letters stay in the set.",code:C(`
class Solution:
    def longestPalindrome(self, s):
        seen = set()
        pairs = 0
        for ch in s:
            if ch in seen:
                seen.remove(ch)
                pairs += 1
            else:
                seen.add(ch)
        return pairs * 2 + (1 if seen else 0)
`)});
alt(662,{name:"DFS with the first index per depth",tag:"Alternative",time:"O(n)",space:"O(h)",explain:"Remember the index of the first node seen at every depth and compare later ones against it.",code:C(`
class Solution:
    def widthOfBinaryTree(self, root):
        first = {}
        best = 0
        def dfs(node, depth, i):
            nonlocal best
            if not node:
                return
            first.setdefault(depth, i)
            best = max(best, i - first[depth] + 1)
            dfs(node.left, depth + 1, 2 * i)
            dfs(node.right, depth + 1, 2 * i + 1)
        dfs(root, 0, 0)
        return best
`)});
alt(745,{name:"Scan the words from the end",tag:"Brute force",time:"query O(n·L)",space:"O(n)",explain:"For each query go through the words from the last to the first and return the first match.",code:C(`
class WordFilter:
    def __init__(self, words):
        self.words = words
    def f(self, pref, suff):
        for i in range(len(self.words) - 1, -1, -1):
            w = self.words[i]
            if w.startswith(pref) and w.endswith(suff):
                return i
        return -1
`)});
alt(1043,{name:"Top-down memoization",tag:"Alternative",time:"O(n·k)",space:"O(n)",explain:"best(i) is the best sum for the numbers from position i on.",code:C(`
class Solution:
    def maxSumAfterPartitioning(self, arr, k):
        n = len(arr)
        @lru_cache(None)
        def best(i):
            if i == n:
                return 0
            res = mx = 0
            for j in range(i, min(n, i + k)):
                mx = max(mx, arr[j])
                res = max(res, mx * (j - i + 1) + best(j + 1))
            return res
        return best(0)
`)});
alt(1287,{name:"Count every number",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"Return the number whose count is above n / 4.",code:C(`
class Solution:
    def findSpecialInteger(self, arr):
        n = len(arr)
        for x, c in Counter(arr).items():
            if c * 4 > n:
                return x
`)});
alt(1382,{name:"Rebuild from slices",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"Build the tree from the sorted list with list slicing: middle value as root.",code:C(`
class Solution:
    def balanceBST(self, root):
        vals = []
        stack, cur = [], root
        while stack or cur:
            while cur:
                stack.append(cur)
                cur = cur.left
            cur = stack.pop()
            vals.append(cur.val)
            cur = cur.right
        def build(a):
            if not a:
                return None
            mid = len(a) // 2
            return TreeNode(a[mid], build(a[:mid]), build(a[mid + 1:]))
        return build(vals)
`)});
alt(1357,{name:"Keep the order of customers",tag:"Alternative",time:"O(items) per bill",space:"O(products)",explain:"Look the prices up in two parallel lists and use the customer number for the discount.",code:C(`
class Cashier:
    def __init__(self, n, discount, products, prices):
        self.n = n
        self.discount = discount
        self.products = products
        self.prices = prices
        self.customers = 0
    def getBill(self, product, amount):
        self.customers += 1
        total = 0
        for p, a in zip(product, amount):
            total += self.prices[self.products.index(p)] * a
        if self.customers % self.n == 0:
            total -= total * self.discount / 100
        return float(total)
`)});
alt(1358,{name:"Sliding window",tag:"Alternative",time:"O(n)",space:"O(1)",explain:"For each left end find the smallest right end that contains a, b and c; all later ends also work.",code:C(`
class Solution:
    def numberOfSubstrings(self, s):
        cnt = {"a": 0, "b": 0, "c": 0}
        res = left = 0
        for right, ch in enumerate(s):
            cnt[ch] += 1
            while all(cnt.values()):
                res += len(s) - right
                cnt[s[left]] -= 1
                left += 1
        return res
`)});
alt(1439,{name:"Best-first search with a heap",tag:"Alternative",time:"O(k · m log k)",space:"O(k · m)",explain:"Start with the first number of every row and repeatedly move one row's pointer forward, popping sums in increasing order.",code:C(`
class Solution:
    def kthSmallest(self, mat, k):
        m = len(mat)
        start = tuple([0] * m)
        s = sum(row[0] for row in mat)
        h = [(s, start)]
        seen = {start}
        for _ in range(k):
            s, idx = heappop(h)
            for r in range(m):
                if idx[r] + 1 < len(mat[r]):
                    nxt = idx[:r] + (idx[r] + 1,) + idx[r + 1:]
                    if nxt not in seen:
                        seen.add(nxt)
                        heappush(h, (s - mat[r][idx[r]] + mat[r][idx[r] + 1], nxt))
        return s
`)});
alt(1586,{name:"Lazy iterator with a stack",tag:"Alternative",time:"O(1) amortised",space:"O(h + n)",explain:"Walk the tree on demand with a stack and remember the visited values for prev().",code:C(`
class BSTIterator:
    def __init__(self, root):
        self.stack = []
        self.seen = []
        self.i = -1
        self._push(root)
    def _push(self, n):
        while n:
            self.stack.append(n)
            n = n.left
    def hasNext(self):
        return bool(self.stack) or self.i + 1 < len(self.seen)
    def next(self):
        self.i += 1
        if self.i == len(self.seen):
            n = self.stack.pop()
            self._push(n.right)
            self.seen.append(n.val)
        return self.seen[self.i]
    def hasPrev(self):
        return self.i > 0
    def prev(self):
        self.i -= 1
        return self.seen[self.i]
`)});
alt(1718,{name:"Backtracking over the set of unused numbers",tag:"Alternative",time:"O(n!)",space:"O(n)",explain:"Find the first empty slot and try the unused numbers from the biggest.",code:C(`
class Solution:
    def constructDistancedSequence(self, n):
        size = 2 * n - 1
        res = [0] * size
        def go(remaining):
            if not remaining:
                return True
            i = res.index(0)
            for v in sorted(remaining, reverse=True):
                j = i + v if v > 1 else i
                if j < size and (v == 1 or res[j] == 0):
                    res[i] = v
                    if v > 1:
                        res[j] = v
                    if go(remaining - {v}):
                        return True
                    res[i] = 0
                    if v > 1:
                        res[j] = 0
            return False
        go(set(range(1, n + 1)))
        return res
`)});
};
