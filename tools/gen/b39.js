const {lite}=require("./lib");
const C=s=>s.replace(/^\n/,"").replace(/\n$/,"").split("\n");
const ARR="Array / String",HM="Hash Map / Set",STK="Stack / Monotonic Stack",BT="Binary Tree",GR="Graph",HP="Heap",DP="Dynamic Programming",GD="Greedy",MB="Math / Bit Manipulation",BS="Binary Search",SRT="Sorting",SW="Sliding Window",MX="Matrix",UF="Union Find / Segment Tree",TP="Two Pointers",IV="Intervals",BTK="Backtracking",DS="Design",LL="Linked List",TR="Trie";
// ---- Meta (3/8)
lite({id:247,slug:"strobogrammatic-number-ii",title:"Strobogrammatic Number II",level:"Medium",topic:BTK,name:"Build from the middle outwards",
w:"Length 2: wrap the empty middle with a pair — 11, 69, 88, 96 (no leading 0).",k:"A strobogrammatic number of length n is a strobogrammatic number of length n−2 wrapped in a pair (0…0, 1…1, 6…9, 8…8, 9…6). The middle is empty (n even) or one of 0, 1, 8 (n odd). The outermost pair must not be 0.",
i:"n = 2",o:'["11","69","88","96"]',time:"O(5^(n/2))",space:"O(5^(n/2))",
code:C(`
class Solution:
    def findStrobogrammatic(self, n):
        pairs = (("0", "0"), ("1", "1"), ("6", "9"), ("8", "8"), ("9", "6"))
        def build(m):
            if m == 0:
                return [""]
            if m == 1:
                return ["0", "1", "8"]
            res = []
            for mid in build(m - 2):
                for a, b in pairs:
                    if m == n and a == "0":
                        continue
                    res.append(a + mid + b)
            return res
        return build(n)
`)});
lite({id:2149,slug:"rearrange-array-elements-by-sign",title:"Rearrange Array Elements by Sign",level:"Medium",topic:TP,name:"Two write positions",
w:"[3,1,-2,-5,2,-4]: positives go to positions 0, 2, 4 in order (3,1,2) and negatives to 1, 3, 5 (−2,−5,−4) → [3,−2,1,−5,2,−4].",k:"Equal numbers of positives and negatives must alternate, starting with a positive. Keep two write positions (even slots for positives, odd slots for negatives) and drop each number into its slot.",
i:"nums = [3,1,-2,-5,2,-4]",o:"[3,-2,1,-5,2,-4]",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def rearrangeArray(self, nums):
        res = [0] * len(nums)
        p, n = 0, 1
        for x in nums:
            if x > 0:
                res[p] = x
                p += 2
            else:
                res[n] = x
                n += 2
        return res
`)});
lite({id:572,slug:"subtree-of-another-tree",title:"Subtree of Another Tree",level:"Easy",topic:BT,name:"Compare at every node",
w:"The tree [3,4,5,1,2] contains the subtree [4,1,2] at its left child → true.",k:"For every node of the big tree test whether the tree starting there is identical to subRoot (same shape and values).",
i:"root = [3,4,5,1,2], subRoot = [4,1,2]",o:"true",time:"O(m·n)",space:"O(h)",
code:C(`
class Solution:
    def isSubtree(self, root, subRoot):
        def same(a, b):
            if not a or not b:
                return a is b
            return a.val == b.val and same(a.left, b.left) and same(a.right, b.right)
        if not root:
            return False
        return same(root, subRoot) or self.isSubtree(root.left, subRoot) or self.isSubtree(root.right, subRoot)
`)});
lite({id:653,slug:"two-sum-iv-input-is-a-bst",title:"Two Sum IV - Input is a BST",level:"Easy",topic:BT,name:"DFS with a set of seen values",
w:"In the tree [5,3,6,2,4,null,7] the values 2 and 7 add up to 9 → true.",k:"Visit every node; before adding its value to a set, check whether (k − value) is already there.",
i:"root = [5,3,6,2,4,null,7], k = 9",o:"true",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def findTarget(self, root, k):
        seen = set()
        def dfs(node):
            if not node:
                return False
            if k - node.val in seen:
                return True
            seen.add(node.val)
            return dfs(node.left) or dfs(node.right)
        return dfs(root)
`)});
lite({id:493,slug:"reverse-pairs",title:"Reverse Pairs",level:"Hard",topic:SRT,name:"Merge sort counting",
w:"[1,3,2,3,1]: the pairs (3,1) and (3,1) have 3 > 2·1 → 2 reverse pairs.",k:"Merge sort the array. While merging two sorted halves, for every number x on the left count the numbers y on the right with x > 2y (a moving pointer, since both halves are sorted). Then merge normally.",
i:"nums = [1,3,2,3,1]",o:"2",time:"O(n log n)",space:"O(n)",
code:C(`
class Solution:
    def reversePairs(self, nums):
        def sort(a):
            if len(a) <= 1:
                return a, 0
            mid = len(a) // 2
            l, cl = sort(a[:mid])
            r, cr = sort(a[mid:])
            cnt = cl + cr
            j = 0
            for x in l:
                while j < len(r) and x > 2 * r[j]:
                    j += 1
                cnt += j
            return list(merge(l, r)), cnt
        return sort(nums)[1]
`)});
lite({id:912,slug:"sort-an-array",title:"Sort an Array",level:"Medium",topic:SRT,name:"Merge sort",
w:"[5,2,3,1] → split into [5,2] and [3,1], sort each, merge: [1,2,3,5].",k:"Split the array in halves, sort each half recursively and merge the two sorted halves by always taking the smaller front element.",
i:"nums = [5,2,3,1]",o:"[1,2,3,5]",time:"O(n log n)",space:"O(n)",
code:C(`
class Solution:
    def sortArray(self, nums):
        if len(nums) <= 1:
            return nums
        mid = len(nums) // 2
        l = self.sortArray(nums[:mid])
        r = self.sortArray(nums[mid:])
        res = []
        i = j = 0
        while i < len(l) and j < len(r):
            if l[i] <= r[j]:
                res.append(l[i])
                i += 1
            else:
                res.append(r[j])
                j += 1
        return res + l[i:] + r[j:]
`)});
lite({id:1108,slug:"defanging-an-ip-address",title:"Defanging an IP Address",level:"Easy",topic:ARR,name:"Replace each dot",
w:"'1.1.1.1' becomes '1[.]1[.]1[.]1'.",k:"Replace every '.' by '[.]'.",
i:'address = "1.1.1.1"',o:'"1[.]1[.]1[.]1"',time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def defangIPaddr(self, address):
        return address.replace(".", "[.]")
`)});
lite({id:1480,slug:"running-sum-of-1d-array",title:"Running Sum of 1d Array",level:"Easy",topic:"Prefix Sum",name:"Prefix sums",
w:"[1,2,3,4] → 1, 1+2, 1+2+3, 1+2+3+4 = [1,3,6,10].",k:"Entry i of the answer is the sum of the first i + 1 numbers: keep a running total.",
i:"nums = [1,2,3,4]",o:"[1,3,6,10]",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def runningSum(self, nums):
        return list(accumulate(nums))
`)});
lite({id:115,slug:"distinct-subsequences",title:"Distinct Subsequences",level:"Hard",topic:DP,name:"1D DP over t",
w:"'rabbbit' contains 'rabbit' as a subsequence in 3 different ways (choose which two of the three b's to use).",k:"dp[j] is the number of ways to form the first j letters of t from the part of s read so far. For each letter of s that equals t[j−1], we can use it: dp[j] += dp[j−1]. Update j from high to low so each letter is used once.",
i:'s = "rabbbit", t = "rabbit"',o:"3",time:"O(|s|·|t|)",space:"O(|t|)",
code:C(`
class Solution:
    def numDistinct(self, s, t):
        dp = [1] + [0] * len(t)
        for ch in s:
            for j in range(len(t), 0, -1):
                if t[j - 1] == ch:
                    dp[j] += dp[j - 1]
        return dp[len(t)]
`)});
lite({id:95,slug:"unique-binary-search-trees-ii",title:"Unique Binary Search Trees II",level:"Medium",topic:BT,name:"Choose a root, combine all left × right trees",
w:"For n = 3 there are 5 different BSTs that use the values 1, 2, 3.",k:"For the range lo…hi try each value i as the root. Every tree built from lo…i−1 can be the left subtree and every tree from i+1…hi the right subtree — combine all pairs.",
i:"n = 3",o:"5 trees",time:"O(Catalan(n))",space:"O(Catalan(n))",
code:C(`
class Solution:
    def generateTrees(self, n):
        def build(lo, hi):
            if lo > hi:
                return [None]
            return [TreeNode(i, l, r) for i in range(lo, hi + 1)
                    for l in build(lo, i - 1) for r in build(i + 1, hi)]
        return build(1, n) if n else []
`)});
lite({id:404,slug:"sum-of-left-leaves",title:"Sum of Left Leaves",level:"Easy",topic:BT,name:"DFS with a 'is left' flag",
w:"Left leaves are 9 and 15 → 24.",k:"Walk the tree and remember whether we came from a left child. A node with no children that was reached as a left child is a left leaf.",
i:"root = [3,9,20,null,null,15,7]",o:"24",time:"O(n)",space:"O(h)",
code:C(`
class Solution:
    def sumOfLeftLeaves(self, root):
        def dfs(node, is_left):
            if not node:
                return 0
            if not node.left and not node.right:
                return node.val if is_left else 0
            return dfs(node.left, True) + dfs(node.right, False)
        return dfs(root, False)
`)});
lite({id:989,slug:"add-to-array-form-of-integer",title:"Add to Array-Form of Integer",level:"Easy",topic:MB,name:"Add digit by digit with a carry",
w:"1200 + 34 = 1234.",k:"Add from the last digit like on paper: take a digit of the array (if any), the last digit of k, plus the carry; write the last digit of the total and carry the rest.",
i:"num = [1,2,0,0], k = 34",o:"[1,2,3,4]",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def addToArrayForm(self, num, k):
        res = []
        i = len(num) - 1
        carry = 0
        while i >= 0 or k or carry:
            if i >= 0:
                carry += num[i]
                i -= 1
            carry += k % 10
            k //= 10
            res.append(carry % 10)
            carry //= 10
        return res[::-1]
`)});
lite({id:1266,slug:"minimum-time-visiting-all-points",title:"Minimum Time Visiting All Points",level:"Easy",topic:MB,name:"Chebyshev distance",
w:"(1,1) → (3,4): 2 diagonal steps and 1 straight step = 3 seconds. (3,4) → (−1,0): 4 seconds. Total 7.",k:"In one second you can move one step in x, in y, or diagonally. Going from one point to the next therefore takes max(|dx|, |dy|) seconds. Sum over consecutive points.",
i:"points = [[1,1],[3,4],[-1,0]]",o:"7",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def minTimeToVisitAllPoints(self, points):
        return sum(max(abs(a[0] - b[0]), abs(a[1] - b[1])) for a, b in zip(points, points[1:]))
`)});
lite({id:1662,slug:"check-if-two-string-arrays-are-equivalent",title:"Check If Two String Arrays are Equivalent",level:"Easy",topic:ARR,name:"Join and compare",
w:"['ab','c'] and ['a','bc'] both spell 'abc' → true.",k:"Join each array into one string and compare.",
i:'word1 = ["ab","c"], word2 = ["a","bc"]',o:"true",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def arrayStringsAreEqual(self, word1, word2):
        return "".join(word1) == "".join(word2)
`)});
lite({id:1922,slug:"count-good-numbers",title:"Count Good Numbers",level:"Medium",topic:MB,name:"Fast exponentiation",
w:"Length 4: even positions (0 and 2) take an even digit (5 choices), odd positions (1 and 3) take a prime digit 2, 3, 5, 7 (4 choices) → 5·4·5·4 = 400.",k:"Positions 0, 2, 4 … (there are ceil(n/2) of them) each have 5 choices, and the odd positions (floor(n/2) of them) each have 4. The answer is 5^ceil(n/2) · 4^floor(n/2) modulo 1,000,000,007 — use fast power.",
i:"n = 4",o:"400",time:"O(log n)",space:"O(1)",
code:C(`
class Solution:
    def countGoodNumbers(self, n):
        MOD = 10 ** 9 + 7
        return pow(5, (n + 1) // 2, MOD) * pow(4, n // 2, MOD) % MOD
`)});
lite({id:168,slug:"excel-sheet-column-title",title:"Excel Sheet Column Title",level:"Easy",topic:MB,name:"Base-26 with no zero digit",
w:"701 = 26·26 + 25: that is Z then Y → 'ZY'.",k:"It is base 26 where the digits are A…Z = 1…26 (no zero). Subtract 1 before taking the remainder so A…Z map to 0…25, write the letter and divide by 26.",
i:"columnNumber = 701",o:'"ZY"',time:"O(log n)",space:"O(1)",
code:C(`
class Solution:
    def convertToTitle(self, columnNumber):
        res = []
        while columnNumber:
            columnNumber -= 1
            res.append(chr(65 + columnNumber % 26))
            columnNumber //= 26
        return "".join(reversed(res))
`)});
lite({id:343,slug:"integer-break",title:"Integer Break",level:"Medium",topic:MB,name:"Use as many 3s as possible",
w:"10 = 3 + 3 + 4 → 3 · 3 · 4 = 36, the biggest product.",k:"Splitting into 3s gives the best product (a 4 is as good as 2 + 2). So peel off 3s while the rest is more than 4, then multiply by what is left. Small n (2 and 3) must be split in at least two parts.",
i:"n = 10",o:"36",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def integerBreak(self, n):
        if n <= 3:
            return n - 1
        res = 1
        while n > 4:
            res *= 3
            n -= 3
        return res * n
`)});
lite({id:442,slug:"find-all-duplicates-in-an-array",title:"Find All Duplicates in an Array",level:"Medium",topic:ARR,name:"Mark visited positions by negating",
w:"[4,3,2,7,8,2,3,1]: 2 and 3 appear twice.",k:"All numbers are between 1 and n, so each number can use its own position as a flag: negate nums[value − 1]. If that cell is already negative, the value was seen before.",
i:"nums = [4,3,2,7,8,2,3,1]",o:"[2, 3]",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def findDuplicates(self, nums):
        res = []
        for x in nums:
            i = abs(x) - 1
            if nums[i] < 0:
                res.append(abs(x))
            else:
                nums[i] = -nums[i]
        return res
`)});
lite({id:1021,slug:"remove-outermost-parentheses",title:"Remove Outermost Parentheses",level:"Easy",topic:STK,name:"Depth counter",
w:"'(()())(())' has two primitive pieces; removing each one's outer pair gives '()()' + '()' = '()()()'.",k:"Track the depth. A '(' that starts at depth 0 and a ')' that returns to depth 0 are outer brackets — skip those, keep the others.",
i:'s = "(()())(())"',o:'"()()()"',time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def removeOuterParentheses(self, s):
        res = []
        depth = 0
        for ch in s:
            if ch == "(":
                if depth > 0:
                    res.append(ch)
                depth += 1
            else:
                depth -= 1
                if depth > 0:
                    res.append(ch)
        return "".join(res)
`)});
lite({id:1482,slug:"minimum-number-of-days-to-make-m-bouquets",title:"Minimum Number of Days to Make m Bouquets",level:"Medium",topic:BS,name:"Binary search the day",
w:"Flowers bloom on days [1,10,3,10,2]; we need 3 bouquets of 1 flower. On day 3 the flowers 1, 3, 2 are open → 3 bouquets.",k:"If it works on day d it works on any later day, so binary search d. To test a day, scan the garden and count groups of k adjacent flowers that are all in bloom.",
i:"bloomDay = [1,10,3,10,2], m = 3, k = 1",o:"3",time:"O(n log max)",space:"O(1)",
code:C(`
class Solution:
    def minDays(self, bloomDay, m, k):
        if m * k > len(bloomDay):
            return -1
        def can(day):
            bouquets = run = 0
            for b in bloomDay:
                if b <= day:
                    run += 1
                    if run == k:
                        bouquets += 1
                        run = 0
                else:
                    run = 0
            return bouquets >= m
        lo, hi = min(bloomDay), max(bloomDay)
        while lo < hi:
            mid = (lo + hi) // 2
            if can(mid):
                hi = mid
            else:
                lo = mid + 1
        return lo
`)});
lite({id:83,slug:"remove-duplicates-from-sorted-list",title:"Remove Duplicates from Sorted List",level:"Easy",topic:LL,name:"Skip equal neighbours",
w:"1 → 1 → 2 becomes 1 → 2.",k:"Because the list is sorted, duplicates are neighbours. If the next node has the same value, unlink it; otherwise move on.",
i:"head = [1,1,2]",o:"[1,2]",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def deleteDuplicates(self, head):
        cur = head
        while cur and cur.next:
            if cur.val == cur.next.val:
                cur.next = cur.next.next
            else:
                cur = cur.next
        return head
`)});
lite({id:541,slug:"reverse-string-ii",title:"Reverse String II",level:"Easy",topic:ARR,name:"Reverse each 2k block's first k",
w:"'abcdefg', k=2: reverse 'ab' → 'ba', skip 'cd', reverse 'ef' → 'fe', keep 'g' → 'bacdfeg'.",k:"Jump through the string in steps of 2k and reverse the first k characters of each block (the slice just clips at the end of the string).",
i:'s = "abcdefg", k = 2',o:'"bacdfeg"',time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def reverseStr(self, s, k):
        a = list(s)
        for i in range(0, len(a), 2 * k):
            a[i:i + k] = a[i:i + k][::-1]
        return "".join(a)
`)});
lite({id:368,slug:"largest-divisible-subset",title:"Largest Divisible Subset",level:"Medium",topic:DP,name:"Sort + longest divisibility chain",
w:"[3,4,16,8]: sorted 3, 4, 8, 16 — 4 divides 8 and 8 divides 16, so [4,8,16] is the largest group where every pair divides.",k:"Sort the numbers. If a divides b and b divides c then a divides c, so we only need chains. dp[i] is the longest chain ending at nums[i]; remember the previous index to rebuild it.",
i:"nums = [3,4,16,8]",o:"[4,8,16]",time:"O(n²)",space:"O(n)",
code:C(`
class Solution:
    def largestDivisibleSubset(self, nums):
        nums.sort()
        n = len(nums)
        dp = [1] * n
        prev = [-1] * n
        best = 0
        for i in range(n):
            for j in range(i):
                if nums[i] % nums[j] == 0 and dp[j] + 1 > dp[i]:
                    dp[i] = dp[j] + 1
                    prev[i] = j
            if dp[i] > dp[best]:
                best = i
        res = []
        while best != -1:
            res.append(nums[best])
            best = prev[best]
        return res[::-1]
`)});
lite({id:113,slug:"path-sum-ii",title:"Path Sum II",level:"Medium",topic:BT,name:"DFS keeping the current path",
w:"Two root-to-leaf paths add up to 22: 5→4→11→2 and 5→8→4→5.",k:"Walk down from the root, keeping the path and the remaining sum. At a leaf with remaining sum 0, copy the path into the answer. Remove the node when going back up.",
i:"root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22",o:"[[5,4,11,2],[5,8,4,5]]",time:"O(n²)",space:"O(h)",
code:C(`
class Solution:
    def pathSum(self, root, targetSum):
        res, path = [], []
        def dfs(node, left):
            if not node:
                return
            path.append(node.val)
            left -= node.val
            if not node.left and not node.right and left == 0:
                res.append(path[:])
            dfs(node.left, left)
            dfs(node.right, left)
            path.pop()
        dfs(root, targetSum)
        return res
`)});
lite({id:377,slug:"combination-sum-iv",title:"Combination Sum IV",level:"Medium",topic:DP,name:"DP over the target",
w:"[1,2,3], target 4 has 7 ordered ways: 1+1+1+1, 1+1+2, 1+2+1, 2+1+1, 2+2, 1+3, 3+1.",k:"dp[t] is the number of ordered ways to reach t. The last number can be any x ≤ t, so dp[t] = Σ dp[t − x]. dp[0] = 1.",
i:"nums = [1,2,3], target = 4",o:"7",time:"O(target · n)",space:"O(target)",
code:C(`
class Solution:
    def combinationSum4(self, nums, target):
        dp = [1] + [0] * target
        for t in range(1, target + 1):
            for x in nums:
                if x <= t:
                    dp[t] += dp[t - x]
        return dp[target]
`)});
lite({id:674,slug:"longest-continuous-increasing-subsequence",title:"Longest Continuous Increasing Subsequence",level:"Easy",topic:ARR,name:"Running streak",
w:"[1,3,5,4,7]: the longest strictly rising run is 1,3,5 (length 3).",k:"Extend the current run while each number is bigger than the previous one; reset to 1 otherwise. Keep the longest.",
i:"nums = [1,3,5,4,7]",o:"3",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def findLengthOfLCIS(self, nums):
        best = cur = 1
        for i in range(1, len(nums)):
            cur = cur + 1 if nums[i] > nums[i - 1] else 1
            best = max(best, cur)
        return best
`)});
