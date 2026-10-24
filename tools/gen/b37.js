const {lite}=require("./lib");
const C=s=>s.replace(/^\n/,"").replace(/\n$/,"").split("\n");
const ARR="Array / String",HM="Hash Map / Set",STK="Stack / Monotonic Stack",BT="Binary Tree",GR="Graph",HP="Heap",DP="Dynamic Programming",GD="Greedy",MB="Math / Bit Manipulation",BS="Binary Search",SRT="Sorting",SW="Sliding Window",MX="Matrix",UF="Union Find / Segment Tree",TP="Two Pointers",IV="Intervals",BTK="Backtracking",DS="Design",LL="Linked List",TR="Trie";
// ---- Meta (1/8)
lite({id:1762,slug:"buildings-with-an-ocean-view",title:"Buildings With an Ocean View",level:"Medium",topic:STK,name:"Scan from the ocean side",
w:"The ocean is on the right. Building 3 (height 1) sees it; building 2 (height 3) is taller than everything right of it; building 1 (height 2) is blocked by the 3; building 0 (height 4) sees over everything.",k:"Walk from the right (the ocean) towards the left, remembering the tallest building seen so far. A building has an ocean view only if it is strictly taller than that.",
i:"heights = [4,2,3,1]",o:"[0, 2, 3]",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def findBuildings(self, heights):
        res = []
        tallest = 0
        for i in range(len(heights) - 1, -1, -1):
            if heights[i] > tallest:
                res.append(i)
                tallest = heights[i]
        return res[::-1]
`)});
lite({id:938,slug:"range-sum-of-bst",title:"Range Sum of BST",level:"Easy",topic:BT,name:"DFS that skips out-of-range branches",
w:"Values between 7 and 15 are 7, 10 and 15 → 32.",k:"In a binary search tree, if a node is smaller than low then its whole left side is too small; if it is bigger than high its whole right side is too big. Skip those and add the matching nodes.",
i:"root = [10,5,15,3,7,null,18], low = 7, high = 15",o:"32",time:"O(n)",space:"O(h)",
code:C(`
class Solution:
    def rangeSumBST(self, root, low, high):
        if not root:
            return 0
        if root.val < low:
            return self.rangeSumBST(root.right, low, high)
        if root.val > high:
            return self.rangeSumBST(root.left, low, high)
        return (root.val + self.rangeSumBST(root.left, low, high)
                + self.rangeSumBST(root.right, low, high))
`)});
lite({id:346,slug:"moving-average-from-data-stream",title:"Moving Average from Data Stream",level:"Easy",topic:DS,name:"Queue with a running sum",
w:"Window size 3: [1] → 1.0, [1,10] → 5.5, [1,10,3] → 4.67, then 1 drops out: [10,3,5] → 6.0.",k:"Keep the last `size` numbers in a queue and their running total. A new number adds to the total; if the queue is too long the oldest number leaves and is subtracted.",
i:"MovingAverage(3); next(1), next(10), next(3), next(5)",o:"[1.0, 5.5, 4.667, 6.0]",time:"O(1) per call",space:"O(size)",
code:C(`
class MovingAverage:
    def __init__(self, size):
        self.size = size
        self.q = deque()
        self.total = 0
    def next(self, val):
        self.q.append(val)
        self.total += val
        if len(self.q) > self.size:
            self.total -= self.q.popleft()
        return self.total / len(self.q)
`)});
lite({id:791,slug:"custom-sort-string",title:"Custom Sort String",level:"Medium",topic:HM,name:"Count letters, emit in the custom order",
w:"order 'cba': c comes first, then b, then a. s = 'abcd' → 'cba' and the letter d, which is not in the order, goes at the end.",k:"Count the letters of s. Write each letter of `order` as many times as it was counted, in that order, then append whatever letters are left over.",
i:'order = "cba", s = "abcd"',o:'"cbad"',time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def customSortString(self, order, s):
        cnt = Counter(s)
        res = [ch * cnt.pop(ch, 0) for ch in order]
        res += [ch * c for ch, c in cnt.items()]
        return "".join(res)
`)});
lite({id:921,slug:"minimum-add-to-make-parentheses-valid",title:"Minimum Add to Make Parentheses Valid",level:"Medium",topic:STK,name:"Open-bracket counter",
w:"'())': the last ')' has no '(' to match, so we must add one '(' → 1.",k:"Count the currently open '('. A ')' closes one if possible; otherwise it is unmatched and needs one added '('. In the end every still-open '(' needs a ')'.",
i:'s = "())"',o:"1",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def minAddToMakeValid(self, s):
        open_, add = 0, 0
        for ch in s:
            if ch == "(":
                open_ += 1
            elif open_:
                open_ -= 1
            else:
                add += 1
        return add + open_
`)});
lite({id:1539,slug:"kth-missing-positive-number",title:"Kth Missing Positive Number",level:"Easy",topic:BS,name:"Binary search on missing count",
w:"[2,3,4,7,11]: the missing numbers are 1, 5, 6, 8, 9, 10 …; the 5th missing is 9.",k:"At index i the number of missing positives before arr[i] is arr[i] − (i + 1), which only grows. Binary search the first index where that is at least k; the answer is then lo + k.",
i:"arr = [2,3,4,7,11], k = 5",o:"9",time:"O(log n)",space:"O(1)",
code:C(`
class Solution:
    def findKthPositive(self, arr, k):
        lo, hi = 0, len(arr)
        while lo < hi:
            mid = (lo + hi) // 2
            if arr[mid] - (mid + 1) < k:
                lo = mid + 1
            else:
                hi = mid
        return lo + k
`)});
lite({id:498,slug:"diagonal-traverse",title:"Diagonal Traverse",level:"Medium",topic:MX,name:"Group by i + j, flip every other diagonal",
w:"Diagonal 1 is just [1]; the next goes down-left: 2, 4; the next goes up-right: 7, 5, 3; then 6, 8; then 9.",k:"All cells on one diagonal share the same i + j. Collect each diagonal top-to-bottom; for even i + j the walk goes up-right, so reverse that diagonal.",
i:"mat = [[1,2,3],[4,5,6],[7,8,9]]",o:"[1,2,4,7,5,3,6,8,9]",time:"O(m·n)",space:"O(m·n)",
code:C(`
class Solution:
    def findDiagonalOrder(self, mat):
        m, n = len(mat), len(mat[0])
        diags = defaultdict(list)
        for i in range(m):
            for j in range(n):
                diags[i + j].append(mat[i][j])
        res = []
        for d in range(m + n - 1):
            res += diags[d][::-1] if d % 2 == 0 else diags[d]
        return res
`)});
lite({id:708,slug:"insert-into-a-sorted-circular-linked-list",title:"Insert into a Sorted Circular Linked List",level:"Medium",topic:LL,name:"Walk once around the circle",
w:"List 3→4→1→(back to 3) is sorted ascending with the wrap between 4 and 1. Inserting 2 goes after 1: 3→4→1→2.",k:"Walk around the circle looking for a spot where prev ≤ value ≤ next, or the wrap point (the biggest then the smallest) where the value is ≥ the biggest or ≤ the smallest. If we come back to the start, all values are equal: insert anywhere.",
i:"head = [3,4,1] (circular), insertVal = 2",o:"[3,4,1,2] (circular)",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def insert(self, head, insertVal):
        node = Node(insertVal)
        if not head:
            node.next = node
            return node
        cur = head
        while True:
            nxt = cur.next
            if cur.val <= insertVal <= nxt.val or (cur.val > nxt.val and (insertVal >= cur.val or insertVal <= nxt.val)):
                break
            cur = nxt
            if cur is head:
                break
        node.next = cur.next
        cur.next = node
        return head
`)});
lite({id:426,slug:"convert-binary-search-tree-to-sorted-doubly-linked-list",title:"Convert Binary Search Tree to Sorted Doubly Linked List",level:"Medium",topic:BT,name:"In-order walk linking neighbours",
w:"The in-order walk of [4,2,5,1,3] is 1,2,3,4,5. We link each node to the previous one (left = previous, right = next) and close the ring.",k:"An in-order traversal visits a BST in sorted order. Remember the previous visited node: link prev.right = node and node.left = prev. At the end connect the first and the last node to make it circular.",
i:"root = [4,2,5,1,3]",o:"1 ⇄ 2 ⇄ 3 ⇄ 4 ⇄ 5 (circular)",time:"O(n)",space:"O(h)",
code:C(`
class Solution:
    def treeToDoublyList(self, root):
        if not root:
            return None
        first = last = None
        def dfs(node):
            nonlocal first, last
            if not node:
                return
            dfs(node.left)
            if last:
                last.right = node
                node.left = last
            else:
                first = node
            last = node
            dfs(node.right)
        dfs(root)
        first.left = last
        last.right = first
        return first
`)});
lite({id:1216,slug:"valid-palindrome-iii",title:"Valid Palindrome III",level:"Hard",topic:DP,name:"Longest palindromic subsequence",
w:"'abcdeca': the longest palindromic subsequence is 'acdca' (length 5), so only 7 − 5 = 2 letters must go (b and e); 2 ≤ k = 2 → true.",k:"The fewest characters to delete to get a palindrome is length − (longest palindromic subsequence). Compute that subsequence with an interval DP and compare with k.",
i:'s = "abcdeca", k = 2',o:"true",time:"O(n²)",space:"O(n²)",
code:C(`
class Solution:
    def isValidPalindrome(self, s, k):
        n = len(s)
        dp = [[0] * n for _ in range(n)]
        for i in range(n - 1, -1, -1):
            dp[i][i] = 1
            for j in range(i + 1, n):
                if s[i] == s[j]:
                    dp[i][j] = dp[i + 1][j - 1] + 2
                else:
                    dp[i][j] = max(dp[i + 1][j], dp[i][j - 1])
        return n - dp[0][n - 1] <= k
`)});
lite({id:398,slug:"random-pick-index",title:"Random Pick Index",level:"Medium",topic:DS,name:"Reservoir sampling",
w:"[1,2,3,3,3]: pick(3) must return 2, 3 or 4 with equal chance (1/3 each).",k:"Scan the array. For the c-th occurrence of the target, replace the current answer with its index with probability 1/c. After the scan every occurrence is equally likely, and no extra memory is needed.",
i:"Solution([1,2,3,3,3]); pick(3)",o:"2, 3 or 4 (each 1/3)",time:"pick O(n)",space:"O(1)",
code:C(`
class Solution:
    def __init__(self, nums):
        self.nums = nums
    def pick(self, target):
        res, cnt = -1, 0
        for i, x in enumerate(self.nums):
            if x == target:
                cnt += 1
                if random.randrange(cnt) == 0:
                    res = i
        return res
`)});
lite({id:958,slug:"check-completeness-of-a-binary-tree",title:"Check Completeness of a Binary Tree",level:"Medium",topic:BT,name:"BFS: no node after the first gap",
w:"[1,2,3,4,5,6] fills every level left to right → complete. In [1,2,3,4,5,null,7] the missing node comes before 7 → not complete.",k:"Do a level-order walk and also queue the missing children as None. After the first None, every remaining entry must be None too; a real node after a gap means the tree is not complete.",
i:"root = [1,2,3,4,5,6]",o:"true",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def isCompleteTree(self, root):
        q = deque([root])
        seen_none = False
        while q:
            node = q.popleft()
            if node is None:
                seen_none = True
            else:
                if seen_none:
                    return False
                q.append(node.left)
                q.append(node.right)
        return True
`)});
lite({id:163,slug:"missing-ranges",title:"Missing Ranges",level:"Easy",topic:ARR,name:"Gap between neighbours",
w:"Between 0 and 1 nothing is missing; between 1 and 3 the number 2; between 3 and 50 the numbers 4–49; and so on up to 99.",k:"Keep the previous number (start with lower − 1) and look at each next number (finally upper + 1). If the gap is at least 2 the numbers in between form one missing range.",
i:"nums = [0,1,3,50,75], lower = 0, upper = 99",o:"[[2,2],[4,49],[51,74],[76,99]]",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def findMissingRanges(self, nums, lower, upper):
        res = []
        prev = lower - 1
        for x in nums + [upper + 1]:
            if x - prev >= 2:
                res.append([prev + 1, x - 1])
            prev = x
        return res
`)});
lite({id:825,slug:"friends-of-appropriate-ages",title:"Friends Of Appropriate Ages",level:"Medium",topic:HM,name:"Count people per age",
w:"Ages 16, 17, 18: 17 may ask 16 (16 > 15.5), 18 may ask 17 (17 > 16), but 18 may not ask 16 (16 ≤ 16) → 2 requests.",k:"Ages are at most 120, so count people per age and test every age pair once. A sends to B unless B ≤ 0.5·A + 7 or B > A. Multiply the counts, and remove self-requests when the ages are equal.",
i:"ages = [16,17,18]",o:"2",time:"O(120² + n)",space:"O(120)",
code:C(`
class Solution:
    def numFriendRequests(self, ages):
        cnt = Counter(ages)
        res = 0
        for a, ca in cnt.items():
            for b, cb in cnt.items():
                if b <= 0.5 * a + 7 or b > a:
                    continue
                res += ca * cb - (ca if a == b else 0)
        return res
`)});
lite({id:301,slug:"remove-invalid-parentheses",title:"Remove Invalid Parentheses",level:"Hard",topic:BTK,name:"BFS by number of removals",
w:"'()())()': removing one ')' gives '(())()' or '()()()' — both valid with the minimum of 1 removal.",k:"Try removing 0 characters, then 1, then 2 … level by level. The first level that contains a valid string is the minimum, and every valid string on that level is an answer (a set removes duplicates).",
i:'s = "()())()"',o:'["(())()","()()()"]',time:"O(2ⁿ · n)",space:"O(2ⁿ)",
code:C(`
class Solution:
    def removeInvalidParentheses(self, s):
        def valid(t):
            bal = 0
            for ch in t:
                if ch == "(":
                    bal += 1
                elif ch == ")":
                    bal -= 1
                    if bal < 0:
                        return False
            return bal == 0
        level = {s}
        while True:
            good = [t for t in level if valid(t)]
            if good:
                return good
            level = {t[:i] + t[i + 1:] for t in level for i in range(len(t)) if t[i] in "()"}
`)});
lite({id:766,slug:"toeplitz-matrix",title:"Toeplitz Matrix",level:"Easy",topic:MX,name:"Compare with the up-left neighbour",
w:"Every diagonal from top-left to bottom-right holds one value: 1-1-1, 2-2-2, 3-3, and so on → true.",k:"A matrix is Toeplitz when every cell equals its up-left neighbour. Check that for all cells that have one.",
i:"matrix = [[1,2,3,4],[5,1,2,3],[9,5,1,2]]",o:"true",time:"O(m·n)",space:"O(1)",
code:C(`
class Solution:
    def isToeplitzMatrix(self, matrix):
        for r in range(1, len(matrix)):
            for c in range(1, len(matrix[0])):
                if matrix[r][c] != matrix[r - 1][c - 1]:
                    return False
        return True
`)});
lite({id:16,slug:"3sum-closest",title:"3Sum Closest",level:"Medium",topic:TP,name:"Sort + two pointers",
w:"[-1,2,1,-4], target 1: the triple −1 + 2 + 1 = 2 is the closest sum to 1.",k:"Sort the numbers. Fix one number and move two pointers inward from both ends: if the sum is too small move the left one up, if too big move the right one down. Remember the sum closest to the target.",
i:"nums = [-1,2,1,-4], target = 1",o:"2",time:"O(n²)",space:"O(1)",
code:C(`
class Solution:
    def threeSumClosest(self, nums, target):
        nums.sort()
        best = nums[0] + nums[1] + nums[2]
        for i in range(len(nums) - 2):
            l, r = i + 1, len(nums) - 1
            while l < r:
                s = nums[i] + nums[l] + nums[r]
                if abs(s - target) < abs(best - target):
                    best = s
                if s < target:
                    l += 1
                elif s > target:
                    r -= 1
                else:
                    return s
        return best
`)});
lite({id:246,slug:"strobogrammatic-number",title:"Strobogrammatic Number",level:"Easy",topic:TP,name:"Two pointers with a rotation map",
w:"'69' turned upside down becomes '69' again (6 → 9 and 9 → 6) → true. '962' is not.",k:"Rotating the number by 180° swaps its two ends. Use two pointers from both ends: the left digit must rotate into the right digit (0→0, 1→1, 8→8, 6→9, 9→6).",
i:'num = "69"',o:"true",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def isStrobogrammatic(self, num):
        pairs = {"0": "0", "1": "1", "6": "9", "8": "8", "9": "6"}
        l, r = 0, len(num) - 1
        while l <= r:
            if num[l] not in pairs or pairs[num[l]] != num[r]:
                return False
            l += 1
            r -= 1
        return True
`)});
lite({id:43,slug:"multiply-strings",title:"Multiply Strings",level:"Medium",topic:ARR,name:"Grade-school digit multiplication",
w:"123 × 456 = 56088, built digit by digit as on paper.",k:"Digit i of the first number times digit j of the second lands at positions i + j and i + j + 1 of the result. Add into those cells and carry.",
i:'num1 = "123", num2 = "456"',o:'"56088"',time:"O(m·n)",space:"O(m+n)",
code:C(`
class Solution:
    def multiply(self, num1, num2):
        if num1 == "0" or num2 == "0":
            return "0"
        res = [0] * (len(num1) + len(num2))
        for i in range(len(num1) - 1, -1, -1):
            for j in range(len(num2) - 1, -1, -1):
                p = int(num1[i]) * int(num2[j]) + res[i + j + 1]
                res[i + j + 1] = p % 10
                res[i + j] += p // 10
        return "".join(map(str, res)).lstrip("0")
`)});
lite({id:51,slug:"n-queens",title:"N-Queens",level:"Hard",topic:BTK,name:"Backtracking with column and diagonal sets",
w:"On a 4×4 board there are exactly 2 ways to place 4 queens that never attack each other.",k:"Place one queen per row. A square is safe if its column, its ↘ diagonal (row − col) and its ↙ diagonal (row + col) are all unused. Place, recurse to the next row, and undo.",
i:"n = 4",o:'[[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]',time:"O(n!)",space:"O(n)",
code:C(`
class Solution:
    def solveNQueens(self, n):
        res = []
        cols, d1, d2 = set(), set(), set()
        board = []
        def go(r):
            if r == n:
                res.append(["." * c + "Q" + "." * (n - c - 1) for c in board])
                return
            for c in range(n):
                if c in cols or r - c in d1 or r + c in d2:
                    continue
                cols.add(c)
                d1.add(r - c)
                d2.add(r + c)
                board.append(c)
                go(r + 1)
                cols.remove(c)
                d1.remove(r - c)
                d2.remove(r + c)
                board.pop()
        go(0)
        return res
`)});
lite({id:536,slug:"construct-binary-tree-from-string",title:"Construct Binary Tree from String",level:"Medium",topic:BT,name:"Recursive descent parser",
w:"'4(2(3)(1))(6(5))': 4 is the root, (2(3)(1)) is its left subtree, (6(5)) its right subtree.",k:"Read a number to make a node. If a '(' follows, parse the left child and skip its ')'; if another '(' follows, parse the right child the same way. A shared index moves through the string.",
i:'s = "4(2(3)(1))(6(5))"',o:"[4,2,6,3,1,5]",time:"O(n)",space:"O(h)",
code:C(`
class Solution:
    def str2tree(self, s):
        i = 0
        def parse():
            nonlocal i
            j = i
            while j < len(s) and (s[j] == "-" or s[j].isdigit()):
                j += 1
            node = TreeNode(int(s[i:j]))
            i = j
            if i < len(s) and s[i] == "(":
                i += 1
                node.left = parse()
                i += 1
            if i < len(s) and s[i] == "(":
                i += 1
                node.right = parse()
                i += 1
            return node
        return parse() if s else None
`)});
lite({id:131,slug:"palindrome-partitioning",title:"Palindrome Partitioning",level:"Medium",topic:BTK,name:"Backtracking over cut positions",
w:"'aab' can be cut as a | a | b or aa | b — every piece is a palindrome.",k:"From the current start, try every end; if s[start:end] is a palindrome add it, recurse on the rest, and remove it again. When the start reaches the end of the string record the partition.",
i:'s = "aab"',o:'[["a","a","b"],["aa","b"]]',time:"O(n · 2ⁿ)",space:"O(n)",
code:C(`
class Solution:
    def partition(self, s):
        res, path = [], []
        def go(start):
            if start == len(s):
                res.append(path[:])
                return
            for end in range(start + 1, len(s) + 1):
                t = s[start:end]
                if t == t[::-1]:
                    path.append(t)
                    go(end)
                    path.pop()
        go(0)
        return res
`)});
lite({id:525,slug:"contiguous-array",title:"Contiguous Array",level:"Medium",topic:HM,name:"Running balance, first-seen index",
w:"[0,1] has one 0 and one 1 → length 2.",k:"Count 1 as +1 and 0 as −1. A subarray has equal 0s and 1s exactly when the running balance is the same at both ends. Remember the first index of each balance and measure the distance when it repeats.",
i:"nums = [0,1]",o:"2",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def findMaxLength(self, nums):
        first = {0: -1}
        bal = best = 0
        for i, x in enumerate(nums):
            bal += 1 if x else -1
            if bal in first:
                best = max(best, i - first[bal])
            else:
                first[bal] = i
        return best
`)});
lite({id:852,slug:"peak-index-in-a-mountain-array",title:"Peak Index in a Mountain Array",level:"Medium",topic:BS,name:"Binary search on the slope",
w:"[0,2,1,0] rises to 2 at index 1, then falls.",k:"If arr[mid] < arr[mid+1] we are still climbing, so the peak is to the right; otherwise mid could be the peak or the peak is to the left. Halve until one index remains.",
i:"arr = [0,2,1,0]",o:"1",time:"O(log n)",space:"O(1)",
code:C(`
class Solution:
    def peakIndexInMountainArray(self, arr):
        lo, hi = 0, len(arr) - 1
        while lo < hi:
            mid = (lo + hi) // 2
            if arr[mid] < arr[mid + 1]:
                lo = mid + 1
            else:
                hi = mid
        return lo
`)});
lite({id:1868,slug:"product-of-two-run-length-encoded-arrays",title:"Product of Two Run-Length Encoded Arrays",level:"Medium",topic:TP,name:"Two pointers over the runs",
w:"[1,1,1,2,2,2] × [6,6,6,3,3,3] = [6,6,6,6,6,6] → one run [6,6].",k:"Walk both run lists with two pointers. Take the shorter remaining run length, multiply the two values, and add that many copies to the result (merging with the last run if the product is equal). Then advance whichever run was used up.",
i:"encoded1 = [[1,3],[2,3]], encoded2 = [[6,3],[3,3]]",o:"[[6,6]]",time:"O(m+n)",space:"O(1)",
code:C(`
class Solution:
    def findRLEArray(self, encoded1, encoded2):
        res = []
        i = j = 0
        f1, f2 = encoded1[0][1], encoded2[0][1]
        while i < len(encoded1) and j < len(encoded2):
            take = min(f1, f2)
            prod = encoded1[i][0] * encoded2[j][0]
            if res and res[-1][0] == prod:
                res[-1][1] += take
            else:
                res.append([prod, take])
            f1 -= take
            f2 -= take
            if f1 == 0:
                i += 1
                if i < len(encoded1):
                    f1 = encoded1[i][1]
            if f2 == 0:
                j += 1
                if j < len(encoded2):
                    f2 = encoded2[j][1]
        return res
`)});
lite({id:303,slug:"range-sum-query-immutable",title:"Range Sum Query - Immutable",level:"Easy",topic:"Prefix Sum",name:"Prefix sums",
w:"[-2,0,3,-5,2,-1]: the sum of positions 0–2 is −2 + 0 + 3 = 1.",k:"Precompute pre[i] = sum of the first i numbers. The sum of positions left…right is then pre[right + 1] − pre[left], answered in O(1).",
i:"NumArray([-2,0,3,-5,2,-1]); sumRange(0,2)",o:"1",time:"O(1) per query",space:"O(n)",
code:C(`
class NumArray:
    def __init__(self, nums):
        self.pre = [0] + list(accumulate(nums))
    def sumRange(self, left, right):
        return self.pre[right + 1] - self.pre[left]
`)});
