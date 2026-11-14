const {lite}=require("./lib");
const C=s=>s.replace(/^\n/,"").replace(/\n$/,"").split("\n");
const ARR="Array / String",HM="Hash Map / Set",STK="Stack / Monotonic Stack",BT="Binary Tree",GR="Graph",HP="Heap",DP="Dynamic Programming",GD="Greedy",MB="Math / Bit Manipulation",BS="Binary Search",SRT="Sorting",SW="Sliding Window",MX="Matrix",UF="Union Find / Segment Tree",TP="Two Pointers",IV="Intervals",BTK="Backtracking",DS="Design",LL="Linked List",TR="Trie",PS="Prefix Sum";
// ---- Microsoft (3)
lite({id:2220,slug:"minimum-bit-flips-to-convert-number",title:"Minimum Bit Flips to Convert Number",level:"Easy",topic:MB,name:"Count the bits where start and goal differ",
w:"start 10 (1010), goal 7 (0111) → 3 bits differ → 3.",k:"A flip changes one bit. The number of flips is the number of positions where the two numbers differ, i.e. the number of 1 bits in start XOR (exclusive OR) goal.",
i:"start = 10, goal = 7",o:"3",time:"O(log n)",space:"O(1)",
code:C(`
class Solution:
    def minBitFlips(self, start, goal):
        return bin(start ^ goal).count('1')
`)});
lite({id:2816,slug:"double-a-number-represented-as-a-linked-list",title:"Double a Number Represented as a Linked List",level:"Medium",topic:LL,name:"Doubling from the least significant digit via reversal",
w:"[1,8,9] → 189 · 2 = 378 → [3,7,8].",k:"The digits are stored most significant first. Reverse the list, double each digit with a carry (new digit = (2d + carry) % 10, carry = (2d + carry) // 10), append a node for a final carry, then reverse back.",
i:"head = [1,8,9]",o:"[3, 7, 8]",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def doubleIt(self, head):
        def reverse(h):
            prev = None
            while h:
                h.next, prev, h = prev, h, h.next
            return prev
        head = reverse(head)
        carry = 0
        node = head
        last = None
        while node:
            total = node.val * 2 + carry
            node.val, carry = total % 10, total // 10
            last = node
            node = node.next
        if carry:
            last.next = ListNode(carry)
        return reverse(head)
`)});
lite({id:2942,slug:"find-words-containing-character",title:"Find Words Containing Character",level:"Easy",topic:ARR,name:"Filter indices by membership",
w:"['leet','code'], x 'e' → [0, 1].",k:"Return the indices of the words that contain the character x.",
i:"words = [\"leet\",\"code\"], x = \"e\"",o:"[0, 1]",time:"O(total length)",space:"O(n)",
code:C(`
class Solution:
    def findWordsContaining(self, words, x):
        return [i for i, w in enumerate(words) if x in w]
`)});
lite({id:847,slug:"shortest-path-visiting-all-nodes",title:"Shortest Path Visiting All Nodes",level:"Hard",topic:GR,name:"BFS (Breadth-First Search) over (node, visited mask)",
w:"graph [[1,2,3],[0],[0],[0]] → 0 → 1 → 0 → 2 → 0 → 3 → 4 edges.",k:"A state is (current node, set of visited nodes as a bitmask). Start from every node at once with only that node visited. BFS (Breadth-First Search) over moves along edges; the first time a state with the full mask appears, its distance is the answer.",
i:"graph = [[1,2,3],[0],[0],[0]]",o:"4",time:"O(2ⁿ·n²)",space:"O(2ⁿ·n)",
code:C(`
class Solution:
    def shortestPathLength(self, graph):
        n = len(graph)
        full = (1 << n) - 1
        q = deque((i, 1 << i, 0) for i in range(n))
        seen = {(i, 1 << i) for i in range(n)}
        while q:
            u, mask, d = q.popleft()
            if mask == full:
                return d
            for v in graph[u]:
                state = (v, mask | 1 << v)
                if state not in seen:
                    seen.add(state)
                    q.append((v, mask | 1 << v, d + 1))
        return 0
`)});
lite({id:1932,slug:"merge-bsts-to-create-single-bst",title:"Merge BSTs to Create Single BST",level:"Hard",topic:BT,name:"Attach trees at leaves, then validate",
w:"trees [2,1], [3,2,5], [5,4] → merged into [3,2,5,1,null,4].",k:"Each tree has at most 3 nodes. Map each tree's root value to the tree. Find the one root value that is not a leaf value of any other tree: that is the final root. Repeatedly replace a leaf whose value matches another tree's root by that tree (each tree can be used once). In the end all trees must have been used and the result must be a valid BST (Binary Search Tree).",
i:"trees = [[2,1],[3,2,5],[5,4]]",o:"[3, 2, 5, 1, None, 4]",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def canMerge(self, trees):
        roots = {t.val: t for t in trees}
        if len(roots) != len(trees):
            return None
        inside = {c.val for t in trees for c in (t.left, t.right) if c}
        top = [t for t in trees if t.val not in inside]
        if len(top) != 1:
            return None
        root = top[0]
        used = {root.val}
        def go(node, lo, hi):
            if not lo < node.val < hi:
                return False
            if not node.left and not node.right and node.val in roots:
                sub = roots[node.val]
                if sub is not node:
                    if node.val in used:
                        return False
                    used.add(node.val)
                    node.left, node.right = sub.left, sub.right
            if node.left and not go(node.left, lo, node.val):
                return False
            if node.right and not go(node.right, node.val, hi):
                return False
            return True
        ok = go(root, float('-inf'), float('inf'))
        return root if ok and len(used) == len(trees) else None
`)});
lite({id:1688,slug:"count-of-matches-in-tournament",title:"Count of Matches in Tournament",level:"Easy",topic:MB,name:"Every match eliminates exactly one team",
w:"n=7 → 6 matches.",k:"Each match eliminates one team and the tournament ends with one team left, so there are n − 1 matches.",
i:"n = 7",o:"6",time:"O(1)",space:"O(1)",
code:C(`
class Solution:
    def numberOfMatches(self, n):
        return n - 1
`)});
lite({id:1957,slug:"delete-characters-to-make-fancy-string",title:"Delete Characters to Make Fancy String",level:"Easy",topic:ARR,name:"Never keep a third equal letter in a row",
w:"'leeetcode' → 'leetcode'.",k:"Build the result letter by letter, skipping a letter when the last two kept letters are both equal to it.",
i:"s = \"leeetcode\"",o:"\"leetcode\"",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def makeFancyString(self, s):
        out = []
        for c in s:
            if len(out) >= 2 and out[-1] == out[-2] == c:
                continue
            out.append(c)
        return ''.join(out)
`)});
lite({id:1072,slug:"flip-columns-for-maximum-number-of-equal-rows",title:"Flip Columns For Maximum Number of Equal Rows",level:"Medium",topic:HM,name:"Rows that are equal or complements",
w:"[[0,0,0],[0,0,1],[1,1,0]] → rows 2 and 3 become equal after flipping the last column → 2.",k:"Flipping columns keeps two rows equal when they are equal or exact complements. Normalise every row by flipping it so that it starts with 0; count identical normalised rows and take the largest group.",
i:"matrix = [[0,0,0],[0,0,1],[1,1,0]]",o:"2",time:"O(m·n)",space:"O(m·n)",
code:C(`
class Solution:
    def maxEqualRowsAfterFlips(self, matrix):
        cnt = Counter()
        for row in matrix:
            first = row[0]
            cnt[tuple(v ^ first for v in row)] += 1
        return max(cnt.values())
`)});
lite({id:3264,slug:"final-array-state-after-k-multiplication-operations-i",title:"Final Array State After K Multiplication Operations I",level:"Easy",topic:HP,name:"Heap of (value, index)",
w:"[2,1,3,5,6], k=5, multiplier 2 → [8,4,6,5,6].",k:"Each operation multiplies the smallest value (leftmost on ties). Keep a min-heap of (value, index): pop, multiply, push back, k times; then write the values back by index.",
i:"nums = [2,1,3,5,6], k = 5, multiplier = 2",o:"[8, 4, 6, 5, 6]",time:"O(k log n)",space:"O(n)",
code:C(`
class Solution:
    def getFinalState(self, nums, k, multiplier):
        heap = [(x, i) for i, x in enumerate(nums)]
        heapify(heap)
        for _ in range(k):
            x, i = heappop(heap)
            heappush(heap, (x * multiplier, i))
        res = [0] * len(nums)
        for x, i in heap:
            res[i] = x
        return res
`)});
lite({id:1401,slug:"circle-and-rectangle-overlapping",title:"Circle and Rectangle Overlapping",level:"Medium",topic:MB,name:"Distance from the centre to the nearest rectangle point",
w:"circle radius 1 at (0,0), rectangle [1,−1]–[3,1] → touches at (1,0) → true.",k:"The nearest point of the rectangle to the centre is found by clamping the centre's coordinates into the rectangle: nx = min(max(x, x1), x2), ny likewise. The shapes overlap exactly when the distance from the centre to that point is at most the radius.",
i:"radius = 1, xCenter = 0, yCenter = 0, x1 = 1, y1 = -1, x2 = 3, y2 = 1",o:"true",time:"O(1)",space:"O(1)",
code:C(`
class Solution:
    def checkOverlap(self, radius, xCenter, yCenter, x1, y1, x2, y2):
        nx = min(max(xCenter, x1), x2)
        ny = min(max(yCenter, y1), y2)
        return (nx - xCenter) ** 2 + (ny - yCenter) ** 2 <= radius ** 2
`)});
lite({id:3420,slug:"count-non-decreasing-subarrays-after-k-operations",title:"Count Non-Decreasing Subarrays After K Operations",level:"Hard",topic:SW,name:"Two pointers with an O(1) cost formula (next-greater chains)",
w:"[6,3,1,2,4,4], k=7 → 17 of the 21 subarrays can be fixed.",k:"The cost of making a subarray non-decreasing is Σ (running maximum − element). The cost only grows when the subarray grows, so for each right end find the smallest left end that fits in k (two pointers). To get the cost of [l, r] fast: precompute for every i the next strictly greater element g[i] and T[i] = cost of the chain i → g[i] → …; then cost(l, r) = T[l] − T[c] + (a[c]·(r − c + 1) − sum(c…r)) where c is the position of the maximum of a[l..r] (a sparse table gives it in O(1)).",
i:"nums = [6,3,1,2,4,4], k = 7",o:"17",time:"O(n log n)",space:"O(n log n)",
code:C(`
class Solution:
    def countNonDecreasingSubarrays(self, nums, k):
        a = nums
        n = len(a)
        pre = [0]
        for x in a:
            pre.append(pre[-1] + x)
        g = [n] * n
        stack = []
        for i in range(n):
            while stack and a[stack[-1]] < a[i]:
                g[stack.pop()] = i
            stack.append(i)
        T = [0] * (n + 1)
        for i in range(n - 1, -1, -1):
            T[i] = a[i] * (g[i] - i) - (pre[g[i]] - pre[i]) + T[g[i]]
        table = [list(range(n))]
        j = 1
        while (1 << j) <= n:
            prev = table[-1]
            row = []
            for i in range(n - (1 << j) + 1):
                x, y = prev[i], prev[i + (1 << (j - 1))]
                row.append(x if a[x] >= a[y] else y)
            table.append(row)
            j += 1
        def argmax(l, r):
            j = (r - l + 1).bit_length() - 1
            x, y = table[j][l], table[j][r - (1 << j) + 1]
            return x if a[x] >= a[y] else y
        def cost(l, r):
            c = argmax(l, r)
            return T[l] - T[c] + a[c] * (r - c + 1) - (pre[r + 1] - pre[c])
        total = left = 0
        for r in range(n):
            while cost(left, r) > k:
                left += 1
            total += r - left + 1
        return total
`)});
lite({id:1267,slug:"count-servers-that-communicate",title:"Count Servers that Communicate",level:"Medium",topic:MX,name:"Count servers per row and column",
w:"[[1,0],[1,1]] → 3 servers share a row or column → 3.",k:"A server communicates if its row or its column holds another server. Count servers in every row and column; a server counts when its row total or column total is above 1.",
i:"grid = [[1,0],[1,1]]",o:"3",time:"O(m·n)",space:"O(m + n)",
code:C(`
class Solution:
    def countServers(self, grid):
        rows = [sum(r) for r in grid]
        cols = [sum(c) for c in zip(*grid)]
        return sum(1 for i, r in enumerate(grid) for j, v in enumerate(r) if v and (rows[i] > 1 or cols[j] > 1))
`)});
lite({id:2658,slug:"maximum-number-of-fish-in-a-grid",title:"Maximum Number of Fish in a Grid",level:"Medium",topic:GR,name:"Flood fill each water component and add up the fish",
w:"[[0,2,1,0],[4,0,0,3],[1,0,0,4],[0,3,2,0]] → the group (1,3), (2,3) holds 3 + 4 = 7 fish → 7.",k:"Cells with a positive number are water holding that many fish; a fisher can walk between neighbouring water cells. The answer is the largest total of fish in a connected group of water cells: flood fill (DFS (Depth-First Search)) from every unvisited water cell summing the fish.",
i:"grid = [[0,2,1,0],[4,0,0,3],[1,0,0,4],[0,3,2,0]]",o:"7",time:"O(m·n)",space:"O(m·n)",
code:C(`
class Solution:
    def findMaxFish(self, grid):
        m, n = len(grid), len(grid[0])
        seen = set()
        best = 0
        for i in range(m):
            for j in range(n):
                if grid[i][j] and (i, j) not in seen:
                    total = 0
                    stack = [(i, j)]
                    seen.add((i, j))
                    while stack:
                        a, b = stack.pop()
                        total += grid[a][b]
                        for x, y in ((a + 1, b), (a - 1, b), (a, b + 1), (a, b - 1)):
                            if 0 <= x < m and 0 <= y < n and grid[x][y] and (x, y) not in seen:
                                seen.add((x, y))
                                stack.append((x, y))
                    best = max(best, total)
        return best
`)});
lite({id:3108,slug:"minimum-cost-walk-in-weighted-graph",title:"Minimum Cost Walk in Weighted Graph",level:"Hard",topic:UF,name:"Union-find; every component's cost is the AND of all its edges",
w:"edges [[0,1,7],[1,3,7],[1,2,1]], queries [[0,3],[3,4]] → [1, −1].",k:"A walk may repeat edges, and AND can only lose bits, so within a connected component you can always visit every edge: the best cost is the AND of all edge weights in that component. Use union-find to find components and AND the weights into the root. A query is that value if both nodes share a component, else −1.",
i:"n = 5, edges = [[0,1,7],[1,3,7],[1,2,1]], query = [[0,3],[3,4]]",o:"[1, -1]",time:"O((n + m + q) α)",space:"O(n)",
code:C(`
class Solution:
    def minimumCost(self, n, edges, query):
        parent = list(range(n))
        def find(x):
            while parent[x] != x:
                parent[x] = parent[parent[x]]
                x = parent[x]
            return x
        for u, v, w in edges:
            ru, rv = find(u), find(v)
            if ru != rv:
                parent[rv] = ru
        full = (1 << 31) - 1
        cost = {}
        for u, v, w in edges:
            r = find(u)
            cost[r] = cost.get(r, full) & w
        return [cost.get(find(s), -1) if find(s) == find(t) else -1 for s, t in query]
`)});
lite({id:2685,slug:"count-the-number-of-complete-components",title:"Count the Number of Complete Components",level:"Medium",topic:GR,name:"A component with k nodes must have k(k−1)/2 edges",
w:"n=6, edges [[0,1],[0,2],[1,2],[3,4]] → {0,1,2} and {3,4} are complete, {5} is complete → 3.",k:"Find the connected components (union-find or DFS (Depth-First Search)). A component is complete when every pair of its k nodes is joined, i.e. it has exactly k(k−1)/2 edges.",
i:"n = 6, edges = [[0,1],[0,2],[1,2],[3,4]]",o:"3",time:"O(n + m)",space:"O(n + m)",
code:C(`
class Solution:
    def countCompleteComponents(self, n, edges):
        parent = list(range(n))
        def find(x):
            while parent[x] != x:
                parent[x] = parent[parent[x]]
                x = parent[x]
            return x
        for a, b in edges:
            parent[find(a)] = find(b)
        nodes, links = Counter(), Counter()
        for i in range(n):
            nodes[find(i)] += 1
        for a, b in edges:
            links[find(a)] += 1
        return sum(1 for r, k in nodes.items() if links[r] == k * (k - 1) // 2)
`)});
lite({id:2033,slug:"minimum-operations-to-make-a-uni-value-grid",title:"Minimum Operations to Make a Uni-Value Grid",level:"Medium",topic:MB,name:"All remainders equal, then move to the median",
w:"[[2,4],[6,8]], x=2 → all become 4 or 6: 4 operations.",k:"Each operation adds or subtracts x, so all elements must have the same remainder modulo x, otherwise −1. Divide the numbers (after subtracting the smallest) by x; the cheapest common target is the median, and the answer is the sum of distances to it.",
i:"grid = [[2,4],[6,8]], x = 2",o:"4",time:"O(mn log mn)",space:"O(mn)",
code:C(`
class Solution:
    def minOperations(self, grid, x):
        vals = sorted(v for row in grid for v in row)
        if any((v - vals[0]) % x for v in vals):
            return -1
        median = vals[len(vals) // 2]
        return sum(abs(v - median) // x for v in vals)
`)});
lite({id:1461,slug:"check-if-a-string-contains-all-binary-codes-of-size-k",title:"Check If a String Contains All Binary Codes of Size K",level:"Medium",topic:SW,name:"Collect every window of length k in a set",
w:"'00110110', k=2 → 00, 01, 10, 11 all occur → true.",k:"There are 2^k binary codes of length k. Slide a window of length k over the string, collecting the substrings in a set; the answer is true when the set reaches size 2^k.",
i:"s = \"00110110\", k = 2",o:"true",time:"O(n·k)",space:"O(2ᵏ·k)",
code:C(`
class Solution:
    def hasAllCodes(self, s, k):
        seen = {s[i:i + k] for i in range(len(s) - k + 1)}
        return len(seen) == 1 << k
`)});
lite({id:2006,slug:"count-number-of-pairs-with-absolute-difference-k",title:"Count Number of Pairs With Absolute Difference K",level:"Easy",topic:HM,name:"Count how many earlier numbers are k apart",
w:"[1,2,2,1], k=1 → 4 pairs.",k:"Scan the array keeping counts of the numbers seen. For each x add the counts of x − k and x + k, then record x.",
i:"nums = [1,2,2,1], k = 1",o:"4",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def countKDifference(self, nums, k):
        seen = Counter()
        res = 0
        for x in nums:
            res += seen[x - k] + seen[x + k]
            seen[x] += 1
        return res
`)});
lite({id:3434,slug:"maximum-frequency-after-subarray-operation",title:"Maximum Frequency After Subarray Operation",level:"Medium",topic:DP,name:"For each value v: Kadane with +1 for v and −1 for k",
w:"[1,2,3,4,5,6], k=1: adding −1 to the subarray [2…6] turns the 2 into a second 1 → 2.",k:"Adding x to a subarray can turn all copies of one value v inside it into k (choosing x = k − v), while the copies of k inside are lost. For a fixed v, the gain of a subarray is (copies of v) − (copies of k); the best subarray is found with Kadane's algorithm. Answer = total copies of k + the best gain over all v ≠ k (values are at most 50).",
i:"nums = [1,2,3,4,5,6], k = 1",o:"2",time:"O(50·n)",space:"O(1)",
code:C(`
class Solution:
    def maxFrequency(self, nums, k):
        base = nums.count(k)
        best = 0
        for v in set(nums):
            if v == k:
                continue
            cur = 0
            for x in nums:
                cur = max(0, cur + (1 if x == v else -1 if x == k else 0))
                best = max(best, cur)
        return base + best
`)});
lite({id:951,slug:"flip-equivalent-binary-trees",title:"Flip Equivalent Binary Trees",level:"Medium",topic:BT,name:"Compare recursively with or without swapping the children",
w:"[1,2,3,4,5,6,null,null,null,7,8] and its flipped version → true.",k:"Two trees are flip equivalent if the roots match and either (left–left and right–right) or (left–right and right–left) are flip equivalent. An empty tree equals an empty tree; one empty and one not is false.",
i:"root1 = [1,2,3,4,5,6,None,None,None,7,8], root2 = [1,3,2,None,6,4,5,None,None,None,None,8,7]",o:"true",time:"O(n)",space:"O(h)",
code:C(`
class Solution:
    def flipEquiv(self, root1, root2):
        if not root1 and not root2:
            return True
        if not root1 or not root2 or root1.val != root2.val:
            return False
        return ((self.flipEquiv(root1.left, root2.left) and self.flipEquiv(root1.right, root2.right))
                or (self.flipEquiv(root1.left, root2.right) and self.flipEquiv(root1.right, root2.left)))
`)});
lite({id:3201,slug:"find-the-maximum-length-of-valid-subsequence-i",title:"Find the Maximum Length of Valid Subsequence I",level:"Medium",topic:DP,name:"All even, all odd, or alternating parity",
w:"[1,2,1,1,2,1,2] → 1,2,1,2,1,2 alternates → 6.",k:"All adjacent sums must have the same parity. If it is even, all elements have the same parity (all even or all odd); if it is odd, parities alternate. Take the maximum of the number of evens, the number of odds, and the longest alternating subsequence (greedy: count parity changes).",
i:"nums = [1,2,1,1,2,1,2]",o:"6",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def maximumLength(self, nums):
        evens = sum(1 for x in nums if x % 2 == 0)
        odds = len(nums) - evens
        alternating = 1
        last = nums[0] % 2
        for x in nums[1:]:
            if x % 2 != last:
                alternating += 1
                last = x % 2
        return max(evens, odds, alternating)
`)});
lite({id:2570,slug:"merge-two-2d-arrays-by-summing-values",title:"Merge Two 2D Arrays by Summing Values",level:"Easy",topic:HM,name:"Add values by id, then sort",
w:"[[1,2],[2,3],[4,5]] + [[1,4],[3,2],[4,1]] → [[1,6],[2,3],[3,2],[4,6]].",k:"Each row is [id, value]. Sum the values of equal ids in a dictionary and return the rows sorted by id.",
i:"nums1 = [[1,2],[2,3],[4,5]], nums2 = [[1,4],[3,2],[4,1]]",o:"[[1, 6], [2, 3], [3, 2], [4, 6]]",time:"O(n log n)",space:"O(n)",
code:C(`
class Solution:
    def mergeArrays(self, nums1, nums2):
        total = Counter()
        for i, v in nums1 + nums2:
            total[i] += v
        return [[i, total[i]] for i in sorted(total)]
`)});
lite({id:2348,slug:"number-of-zero-filled-subarrays",title:"Number of Zero-Filled Subarrays",level:"Medium",topic:ARR,name:"A run of z zeros adds z(z+1)/2",
w:"[1,3,0,0,2,0,0,4] → runs 2 and 2 → 3 + 3 = 6.",k:"Scan the array tracking the length z of the current run of zeros; each new zero adds z subarrays ending at it. Reset at a non-zero.",
i:"nums = [1,3,0,0,2,0,0,4]",o:"6",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def zeroFilledSubarray(self, nums):
        total = run = 0
        for x in nums:
            run = run + 1 if x == 0 else 0
            total += run
        return total
`)});
lite({id:2785,slug:"sort-vowels-in-a-string",title:"Sort Vowels in a String",level:"Medium",topic:SRT,name:"Sort the vowels, put them back into the vowel slots",
w:"'lEetcOde' → 'lEOtcede'.",k:"Collect the vowels (both cases), sort them by ASCII (American Standard Code for Information Interchange) value, and write them back into the vowel positions in order; the consonants stay.",
i:"s = \"lEetcOde\"",o:"\"lEOtcede\"",time:"O(n log n)",space:"O(n)",
code:C(`
class Solution:
    def sortVowels(self, s):
        vowels = sorted(c for c in s if c in 'aeiouAEIOU')
        it = iter(vowels)
        return ''.join(next(it) if c in 'aeiouAEIOU' else c for c in s)
`)});
lite({id:1935,slug:"maximum-number-of-words-you-can-type",title:"Maximum Number of Words You Can Type",level:"Easy",topic:HM,name:"Count words without broken letters",
w:"'hello world', broken 'ad': 'hello' is typeable, 'world' needs the broken 'd' → 1.",k:"A word can be typed if none of its letters is a broken one. Put the broken letters in a set and count the words that avoid it.",
i:"text = \"hello world\", brokenLetters = \"ad\"",o:"1",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def canBeTypedWords(self, text, brokenLetters):
        broken = set(brokenLetters)
        return sum(1 for w in text.split() if not broken & set(w))
`)});
lite({id:1537,slug:"get-the-maximum-score",title:"Get the Maximum Score",level:"Hard",topic:DP,name:"Two pointers; switch arrays only at common values",
w:"nums1 [2,4,5,8,10], nums2 [4,6,8,9] → 2 + 4 + 6 + 8 + 10 = 30.",k:"Walk the two sorted arrays with pointers, keeping the best sum for each array. When both pointers meet at a common value, add it to both sums and set both to the larger one (the path may switch there). At the end take the larger sum, modulo 1e9+7.",
i:"nums1 = [2,4,5,8,10], nums2 = [4,6,8,9]",o:"30",time:"O(n + m)",space:"O(1)",
code:C(`
class Solution:
    def maxSum(self, nums1, nums2):
        i = j = 0
        a = b = 0
        while i < len(nums1) or j < len(nums2):
            if j == len(nums2) or (i < len(nums1) and nums1[i] < nums2[j]):
                a += nums1[i]
                i += 1
            elif i == len(nums1) or nums2[j] < nums1[i]:
                b += nums2[j]
                j += 1
            else:
                a = b = max(a, b) + nums1[i]
                i += 1
                j += 1
        return max(a, b) % (10**9 + 7)
`)});
lite({id:3593,slug:"minimum-increments-to-equalize-leaf-paths",title:"Minimum Increments to Equalize Leaf Paths",level:"Medium",topic:BT,name:"Post-order: lift every shorter child path to the longest",
w:"n=5, edges [[0,4],[0,1],[1,2],[1,3]], cost [3,4,1,1,7] → increase node 1 → 1.",k:"At a node, each child subtree has a best (largest) root-to-leaf path sum. All child paths must become the largest of them, which can be done by increasing the cost of just the child's root (one node per smaller child). So count the children whose path sum is below the maximum, and return cost[node] + maximum upwards.",
i:"n = 5, edges = [[0,4],[0,1],[1,2],[1,3]], cost = [3,4,1,1,7]",o:"1",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def minIncrease(self, n, edges, cost):
        adj = defaultdict(list)
        for a, b in edges:
            adj[a].append(b)
            adj[b].append(a)
        parent = [-1] * n
        order = []
        stack = [0]
        while stack:
            u = stack.pop()
            order.append(u)
            for v in adj[u]:
                if v != parent[u]:
                    parent[v] = u
                    stack.append(v)
        best = [0] * n
        ops = 0
        for u in reversed(order):
            children = [best[v] for v in adj[u] if v != parent[u]]
            top = max(children, default=0)
            ops += sum(1 for c in children if c < top)
            best[u] = cost[u] + top
        return ops
`)});
lite({id:709,slug:"to-lower-case",title:"To Lower Case",level:"Easy",topic:ARR,name:"Shift capital letters by 32",
w:"'Hello' → 'hello'.",k:"Convert every upper-case letter 'A'–'Z' by adding 32 to its character code; leave other characters as they are.",
i:"s = \"Hello\"",o:"\"hello\"",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def toLowerCase(self, s):
        return ''.join(chr(ord(c) + 32) if 'A' <= c <= 'Z' else c for c in s)
`)});
lite({id:3512,slug:"minimum-operations-to-make-array-sum-divisible-by-k",title:"Minimum Operations to Make Array Sum Divisible by K",level:"Easy",topic:MB,name:"The remainder of the sum",
w:"[3,9,7], k=5 → sum 19, remainder 4 → 4 operations.",k:"Each operation lowers the sum by 1, so the minimum number of operations is the sum modulo k.",
i:"nums = [3,9,7], k = 5",o:"4",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def minOperations(self, nums, k):
        return sum(nums) % k
`)});
lite({id:952,slug:"largest-component-size-by-common-factor",title:"Largest Component Size by Common Factor",level:"Hard",topic:UF,name:"Union numbers through their prime factors",
w:"[4,6,15,35] → 4–6 share 2, 6–15 share 3, 15–35 share 5 → size 4.",k:"Two numbers are connected if they share a factor greater than 1. Union each number with every prime factor of it (nodes are the numbers and the primes). Then count how many of the given numbers fall in each component and take the largest.",
i:"nums = [4,6,15,35]",o:"4",time:"O(n·√V·α)",space:"O(V)",
code:C(`
class Solution:
    def largestComponentSize(self, nums):
        parent = {}
        def find(x):
            parent.setdefault(x, x)
            while parent[x] != x:
                parent[x] = parent[parent[x]]
                x = parent[x]
            return x
        for x in nums:
            n = x
            d = 2
            while d * d <= n:
                if n % d == 0:
                    parent[find(d)] = find(x)
                    while n % d == 0:
                        n //= d
                d += 1
            if n > 1:
                parent[find(n)] = find(x)
        return max(Counter(find(x) for x in nums).values())
`)});
lite({id:2299,slug:"strong-password-checker-ii",title:"Strong Password Checker II",level:"Easy",topic:ARR,name:"Check each rule",
w:"'IloveLe3tcode!' → true.",k:"A strong password has at least 8 characters, a lower-case letter, an upper-case letter, a digit, a special character from '!@#$%^&*()-+', and no two equal adjacent characters.",
i:"password = \"IloveLe3tcode!\"",o:"true",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def strongPasswordCheckerII(self, password):
        if len(password) < 8:
            return False
        special = set("!@#$%^&*()-+")
        has = [any(c.islower() for c in password), any(c.isupper() for c in password),
               any(c.isdigit() for c in password), any(c in special for c in password)]
        return all(has) and all(a != b for a, b in zip(password, password[1:]))
`)});
lite({id:3666,slug:"minimum-operations-to-equalize-binary-string",title:"Minimum Operations to Equalize Binary String",level:"Hard",topic:MB,name:"Smallest m with a parity and capacity condition",
w:"s '0101', k=3 → 2 operations.",k:"In one operation you flip exactly k different indices. After m operations a '0' must have been flipped an odd number of times and a '1' an even number of times; each index is flipped at most m times. So with z zeros we need m·k ≥ z, m·k ≡ z (mod 2), and m·k ≤ z · (largest odd ≤ m) + (n − z) · (largest even ≤ m). Find the smallest m (0 if z = 0), or −1.",
i:"s = \"0101\", k = 3",o:"2",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def minOperations(self, s, k):
        n = len(s)
        z = s.count('0')
        if z == 0:
            return 0
        for m in range(1, 4 * n + 5):
            total = m * k
            if total % 2 != z % 2 or total < z:
                continue
            zero_cap = z * (m if m % 2 else m - 1)
            one_cap = (n - z) * (m if m % 2 == 0 else m - 1)
            if total <= zero_cap + one_cap:
                return m
        return -1
`)});
lite({id:3761,slug:"minimum-absolute-distance-between-mirror-pairs",title:"Minimum Absolute Distance Between Mirror Pairs",level:"Medium",topic:HM,name:"Remember the last index of each value",
w:"[12,21,45,33,54] → (0,1) and (2,4) → distance 1.",k:"Scan left to right. Keep a dictionary that maps reverse(nums[i]) to the latest index i seen so far. At index j, if nums[j] is a key then some earlier i has reverse(nums[i]) == nums[j], a mirror pair at distance j − i. The smallest such distance is the answer (−1 if none).",
i:"nums = [12,21,45,33,54]",o:"1",time:"O(n log V)",space:"O(n)",
code:C(`
class Solution:
    def minMirrorPairDistance(self, nums):
        last = {}
        best = float('inf')
        for j, x in enumerate(nums):
            if x in last:
                best = min(best, j - last[x])
            last[int(str(x)[::-1])] = j
        return -1 if best == float('inf') else best
`)});
lite({id:1559,slug:"detect-cycles-in-2d-grid",title:"Detect Cycles in 2D Grid",level:"Medium",topic:GR,name:"DFS (Depth-First Search) that never steps back to the parent",
w:"A 2 × 2 block of equal letters forms a cycle → true.",k:"A cycle is a loop of length ≥ 4 through cells with the same letter. DFS (Depth-First Search) from each unvisited cell over equal neighbours, remembering the cell we came from; reaching an already visited cell other than the parent means a cycle exists.",
i:"grid = [[\"a\",\"a\",\"a\",\"a\"],[\"a\",\"b\",\"b\",\"a\"],[\"a\",\"b\",\"b\",\"a\"],[\"a\",\"a\",\"a\",\"a\"]]",o:"true",time:"O(m·n)",space:"O(m·n)",
code:C(`
class Solution:
    def containsCycle(self, grid):
        m, n = len(grid), len(grid[0])
        seen = set()
        for si in range(m):
            for sj in range(n):
                if (si, sj) in seen:
                    continue
                seen.add((si, sj))
                stack = [(si, sj, -1, -1)]
                while stack:
                    i, j, pi, pj = stack.pop()
                    for a, b in ((i + 1, j), (i - 1, j), (i, j + 1), (i, j - 1)):
                        if (a, b) == (pi, pj) or not (0 <= a < m and 0 <= b < n):
                            continue
                        if grid[a][b] != grid[i][j]:
                            continue
                        if (a, b) in seen:
                            return True
                        seen.add((a, b))
                        stack.append((a, b, i, j))
        return False
`)});
lite({id:3742,slug:"maximum-path-score-in-a-grid",title:"Maximum Path Score in a Grid",level:"Medium",topic:DP,name:"dp over cells and the cost spent so far",
w:"[[0,1],[2,0]], k=1 → go down (value 2, cost 1) → 2.",k:"A cell with value 1 or 2 costs 1 and adds its value as score; 0 costs nothing. dp[i][j][c] = best score arriving at (i, j) having spent exactly c (c ≤ k), coming from above or from the left. The answer is the best score at the end cell over all c ≤ k, or −1 if unreachable.",
i:"grid = [[0,1],[2,0]], k = 1",o:"2",time:"O(m·n·k)",space:"O(n·k)",
code:C(`
class Solution:
    def maxPathScore(self, grid, k):
        m, n = len(grid), len(grid[0])
        NEG = float('-inf')
        dp = [[[NEG] * (k + 1) for _ in range(n)] for _ in range(m)]
        dp[0][0][0] = 0
        for i in range(m):
            for j in range(n):
                if i == 0 and j == 0:
                    continue
                v = grid[i][j]
                cost = 1 if v else 0
                for c in range(cost, k + 1):
                    best = NEG
                    if i:
                        best = max(best, dp[i - 1][j][c - cost])
                    if j:
                        best = max(best, dp[i][j - 1][c - cost])
                    if best > NEG:
                        dp[i][j][c] = best + v
        res = max(dp[m - 1][n - 1])
        return -1 if res == NEG else res
`)});
lite({id:454,slug:"4sum-ii",title:"4Sum II",level:"Medium",topic:HM,name:"Meet in the middle with a sum counter",
w:"nums1 [1,2], nums2 [-2,-1], nums3 [-1,2], nums4 [0,2] → 2 tuples sum to 0.",k:"Count how often each sum a + b of the first two arrays occurs. For every c + d of the other two arrays add the count of −(c + d).",
i:"nums1 = [1,2], nums2 = [-2,-1], nums3 = [-1,2], nums4 = [0,2]",o:"2",time:"O(n²)",space:"O(n²)",
code:C(`
class Solution:
    def fourSumCount(self, nums1, nums2, nums3, nums4):
        ab = Counter(a + b for a in nums1 for b in nums2)
        return sum(ab[-(c + d)] for c in nums3 for d in nums4)
`)});
lite({id:3300,slug:"minimum-element-after-replacement-with-digit-sum",title:"Minimum Element After Replacement With Digit Sum",level:"Easy",topic:ARR,name:"Replace each number by its digit sum, take the smallest",
w:"[10,12,13,14] → 1, 3, 4, 5 → 1.",k:"Replace every number by the sum of its digits and return the minimum.",
i:"nums = [10,12,13,14]",o:"1",time:"O(n log V)",space:"O(1)",
code:C(`
class Solution:
    def minElement(self, nums):
        return min(sum(int(d) for d in str(x)) for x in nums)
`)});
lite({id:929,slug:"unique-email-addresses",title:"Unique Email Addresses",level:"Easy",topic:HM,name:"Normalise the local part, then count distinct addresses",
w:"'test.email+alex@leetcode.com' and 'test.e.mail+bob.cathy@leetcode.com' are the same address.",k:"In the local part (before '@') ignore dots and everything after the first '+'. The domain is unchanged. Put the normalised addresses in a set.",
i:"emails = [\"test.email+alex@leetcode.com\",\"test.e.mail+bob.cathy@leetcode.com\",\"testemail+david@lee.tcode.com\"]",o:"2",time:"O(total length)",space:"O(total length)",
code:C(`
class Solution:
    def numUniqueEmails(self, emails):
        seen = set()
        for e in emails:
            local, domain = e.split('@')
            local = local.split('+')[0].replace('.', '')
            seen.add(local + '@' + domain)
        return len(seen)
`)});
lite({id:2126,slug:"destroying-asteroids",title:"Destroying Asteroids",level:"Medium",topic:GD,name:"Smallest asteroid first",
w:"mass 10, asteroids [3,9,19,5,21] → 3, 5, 9, 19, 21 → true.",k:"A planet destroys an asteroid when its mass is at least the asteroid's, and then gains that mass. The best order is smallest first: sort and absorb each asteroid; fail if the mass is ever too small.",
i:"mass = 10, asteroids = [3,9,19,5,21]",o:"true",time:"O(n log n)",space:"O(1)",
code:C(`
class Solution:
    def asteroidsDestroyed(self, mass, asteroids):
        for a in sorted(asteroids):
            if mass < a:
                return False
            mass += a
        return True
`)});
lite({id:3348,slug:"smallest-divisible-digit-product-ii",title:"Smallest Divisible Digit Product II",level:"Hard",topic:GD,name:"Keep the longest prefix, bump one digit, fill with the fewest digits",
w:"num '1234', t=256 → 1488.",k:"Only digits 2…9 matter and t must have no prime factor above 7. If num is zero-free and its digit product is divisible by t, return it. Otherwise find the longest prefix of num to keep: raise the next digit to the smallest larger digit d such that what is still missing from the product (t / gcd(t, product)) can be covered by the remaining positions, using the fewest digits (greedy 9, 8, …, 2) and padding with 1s in front. If no such position exists, answer with a longer number built from t alone.",
i:"num = \"1234\", t = 256",o:"\"1488\"",time:"O(n·9·log t)",space:"O(n)",
code:C(`
class Solution:
    def smallestNumber(self, num, t):
        def digits_for(need):
            res = []
            for d in range(9, 1, -1):
                while need % d == 0:
                    res.append(d)
                    need //= d
            return sorted(res) if need == 1 else None
        n = len(num)
        digs = [int(c) for c in num]
        prods = [1]
        for d in digs:
            if d == 0:
                break
            prods.append(prods[-1] * d)
        if len(prods) == n + 1 and t % gcd(t, prods[n]) == 0 and t // gcd(t, prods[n]) == 1:
            return num
        for i in range(min(len(prods) - 1, n - 1), -1, -1):
            for d in range(max(digs[i] + 1, 1), 10):
                need = t // gcd(t, prods[i] * d)
                fill = digits_for(need)
                if fill is not None and len(fill) <= n - i - 1:
                    return num[:i] + str(d) + '1' * (n - i - 1 - len(fill)) + ''.join(map(str, fill))
        fill = digits_for(t)
        if fill is None:
            return "-1"
        length = max(n + 1, len(fill))
        return '1' * (length - len(fill)) + ''.join(map(str, fill))
`)});
lite({id:1626,slug:"best-team-with-no-conflicts",title:"Best Team With No Conflicts",level:"Medium",topic:DP,name:"Sort by age, then best non-decreasing score subsequence",
w:"scores [1,3,5,10,15], ages [1,2,3,4,5] → everyone → 34.",k:"A conflict is a younger player with a strictly higher score than an older one. Sort players by (age, score). The team must then have non-decreasing scores: dp[i] = score[i] + max dp[j] over earlier players with score[j] ≤ score[i].",
i:"scores = [1,3,5,10,15], ages = [1,2,3,4,5]",o:"34",time:"O(n²)",space:"O(n)",
code:C(`
class Solution:
    def bestTeamScore(self, scores, ages):
        players = sorted(zip(ages, scores))
        dp = [s for _, s in players]
        for i in range(len(players)):
            for j in range(i):
                if players[j][1] <= players[i][1]:
                    dp[i] = max(dp[i], dp[j] + players[i][1])
        return max(dp)
`)});
lite({id:1376,slug:"time-needed-to-inform-all-employees",title:"Time Needed to Inform All Employees",level:"Medium",topic:BT,name:"Longest root-to-leaf sum of inform times",
w:"n=6, head 2 informs all five others after 1 minute → 1.",k:"The employees form a tree rooted at headID. An employee informs all subordinates after informTime[employee] minutes. The answer is the largest sum of informTime values along a path from the head to any employee (sum over the managers on the path).",
i:"n = 6, headID = 2, manager = [2,2,-1,2,2,2], informTime = [0,0,1,0,0,0]",o:"1",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def numOfMinutes(self, n, headID, manager, informTime):
        children = defaultdict(list)
        for i, m in enumerate(manager):
            if m != -1:
                children[m].append(i)
        best = 0
        stack = [(headID, 0)]
        while stack:
            u, t = stack.pop()
            best = max(best, t)
            for v in children[u]:
                stack.append((v, t + informTime[u]))
        return best
`)});
lite({id:1872,slug:"stone-game-viii",title:"Stone Game VIII",level:"Hard",topic:DP,name:"Prefix sums and a running best difference",
w:"stones [-1,2,-3,4,-5] → Alice leads by 5.",k:"When a player removes the leftmost x ≥ 2 stones the score added is the prefix sum up to the new stone, which replaces them. The game result as (current player − other) obeys dp[i] = max(dp[i+1], pref[i] − dp[i+1]) going from the right, starting with dp[n−1] = pref[n−1]. The answer is dp[1] (Alice must take at least two stones).",
i:"stones = [-1,2,-3,4,-5]",o:"5",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def stoneGameVIII(self, stones):
        n = len(stones)
        pref = [0] * n
        pref[0] = stones[0]
        for i in range(1, n):
            pref[i] = pref[i - 1] + stones[i]
        best = pref[n - 1]
        for i in range(n - 2, 0, -1):
            best = max(best, pref[i] - best)
        return best
`)});
lite({id:3904,slug:"smallest-stable-index-ii",title:"Smallest Stable Index II",level:"Medium",topic:PS,name:"Prefix maximum and suffix minimum",
w:"[5,0,1,4], k=3 → index 3 → 3.",k:"The instability of index i is max(nums[0..i]) − min(nums[i..]). Compute the suffix minimum array once, sweep with a running prefix maximum and return the first index whose instability is at most k.",
i:"nums = [5,0,1,4], k = 3",o:"3",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def firstStableIndex(self, nums, k):
        n = len(nums)
        suf = nums[:]
        for i in range(n - 2, -1, -1):
            suf[i] = min(suf[i], suf[i + 1])
        top = float('-inf')
        for i in range(n):
            top = max(top, nums[i])
            if top - suf[i] <= k:
                return i
        return -1
`)});
lite({id:3871,slug:"count-commas-in-range-ii",title:"Count Commas in Range II",level:"Medium",topic:MB,name:"Count the numbers at least 1,000, 1,000,000, …",
w:"n=1002 → 3.",k:"A number has one comma for each power 10^(3j) it reaches. So the total is the sum over j ≥ 1 of the count of numbers in 1…n that are at least 10^(3j): max(0, n − 10^(3j) + 1).",
i:"n = 1002",o:"3",time:"O(log n)",space:"O(1)",
code:C(`
class Solution:
    def countCommas(self, n):
        total = 0
        p = 1000
        while p <= n:
            total += n - p + 1
            p *= 1000
        return total
`)});
lite({id:1477,slug:"find-two-non-overlapping-sub-arrays-each-with-target-sum",title:"Find Two Non-overlapping Sub-arrays Each With Target Sum",level:"Medium",topic:SW,name:"Best short subarray ending before each point",
w:"arr [3,2,2,4,3], target 3 → [3] and [3] → 2.",k:"Find, for each end index, the shortest subarray ending there with the target sum (prefix sums in a dictionary) and keep best[i] = the shortest such subarray ending at or before i. For every subarray [l, r] with the target sum, combine its length with best[l − 1]; the minimum total is the answer.",
i:"arr = [3,2,2,4,3], target = 3",o:"2",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def minSumOfLengths(self, arr, target):
        INF = float('inf')
        n = len(arr)
        pos = {0: -1}
        best = [INF] * n
        res = INF
        pref = 0
        for i, x in enumerate(arr):
            pref += x
            best[i] = best[i - 1] if i else INF
            if pref - target in pos:
                start = pos[pref - target]
                length = i - start
                best[i] = min(best[i], length)
                if start >= 0 and best[start] < INF:
                    res = min(res, best[start] + length)
            pos[pref] = i
        return -1 if res == INF else res
`)});
lite({id:1520,slug:"maximum-number-of-non-overlapping-substrings",title:"Maximum Number of Non-Overlapping Substrings",level:"Hard",topic:GD,name:"Closed intervals per letter, then interval scheduling by end",
w:"'adefaddaccc' → ['e','f','ccc'].",k:"A valid substring must contain every occurrence of every letter it contains. For each letter take the interval from its first to its last occurrence and extend it while it contains another letter that sticks out; discard intervals that cannot be closed. Then choose the maximum number of non-overlapping intervals (greedy by end, preferring shorter ones), returning them ordered by start.",
i:"s = \"adefaddaccc\"",o:"['e', 'f', 'ccc']",time:"O(26·n)",space:"O(n)",
code:C(`
class Solution:
    def maxNumOfSubstrings(self, s):
        first, last = {}, {}
        for i, c in enumerate(s):
            first.setdefault(c, i)
            last[c] = i
        intervals = []
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
                intervals.append((r, -l))
        intervals.sort()
        res = []
        prev_end = -1
        for r, neg_l in intervals:
            l = -neg_l
            if l > prev_end:
                res.append(s[l:r + 1])
                prev_end = r
        return res
`)});
lite({id:3942,slug:"minimum-operations-to-sort-a-permutation",title:"Minimum Operations to Sort a Permutation",level:"Medium",topic:GR,name:"BFS (Breadth-First Search) over (direction, offset) states",
w:"[0,2,1] → rotate left, reverse → 2.",k:"Only reverse and rotate-left are allowed, so a sortable permutation must be a rotation of 0…n−1 going up or going down: the array equals (offset + direction · i) mod n. The state is (direction, offset). Rotate left turns offset into offset + direction; reverse flips the direction and changes the offset to offset + direction·(n − 1). BFS (Breadth-First Search) from the starting state(s) to (up, 0) gives the minimum; if the array is not such a rotation the answer is −1.",
i:"nums = [0,2,1]",o:"2",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def minOperations(self, nums):
        n = len(nums)
        starts = []
        for d in (1, -1):
            if all(nums[i] == (nums[0] + d * i) % n for i in range(n)):
                starts.append((d, nums[0]))
        if not starts:
            return -1
        dist = {s: 0 for s in starts}
        q = deque(starts)
        while q:
            d, off = q.popleft()
            if (d, off) == (1, 0):
                return dist[(d, off)]
            for nxt in ((d, (off + d) % n), (-d, (off + d * (n - 1)) % n)):
                if nxt not in dist:
                    dist[nxt] = dist[(d, off)] + 1
                    q.append(nxt)
        return -1
`)});
lite({id:956,slug:"tallest-billboard",title:"Tallest Billboard",level:"Hard",topic:DP,name:"dp over the difference between the two supports",
w:"rods [1,2,3,6] → {1,2,3} and {6} → 6.",k:"We build two supports of equal height from disjoint subsets of rods. Track dp[d] = the largest height of the taller support when the two supports differ by d. For each rod, either skip it, add it to the taller (d + r), or add it to the shorter (|d − r|, and the taller grows if the rod overflows). The answer is dp[0].",
i:"rods = [1,2,3,6]",o:"6",time:"O(n·S)",space:"O(S)",
code:C(`
class Solution:
    def tallestBillboard(self, rods):
        dp = {0: 0}
        for r in rods:
            new = dict(dp)
            for d, taller in dp.items():
                new[d + r] = max(new.get(d + r, 0), taller + r)
                nd = abs(d - r)
                new[nd] = max(new.get(nd, 0), taller + max(0, r - d))
            dp = new
        return dp[0]
`)});
lite({id:1942,slug:"the-number-of-the-smallest-unoccupied-chair",title:"The Number of the Smallest Unoccupied Chair",level:"Medium",topic:HP,name:"Two heaps: free chairs and occupied chairs by leave time",
w:"times [[1,4],[2,3],[4,6]], targetFriend 1 → chair 1.",k:"Process the friends by arrival time. Keep a min-heap of free chair numbers and a min-heap of (leave time, chair). On each arrival first free the chairs of everyone who has left, then give the smallest free chair. Return the chair when the target friend arrives.",
i:"times = [[1,4],[2,3],[4,6]], targetFriend = 1",o:"1",time:"O(n log n)",space:"O(n)",
code:C(`
class Solution:
    def smallestChair(self, times, targetFriend):
        order = sorted(range(len(times)), key=lambda i: times[i][0])
        free = list(range(len(times)))
        heapify(free)
        busy = []
        for i in order:
            arrive, leave = times[i]
            while busy and busy[0][0] <= arrive:
                heappush(free, heappop(busy)[1])
            chair = heappop(free)
            if i == targetFriend:
                return chair
            heappush(busy, (leave, chair))
`)});
lite({id:2498,slug:"frog-jump-ii",title:"Frog Jump II",level:"Medium",topic:BS,name:"The best path alternates stones: max gap two apart",
w:"stones [0,2,5,6,7] → path 0 → 5 → 7 → 6 → 2 → 0, longest jump 5.",k:"The frog goes to the last stone and returns, using each stone at most once. Alternating stones on the way out and back gives the minimal maximum jump: the largest difference between stones two positions apart (and the first jump when there are only two stones).",
i:"stones = [0,2,5,6,7]",o:"5",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def maxJump(self, stones):
        best = stones[1] - stones[0]
        for i in range(2, len(stones)):
            best = max(best, stones[i] - stones[i - 2])
        return best
`)});
lite({id:3099,slug:"harshad-number",title:"Harshad Number",level:"Easy",topic:MB,name:"Divisibility by the digit sum",
w:"x = 18 → digit sum 9 divides 18 → 9.",k:"A Harshad number is divisible by the sum of its digits. Return the digit sum if x is one, otherwise −1.",
i:"x = 18",o:"9",time:"O(log x)",space:"O(1)",
code:C(`
class Solution:
    def sumOfTheDigitsOfHarshadNumber(self, x):
        s = sum(int(d) for d in str(x))
        return s if x % s == 0 else -1
`)});
lite({id:500,slug:"keyboard-row",title:"Keyboard Row",level:"Easy",topic:HM,name:"Words typed with letters from a single keyboard row",
w:"['Hello','Alaska','Dad','Peace'] → ['Alaska','Dad'].",k:"Put the three keyboard rows in sets. A word qualifies if its lower-cased letters are a subset of one row. Keep the original order.",
i:"words = [\"Hello\",\"Alaska\",\"Dad\",\"Peace\"]",o:"['Alaska', 'Dad']",time:"O(total length)",space:"O(1)",
code:C(`
class Solution:
    def findWords(self, words):
        rows = [set("qwertyuiop"), set("asdfghjkl"), set("zxcvbnm")]
        return [w for w in words if any(set(w.lower()) <= r for r in rows)]
`)});
lite({id:3011,slug:"find-if-array-can-be-sorted",title:"Find if Array Can Be Sorted",level:"Medium",topic:SRT,name:"Sort inside runs of equal popcount",
w:"[8,4,2,30,15] → numbers with the same number of set bits can swap → true.",k:"Adjacent elements can be swapped only if they have the same number of 1 bits. So the array splits into runs of equal popcount, and elements can only be rearranged inside a run. Sort each run and check that the whole array is sorted afterwards.",
i:"nums = [8,4,2,30,15]",o:"true",time:"O(n log n)",space:"O(n)",
code:C(`
class Solution:
    def canSortArray(self, nums):
        result = []
        for _, run in groupby(nums, key=lambda x: bin(x).count('1')):
            result.extend(sorted(run))
        return result == sorted(nums)
`)});
