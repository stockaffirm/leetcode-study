module.exports=({alt})=>{
const C=s=>s.replace(/^\n/,"").replace(/\n$/,"").split("\n");
// ---- Microsoft (1)
alt(3139,{name:"Greedy simulation of the final value",tag:"Brute force",time:"exponential (tiny inputs)",space:"O(states)",explain:"Search the cheapest way to raise every element to a target by single or paired increments.",code:C(`
class Solution:
    def minCostToEqualizeArray(self, nums, cost1, cost2):
        MOD = 10**9 + 7
        mx = max(nums)
        best = float('inf')
        for t in range(mx, mx + 8):
            need = tuple(t - x for x in nums)
            @lru_cache(None)
            def go(state):
                if all(v == 0 for v in state):
                    return 0
                i = next(i for i, v in enumerate(state) if v > 0)
                s = list(state)
                s[i] -= 1
                res = cost1 + go(tuple(s))
                for j in range(i + 1, len(state)):
                    if state[j] > 0:
                        s2 = list(state)
                        s2[i] -= 1
                        s2[j] -= 1
                        res = min(res, cost2 + go(tuple(s2)))
                return res
            best = min(best, go(need))
        return best % MOD
`)});
alt(805,{name:"Meet in the middle / combinations",tag:"Brute force",time:"O(2ⁿ)",space:"O(n)",explain:"Try every subset size and test whether some subset has the needed sum.",code:C(`
class Solution:
    def splitArraySameAverage(self, nums):
        n, total = len(nums), sum(nums)
        for k in range(1, n // 2 + 1):
            if total * k % n == 0:
                need = total * k // n
                if any(sum(c) == need for c in combinations(nums, k)):
                    return True
        return False
`)});
alt(794,{name:"Enumerate winning lines explicitly",tag:"Alternative",time:"O(1)",space:"O(1)",explain:"Check the eight lines through a list of index triples.",code:C(`
class Solution:
    def validTicTacToe(self, board):
        cells = ''.join(board)
        lines = [(0,1,2),(3,4,5),(6,7,8),(0,3,6),(1,4,7),(2,5,8),(0,4,8),(2,4,6)]
        def win(p):
            return any(all(cells[i] == p for i in line) for line in lines)
        x, o = cells.count('X'), cells.count('O')
        if x - o not in (0, 1):
            return False
        if win('X') and x - o != 1:
            return False
        if win('O') and x - o != 0:
            return False
        return True
`)});
alt(1306,{name:"DFS (Depth-First Search)",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"Recursive exploration with a visited set.",code:C(`
class Solution:
    def canReach(self, arr, start):
        seen = set()
        def dfs(i):
            if i < 0 or i >= len(arr) or i in seen:
                return False
            if arr[i] == 0:
                return True
            seen.add(i)
            return dfs(i + arr[i]) or dfs(i - arr[i])
        return dfs(start)
`)});
alt(1615,{name:"Count roads touching either city",tag:"Brute force",time:"O(n²·m)",space:"O(m)",explain:"For each pair count the roads with an endpoint in the pair directly.",code:C(`
class Solution:
    def maximalNetworkRank(self, n, roads):
        best = 0
        for a in range(n):
            for b in range(a + 1, n):
                best = max(best, sum(1 for u, v in roads if u in (a, b) or v in (a, b)))
        return best
`)});
alt(3377,{name:"Dijkstra with an explicit digit list",tag:"Alternative",time:"O(10^d · d · log)",space:"O(10^d)",explain:"Same search, keeping the digits as a list.",code:C(`
class Solution:
    def minOperations(self, n, m):
        d = len(str(n))
        limit = 10 ** d
        composite = bytearray(limit + 1)
        composite[0] = composite[1] = 1
        for i in range(2, limit + 1):
            if not composite[i]:
                for j in range(i * i, limit + 1, i):
                    composite[j] = 1
        is_prime = lambda x: not composite[x]
        if is_prime(n) or is_prime(m):
            return -1
        best = {n: n}
        heap = [(n, n)]
        while heap:
            c, u = heappop(heap)
            if u == m:
                return c
            if best[u] < c:
                continue
            digits = [int(ch) for ch in str(u).zfill(d)]
            for i in range(d):
                for delta in (-1, 1):
                    nd = digits[i] + delta
                    if 0 <= nd <= 9:
                        digits[i] = nd
                        v = int(''.join(map(str, digits)))
                        digits[i] -= delta
                        if not is_prime(v) and c + v < best.get(v, float('inf')):
                            best[v] = c + v
                            heappush(heap, (c + v, v))
        return -1
`)});
alt(651,{name:"Memoised recursion",tag:"Alternative",time:"O(n²)",space:"O(n)",explain:"Best count with i presses left starting from count c.",code:C(`
class Solution:
    def maxA(self, n):
        @lru_cache(None)
        def best(presses):
            if presses <= 6:
                return presses
            return max(best(j) * (presses - j - 1) for j in range(1, presses - 2))
        return best(n)
`)});
alt(1013,{name:"Prefix sums and two cut points",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"Find a first and last cut using prefix sums equal to total/3 and 2·total/3.",code:C(`
class Solution:
    def canThreePartsEqualSum(self, arr):
        total = sum(arr)
        if total % 3:
            return False
        target = total // 3
        pref = 0
        cuts = 0
        for i, x in enumerate(arr[:-1]):
            pref += x
            if pref == target * (cuts + 1):
                cuts += 1
                if cuts == 2:
                    return True
        return False
`)});
alt(1324,{name:"zip_longest",tag:"Alternative",time:"O(total)",space:"O(total)",explain:"Transpose the words with padding.",code:C(`
class Solution:
    def printVertically(self, s):
        return [''.join(col).rstrip() for col in zip_longest(*s.split(), fillvalue=' ')]
`)});
alt(1528,{name:"Sort positions",tag:"Alternative",time:"O(n log n)",space:"O(n)",explain:"Sort the letters by their target index.",code:C(`
class Solution:
    def restoreString(self, s, indices):
        return ''.join(c for _, c in sorted(zip(indices, s)))
`)});
alt(1887,{name:"Group by distinct values",tag:"Alternative",time:"O(n log n)",space:"O(n)",explain:"Counter over values; each distinct value contributes count · rank.",code:C(`
class Solution:
    def reductionOperations(self, nums):
        cnt = Counter(nums)
        return sum(rank * cnt[v] for rank, v in enumerate(sorted(cnt)))
`)});
alt(2664,{name:"Iterative backtracking with an explicit stack",tag:"Alternative",time:"O(8^(m·n))",space:"O(m·n)",explain:"Same move order, simulated without recursion.",code:C(`
class Solution:
    def tourOfKnight(self, m, n, r, c):
        board = [[-1] * n for _ in range(m)]
        moves = [(1, 2), (2, 1), (2, -1), (1, -2), (-1, -2), (-2, -1), (-2, 1), (-1, 2)]
        board[r][c] = 0
        stack = [(r, c, 0)]
        while stack:
            i, j, nxt = stack[-1]
            step = len(stack) - 1
            if step == m * n - 1:
                return board
            if nxt == 8:
                board[i][j] = -1
                stack.pop()
                continue
            stack[-1] = (i, j, nxt + 1)
            a, b = i + moves[nxt][0], j + moves[nxt][1]
            if 0 <= a < m and 0 <= b < n and board[a][b] == -1:
                board[a][b] = step + 1
                stack.append((a, b, 0))
        return board
`)});
alt(2815,{name:"Try every pair",tag:"Brute force",time:"O(n²)",space:"O(1)",explain:"Compare the largest digits of each pair.",code:C(`
class Solution:
    def maxSum(self, nums):
        best = -1
        for i in range(len(nums)):
            for j in range(i + 1, len(nums)):
                if max(str(nums[i])) == max(str(nums[j])):
                    best = max(best, nums[i] + nums[j])
        return best
`)});
alt(3119,{name:"Knapsack over the groups",tag:"Brute force",time:"O(groups · budget · size)",space:"O(budget)",explain:"dp[b] = most potholes fixed with budget b, choosing how many of each group to fix.",code:C(`
class Solution:
    def maxPotholes(self, road, budget):
        groups = [len(g) for g in road.split('.') if g]
        dp = [0] * (budget + 1)
        for g in groups:
            new = dp[:]
            for b in range(budget + 1):
                for k in range(1, g + 1):
                    if b + k + 1 <= budget:
                        new[b + k + 1] = max(new[b + k + 1], dp[b] + k)
            dp = new
        return max(dp)
`)});
alt(3393,{name:"Memoised recursion from the end",tag:"Alternative",time:"O(m·n·16)",space:"O(m·n·16)",explain:"Count paths from a cell to the end with a required remaining xor.",code:C(`
class Solution:
    def countPathsWithXorValue(self, grid, k):
        MOD = 10**9 + 7
        m, n = len(grid), len(grid[0])
        @lru_cache(None)
        def go(i, j, need):
            need ^= grid[i][j]
            if i == m - 1 and j == n - 1:
                return 1 if need == 0 else 0
            total = 0
            if i + 1 < m:
                total += go(i + 1, j, need)
            if j + 1 < n:
                total += go(i, j + 1, need)
            return total % MOD
        return go(0, 0, k)
`)});
alt(672,{name:"Simulate all button sequences",tag:"Brute force",time:"O(4^presses)",space:"O(patterns)",explain:"Apply the four buttons to the first min(n, 6) bulbs and count distinct states.",code:C(`
class Solution:
    def flipLights(self, n, presses):
        size = min(n, 6)
        start = tuple([1] * size)
        rules = [
            lambda i: True,
            lambda i: i % 2 == 0,
            lambda i: i % 2 == 1,
            lambda i: i % 3 == 0,
        ]
        states = {start}
        for _ in range(presses):
            new = set()
            for s in states:
                for rule in rules:
                    new.add(tuple(1 - v if rule(i) else v for i, v in enumerate(s)))
            states = new
        return len(states)
`)});
alt(1006,{name:"Direct simulation by groups of four",tag:"Alternative",time:"O(n)",space:"O(1)",explain:"Evaluate each * / + block directly.",code:C(`
class Solution:
    def clumsy(self, n):
        total = 0
        sign = 1
        x = n
        first = True
        while x > 0:
            block = x
            if x - 1 > 0:
                block *= x - 1
            if x - 2 > 0:
                block = int(block / (x - 2))
            total += sign * block
            if x - 3 > 0:
                total += x - 3
            sign = -1
            x -= 4
        return total
`)});
alt(1375,{name:"Count the 1s turned on and compare",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"Track which bits are on with an array and check the prefix is complete.",code:C(`
class Solution:
    def numTimesAllBlue(self, flips):
        on = [False] * (len(flips) + 2)
        right = 0
        count = 0
        for step, f in enumerate(flips, 1):
            on[f] = True
            while on[right + 1]:
                right += 1
            if right == step:
                count += 1
        return count
`)});
alt(1637,{name:"Compare every pair of x values",tag:"Brute force",time:"O(n²)",space:"O(n)",explain:"Find the gap between each x and its next larger neighbour.",code:C(`
class Solution:
    def maxWidthOfVerticalArea(self, points):
        xs = [x for x, _ in points]
        best = 0
        for a in xs:
            bigger = [b for b in xs if b > a]
            if bigger:
                best = max(best, min(bigger) - a)
        return best
`)});
alt(1703,{name:"Try every group of k ones",tag:"Brute force",time:"O(C(m, k)·n)",space:"O(k)",explain:"Choose k ones and every target window, summing the distances.",code:C(`
class Solution:
    def minMoves(self, nums, k):
        pos = [i for i, v in enumerate(nums) if v]
        best = float('inf')
        for chosen in combinations(pos, k):
            for t in range(len(nums) - k + 1):
                best = min(best, sum(abs(chosen[j] - (t + j)) for j in range(k)))
        return best
`)});
alt(1836,{name:"Rebuild the list from kept values",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"Read the values into a list and create a new list of the unique ones.",code:C(`
class Solution:
    def deleteDuplicatesUnsorted(self, head):
        vals = []
        node = head
        while node:
            vals.append(node.val)
            node = node.next
        cnt = Counter(vals)
        dummy = ListNode(0)
        tail = dummy
        for v in vals:
            if cnt[v] == 1:
                tail.next = ListNode(v)
                tail = tail.next
        return dummy.next
`)});
alt(2127,{name:"Walk from every start; recurse for chains",tag:"Brute force",time:"O(n²)",space:"O(n)",explain:"Find cycle lengths by walking from each node; extend 2-cycles by the longest incoming chains.",code:C(`
class Solution:
    def maximumInvitations(self, favorite):
        n = len(favorite)
        longest = 0
        for s in range(n):
            seen = {}
            cur, steps = s, 0
            while cur not in seen:
                seen[cur] = steps
                cur = favorite[cur]
                steps += 1
            if cur == s:
                longest = max(longest, steps - seen[cur])
        rev = defaultdict(list)
        for i, f in enumerate(favorite):
            rev[f].append(i)
        def chain(u, avoid):
            return max((1 + chain(v, avoid) for v in rev[u] if v != avoid), default=0)
        pairs = 0
        for a in range(n):
            b = favorite[a]
            if favorite[b] == a and a < b:
                pairs += 2 + chain(a, b) + chain(b, a)
        return max(longest, pairs)
`)});
alt(2384,{name:"Greedy by digit with explicit middle",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"Build the left half digit by digit from 9 to 0.",code:C(`
class Solution:
    def largestPalindromic(self, num):
        cnt = Counter(num)
        left = ""
        for d in range(9, -1, -1):
            c = str(d)
            pairs = cnt[c] // 2
            if d == 0 and not left:
                pairs = 0
            left += c * pairs
        middle = ""
        for d in range(9, -1, -1):
            if cnt[str(d)] % 2 or (d == 0 and cnt['0'] and not left):
                middle = str(d)
                break
        if not left and not middle:
            return "0"
        return left + middle + left[::-1]
`)});
alt(3040,{name:"Bottom-up interval table per score",tag:"Alternative",time:"O(n²)",space:"O(n²)",explain:"Fill the table for intervals of increasing length.",code:C(`
class Solution:
    def maxOperations(self, nums):
        n = len(nums)
        best = 0
        for score in {nums[0] + nums[1], nums[-2] + nums[-1], nums[0] + nums[-1]}:
            dp = [[0] * (n + 2) for _ in range(n + 2)]
            for length in range(2, n + 1):
                for l in range(n - length + 1):
                    r = l + length - 1
                    cur = 0
                    if nums[l] + nums[l + 1] == score:
                        cur = max(cur, 1 + dp[l + 2][r])
                    if nums[r - 1] + nums[r] == score:
                        cur = max(cur, 1 + dp[l][r - 2])
                    if nums[l] + nums[r] == score:
                        cur = max(cur, 1 + dp[l + 1][r - 1])
                    dp[l][r] = cur
            best = max(best, dp[0][n - 1])
        return best
`)});
alt(3229,{name:"Track run of increments and decrements",tag:"Alternative",time:"O(n)",space:"O(1)",explain:"Sum of positive jumps and of negative jumps of the difference sequence, taking the larger side.",code:C(`
class Solution:
    def minimumOperations(self, nums, target):
        diff = [b - a for a, b in zip(nums, target)]
        prev = 0
        pos = neg = 0
        for d in diff + [0]:
            step = d - prev
            if step > 0:
                pos += step
            else:
                neg -= step
            prev = d
        return max(pos, neg)
`)});
alt(3772,{name:"DFS from every node",tag:"Brute force",time:"O(n²)",space:"O(n)",explain:"For each node compute the best connected subgraph containing it by rooting there.",code:C(`
class Solution:
    def maxSubgraphScore(self, n, edges, good):
        adj = defaultdict(list)
        for a, b in edges:
            adj[a].append(b)
            adj[b].append(a)
        val = [1 if g else -1 for g in good]
        def best(u, parent):
            total = val[u]
            for v in adj[u]:
                if v != parent:
                    total += max(0, best(v, u))
            return total
        return [best(u, -1) for u in range(n)]
`)});
alt(3878,{name:"Brute force over subarrays",tag:"Brute force",time:"O(n²)",space:"O(1)",explain:"Running OR and maximum for every subarray.",code:C(`
class Solution:
    def countGoodSubarrays(self, nums):
        count = 0
        for i in range(len(nums)):
            o = 0
            m = 0
            for j in range(i, len(nums)):
                o |= nums[j]
                m = max(m, nums[j])
                if o == m:
                    count += 1
        return count
`)});
alt(333,{name:"Check each subtree by inorder values",tag:"Brute force",time:"O(n²)",space:"O(h)",explain:"For every node test whether its subtree is a BST and measure it.",code:C(`
class Solution:
    def largestBSTSubtree(self, root):
        def inorder(node):
            return inorder(node.left) + [node.val] + inorder(node.right) if node else []
        best = 0
        stack = [root]
        while stack:
            node = stack.pop()
            if not node:
                continue
            vals = inorder(node)
            if all(a < b for a, b in zip(vals, vals[1:])):
                best = max(best, len(vals))
            stack.append(node.left)
            stack.append(node.right)
        return best
`)});
alt(1983,{name:"Brute force over ranges",tag:"Brute force",time:"O(n²)",space:"O(1)",explain:"Compare range sums of every i ≤ j.",code:C(`
class Solution:
    def widestPairOfIndices(self, nums1, nums2):
        n = len(nums1)
        best = 0
        for i in range(n):
            a = b = 0
            for j in range(i, n):
                a += nums1[j]
                b += nums2[j]
                if a == b:
                    best = max(best, j - i + 1)
        return best
`)});
alt(591,{name:"Regex-free tokeniser with an explicit state machine",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"Peel one token at a time: CDATA, closing tag, opening tag or text.",code:C(`
class Solution:
    def isValid(self, code):
        stack = []
        pos = 0
        while pos < len(code):
            if pos > 0 and not stack:
                return False
            rest = code[pos:]
            if rest.startswith('<![CDATA['):
                end = rest.find(']]>')
                if end < 0:
                    return False
                if not stack:
                    return False
                pos += end + 3
            elif rest.startswith('</'):
                end = rest.find('>')
                if end < 0:
                    return False
                name = rest[2:end]
                if not name or not name.isupper() or not name.isalpha() or len(name) > 9:
                    return False
                if not stack or stack.pop() != name:
                    return False
                pos += end + 1
            elif rest.startswith('<'):
                end = rest.find('>')
                if end < 0:
                    return False
                name = rest[1:end]
                if not name or not name.isalpha() or not name.isupper() or len(name) > 9:
                    return False
                stack.append(name)
                pos += end + 1
            else:
                if not stack:
                    return False
                pos += 1
        return not stack
`)});
alt(972,{name:"Compare long scaled expansions",tag:"Alternative",time:"O(L)",space:"O(L)",explain:"Expand the repeating part to 60 decimal places as integers and compare.",code:C(`
class Solution:
    def isRationalEqual(self, s, t):
        N = 60
        def scaled(x):
            if '(' in x:
                head, rest = x.split('(')
                rep = rest[:-1]
            else:
                head, rep = x, ''
            if '.' in head:
                whole, frac = head.split('.')
            else:
                whole, frac = head, ''
            digits = (frac + rep * N)[:N].ljust(N, '0')
            return int(whole) * 10 ** N + int(digits)
        return abs(scaled(s) - scaled(t)) <= 1
`)});
alt(1198,{name:"Pointers across all rows",tag:"Alternative",time:"O(m·n)",space:"O(m)",explain:"Advance the row with the smallest current value until all rows agree.",code:C(`
class Solution:
    def smallestCommonElement(self, mat):
        idx = [0] * len(mat)
        while all(idx[r] < len(mat[r]) for r in range(len(mat))):
            vals = [mat[r][idx[r]] for r in range(len(mat))]
            if min(vals) == max(vals):
                return vals[0]
            low = min(vals)
            for r in range(len(mat)):
                if vals[r] == low:
                    idx[r] += 1
        return -1
`)});
alt(1093,{name:"Expand the samples",tag:"Brute force",time:"O(total)",space:"O(total)",explain:"Build the full sorted sample list and read the statistics off it.",code:C(`
class Solution:
    def sampleStats(self, count):
        samples = []
        for k, c in enumerate(count):
            samples += [k] * c
        n = len(samples)
        mid = n // 2
        median = float(samples[mid]) if n % 2 else (samples[mid - 1] + samples[mid]) / 2
        mode = max(range(256), key=lambda k: count[k])
        return [float(samples[0]), float(samples[-1]), sum(samples) / n, median, float(mode)]
`)});
alt(1273,{name:"Iterative post-order",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"Process nodes in reverse BFS (Breadth-First Search) order, adding each child's sum and size to its parent.",code:C(`
class Solution:
    def deleteTreeNodes(self, nodes, parent, value):
        children = defaultdict(list)
        for i, p in enumerate(parent):
            if p != -1:
                children[p].append(i)
        order = [0]
        for u in order:
            order.extend(children[u])
        total = value[:]
        size = [1] * nodes
        for u in reversed(order):
            if total[u] == 0:
                size[u] = 0
            if parent[u] != -1:
                total[parent[u]] += total[u]
                size[parent[u]] += size[u]
        return size[0]
`)});
alt(1246,{name:"Memoised recursion",tag:"Alternative",time:"O(n³)",space:"O(n²)",explain:"Top-down version over (i, j).",code:C(`
class Solution:
    def minimumMoves(self, arr):
        @lru_cache(None)
        def go(i, j):
            if i > j:
                return 0
            best = 1 + go(i + 1, j)
            for k in range(i + 1, j + 1):
                if arr[i] == arr[k]:
                    best = min(best, max(1, go(i + 1, k - 1)) + go(k + 1, j))
            return best
        return go(0, len(arr) - 1)
`)});
alt(1131,{name:"Brute force over pairs",tag:"Brute force",time:"O(n²)",space:"O(1)",explain:"Evaluate the expression for every pair.",code:C(`
class Solution:
    def maxAbsValExpr(self, arr1, arr2):
        n = len(arr1)
        return max(abs(arr1[i] - arr1[j]) + abs(arr2[i] - arr2[j]) + abs(i - j) for i in range(n) for j in range(n))
`)});
alt(1206,{name:"Sorted list with bisect",tag:"Alternative",time:"O(n) per update",space:"O(n)",explain:"Keep a sorted list and use binary search.",code:C(`
class Skiplist:
    def __init__(self):
        self.vals = []

    def search(self, target):
        i = bisect_left(self.vals, target)
        return i < len(self.vals) and self.vals[i] == target

    def add(self, num):
        insort(self.vals, num)

    def erase(self, num):
        i = bisect_left(self.vals, num)
        if i < len(self.vals) and self.vals[i] == num:
            self.vals.pop(i)
            return True
        return False
`)});
alt(2321,{name:"Try every subarray swap",tag:"Brute force",time:"O(n²)",space:"O(1)",explain:"Compute the score after swapping each subarray.",code:C(`
class Solution:
    def maximumsSplicedArray(self, nums1, nums2):
        n = len(nums1)
        s1, s2 = sum(nums1), sum(nums2)
        best = max(s1, s2)
        for i in range(n):
            d = 0
            for j in range(i, n):
                d += nums2[j] - nums1[j]
                best = max(best, s1 + d, s2 - d)
        return best
`)});
alt(2216,{name:"Build the kept array",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"Append numbers one at a time and skip a duplicate at an even position.",code:C(`
class Solution:
    def minDeletion(self, nums):
        kept = []
        for x in nums:
            if len(kept) % 2 == 1 and kept[-1] == x:
                continue
            kept.append(x)
        if len(kept) % 2:
            kept.pop()
        return len(nums) - len(kept)
`)});
alt(2309,{name:"Compare sets of letters",tag:"Alternative",time:"O(n)",space:"O(1)",explain:"Intersect lower-case letters with lower-cased upper-case ones.",code:C(`
class Solution:
    def greatestLetter(self, s):
        lower = {c for c in s if c.islower()}
        upper = {c.lower() for c in s if c.isupper()}
        both = lower & upper
        return max(both).upper() if both else ""
`)});
alt(1371,{name:"Brute force over substrings",tag:"Brute force",time:"O(n²)",space:"O(1)",explain:"Count the vowels of each substring.",code:C(`
class Solution:
    def findTheLongestSubstring(self, s):
        best = 0
        for i in range(len(s)):
            cnt = Counter()
            for j in range(i, len(s)):
                cnt[s[j]] += 1
                if all(cnt[v] % 2 == 0 for v in 'aeiou'):
                    best = max(best, j - i + 1)
        return best
`)});
alt(1417,{name:"Zip the groups",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"Interleave with zip_longest after ordering the groups by size.",code:C(`
class Solution:
    def reformat(self, s):
        letters = [c for c in s if c.isalpha()]
        digits = [c for c in s if c.isdigit()]
        if abs(len(letters) - len(digits)) > 1:
            return ""
        a, b = (letters, digits) if len(letters) >= len(digits) else (digits, letters)
        return ''.join(x + y for x, y in zip_longest(a, b, fillvalue=''))
`)});
alt(1469,{name:"Recursive collection",tag:"Alternative",time:"O(n)",space:"O(h)",explain:"Recurse and note single children.",code:C(`
class Solution:
    def getLonelyNodes(self, root):
        res = []
        def go(node):
            if not node:
                return
            if bool(node.left) != bool(node.right):
                res.append((node.left or node.right).val)
            go(node.left)
            go(node.right)
        go(root)
        return sorted(res)
`)});
alt(1474,{name:"Copy into a new list",tag:"Alternative",time:"O(len)",space:"O(len)",explain:"Read the values, keep every m then skip n, and rebuild.",code:C(`
class Solution:
    def deleteNodes(self, head, m, n):
        vals = []
        node = head
        while node:
            vals.append(node.val)
            node = node.next
        kept = [v for i, v in enumerate(vals) if i % (m + n) < m]
        dummy = ListNode(0)
        tail = dummy
        for v in kept:
            tail.next = ListNode(v)
            tail = tail.next
        return dummy.next
`)});
alt(1573,{name:"Prefix count of ones",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"Count the cut positions that leave the right number of ones on each side.",code:C(`
class Solution:
    def numWays(self, s):
        MOD = 10**9 + 7
        n = len(s)
        total = s.count('1')
        if total % 3:
            return 0
        if total == 0:
            return (n - 1) * (n - 2) // 2 % MOD
        t = total // 3
        pref = [0]
        for c in s:
            pref.append(pref[-1] + (c == '1'))
        first = sum(1 for i in range(1, n) if pref[i] == t)
        second = sum(1 for i in range(1, n) if pref[i] == 2 * t)
        return first * second % MOD
`)});
alt(1576,{name:"Candidate set",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"Pick the smallest letter not in the neighbour set.",code:C(`
class Solution:
    def modifyString(self, s):
        out = list(s)
        for i in range(len(out)):
            if out[i] == '?':
                neighbours = set()
                if i:
                    neighbours.add(out[i - 1])
                if i + 1 < len(out):
                    neighbours.add(out[i + 1])
                out[i] = min(set('abc') - neighbours)
        return ''.join(out)
`)});
alt(1638,{name:"Brute force over substring pairs",tag:"Brute force",time:"O(n²·m²)",space:"O(1)",explain:"Compare every pair of equal-length substrings.",code:C(`
class Solution:
    def countSubstrings(self, s, t):
        count = 0
        for i in range(len(s)):
            for j in range(len(t)):
                for length in range(1, min(len(s) - i, len(t) - j) + 1):
                    diff = sum(1 for k in range(length) if s[i + k] != t[j + k])
                    if diff == 1:
                        count += 1
        return count
`)});
alt(1681,{name:"Backtracking assignment",tag:"Brute force",time:"exponential",space:"O(n)",explain:"Place numbers one at a time into groups of distinct values.",code:C(`
class Solution:
    def minimumIncompatibility(self, nums, k):
        size = len(nums) // k
        nums = sorted(nums)
        best = [float('inf')]
        groups = [[] for _ in range(k)]
        def go(i):
            if i == len(nums):
                best[0] = min(best[0], sum(g[-1] - g[0] for g in groups))
                return
            tried = set()
            for g in groups:
                key = tuple(g)
                if key in tried:
                    continue
                tried.add(key)
                if len(g) < size and (not g or g[-1] != nums[i]):
                    g.append(nums[i])
                    go(i + 1)
                    g.pop()
        go(0)
        return best[0] if best[0] < float('inf') else -1
`)});
alt(1808,{name:"Integer break by DP (small n)",tag:"Brute force",time:"O(n²)",space:"O(n)",explain:"dp[i] = largest product of positive parts summing to i.",code:C(`
class Solution:
    def maxNiceDivisors(self, primeFactors):
        n = primeFactors
        dp = [0] * (n + 1)
        dp[0] = 1
        for i in range(1, n + 1):
            dp[i] = max(dp[i - j] * j for j in range(1, i + 1))
        return dp[n] % (10**9 + 7)
`)});
alt(1822,{name:"Multiply the signs",tag:"Alternative",time:"O(n)",space:"O(1)",explain:"Multiply -1 / 0 / 1 per element.",code:C(`
class Solution:
    def arraySign(self, nums):
        sign = 1
        for x in nums:
            sign *= (x > 0) - (x < 0)
        return sign
`)});
alt(1904,{name:"Count rounds quarter by quarter",tag:"Brute force",time:"O(1)",space:"O(1)",explain:"Walk the 15-minute marks between login and logout.",code:C(`
class Solution:
    def numberOfRounds(self, loginTime, logoutTime):
        def minutes(t):
            return int(t[:2]) * 60 + int(t[3:])
        a, b = minutes(loginTime), minutes(logoutTime)
        if b < a:
            b += 1440
        count = 0
        t = a
        while t + 15 <= b:
            if t % 15 == 0:
                count += 1
                t += 15
            else:
                t += 1
        return count
`)});
alt(1945,{name:"Digit sum with divmod",tag:"Alternative",time:"O(n)",space:"O(1)",explain:"Accumulate the digit sum numerically.",code:C(`
class Solution:
    def getLucky(self, s, k):
        total = 0
        for c in s:
            v = ord(c) - 96
            total += v // 10 + v % 10
        for _ in range(k - 1):
            t = 0
            while total:
                total, d = divmod(total, 10)
                t += d
            total = t
        return total
`)});
alt(2052,{name:"Memoised recursion",tag:"Alternative",time:"O(n²)",space:"O(n)",explain:"Recurse on the first unplaced word.",code:C(`
class Solution:
    def minimumCost(self, sentence, k):
        words = sentence.split()
        n = len(words)
        @lru_cache(None)
        def go(i):
            best = float('inf')
            length = -1
            for j in range(i, n):
                length += len(words[j]) + 1
                if length > k:
                    break
                best = min(best, 0 if j == n - 1 else (k - length) ** 2 + go(j + 1))
            return best
        return go(0)
`)});
alt(2015,{name:"Check every unit interval (small coordinates)",tag:"Brute force",time:"O(range·n)",space:"O(range)",explain:"Compute the average on every unit of the street and merge equal neighbours.",code:C(`
class Solution:
    def averageHeightOfBuildings(self, buildings):
        lo = min(b[0] for b in buildings)
        hi = max(b[1] for b in buildings)
        res = []
        for x in range(lo, hi):
            hs = [h for s, e, h in buildings if s <= x < e]
            if not hs:
                continue
            avg = sum(hs) // len(hs)
            if res and res[-1][1] == x and res[-1][2] == avg:
                res[-1][1] = x + 1
            else:
                res.append([x, x + 1, avg])
        return res
`)});
};
