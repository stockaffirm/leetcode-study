module.exports=({alt})=>{
const C=s=>s.replace(/^\n/,"").replace(/\n$/,"").split("\n");
// ---- Oracle
alt(3438,{name:"Count with str.count",tag:"Alternative",time:"O(n²)",space:"O(1)",explain:"Use s.count(digit) for each pair instead of a Counter.",code:C(`
class Solution:
    def findValidPair(self, s):
        for i in range(len(s) - 1):
            a, b = s[i], s[i + 1]
            if a != b and s.count(a) == int(a) and s.count(b) == int(b):
                return a + b
        return ""
`)});
alt(2836,{name:"Simulate k passes from every player",tag:"Brute force",time:"O(n·k)",space:"O(1)",explain:"Follow the receiver chain k times from each start (fine for small k).",code:C(`
class Solution:
    def getMaxFunctionValue(self, receiver, k):
        best = 0
        for x in range(len(receiver)):
            cur, s = x, x
            for _ in range(k):
                cur = receiver[cur]
                s += cur
            best = max(best, s)
        return best
`)});
alt(3799,{name:"Filter by matching corners",tag:"Alternative",time:"O(n⁴) worst",space:"O(1)",explain:"Pick top, then only left/right words with the right first letter, then bottom with the right corners.",code:C(`
class Solution:
    def wordSquares(self, words):
        res = []
        for top in words:
            for left in words:
                if left == top or left[0] != top[0]:
                    continue
                for right in words:
                    if right in (top, left) or right[0] != top[3]:
                        continue
                    for bottom in words:
                        if bottom in (top, left, right):
                            continue
                        if bottom[0] == left[3] and bottom[3] == right[3]:
                            res.append([top, left, right, bottom])
        return sorted(res)
`)});
alt(2466,{name:"Top-down recursion",tag:"Alternative",time:"O(high)",space:"O(high)",explain:"count(n) = number of strings that can still be extended from length n: it is good if low ≤ n ≤ high.",code:C(`
class Solution:
    def countGoodStrings(self, low, high, zero, one):
        MOD = 10**9 + 7
        @lru_cache(None)
        def go(n):
            if n > high:
                return 0
            return ((low <= n) + go(n + zero) + go(n + one)) % MOD
        return go(0)
`)});
alt(2580,{name:"Try every assignment",tag:"Brute force",time:"O(2ⁿ·n²)",space:"O(n)",explain:"Only for tiny inputs: assign each range to group 1 or 2 and keep assignments where overlapping ranges share a group.",code:C(`
class Solution:
    def countWays(self, ranges):
        n = len(ranges)
        res = 0
        for mask in range(1 << n):
            ok = True
            for i in range(n):
                for j in range(i + 1, n):
                    a, b = ranges[i], ranges[j]
                    if max(a[0], b[0]) <= min(a[1], b[1]) and (mask >> i & 1) != (mask >> j & 1):
                        ok = False
            res += ok
        return res % (10**9 + 7)
`)});
alt(2549,{name:"Simulate the days",tag:"Brute force",time:"O(n²)",space:"O(n)",explain:"For n days add every i with x % i == 1 for each x on the board.",code:C(`
class Solution:
    def distinctIntegers(self, n):
        board = {n}
        for _ in range(n):
            for x in list(board):
                for i in range(1, n + 1):
                    if x % i == 1:
                        board.add(i)
        return len(board)
`)});
alt(3012,{name:"Search all operation orders",tag:"Brute force",time:"exponential",space:"exponential",explain:"For tiny arrays try every pair operation with memoisation on the sorted multiset.",code:C(`
class Solution:
    def minimumArrayLength(self, nums):
        @lru_cache(None)
        def go(state):
            best = len(state)
            for i in range(len(state)):
                for j in range(len(state)):
                    if i != j and state[i] > 0 and state[j] > 0:
                        rest = [v for t, v in enumerate(state) if t != i and t != j]
                        rest.append(state[i] % state[j])
                        best = min(best, go(tuple(sorted(rest))))
            return best
        return go(tuple(sorted(nums)))
`)});
alt(3015,{name:"BFS from every house",tag:"Alternative",time:"O(n²)",space:"O(n)",explain:"Run a BFS on the graph (line plus shortcut) from each house and count the distances.",code:C(`
class Solution:
    def countOfPairs(self, n, x, y):
        g = [[] for _ in range(n + 1)]
        for i in range(1, n):
            g[i].append(i + 1)
            g[i + 1].append(i)
        g[x].append(y)
        g[y].append(x)
        res = [0] * n
        for s in range(1, n + 1):
            d = {s: 0}
            q = deque([s])
            while q:
                u = q.popleft()
                for v in g[u]:
                    if v not in d:
                        d[v] = d[u] + 1
                        q.append(v)
            for t, dist in d.items():
                if t != s:
                    res[dist - 1] += 1
        return res
`)});
alt(3017,{name:"Check every pair",tag:"Brute force",time:"O(n²)",space:"O(n)",explain:"Compute each pair's shortest distance directly (too slow for n = 100 000, a good reference).",code:C(`
class Solution:
    def countOfPairs(self, n, x, y):
        res = [0] * n
        for i in range(1, n + 1):
            for j in range(i + 1, n + 1):
                d = min(j - i, abs(x - i) + 1 + abs(y - j), abs(y - i) + 1 + abs(x - j))
                res[d - 1] += 2
        return res
`)});
alt(2192,{name:"DFS from each node over descendants",tag:"Alternative",time:"O(n·(n + e))",space:"O(n²)",explain:"For each node u in increasing order walk its descendants and append u to their ancestor lists (so lists come out sorted).",code:C(`
class Solution:
    def getAncestors(self, n, edges):
        g = [[] for _ in range(n)]
        for a, b in edges:
            g[a].append(b)
        anc = [[] for _ in range(n)]
        for u in range(n):
            seen = set()
            st = list(g[u])
            while st:
                v = st.pop()
                if v in seen:
                    continue
                seen.add(v)
                anc[v].append(u)
                st.extend(g[v])
        return anc
`)});
alt(1380,{name:"Set intersection",tag:"Alternative",time:"O(m·n)",space:"O(m + n)",explain:"The lucky numbers are the intersection of the set of row minima and the set of column maxima (all values are distinct).",code:C(`
class Solution:
    def luckyNumbers(self, matrix):
        return list({min(r) for r in matrix} & {max(c) for c in zip(*matrix)})
`)});
alt(1410,{name:"Scan with a lookup table",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"Walk the text; at each '&' try every entity at that position and copy its character, otherwise copy the letter.",code:C(`
class Solution:
    def entityParser(self, text):
        table = {"&quot;": '"', "&apos;": "'", "&amp;": "&", "&gt;": ">", "&lt;": "<", "&frasl;": "/"}
        res = []
        i = 0
        while i < len(text):
            for ent, ch in table.items():
                if text.startswith(ent, i):
                    res.append(ch)
                    i += len(ent)
                    break
            else:
                res.append(text[i])
                i += 1
        return ''.join(res)
`)});
alt(697,{name:"Positions per value",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"Store every value's list of positions; the degree is the longest list.",code:C(`
class Solution:
    def findShortestSubArray(self, nums):
        pos = defaultdict(list)
        for i, x in enumerate(nums):
            pos[x].append(i)
        deg = max(len(p) for p in pos.values())
        return min(p[-1] - p[0] + 1 for p in pos.values() if len(p) == deg)
`)});
alt(845,{name:"Up and down run lengths",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"up[i] = length of the rising run ending at i, down[i] = length of the falling run starting at i; a peak with both > 0 gives a mountain.",code:C(`
class Solution:
    def longestMountain(self, arr):
        n = len(arr)
        up = [0] * n
        down = [0] * n
        for i in range(1, n):
            if arr[i] > arr[i - 1]:
                up[i] = up[i - 1] + 1
        for i in range(n - 2, -1, -1):
            if arr[i] > arr[i + 1]:
                down[i] = down[i + 1] + 1
        return max([up[i] + down[i] + 1 for i in range(n) if up[i] and down[i]], default=0)
`)});
alt(1290,{name:"Collect the bits",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"Read the bits into a string and let int(…, 2) do the conversion.",code:C(`
class Solution:
    def getDecimalValue(self, head):
        bits = []
        while head:
            bits.append(str(head.val))
            head = head.next
        return int(''.join(bits), 2)
`)});
alt(2448,{name:"Binary search on the target",tag:"Alternative",time:"O(n log max)",space:"O(1)",explain:"The total cost is convex in the target value; binary search where it stops decreasing.",code:C(`
class Solution:
    def minCost(self, nums, cost):
        def f(t):
            return sum(c * abs(v - t) for v, c in zip(nums, cost))
        lo, hi = min(nums), max(nums)
        while lo < hi:
            mid = (lo + hi) // 2
            if f(mid) <= f(mid + 1):
                hi = mid
            else:
                lo = mid + 1
        return f(lo)
`)});
alt(403,{name:"DFS with memo on (stone, jump)",tag:"Alternative",time:"O(n²)",space:"O(n²)",explain:"From stone s having arrived with jump k try k−1, k, k+1.",code:C(`
class Solution:
    def canCross(self, stones):
        pos = set(stones)
        last = stones[-1]
        @lru_cache(None)
        def go(s, k):
            if s == last:
                return True
            for step in (k - 1, k, k + 1):
                if step > 0 and s + step in pos and go(s + step, step):
                    return True
            return False
        return go(0, 0)
`)});
alt(1254,{name:"DFS tracking the border",tag:"Alternative",time:"O(m·n)",space:"O(m·n)",explain:"Flood each land region and remember whether it ever touched the border.",code:C(`
class Solution:
    def closedIsland(self, grid):
        m, n = len(grid), len(grid[0])
        seen = set()
        res = 0
        for i in range(m):
            for j in range(n):
                if grid[i][j] == 0 and (i, j) not in seen:
                    closed = True
                    st = [(i, j)]
                    seen.add((i, j))
                    while st:
                        a, b = st.pop()
                        if a in (0, m - 1) or b in (0, n - 1):
                            closed = False
                        for x, y in ((a + 1, b), (a - 1, b), (a, b + 1), (a, b - 1)):
                            if 0 <= x < m and 0 <= y < n and grid[x][y] == 0 and (x, y) not in seen:
                                seen.add((x, y))
                                st.append((x, y))
                    res += closed
        return res
`)});
alt(582,{name:"Recursive DFS",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"Same child map, collected depth first.",code:C(`
class Solution:
    def killProcess(self, pid, ppid, kill):
        kids = defaultdict(list)
        for p, par in zip(pid, ppid):
            kids[par].append(p)
        res = []
        def dfs(u):
            res.append(u)
            for v in kids[u]:
                dfs(v)
        dfs(kill)
        return res
`)});
alt(1079,{name:"Set of all permutations",tag:"Brute force",time:"O(n!·n)",space:"O(n!)",explain:"Collect every distinct arrangement of every length in a set.",code:C(`
class Solution:
    def numTilePossibilities(self, tiles):
        seen = set()
        for r in range(1, len(tiles) + 1):
            for p in permutations(tiles, r):
                seen.add(p)
        return len(seen)
`)});
alt(321,{name:"Pick with window maxima",tag:"Alternative",time:"O(k·(m + n + k²))",space:"O(k)",explain:"Choose the best t digits by repeatedly taking the leftmost maximum in the window that still leaves enough digits.",code:C(`
class Solution:
    def maxNumber(self, nums1, nums2, k):
        def pick(nums, t):
            res = []
            start = 0
            for j in range(t):
                end = len(nums) - (t - j)
                best = start
                for i in range(start, end + 1):
                    if nums[i] > nums[best]:
                        best = i
                res.append(nums[best])
                start = best + 1
            return res
        def merge(a, b):
            res = []
            i = j = 0
            while i < len(a) or j < len(b):
                if a[i:] > b[j:]:
                    res.append(a[i])
                    i += 1
                else:
                    res.append(b[j])
                    j += 1
            return res
        best = []
        for i in range(max(0, k - len(nums2)), min(k, len(nums1)) + 1):
            best = max(best, merge(pick(nums1, i), pick(nums2, k - i)))
        return best
`)});
alt(1824,{name:"Full DP table",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"dp[i][lane] kept for every position; at each position first stay in the lane, then allow one jump from another free lane.",code:C(`
class Solution:
    def minSideJumps(self, obstacles):
        INF = float('inf')
        n = len(obstacles)
        dp = [[INF] * 3 for _ in range(n)]
        dp[0] = [1, 0, 1]
        for i in range(1, n):
            stay = [dp[i - 1][l] if obstacles[i] != l + 1 else INF for l in range(3)]
            for l in range(3):
                if obstacles[i] == l + 1:
                    continue
                best = stay[l]
                for o in range(3):
                    if o != l and obstacles[i] != o + 1:
                        best = min(best, stay[o] + 1)
                dp[i][l] = best
        return min(dp[-1])
`)});
alt(2439,{name:"Binary search the answer",tag:"Alternative",time:"O(n log max)",space:"O(1)",explain:"Guess the maximum m and push the excess of each element leftwards; m works if nothing is left over at the front.",code:C(`
class Solution:
    def minimizeArrayValue(self, nums):
        def ok(m):
            carry = 0
            for x in reversed(nums[1:]):
                carry = max(0, x + carry - m)
            return nums[0] + carry <= m
        lo, hi = 0, max(nums)
        while lo < hi:
            mid = (lo + hi) // 2
            if ok(mid):
                hi = mid
            else:
                lo = mid + 1
        return lo
`)});
alt(259,{name:"Check every triple",tag:"Brute force",time:"O(n³)",space:"O(1)",explain:"Try all index triples i < j < k.",code:C(`
class Solution:
    def threeSumSmaller(self, nums, target):
        n = len(nums)
        return sum(nums[i] + nums[j] + nums[k] < target for i in range(n) for j in range(i + 1, n) for k in range(j + 1, n))
`)});
alt(2181,{name:"Collect sums, then build the list",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"First gather the block sums in a Python list, then create the nodes.",code:C(`
class Solution:
    def mergeNodes(self, head):
        sums = []
        total = 0
        cur = head.next
        while cur:
            if cur.val == 0:
                sums.append(total)
                total = 0
            else:
                total += cur.val
            cur = cur.next
        dummy = tail = ListNode()
        for s in sums:
            tail.next = ListNode(s)
            tail = tail.next
        return dummy.next
`)});
alt(1312,{name:"Interval DP on the string itself",tag:"Alternative",time:"O(n²)",space:"O(n²)",explain:"dp[i][j] = insertions to make s[i..j] a palindrome: free if the ends match, otherwise 1 + the cheaper of dropping either end.",code:C(`
class Solution:
    def minInsertions(self, s):
        n = len(s)
        dp = [[0] * n for _ in range(n)]
        for i in range(n - 2, -1, -1):
            for j in range(i + 1, n):
                if s[i] == s[j]:
                    dp[i][j] = dp[i + 1][j - 1]
                else:
                    dp[i][j] = 1 + min(dp[i + 1][j], dp[i][j - 1])
        return dp[0][n - 1]
`)});
alt(2047,{name:"Count characters",tag:"Alternative",time:"O(n)",space:"O(1)",explain:"Use str.count and positions instead of a per-character loop.",code:C(`
class Solution:
    def countValidWords(self, sentence):
        res = 0
        for w in sentence.split():
            if any(c.isdigit() for c in w):
                continue
            if sum(c in '!.,' for c in w) > 1 or (any(c in '!.,' for c in w) and w[-1] not in '!.,'):
                continue
            if w.count('-') > 1:
                continue
            if '-' in w:
                i = w.index('-')
                if i == 0 or i == len(w) - 1 or not (w[i - 1].isalpha() and w[i + 1].isalpha()):
                    continue
            res += 1
        return res
`)});
alt(1526,{name:"Divide and conquer on the minimum",tag:"Alternative",time:"O(n²)",space:"O(n)",explain:"Lift the whole segment to its minimum with min − base operations, then solve the pieces between the minimum positions.",code:C(`
class Solution:
    def minNumberOperations(self, target):
        def go(l, r, base):
            if l > r:
                return 0
            m = min(target[l:r + 1])
            res = m - base
            i = l
            for j in range(l, r + 2):
                if j > r or target[j] == m:
                    res += go(i, j - 1, m)
                    i = j + 1
            return res
        return go(0, len(target) - 1, 0)
`)});
alt(445,{name:"Convert to integers",tag:"Alternative",time:"O(n + m)",space:"O(n + m)",explain:"Python integers have no size limit: read each list as a number, add, and write the digits back as a list.",code:C(`
class Solution:
    def addTwoNumbers(self, l1, l2):
        def num(h):
            s = ''
            while h:
                s += str(h.val)
                h = h.next
            return int(s)
        total = str(num(l1) + num(l2))
        dummy = tail = ListNode()
        for ch in total:
            tail.next = ListNode(int(ch))
            tail = tail.next
        return dummy.next
`)});
alt(1095,{name:"Scan every index",tag:"Brute force",time:"O(n)",space:"O(1)",explain:"Call get on every index from the left (breaks the call limit on LeetCode but is a good reference).",code:C(`
class Solution:
    def findInMountainArray(self, target, mountain_arr):
        for i in range(mountain_arr.length()):
            if mountain_arr.get(i) == target:
                return i
        return -1
`)});
alt(260,{name:"Count occurrences",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"The two numbers that appear once.",code:C(`
class Solution:
    def singleNumber(self, nums):
        cnt = Counter(nums)
        return [v for v, c in cnt.items() if c == 1]
`)});
alt(107,{name:"DFS filling levels",tag:"Alternative",time:"O(n)",space:"O(h)",explain:"Recurse with the depth and append each value to its level list; reverse at the end.",code:C(`
class Solution:
    def levelOrderBottom(self, root):
        levels = []
        def dfs(node, d):
            if not node:
                return
            if d == len(levels):
                levels.append([])
            levels[d].append(node.val)
            dfs(node.left, d + 1)
            dfs(node.right, d + 1)
        dfs(root, 0)
        return levels[::-1]
`)});
alt(3680,{name:"Same greedy over a sorted pool",tag:"Alternative",time:"O(n⁴)",space:"O(n²)",explain:"Keep the unplayed matches in a sorted list and pick the allowed one with the largest total of remaining matches.",code:C(`
class Solution:
    def generateSchedule(self, n):
        if n < 5:
            return []
        pool = sorted((i, j) for i in range(n) for j in range(n) if i != j)
        left = {t: 2 * (n - 1) for t in range(n)}
        res = []
        prev = ()
        while pool:
            ok = [m for m in pool if m[0] not in prev and m[1] not in prev]
            a, b = max(ok, key=lambda m: (left[m[0]] + left[m[1]], -m[0], -m[1]))
            pool.remove((a, b))
            left[a] -= 1
            left[b] -= 1
            res.append([a, b])
            prev = (a, b)
        return res
`)});
};
