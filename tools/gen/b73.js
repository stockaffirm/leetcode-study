const {lite}=require("./lib");
const C=s=>s.replace(/^\n/,"").replace(/\n$/,"").split("\n");
const ARR="Array / String",HM="Hash Map / Set",STK="Stack / Monotonic Stack",BT="Binary Tree",GR="Graph",HP="Heap",DP="Dynamic Programming",GD="Greedy",MB="Math / Bit Manipulation",BS="Binary Search",SRT="Sorting",SW="Sliding Window",MX="Matrix",UF="Union Find / Segment Tree",TP="Two Pointers",IV="Intervals",BTK="Backtracking",DS="Design",LL="Linked List",TR="Trie",PS="Prefix Sum";
// ---- Microsoft (1)
lite({id:3139,slug:"minimum-cost-to-equalize-array",title:"Minimum Cost to Equalize Array",level:"Hard",topic:MB,name:"Try every final value; pair increments when it pays off",
w:"nums [4,1], cost1 5, cost2 2 → only the 1 needs raising, a single +1 costs 5 each → 15.",k:"Pick the final value t (the maximum, or a little above it). Each element needs t − nums[i] increments. Pair increments on two different elements when cost2 < 2·cost1; the largest need cannot be paired with itself, so if one element needs more than all the others together, the surplus uses single increments. Otherwise pair as much as possible. Take the cheapest t.",
i:"nums = [4,1], cost1 = 5, cost2 = 2",o:"15",time:"O(max)",space:"O(1)",
code:C(`
class Solution:
    def minCostToEqualizeArray(self, nums, cost1, cost2):
        MOD = 10**9 + 7
        n = len(nums)
        if n == 1:
            return 0
        mx, mn, total_sum = max(nums), min(nums), sum(nums)
        cost2 = min(cost2, 2 * cost1)
        best = float('inf')
        for t in range(mx, 2 * mx + 2):
            total = n * t - total_sum
            biggest = t - mn
            if biggest * 2 <= total:
                cost = (total // 2) * cost2 + (total % 2) * cost1
            else:
                others = total - biggest
                cost = others * cost2 + (biggest - others) * cost1
            best = min(best, cost)
        return best % MOD
`)});
lite({id:805,slug:"split-array-with-same-average",title:"Split Array With Same Average",level:"Hard",topic:DP,name:"Subset sums by size (bitset DP)",
w:"[1,2,3,4,5,6,7,8] → {1,4,5,8} and {2,3,6,7} both average 4.5 → true.",k:"Two parts have the same average as the whole, so a part of size k must have sum k·total/n, which has to be an integer. Compute, for each size k up to n/2, the set of reachable subset sums, and check whether k·total/n is reachable for some 1 ≤ k ≤ n/2.",
i:"nums = [1,2,3,4,5,6,7,8]",o:"true",time:"O(n²·S)",space:"O(n·S)",
code:C(`
class Solution:
    def splitArraySameAverage(self, nums):
        n, total = len(nums), sum(nums)
        sums = [set() for _ in range(n // 2 + 1)]
        sums[0].add(0)
        for x in nums:
            for k in range(n // 2, 0, -1):
                for s in sums[k - 1]:
                    sums[k].add(s + x)
        return any(total * k % n == 0 and total * k // n in sums[k] for k in range(1, n // 2 + 1))
`)});
lite({id:794,slug:"valid-tic-tac-toe-state",title:"Valid Tic-Tac-Toe State",level:"Medium",topic:ARR,name:"Count marks and check who has won",
w:"['XOX','O O','XOX'] → 5 X and 3 O, nobody has won → valid; ['O  ','   ','   '] is invalid (X moves first).",k:"X moves first, so the number of X is equal to or one more than the number of O. If X has a winning line then X must have exactly one more mark than O. If O has a winning line the counts must be equal. Both cannot win.",
i:"board = [\"XOX\",\"O O\",\"XOX\"]",o:"true",time:"O(1)",space:"O(1)",
code:C(`
class Solution:
    def validTicTacToe(self, board):
        x = sum(row.count('X') for row in board)
        o = sum(row.count('O') for row in board)
        def wins(p):
            lines = [list(r) for r in board] + [list(c) for c in zip(*board)]
            lines.append([board[i][i] for i in range(3)])
            lines.append([board[i][2 - i] for i in range(3)])
            return any(all(c == p for c in line) for line in lines)
        if o > x or x > o + 1:
            return False
        if wins('X') and x != o + 1:
            return False
        if wins('O') and x != o:
            return False
        return True
`)});
lite({id:1306,slug:"jump-game-iii",title:"Jump Game III",level:"Medium",topic:GR,name:"BFS (Breadth-First Search) from start over index ± arr[i]",
w:"arr [4,2,3,0,3,1,2], start 5 → 5 → 4 → 1 → 3 (value 0) → true.",k:"From index i you can jump to i + arr[i] or i − arr[i]. Search from start with a BFS (Breadth-First Search), marking visited indices; return true as soon as an index holding 0 is reached.",
i:"arr = [4,2,3,0,3,1,2], start = 5",o:"true",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def canReach(self, arr, start):
        seen = {start}
        q = deque([start])
        while q:
            i = q.popleft()
            if arr[i] == 0:
                return True
            for j in (i + arr[i], i - arr[i]):
                if 0 <= j < len(arr) and j not in seen:
                    seen.add(j)
                    q.append(j)
        return False
`)});
lite({id:1615,slug:"maximal-network-rank",title:"Maximal Network Rank",level:"Medium",topic:GR,name:"degree[a] + degree[b] − 1 if directly connected",
w:"n=4, roads [[0,1],[0,3],[1,2],[1,3]] → cities 0 and 1: 2 + 3 − 1 = 4.",k:"The network rank of two cities is the number of roads touching either, with a shared road counted once: degree[a] + degree[b] − (1 if a and b are directly connected). Try every pair.",
i:"n = 4, roads = [[0,1],[0,3],[1,2],[1,3]]",o:"4",time:"O(n² + m)",space:"O(n + m)",
code:C(`
class Solution:
    def maximalNetworkRank(self, n, roads):
        deg = [0] * n
        linked = set()
        for a, b in roads:
            deg[a] += 1
            deg[b] += 1
            linked.add((a, b))
            linked.add((b, a))
        best = 0
        for a in range(n):
            for b in range(a + 1, n):
                best = max(best, deg[a] + deg[b] - ((a, b) in linked))
        return best
`)});
lite({id:3377,slug:"digit-operations-to-make-two-integers-equal",title:"Digit Operations to Make Two Integers Equal",level:"Medium",topic:GR,name:"Dijkstra over numbers, skipping primes",
w:"n=10, m=12 → 10 → 20 → 21 → 22 → 12 costs 10 + 20 + 21 + 22 + 12 = 85.",k:"Every number with the same digit count is a node; changing one digit by ±1 moves to another node. The cost of a path is the sum of all values visited (including the start). Primes (and the start/target if prime) are forbidden. Sieve primes below 10^d and run Dijkstra's algorithm from n; the answer is the distance to m, or −1.",
i:"n = 10, m = 12",o:"85",time:"O(10^d · d · log)",space:"O(10^d)",
code:C(`
class Solution:
    def minOperations(self, n, m):
        d = len(str(n))
        limit = 10 ** d
        is_prime = [True] * (limit + 1)
        is_prime[0] = is_prime[1] = False
        for i in range(2, int(limit ** 0.5) + 1):
            if is_prime[i]:
                for j in range(i * i, limit + 1, i):
                    is_prime[j] = False
        if is_prime[n] or is_prime[m]:
            return -1
        dist = {n: n}
        pq = [(n, n)]
        while pq:
            cost, u = heappop(pq)
            if dist.get(u, float('inf')) < cost:
                continue
            if u == m:
                return cost
            s = str(u).zfill(d)
            for i in range(d):
                digit = int(s[i])
                for nd in (digit - 1, digit + 1):
                    if 0 <= nd <= 9:
                        v = int(s[:i] + str(nd) + s[i + 1:])
                        if not is_prime[v] and cost + v < dist.get(v, float('inf')):
                            dist[v] = cost + v
                            heappush(pq, (cost + v, v))
        return -1
`)});
lite({id:651,slug:"4-keys-keyboard",title:"4 Keys Keyboard",level:"Medium",topic:DP,name:"dp[i] = best count after i key presses",
w:"n=7 → A A A, Ctrl-A, Ctrl-C, Ctrl-V, Ctrl-V → 9.",k:"With i presses left, either press A (+1) or choose a point j < i − 2 where you select-all, copy, then paste i − j − 2 times: dp[i] = max(dp[i−1] + 1, dp[j] · (i − j − 1)).",
i:"n = 7",o:"9",time:"O(n²)",space:"O(n)",
code:C(`
class Solution:
    def maxA(self, n):
        dp = list(range(n + 1))
        for i in range(3, n + 1):
            for j in range(1, i - 2):
                dp[i] = max(dp[i], dp[j] * (i - j - 1))
        return dp[n]
`)});
lite({id:1013,slug:"partition-array-into-three-parts-with-equal-sum",title:"Partition Array Into Three Parts With Equal Sum",level:"Easy",topic:PS,name:"Count prefixes that hit total/3",
w:"[0,2,1,-6,6,-7,9,1,2,0,1] has total 3, target 1 per part: 0+2+1-6+6-7+9+1... → three parts → true.",k:"The total must be divisible by 3. Walk the array adding to a running sum; each time it reaches target = total/3, count a part and reset to 0. We need at least three parts (a third part may be empty-sum when the rest is zero, so require count ≥ 3).",
i:"arr = [0,2,1,-6,6,-7,9,1,2,0,1]",o:"true",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def canThreePartsEqualSum(self, arr):
        total = sum(arr)
        if total % 3:
            return False
        target = total // 3
        run = parts = 0
        for x in arr:
            run += x
            if run == target:
                parts += 1
                run = 0
        return parts >= 3
`)});
lite({id:1324,slug:"print-words-vertically",title:"Print Words Vertically",level:"Medium",topic:ARR,name:"Pad words, read column by column",
w:"'HOW ARE YOU' → ['HAY','ORO','WEU'].",k:"Split into words. For each column index up to the longest word take the character of every word (a space where the word is too short), then strip trailing spaces from each column string.",
i:"s = \"HOW ARE YOU\"",o:"['HAY', 'ORO', 'WEU']",time:"O(total)",space:"O(total)",
code:C(`
class Solution:
    def printVertically(self, s):
        words = s.split()
        width = max(map(len, words))
        res = []
        for c in range(width):
            col = ''.join(w[c] if c < len(w) else ' ' for w in words)
            res.append(col.rstrip())
        return res
`)});
lite({id:1528,slug:"shuffle-string",title:"Shuffle String",level:"Easy",topic:ARR,name:"Place each letter at its target index",
w:"s 'codeleet', indices [4,5,6,7,0,2,1,3] → 'leetcode'.",k:"The letter s[i] belongs at position indices[i] of the answer. Create an array and write each letter to its place.",
i:"s = \"codeleet\", indices = [4,5,6,7,0,2,1,3]",o:"\"leetcode\"",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def restoreString(self, s, indices):
        res = [''] * len(s)
        for c, i in zip(s, indices):
            res[i] = c
        return ''.join(res)
`)});
lite({id:1887,slug:"reduction-operations-to-make-the-array-elements-equal",title:"Reduction Operations to Make the Array Elements Equal",level:"Medium",topic:SRT,name:"Sort; every distinct value above the minimum costs its rank",
w:"[5,1,3] → 5 → 3 → 1 (2 steps), 3 → 1 (1 step) → 3.",k:"Each operation lowers the largest value to the next smaller distinct value. After sorting, an element whose value is the r-th smallest distinct value needs r operations. Sum those ranks over all elements.",
i:"nums = [5,1,3]",o:"3",time:"O(n log n)",space:"O(1)",
code:C(`
class Solution:
    def reductionOperations(self, nums):
        nums.sort()
        rank = res = 0
        for i in range(1, len(nums)):
            if nums[i] != nums[i - 1]:
                rank += 1
            res += rank
        return res
`)});
lite({id:2664,slug:"the-knights-tour",title:"The Knight's Tour",level:"Medium",topic:BTK,name:"Backtracking over the eight knight moves",
w:"A 1 × 1 board → [[0]].",k:"Mark the start cell 0 and try the eight knight moves in a fixed order; recurse with the next number. If the move count reaches m·n the tour is complete; otherwise undo the cell and try the next move. This solution returns the first tour found.",
i:"m = 3, n = 4, r = 0, c = 0",o:"[[0, 3, 6, 9], [11, 8, 1, 4], [2, 5, 10, 7]]",time:"O(8^(m·n)) worst case",space:"O(m·n)",
code:C(`
class Solution:
    def tourOfKnight(self, m, n, r, c):
        board = [[-1] * n for _ in range(m)]
        moves = [(1, 2), (2, 1), (2, -1), (1, -2), (-1, -2), (-2, -1), (-2, 1), (-1, 2)]
        def go(i, j, step):
            board[i][j] = step
            if step == m * n - 1:
                return True
            for di, dj in moves:
                a, b = i + di, j + dj
                if 0 <= a < m and 0 <= b < n and board[a][b] == -1:
                    if go(a, b, step + 1):
                        return True
            board[i][j] = -1
            return False
        go(r, c, 0)
        return board
`)});
lite({id:2815,slug:"max-pair-sum-in-an-array",title:"Max Pair Sum in an Array",level:"Easy",topic:HM,name:"Keep the best number per largest digit",
w:"[112,131,411] → no two numbers share their largest digit → -1.",k:"Group the numbers by their largest digit. For each group the answer is the sum of its two biggest members. Keep the maximum over the groups, or −1 if no group has two numbers.",
i:"nums = [51,71,17,24,42]",o:"88",time:"O(n log V)",space:"O(1)",
code:C(`
class Solution:
    def maxSum(self, nums):
        best = {}
        res = -1
        for x in nums:
            d = max(str(x))
            if d in best:
                res = max(res, best[d] + x)
            best[d] = max(best.get(d, 0), x)
        return res
`)});
lite({id:3119,slug:"maximum-number-of-potholes-that-can-be-fixed",title:"Maximum Number of Potholes That Can Be Fixed",level:"Medium",topic:GD,name:"Fix the longest groups first, partial group with the leftover",
w:"road '..xxxxx', budget 4 → fix 3 of the 5 consecutive potholes (cost 3 + 1) → 3.",k:"Fixing n consecutive potholes costs n + 1, so long groups are cheaper per pothole. Sort the lengths of the groups of x in descending order. Fix whole groups while the budget allows (cost length + 1). With the leftover budget b ≥ 2, fix b − 1 potholes of the next group and stop.",
i:"road = \"x.x.xxx...x\", budget = 14",o:"6",time:"O(n log n)",space:"O(n)",
code:C(`
class Solution:
    def maxPotholes(self, road, budget):
        groups = sorted((len(g) for g in road.split('.') if g), reverse=True)
        fixed = 0
        for g in groups:
            if budget >= g + 1:
                budget -= g + 1
                fixed += g
            else:
                if budget >= 2:
                    fixed += budget - 1
                break
        return fixed
`)});
lite({id:3393,slug:"count-paths-with-the-given-xor-value",title:"Count Paths With the Given XOR Value",level:"Medium",topic:DP,name:"dp over cells and xor value (< 16)",
w:"grid [[2,1,5],[7,10,0],[12,6,4]], k=11 → 3 paths.",k:"Values are below 16, so a path's xor is also below 16. dp[i][j][x] = number of paths from the start to (i, j) with xor x. A cell takes counts from above and from the left, shifting their xor values by the cell's number. The answer is dp at the end cell with xor k, modulo 1e9+7.",
i:"grid = [[2,1,5],[7,10,0],[12,6,4]], k = 11",o:"3",time:"O(m·n·16)",space:"O(m·n·16)",
code:C(`
class Solution:
    def countPathsWithXorValue(self, grid, k):
        MOD = 10**9 + 7
        m, n = len(grid), len(grid[0])
        dp = [[[0] * 16 for _ in range(n)] for _ in range(m)]
        dp[0][0][grid[0][0]] = 1
        for i in range(m):
            for j in range(n):
                if i == 0 and j == 0:
                    continue
                for x in range(16):
                    ways = 0
                    if i:
                        ways += dp[i - 1][j][x ^ grid[i][j]]
                    if j:
                        ways += dp[i][j - 1][x ^ grid[i][j]]
                    dp[i][j][x] = ways % MOD
        return dp[m - 1][n - 1][k] if k < 16 else 0
`)});
lite({id:672,slug:"bulb-switcher-ii",title:"Bulb Switcher II",level:"Medium",topic:MB,name:"Only a few patterns exist (n ≥ 3 behaves the same)",
w:"n=3, presses=1 → 4 different patterns.",k:"The four buttons flip all, evens, odds, or every 3rd bulb (1, 4, 7, …). Pressing a button twice cancels, and a few combinations equal one button, so only 8 distinct effects exist, and they are fully visible on the first three bulbs. Count patterns by (n, presses): for n ≥ 3 it is 1, 4, 7, 8 for 0, 1, 2, 3+ presses; smaller n give smaller tables.",
i:"n = 3, presses = 1",o:"4",time:"O(1)",space:"O(1)",
code:C(`
class Solution:
    def flipLights(self, n, presses):
        if presses == 0:
            return 1
        if n == 1:
            return 2
        if n == 2:
            return 3 if presses == 1 else 4
        return 4 if presses == 1 else 7 if presses == 2 else 8
`)});
lite({id:1006,slug:"clumsy-factorial",title:"Clumsy Factorial",level:"Medium",topic:STK,name:"Stack with the fixed cycle * / + -",
w:"n=4 → 4 * 3 / 2 + 1 = 7.",k:"Apply the operators in the rotating order *, /, +, − from n down to 1, with the usual precedence (and integer division towards zero). Use a stack: * and / combine with the stack top, + pushes the next number and − pushes its negative; the answer is the stack sum.",
i:"n = 4",o:"7",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def clumsy(self, n):
        stack = [n]
        op = 0
        for x in range(n - 1, 0, -1):
            if op == 0:
                stack.append(stack.pop() * x)
            elif op == 1:
                stack.append(int(stack.pop() / x))
            elif op == 2:
                stack.append(x)
            else:
                stack.append(-x)
            op = (op + 1) % 4
        return sum(stack)
`)});
lite({id:1375,slug:"number-of-times-binary-string-is-prefix-aligned",title:"Number of Times Binary String Is Prefix-Aligned",level:"Medium",topic:ARR,name:"Prefix aligned when the maximum flipped index equals the count",
w:"flips [3,2,4,1,5]: after step 4 the maximum flipped index is 4, and after step 5 it is 5 → 2 aligned moments.",k:"After k flips the bits 1…k are all on exactly when the largest index flipped so far is k (then every position up to k has been flipped). Count the steps where the running maximum equals the step number.",
i:"flips = [3,2,4,1,5]",o:"2",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def numTimesAllBlue(self, flips):
        top = count = 0
        for step, f in enumerate(flips, 1):
            top = max(top, f)
            if top == step:
                count += 1
        return count
`)});
lite({id:1637,slug:"widest-vertical-area-between-two-points-containing-no-points",title:"Widest Vertical Area Between Two Points Containing No Points",level:"Easy",topic:SRT,name:"Largest gap between sorted x-coordinates",
w:"points [[8,7],[9,9],[7,4],[9,7]] → xs 7, 8, 9, 9 → widest gap 1.",k:"Only x matters. Sort the distinct x values; the answer is the maximum difference between neighbours.",
i:"points = [[8,7],[9,9],[7,4],[9,7]]",o:"1",time:"O(n log n)",space:"O(n)",
code:C(`
class Solution:
    def maxWidthOfVerticalArea(self, points):
        xs = sorted(x for x, _ in points)
        return max(b - a for a, b in zip(xs, xs[1:]))
`)});
lite({id:1703,slug:"minimum-adjacent-swaps-for-k-consecutive-ones",title:"Minimum Adjacent Swaps for K Consecutive Ones",level:"Hard",topic:PS,name:"Shift the positions, gather around the median",
w:"nums [1,0,0,1,0,1], k=2 → 1 swap.",k:"Take the positions of the 1s and subtract their rank (pos[i] − i): this removes the spacing the 1s already keep between them. Gathering k consecutive ones then means moving k of these shifted positions to one common value; the cheapest is the median. Slide a window of k positions and compute the cost with prefix sums.",
i:"nums = [1,0,0,1,0,1], k = 2",o:"1",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def minMoves(self, nums, k):
        if k == 1:
            return 0
        pos = [i for i, v in enumerate(nums) if v]
        p = [pos[i] - i for i in range(len(pos))]
        pre = [0]
        for x in p:
            pre.append(pre[-1] + x)
        best = float('inf')
        for i in range(len(p) - k + 1):
            mid = i + k // 2
            med = p[mid]
            left = med * (mid - i) - (pre[mid] - pre[i])
            right = (pre[i + k] - pre[mid + 1]) - med * (i + k - mid - 1)
            best = min(best, left + right)
        return best
`)});
lite({id:1836,slug:"remove-duplicates-from-an-unsorted-linked-list",title:"Remove Duplicates From an Unsorted Linked List",level:"Medium",topic:LL,name:"Count values, then drop every node whose value repeats",
w:"[1,2,3,2] → both 2s are removed → [1,3].",k:"Count how often each value occurs. Rebuild the list skipping every node whose value occurs more than once (all copies are deleted, not just the extras).",
i:"head = [1,2,3,2]",o:"[1, 3]",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def deleteDuplicatesUnsorted(self, head):
        cnt = Counter()
        node = head
        while node:
            cnt[node.val] += 1
            node = node.next
        dummy = ListNode(0, head)
        prev = dummy
        while prev.next:
            if cnt[prev.next.val] > 1:
                prev.next = prev.next.next
            else:
                prev = prev.next
        return dummy.next
`)});
lite({id:2127,slug:"maximum-employees-to-be-invited-to-a-meeting",title:"Maximum Employees to Be Invited to a Meeting",level:"Hard",topic:GR,name:"Functional graph: longest cycle vs 2-cycles with their chains",
w:"favorite [2,2,1,2] → the cycle 1 ↔ 2 with the chain 0 → 2 and 3 → 2 gives 3.",k:"Each employee points to a favourite, so the graph is made of cycles with trees hanging off them. A table around a cycle of length ≥ 3 seats exactly the cycle. For a 2-cycle (a ↔ b) the table also seats the longest chain leading into a and the longest into b. Answer = max(longest cycle, sum over all 2-cycles of (2 + chain lengths)). Chain depths come from a topological peel of nodes with in-degree 0.",
i:"favorite = [2,2,1,2]",o:"3",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def maximumInvitations(self, favorite):
        n = len(favorite)
        indeg = [0] * n
        for f in favorite:
            indeg[f] += 1
        depth = [1] * n
        q = deque(i for i in range(n) if indeg[i] == 0)
        while q:
            u = q.popleft()
            v = favorite[u]
            depth[v] = max(depth[v], depth[u] + 1)
            indeg[v] -= 1
            if indeg[v] == 0:
                q.append(v)
        longest_cycle = pairs = 0
        seen = [False] * n
        for i in range(n):
            if indeg[i] == 0 or seen[i]:
                continue
            cycle = []
            j = i
            while not seen[j]:
                seen[j] = True
                cycle.append(j)
                j = favorite[j]
            if len(cycle) == 2:
                a, b = cycle
                pairs += depth[a] + depth[b]
            else:
                longest_cycle = max(longest_cycle, len(cycle))
        return max(longest_cycle, pairs)
`)});
lite({id:2384,slug:"largest-palindromic-number",title:"Largest Palindromic Number",level:"Medium",topic:GD,name:"Pairs of digits outwards, best single digit in the middle",
w:"'444947137' → '7449447'.",k:"Count the digits. Use as many pairs as possible, the largest digits on the outside (digit pairs of 9s, then 8s, …). Pairs of 0 may only be used when some other digit pair exists (no leading zeros). The middle is the largest digit with a leftover copy. If no non-zero digit exists the answer is '0'.",
i:"num = \"444947137\"",o:"\"7449447\"",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def largestPalindromic(self, num):
        cnt = Counter(num)
        half = []
        for d in '9876543210':
            half.append(d * (cnt[d] // 2))
        left = ''.join(half).lstrip('0')
        middle = ''
        for d in '9876543210':
            if cnt[d] % 2:
                middle = d
                break
        if not left:
            return middle or '0'
        return left + middle + left[::-1]
`)});
lite({id:3040,slug:"maximum-number-of-operations-with-the-same-score-ii",title:"Maximum Number of Operations With the Same Score II",level:"Medium",topic:DP,name:"Interval DP for each possible first score",
w:"[3,2,1,2,3,4] → score 5 three times → 3.",k:"The first operation fixes the score: it is nums[0]+nums[1], nums[-2]+nums[-1] or nums[0]+nums[-1]. For each candidate score run a memoised search on the remaining interval [l, r]: remove the first two, the last two or both ends whenever their sum equals the score, and keep the maximum count.",
i:"nums = [3,2,1,2,3,4]",o:"3",time:"O(n²)",space:"O(n²)",
code:C(`
class Solution:
    def maxOperations(self, nums):
        n = len(nums)
        def solve(score):
            @lru_cache(None)
            def go(l, r):
                if r - l + 1 < 2:
                    return 0
                best = 0
                if nums[l] + nums[l + 1] == score:
                    best = max(best, 1 + go(l + 2, r))
                if nums[r - 1] + nums[r] == score:
                    best = max(best, 1 + go(l, r - 2))
                if nums[l] + nums[r] == score:
                    best = max(best, 1 + go(l + 1, r - 1))
                return best
            return go(0, n - 1)
        return max(solve(nums[0] + nums[1]), solve(nums[-2] + nums[-1]), solve(nums[0] + nums[-1]))
`)});
lite({id:3229,slug:"minimum-operations-to-make-array-equal-to-target",title:"Minimum Operations to Make Array Equal to Target",level:"Hard",topic:PS,name:"Half the total change of the difference array",
w:"nums [3,5,1,2], target [4,6,2,4] → differences 1,1,1,2 → 2 operations.",k:"Let d[i] = target[i] − nums[i]. Adding or subtracting 1 on a subarray changes the difference array e (e[0] = d[0], e[i] = d[i] − d[i−1], e[n] = −d[n−1]) by +1 at one position and −1 at another. The e values sum to 0, so the minimum number of operations is half the sum of |e|.",
i:"nums = [3,5,1,2], target = [4,6,2,4]",o:"2",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def minimumOperations(self, nums, target):
        prev = 0
        total = 0
        for a, b in zip(nums, target):
            d = b - a
            total += abs(d - prev)
            prev = d
        total += abs(prev)
        return total // 2
`)});
lite({id:3772,slug:"maximum-subgraph-score-in-a-tree",title:"Maximum Subgraph Score in a Tree",level:"Hard",topic:BT,name:"Rerooting DP: best connected subgraph containing each node",
w:"n=3 path 0–1–2, good [1,0,1] → every node can take the whole tree: score 1.",k:"Score a node +1 if good and −1 if bad. For a tree rooted at 0, down[v] = score[v] + sum over children of max(0, down[child]) is the best connected subgraph below v containing v. Then reroot: for a child c of p, the contribution of p's side is max(0, full[p] − max(0, down[c])), so full[c] = down[c] + that. full[v] is the answer for v.",
i:"n = 3, edges = [[0,1],[1,2]], good = [1,0,1]",o:"[1, 1, 1]",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def maxSubgraphScore(self, n, edges, good):
        adj = defaultdict(list)
        for a, b in edges:
            adj[a].append(b)
            adj[b].append(a)
        val = [1 if g else -1 for g in good]
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
        down = val[:]
        for u in reversed(order):
            if parent[u] != -1:
                down[parent[u]] += max(0, down[u])
        full = down[:]
        for u in order:
            if parent[u] != -1:
                p = parent[u]
                full[u] = down[u] + max(0, full[p] - max(0, down[u]))
        return full
`)});
lite({id:3878,slug:"count-good-subarrays",title:"Count Good Subarrays",level:"Hard",topic:STK,name:"A subarray is good iff its OR equals its maximum",
w:"[4,2,3] → good: [4], [2], [3], [2,3] → 4.",k:"The OR of a subarray is at least its maximum, so it equals some element only if it equals the maximum, i.e. every element is a bit-subset of the maximum. For each index i as the (leftmost) maximum, find the range where it is the maximum (monotonic stack) and shrink it to the nearest elements on each side that have a bit i's value lacks (tracked with the last position of each bit). The count is (i − lo + 1) · (hi − i + 1).",
i:"nums = [4,2,3]",o:"4",time:"O(n·31)",space:"O(n)",
code:C(`
class Solution:
    def countGoodSubarrays(self, nums):
        n = len(nums)
        left = [-1] * n
        right = [n] * n
        stack = []
        for i in range(n):
            while stack and nums[stack[-1]] < nums[i]:
                stack.pop()
            left[i] = stack[-1] if stack else -1
            stack.append(i)
        stack = []
        for i in range(n - 1, -1, -1):
            while stack and nums[stack[-1]] <= nums[i]:
                stack.pop()
            right[i] = stack[-1] if stack else n
            stack.append(i)
        last = [-1] * 31
        prev_bad = [-1] * n
        for i in range(n):
            bad = -1
            for b in range(31):
                if not nums[i] >> b & 1:
                    bad = max(bad, last[b])
            prev_bad[i] = bad
            for b in range(31):
                if nums[i] >> b & 1:
                    last[b] = i
        last = [n] * 31
        next_bad = [n] * n
        for i in range(n - 1, -1, -1):
            bad = n
            for b in range(31):
                if not nums[i] >> b & 1:
                    bad = min(bad, last[b])
            next_bad[i] = bad
            for b in range(31):
                if nums[i] >> b & 1:
                    last[b] = i
        total = 0
        for i in range(n):
            lo = max(left[i], prev_bad[i]) + 1
            hi = min(right[i], next_bad[i]) - 1
            total += (i - lo + 1) * (hi - i + 1)
        return total
`)});
lite({id:333,slug:"largest-bst-subtree",title:"Largest BST Subtree",level:"Medium",topic:BT,name:"Post-order: (is BST, size, min, max)",
w:"[10,5,15,1,8,null,7] → the subtree rooted at 5 is a BST of size 3.",k:"Combine the children's results from the bottom: a node roots a BST when both subtrees are BSTs and left.max < val < right.min; its size is left + right + 1. Otherwise report that the subtree is not a BST. Track the largest BST size seen.",
i:"root = [10,5,15,1,8,null,7]",o:"3",time:"O(n)",space:"O(h)",
code:C(`
class Solution:
    def largestBSTSubtree(self, root):
        best = 0
        def go(node):
            nonlocal best
            if not node:
                return (True, 0, float('inf'), float('-inf'))
            lb, ls, lmin, lmax = go(node.left)
            rb, rs, rmin, rmax = go(node.right)
            if lb and rb and lmax < node.val < rmin:
                size = ls + rs + 1
                best = max(best, size)
                return (True, size, min(lmin, node.val), max(rmax, node.val))
            return (False, 0, 0, 0)
        go(root)
        return best
`)});
lite({id:1983,slug:"widest-pair-of-indices-with-equal-range-sum",title:"Widest Pair of Indices With Equal Range Sum",level:"Medium",topic:PS,name:"First occurrence of each prefix difference",
w:"nums1 [1,1,0,1], nums2 [0,1,1,0] → i=1, j=3 → 3.",k:"A range i…j has equal sums when the prefix differences of the two arrays at j and at i−1 are equal. Store the first index of every prefix difference (difference 0 at index −1) and update the answer with the distance when a difference repeats.",
i:"nums1 = [1,1,0,1], nums2 = [0,1,1,0]",o:"3",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def widestPairOfIndices(self, nums1, nums2):
        first = {0: -1}
        diff = best = 0
        for i, (a, b) in enumerate(zip(nums1, nums2)):
            diff += a - b
            if diff in first:
                best = max(best, i - first[diff])
            else:
                first[diff] = i
        return best
`)});
lite({id:591,slug:"tag-validator",title:"Tag Validator",level:"Hard",topic:STK,name:"Scan with a stack of open tag names",
w:"'<DIV>This is the first line <![CDATA[<div>]]></DIV>' → true.",k:"The code must be one valid closed tag wrapping everything. Scan left to right with a stack: at '<![CDATA[' skip to the matching ']]>' (only inside a tag); at '</' read a name and pop (it must match the stack top); at '<' read an upper-case name of length 1–9 and push; other text is fine inside a tag. The stack must be empty at the end and never empty before the end.",
i:"code = \"<DIV>This is the first line <![CDATA[<div>]]></DIV>\"",o:"true",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def isValid(self, code):
        stack = []
        i = 0
        n = len(code)
        def name_end(j):
            k = j
            while k < n and 'A' <= code[k] <= 'Z':
                k += 1
            return k
        while i < n:
            if i > 0 and not stack:
                return False
            if code.startswith("<![CDATA[", i):
                j = code.find("]]>", i)
                if j == -1 or not stack:
                    return False
                i = j + 3
            elif code.startswith("</", i):
                k = name_end(i + 2)
                if k >= n or code[k] != '>' or not stack or code[i + 2:k] != stack.pop():
                    return False
                i = k + 1
            elif code[i] == '<':
                k = name_end(i + 1)
                if k >= n or code[k] != '>' or not (1 <= k - i - 1 <= 9):
                    return False
                stack.append(code[i + 1:k])
                i = k + 1
            else:
                if not stack:
                    return False
                i += 1
        return not stack
`)});
lite({id:972,slug:"equal-rational-numbers",title:"Equal Rational Numbers",level:"Hard",topic:MB,name:"Convert each string to an exact fraction",
w:"'0.(52)' and '0.5(25)' are both 52/99 → true.",k:"A number looks like <int>, <int>.<frac>, or <int>.<frac>(<repeat>). Convert exactly: value = int + frac / 10^len(frac) + repeat / (10^len(frac) · (10^len(repeat) − 1)). Compare the two exact fractions.",
i:"s = \"0.(52)\", t = \"0.5(25)\"",o:"true",time:"O(L)",space:"O(L)",
code:C(`
class Solution:
    def isRationalEqual(self, s, t):
        def value(x):
            if '(' in x:
                head, rest = x.split('(')
                rep = rest[:-1]
            else:
                head, rep = x, ''
            if '.' in head:
                whole, frac = head.split('.')
            else:
                whole, frac = head, ''
            v = Fraction(int(whole))
            if frac:
                v += Fraction(int(frac), 10 ** len(frac))
            if rep:
                v += Fraction(int(rep), 10 ** len(frac) * (10 ** len(rep) - 1))
            return v
        return value(s) == value(t)
`)});
lite({id:1198,slug:"find-smallest-common-element-in-all-rows",title:"Find Smallest Common Element in All Rows",level:"Medium",topic:HM,name:"Count how many rows contain each value",
w:"[[1,2,3,4,5],[2,4,5,8,10],[3,5,7,9,11],[1,3,5,7,9]] → 5.",k:"Every row is strictly increasing, so a value appears at most once per row. Count the occurrences over all rows; the smallest value with count equal to the number of rows is the answer (or −1).",
i:"mat = [[1,2,3,4,5],[2,4,5,8,10],[3,5,7,9,11],[1,3,5,7,9]]",o:"5",time:"O(m·n)",space:"O(m·n)",
code:C(`
class Solution:
    def smallestCommonElement(self, mat):
        cnt = Counter(v for row in mat for v in row)
        return min((v for v, c in cnt.items() if c == len(mat)), default=-1)
`)});
lite({id:1093,slug:"statistics-from-a-large-sample",title:"Statistics from a Large Sample",level:"Medium",topic:ARR,name:"One pass over the counts",
w:"count[v] = how many times v occurs → [min, max, mean, median, mode].",k:"count[k] is how many samples equal k (k = 0…255). The minimum and maximum are the first and last non-zero index; the mean is Σ k·count / total; the mode is the index with the biggest count; the median is the middle value (or the average of the two middle values) found by walking the cumulative counts.",
i:"count = [0, 1, 3, 4] followed by 252 zeros",o:"[1.0, 3.0, 2.375, 2.5, 3.0]",time:"O(256)",space:"O(1)",
code:C(`
class Solution:
    def sampleStats(self, count):
        total = sum(count)
        values = [k for k in range(256) if count[k]]
        mean = sum(k * c for k, c in enumerate(count)) / total
        mode = max(range(256), key=lambda k: count[k])
        def kth(pos):
            seen = 0
            for k in range(256):
                seen += count[k]
                if seen > pos:
                    return k
        if total % 2:
            median = float(kth(total // 2))
        else:
            median = (kth(total // 2 - 1) + kth(total // 2)) / 2
        return [float(values[0]), float(values[-1]), mean, median, float(mode)]
`)});
lite({id:1273,slug:"delete-tree-nodes",title:"Delete Tree Nodes",level:"Medium",topic:BT,name:"Subtree sums and sizes from the leaves up",
w:"7 nodes: node 1's subtree sums to −2 and node 2's to 4 + (−2 −1 −1) = 0, so node 2's subtree and the zero-valued node 3 are removed → 2 nodes (0 and 1) remain.",k:"Compute each node's subtree sum and subtree size bottom-up. If the sum is zero the whole subtree is deleted, so its size contributes 0; otherwise it contributes its size (its own 1 plus the sizes of its kept children). Return the size contributed by the root.",
i:"nodes = 7, parent = [-1,0,0,1,2,2,2], value = [1,-2,4,0,-2,-1,-1]",o:"2",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def deleteTreeNodes(self, nodes, parent, value):
        children = defaultdict(list)
        for i, p in enumerate(parent):
            if p != -1:
                children[p].append(i)
        def go(u):
            total, size = value[u], 1
            for v in children[u]:
                s, c = go(v)
                total += s
                size += c
            return (total, 0 if total == 0 else size)
        return go(0)[1]
`)});
lite({id:1246,slug:"palindrome-removal",title:"Palindrome Removal",level:"Hard",topic:DP,name:"Interval DP: remove a palindromic subarray each move",
w:"[1,3,4,1,5]: remove 4, then 1,3,1, then 5 → 3 moves.",k:"dp[i][j] = fewest moves to remove arr[i..j]. Remove arr[i] alone (1 + dp[i+1][j]); or if arr[i] equals some arr[k], remove the block between them first and let the two ends join a palindrome: dp[i+1][k−1] + dp[k+1][j] (with the case k = i + 1 costing 1 for the pair).",
i:"arr = [1,3,4,1,5]",o:"3",time:"O(n³)",space:"O(n²)",
code:C(`
class Solution:
    def minimumMoves(self, arr):
        n = len(arr)
        dp = [[0] * (n + 1) for _ in range(n + 1)]
        for length in range(1, n + 1):
            for i in range(n - length + 1):
                j = i + length - 1
                best = 1 + (dp[i + 1][j] if i + 1 <= j else 0)
                for k in range(i + 1, j + 1):
                    if arr[i] == arr[k]:
                        inner = dp[i + 1][k - 1] if i + 1 <= k - 1 else 0
                        outer = dp[k + 1][j] if k + 1 <= j else 0
                        best = min(best, max(1, inner) + outer)
                dp[i][j] = best
        return dp[0][n - 1]
`)});
lite({id:1131,slug:"maximum-of-absolute-value-expression",title:"Maximum of Absolute Value Expression",level:"Medium",topic:MB,name:"Four sign combinations, max − min of each",
w:"arr1 [1,2,3,4], arr2 [-1,4,5,6] → 13.",k:"|a−b| + |c−d| + |i−j| is the maximum over sign choices of (±(a+... )). For each of the 4 sign pairs (s1, s2), the value s1·arr1[i] + s2·arr2[i] + i has maximum − minimum equal to the best difference for that sign pair. Take the largest over the four.",
i:"arr1 = [1,2,3,4], arr2 = [-1,4,5,6]",o:"13",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def maxAbsValExpr(self, arr1, arr2):
        best = 0
        for s1 in (1, -1):
            for s2 in (1, -1):
                vals = [s1 * a + s2 * b + i for i, (a, b) in enumerate(zip(arr1, arr2))]
                best = max(best, max(vals) - min(vals))
        return best
`)});
lite({id:1206,slug:"design-skiplist",title:"Design Skiplist",level:"Hard",topic:DS,name:"Linked levels with random promotion",
w:"add 1, 2, 3 → search 0 false, add 4, search 1 true, erase 0 false, erase 1 true, search 1 false.",k:"A skip list stores sorted values in several linked levels: level 0 holds everything, each higher level a random half of the one below. To find a value, start at the top-left, move right while the next value is smaller, then drop a level. Add inserts the value at a random height; erase unlinks it from every level.",
i:"Skiplist(); add(1); add(2); add(3); search(0); add(4); search(1); erase(0); erase(1); search(1)",o:"[None, None, None, False, None, True, False, True, False]",time:"O(log n) expected",space:"O(n)",
code:C(`
class Node:
    def __init__(self, val, levels):
        self.val = val
        self.next = [None] * levels

class Skiplist:
    MAX = 16

    def __init__(self):
        self.head = Node(-1, self.MAX)

    def _find_prev(self, num):
        prev = [None] * self.MAX
        cur = self.head
        for lvl in range(self.MAX - 1, -1, -1):
            while cur.next[lvl] and cur.next[lvl].val < num:
                cur = cur.next[lvl]
            prev[lvl] = cur
        return prev

    def search(self, target):
        prev = self._find_prev(target)
        node = prev[0].next[0]
        return node is not None and node.val == target

    def add(self, num):
        prev = self._find_prev(num)
        height = 1
        while height < self.MAX and random.random() < 0.5:
            height += 1
        node = Node(num, height)
        for lvl in range(height):
            node.next[lvl] = prev[lvl].next[lvl]
            prev[lvl].next[lvl] = node

    def erase(self, num):
        prev = self._find_prev(num)
        node = prev[0].next[0]
        if node is None or node.val != num:
            return False
        for lvl in range(self.MAX):
            if prev[lvl].next[lvl] is node:
                prev[lvl].next[lvl] = node.next[lvl]
        return True
`)});
lite({id:2321,slug:"maximum-score-of-spliced-array",title:"Maximum Score Of Spliced Array",level:"Hard",topic:DP,name:"Kadane on the difference, both directions",
w:"nums1 [60,60,60], nums2 [10,90,10] → swap index 1 → 210.",k:"Swapping a subarray moves its difference between the arrays. The best score is max(sum1 + best gain, sum2 + best gain) where the gain is the maximum subarray sum of nums2 − nums1 (for improving nums1) or nums1 − nums2 (for improving nums2). Use Kadane's algorithm (empty gain allowed).",
i:"nums1 = [60,60,60], nums2 = [10,90,10]",o:"210",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def maximumsSplicedArray(self, nums1, nums2):
        def gain(a, b):
            best = cur = 0
            for x, y in zip(a, b):
                cur = max(0, cur + y - x)
                best = max(best, cur)
            return best
        return max(sum(nums1) + gain(nums1, nums2), sum(nums2) + gain(nums2, nums1))
`)});
lite({id:2216,slug:"minimum-deletions-to-make-array-beautiful",title:"Minimum Deletions to Make Array Beautiful",level:"Medium",topic:GD,name:"Greedy build, delete a duplicate at an even slot",
w:"[1,1,2,3,5] → delete one of the first 1s → [1,2,3,5] → 1.",k:"Beautiful means even length and nums[2i] != nums[2i+1]. Build the result greedily: keep a counter of the kept length; when the kept length is even (an even index is about to be written) and the next number equals the previous kept one, delete it. If the final length is odd, delete one more.",
i:"nums = [1,1,2,3,5]",o:"1",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def minDeletion(self, nums):
        deletions = 0
        for i, x in enumerate(nums):
            pos = i - deletions
            if pos % 2 == 1 and nums[i - 1] == x:
                deletions += 1
        if (len(nums) - deletions) % 2:
            deletions += 1
        return deletions
`)});
lite({id:2309,slug:"greatest-english-letter-in-upper-and-lower-case",title:"Greatest English Letter in Upper and Lower Case",level:"Easy",topic:HM,name:"Largest letter present in both cases",
w:"'lEeTcOdE' → 'E'.",k:"Put the characters in a set and check letters from 'Z' down to 'A': the first letter whose upper- and lower-case forms are both present is the answer (or an empty string).",
i:"s = \"lEeTcOdE\"",o:"\"E\"",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def greatestLetter(self, s):
        seen = set(s)
        for c in 'ZYXWVUTSRQPONMLKJIHGFEDCBA':
            if c in seen and c.lower() in seen:
                return c
        return ""
`)});
lite({id:1371,slug:"find-the-longest-substring-containing-vowels-in-even-counts",title:"Find the Longest Substring Containing Vowels in Even Counts",level:"Medium",topic:PS,name:"Vowel parity bitmask, first occurrence",
w:"'eleetminicoworoep' → 'leetminicowor' → 13.",k:"Keep a 5-bit mask of vowel parities while scanning. A substring has all vowels an even number of times exactly when the mask at its end equals the mask at its start. Remember the first index of each mask and maximise the distance.",
i:"s = \"eleetminicoworoep\"",o:"13",time:"O(n)",space:"O(32)",
code:C(`
class Solution:
    def findTheLongestSubstring(self, s):
        first = {0: -1}
        mask = best = 0
        bit = {'a': 1, 'e': 2, 'i': 4, 'o': 8, 'u': 16}
        for i, c in enumerate(s):
            mask ^= bit.get(c, 0)
            if mask in first:
                best = max(best, i - first[mask])
            else:
                first[mask] = i
        return best
`)});
lite({id:1417,slug:"reformat-the-string",title:"Reformat The String",level:"Easy",topic:ARR,name:"Interleave the larger group first",
w:"'a0b1c2' → '0a1b2c'.",k:"Split into letters and digits. Their counts may differ by at most 1, otherwise return ''. Start with the larger group (letters first on a tie) and alternate taking one from each.",
i:"s = \"a0b1c2\"",o:"\"a0b1c2\"",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def reformat(self, s):
        letters = [c for c in s if c.isalpha()]
        digits = [c for c in s if c.isdigit()]
        if abs(len(letters) - len(digits)) > 1:
            return ""
        if len(digits) > len(letters):
            letters, digits = digits, letters
        out = []
        for i in range(len(letters)):
            out.append(letters[i])
            if i < len(digits):
                out.append(digits[i])
        return ''.join(out)
`)});
lite({id:1469,slug:"find-all-the-lonely-nodes",title:"Find All The Lonely Nodes",level:"Easy",topic:BT,name:"Collect children that have no sibling",
w:"[1,2,3,null,4] → 4 is the only child of 2 → [4].",k:"A node is lonely when its parent has exactly one child. Traverse the tree; whenever a node has only a left child or only a right child, record that child. Return the values in ascending order for a deterministic answer.",
i:"root = [1,2,3,null,4]",o:"[4]",time:"O(n)",space:"O(h)",
code:C(`
class Solution:
    def getLonelyNodes(self, root):
        res = []
        stack = [root]
        while stack:
            node = stack.pop()
            if not node:
                continue
            if node.left and not node.right:
                res.append(node.left.val)
            if node.right and not node.left:
                res.append(node.right.val)
            stack.append(node.left)
            stack.append(node.right)
        return sorted(res)
`)});
lite({id:1474,slug:"delete-n-nodes-after-m-nodes-of-a-linked-list",title:"Delete N Nodes After M Nodes of a Linked List",level:"Easy",topic:LL,name:"Keep m, skip n, repeat",
w:"[1..13], m=2, n=3 → 1,2,6,7,11,12.",k:"Walk the list: keep m nodes (advance m − 1 steps from the last kept node), then unlink the next n nodes, and repeat until the end.",
i:"head = [1,2,3,4,5,6,7,8,9,10,11,12,13], m = 2, n = 3",o:"[1, 2, 6, 7, 11, 12]",time:"O(len)",space:"O(1)",
code:C(`
class Solution:
    def deleteNodes(self, head, m, n):
        cur = head
        while cur:
            for _ in range(m - 1):
                if cur:
                    cur = cur.next
            if not cur:
                break
            drop = cur.next
            for _ in range(n):
                if drop:
                    drop = drop.next
            cur.next = drop
            cur = drop
        return head
`)});
lite({id:1573,slug:"number-of-ways-to-split-a-string",title:"Number of Ways to Split a String",level:"Medium",topic:MB,name:"Gaps between the right groups of ones",
w:"'10101' has 3 ones, one per part; the cuts can go in 2 gaps × 2 gaps → 4 ways.",k:"With k ones in total, k must be divisible by 3 (each part gets k/3). If k = 0, any two cuts of the n − 1 gaps work: C(n−1, 2). Otherwise the first cut can be anywhere in the run of zeros between the (k/3)-th and (k/3+1)-th one, the second similarly: multiply the two run lengths (zeros + 1).",
i:"s = \"10101\"",o:"4",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def numWays(self, s):
        MOD = 10**9 + 7
        ones = [i for i, c in enumerate(s) if c == '1']
        k = len(ones)
        if k % 3:
            return 0
        if k == 0:
            n = len(s)
            return (n - 1) * (n - 2) // 2 % MOD
        t = k // 3
        return (ones[t] - ones[t - 1]) * (ones[2 * t] - ones[2 * t - 1]) % MOD
`)});
lite({id:1576,slug:"replace-all-s-to-avoid-consecutive-repeating-characters",title:"Replace All ?'s to Avoid Consecutive Repeating Characters",level:"Easy",topic:GD,name:"Pick any of 'a', 'b', 'c' that differs from both neighbours",
w:"'?zs' → 'azs'.",k:"At most two neighbours constrain a '?', and three letters are available, so one always works. For each '?' take the first of 'a', 'b', 'c' that differs from the previous character and the next character.",
i:"s = \"?zs\"",o:"\"azs\"",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def modifyString(self, s):
        chars = list(s)
        for i, c in enumerate(chars):
            if c == '?':
                left = chars[i - 1] if i else ''
                right = chars[i + 1] if i + 1 < len(chars) else ''
                for ch in 'abc':
                    if ch != left and ch != right:
                        chars[i] = ch
                        break
        return ''.join(chars)
`)});
lite({id:1638,slug:"count-substrings-that-differ-by-one-character",title:"Count Substrings That Differ by One Character",level:"Medium",topic:DP,name:"Extend matching pairs and count those with exactly one mismatch",
w:"s 'aba', t 'baba' → 6.",k:"For every pair of starting positions (i in s, j in t) walk forward while counting mismatches; each step with exactly one mismatch so far is one valid pair of substrings. Stop at the second mismatch.",
i:"s = \"aba\", t = \"baba\"",o:"6",time:"O(n·m·min(n,m))",space:"O(1)",
code:C(`
class Solution:
    def countSubstrings(self, s, t):
        count = 0
        for i in range(len(s)):
            for j in range(len(t)):
                diff = 0
                k = 0
                while i + k < len(s) and j + k < len(t):
                    if s[i + k] != t[j + k]:
                        diff += 1
                    if diff > 1:
                        break
                    if diff == 1:
                        count += 1
                    k += 1
        return count
`)});
lite({id:1681,slug:"minimum-incompatibility",title:"Minimum Incompatibility",level:"Hard",topic:DP,name:"Bitmask DP over subsets of size n / k",
w:"nums [1,2,1,4], k=2 → {1,2} and {1,4} → 1 + 3 = 4.",k:"Split into k groups of n/k distinct numbers; a group's incompatibility is max − min. Precompute the cost of every subset of size n/k with distinct values. dp[mask] = minimum total cost to assign the numbers in mask to complete groups: take the lowest unused element and combine it with each cost-valid subset of the remaining ones.",
i:"nums = [1,2,1,4], k = 2",o:"4",time:"O(3ⁿ)",space:"O(2ⁿ)",
code:C(`
class Solution:
    def minimumIncompatibility(self, nums, k):
        n = len(nums)
        size = n // k
        INF = float('inf')
        cost = {}
        for mask in range(1 << n):
            if bin(mask).count('1') != size:
                continue
            vals = [nums[i] for i in range(n) if mask >> i & 1]
            if len(set(vals)) == size:
                cost[mask] = max(vals) - min(vals)
        dp = [INF] * (1 << n)
        dp[0] = 0
        for mask in range(1 << n):
            if dp[mask] == INF or bin(mask).count('1') % size:
                continue
            free = [i for i in range(n) if not mask >> i & 1]
            if not free:
                continue
            first = free[0]
            rest = [i for i in free[1:]]
            for sub, c in cost.items():
                if sub >> first & 1 and not sub & mask:
                    dp[mask | sub] = min(dp[mask | sub], dp[mask] + c)
        return dp[-1] if dp[-1] < INF else -1
`)});
lite({id:1808,slug:"maximize-number-of-nice-divisors",title:"Maximize Number of Nice Divisors",level:"Hard",topic:MB,name:"Split prime factors into groups of 3",
w:"primeFactors = 5: split the exponents as 3 + 2 → 3 × 2 = 6 nice divisors.",k:"The number of nice divisors is the product of the exponents of its distinct primes, and the exponents sum to primeFactors. This is the integer-break problem: use as many 3s as possible, fix the remainder with 2s (remainder 1 turns one 3 into 2 + 2). Compute with modular exponentiation.",
i:"primeFactors = 5",o:"6",time:"O(log n)",space:"O(1)",
code:C(`
class Solution:
    def maxNiceDivisors(self, primeFactors):
        MOD = 10**9 + 7
        n = primeFactors
        if n <= 3:
            return n
        if n % 3 == 0:
            return pow(3, n // 3, MOD)
        if n % 3 == 1:
            return pow(3, n // 3 - 1, MOD) * 4 % MOD
        return pow(3, n // 3, MOD) * 2 % MOD
`)});
lite({id:1822,slug:"sign-of-the-product-of-an-array",title:"Sign of the Product of an Array",level:"Easy",topic:MB,name:"Count the negatives, stop at a zero",
w:"[-1,-2,-3,-4,3,2,1] → 4 negatives → 1.",k:"The product is 0 if any element is 0; otherwise its sign is positive for an even number of negative numbers and negative for an odd number.",
i:"nums = [-1,-2,-3,-4,3,2,1]",o:"1",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def arraySign(self, nums):
        sign = 1
        for x in nums:
            if x == 0:
                return 0
            if x < 0:
                sign = -sign
        return sign
`)});
lite({id:1904,slug:"the-number-of-full-rounds-you-have-played",title:"The Number of Full Rounds You Have Played",level:"Medium",topic:ARR,name:"Round the start up and the end down to a quarter hour",
w:"login '09:31', logout '10:14' → 09:45 and 10:00 are full rounds → 1.",k:"Rounds start every 15 minutes. Convert to minutes; if logout < login add 24 hours. Round the login up to the next multiple of 15 and the logout down; the number of full rounds is (end − start) // 15 (never negative).",
i:"loginTime = \"09:31\", logoutTime = \"10:14\"",o:"1",time:"O(1)",space:"O(1)",
code:C(`
class Solution:
    def numberOfRounds(self, loginTime, logoutTime):
        def minutes(t):
            return int(t[:2]) * 60 + int(t[3:])
        start, end = minutes(loginTime), minutes(logoutTime)
        if end < start:
            end += 24 * 60
        start = (start + 14) // 15 * 15
        end = end // 15 * 15
        return max(0, (end - start) // 15)
`)});
lite({id:1945,slug:"sum-of-digits-of-string-after-convert",title:"Sum of Digits of String After Convert",level:"Easy",topic:ARR,name:"Letters to numbers, then repeated digit sums",
w:"'iiii', k=1 → 9999 → 36.",k:"Replace each letter by its alphabet position (a = 1) and join them into one number string. Then k times replace the number by the sum of its digits.",
i:"s = \"iiii\", k = 1",o:"36",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def getLucky(self, s, k):
        digits = ''.join(str(ord(c) - 96) for c in s)
        for _ in range(k):
            digits = str(sum(int(d) for d in digits))
        return int(digits)
`)});
lite({id:2052,slug:"minimum-cost-to-separate-sentence-into-rows",title:"Minimum Cost to Separate Sentence into Rows",level:"Medium",topic:DP,name:"dp over word index: best way to finish from here",
w:"'i love leetcode', k=12 → rows 'i love' and 'leetcode' → 36.",k:"The cost of a row of length len is (k − len)², but the last row is free. dp[i] = minimum cost to place words i… onward. Try to fit words i … j into one row (length = sum of lengths + spaces ≤ k): if j is the last word the cost is 0, otherwise (k − len)² + dp[j + 1].",
i:"sentence = \"i love leetcode\", k = 12",o:"36",time:"O(n²)",space:"O(n)",
code:C(`
class Solution:
    def minimumCost(self, sentence, k):
        words = sentence.split()
        n = len(words)
        dp = [float('inf')] * (n + 1)
        dp[n] = 0
        for i in range(n - 1, -1, -1):
            length = -1
            for j in range(i, n):
                length += len(words[j]) + 1
                if length > k:
                    break
                if j == n - 1:
                    dp[i] = 0
                else:
                    dp[i] = min(dp[i], (k - length) ** 2 + dp[j + 1])
        return dp[0]
`)});
lite({id:2015,slug:"average-height-of-buildings-in-each-segment",title:"Average Height of Buildings in Each Segment",level:"Medium",topic:IV,name:"Sweep line over start / end events, merge equal averages",
w:"[[1,4,2],[3,9,4]] → [[1,3,2],[3,4,3],[4,9,4]].",k:"Create events: +height at start, −height at end (with the building count). Sweep the sorted event positions keeping total height and number of buildings. Between two consecutive positions, if buildings > 0 the segment has average total // count. Merge a segment into the previous one when it touches it and has the same average.",
i:"buildings = [[1,4,2],[3,9,4]]",o:"[[1, 3, 2], [3, 4, 3], [4, 9, 4]]",time:"O(n log n)",space:"O(n)",
code:C(`
class Solution:
    def averageHeightOfBuildings(self, buildings):
        events = defaultdict(lambda: [0, 0])
        for s, e, h in buildings:
            events[s][0] += h
            events[s][1] += 1
            events[e][0] -= h
            events[e][1] -= 1
        res = []
        total = count = 0
        points = sorted(events)
        for idx, p in enumerate(points[:-1]):
            total += events[p][0]
            count += events[p][1]
            if count == 0:
                continue
            avg = total // count
            nxt = points[idx + 1]
            if res and res[-1][1] == p and res[-1][2] == avg:
                res[-1][1] = nxt
            else:
                res.append([p, nxt, avg])
        return res
`)});
