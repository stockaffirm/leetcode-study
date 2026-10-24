module.exports=({alt})=>{
const C=s=>s.replace(/^\n/,"").replace(/\n$/,"").split("\n");
// ---- Meta (1/8)
alt(1762,{name:"Monotonic stack from the left",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"Keep a stack of buildings; a new building pops every earlier one that is not taller.",code:C(`
class Solution:
    def findBuildings(self, heights):
        st = []
        for i, h in enumerate(heights):
            while st and heights[st[-1]] <= h:
                st.pop()
            st.append(i)
        return st
`)});
alt(938,{name:"Iterative stack",tag:"Alternative",time:"O(n)",space:"O(h)",explain:"The same pruning with an explicit stack instead of recursion.",code:C(`
class Solution:
    def rangeSumBST(self, root, low, high):
        total = 0
        stack = [root]
        while stack:
            node = stack.pop()
            if not node:
                continue
            if low <= node.val <= high:
                total += node.val
            if node.val > low:
                stack.append(node.left)
            if node.val < high:
                stack.append(node.right)
        return total
`)});
alt(346,{name:"Slice the last size numbers",tag:"Brute force",time:"O(size) per call",space:"O(n)",explain:"Store every number and average the last `size` of them each time.",code:C(`
class MovingAverage:
    def __init__(self, size):
        self.size = size
        self.a = []
    def next(self, val):
        self.a.append(val)
        w = self.a[-self.size:]
        return sum(w) / len(w)
`)});
alt(791,{name:"Sort with a rank key",tag:"Pythonic",time:"O(n log n)",space:"O(n)",explain:"Sort the letters by their position in order; letters not in order get the last rank (a stable sort keeps their order).",code:C(`
class Solution:
    def customSortString(self, order, s):
        rank = {ch: i for i, ch in enumerate(order)}
        return "".join(sorted(s, key=lambda c: rank.get(c, len(order))))
`)});
alt(921,{name:"Stack of unmatched brackets",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"Push brackets and cancel '(' with a following ')'. What is left needs one addition each.",code:C(`
class Solution:
    def minAddToMakeValid(self, s):
        st = []
        for ch in s:
            if ch == ")" and st and st[-1] == "(":
                st.pop()
            else:
                st.append(ch)
        return len(st)
`)});
alt(1539,{name:"Walk the numbers 1, 2, 3 …",tag:"Brute force",time:"O(n + k)",space:"O(1)",explain:"Count up and check each number against the array until the k-th missing one.",code:C(`
class Solution:
    def findKthPositive(self, arr, k):
        cur = i = missing = 0
        while True:
            cur += 1
            if i < len(arr) and arr[i] == cur:
                i += 1
            else:
                missing += 1
                if missing == k:
                    return cur
`)});
alt(498,{name:"Simulate the bouncing walk",tag:"Alternative",time:"O(m·n)",space:"O(1)",explain:"Move up-right or down-left and turn at the borders.",code:C(`
class Solution:
    def findDiagonalOrder(self, mat):
        m, n = len(mat), len(mat[0])
        res = []
        i = j = 0
        up = True
        for _ in range(m * n):
            res.append(mat[i][j])
            if up:
                if j == n - 1:
                    i += 1
                    up = False
                elif i == 0:
                    j += 1
                    up = False
                else:
                    i -= 1
                    j += 1
            else:
                if i == m - 1:
                    j += 1
                    up = True
                elif j == 0:
                    i += 1
                    up = True
                else:
                    i += 1
                    j -= 1
        return res
`)});
alt(708,{name:"Find the largest node first",tag:"Alternative",time:"O(n)",space:"O(1)",explain:"Walk to the largest node (the one before the wrap). If the value is the new maximum or minimum insert there, else find the gap starting from the smallest.",code:C(`
class Solution:
    def insert(self, head, insertVal):
        node = Node(insertVal)
        if not head:
            node.next = node
            return node
        cur = head
        while cur.next is not head and cur.val <= cur.next.val:
            cur = cur.next
        if insertVal >= cur.val or insertVal <= cur.next.val:
            node.next = cur.next
            cur.next = node
        else:
            cur = cur.next
            while cur.next.val < insertVal:
                cur = cur.next
            node.next = cur.next
            cur.next = node
        return head
`)});
alt(426,{name:"Iterative in-order with a stack",tag:"Alternative",time:"O(n)",space:"O(h)",explain:"The same linking with an explicit stack.",code:C(`
class Solution:
    def treeToDoublyList(self, root):
        if not root:
            return None
        stack = []
        cur = root
        first = prev = None
        while stack or cur:
            while cur:
                stack.append(cur)
                cur = cur.left
            cur = stack.pop()
            if prev:
                prev.right = cur
                cur.left = prev
            else:
                first = cur
            prev = cur
            cur = cur.right
        first.left = prev
        prev.right = first
        return first
`)});
alt(1216,{name:"Memoized minimum deletions",tag:"Alternative",time:"O(n²)",space:"O(n²)",explain:"go(i, j) is the number of deletions needed to make s[i..j] a palindrome.",code:C(`
class Solution:
    def isValidPalindrome(self, s, k):
        n = len(s)
        @lru_cache(None)
        def go(i, j):
            if i >= j:
                return 0
            if s[i] == s[j]:
                return go(i + 1, j - 1)
            return 1 + min(go(i + 1, j), go(i, j - 1))
        return go(0, n - 1) <= k
`)});
alt(398,{name:"Index lists per value",tag:"Alternative",time:"pick O(1)",space:"O(n)",explain:"Remember the indices of every value once and pick a random one from the list.",code:C(`
class Solution:
    def __init__(self, nums):
        self.pos = defaultdict(list)
        for i, x in enumerate(nums):
            self.pos[x].append(i)
    def pick(self, target):
        return random.choice(self.pos[target])
`)});
alt(958,{name:"Heap-style positions",tag:"Alternative",time:"O(n)",space:"O(h)",explain:"Number the nodes like a heap (children of i are 2i and 2i+1). A complete tree uses positions 1…n with no holes.",code:C(`
class Solution:
    def isCompleteTree(self, root):
        self.cnt = 0
        self.mx = 0
        def dfs(node, i):
            if not node:
                return
            self.cnt += 1
            self.mx = max(self.mx, i)
            dfs(node.left, 2 * i)
            dfs(node.right, 2 * i + 1)
        dfs(root, 1)
        return self.cnt == self.mx
`)});
alt(163,{name:"Keep the next expected number",tag:"Alternative",time:"O(n)",space:"O(1)",explain:"lo is the first number not yet seen; a number above it means a gap.",code:C(`
class Solution:
    def findMissingRanges(self, nums, lower, upper):
        res = []
        lo = lower
        for x in nums:
            if x > lo:
                res.append([lo, x - 1])
            lo = x + 1
        if lo <= upper:
            res.append([lo, upper])
        return res
`)});
alt(825,{name:"Test every pair of people",tag:"Brute force",time:"O(n²)",space:"O(1)",explain:"Check the three rules for every ordered pair of different people.",code:C(`
class Solution:
    def numFriendRequests(self, ages):
        res = 0
        for i, a in enumerate(ages):
            for j, b in enumerate(ages):
                if i != j and not (b <= 0.5 * a + 7 or b > a):
                    res += 1
        return res
`)});
alt(301,{name:"DFS with the minimum removals known",tag:"Alternative",time:"O(2ⁿ)",space:"O(n)",explain:"First count how many '(' and ')' must go, then try keeping or removing each bracket.",code:C(`
class Solution:
    def removeInvalidParentheses(self, s):
        l = r = 0
        for ch in s:
            if ch == "(":
                l += 1
            elif ch == ")":
                if l:
                    l -= 1
                else:
                    r += 1
        res = set()
        def dfs(i, l, r, bal, cur):
            if i == len(s):
                if l == 0 and r == 0 and bal == 0:
                    res.add(cur)
                return
            ch = s[i]
            if ch == "(":
                if l > 0:
                    dfs(i + 1, l - 1, r, bal, cur)
                dfs(i + 1, l, r, bal + 1, cur + ch)
            elif ch == ")":
                if r > 0:
                    dfs(i + 1, l, r - 1, bal, cur)
                if bal > 0:
                    dfs(i + 1, l, r, bal - 1, cur + ch)
            else:
                dfs(i + 1, l, r, bal, cur + ch)
        dfs(0, l, r, 0, "")
        return list(res)
`)});
alt(766,{name:"One value per diagonal",tag:"Alternative",time:"O(m·n)",space:"O(m+n)",explain:"Cells of one diagonal share r − c; remember the first value and compare the rest.",code:C(`
class Solution:
    def isToeplitzMatrix(self, matrix):
        seen = {}
        for r, row in enumerate(matrix):
            for c, v in enumerate(row):
                if seen.setdefault(r - c, v) != v:
                    return False
        return True
`)});
alt(16,{name:"Try every triple",tag:"Brute force",time:"O(n³)",space:"O(1)",explain:"Look at every triple of numbers and keep the sum closest to the target.",code:C(`
class Solution:
    def threeSumClosest(self, nums, target):
        return sum(min(combinations(nums, 3), key=lambda c: abs(sum(c) - target)))
`)});
alt(246,{name:"Rotate the whole number and compare",tag:"Pythonic",time:"O(n)",space:"O(n)",explain:"Reverse the digits, replace each by its rotation and compare with the original.",code:C(`
class Solution:
    def isStrobogrammatic(self, num):
        pairs = {"0": "0", "1": "1", "6": "9", "8": "8", "9": "6"}
        return "".join(pairs.get(c, "?") for c in reversed(num)) == num
`)});
alt(43,{name:"Python big integers",tag:"Pythonic",time:"O(m·n)",space:"O(m+n)",explain:"Convert to integers, multiply and convert back (not allowed in the interview, but handy to check).",code:C(`
class Solution:
    def multiply(self, num1, num2):
        return str(int(num1) * int(num2))
`)});
alt(51,{name:"Try every column permutation",tag:"Brute force",time:"O(n! · n)",space:"O(n)",explain:"A permutation of columns puts one queen per row and column; only the diagonals need checking.",code:C(`
class Solution:
    def solveNQueens(self, n):
        res = []
        for perm in permutations(range(n)):
            if len({r + c for r, c in enumerate(perm)}) == n and len({r - c for r, c in enumerate(perm)}) == n:
                res.append(["." * c + "Q" + "." * (n - c - 1) for c in perm])
        return res
`)});
alt(536,{name:"Stack parser",tag:"Alternative",time:"O(n)",space:"O(h)",explain:"Push each new node; a ')' closes the node on top. The first free child slot of the top node gets the next node.",code:C(`
class Solution:
    def str2tree(self, s):
        stack = []
        i = 0
        while i < len(s):
            if s[i] == ")":
                stack.pop()
                i += 1
            elif s[i] == "(":
                i += 1
            else:
                j = i
                while j < len(s) and (s[j] == "-" or s[j].isdigit()):
                    j += 1
                node = TreeNode(int(s[i:j]))
                i = j
                if stack:
                    parent = stack[-1]
                    if parent.left is None:
                        parent.left = node
                    else:
                        parent.right = node
                stack.append(node)
        return stack[0] if stack else None
`)});
alt(131,{name:"Memoized partitions of every suffix",tag:"Alternative",time:"O(n · 2ⁿ)",space:"O(n · 2ⁿ)",explain:"go(i) returns all palindrome partitions of s[i:].",code:C(`
class Solution:
    def partition(self, s):
        n = len(s)
        @lru_cache(None)
        def go(i):
            if i == n:
                return [[]]
            res = []
            for j in range(i + 1, n + 1):
                t = s[i:j]
                if t == t[::-1]:
                    for rest in go(j):
                        res.append([t] + rest)
            return res
        return go(0)
`)});
alt(525,{name:"Check every subarray",tag:"Brute force",time:"O(n²)",space:"O(1)",explain:"Extend each start and track the balance of 1s and 0s.",code:C(`
class Solution:
    def findMaxLength(self, nums):
        best = 0
        for i in range(len(nums)):
            bal = 0
            for j in range(i, len(nums)):
                bal += 1 if nums[j] else -1
                if bal == 0:
                    best = max(best, j - i + 1)
        return best
`)});
alt(852,{name:"Maximum with index()",tag:"Pythonic",time:"O(n)",space:"O(1)",explain:"The peak is the maximum of the array.",code:C(`
class Solution:
    def peakIndexInMountainArray(self, arr):
        return arr.index(max(arr))
`)});
alt(1868,{name:"Expand, multiply, re-compress",tag:"Brute force",time:"O(total length)",space:"O(total length)",explain:"Write out both arrays in full, multiply position by position, and merge equal neighbours again.",code:C(`
class Solution:
    def findRLEArray(self, encoded1, encoded2):
        a = [v for v, f in encoded1 for _ in range(f)]
        b = [v for v, f in encoded2 for _ in range(f)]
        res = []
        for x, y in zip(a, b):
            p = x * y
            if res and res[-1][0] == p:
                res[-1][1] += 1
            else:
                res.append([p, 1])
        return res
`)});
alt(303,{name:"Sum the slice each time",tag:"Brute force",time:"O(n) per query",space:"O(n)",explain:"Keep the array and add up the range on every query.",code:C(`
class NumArray:
    def __init__(self, nums):
        self.nums = nums
    def sumRange(self, left, right):
        return sum(self.nums[left:right + 1])
`)});
};
