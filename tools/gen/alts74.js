module.exports=({alt})=>{
const C=s=>s.replace(/^\n/,"").replace(/\n$/,"").split("\n");
// ---- Microsoft (5)
alt(1855,{name:"Binary search per index",tag:"Alternative",time:"O(n log m)",space:"O(1)",explain:"For each i find the farthest j with nums2[j] ≥ nums1[i] (nums2 is non-increasing).",code:C(`
class Solution:
    def maxDistance(self, nums1, nums2):
        best = 0
        for i, x in enumerate(nums1):
            lo, hi = i, len(nums2) - 1
            far = -1
            while lo <= hi:
                mid = (lo + hi) // 2
                if nums2[mid] >= x:
                    far = mid
                    lo = mid + 1
                else:
                    hi = mid - 1
            if far >= i:
                best = max(best, far - i)
        return best
`)});
alt(937,{name:"Sort with a combined key",tag:"Alternative",time:"O(n log n)",space:"O(n)",explain:"One stable sort whose key puts letter logs first.",code:C(`
class Solution:
    def reorderLogFiles(self, logs):
        def key(log):
            ident, rest = log.split(' ', 1)
            return (0, rest, ident) if not rest[0].isdigit() else (1,)
        return sorted(logs, key=key)
`)});
alt(2784,{name:"Counter check",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"Compare the counts with the expected ones.",code:C(`
class Solution:
    def isGood(self, nums):
        n = max(nums)
        cnt = Counter(nums)
        return len(nums) == n + 1 and cnt[n] == 2 and all(cnt[v] == 1 for v in range(1, n))
`)});
alt(1313,{name:"Index loop with extend",tag:"Alternative",time:"O(output)",space:"O(output)",explain:"Step through the pairs by index.",code:C(`
class Solution:
    def decompressRLElist(self, nums):
        res = []
        for i in range(0, len(nums), 2):
            res.extend([nums[i + 1]] * nums[i])
        return res
`)});
alt(3946,{name:"Brute force over purchase counts",tag:"Brute force",time:"exponential",space:"O(n)",explain:"Try every number of copies of every item within the budget (tiny inputs).",code:C(`
class Solution:
    def maximumSaleItems(self, items, budget):
        n = len(items)
        best = 0
        def go(i, left, count, bought):
            nonlocal best
            if i == n:
                free = 0
                for a in range(n):
                    if bought[a]:
                        free += sum(1 for j in range(n) if j != a and items[j][0] % items[a][0] == 0)
                best = max(best, count + free)
                return
            c = 0
            while c * items[i][1] <= left:
                go(i + 1, left - c * items[i][1], count + c, bought + [c > 0])
                c += 1
        go(0, budget, 0, [])
        return best
`)});
alt(3509,{name:"Brute force over subsequences",tag:"Brute force",time:"O(2ⁿ·n)",space:"O(n)",explain:"Enumerate every non-empty subsequence (tiny inputs).",code:C(`
class Solution:
    def maxProduct(self, nums, k, limit):
        best = -1
        n = len(nums)
        for r in range(1, n + 1):
            for idx in combinations(range(n), r):
                s = sum(nums[i] * (1 if t % 2 == 0 else -1) for t, i in enumerate(idx))
                p = 1
                for i in idx:
                    p *= nums[i]
                if s == k and p <= limit:
                    best = max(best, p)
        return best
`)});
alt(2940,{name:"Brute force per query",tag:"Brute force",time:"O(q·n)",space:"O(1)",explain:"Scan to the right for the first building tall enough.",code:C(`
class Solution:
    def leftmostBuildingQueries(self, heights, queries):
        res = []
        for a, b in queries:
            if a > b:
                a, b = b, a
            if a == b or heights[a] < heights[b]:
                res.append(b)
                continue
            need = max(heights[a], heights[b])
            ans = -1
            for c in range(b + 1, len(heights)):
                if heights[c] > need:
                    ans = c
                    break
            res.append(ans)
        return res
`)});
alt(3691,{name:"List all subarray values",tag:"Brute force",time:"O(n³ log n)",space:"O(n²)",explain:"Compute every subarray value, sort, add the k largest.",code:C(`
class Solution:
    def maxTotalValue(self, nums, k):
        vals = sorted((max(nums[l:r + 1]) - min(nums[l:r + 1]) for l in range(len(nums)) for r in range(l, len(nums))), reverse=True)
        return sum(vals[:k])
`)});
alt(2080,{name:"Brute force scan",tag:"Brute force",time:"O(n) per query",space:"O(n)",explain:"Count the value inside the range directly.",code:C(`
class RangeFreqQuery:
    def __init__(self, arr):
        self.arr = arr

    def query(self, left, right, value):
        return self.arr[left:right + 1].count(value)
`)});
alt(1796,{name:"Track the top two",tag:"Alternative",time:"O(n)",space:"O(1)",explain:"Keep the largest and second largest distinct digits.",code:C(`
class Solution:
    def secondHighest(self, s):
        first = second = -1
        for c in s:
            if c.isdigit():
                d = int(c)
                if d > first:
                    first, second = d, first
                elif first > d > second:
                    second = d
        return second
`)});
alt(3668,{name:"Position map",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"Sort the friends by finishing position.",code:C(`
class Solution:
    def recoverOrder(self, order, friends):
        where = {x: i for i, x in enumerate(order)}
        return sorted(friends, key=lambda f: where[f])
`)});
alt(1036,{name:"Coordinate compression BFS (Breadth-First Search)",tag:"Alternative",time:"O(B²)",space:"O(B²)",explain:"Compress the grid to the coordinates near the blocked cells and BFS (Breadth-First Search) on that smaller grid.",code:C(`
class Solution:
    def isEscapePossible(self, blocked, source, target):
        N = 10**6
        wall = {tuple(b) for b in blocked}
        xs, ys = {0, N - 1}, {0, N - 1}
        for x, y in list(wall) + [tuple(source), tuple(target)]:
            for d in (-1, 0, 1):
                xs.add(x + d)
                ys.add(y + d)
        xs = sorted(v for v in xs if 0 <= v < N)
        ys = sorted(v for v in ys if 0 <= v < N)
        xi = {v: i for i, v in enumerate(xs)}
        yi = {v: i for i, v in enumerate(ys)}
        blocked_c = {(xi[x], yi[y]) for x, y in wall if x in xi and y in yi}
        start = (xi[source[0]], yi[source[1]])
        goal = (xi[target[0]], yi[target[1]])
        seen = {start}
        q = deque([start])
        while q:
            cur = q.popleft()
            if cur == goal:
                return True
            for a, b in ((cur[0] + 1, cur[1]), (cur[0] - 1, cur[1]), (cur[0], cur[1] + 1), (cur[0], cur[1] - 1)):
                if 0 <= a < len(xs) and 0 <= b < len(ys) and (a, b) not in blocked_c and (a, b) not in seen:
                    seen.add((a, b))
                    q.append((a, b))
        return False
`)});
alt(3739,{name:"Count every subarray",tag:"Brute force",time:"O(n²)",space:"O(1)",explain:"Count the target in each subarray.",code:C(`
class Solution:
    def countMajoritySubarrays(self, nums, target):
        n = len(nums)
        return sum(1 for i in range(n) for j in range(i, n) if 2 * nums[i:j + 1].count(target) > j - i + 1)
`)});
alt(2652,{name:"Loop over 1…n",tag:"Brute force",time:"O(n)",space:"O(1)",explain:"Add every number divisible by 3, 5 or 7.",code:C(`
class Solution:
    def sumOfMultiples(self, n):
        return sum(x for x in range(1, n + 1) if x % 3 == 0 or x % 5 == 0 or x % 7 == 0)
`)});
alt(2063,{name:"Count every substring",tag:"Brute force",time:"O(n³)",space:"O(1)",explain:"Count vowels in all substrings directly.",code:C(`
class Solution:
    def countVowels(self, word):
        n = len(word)
        return sum(sum(1 for c in word[i:j + 1] if c in 'aeiou') for i in range(n) for j in range(i, n))
`)});
alt(3969,{name:"Prefix sums",tag:"Alternative",time:"O(n²)",space:"O(n)",explain:"Use prefix sums for the subarray totals.",code:C(`
class Solution:
    def countValidSubarrays(self, nums, x):
        pref = [0]
        for v in nums:
            pref.append(pref[-1] + v)
        digit = str(x)
        n = len(nums)
        return sum(1 for i in range(n) for j in range(i + 1, n + 1)
                   if str(pref[j] - pref[i])[0] == digit and str(pref[j] - pref[i])[-1] == digit)
`)});
alt(2760,{name:"Longest run with a state machine",tag:"Alternative",time:"O(n)",space:"O(1)",explain:"Single pass tracking the current valid length.",code:C(`
class Solution:
    def longestAlternatingSubarray(self, nums, threshold):
        best = cur = 0
        for i, x in enumerate(nums):
            if x > threshold:
                cur = 0
            elif cur and x % 2 != nums[i - 1] % 2:
                cur += 1
            elif x % 2 == 0:
                cur = 1
            else:
                cur = 0
            best = max(best, cur)
        return best
`)});
alt(726,{name:"Recursive descent",tag:"Alternative",time:"O(n²)",space:"O(n)",explain:"Parse groups recursively.",code:C(`
class Solution:
    def countOfAtoms(self, formula):
        i = 0
        n = len(formula)
        def number():
            nonlocal i
            j = i
            while j < n and formula[j].isdigit():
                j += 1
            val = int(formula[i:j]) if j > i else 1
            i = j
            return val
        def parse():
            nonlocal i
            counts = defaultdict(int)
            while i < n and formula[i] != ')':
                if formula[i] == '(':
                    i += 1
                    inner = parse()
                    i += 1
                    mult = number()
                    for name, c in inner.items():
                        counts[name] += c * mult
                else:
                    j = i + 1
                    while j < n and formula[j].islower():
                        j += 1
                    name = formula[i:j]
                    i = j
                    counts[name] += number()
            return counts
        result = parse()
        return ''.join(name + (str(c) if c > 1 else '') for name, c in sorted(result.items()))
`)});
alt(978,{name:"Brute force over subarrays",tag:"Brute force",time:"O(n²)",space:"O(1)",explain:"Extend each start while the signs alternate.",code:C(`
class Solution:
    def maxTurbulenceSize(self, arr):
        best = 1
        n = len(arr)
        for i in range(n):
            j = i
            while j + 1 < n and arr[j] != arr[j + 1] and (j == i or (arr[j] - arr[j - 1] > 0) != (arr[j + 1] - arr[j] > 0)):
                j += 1
            best = max(best, j - i + 1)
        return best
`)});
alt(1311,{name:"Layer by layer with sets",tag:"Alternative",time:"O(n + e)",space:"O(n)",explain:"Build the next layer as a set difference.",code:C(`
class Solution:
    def watchedVideosByFriends(self, watchedVideos, friends, id, level):
        seen = {id}
        layer = {id}
        for _ in range(level):
            layer = {v for u in layer for v in friends[u]} - seen
            seen |= layer
        cnt = Counter(v for u in layer for v in watchedVideos[u])
        return [v for _, v in sorted((c, v) for v, c in cnt.items())]
`)});
alt(2670,{name:"Brute force with slices",tag:"Brute force",time:"O(n²)",space:"O(n)",explain:"Compute both distinct counts per index with set().",code:C(`
class Solution:
    def distinctDifferenceArray(self, nums):
        return [len(set(nums[:i + 1])) - len(set(nums[i + 1:])) for i in range(len(nums))]
`)});
alt(3513,{name:"Brute force over triplets",tag:"Brute force",time:"O(n³)",space:"O(n)",explain:"XOR (exclusive OR) every i ≤ j ≤ k.",code:C(`
class Solution:
    def uniqueXorTriplets(self, nums):
        seen = set()
        n = len(nums)
        for i in range(n):
            for j in range(i, n):
                for k in range(j, n):
                    seen.add(nums[i] ^ nums[j] ^ nums[k])
        return len(seen)
`)});
alt(3614,{name:"Build the string",tag:"Brute force",time:"O(result length)",space:"O(result length)",explain:"Apply the operations literally (short strings only).",code:C(`
class Solution:
    def processStr(self, s, k):
        result = ''
        for c in s:
            if c == '*':
                result = result[:-1]
            elif c == '#':
                result = result + result
            elif c == '%':
                result = result[::-1]
            else:
                result += c
        return result[k] if k < len(result) else '.'
`)});
alt(2381,{name:"Prefix sums per query",tag:"Brute force",time:"O(n·q)",space:"O(n)",explain:"Apply every shift to its range directly.",code:C(`
class Solution:
    def shiftingLetters(self, s, shifts):
        move = [0] * len(s)
        for l, r, d in shifts:
            for i in range(l, r + 1):
                move[i] += 1 if d else -1
        return ''.join(chr((ord(c) - 97 + m) % 26 + 97) for c, m in zip(s, move))
`)});
alt(1561,{name:"Two pointers on the sorted piles",tag:"Alternative",time:"O(n log n)",space:"O(1)",explain:"Pointers at the largest pair and the smallest pile.",code:C(`
class Solution:
    def maxCoins(self, piles):
        piles.sort()
        lo, hi = 0, len(piles) - 1
        total = 0
        while lo < hi:
            total += piles[hi - 1]
            hi -= 2
            lo += 1
        return total
`)});
alt(491,{name:"Build with a set of tuples",tag:"Alternative",time:"O(2ⁿ·n)",space:"O(2ⁿ·n)",explain:"Extend each known subsequence with the next number.",code:C(`
class Solution:
    def findSubsequences(self, nums):
        seqs = set()
        for x in nums:
            for s in list(seqs):
                if s[-1] <= x:
                    seqs.add(s + (x,))
            seqs.add((x,))
        return sorted([list(s) for s in seqs if len(s) >= 2])
`)});
alt(3129,{name:"Enumerate all arrays",tag:"Brute force",time:"O(C(z + o, o)·n)",space:"O(n)",explain:"Place the ones in every possible way and check the runs.",code:C(`
class Solution:
    def numberOfStableArrays(self, zero, one, limit):
        n = zero + one
        count = 0
        for pos in combinations(range(n), one):
            a = [0] * n
            for i in pos:
                a[i] = 1
            if all(len(set(a[i:i + limit + 1])) > 1 for i in range(n - limit)):
                count += 1
        return count % (10**9 + 7)
`)});
alt(1140,{name:"Bottom-up dp",tag:"Alternative",time:"O(n³)",space:"O(n²)",explain:"Fill dp[i][M] from the end.",code:C(`
class Solution:
    def stoneGameII(self, piles):
        n = len(piles)
        suffix = [0] * (n + 1)
        for i in range(n - 1, -1, -1):
            suffix[i] = suffix[i + 1] + piles[i]
        dp = [[0] * (n + 1) for _ in range(n + 2)]
        for i in range(n - 1, -1, -1):
            for M in range(1, n + 1):
                if i + 2 * M >= n:
                    dp[i][M] = suffix[i]
                else:
                    dp[i][M] = max(suffix[i] - dp[i + x][max(M, x)] for x in range(1, 2 * M + 1))
        return dp[0][1]
`)});
alt(2386,{name:"List every subsequence sum",tag:"Brute force",time:"O(2ⁿ log)",space:"O(2ⁿ)",explain:"Enumerate all sums and sort them.",code:C(`
class Solution:
    def kSum(self, nums, k):
        sums = [0]
        for x in nums:
            sums += [s + x for s in sums]
        sums.sort(reverse=True)
        return sums[k - 1]
`)});
alt(2587,{name:"Cumulative sums with accumulate",tag:"Alternative",time:"O(n log n)",space:"O(n)",explain:"Count the positive prefix sums of the sorted array.",code:C(`
class Solution:
    def maxScore(self, nums):
        return sum(1 for s in accumulate(sorted(nums, reverse=True)) if s > 0)
`)});
alt(3875,{name:"Brute force over choices",tag:"Brute force",time:"O(nⁿ)",space:"O(n)",explain:"Try every way to build nums2 (tiny inputs).",code:C(`
class Solution:
    def uniformArray(self, nums1):
        n = len(nums1)
        options = []
        for i in range(n):
            opts = [nums1[i]] + [nums1[i] - nums1[j] for j in range(n) if j != i]
            options.append(opts)
        for combo in product(*options):
            if all(v % 2 == 0 for v in combo) or all(v % 2 for v in combo):
                return True
        return False
`)});
alt(406,{name:"Place people into free slots",tag:"Alternative",time:"O(n²)",space:"O(n)",explain:"Shortest first: person [h, k] goes into the (k+1)-th free slot.",code:C(`
class Solution:
    def reconstructQueue(self, people):
        n = len(people)
        res = [None] * n
        for h, k in sorted(people, key=lambda p: (p[0], -p[1])):
            free = k
            for i in range(n):
                if res[i] is None:
                    if free == 0:
                        res[i] = [h, k]
                        break
                    free -= 1
        return res
`)});
alt(3849,{name:"Try every rearrangement",tag:"Brute force",time:"O(n!)",space:"O(n)",explain:"Maximise the XOR (exclusive OR) over all permutations of t (tiny inputs).",code:C(`
class Solution:
    def maximumXor(self, s, t):
        best = ''
        for perm in set(permutations(t)):
            x = ''.join('1' if a != b else '0' for a, b in zip(s, perm))
            best = max(best, x)
        return best
`)});
alt(2164,{name:"Pick by index parity",tag:"Alternative",time:"O(n log n)",space:"O(n)",explain:"Sort the two classes with explicit lists.",code:C(`
class Solution:
    def sortEvenOdd(self, nums):
        even = sorted(x for i, x in enumerate(nums) if i % 2 == 0)
        odd = sorted((x for i, x in enumerate(nums) if i % 2 == 1), reverse=True)
        return [even[i // 2] if i % 2 == 0 else odd[i // 2] for i in range(len(nums))]
`)});
alt(782,{name:"Search over swap sequences",tag:"Brute force",time:"exponential",space:"O(states)",explain:"Breadth-first search over boards reachable by swapping rows or columns (tiny boards).",code:C(`
class Solution:
    def movesToChessboard(self, board):
        n = len(board)
        def ok(b):
            return all(b[i][j] != b[i][j + 1] for i in range(n) for j in range(n - 1)) and \\
                all(b[i][j] != b[i + 1][j] for i in range(n - 1) for j in range(n))
        start = tuple(tuple(r) for r in board)
        dist = {start: 0}
        q = deque([start])
        while q:
            cur = q.popleft()
            if ok(cur):
                return dist[cur]
            moves = []
            for a in range(n):
                for b in range(a + 1, n):
                    rows = list(cur)
                    rows[a], rows[b] = rows[b], rows[a]
                    moves.append(tuple(rows))
                    cols = [list(r) for r in cur]
                    for r in cols:
                        r[a], r[b] = r[b], r[a]
                    moves.append(tuple(tuple(r) for r in cols))
            for nxt in moves:
                if nxt not in dist:
                    dist[nxt] = dist[cur] + 1
                    q.append(nxt)
        return -1
`)});
alt(655,{name:"Level by level with BFS (Breadth-First Search)",tag:"Alternative",time:"O(2^h)",space:"O(2^h)",explain:"Place the nodes level by level using column ranges.",code:C(`
class Solution:
    def printTree(self, root):
        h = 0
        level = [root]
        while True:
            level = [c for node in level for c in (node.left, node.right) if c]
            if not level:
                break
            h += 1
        cols = 2 ** (h + 1) - 1
        res = [[""] * cols for _ in range(h + 1)]
        q = deque([(root, 0, 0, cols - 1)])
        while q:
            node, r, lo, hi = q.popleft()
            mid = (lo + hi) // 2
            res[r][mid] = str(node.val)
            if node.left:
                q.append((node.left, r + 1, lo, mid - 1))
            if node.right:
                q.append((node.right, r + 1, mid + 1, hi))
        return res
`)});
alt(1492,{name:"Collect all factors with a square-root loop",tag:"Alternative",time:"O(√n)",space:"O(√n)",explain:"Find factors in pairs and sort them.",code:C(`
class Solution:
    def kthFactor(self, n, k):
        factors = set()
        d = 1
        while d * d <= n:
            if n % d == 0:
                factors.add(d)
                factors.add(n // d)
            d += 1
        factors = sorted(factors)
        return factors[k - 1] if k <= len(factors) else -1
`)});
};
