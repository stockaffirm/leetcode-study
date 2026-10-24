const {lite}=require("./lib");
const C=s=>s.replace(/^\n/,"").replace(/\n$/,"").split("\n");
const ARR="Array / String",HM="Hash Map / Set",STK="Stack / Monotonic Stack",BT="Binary Tree",GR="Graph",HP="Heap",DP="Dynamic Programming",GD="Greedy",MB="Math / Bit Manipulation",BS="Binary Search",SRT="Sorting",SW="Sliding Window",MX="Matrix",UF="Union Find / Segment Tree",TP="Two Pointers",IV="Intervals",BTK="Backtracking",DS="Design",LL="Linked List",TR="Trie";
// ---- Meta (6/8)
lite({id:1773,slug:"count-items-matching-a-rule",title:"Count Items Matching a Rule",level:"Easy",topic:ARR,name:"Pick the column, then count",
w:"Items are [type, color, name]. With ruleKey 'color' and value 'silver' only the computer matches → 1.",k:"Turn the rule key into a column index (type = 0, color = 1, name = 2) and count the items whose entry in that column equals the value.",
i:'items = [["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]], ruleKey = "color", ruleValue = "silver"',o:"1",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def countMatches(self, items, ruleKey, ruleValue):
        idx = {"type": 0, "color": 1, "name": 2}[ruleKey]
        return sum(item[idx] == ruleValue for item in items)
`)});
lite({id:1976,slug:"number-of-ways-to-arrive-at-destination",title:"Number of Ways to Arrive at Destination",level:"Medium",topic:GR,name:"Dijkstra that counts shortest paths",
w:"There are 4 different shortest routes (7 minutes) from 0 to 6 in the example graph.",k:"Run Dijkstra and keep for every node the number of shortest paths found so far. When a strictly shorter way to a node appears, copy the count of its predecessor; when an equally short way appears, add the counts (modulo 10⁹+7).",
i:"n=7, roads=[[0,6,7],[0,1,2],[1,2,3],[1,3,3],[6,3,3],[3,5,1],[6,5,1],[2,5,1],[0,4,5],[4,6,2]]",o:"4",time:"O(E log n)",space:"O(n + E)",
code:C(`
class Solution:
    def countPaths(self, n, roads):
        MOD = 10 ** 9 + 7
        g = defaultdict(list)
        for u, v, w in roads:
            g[u].append((v, w))
            g[v].append((u, w))
        dist = [inf] * n
        ways = [0] * n
        dist[0], ways[0] = 0, 1
        h = [(0, 0)]
        while h:
            d, u = heappop(h)
            if d > dist[u]:
                continue
            for v, w in g[u]:
                nd = d + w
                if nd < dist[v]:
                    dist[v] = nd
                    ways[v] = ways[u]
                    heappush(h, (nd, v))
                elif nd == dist[v]:
                    ways[v] = (ways[v] + ways[u]) % MOD
        return ways[n - 1] % MOD
`)});
lite({id:2553,slug:"separate-the-digits-in-an-array",title:"Separate the Digits in an Array",level:"Easy",topic:ARR,name:"Digits of each number in order",
w:"[13,25,83,77] → 1,3, 2,5, 8,3, 7,7.",k:"Write every number as text and append its digits one by one, keeping the original order.",
i:"nums = [13,25,83,77]",o:"[1,3,2,5,8,3,7,7]",time:"O(total digits)",space:"O(total digits)",
code:C(`
class Solution:
    def separateDigits(self, nums):
        return [int(d) for x in nums for d in str(x)]
`)});
lite({id:1283,slug:"find-the-smallest-divisor-given-a-threshold",title:"Find the Smallest Divisor Given a Threshold",level:"Medium",topic:BS,name:"Binary search the divisor",
w:"[1,2,5,9], threshold 6: divisor 5 gives 1 + 1 + 1 + 2 = 5 ≤ 6, divisor 4 gives 1 + 1 + 2 + 3 = 7 > 6 → 5.",k:"A bigger divisor makes the sum of rounded-up quotients smaller (or equal). Binary search the smallest divisor whose sum is at most the threshold.",
i:"nums = [1,2,5,9], threshold = 6",o:"5",time:"O(n log max)",space:"O(1)",
code:C(`
class Solution:
    def smallestDivisor(self, nums, threshold):
        lo, hi = 1, max(nums)
        while lo < hi:
            mid = (lo + hi) // 2
            if sum((x + mid - 1) // mid for x in nums) <= threshold:
                hi = mid
            else:
                lo = mid + 1
        return lo
`)});
lite({id:142,slug:"linked-list-cycle-ii",title:"Linked List Cycle II",level:"Medium",topic:LL,name:"Floyd: meet, then restart one pointer",
w:"The list 3→2→0→−4 loops back to the node 2, so the cycle starts at the node with value 2.",k:"Move a slow (1 step) and a fast (2 steps) pointer. If they meet there is a cycle. Put one pointer back to the head and move both one step at a time: they meet exactly at the start of the cycle.",
i:"head = [3,2,0,-4], tail connects to index 1",o:"the node with value 2",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def detectCycle(self, head):
        slow = fast = head
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next
            if slow is fast:
                slow = head
                while slow is not fast:
                    slow = slow.next
                    fast = fast.next
                return slow
        return None
`)});
lite({id:144,slug:"binary-tree-preorder-traversal",title:"Binary Tree Preorder Traversal",level:"Easy",topic:BT,name:"Iterative with a stack",
w:"Tree 1 → right child 2 → left child 3. Preorder visits node, left, right: 1, 2, 3.",k:"Pop a node from the stack, record it, then push its right child first and its left child second so the left one is processed next.",
i:"root = [1,null,2,3]",o:"[1, 2, 3]",time:"O(n)",space:"O(h)",
code:C(`
class Solution:
    def preorderTraversal(self, root):
        res = []
        stack = [root] if root else []
        while stack:
            node = stack.pop()
            res.append(node.val)
            if node.right:
                stack.append(node.right)
            if node.left:
                stack.append(node.left)
        return res
`)});
lite({id:285,slug:"inorder-successor-in-bst",title:"Inorder Successor in BST",level:"Medium",topic:BT,name:"Walk down, remember the last left turn",
w:"In the tree 2 with children 1 and 3, the successor of 1 is 2.",k:"The successor of p is the smallest value larger than p. Walk down from the root: if p is smaller than the current node, this node is a candidate and we go left; otherwise go right.",
i:"root = [2,1,3], p = 1",o:"2",time:"O(h)",space:"O(1)",
code:C(`
class Solution:
    def inorderSuccessor(self, root, p):
        succ = None
        cur = root
        while cur:
            if p.val < cur.val:
                succ = cur
                cur = cur.left
            else:
                cur = cur.right
        return succ
`)});
lite({id:316,slug:"remove-duplicate-letters",title:"Remove Duplicate Letters",level:"Medium",topic:STK,name:"Monotonic stack with last positions",
w:"'cbacdcbc' → 'acdb': every letter once, and it is the smallest possible order.",k:"Build the answer on a stack. When a smaller letter comes and the letter on top will appear again later, pop the top (it can be re-added later). A letter already in the stack is skipped.",
i:'s = "cbacdcbc"',o:'"acdb"',time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def removeDuplicateLetters(self, s):
        last = {c: i for i, c in enumerate(s)}
        st, seen = [], set()
        for i, c in enumerate(s):
            if c in seen:
                continue
            while st and st[-1] > c and last[st[-1]] > i:
                seen.remove(st.pop())
            st.append(c)
            seen.add(c)
        return "".join(st)
`)});
lite({id:326,slug:"power-of-three",title:"Power of Three",level:"Easy",topic:MB,name:"Divide the largest power of 3",
w:"27 = 3³ → true.",k:"3 is prime, so n is a power of 3 exactly when it divides the largest power of 3 that fits in 32 bits (3¹⁹ = 1,162,261,467).",
i:"n = 27",o:"true",time:"O(1)",space:"O(1)",
code:C(`
class Solution:
    def isPowerOfThree(self, n):
        return n > 0 and 1162261467 % n == 0
`)});
lite({id:407,slug:"trapping-rain-water-ii",title:"Trapping Rain Water II",level:"Hard",topic:HP,name:"Min-heap flood from the border",
w:"The terrain holds 4 units of water in its low spots.",k:"Water can only escape over the border. Put all border cells in a min-heap and always process the lowest one. Each unvisited neighbour holds max(0, current wall − its height) water, and then joins the heap with height max(wall, own height).",
i:"heightMap = [[1,4,3,1,3,2],[3,2,1,3,2,4],[2,3,3,2,3,1]]",o:"4",time:"O(m·n log(m·n))",space:"O(m·n)",
code:C(`
class Solution:
    def trapRainWater(self, heightMap):
        m, n = len(heightMap), len(heightMap[0])
        if m < 3 or n < 3:
            return 0
        h = []
        seen = [[False] * n for _ in range(m)]
        for i in range(m):
            for j in range(n):
                if i in (0, m - 1) or j in (0, n - 1):
                    heappush(h, (heightMap[i][j], i, j))
                    seen[i][j] = True
        water = 0
        while h:
            height, i, j = heappop(h)
            for a, b in ((i + 1, j), (i - 1, j), (i, j + 1), (i, j - 1)):
                if 0 <= a < m and 0 <= b < n and not seen[a][b]:
                    seen[a][b] = True
                    water += max(0, height - heightMap[a][b])
                    heappush(h, (max(height, heightMap[a][b]), a, b))
        return water
`)});
lite({id:461,slug:"hamming-distance",title:"Hamming Distance",level:"Easy",topic:MB,name:"XOR and count the ones",
w:"1 = 0001 and 4 = 0100 differ in 2 bit positions.",k:"x XOR y has a 1 exactly where the bits differ. Count the 1s.",
i:"x = 1, y = 4",o:"2",time:"O(1)",space:"O(1)",
code:C(`
class Solution:
    def hammingDistance(self, x, y):
        return bin(x ^ y).count("1")
`)});
lite({id:750,slug:"number-of-corner-rectangles",title:"Number Of Corner Rectangles",level:"Medium",topic:MX,name:"Count common 1-columns of row pairs",
w:"Only one rectangle has four 1s in its corners: rows 1 and 3 share the columns 2 and 4.",k:"A rectangle is defined by two rows and two columns that are 1 in both rows. For each pair of rows count the columns where both are 1 (c); they form c·(c−1)/2 rectangles.",
i:"grid = [[1,0,0,1,0],[0,0,1,0,1],[0,0,0,1,0],[1,0,1,0,1]]",o:"1",time:"O(m²·n)",space:"O(1)",
code:C(`
class Solution:
    def countCornerRectangles(self, grid):
        m = len(grid)
        res = 0
        for i in range(m):
            for j in range(i + 1, m):
                c = sum(a & b for a, b in zip(grid[i], grid[j]))
                res += c * (c - 1) // 2
        return res
`)});
lite({id:801,slug:"minimum-swaps-to-make-sequences-increasing",title:"Minimum Swaps To Make Sequences Increasing",level:"Hard",topic:DP,name:"Two-state DP: keep or swap",
w:"[1,3,5,4] and [1,2,3,7]: swapping position 3 gives [1,3,5,7] and [1,2,3,4] — both increasing with 1 swap.",k:"At each index we either keep or swap the pair. keep / swap hold the fewest swaps so far for each choice at the previous index. A choice is allowed if both rows still increase (same decision as before) or cross-increase (opposite decision).",
i:"nums1 = [1,3,5,4], nums2 = [1,2,3,7]",o:"1",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def minSwap(self, nums1, nums2):
        keep, swap = 0, 1
        for i in range(1, len(nums1)):
            nkeep = nswap = inf
            if nums1[i] > nums1[i - 1] and nums2[i] > nums2[i - 1]:
                nkeep = keep
                nswap = swap + 1
            if nums1[i] > nums2[i - 1] and nums2[i] > nums1[i - 1]:
                nkeep = min(nkeep, swap)
                nswap = min(nswap, keep + 1)
            keep, swap = nkeep, nswap
        return min(keep, swap)
`)});
lite({id:844,slug:"backspace-string-compare",title:"Backspace String Compare",level:"Easy",topic:TP,name:"Two pointers from the end",
w:"'ab#c' and 'ad#c' both end up as 'ac' → true.",k:"Walk both strings from the right. A '#' means skip one more letter. Jump each pointer to its next real letter and compare; no extra memory is needed.",
i:'s = "ab#c", t = "ad#c"',o:"true",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def backspaceCompare(self, s, t):
        def next_valid(x, i):
            skip = 0
            while i >= 0:
                if x[i] == "#":
                    skip += 1
                elif skip:
                    skip -= 1
                else:
                    break
                i -= 1
            return i
        i, j = len(s) - 1, len(t) - 1
        while i >= 0 or j >= 0:
            i = next_valid(s, i)
            j = next_valid(t, j)
            if i >= 0 and j >= 0:
                if s[i] != t[j]:
                    return False
            elif i >= 0 or j >= 0:
                return False
            i -= 1
            j -= 1
        return True
`)});
lite({id:893,slug:"groups-of-special-equivalent-strings",title:"Groups of Special-Equivalent Strings",level:"Medium",topic:HM,name:"Signature = sorted even letters + sorted odd letters",
w:"'abcd' and 'cdab' can be turned into each other by swapping letters at even positions and at odd positions, so they are in one group; the words fall into 3 groups.",k:"A swap of two letters at positions of the same parity keeps the multiset of even-position letters and of odd-position letters. So two words are equivalent exactly when these two sorted lists are equal — count the distinct signatures.",
i:'words = ["abcd","cdab","cbad","xyzz","zzxy","zzyx"]',o:"3",time:"O(n·L log L)",space:"O(n·L)",
code:C(`
class Solution:
    def numSpecialEquivGroups(self, words):
        return len({("".join(sorted(w[0::2])), "".join(sorted(w[1::2]))) for w in words})
`)});
lite({id:998,slug:"maximum-binary-tree-ii",title:"Maximum Binary Tree II",level:"Medium",topic:BT,name:"Insert down the right spine",
w:"Adding 5 to the max tree [4,1,3,null,null,2] makes 5 the new root with the old tree as its left child.",k:"The new value was appended at the END of the original list. So it can only go on the right spine: go right while the node is bigger than the value; at the first node that is smaller (or at the end) make the new value take its place with that subtree as its left child.",
i:"root = [4,1,3,null,null,2], val = 5",o:"[5,4,null,1,3,null,null,2]",time:"O(h)",space:"O(h)",
code:C(`
class Solution:
    def insertIntoMaxTree(self, root, val):
        if not root or val > root.val:
            return TreeNode(val, root)
        root.right = self.insertIntoMaxTree(root.right, val)
        return root
`)});
lite({id:1033,slug:"moving-stones-until-consecutive",title:"Moving Stones Until Consecutive",level:"Medium",topic:MB,name:"Case analysis on the gaps",
w:"Stones at 1, 2, 5: at least 1 move (5 → 3), at most 2 moves (5 → 4 → 3).",k:"Sort the three positions x < y < z. Maximum: move one stone one step at a time → z − x − 2. Minimum: 0 if already consecutive, 1 if one gap is at most 1 (a stone can jump into it), otherwise 2.",
i:"a = 1, b = 2, c = 5",o:"[1, 2]",time:"O(1)",space:"O(1)",
code:C(`
class Solution:
    def numMovesStones(self, a, b, c):
        x, y, z = sorted((a, b, c))
        high = z - x - 2
        if high == 0:
            return [0, 0]
        low = 1 if y - x <= 2 or z - y <= 2 else 2
        return [low, high]
`)});
lite({id:1040,slug:"moving-stones-until-consecutive-ii",title:"Moving Stones Until Consecutive II",level:"Medium",topic:SW,name:"Sliding window of n positions",
w:"Stones at 4, 7, 9: the minimum is 1 move (4 → 8 gives 7, 8, 9), the maximum is 2.",k:"Maximum: skip the first or the last gap — max(last − second − (n−2), second-last − first − (n−2)). Minimum: slide a window of n positions over the sorted stones; the stones outside must move, so the cost is n − (stones inside). Special case: if n−1 stones already sit next to each other (span n−2) and one stone is far away, that needs 2 moves, not 1.",
i:"stones = [7,4,9]",o:"[1, 2]",time:"O(n log n)",space:"O(1)",
code:C(`
class Solution:
    def numMovesStonesII(self, stones):
        stones.sort()
        n = len(stones)
        high = max(stones[-1] - stones[1] - n + 2, stones[-2] - stones[0] - n + 2)
        low = n
        j = 0
        for i in range(n):
            while stones[i] - stones[j] >= n:
                j += 1
            if i - j + 1 == n - 1 and stones[i] - stones[j] == n - 2:
                low = min(low, 2)
            else:
                low = min(low, n - (i - j + 1))
        return [low, high]
`)});
lite({id:1248,slug:"count-number-of-nice-subarrays",title:"Count Number of Nice Subarrays",level:"Medium",topic:"Prefix Sum",name:"Prefix count of odd numbers",
w:"[1,1,2,1,1] with k = 3: the subarrays [1,1,2,1] and [1,2,1,1] contain exactly three odd numbers → 2.",k:"Keep a running count of odd numbers and how many times each count was seen as a prefix. A subarray ending here has exactly k odds if an earlier prefix had (odd − k) odd numbers.",
i:"nums = [1,1,2,1,1], k = 3",o:"2",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def numberOfSubarrays(self, nums, k):
        cnt = defaultdict(int)
        cnt[0] = 1
        odd = res = 0
        for x in nums:
            odd += x % 2
            res += cnt[odd - k]
            cnt[odd] += 1
        return res
`)});
lite({id:1344,slug:"angle-between-hands-of-a-clock",title:"Angle Between Hands of a Clock",level:"Medium",topic:MB,name:"Angles of both hands",
w:"At 12:30 the hour hand is halfway to 1 (15°) and the minute hand points at 6 (180°): the difference is 165°.",k:"The minute hand moves 6° per minute. The hour hand moves 30° per hour plus 0.5° per minute. Take the difference and the smaller of it and 360 − it.",
i:"hour = 12, minutes = 30",o:"165.0",time:"O(1)",space:"O(1)",
code:C(`
class Solution:
    def angleClock(self, hour, minutes):
        h = (hour % 12) * 30 + minutes * 0.5
        m = minutes * 6
        d = abs(h - m)
        return min(d, 360 - d)
`)});
lite({id:1351,slug:"count-negative-numbers-in-a-sorted-matrix",title:"Count Negative Numbers in a Sorted Matrix",level:"Easy",topic:MX,name:"Staircase walk from the top right",
w:"The grid has 8 negative numbers.",k:"Rows and columns are sorted in decreasing order. Start at the top-right corner: if the cell is negative, the whole column below it is negative (add that many) and move left; otherwise move down.",
i:"grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]",o:"8",time:"O(m + n)",space:"O(1)",
code:C(`
class Solution:
    def countNegatives(self, grid):
        m, n = len(grid), len(grid[0])
        r, c, res = 0, n - 1, 0
        while r < m and c >= 0:
            if grid[r][c] < 0:
                res += m - r
                c -= 1
            else:
                r += 1
        return res
`)});
