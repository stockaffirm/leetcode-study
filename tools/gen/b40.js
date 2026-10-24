const {lite}=require("./lib");
const C=s=>s.replace(/^\n/,"").replace(/\n$/,"").split("\n");
const ARR="Array / String",HM="Hash Map / Set",STK="Stack / Monotonic Stack",BT="Binary Tree",GR="Graph",HP="Heap",DP="Dynamic Programming",GD="Greedy",MB="Math / Bit Manipulation",BS="Binary Search",SRT="Sorting",SW="Sliding Window",MX="Matrix",UF="Union Find / Segment Tree",TP="Two Pointers",IV="Intervals",BTK="Backtracking",DS="Design",LL="Linked List",TR="Trie";
// ---- Meta (4/8)
lite({id:639,slug:"decode-ways-ii",title:"Decode Ways II",level:"Hard",topic:DP,name:"DP with wildcard counts",
w:"'1*': the star can be 1–9. As two letters: 11–19 (9 ways); as single letters 1, then * = 1…9 (9 ways) → 18.",k:"dp[i] is the number of ways to decode the first i characters. Add the single-character ways (a digit 1–9 counts once, '*' counts 9 times) times dp[i−1], and the two-character ways (like 1* = 9 values, 2* = 6 values, ** = 15 values) times dp[i−2]. Everything modulo 10⁹+7.",
i:'s = "1*"',o:"18",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def numDecodings(self, s):
        MOD = 10 ** 9 + 7
        n = len(s)
        dp = [0] * (n + 1)
        dp[0] = 1
        dp[1] = 9 if s[0] == "*" else (0 if s[0] == "0" else 1)
        for i in range(2, n + 1):
            c, p = s[i - 1], s[i - 2]
            if c == "*":
                dp[i] += 9 * dp[i - 1]
            elif c != "0":
                dp[i] += dp[i - 1]
            if p == "*":
                if c == "*":
                    dp[i] += 15 * dp[i - 2]
                elif c <= "6":
                    dp[i] += 2 * dp[i - 2]
                else:
                    dp[i] += dp[i - 2]
            elif p == "1":
                dp[i] += (9 if c == "*" else 1) * dp[i - 2]
            elif p == "2":
                if c == "*":
                    dp[i] += 6 * dp[i - 2]
                elif c <= "6":
                    dp[i] += dp[i - 2]
            dp[i] %= MOD
        return dp[n]
`)});
lite({id:682,slug:"baseball-game",title:"Baseball Game",level:"Easy",topic:STK,name:"Stack of scores",
w:"['5','2','C','D','+']: 5, 2, then C removes the 2, D doubles 5 → 10, + adds the last two (5 + 10) = 15. Scores 5 + 10 + 15 = 30.",k:"Keep a stack of valid scores. A number is pushed; 'C' pops the last score; 'D' pushes double the last; '+' pushes the sum of the last two. The answer is the sum of the stack.",
i:'operations = ["5","2","C","D","+"]',o:"30",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def calPoints(self, operations):
        st = []
        for op in operations:
            if op == "C":
                st.pop()
            elif op == "D":
                st.append(2 * st[-1])
            elif op == "+":
                st.append(st[-1] + st[-2])
            else:
                st.append(int(op))
        return sum(st)
`)});
lite({id:907,slug:"sum-of-subarray-minimums",title:"Sum of Subarray Minimums",level:"Medium",topic:STK,name:"Monotonic stack: how far each value is the minimum",
w:"[3,1,2,4]: the minimums of all subarrays are 3,1,1,1,1,2,2,4,… adding to 17.",k:"For each element count the subarrays in which it is the minimum: it can extend left until a smaller element and right until a smaller-or-equal one. Two monotonic-stack passes give these distances; the contribution is value × left × right.",
i:"arr = [3,1,2,4]",o:"17",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def sumSubarrayMins(self, arr):
        MOD = 10 ** 9 + 7
        n = len(arr)
        left, right = [0] * n, [0] * n
        st = []
        for i in range(n):
            while st and arr[st[-1]] > arr[i]:
                st.pop()
            left[i] = i - (st[-1] if st else -1)
            st.append(i)
        st = []
        for i in range(n - 1, -1, -1):
            while st and arr[st[-1]] >= arr[i]:
                st.pop()
            right[i] = (st[-1] if st else n) - i
            st.append(i)
        return sum(a * l * r for a, l, r in zip(arr, left, right)) % MOD
`)});
lite({id:1331,slug:"rank-transform-of-an-array",title:"Rank Transform of an Array",level:"Easy",topic:SRT,name:"Sort the distinct values",
w:"[40,10,20,30]: sorted that is 10,20,30,40 → ranks 1,2,3,4 → [4,1,2,3].",k:"Sort the distinct values, give each its rank (1, 2, 3 …) in a dictionary, then replace every number by its rank.",
i:"arr = [40,10,20,30]",o:"[4,1,2,3]",time:"O(n log n)",space:"O(n)",
code:C(`
class Solution:
    def arrayRankTransform(self, arr):
        rank = {v: i + 1 for i, v in enumerate(sorted(set(arr)))}
        return [rank[x] for x in arr]
`)});
lite({id:1379,slug:"find-a-corresponding-node-of-a-binary-tree-in-a-clone-of-that-tree",title:"Find a Corresponding Node of a Binary Tree in a Clone of That Tree",level:"Easy",topic:BT,name:"Walk both trees together",
w:"The target is the node 3 in the original; walking the clone along the same path leads to its twin.",k:"Traverse the original and the clone at the same time. When the original node is the target (same object), return the clone node at that position.",
i:"tree [7,4,3,null,null,6,19], target = the node 3",o:"the node 3 of the cloned tree",time:"O(n)",space:"O(h)",
code:C(`
class Solution:
    def getTargetCopy(self, original, cloned, target):
        if not original:
            return None
        if original is target:
            return cloned
        return (self.getTargetCopy(original.left, cloned.left, target)
                or self.getTargetCopy(original.right, cloned.right, target))
`)});
lite({id:1614,slug:"maximum-nesting-depth-of-the-parentheses",title:"Maximum Nesting Depth of the Parentheses",level:"Easy",topic:STK,name:"Depth counter",
w:"In '(1+(2*3)+((8)/4))+1' the deepest place is the 8, inside three open brackets → 3.",k:"Walk the string and keep the number of currently open brackets; the answer is the largest value it reaches.",
i:'s = "(1+(2*3)+((8)/4))+1"',o:"3",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def maxDepth(self, s):
        depth = best = 0
        for ch in s:
            if ch == "(":
                depth += 1
                best = max(best, depth)
            elif ch == ")":
                depth -= 1
        return best
`)});
lite({id:1748,slug:"sum-of-unique-elements",title:"Sum of Unique Elements",level:"Easy",topic:HM,name:"Count, then sum the singles",
w:"[1,2,3,2]: 1 and 3 appear once → 4.",k:"Count each number and add up the numbers whose count is exactly 1.",
i:"nums = [1,2,3,2]",o:"4",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def sumOfUnique(self, nums):
        cnt = Counter(nums)
        return sum(x for x, c in cnt.items() if c == 1)
`)});
lite({id:2210,slug:"count-hills-and-valleys-in-an-array",title:"Count Hills and Valleys in an Array",level:"Easy",topic:ARR,name:"Compare with the last different neighbour",
w:"[2,4,1,1,6,5]: 4 is a hill, the run 1,1 is a valley, 6 is a hill → 3.",k:"Equal neighbours count as one position. For each element compare with the previous different value and the next different value: both smaller = hill, both bigger = valley. Skip an element equal to the next, and only update 'previous' after a real move.",
i:"nums = [2,4,1,1,6,5]",o:"3",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def countHillValley(self, nums):
        res = 0
        prev = nums[0]
        for i in range(1, len(nums) - 1):
            if nums[i] == nums[i + 1]:
                continue
            if (nums[i] > prev and nums[i] > nums[i + 1]) or (nums[i] < prev and nums[i] < nums[i + 1]):
                res += 1
            prev = nums[i]
        return res
`)});
lite({id:2965,slug:"find-missing-and-repeated-values",title:"Find Missing and Repeated Values",level:"Easy",topic:HM,name:"Count every value",
w:"[[1,3],[2,2]]: 2 appears twice, 4 never appears → [2, 4].",k:"The grid holds the numbers 1…n² once each, except one repeated and one missing. Count them and report the value with count 2 and the one with count 0.",
i:"grid = [[1,3],[2,2]]",o:"[2, 4]",time:"O(n²)",space:"O(n²)",
code:C(`
class Solution:
    def findMissingAndRepeatedValues(self, grid):
        cnt = Counter(x for row in grid for x in row)
        n2 = len(grid) ** 2
        repeated = next(x for x, c in cnt.items() if c == 2)
        missing = next(x for x in range(1, n2 + 1) if x not in cnt)
        return [repeated, missing]
`)});
lite({id:441,slug:"arranging-coins",title:"Arranging Coins",level:"Easy",topic:BS,name:"Binary search the number of rows",
w:"5 coins: rows of 1, 2, 2 → 2 full rows (the 3rd row would need 3).",k:"k full rows need k(k+1)/2 coins. That grows with k, so binary search the largest k with k(k+1)/2 ≤ n.",
i:"n = 5",o:"2",time:"O(log n)",space:"O(1)",
code:C(`
class Solution:
    def arrangeCoins(self, n):
        lo, hi = 0, n
        while lo < hi:
            mid = (lo + hi + 1) // 2
            if mid * (mid + 1) // 2 <= n:
                lo = mid
            else:
                hi = mid - 1
        return lo
`)});
lite({id:159,slug:"longest-substring-with-at-most-two-distinct-characters",title:"Longest Substring with At Most Two Distinct Characters",level:"Medium",topic:SW,name:"Sliding window with a count dictionary",
w:"'eceba': the longest piece with at most 2 different letters is 'ece' (length 3).",k:"Grow the window to the right and count its letters. If it holds more than 2 different letters, move the left edge forward until it is back to 2. Track the longest window.",
i:'s = "eceba"',o:"3",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def lengthOfLongestSubstringTwoDistinct(self, s):
        cnt = {}
        left = best = 0
        for right, ch in enumerate(s):
            cnt[ch] = cnt.get(ch, 0) + 1
            while len(cnt) > 2:
                cnt[s[left]] -= 1
                if cnt[s[left]] == 0:
                    del cnt[s[left]]
                left += 1
            best = max(best, right - left + 1)
        return best
`)});
lite({id:275,slug:"h-index-ii",title:"H-Index II",level:"Medium",topic:BS,name:"Binary search on the sorted citations",
w:"Citations [0,1,3,5,6]: 3 papers (3, 5, 6) have at least 3 citations → h = 3.",k:"With the citations sorted ascending, the paper at index i has n − i papers at or above it. Find the first i where citations[i] ≥ n − i; then h = n − i. Binary search does it in O(log n).",
i:"citations = [0,1,3,5,6]",o:"3",time:"O(log n)",space:"O(1)",
code:C(`
class Solution:
    def hIndex(self, citations):
        n = len(citations)
        lo, hi = 0, n
        while lo < hi:
            mid = (lo + hi) // 2
            if citations[mid] >= n - mid:
                hi = mid
            else:
                lo = mid + 1
        return n - lo
`)});
lite({id:455,slug:"assign-cookies",title:"Assign Cookies",level:"Easy",topic:GD,name:"Smallest enough cookie for the least greedy child",
w:"g = [1,2,3], cookies [1,1]: the cookie 1 satisfies the child with greed 1; the other 1 is too small for greed 2 → 1 child.",k:"Sort both lists. Walk through the cookies from the smallest; each cookie goes to the least greedy child still waiting if it is big enough.",
i:"g = [1,2,3], s = [1,1]",o:"1",time:"O(n log n + m log m)",space:"O(1)",
code:C(`
class Solution:
    def findContentChildren(self, g, s):
        g.sort()
        s.sort()
        i = 0
        for cookie in s:
            if i < len(g) and g[i] <= cookie:
                i += 1
        return i
`)});
lite({id:554,slug:"brick-wall",title:"Brick Wall",level:"Medium",topic:HM,name:"Count where the brick joints line up",
w:"The best vertical line passes through 4 joints (at x = 4), so it crosses 6 − 4 = 2 bricks.",k:"A vertical line that crosses the fewest bricks goes through the most joints. Count how many rows have a joint at each x position (ignoring the right edge of the wall); the answer is the number of rows minus the best count.",
i:"wall = [[1,2,2,1],[3,1,2],[1,3,2],[2,4],[3,1,2],[1,3,1,1]]",o:"2",time:"O(total bricks)",space:"O(total bricks)",
code:C(`
class Solution:
    def leastBricks(self, wall):
        cnt = Counter()
        for row in wall:
            pos = 0
            for b in row[:-1]:
                pos += b
                cnt[pos] += 1
        return len(wall) - max(cnt.values(), default=0)
`)});
lite({id:673,slug:"number-of-longest-increasing-subsequence",title:"Number of Longest Increasing Subsequence",level:"Medium",topic:DP,name:"DP of (length, count)",
w:"[1,3,5,4,7]: the longest increasing subsequences have length 4: 1,3,5,7 and 1,3,4,7 → 2.",k:"For each i keep the length of the longest increasing subsequence ending there and how many such subsequences exist. A previous smaller number j extends it: if it gives a longer length replace the count, if it ties add the counts.",
i:"nums = [1,3,5,4,7]",o:"2",time:"O(n²)",space:"O(n)",
code:C(`
class Solution:
    def findNumberOfLIS(self, nums):
        n = len(nums)
        length = [1] * n
        count = [1] * n
        for i in range(n):
            for j in range(i):
                if nums[j] < nums[i]:
                    if length[j] + 1 > length[i]:
                        length[i] = length[j] + 1
                        count[i] = count[j]
                    elif length[j] + 1 == length[i]:
                        count[i] += count[j]
        best = max(length)
        return sum(c for l, c in zip(length, count) if l == best)
`)});
lite({id:764,slug:"largest-plus-sign",title:"Largest Plus Sign",level:"Medium",topic:DP,name:"Four directional runs per cell",
w:"A 5×5 grid with one hole at (4,2): the biggest plus has order 2 (arm length 1 on each side).",k:"The plus around a cell is limited by the shortest of its four arms. For every cell compute how many consecutive non-hole cells end there from the left, right, top and bottom; the order is the minimum of the four. Take the maximum.",
i:"n = 5, mines = [[4,2]]",o:"2",time:"O(n²)",space:"O(n²)",
code:C(`
class Solution:
    def orderOfLargestPlusSign(self, n, mines):
        banned = {(x, y) for x, y in mines}
        dp = [[n] * n for _ in range(n)]
        for i in range(n):
            cnt = 0
            for j in range(n):
                cnt = 0 if (i, j) in banned else cnt + 1
                dp[i][j] = min(dp[i][j], cnt)
            cnt = 0
            for j in range(n - 1, -1, -1):
                cnt = 0 if (i, j) in banned else cnt + 1
                dp[i][j] = min(dp[i][j], cnt)
        for j in range(n):
            cnt = 0
            for i in range(n):
                cnt = 0 if (i, j) in banned else cnt + 1
                dp[i][j] = min(dp[i][j], cnt)
            cnt = 0
            for i in range(n - 1, -1, -1):
                cnt = 0 if (i, j) in banned else cnt + 1
                dp[i][j] = min(dp[i][j], cnt)
        return max(max(row) for row in dp)
`)});
lite({id:1213,slug:"intersection-of-three-sorted-arrays",title:"Intersection of Three Sorted Arrays",level:"Easy",topic:TP,name:"Three pointers",
w:"1 and 5 appear in all three arrays → [1, 5].",k:"Keep one pointer per array. If the three current numbers are equal, record it and move all pointers; otherwise move the pointer(s) holding the smallest number.",
i:"arr1=[1,2,3,4,5], arr2=[1,2,5,7,9], arr3=[1,3,4,5,8]",o:"[1, 5]",time:"O(a+b+c)",space:"O(1)",
code:C(`
class Solution:
    def arraysIntersection(self, arr1, arr2, arr3):
        i = j = k = 0
        res = []
        while i < len(arr1) and j < len(arr2) and k < len(arr3):
            a, b, c = arr1[i], arr2[j], arr3[k]
            if a == b == c:
                res.append(a)
                i += 1
                j += 1
                k += 1
            else:
                m = min(a, b, c)
                if a == m:
                    i += 1
                if b == m:
                    j += 1
                if c == m:
                    k += 1
        return res
`)});
lite({id:1110,slug:"delete-nodes-and-return-forest",title:"Delete Nodes And Return Forest",level:"Medium",topic:BT,name:"DFS passing 'is a new root'",
w:"Deleting 3 and 5 from [1,2,3,4,5,6,7] leaves the trees [1,2,null,4], [6] and [7].",k:"DFS with a flag telling whether the node is a root of a new tree (its parent was deleted, or it is the real root). A node that is not deleted and is a root joins the answer. Children of a deleted node get the flag; deleted nodes are cut off by returning None.",
i:"root = [1,2,3,4,5,6,7], to_delete = [3,5]",o:"[[1,2,null,4],[6],[7]]",time:"O(n)",space:"O(h)",
code:C(`
class Solution:
    def delNodes(self, root, to_delete):
        drop = set(to_delete)
        res = []
        def dfs(node, is_root):
            if not node:
                return None
            deleted = node.val in drop
            if is_root and not deleted:
                res.append(node)
            node.left = dfs(node.left, deleted)
            node.right = dfs(node.right, deleted)
            return None if deleted else node
        dfs(root, True)
        return res
`)});
lite({id:1361,slug:"validate-binary-tree-nodes",title:"Validate Binary Tree Nodes",level:"Medium",topic:GR,name:"One root, one parent each, all reachable",
w:"Node 0 has the children 1 (left) and 2 (right); node 2 has the child 3 (left). One root, every other node has exactly one parent, and all 4 nodes are reachable → true.",k:"A valid binary tree has exactly one node with no parent (the root), no node with two parents, and every node reachable from the root. Compute in-degrees, find the root, then BFS and make sure each node is met once and all n are visited.",
i:"n=4, leftChild=[1,-1,3,-1], rightChild=[2,-1,-1,-1]",o:"true",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def validateBinaryTreeNodes(self, n, leftChild, rightChild):
        indeg = [0] * n
        for c in leftChild + rightChild:
            if c != -1:
                indeg[c] += 1
        roots = [i for i in range(n) if indeg[i] == 0]
        if len(roots) != 1 or any(d > 1 for d in indeg):
            return False
        seen = set()
        q = deque(roots)
        while q:
            u = q.popleft()
            if u in seen:
                return False
            seen.add(u)
            for c in (leftChild[u], rightChild[u]):
                if c != -1:
                    q.append(c)
        return len(seen) == n
`)});
lite({id:1239,slug:"maximum-length-of-a-concatenated-string-with-unique-characters",title:"Maximum Length of a Concatenated String with Unique Characters",level:"Medium",topic:BTK,name:"Bitmask combinations",
w:"'un' + 'iq' = 'uniq' (4 unique letters); 'ue' clashes with 'un' (u twice) → best is 4.",k:"Turn each word into a 26-bit mask (skip words with a repeated letter). Keep all masks reachable so far with their lengths; a word can be added to a combination only if the masks do not overlap.",
i:'arr = ["un","iq","ue"]',o:"4",time:"O(2ⁿ)",space:"O(2ⁿ)",
code:C(`
class Solution:
    def maxLength(self, arr):
        combos = {0: 0}
        for w in arr:
            m = 0
            for ch in w:
                bit = 1 << (ord(ch) - 97)
                if m & bit:
                    m = None
                    break
                m |= bit
            if m is None:
                continue
            for old, length in list(combos.items()):
                if not old & m:
                    combos[old | m] = length + len(w)
        return max(combos.values())
`)});
lite({id:1498,slug:"number-of-subsequences-that-satisfy-the-given-sum-condition",title:"Number of Subsequences That Satisfy the Given Sum Condition",level:"Medium",topic:TP,name:"Sort + two pointers + powers of 2",
w:"[3,5,6,7], target 9: valid subsequences are [3], [3,5], [3,6], [3,5,6] → 4.",k:"The order of picks does not matter, so sort. With min = nums[l] and max = nums[r] and min + max ≤ target, every subset of the numbers strictly between them (2^(r−l) choices) works together with those two ends. Move the pointers: if the sum fits count 2^(r−l) and advance l, else shrink r.",
i:"nums = [3,5,6,7], target = 9",o:"4",time:"O(n log n)",space:"O(n)",
code:C(`
class Solution:
    def numSubseq(self, nums, target):
        MOD = 10 ** 9 + 7
        nums.sort()
        n = len(nums)
        pow2 = [1] * n
        for i in range(1, n):
            pow2[i] = pow2[i - 1] * 2 % MOD
        l, r = 0, n - 1
        res = 0
        while l <= r:
            if nums[l] + nums[r] <= target:
                res = (res + pow2[r - l]) % MOD
                l += 1
            else:
                r -= 1
        return res
`)});
lite({id:1920,slug:"build-array-from-permutation",title:"Build Array from Permutation",level:"Easy",topic:ARR,name:"Direct lookup",
w:"For each i the answer is nums[nums[i]]: nums[nums[0]] = nums[0] = 0, nums[nums[1]] = nums[2] = 1 …",k:"Build the new array with ans[i] = nums[nums[i]].",
i:"nums = [0,2,1,5,3,4]",o:"[0,1,2,4,5,3]",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def buildArray(self, nums):
        return [nums[nums[i]] for i in range(len(nums))]
`)});
lite({id:2824,slug:"count-pairs-whose-sum-is-less-than-target",title:"Count Pairs Whose Sum is Less than Target",level:"Easy",topic:TP,name:"Sort + two pointers",
w:"[-1,1,2,3,1], target 2: the pairs (−1,1), (−1,2) and (−1,1) → 3.",k:"Sort. If nums[l] + nums[r] < target then all of nums[l+1…r] also pair with nums[l]: add r − l and move l. Otherwise move r down.",
i:"nums = [-1,1,2,3,1], target = 2",o:"3",time:"O(n log n)",space:"O(1)",
code:C(`
class Solution:
    def countPairs(self, nums, target):
        nums.sort()
        l, r = 0, len(nums) - 1
        res = 0
        while l < r:
            if nums[l] + nums[r] < target:
                res += r - l
                l += 1
            else:
                r -= 1
        return res
`)});
lite({id:860,slug:"lemonade-change",title:"Lemonade Change",level:"Easy",topic:GD,name:"Count the 5s and 10s",
w:"Customers pay 5, 5, 5, 10, 20: the 10 gets a 5 back; the 20 gets 10 + 5 back. Everyone gets the right change → true.",k:"Only 5s and 10s are useful as change. For a 10 give one 5. For a 20 give 10 + 5 if possible (keeps the more flexible 5s), otherwise three 5s.",
i:"bills = [5,5,5,10,20]",o:"true",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def lemonadeChange(self, bills):
        five = ten = 0
        for b in bills:
            if b == 5:
                five += 1
            elif b == 10:
                if not five:
                    return False
                five -= 1
                ten += 1
            else:
                if ten and five:
                    ten -= 1
                    five -= 1
                elif five >= 3:
                    five -= 3
                else:
                    return False
        return True
`)});
lite({id:684,slug:"redundant-connection",title:"Redundant Connection",level:"Medium",topic:UF,name:"Union Find",
w:"Edges 1–2 and 1–3 connect all three nodes; the edge 2–3 closes a cycle, so it is the redundant one.",k:"Add the edges one by one with Union Find. The first edge whose two ends are already in the same group closes the cycle — return it.",
i:"edges = [[1,2],[1,3],[2,3]]",o:"[2, 3]",time:"O(n α(n))",space:"O(n)",
code:C(`
class Solution:
    def findRedundantConnection(self, edges):
        parent = list(range(len(edges) + 1))
        def find(x):
            while parent[x] != x:
                parent[x] = parent[parent[x]]
                x = parent[x]
            return x
        for a, b in edges:
            ra, rb = find(a), find(b)
            if ra == rb:
                return [a, b]
            parent[ra] = rb
`)});
lite({id:1903,slug:"largest-odd-number-in-string",title:"Largest Odd Number in String",level:"Easy",topic:ARR,name:"Cut after the last odd digit",
w:"'52': the last digit 2 is even, so cut it off → '5'.",k:"A number is odd iff its last digit is odd. The largest odd substring is the longest prefix that ends in an odd digit: look for the last odd digit and cut right after it.",
i:'num = "52"',o:'"5"',time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def largestOddNumber(self, num):
        for i in range(len(num) - 1, -1, -1):
            if int(num[i]) % 2:
                return num[:i + 1]
        return ""
`)});
