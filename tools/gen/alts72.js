module.exports=({alt})=>{
const C=s=>s.replace(/^\n/,"").replace(/\n$/,"").split("\n");
// ---- Microsoft (3)
alt(2220,{name:"Compare bit by bit",tag:"Alternative",time:"O(log n)",space:"O(1)",explain:"Loop over the bit positions.",code:C(`
class Solution:
    def minBitFlips(self, start, goal):
        flips = 0
        while start or goal:
            if (start & 1) != (goal & 1):
                flips += 1
            start >>= 1
            goal >>= 1
        return flips
`)});
alt(2816,{name:"Convert to an integer and back",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"Read the number, double it, rebuild the list.",code:C(`
class Solution:
    def doubleIt(self, head):
        digits = ''
        node = head
        while node:
            digits += str(node.val)
            node = node.next
        doubled = str(int(digits) * 2)
        dummy = ListNode()
        tail = dummy
        for c in doubled:
            tail.next = ListNode(int(c))
            tail = tail.next
        return dummy.next
`)});
alt(2942,{name:"Filter with find",tag:"Alternative",time:"O(total length)",space:"O(n)",explain:"Use str.find in a loop.",code:C(`
class Solution:
    def findWordsContaining(self, words, x):
        res = []
        for i in range(len(words)):
            if words[i].find(x) != -1:
                res.append(i)
        return res
`)});
alt(847,{name:"DP over (mask, node) with repeated relaxation",tag:"Alternative",time:"O(2ⁿ·n²)",space:"O(2ⁿ·n)",explain:"Bellman-style relaxation over the states until nothing improves.",code:C(`
class Solution:
    def shortestPathLength(self, graph):
        n = len(graph)
        INF = float('inf')
        dist = [[INF] * n for _ in range(1 << n)]
        q = deque()
        for i in range(n):
            dist[1 << i][i] = 0
            q.append((1 << i, i))
        while q:
            mask, u = q.popleft()
            for v in graph[u]:
                nm = mask | 1 << v
                if dist[nm][v] == INF:
                    dist[nm][v] = dist[mask][u] + 1
                    q.append((nm, v))
        return min(dist[(1 << n) - 1])
`)});
alt(1932,{name:"Rebuild with a value → tree map and a validity pass",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"Merge first, then validate with an in-order walk.",code:C(`
class Solution:
    def canMerge(self, trees):
        by_val = {t.val: t for t in trees}
        if len(by_val) != len(trees):
            return None
        child_vals = {c.val for t in trees for c in (t.left, t.right) if c}
        roots = [t for t in trees if t.val not in child_vals]
        if len(roots) != 1:
            return None
        root = roots[0]
        merged = {root.val}
        stack = [root]
        while stack:
            node = stack.pop()
            for side in ('left', 'right'):
                child = getattr(node, side)
                if child is None:
                    continue
                if not child.left and not child.right and child.val in by_val and by_val[child.val] is not child:
                    if child.val in merged:
                        return None
                    merged.add(child.val)
                    setattr(node, side, by_val[child.val])
                    child = by_val[child.val]
                stack.append(child)
        if len(merged) != len(trees):
            return None
        order = []
        def inorder(node):
            if node:
                inorder(node.left)
                order.append(node.val)
                inorder(node.right)
        inorder(root)
        return root if all(a < b for a, b in zip(order, order[1:])) else None
`)});
alt(1688,{name:"Simulate the rounds",tag:"Alternative",time:"O(log n)",space:"O(1)",explain:"Play each round: n // 2 matches, the winners (and a bye) continue.",code:C(`
class Solution:
    def numberOfMatches(self, n):
        matches = 0
        while n > 1:
            matches += n // 2
            n = (n + 1) // 2
        return matches
`)});
alt(1957,{name:"Groupby runs",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"Cap every run of equal letters at length 2.",code:C(`
class Solution:
    def makeFancyString(self, s):
        return ''.join(c * min(len(list(g)), 2) for c, g in groupby(s))
`)});
alt(1072,{name:"Try flipping to match each row",tag:"Brute force",time:"O(m²·n)",space:"O(n)",explain:"For each row count the rows equal to it or to its complement.",code:C(`
class Solution:
    def maxEqualRowsAfterFlips(self, matrix):
        best = 0
        for row in matrix:
            comp = [1 - v for v in row]
            best = max(best, sum(1 for r in matrix if r == row or r == comp))
        return best
`)});
alt(3264,{name:"Simulate with a linear scan",tag:"Brute force",time:"O(k·n)",space:"O(1)",explain:"Find the leftmost minimum each time.",code:C(`
class Solution:
    def getFinalState(self, nums, k, multiplier):
        for _ in range(k):
            i = nums.index(min(nums))
            nums[i] *= multiplier
        return nums
`)});
alt(1401,{name:"Check the four edges and the corners",tag:"Alternative",time:"O(1)",space:"O(1)",explain:"Overlap if the centre is inside the rectangle or within radius of the nearest edge / corner.",code:C(`
class Solution:
    def checkOverlap(self, radius, xCenter, yCenter, x1, y1, x2, y2):
        dx = max(x1 - xCenter, 0, xCenter - x2)
        dy = max(y1 - yCenter, 0, yCenter - y2)
        return dx * dx + dy * dy <= radius * radius
`)});
alt(3420,{name:"Brute force over subarrays",tag:"Brute force",time:"O(n³)",space:"O(1)",explain:"Compute the cost of every subarray directly.",code:C(`
class Solution:
    def countNonDecreasingSubarrays(self, nums, k):
        n = len(nums)
        count = 0
        for l in range(n):
            for r in range(l, n):
                top = cost = 0
                for i in range(l, r + 1):
                    top = max(top, nums[i])
                    cost += top - nums[i]
                if cost <= k:
                    count += 1
        return count
`)});
alt(1267,{name:"Check each server against its row and column",tag:"Brute force",time:"O(m·n·(m + n))",space:"O(1)",explain:"Scan the row and column of every server.",code:C(`
class Solution:
    def countServers(self, grid):
        m, n = len(grid), len(grid[0])
        count = 0
        for i in range(m):
            for j in range(n):
                if grid[i][j] and (sum(grid[i]) > 1 or sum(grid[r][j] for r in range(m)) > 1):
                    count += 1
        return count
`)});
alt(2658,{name:"Recursive DFS (Depth-First Search)",tag:"Alternative",time:"O(m·n)",space:"O(m·n)",explain:"Recursive flood fill that zeroes visited cells.",code:C(`
class Solution:
    def findMaxFish(self, grid):
        m, n = len(grid), len(grid[0])
        grid = [row[:] for row in grid]
        def dfs(i, j):
            if not (0 <= i < m and 0 <= j < n) or grid[i][j] == 0:
                return 0
            fish = grid[i][j]
            grid[i][j] = 0
            return fish + dfs(i + 1, j) + dfs(i - 1, j) + dfs(i, j + 1) + dfs(i, j - 1)
        return max(dfs(i, j) for i in range(m) for j in range(n))
`)});
alt(3108,{name:"Component search per query",tag:"Brute force",time:"O(q·(n + m))",space:"O(n + m)",explain:"For each query explore the reachable edges and AND their weights.",code:C(`
class Solution:
    def minimumCost(self, n, edges, query):
        adj = defaultdict(list)
        for u, v, w in edges:
            adj[u].append((v, w))
            adj[v].append((u, w))
        res = []
        for s, t in query:
            seen = {s}
            stack = [s]
            cost = (1 << 31) - 1
            while stack:
                u = stack.pop()
                for v, w in adj[u]:
                    cost &= w
                    if v not in seen:
                        seen.add(v)
                        stack.append(v)
            res.append(cost if t in seen else -1)
        return res
`)});
alt(2685,{name:"DFS (Depth-First Search) per component",tag:"Alternative",time:"O(n + m)",space:"O(n + m)",explain:"Explore each component and compare node and edge counts.",code:C(`
class Solution:
    def countCompleteComponents(self, n, edges):
        adj = defaultdict(set)
        for a, b in edges:
            adj[a].add(b)
            adj[b].add(a)
        seen = set()
        count = 0
        for s in range(n):
            if s in seen:
                continue
            comp = []
            stack = [s]
            seen.add(s)
            while stack:
                u = stack.pop()
                comp.append(u)
                for v in adj[u]:
                    if v not in seen:
                        seen.add(v)
                        stack.append(v)
            if all(len(adj[u]) == len(comp) - 1 for u in comp):
                count += 1
        return count
`)});
alt(2033,{name:"Try every target value",tag:"Brute force",time:"O((mn)²)",space:"O(mn)",explain:"Try each grid value as the target.",code:C(`
class Solution:
    def minOperations(self, grid, x):
        vals = [v for row in grid for v in row]
        if any((v - vals[0]) % x for v in vals):
            return -1
        return min(sum(abs(v - t) // x for v in vals) for t in vals)
`)});
alt(1461,{name:"Rolling bitmask",tag:"Alternative",time:"O(n)",space:"O(2ᵏ)",explain:"Maintain the integer value of the current window.",code:C(`
class Solution:
    def hasAllCodes(self, s, k):
        if len(s) < k:
            return False
        seen = set()
        mask = (1 << k) - 1
        cur = 0
        for i, c in enumerate(s):
            cur = ((cur << 1) | int(c)) & mask
            if i >= k - 1:
                seen.add(cur)
        return len(seen) == 1 << k
`)});
alt(2006,{name:"Brute force pairs",tag:"Brute force",time:"O(n²)",space:"O(1)",explain:"Compare every pair.",code:C(`
class Solution:
    def countKDifference(self, nums, k):
        n = len(nums)
        return sum(1 for i in range(n) for j in range(i + 1, n) if abs(nums[i] - nums[j]) == k)
`)});
alt(3434,{name:"Brute force over subarrays and values",tag:"Brute force",time:"O(n²·V)",space:"O(1)",explain:"For every subarray and every value inside it count the copies of k that end up in the array.",code:C(`
class Solution:
    def maxFrequency(self, nums, k):
        n = len(nums)
        total_k = nums.count(k)
        best = total_k
        for i in range(n):
            for j in range(i, n):
                sub = nums[i:j + 1]
                outside = total_k - sub.count(k)
                for v in set(sub):
                    best = max(best, outside + sub.count(v))
        return best
`)});
alt(951,{name:"Canonical form",tag:"Alternative",time:"O(n log n)",space:"O(n)",explain:"Put the smaller child first at every node and compare the shapes.",code:C(`
class Solution:
    def flipEquiv(self, root1, root2):
        def canon(node):
            if not node:
                return None
            left, right = canon(node.left), canon(node.right)
            kids = sorted([left, right], key=repr)
            return (node.val, kids[0], kids[1])
        return canon(root1) == canon(root2)
`)});
alt(3201,{name:"DP over (last parity, pattern parity)",tag:"Alternative",time:"O(n)",space:"O(1)",explain:"Try each target pair parity and greedily extend.",code:C(`
class Solution:
    def maximumLength(self, nums):
        best = 0
        for target in (0, 1):
            dp = [0, 0]
            for x in nums:
                p = x % 2
                dp[p] = max(dp[p], dp[(target - p) % 2] + 1)
            best = max(best, max(dp))
        return best
`)});
alt(2570,{name:"Merge two sorted lists",tag:"Alternative",time:"O(n + m)",space:"O(n + m)",explain:"Both inputs are sorted by id: merge with two pointers.",code:C(`
class Solution:
    def mergeArrays(self, nums1, nums2):
        i = j = 0
        res = []
        while i < len(nums1) or j < len(nums2):
            if j == len(nums2) or (i < len(nums1) and nums1[i][0] < nums2[j][0]):
                res.append(nums1[i][:])
                i += 1
            elif i == len(nums1) or nums2[j][0] < nums1[i][0]:
                res.append(nums2[j][:])
                j += 1
            else:
                res.append([nums1[i][0], nums1[i][1] + nums2[j][1]])
                i += 1
                j += 1
        return res
`)});
alt(2348,{name:"Group by runs",tag:"Alternative",time:"O(n)",space:"O(1)",explain:"Use groupby and the triangular number formula.",code:C(`
class Solution:
    def zeroFilledSubarray(self, nums):
        total = 0
        for v, g in groupby(nums):
            if v == 0:
                z = len(list(g))
                total += z * (z + 1) // 2
        return total
`)});
alt(2785,{name:"Counting sort of the vowels",tag:"Alternative",time:"O(n)",space:"O(1)",explain:"Count each vowel and hand them back in ASCII (American Standard Code for Information Interchange) order.",code:C(`
class Solution:
    def sortVowels(self, s):
        order = sorted('aeiouAEIOU')
        cnt = Counter(c for c in s if c in 'aeiouAEIOU')
        pool = [v for v in order for _ in range(cnt[v])]
        it = iter(pool)
        out = []
        for c in s:
            out.append(next(it) if c in 'aeiouAEIOU' else c)
        return ''.join(out)
`)});
alt(1935,{name:"Loop with a flag",tag:"Alternative",time:"O(n)",space:"O(1)",explain:"Check each word's letters one by one.",code:C(`
class Solution:
    def canBeTypedWords(self, text, brokenLetters):
        count = 0
        for w in text.split():
            ok = True
            for c in w:
                if c in brokenLetters:
                    ok = False
                    break
            if ok:
                count += 1
        return count
`)});
alt(1537,{name:"Prefix sums and DP over common values",tag:"Alternative",time:"O(n + m)",space:"O(n + m)",explain:"Best sum of each array up to every common value.",code:C(`
class Solution:
    def maxSum(self, nums1, nums2):
        pos2 = {v: j for j, v in enumerate(nums2)}
        common = [(i, pos2[v]) for i, v in enumerate(nums1) if v in pos2]
        p1, p2 = [0], [0]
        for x in nums1:
            p1.append(p1[-1] + x)
        for x in nums2:
            p2.append(p2[-1] + x)
        total = 0
        prev1 = prev2 = 0
        for i, j in common:
            total += max(p1[i] - p1[prev1], p2[j] - p2[prev2]) + nums1[i]
            prev1, prev2 = i + 1, j + 1
        total += max(p1[len(nums1)] - p1[prev1], p2[len(nums2)] - p2[prev2])
        return total % (10**9 + 7)
`)});
alt(3593,{name:"Recursive post-order",tag:"Alternative",time:"O(n)",space:"O(h)",explain:"Return the best path sum from each subtree.",code:C(`
class Solution:
    def minIncrease(self, n, edges, cost):
        adj = defaultdict(list)
        for a, b in edges:
            adj[a].append(b)
            adj[b].append(a)
        ops = 0
        def dfs(u, parent):
            nonlocal ops
            vals = [dfs(v, u) for v in adj[u] if v != parent]
            top = max(vals, default=0)
            ops += sum(v < top for v in vals)
            return cost[u] + top
        dfs(0, -1)
        return ops
`)});
alt(709,{name:"Built-in lower",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"Use str.lower.",code:C(`
class Solution:
    def toLowerCase(self, s):
        return s.lower()
`)});
alt(3512,{name:"Subtract until divisible",tag:"Brute force",time:"O(k)",space:"O(1)",explain:"Try 0, 1, 2, … operations.",code:C(`
class Solution:
    def minOperations(self, nums, k):
        total = sum(nums)
        ops = 0
        while total % k:
            total -= 1
            ops += 1
        return ops
`)});
alt(952,{name:"Union-find with a prime map",tag:"Alternative",time:"O(n·√V)",space:"O(n)",explain:"Union a number with the first number seen for each of its prime factors.",code:C(`
class Solution:
    def largestComponentSize(self, nums):
        parent = {x: x for x in nums}
        def find(x):
            while parent[x] != x:
                parent[x] = parent[parent[x]]
                x = parent[x]
            return x
        owner = {}
        for x in nums:
            n = x
            d = 2
            factors = []
            while d * d <= n:
                if n % d == 0:
                    factors.append(d)
                    while n % d == 0:
                        n //= d
                d += 1
            if n > 1:
                factors.append(n)
            for p in factors:
                if p in owner:
                    parent[find(x)] = find(owner[p])
                else:
                    owner[p] = x
        return max(Counter(find(x) for x in nums).values())
`)});
alt(2299,{name:"Rule by rule with all()",tag:"Alternative",time:"O(n)",space:"O(1)",explain:"Loop over the characters once.",code:C(`
class Solution:
    def strongPasswordCheckerII(self, password):
        special = "!@#$%^&*()-+"
        low = up = dig = spe = False
        for i, c in enumerate(password):
            if i and password[i - 1] == c:
                return False
            low |= c.islower()
            up |= c.isupper()
            dig |= c.isdigit()
            spe |= c in special
        return len(password) >= 8 and low and up and dig and spe
`)});
alt(3666,{name:"BFS (Breadth-First Search) over bitmasks",tag:"Brute force",time:"O(2ⁿ·C(n,k))",space:"O(2ⁿ)",explain:"Try every set of k indices to flip (tiny inputs).",code:C(`
class Solution:
    def minOperations(self, s, k):
        n = len(s)
        start = sum((c == '1') << i for i, c in enumerate(s))
        goal = (1 << n) - 1
        masks = [sum(1 << i for i in c) for c in combinations(range(n), k)]
        dist = {start: 0}
        q = deque([start])
        while q:
            u = q.popleft()
            if u == goal:
                return dist[u]
            for m in masks:
                v = u ^ m
                if v not in dist:
                    dist[v] = dist[u] + 1
                    q.append(v)
        return -1
`)});
alt(3761,{name:"Brute force over pairs",tag:"Brute force",time:"O(n²)",space:"O(1)",explain:"Test every pair.",code:C(`
class Solution:
    def minMirrorPairDistance(self, nums):
        best = float('inf')
        for i in range(len(nums)):
            for j in range(i + 1, len(nums)):
                if int(str(nums[i])[::-1]) == nums[j]:
                    best = min(best, j - i)
        return -1 if best == float('inf') else best
`)});
alt(1559,{name:"Union-find on equal neighbours",tag:"Alternative",time:"O(m·n α)",space:"O(m·n)",explain:"Joining two cells already in the same set closes a cycle.",code:C(`
class Solution:
    def containsCycle(self, grid):
        m, n = len(grid), len(grid[0])
        parent = list(range(m * n))
        def find(x):
            while parent[x] != x:
                parent[x] = parent[parent[x]]
                x = parent[x]
            return x
        for i in range(m):
            for j in range(n):
                for a, b in ((i + 1, j), (i, j + 1)):
                    if a < m and b < n and grid[a][b] == grid[i][j]:
                        ru, rv = find(i * n + j), find(a * n + b)
                        if ru == rv:
                            return True
                        parent[ru] = rv
        return False
`)});
alt(3742,{name:"Memoised recursion",tag:"Alternative",time:"O(m·n·k)",space:"O(m·n·k)",explain:"Top-down over (cell, cost left).",code:C(`
class Solution:
    def maxPathScore(self, grid, k):
        m, n = len(grid), len(grid[0])
        NEG = float('-inf')
        @lru_cache(None)
        def go(i, j, left):
            v = grid[i][j]
            c = 1 if v else 0
            if left < c:
                return NEG
            left -= c
            if i == m - 1 and j == n - 1:
                return v
            best = NEG
            if i + 1 < m:
                best = max(best, go(i + 1, j, left))
            if j + 1 < n:
                best = max(best, go(i, j + 1, left))
            return best + v if best > NEG else NEG
        res = go(0, 0, k)
        return -1 if res == NEG else res
`)});
alt(454,{name:"Brute force of all four",tag:"Brute force",time:"O(n⁴)",space:"O(1)",explain:"Try every tuple.",code:C(`
class Solution:
    def fourSumCount(self, nums1, nums2, nums3, nums4):
        return sum(1 for a in nums1 for b in nums2 for c in nums3 for d in nums4 if a + b + c + d == 0)
`)});
alt(3300,{name:"Digit sum with divmod",tag:"Alternative",time:"O(n log V)",space:"O(1)",explain:"Peel digits arithmetically.",code:C(`
class Solution:
    def minElement(self, nums):
        best = float('inf')
        for x in nums:
            s = 0
            while x:
                x, d = divmod(x, 10)
                s += d
            best = min(best, s)
        return best
`)});
alt(929,{name:"Manual scan of the local part",tag:"Alternative",time:"O(total length)",space:"O(total length)",explain:"Walk the characters and stop at '+'.",code:C(`
class Solution:
    def numUniqueEmails(self, emails):
        seen = set()
        for e in emails:
            local, domain = e.split('@')
            clean = []
            for c in local:
                if c == '+':
                    break
                if c != '.':
                    clean.append(c)
            seen.add(''.join(clean) + '@' + domain)
        return len(seen)
`)});
alt(2126,{name:"Min-heap of asteroids",tag:"Alternative",time:"O(n log n)",space:"O(n)",explain:"Pop the smallest asteroid each time.",code:C(`
class Solution:
    def asteroidsDestroyed(self, mass, asteroids):
        heap = list(asteroids)
        heapify(heap)
        while heap:
            a = heappop(heap)
            if mass < a:
                return False
            mass += a
        return True
`)});
alt(3348,{name:"Brute force upwards",tag:"Brute force",time:"O(10ⁿ)",space:"O(n)",explain:"Try num, num + 1, … until a zero-free number with a product divisible by t is found (tiny inputs).",code:C(`
class Solution:
    def smallestNumber(self, num, t):
        x = int(num)
        n = len(num)
        limit = 10 ** (n + 3)
        while x < limit:
            s = str(x)
            if '0' not in s:
                p = 1
                for c in s:
                    p *= int(c)
                if p % t == 0:
                    return s
            x += 1
        return "-1"
`)});
alt(1626,{name:"Sort by score, then LIS (Longest Increasing Subsequence) on age",tag:"Alternative",time:"O(n²)",space:"O(n)",explain:"The symmetric formulation: score ascending, ages must not decrease.",code:C(`
class Solution:
    def bestTeamScore(self, scores, ages):
        players = sorted(zip(scores, ages))
        dp = [s for s, _ in players]
        for i in range(len(players)):
            for j in range(i):
                if players[j][1] <= players[i][1]:
                    dp[i] = max(dp[i], dp[j] + players[i][0])
        return max(dp)
`)});
alt(1376,{name:"Memoised path to the head",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"Time for each employee = time of their manager + manager's inform time.",code:C(`
class Solution:
    def numOfMinutes(self, n, headID, manager, informTime):
        @lru_cache(None)
        def time_to(i):
            if manager[i] == -1:
                return 0
            return informTime[manager[i]] + time_to(manager[i])
        return max(time_to(i) for i in range(n))
`)});
alt(1872,{name:"Memoised recursion",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"Top-down version of the same recurrence.",code:C(`
class Solution:
    def stoneGameVIII(self, stones):
        n = len(stones)
        pref = list(accumulate(stones))
        @lru_cache(None)
        def go(i):
            if i == n - 1:
                return pref[n - 1]
            return max(go(i + 1), pref[i] - go(i + 1))
        return go(1)
`)});
alt(3904,{name:"Check each index directly",tag:"Brute force",time:"O(n²)",space:"O(1)",explain:"Take the max of the prefix and the min of the suffix for every index.",code:C(`
class Solution:
    def firstStableIndex(self, nums, k):
        for i in range(len(nums)):
            if max(nums[:i + 1]) - min(nums[i:]) <= k:
                return i
        return -1
`)});
alt(3871,{name:"Count commas number by number",tag:"Brute force",time:"O(n)",space:"O(1)",explain:"Format each number with separators.",code:C(`
class Solution:
    def countCommas(self, n):
        return sum(format(x, ',').count(',') for x in range(1, n + 1))
`)});
alt(1477,{name:"Brute force over subarray pairs",tag:"Brute force",time:"O(n³)",space:"O(n)",explain:"Find all target-sum subarrays and pair non-overlapping ones.",code:C(`
class Solution:
    def minSumOfLengths(self, arr, target):
        n = len(arr)
        subs = []
        for i in range(n):
            s = 0
            for j in range(i, n):
                s += arr[j]
                if s == target:
                    subs.append((i, j))
        best = float('inf')
        for a in subs:
            for b in subs:
                if a[1] < b[0]:
                    best = min(best, (a[1] - a[0] + 1) + (b[1] - b[0] + 1))
        return -1 if best == float('inf') else best
`)});
alt(1520,{name:"Stack of intervals",tag:"Alternative",time:"O(26·n)",space:"O(26)",explain:"Keep a stack; replace the top when a nested interval is found.",code:C(`
class Solution:
    def maxNumOfSubstrings(self, s):
        first, last = {}, {}
        for i, c in enumerate(s):
            first.setdefault(c, i)
            last[c] = i
        cands = []
        for c in first:
            l, r = first[c], last[c]
            i = l
            ok = True
            while i <= r:
                if first[s[i]] < l:
                    ok = False
                    break
                r = max(r, last[s[i]])
                i += 1
            if ok:
                cands.append((l, r))
        cands.sort()
        stack = []
        for l, r in cands:
            if stack and l <= stack[-1][1]:
                if r < stack[-1][1]:
                    stack[-1] = (l, r)
            else:
                stack.append((l, r))
        return [s[l:r + 1] for l, r in stack]
`)});
alt(3942,{name:"BFS (Breadth-First Search) over actual arrays",tag:"Brute force",time:"O(n·n!)",space:"O(n!)",explain:"Search the arrays reachable by reverse and rotate-left (tiny inputs).",code:C(`
class Solution:
    def minOperations(self, nums):
        n = len(nums)
        goal = tuple(range(n))
        start = tuple(nums)
        dist = {start: 0}
        q = deque([start])
        while q:
            u = q.popleft()
            if u == goal:
                return dist[u]
            for v in (u[::-1], u[1:] + u[:1]):
                if v not in dist:
                    dist[v] = dist[u] + 1
                    q.append(v)
        return -1
`)});
alt(956,{name:"Brute force over three-way assignments",tag:"Brute force",time:"O(3ⁿ)",space:"O(n)",explain:"Put each rod in the left support, the right support or neither.",code:C(`
class Solution:
    def tallestBillboard(self, rods):
        best = 0
        for assign in product((0, 1, 2), repeat=len(rods)):
            left = sum(r for r, a in zip(rods, assign) if a == 1)
            right = sum(r for r, a in zip(rods, assign) if a == 2)
            if left == right:
                best = max(best, left)
        return best
`)});
alt(1942,{name:"Simulate every seat",tag:"Brute force",time:"O(n²)",space:"O(n)",explain:"Keep the leave time of each chair and pick the lowest free one.",code:C(`
class Solution:
    def smallestChair(self, times, targetFriend):
        free_at = [0] * len(times)
        for i in sorted(range(len(times)), key=lambda i: times[i][0]):
            arrive, leave = times[i]
            for chair in range(len(times)):
                if free_at[chair] <= arrive:
                    free_at[chair] = leave
                    if i == targetFriend:
                        return chair
                    break
`)});
alt(2498,{name:"Brute force over the outbound stones",tag:"Brute force",time:"O(2ⁿ·n)",space:"O(n)",explain:"Try every split of the middle stones into outbound and return legs.",code:C(`
class Solution:
    def maxJump(self, stones):
        n = len(stones)
        best = float('inf')
        for mask in range(1 << (n - 2)):
            out = [0] + [i for i in range(1, n - 1) if mask >> (i - 1) & 1] + [n - 1]
            back = [0] + [i for i in range(1, n - 1) if not mask >> (i - 1) & 1] + [n - 1]
            jump = max(max(stones[b] - stones[a] for a, b in zip(leg, leg[1:])) for leg in (out, back))
            best = min(best, jump)
        return best
`)});
alt(3099,{name:"Digit sum with divmod",tag:"Alternative",time:"O(log x)",space:"O(1)",explain:"Add the digits arithmetically.",code:C(`
class Solution:
    def sumOfTheDigitsOfHarshadNumber(self, x):
        n, s = x, 0
        while n:
            n, d = divmod(n, 10)
            s += d
        return s if x % s == 0 else -1
`)});
alt(500,{name:"Row lookup per letter",tag:"Alternative",time:"O(total length)",space:"O(1)",explain:"Map each letter to its row number and check all letters agree.",code:C(`
class Solution:
    def findWords(self, words):
        row = {}
        for r, letters in enumerate(("qwertyuiop", "asdfghjkl", "zxcvbnm")):
            for c in letters:
                row[c] = r
        return [w for w in words if len({row[c] for c in w.lower()}) == 1]
`)});
alt(3011,{name:"Bubble sort within equal popcount",tag:"Brute force",time:"O(n²)",space:"O(1)",explain:"Swap adjacent out-of-order elements only if their popcounts match.",code:C(`
class Solution:
    def canSortArray(self, nums):
        nums = nums[:]
        changed = True
        while changed:
            changed = False
            for i in range(len(nums) - 1):
                if nums[i] > nums[i + 1]:
                    if bin(nums[i]).count('1') == bin(nums[i + 1]).count('1'):
                        nums[i], nums[i + 1] = nums[i + 1], nums[i]
                        changed = True
                    else:
                        return False
        return True
`)});
};
