module.exports=({alt})=>{
const C=s=>s.replace(/^\n/,"").replace(/\n$/,"").split("\n");
// ---- Meta (2/8)
alt(419,{name:"Flood fill each ship",tag:"Alternative",time:"O(m·n)",space:"O(m·n)",explain:"Count connected groups of X by sinking each one with a DFS.",code:C(`
class Solution:
    def countBattleships(self, board):
        m, n = len(board), len(board[0])
        count = 0
        for si in range(m):
            for sj in range(n):
                if board[si][sj] == "X":
                    count += 1
                    stack = [(si, sj)]
                    board[si][sj] = "."
                    while stack:
                        i, j = stack.pop()
                        for a, b in ((i + 1, j), (i - 1, j), (i, j + 1), (i, j - 1)):
                            if 0 <= a < m and 0 <= b < n and board[a][b] == "X":
                                board[a][b] = "."
                                stack.append((a, b))
        return count
`)});
alt(529,{name:"BFS reveal",tag:"Alternative",time:"O(m·n)",space:"O(m·n)",explain:"The same reveal rules with a queue instead of recursion.",code:C(`
class Solution:
    def updateBoard(self, board, click):
        m, n = len(board), len(board[0])
        r, c = click
        if board[r][c] == "M":
            board[r][c] = "X"
            return board
        q = deque([(r, c)])
        seen = {(r, c)}
        while q:
            i, j = q.popleft()
            nbrs = [(a, b) for a in range(i - 1, i + 2) for b in range(j - 1, j + 2)
                    if 0 <= a < m and 0 <= b < n and (a, b) != (i, j)]
            mines = sum(board[a][b] == "M" for a, b in nbrs)
            if mines:
                board[i][j] = str(mines)
            else:
                board[i][j] = "B"
                for a, b in nbrs:
                    if (a, b) not in seen and board[a][b] == "E":
                        seen.add((a, b))
                        q.append((a, b))
        return board
`)});
alt(1060,{name:"Walk the gaps",tag:"Brute force",time:"O(n)",space:"O(1)",explain:"Look at the gap between each pair of neighbours and use it up until k is covered.",code:C(`
class Solution:
    def missingElement(self, nums, k):
        for i in range(1, len(nums)):
            gap = nums[i] - nums[i - 1] - 1
            if k <= gap:
                return nums[i - 1] + k
            k -= gap
        return nums[-1] + k
`)});
alt(1424,{name:"BFS from the corner",tag:"Alternative",time:"O(total cells)",space:"O(width)",explain:"Start at (0,0); a cell adds the cell below it (only from column 0) and the cell to its right to the queue.",code:C(`
class Solution:
    def findDiagonalOrder(self, nums):
        q = deque([(0, 0)])
        res = []
        while q:
            i, j = q.popleft()
            res.append(nums[i][j])
            if j == 0 and i + 1 < len(nums):
                q.append((i + 1, 0))
            if j + 1 < len(nums[i]):
                q.append((i, j + 1))
        return res
`)});
alt(2235,{name:"Add with bit tricks",tag:"Bit trick",time:"O(1)",space:"O(1)",explain:"XOR adds without carries; AND shifted left gives the carries. Repeat until no carry is left.",code:C(`
class Solution:
    def sum(self, num1, num2):
        mask = 0xFFFFFFFF
        a, b = num1, num2
        while b:
            a, b = (a ^ b) & mask, ((a & b) << 1) & mask
        return a if a <= 0x7FFFFFFF else ~(a ^ mask)
`)});
alt(1209,{name:"Remove runs until nothing changes",tag:"Brute force",time:"O(n²/k)",space:"O(n)",explain:"Scan for k equal letters in a row, delete them, and start again.",code:C(`
class Solution:
    def removeDuplicates(self, s, k):
        changed = True
        while changed:
            changed = False
            for i in range(len(s) - k + 1):
                if s[i:i + k] == s[i] * k:
                    s = s[:i] + s[i + k:]
                    changed = True
                    break
        return s
`)});
alt(90,{name:"Extend only the newest subsets",tag:"Alternative",time:"O(n · 2ⁿ)",space:"O(n · 2ⁿ)",explain:"For a repeated number add it only to the subsets created in the previous step.",code:C(`
class Solution:
    def subsetsWithDup(self, nums):
        nums.sort()
        res = [[]]
        prev_size = 0
        for i, x in enumerate(nums):
            start = prev_size if i and x == nums[i - 1] else 0
            prev_size = len(res)
            res += [s + [x] for s in res[start:]]
        return res
`)});
alt(485,{name:"Split on zeros",tag:"Pythonic",time:"O(n)",space:"O(n)",explain:"Join the numbers into a string, split at '0' and take the longest piece.",code:C(`
class Solution:
    def findMaxConsecutiveOnes(self, nums):
        return max(len(g) for g in "".join(map(str, nums)).split("0"))
`)});
alt(1094,{name:"Sort the events",tag:"Alternative",time:"O(n log n)",space:"O(n)",explain:"Make an event for every pick-up and drop-off and replay them in time order (drop-offs first at equal times).",code:C(`
class Solution:
    def carPooling(self, trips, capacity):
        events = []
        for n, a, b in trips:
            events.append((a, n))
            events.append((b, -n))
        events.sort()
        cur = 0
        for _, d in events:
            cur += d
            if cur > capacity:
                return False
        return True
`)});
alt(85,{name:"Height / left / right DP per row",tag:"Alternative",time:"O(m·n)",space:"O(n)",explain:"For every column keep its height and how far the rectangle of that height can stretch left and right.",code:C(`
class Solution:
    def maximalRectangle(self, matrix):
        if not matrix:
            return 0
        n = len(matrix[0])
        h, l, r = [0] * n, [0] * n, [n] * n
        best = 0
        for row in matrix:
            cur_l, cur_r = 0, n
            for j in range(n):
                h[j] = h[j] + 1 if row[j] == "1" else 0
            for j in range(n):
                if row[j] == "1":
                    l[j] = max(l[j], cur_l)
                else:
                    l[j] = 0
                    cur_l = j + 1
            for j in range(n - 1, -1, -1):
                if row[j] == "1":
                    r[j] = min(r[j], cur_r)
                else:
                    r[j] = n
                    cur_r = j
            for j in range(n):
                best = max(best, h[j] * (r[j] - l[j]))
        return best
`)});
alt(94,{name:"Recursion",tag:"Alternative",time:"O(n)",space:"O(h)",explain:"Left subtree, then the node, then the right subtree.",code:C(`
class Solution:
    def inorderTraversal(self, root):
        res = []
        def go(node):
            if node:
                go(node.left)
                res.append(node.val)
                go(node.right)
        go(root)
        return res
`)});
alt(451,{name:"Bucket by count",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"Put each letter into the bucket of its count and read the buckets from the largest down.",code:C(`
class Solution:
    def frequencySort(self, s):
        cnt = Counter(s)
        buckets = defaultdict(list)
        for ch, c in cnt.items():
            buckets[c].append(ch * c)
        res = []
        for c in range(len(s), 0, -1):
            res += buckets.get(c, [])
        return "".join(res)
`)});
alt(1443,{name:"Mark apple-carrying nodes bottom-up",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"Find each node's parent, push 'needs a visit' from apples up to the root, then every marked non-root node costs 2.",code:C(`
class Solution:
    def minTime(self, n, edges, hasApple):
        g = defaultdict(list)
        for a, b in edges:
            g[a].append(b)
            g[b].append(a)
        parent = {0: -1}
        order = [0]
        for u in order:
            for v in g[u]:
                if v not in parent:
                    parent[v] = u
                    order.append(v)
        need = list(hasApple)
        for u in reversed(order):
            if need[u] and parent[u] != -1:
                need[parent[u]] = True
        return 2 * sum(1 for u in order if u and need[u])
`)});
alt(1929,{name:"Index with modulo",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"Build 2n entries by reading the array with i % n.",code:C(`
class Solution:
    def getConcatenation(self, nums):
        n = len(nums)
        return [nums[i % n] for i in range(2 * n)]
`)});
alt(29,{name:"Subtract one divisor at a time",tag:"Brute force",time:"O(a / b)",space:"O(1)",explain:"Count how many times the divisor can be subtracted (too slow for big inputs, but easy to see).",code:C(`
class Solution:
    def divide(self, dividend, divisor):
        INT_MAX, INT_MIN = 2 ** 31 - 1, -2 ** 31
        if dividend == INT_MIN and divisor == -1:
            return INT_MAX
        neg = (dividend < 0) != (divisor < 0)
        a, b = abs(dividend), abs(divisor)
        res = 0
        while a >= b:
            a -= b
            res += 1
        return -res if neg else res
`)});
alt(38,{name:"Recursion on n",tag:"Alternative",time:"O(2ⁿ)",space:"O(2ⁿ)",explain:"Build term n−1 first and read it run by run.",code:C(`
class Solution:
    def countAndSay(self, n):
        if n == 1:
            return "1"
        prev = self.countAndSay(n - 1)
        out = []
        i = 0
        while i < len(prev):
            j = i
            while j < len(prev) and prev[j] == prev[i]:
                j += 1
            out.append(str(j - i) + prev[i])
            i = j
        return "".join(out)
`)});
alt(1752,{name:"Compare with every rotation of the sorted array",tag:"Brute force",time:"O(n²)",space:"O(n)",explain:"Sort a copy and check whether any rotation of the input equals it.",code:C(`
class Solution:
    def check(self, nums):
        s = sorted(nums)
        return any(nums[i:] + nums[:i] == s for i in range(len(nums)))
`)});
alt(865,{name:"Compare the depths of both sides",tag:"Alternative",time:"O(n²) worst",space:"O(h)",explain:"From the root go towards the deeper side; stop where both sides are equally deep.",code:C(`
class Solution:
    def subtreeWithAllDeepest(self, root):
        def depth(n):
            return 0 if not n else 1 + max(depth(n.left), depth(n.right))
        node = root
        while True:
            l, r = depth(node.left), depth(node.right)
            if l == r:
                return node
            node = node.left if l > r else node.right
`)});
alt(1123,{name:"Compare the depths of both sides",tag:"Alternative",time:"O(n²) worst",space:"O(h)",explain:"From the root go towards the deeper side; stop where both sides are equally deep.",code:C(`
class Solution:
    def lcaDeepestLeaves(self, root):
        def depth(n):
            return 0 if not n else 1 + max(depth(n.left), depth(n.right))
        node = root
        while True:
            l, r = depth(node.left), depth(node.right)
            if l == r:
                return node
            node = node.left if l > r else node.right
`)});
alt(703,{name:"Sorted list with insort",tag:"Alternative",time:"O(n) per add",space:"O(n)",explain:"Keep all numbers sorted; the k-th largest is a fixed position from the end.",code:C(`
class KthLargest:
    def __init__(self, k, nums):
        self.k = k
        self.a = sorted(nums)
    def add(self, val):
        insort(self.a, val)
        return self.a[-self.k]
`)});
alt(796,{name:"Try every rotation",tag:"Brute force",time:"O(n²)",space:"O(n)",explain:"Rotate s by every amount and compare with goal.",code:C(`
class Solution:
    def rotateString(self, s, goal):
        return len(s) == len(goal) and any(s[i:] + s[:i] == goal for i in range(len(s)))
`)});
alt(689,{name:"Try every triple of windows",tag:"Brute force",time:"O(n³)",space:"O(n)",explain:"Compute the window sums, then test every non-overlapping triple of window starts.",code:C(`
class Solution:
    def maxSumOfThreeSubarrays(self, nums, k):
        n = len(nums)
        w = [sum(nums[:k])]
        for i in range(1, n - k + 1):
            w.append(w[-1] + nums[i + k - 1] - nums[i - 1])
        m = len(w)
        res, top = None, -1
        for i in range(m):
            for j in range(i + k, m):
                for l in range(j + k, m):
                    t = w[i] + w[j] + w[l]
                    if t > top:
                        top = t
                        res = [i, j, l]
        return res
`)});
alt(784,{name:"Backtracking",tag:"Alternative",time:"O(n · 2ⁿ)",space:"O(n)",explain:"Go through the string; at a letter try both cases.",code:C(`
class Solution:
    def letterCasePermutation(self, s):
        res = []
        def go(i, cur):
            if i == len(s):
                res.append("".join(cur))
                return
            if s[i].isalpha():
                for c in (s[i].lower(), s[i].upper()):
                    cur.append(c)
                    go(i + 1, cur)
                    cur.pop()
            else:
                cur.append(s[i])
                go(i + 1, cur)
                cur.pop()
        go(0, [])
        return res
`)});
alt(905,{name:"Two passes (stable)",tag:"Pythonic",time:"O(n)",space:"O(n)",explain:"Write the even numbers first and then the odd ones, keeping their order.",code:C(`
class Solution:
    def sortArrayByParity(self, nums):
        return [x for x in nums if x % 2 == 0] + [x for x in nums if x % 2 == 1]
`)});
alt(1891,{name:"Try lengths from the longest down",tag:"Brute force",time:"O(n · max)",space:"O(1)",explain:"Start at the longest ribbon and shorten the target length until k pieces fit.",code:C(`
class Solution:
    def maxLength(self, ribbons, k):
        for L in range(max(ribbons), 0, -1):
            if sum(r // L for r in ribbons) >= k:
                return L
        return 0
`)});
alt(325,{name:"Check every subarray",tag:"Brute force",time:"O(n²)",space:"O(1)",explain:"For every start extend the end and keep the longest range whose sum is k.",code:C(`
class Solution:
    def maxSubArrayLen(self, nums, k):
        best = 0
        for i in range(len(nums)):
            s = 0
            for j in range(i, len(nums)):
                s += nums[j]
                if s == k:
                    best = max(best, j - i + 1)
        return best
`)});
};
