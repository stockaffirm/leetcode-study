const {lite}=require("./lib");
const C=s=>s.replace(/^\n/,"").replace(/\n$/,"").split("\n");
const ARR="Array / String",HM="Hash Map / Set",STK="Stack / Monotonic Stack",BT="Binary Tree",GR="Graph",HP="Heap",DP="Dynamic Programming",GD="Greedy",MB="Math / Bit Manipulation",BS="Binary Search",SRT="Sorting",SW="Sliding Window",MX="Matrix",UF="Union Find / Segment Tree",TP="Two Pointers",IV="Intervals",BTK="Backtracking",DS="Design",LL="Linked List",TR="Trie";
// ---- Meta (2/8)
lite({id:419,slug:"battleships-in-a-board",title:"Battleships in a Board",level:"Medium",topic:MX,name:"Count the top-left corner of each ship",
w:"The board has one horizontal ship (the top-left X plus its neighbour is 1 ship) and one vertical ship on the right → 2.",k:"Ships never touch, so every ship has exactly one cell with no 'X' above it and none to its left. Count those cells.",
i:'board = [["X",".",".","X"],[".",".",".","X"],[".",".",".","X"]]',o:"2",time:"O(m·n)",space:"O(1)",
code:C(`
class Solution:
    def countBattleships(self, board):
        count = 0
        for i, row in enumerate(board):
            for j, c in enumerate(row):
                if c == "X" and (i == 0 or board[i - 1][j] != "X") and (j == 0 or board[i][j - 1] != "X"):
                    count += 1
        return count
`)});
lite({id:529,slug:"minesweeper",title:"Minesweeper",level:"Medium",topic:MX,name:"DFS reveal",
w:"Clicking the bottom-left empty cell has no mine around it, so it opens ('B') and the opening spreads to its neighbours until cells next to the mine show numbers.",k:"Clicking a mine ends the game ('X'). Otherwise count the mines around the clicked cell. If there are some, show the number; if none, mark it 'B' and reveal all its unrevealed neighbours the same way.",
i:'board 3×3 with one mine "M" at the right of the middle row, click = [2,0]',o:'[["B","1","E"],["B","1","M"],["B","1","E"]]',time:"O(m·n)",space:"O(m·n)",
code:C(`
class Solution:
    def updateBoard(self, board, click):
        m, n = len(board), len(board[0])
        r, c = click
        if board[r][c] == "M":
            board[r][c] = "X"
            return board
        def dfs(i, j):
            if not (0 <= i < m and 0 <= j < n) or board[i][j] != "E":
                return
            mines = sum(0 <= a < m and 0 <= b < n and board[a][b] == "M"
                        for a in range(i - 1, i + 2) for b in range(j - 1, j + 2))
            if mines:
                board[i][j] = str(mines)
                return
            board[i][j] = "B"
            for a in range(i - 1, i + 2):
                for b in range(j - 1, j + 2):
                    dfs(a, b)
        dfs(r, c)
        return board
`)});
lite({id:1060,slug:"missing-element-in-sorted-array",title:"Missing Element in Sorted Array",level:"Medium",topic:BS,name:"Binary search on missing count",
w:"[4,7,9,10]: the missing numbers after 4 are 5, 6, 8, 11 …; the 1st missing is 5.",k:"At index i the numbers missing before nums[i] are nums[i] − nums[0] − i, which only grows. Binary search the first index where that reaches k, then count back from there.",
i:"nums = [4,7,9,10], k = 1",o:"5",time:"O(log n)",space:"O(1)",
code:C(`
class Solution:
    def missingElement(self, nums, k):
        lo, hi = 0, len(nums)
        while lo < hi:
            mid = (lo + hi) // 2
            if nums[mid] - nums[0] - mid < k:
                lo = mid + 1
            else:
                hi = mid
        return nums[0] + lo - 1 + k
`)});
lite({id:1424,slug:"diagonal-traverse-ii",title:"Diagonal Traverse II",level:"Medium",topic:MX,name:"Group by i + j, rows bottom-up",
w:"Diagonal 1 holds 2 and 4; going bottom-left to top-right gives 4 then 2. The result is 1, 4, 2, 7, 5, 3, 8, 6, 9.",k:"Cells on a diagonal share i + j. Walk the rows from the bottom up and append each value to its diagonal's list; then each diagonal is already ordered bottom-left to top-right. Join the diagonals in order (works for ragged rows too).",
i:"nums = [[1,2,3],[4,5,6],[7,8,9]]",o:"[1,4,2,7,5,3,8,6,9]",time:"O(total cells)",space:"O(total cells)",
code:C(`
class Solution:
    def findDiagonalOrder(self, nums):
        diags = defaultdict(list)
        for i in range(len(nums) - 1, -1, -1):
            for j, v in enumerate(nums[i]):
                diags[i + j].append(v)
        res = []
        d = 0
        while d in diags:
            res += diags[d]
            d += 1
        return res
`)});
lite({id:2235,slug:"add-two-integers",title:"Add Two Integers",level:"Easy",topic:MB,name:"Direct sum",
w:"12 + 5 = 17.",k:"Return num1 + num2.",
i:"num1 = 12, num2 = 5",o:"17",time:"O(1)",space:"O(1)",
code:C(`
class Solution:
    def sum(self, num1, num2):
        return num1 + num2
`)});
lite({id:1209,slug:"remove-all-adjacent-duplicates-in-string-ii",title:"Remove All Adjacent Duplicates in String II",level:"Medium",topic:STK,name:"Stack of (letter, run length)",
w:"'deeedbbcccbdaa', k=3: remove eee → 'ddbbcccbdaa'; remove ccc → 'ddbbbdaa'; remove bbb → 'dddaa'; remove ddd → 'aa'.",k:"Keep a stack of [letter, count]. A letter equal to the top increases its count; when the count reaches k the whole run is popped. Whatever stays is the answer.",
i:'s = "deeedbbcccbdaa", k = 3',o:'"aa"',time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def removeDuplicates(self, s, k):
        st = []
        for ch in s:
            if st and st[-1][0] == ch:
                st[-1][1] += 1
                if st[-1][1] == k:
                    st.pop()
            else:
                st.append([ch, 1])
        return "".join(c * n for c, n in st)
`)});
lite({id:90,slug:"subsets-ii",title:"Subsets II",level:"Medium",topic:BTK,name:"Backtracking that skips duplicates",
w:"[1,2,2] has 6 different subsets: [], [1], [1,2], [1,2,2], [2], [2,2].",k:"Sort the numbers so equal ones sit together. While choosing the next element at one depth, skip it if it equals the previous choice at the same depth — that would produce a duplicate subset.",
i:"nums = [1,2,2]",o:"[[],[1],[1,2],[1,2,2],[2],[2,2]]",time:"O(n · 2ⁿ)",space:"O(n)",
code:C(`
class Solution:
    def subsetsWithDup(self, nums):
        nums.sort()
        res, path = [], []
        def go(start):
            res.append(path[:])
            for i in range(start, len(nums)):
                if i > start and nums[i] == nums[i - 1]:
                    continue
                path.append(nums[i])
                go(i + 1)
                path.pop()
        go(0)
        return res
`)});
lite({id:485,slug:"max-consecutive-ones",title:"Max Consecutive Ones",level:"Easy",topic:ARR,name:"Running streak",
w:"[1,1,0,1,1,1]: the longest run of 1s has length 3.",k:"Count the current run of 1s, reset it at every 0, and remember the largest run.",
i:"nums = [1,1,0,1,1,1]",o:"3",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def findMaxConsecutiveOnes(self, nums):
        best = cur = 0
        for x in nums:
            cur = cur + 1 if x else 0
            best = max(best, cur)
        return best
`)});
lite({id:1094,slug:"car-pooling",title:"Car Pooling",level:"Medium",topic:IV,name:"Passenger changes on a timeline",
w:"Capacity 4: 2 people ride from 1 to 5 and 3 more from 3 to 7. Between 3 and 5 there are 5 people → more than 4 → false.",k:"Mark +people at every pick-up point and −people at every drop-off point. Sweep the points in order with a running total; if it ever exceeds the capacity the trip is impossible.",
i:"trips = [[2,1,5],[3,3,7]], capacity = 4",o:"false",time:"O(n + max stop)",space:"O(max stop)",
code:C(`
class Solution:
    def carPooling(self, trips, capacity):
        timeline = [0] * (max(t[2] for t in trips) + 1)
        for n, a, b in trips:
            timeline[a] += n
            timeline[b] -= n
        cur = 0
        for x in timeline:
            cur += x
            if cur > capacity:
                return False
        return True
`)});
lite({id:85,slug:"maximal-rectangle",title:"Maximal Rectangle",level:"Hard",topic:STK,name:"Histogram per row + monotonic stack",
w:"The biggest all-1s rectangle in the grid has area 6 (2 rows × 3 columns).",k:"Treat each row as the bottom of a histogram where each column's height is the number of consecutive 1s above it. The largest rectangle in each histogram (Largest Rectangle in Histogram, solved with a monotonic stack) is a candidate.",
i:'matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]',o:"6",time:"O(m·n)",space:"O(n)",
code:C(`
class Solution:
    def maximalRectangle(self, matrix):
        if not matrix:
            return 0
        n = len(matrix[0])
        h = [0] * (n + 1)
        best = 0
        for row in matrix:
            for j in range(n):
                h[j] = h[j] + 1 if row[j] == "1" else 0
            st = [-1]
            for j in range(n + 1):
                while st[-1] != -1 and h[st[-1]] >= h[j]:
                    height = h[st.pop()]
                    best = max(best, height * (j - st[-1] - 1))
                st.append(j)
        return best
`)});
lite({id:94,slug:"binary-tree-inorder-traversal",title:"Binary Tree Inorder Traversal",level:"Easy",topic:BT,name:"Iterative with a stack",
w:"Tree 1 → right child 2 → left child 3. In-order visits left, node, right: 1, 3, 2.",k:"Go as far left as possible, pushing nodes on a stack. Pop one, record it, then continue with its right child.",
i:"root = [1,null,2,3]",o:"[1, 3, 2]",time:"O(n)",space:"O(h)",
code:C(`
class Solution:
    def inorderTraversal(self, root):
        res, stack = [], []
        cur = root
        while cur or stack:
            while cur:
                stack.append(cur)
                cur = cur.left
            cur = stack.pop()
            res.append(cur.val)
            cur = cur.right
        return res
`)});
lite({id:451,slug:"sort-characters-by-frequency",title:"Sort Characters By Frequency",level:"Medium",topic:HM,name:"Count, then write the most frequent first",
w:"'tree': e appears twice, so it goes first: 'ee' then 't' and 'r' → 'eetr' ('eert' is also accepted).",k:"Count the characters and write each one repeated by its count, from the most frequent to the least.",
i:'s = "tree"',o:'"eetr" (or "eert")',time:"O(n log n)",space:"O(n)",
code:C(`
class Solution:
    def frequencySort(self, s):
        return "".join(ch * c for ch, c in Counter(s).most_common())
`)});
lite({id:1443,slug:"minimum-time-to-collect-all-apples-in-a-tree",title:"Minimum Time to Collect All Apples in a Tree",level:"Medium",topic:GR,name:"DFS: 2 per useful edge",
w:"Apples at 2, 4 and 5. Every edge that leads to an apple is walked down and back (2 seconds): 0–1, 1–4, 1–5, 0–2 → 4 edges × 2 = 8.",k:"An edge is worth walking only if its lower side contains an apple. DFS from the root: a child's subtree costs (its own cost + 2) when it has an apple anywhere inside it.",
i:"n=7, edges=[[0,1],[0,2],[1,4],[1,5],[2,3],[2,6]], hasApple=[F,F,T,F,T,T,F]",o:"8",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def minTime(self, n, edges, hasApple):
        g = defaultdict(list)
        for a, b in edges:
            g[a].append(b)
            g[b].append(a)
        def dfs(u, p):
            t = 0
            for v in g[u]:
                if v != p:
                    sub = dfs(v, u)
                    if sub or hasApple[v]:
                        t += sub + 2
            return t
        return dfs(0, -1)
`)});
lite({id:1929,slug:"concatenation-of-array",title:"Concatenation of Array",level:"Easy",topic:ARR,name:"Write the array twice",
w:"[1,2,1] followed by [1,2,1] is [1,2,1,1,2,1].",k:"The answer is the array joined with itself.",
i:"nums = [1,2,1]",o:"[1,2,1,1,2,1]",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def getConcatenation(self, nums):
        return nums + nums
`)});
lite({id:29,slug:"divide-two-integers",title:"Divide Two Integers",level:"Medium",topic:MB,name:"Subtract doubled divisors",
w:"10 ÷ 3: subtract 3·2 = 6 (adds 2), then 3 (adds 1) → 3, with 1 left over.",k:"Divide positives and fix the sign at the end. Repeatedly double the divisor (by shifting) as long as it still fits into what is left, subtract the biggest such multiple and add its multiplier to the answer. Watch the 32-bit overflow case.",
i:"dividend = 10, divisor = 3",o:"3",time:"O(log² n)",space:"O(1)",
code:C(`
class Solution:
    def divide(self, dividend, divisor):
        INT_MAX, INT_MIN = 2 ** 31 - 1, -2 ** 31
        if dividend == INT_MIN and divisor == -1:
            return INT_MAX
        neg = (dividend < 0) != (divisor < 0)
        a, b = abs(dividend), abs(divisor)
        res = 0
        while a >= b:
            t, m = b, 1
            while a >= (t << 1):
                t <<= 1
                m <<= 1
            a -= t
            res += m
        return -res if neg else res
`)});
lite({id:38,slug:"count-and-say",title:"Count and Say",level:"Medium",topic:ARR,name:"Describe the previous term",
w:"1 → '11' (one 1) → '21' (two 1s) → '1211' (one 2, one 1).",k:"Start from '1'. To get the next term read the previous one in groups of equal digits and write 'count then digit' for each group.",
i:"n = 4",o:'"1211"',time:"O(2ⁿ)",space:"O(2ⁿ)",
code:C(`
class Solution:
    def countAndSay(self, n):
        s = "1"
        for _ in range(n - 1):
            s = "".join(str(len(list(g))) + k for k, g in groupby(s))
        return s
`)});
lite({id:1752,slug:"check-if-array-is-sorted-and-rotated",title:"Check if Array Is Sorted and Rotated",level:"Easy",topic:ARR,name:"Count the drops",
w:"[3,4,5,1,2] is [1,2,3,4,5] rotated by 3 — the order drops only once (5 → 1).",k:"Looking at the array as a circle, a sorted-then-rotated array has at most one place where a number is bigger than the next one.",
i:"nums = [3,4,5,1,2]",o:"true",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def check(self, nums):
        drops = sum(nums[i] > nums[(i + 1) % len(nums)] for i in range(len(nums)))
        return drops <= 1
`)});
lite({id:865,slug:"smallest-subtree-with-all-the-deepest-nodes",title:"Smallest Subtree with all the Deepest Nodes",level:"Medium",topic:BT,name:"DFS returning (depth, answer node)",
w:"The deepest nodes are 7 and 4 (both below node 2), so the smallest subtree containing them is rooted at 2.",k:"For each node compute the depth of its subtree and its best answer. If one side is deeper, the answer comes from that side; if both sides are equally deep, this node is the answer.",
i:"root = [3,5,1,6,2,0,8,null,null,7,4]",o:"[2,7,4]",time:"O(n)",space:"O(h)",
code:C(`
class Solution:
    def subtreeWithAllDeepest(self, root):
        def dfs(node):
            if not node:
                return (0, None)
            ld, ln = dfs(node.left)
            rd, rn = dfs(node.right)
            if ld > rd:
                return (ld + 1, ln)
            if rd > ld:
                return (rd + 1, rn)
            return (ld + 1, node)
        return dfs(root)[1]
`)});
lite({id:1123,slug:"lowest-common-ancestor-of-deepest-leaves",title:"Lowest Common Ancestor of Deepest Leaves",level:"Medium",topic:BT,name:"DFS returning (depth, LCA)",
w:"The deepest leaves 7 and 4 hang under node 2, so their lowest common ancestor is 2.",k:"The LCA of the deepest leaves is the node whose two sides are equally deep. Return (depth, node) up the tree: pick the deeper side's answer, or this node when the depths are equal.",
i:"root = [3,5,1,6,2,0,8,null,null,7,4]",o:"[2,7,4]",time:"O(n)",space:"O(h)",
code:C(`
class Solution:
    def lcaDeepestLeaves(self, root):
        def dfs(node):
            if not node:
                return (0, None)
            ld, ln = dfs(node.left)
            rd, rn = dfs(node.right)
            if ld > rd:
                return (ld + 1, ln)
            if rd > ld:
                return (rd + 1, rn)
            return (ld + 1, node)
        return dfs(root)[1]
`)});
lite({id:703,slug:"kth-largest-element-in-a-stream",title:"Kth Largest Element in a Stream",level:"Easy",topic:HP,name:"Min-heap of size k",
w:"k=3 with [4,5,8,2]: the 3rd largest is 4. Add 3 → still 4; add 5 → 5; add 10 → 5; add 9 → 8; add 4 → 8.",k:"Keep only the k largest numbers in a min-heap. Its top is the k-th largest overall. A new number is pushed, and if the heap grows beyond k the smallest is dropped.",
i:"KthLargest(3,[4,5,8,2]); add(3), add(5), add(10), add(9), add(4)",o:"4, 5, 5, 8, 8",time:"O(log k) per add",space:"O(k)",
code:C(`
class KthLargest:
    def __init__(self, k, nums):
        self.k = k
        self.h = nums[:]
        heapify(self.h)
        while len(self.h) > k:
            heappop(self.h)
    def add(self, val):
        heappush(self.h, val)
        if len(self.h) > self.k:
            heappop(self.h)
        return self.h[0]
`)});
lite({id:796,slug:"rotate-string",title:"Rotate String",level:"Easy",topic:ARR,name:"Search in the doubled string",
w:"'abcde' shifted left twice becomes 'cdeab' → true.",k:"Every rotation of s is a substring of s + s. So goal is a rotation of s exactly when the lengths match and goal appears inside s + s.",
i:'s = "abcde", goal = "cdeab"',o:"true",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def rotateString(self, s, goal):
        return len(s) == len(goal) and goal in s + s
`)});
lite({id:689,slug:"maximum-sum-of-3-non-overlapping-subarrays",title:"Maximum Sum of 3 Non-Overlapping Subarrays",level:"Hard",topic:DP,name:"Window sums + best-left / best-right",
w:"With windows of length 2 the best three non-overlapping ones start at 0 (sum 3), 3 (sum 8) and 5 (sum 12): total 23.",k:"Compute the sum w[i] of every window of length k. For each possible middle window j, take the best window to its left (start ≤ j − k) and the best to its right (start ≥ j + k), precomputed in two passes. Keep the best total, preferring the earliest starts.",
i:"nums = [1,2,1,2,6,7,5,1], k = 2",o:"[0, 3, 5]",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def maxSumOfThreeSubarrays(self, nums, k):
        n = len(nums)
        w = [sum(nums[:k])]
        for i in range(1, n - k + 1):
            w.append(w[-1] + nums[i + k - 1] - nums[i - 1])
        m = len(w)
        left = [0] * m
        best = 0
        for i in range(m):
            if w[i] > w[best]:
                best = i
            left[i] = best
        right = [0] * m
        best = m - 1
        for i in range(m - 1, -1, -1):
            if w[i] >= w[best]:
                best = i
            right[i] = best
        res, top = None, 0
        for j in range(k, m - k):
            i, l = left[j - k], right[j + k]
            total = w[i] + w[j] + w[l]
            if total > top:
                top = total
                res = [i, j, l]
        return res
`)});
lite({id:784,slug:"letter-case-permutation",title:"Letter Case Permutation",level:"Medium",topic:BTK,name:"Branch on every letter",
w:"'a1b2': each letter can be lower or upper case, digits stay → 2 × 2 = 4 strings.",k:"Build the strings character by character. A digit is appended to every string; a letter doubles the list: one copy with the lower-case letter, one with the upper-case letter.",
i:'s = "a1b2"',o:'["a1b2","a1B2","A1b2","A1B2"]',time:"O(n · 2ⁿ)",space:"O(n · 2ⁿ)",
code:C(`
class Solution:
    def letterCasePermutation(self, s):
        res = [""]
        for ch in s:
            if ch.isalpha():
                res = [p + c for p in res for c in (ch.lower(), ch.upper())]
            else:
                res = [p + ch for p in res]
        return res
`)});
lite({id:905,slug:"sort-array-by-parity",title:"Sort Array By Parity",level:"Easy",topic:TP,name:"Two pointers, swap in place",
w:"[3,1,2,4] → move the even numbers to the front: [4,2,1,3] (any order inside each group is fine).",k:"Keep one pointer at the left and one at the right. Skip an even on the left and an odd on the right; when the left is odd and the right is even, swap them.",
i:"nums = [3,1,2,4]",o:"[4,2,1,3] (any order works)",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def sortArrayByParity(self, nums):
        l, r = 0, len(nums) - 1
        while l < r:
            if nums[l] % 2 == 0:
                l += 1
            elif nums[r] % 2 == 1:
                r -= 1
            else:
                nums[l], nums[r] = nums[r], nums[l]
        return nums
`)});
lite({id:1891,slug:"cutting-ribbons",title:"Cutting Ribbons",level:"Medium",topic:BS,name:"Binary search the ribbon length",
w:"Ribbons [9,7,5], k=3: cutting length 5 gives 1 + 1 + 1 = 3 pieces; length 6 would give only 1 + 1 + 0 = 2.",k:"For a length L, ribbon r gives r // L pieces. The count of pieces drops as L grows, so binary search the largest L that still gives at least k pieces (0 if none).",
i:"ribbons = [9,7,5], k = 3",o:"5",time:"O(n log max)",space:"O(1)",
code:C(`
class Solution:
    def maxLength(self, ribbons, k):
        lo, hi = 0, max(ribbons)
        while lo < hi:
            mid = (lo + hi + 1) // 2
            if sum(r // mid for r in ribbons) >= k:
                lo = mid
            else:
                hi = mid - 1
        return lo
`)});
lite({id:325,slug:"maximum-size-subarray-sum-equals-k",title:"Maximum Size Subarray Sum Equals k",level:"Medium",topic:"Prefix Sum",name:"Prefix sums + first-seen index",
w:"[1,-1,5,-2,3] and k=3: the subarray [1,-1,5,-2] adds to 3 and has length 4 (the longest).",k:"A subarray sums to k when two prefix sums differ by k. Store the first index of every prefix sum; at each position look up (prefix − k) and measure the distance.",
i:"nums = [1,-1,5,-2,3], k = 3",o:"4",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def maxSubArrayLen(self, nums, k):
        first = {0: -1}
        s = best = 0
        for i, x in enumerate(nums):
            s += x
            if s - k in first:
                best = max(best, i - first[s - k])
            first.setdefault(s, i)
        return best
`)});
