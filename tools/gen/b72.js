const {lite}=require("./lib");
const C=s=>s.replace(/^\n/,"").replace(/\n$/,"").split("\n");
const ARR="Array / String",HM="Hash Map / Set",STK="Stack / Monotonic Stack",BT="Binary Tree",GR="Graph",HP="Heap",DP="Dynamic Programming",GD="Greedy",MB="Math / Bit Manipulation",BS="Binary Search",SRT="Sorting",SW="Sliding Window",MX="Matrix",UF="Union Find / Segment Tree",TP="Two Pointers",IV="Intervals",BTK="Backtracking",DS="Design",LL="Linked List",TR="Trie",PS="Prefix Sum";
// ---- Bloomberg (8)
lite({id:1846,slug:"maximum-element-after-decreasing-and-rearranging",title:"Maximum Element After Decreasing and Rearranging",level:"Medium",topic:GD,name:"Sort, then cap each value by previous + 1",
w:"[100,1,1000] → sorted [1,100,1000] → 1, 2, 3 → 3.",k:"The first element must be 1 and neighbours may differ by at most 1. Sort, set the first to 1 and cap every next element at previous + 1. The last element is the maximum possible.",
i:"arr = [100,1,1000]",o:"3",time:"O(n log n)",space:"O(1)",
code:C(`
class Solution:
    def maximumElementAfterDecrementingAndRearranging(self, arr):
        arr.sort()
        arr[0] = 1
        for i in range(1, len(arr)):
            arr[i] = min(arr[i], arr[i - 1] + 1)
        return arr[-1]
`)});
lite({id:504,slug:"base-7",title:"Base 7",level:"Easy",topic:MB,name:"Repeated division by 7",
w:"100 → 202 (2·49 + 0·7 + 2).",k:"Divide by 7 repeatedly, collecting remainders; they are the digits from the least significant. Handle zero and negative numbers separately.",
i:"num = 100",o:"\"202\"",time:"O(log n)",space:"O(log n)",
code:C(`
class Solution:
    def convertToBase7(self, num):
        if num == 0:
            return "0"
        sign = "-" if num < 0 else ""
        num = abs(num)
        digits = []
        while num:
            num, r = divmod(num, 7)
            digits.append(str(r))
        return sign + ''.join(reversed(digits))
`)});
lite({id:2350,slug:"shortest-impossible-sequence-of-rolls",title:"Shortest Impossible Sequence of Rolls",level:"Hard",topic:GD,name:"Greedy: count how many full sets of k faces you can complete",
w:"rolls [4,2,1,2,3,3,2,4,1], k=4 → the first full set ends at index 3, the second at 6 → every length-2 sequence exists, a length-3 one does not → 3.",k:"Scan the rolls collecting distinct faces. Each time all k faces have been seen, one 'round' is complete (every sequence of that many rolls can be formed) and the set resets. If c rounds are complete, every sequence of length c exists, and some sequence of length c + 1 does not. Return c + 1.",
i:"rolls = [4,2,1,2,3,3,2,4,1], k = 4",o:"3",time:"O(n)",space:"O(k)",
code:C(`
class Solution:
    def shortestSequence(self, rolls, k):
        seen = set()
        rounds = 0
        for r in rolls:
            seen.add(r)
            if len(seen) == k:
                rounds += 1
                seen = set()
        return rounds + 1
`)});
lite({id:3016,slug:"minimum-number-of-pushes-to-type-word-ii",title:"Minimum Number of Pushes to Type Word II",level:"Medium",topic:GD,name:"Most frequent letters get the cheapest keys",
w:"'xyzxyzxyzxyz' → 3 letters on 3 keys, each 1 push → 12.",k:"There are 8 keys. Each key can hold several letters; the j-th letter on a key costs j pushes. Sort letter frequencies in descending order: the first 8 letters cost 1 push each, the next 8 cost 2, and so on.",
i:"word = \"xyzxyzxyzxyz\"",o:"12",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def minimumPushes(self, word):
        freqs = sorted(Counter(word).values(), reverse=True)
        return sum(f * (i // 8 + 1) for i, f in enumerate(freqs))
`)});
lite({id:3620,slug:"network-recovery-pathways",title:"Network Recovery Pathways",level:"Hard",topic:BS,name:"Binary search the minimum edge, cheapest path in a DAG",
w:"edges [[0,1,5],[1,3,10],[0,2,3],[2,3,4]], k=10 → the path 0→2→3 costs 7 with minimum 3 → 3.",k:"The score of a path is its cheapest edge, and we want the largest score whose path stays within total cost k. Binary search the score s: use only edges with cost ≥ s and find the cheapest path from 0 to n−1 through online intermediate nodes (a DAG (Directed Acyclic Graph), so process in topological order). If that cost is ≤ k then s is achievable.",
i:"edges = [[0,1,5],[1,3,10],[0,2,3],[2,3,4]], online = [True,True,True,True], k = 10",o:"3",time:"O((n + m) log C)",space:"O(n + m)",
code:C(`
class Solution:
    def findMaxPathScore(self, edges, online, k):
        n = len(online)
        adj = defaultdict(list)
        indeg = [0] * n
        for u, v, c in edges:
            adj[u].append((v, c))
            indeg[v] += 1
        order = []
        ready = [i for i in range(n) if indeg[i] == 0]
        while ready:
            u = ready.pop()
            order.append(u)
            for v, _ in adj[u]:
                indeg[v] -= 1
                if indeg[v] == 0:
                    ready.append(v)
        def ok(s):
            INF = float('inf')
            dist = [INF] * n
            dist[0] = 0
            for u in order:
                if dist[u] == INF or (u != 0 and u != n - 1 and not online[u]):
                    continue
                for v, c in adj[u]:
                    if c >= s and dist[u] + c < dist[v]:
                        dist[v] = dist[u] + c
            return dist[n - 1] <= k
        if not edges:
            return -1
        lo, hi = 0, max(c for _, _, c in edges)
        if not ok(0):
            return -1
        while lo < hi:
            mid = (lo + hi + 1) // 2
            if ok(mid):
                lo = mid
            else:
                hi = mid - 1
        return lo
`)});
lite({id:3756,slug:"concatenate-non-zero-digits-and-multiply-by-sum-ii",title:"Concatenate Non-Zero Digits and Multiply by Sum II",level:"Medium",topic:PS,name:"Prefix numbers, digit sums and counts of non-zero digits",
w:"s '10203004', query [0,7] → x = 1234, digit sum 10 → 12340.",k:"For each prefix keep: the number formed by its non-zero digits mod p, their digit sum, and how many non-zero digits there are. For a range [l, r] the number x is (P[r+1] − P[l] · 10^(c)) where c is the count of non-zero digits inside the range. Multiply by the digit sum difference, modulo 1e9+7.",
i:"s = \"10203004\", queries = [[0,7],[1,3],[4,6]]",o:"[12340, 4, 9]",time:"O(n + q)",space:"O(n)",
code:C(`
class Solution:
    def sumAndMultiply(self, s, queries):
        MOD = 10**9 + 7
        n = len(s)
        num = [0] * (n + 1)
        total = [0] * (n + 1)
        cnt = [0] * (n + 1)
        pow10 = [1] * (n + 1)
        for i in range(n):
            pow10[i + 1] = pow10[i] * 10 % MOD
            d = int(s[i])
            if d:
                num[i + 1] = (num[i] * 10 + d) % MOD
                total[i + 1] = total[i] + d
                cnt[i + 1] = cnt[i] + 1
            else:
                num[i + 1], total[i + 1], cnt[i + 1] = num[i], total[i], cnt[i]
        res = []
        for l, r in queries:
            c = cnt[r + 1] - cnt[l]
            x = (num[r + 1] - num[l] * pow10[c]) % MOD
            res.append(x * (total[r + 1] - total[l]) % MOD)
        return res
`)});
lite({id:3534,slug:"path-existence-queries-in-a-graph-ii",title:"Path Existence Queries in a Graph II",level:"Hard",topic:UF,name:"Sort by value, binary lifting over farthest reach",
w:"nums [1,8,3,4,2], maxDiff 3: nodes 0 and 3 are directly linked → distance 1.",k:"Nodes i and j are linked if their values differ by at most maxDiff. Sort the nodes by value: from sorted position p you can reach every position up to reach[p]. The shortest path between two positions is a sequence of greedy jumps to the farthest reachable position. Precompute reach, then build binary-lifting tables (jump 2^k greedy steps) and answer each query by taking the largest jumps that stay short of the target.",
i:"n = 5, nums = [1,8,3,4,2], maxDiff = 3, queries = [[0,3],[2,4]]",o:"[1, 1]",time:"O((n + q) log n)",space:"O(n log n)",
code:C(`
class Solution:
    def pathExistenceQueries(self, n, nums, maxDiff, queries):
        order = sorted(range(n), key=lambda i: nums[i])
        pos = [0] * n
        for p, i in enumerate(order):
            pos[i] = p
        vals = [nums[i] for i in order]
        LOG = max(1, n.bit_length())
        reach = [0] * n
        j = 0
        for i in range(n):
            while j + 1 < n and vals[j + 1] - vals[i] <= maxDiff:
                j += 1
            reach[i] = max(j, i)
        up = [reach]
        for _ in range(LOG):
            prev = up[-1]
            up.append([prev[prev[i]] for i in range(n)])
        res = []
        for u, v in queries:
            a, b = sorted((pos[u], pos[v]))
            if a == b:
                res.append(0)
                continue
            if up[-1][a] < b:
                res.append(-1)
                continue
            steps = 0
            cur = a
            for k in range(LOG, -1, -1):
                if up[k][cur] < b:
                    cur = up[k][cur]
                    steps += 1 << k
            res.append(steps + 1)
        return res
`)});
lite({id:3312,slug:"sorted-gcd-pair-queries",title:"Sorted GCD Pair Queries",level:"Hard",topic:MB,name:"Count pairs per gcd with a sieve, then binary search the prefix counts",
w:"[2,3,4] → pair gcds sorted [1,1,2] → queries 0, 2, 2 → [1,2,2].",k:"For each g, count the numbers divisible by g, c, and the pairs among them c(c−1)/2; subtract the pairs whose gcd is a larger multiple of g (go from large g to small). That gives exact[g] = number of pairs with gcd exactly g. Prefix-sum exact[1…max]; a query q is answered by the first g whose prefix exceeds q (binary search).",
i:"nums = [2,3,4], queries = [0,2,2]",o:"[1, 2, 2]",time:"O(M log M + q log M)",space:"O(M)",
code:C(`
class Solution:
    def gcdValues(self, nums, queries):
        m = max(nums)
        cnt = [0] * (m + 1)
        for x in nums:
            cnt[x] += 1
        exact = [0] * (m + 1)
        for g in range(m, 0, -1):
            c = sum(cnt[k] for k in range(g, m + 1, g))
            exact[g] = c * (c - 1) // 2 - sum(exact[k] for k in range(2 * g, m + 1, g))
        pref = []
        total = 0
        for g in range(1, m + 1):
            total += exact[g]
            pref.append(total)
        return [bisect_right(pref, q) + 1 for q in queries]
`)});
lite({id:834,slug:"sum-of-distances-in-tree",title:"Sum of Distances in Tree",level:"Hard",topic:BT,name:"Rerooting: answer[child] from answer[parent]",
w:"n=6, edges [[0,1],[0,2],[2,3],[2,4],[2,5]] → [8,12,6,10,10,10].",k:"Compute, for the root 0, the subtree sizes and the sum of distances from the root. Moving the root from a parent p to its child c brings the c-subtree one step closer (size[c] nodes) and everything else one step farther (n − size[c] nodes): ans[c] = ans[p] − size[c] + (n − size[c]).",
i:"n = 6, edges = [[0,1],[0,2],[2,3],[2,4],[2,5]]",o:"[8, 12, 6, 10, 10, 10]",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def sumOfDistancesInTree(self, n, edges):
        adj = defaultdict(list)
        for a, b in edges:
            adj[a].append(b)
            adj[b].append(a)
        order = []
        parent = [-1] * n
        stack = [0]
        while stack:
            u = stack.pop()
            order.append(u)
            for v in adj[u]:
                if v != parent[u]:
                    parent[v] = u
                    stack.append(v)
        size = [1] * n
        down = [0] * n
        for u in reversed(order):
            p = parent[u]
            if p != -1:
                size[p] += size[u]
                down[p] += down[u] + size[u]
        ans = [0] * n
        ans[0] = down[0]
        for u in order[1:]:
            ans[u] = ans[parent[u]] - size[u] + (n - size[u])
        return ans
`)});
lite({id:654,slug:"maximum-binary-tree",title:"Maximum Binary Tree",level:"Medium",topic:STK,name:"Monotonic stack builds the tree in one pass",
w:"[3,2,1,6,0,5] → root 6, left [3,2,1], right [0,5].",k:"The root is the maximum; the left subtree is built from the elements before it and the right from those after it. Scan left to right with a stack of decreasing values: a new value pops smaller ones (the last popped becomes its left child), and then becomes the right child of the new stack top.",
i:"nums = [3,2,1,6,0,5]",o:"[6, 3, 5, None, 2, 0, None, None, 1]",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def constructMaximumBinaryTree(self, nums):
        stack = []
        for x in nums:
            node = TreeNode(x)
            last = None
            while stack and stack[-1].val < x:
                last = stack.pop()
            node.left = last
            if stack:
                stack[-1].right = node
            stack.append(node)
        return stack[0]
`)});
lite({id:3499,slug:"maximize-active-section-with-trade-i",title:"Maximize Active Section with Trade I",level:"Medium",topic:ARR,name:"Best pair of zero blocks around a block of ones",
w:"'0100' → turn the 1 into 0 and the whole 0000 into 1111 → 4.",k:"A trade turns a block of 1s (with zeros on both sides) into zeros, which merges the two neighbouring zero blocks into one block surrounded by 1s (the augmented ends), and then flips that block to 1s. The gain is the two neighbouring zero blocks' lengths. Return the current ones plus the largest such gain.",
i:"s = \"0100\"",o:"4",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def maxActiveSectionsAfterTrade(self, s):
        blocks = [(c, len(list(g))) for c, g in groupby(s)]
        best = 0
        for k in range(1, len(blocks) - 1):
            if blocks[k][0] == '1':
                best = max(best, blocks[k - 1][1] + blocks[k + 1][1])
        return s.count('1') + best
`)});
lite({id:3501,slug:"maximize-active-section-with-trade-ii",title:"Maximize Active Section with Trade II",level:"Hard",topic:UF,name:"Block values + sparse table, clip the two end blocks per query",
w:"s '0100', queries [[0,3],[0,2],[1,3]] → [4,3,1].",k:"Split s into blocks of equal characters. For each block of 1s with two zero neighbours, value = sum of the neighbour lengths. For a query only the first and last blocks are clipped by the range; the blocks in between are whole. Take the best of (a) the 1-blocks next to the clipped ends, computed with clipped lengths, and (b) the whole interior blocks, via a sparse table range maximum.",
i:"s = \"0100\", queries = [[0,3],[0,2],[1,3]]",o:"[4, 3, 1]",time:"O((n + q) log n)",space:"O(n log n)",
code:C(`
class Solution:
    def maxActiveSectionsAfterTrade(self, s, queries):
        blocks = []
        i = 0
        while i < len(s):
            j = i
            while j < len(s) and s[j] == s[i]:
                j += 1
            blocks.append((s[i], i, j - 1))
            i = j
        m = len(blocks)
        starts = [b[1] for b in blocks]
        val = [0] * m
        for k in range(1, m - 1):
            if blocks[k][0] == '1':
                val[k] = (blocks[k - 1][2] - blocks[k - 1][1] + 1) + (blocks[k + 1][2] - blocks[k + 1][1] + 1)
        table = [val[:]]
        j = 1
        while (1 << j) <= m:
            prev = table[-1]
            table.append([max(prev[x], prev[x + (1 << (j - 1))]) for x in range(m - (1 << j) + 1)])
            j += 1
        def rmq(a, b):
            if a > b:
                return 0
            k = (b - a + 1).bit_length() - 1
            return max(table[k][a], table[k][b - (1 << k) + 1])
        pref = [0]
        for c in s:
            pref.append(pref[-1] + (c == '1'))
        res = []
        for l, r in queries:
            ones = pref[r + 1] - pref[l]
            bl = bisect_right(starts, l) - 1
            br = bisect_right(starts, r) - 1
            if br - bl < 2:
                res.append(ones)
                continue
            def length(k):
                return min(blocks[k][2], r) - max(blocks[k][1], l) + 1
            best = 0
            for k in (bl + 1, br - 1):
                if bl < k < br and blocks[k][0] == '1':
                    best = max(best, length(k - 1) + length(k + 1))
            best = max(best, rmq(bl + 2, br - 2))
            res.append(ones + best)
        return res
`)});
lite({id:3514,slug:"number-of-unique-xor-triplets-ii",title:"Number of Unique XOR Triplets II",level:"Medium",topic:MB,name:"Set of pair XORs, then XOR with every number",
w:"[1,3] → XORs of triplets (i ≤ j ≤ k): 1, 3, 1^1^3 = 3, 1^3^3 = 1 ... → 2 distinct values.",k:"A triplet i ≤ j ≤ k can repeat indices, so the set of all XORs of two numbers (including a with itself, which gives 0) combined with any third number covers every triplet. Build the set of pair XORs, then XOR (exclusive OR) each with each number; the answer is the size of the resulting set.",
i:"nums = [1,3]",o:"2",time:"O(n² + n·V)",space:"O(V)",
code:C(`
class Solution:
    def uniqueXorTriplets(self, nums):
        vals = set(nums)
        pairs = {a ^ b for a in vals for b in vals}
        return len({p ^ c for p in pairs for c in vals})
`)});
lite({id:420,slug:"strong-password-checker",title:"Strong Password Checker",level:"Hard",topic:GD,name:"Missing types vs repeats vs length: three cases",
w:"'aA1' → needs 3 more characters → 3.",k:"A password is strong if it has 6–20 characters, a lowercase, an uppercase and a digit, and no three equal characters in a row. Count the missing character types and the runs of ≥ 3 equal characters. If length < 6: max(6 − n, missing). If length ≤ 20: max(missing, sum of run//3). If longer than 20: deleting characters can shorten runs cheaply (runs of length 3k need 1 deletion to save a replacement, 3k+1 need 2, …); the answer is the excess length plus the remaining replacements, at least the missing types.",
i:"password = \"aA1\"",o:"3",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def strongPasswordChecker(self, password):
        n = len(password)
        missing = 3
        if any(c.islower() for c in password):
            missing -= 1
        if any(c.isupper() for c in password):
            missing -= 1
        if any(c.isdigit() for c in password):
            missing -= 1
        runs = [len(list(g)) for _, g in groupby(password)]
        replace = sum(r // 3 for r in runs if r >= 3)
        if n < 6:
            return max(6 - n, missing)
        if n <= 20:
            return max(missing, replace)
        delete = n - 20
        ones = delete
        counts = [r for r in runs if r >= 3]
        for mod in range(3):
            for i, r in enumerate(counts):
                if delete <= 0:
                    break
                if r % 3 == mod:
                    need = mod + 1
                    use = min(delete, need)
                    counts[i] -= use
                    delete -= use
        replace = sum(r // 3 for r in counts if r >= 3)
        return ones + max(missing, replace)
`)});
lite({id:1592,slug:"rearrange-spaces-between-words",title:"Rearrange Spaces Between Words",level:"Easy",topic:ARR,name:"Equal gaps, leftover at the end",
w:"'  this   is  a sentence ' → 'this   is   a   sentence'.",k:"Count the spaces and the words. Put spaces // (words − 1) between words and the remainder at the end (for a single word all spaces go to the end).",
i:"text = \"  this   is  a sentence \"",o:"\"this   is   a   sentence\"",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def reorderSpaces(self, text):
        words = text.split()
        spaces = text.count(' ')
        if len(words) == 1:
            return words[0] + ' ' * spaces
        gap, extra = divmod(spaces, len(words) - 1)
        return (' ' * gap).join(words) + ' ' * extra
`)});
lite({id:629,slug:"k-inverse-pairs-array",title:"K Inverse Pairs Array",level:"Hard",topic:DP,name:"dp[n][k] with a sliding window sum",
w:"n=3, k=1 → 2 permutations of 1,2,3 have exactly one inverse pair.",k:"dp[n][k] = number of permutations of 1…n with k inverse pairs. Placing the largest element n at position i (counting from the right) creates i inverse pairs, i from 0 to n−1, so dp[n][k] = dp[n−1][k] + … + dp[n−1][k−n+1]. Keep that window sum while sweeping k, modulo 1e9+7.",
i:"n = 3, k = 1",o:"2",time:"O(n·k)",space:"O(k)",
code:C(`
class Solution:
    def kInversePairs(self, n, k):
        MOD = 10**9 + 7
        dp = [1] + [0] * k
        for m in range(2, n + 1):
            new = [0] * (k + 1)
            window = 0
            for j in range(k + 1):
                window += dp[j]
                if j >= m:
                    window -= dp[j - m]
                new[j] = window % MOD
            dp = new
        return dp[k]
`)});
lite({id:1406,slug:"stone-game-iii",title:"Stone Game III",level:"Hard",topic:DP,name:"dp[i] = best score difference for the player to move",
w:"[1,2,3,7] → Bob wins.",k:"Let dp[i] be the best (current player − other player) score difference using stones from i onwards. Taking j = 1…3 stones gives the sum of those stones minus dp[i + j]. Alice wins if dp[0] > 0, Bob if < 0, otherwise a tie.",
i:"stoneValue = [1,2,3,7]",o:"\"Bob\"",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def stoneGameIII(self, stoneValue):
        n = len(stoneValue)
        dp = [0] * (n + 3)
        for i in range(n - 1, -1, -1):
            best = float('-inf')
            take = 0
            for j in range(3):
                if i + j < n:
                    take += stoneValue[i + j]
                    best = max(best, take - dp[i + j + 1])
            dp[i] = best
        return "Alice" if dp[0] > 0 else "Bob" if dp[0] < 0 else "Tie"
`)});
lite({id:2528,slug:"maximize-the-minimum-powered-city",title:"Maximize the Minimum Powered City",level:"Hard",topic:BS,name:"Binary search the power, greedy stations with a difference array",
w:"stations [1,2,4,5,0], r=1, k=2 → minimum power can be raised to 5.",k:"The power of a city is the number of stations within distance r. Binary search the target minimum power T. Sweep the cities left to right; if a city is below T, place the missing stations as far right as possible (at city i + r), which helps the most following cities; track their effect with a difference array. T is possible if the stations used are ≤ k.",
i:"stations = [1,2,4,5,0], r = 1, k = 2",o:"5",time:"O(n log(sum + k))",space:"O(n)",
code:C(`
class Solution:
    def maxPower(self, stations, r, k):
        n = len(stations)
        pref = [0]
        for x in stations:
            pref.append(pref[-1] + x)
        base = [pref[min(n, i + r + 1)] - pref[max(0, i - r)] for i in range(n)]
        def ok(target):
            extra = [0] * (n + 1)
            used = 0
            add = 0
            for i in range(n):
                add += extra[i]
                need = target - base[i] - add
                if need > 0:
                    used += need
                    if used > k:
                        return False
                    add += need
                    if i + 2 * r + 1 <= n:
                        extra[i + 2 * r + 1] -= need
            return True
        lo, hi = min(base), min(base) + k
        while lo < hi:
            mid = (lo + hi + 1) // 2
            if ok(mid):
                lo = mid
            else:
                hi = mid - 1
        return lo
`)});
lite({id:1984,slug:"minimum-difference-between-highest-and-lowest-of-k-scores",title:"Minimum Difference Between Highest and Lowest of K Scores",level:"Easy",topic:SW,name:"Sort and slide a window of k",
w:"[9,4,1,7], k=2 → sorted 1,4,7,9 → 4 − 1... best window (7,9)? → 2.",k:"After sorting, the best k scores are consecutive. Slide a window of size k and take the smallest difference between its last and first element.",
i:"nums = [9,4,1,7], k = 2",o:"2",time:"O(n log n)",space:"O(1)",
code:C(`
class Solution:
    def minimumDifference(self, nums, k):
        nums.sort()
        return min(nums[i + k - 1] - nums[i] for i in range(len(nums) - k + 1))
`)});
lite({id:3867,slug:"sum-of-gcd-of-formed-pairs",title:"Sum of GCD of Formed Pairs",level:"Medium",topic:MB,name:"Prefix-max gcds, sort, pair the ends",
w:"[2,6,4] → prefixGcd [2,6,2] → sorted [2,2,6] → gcd(2,6) = 2.",k:"prefixGcd[i] = gcd(nums[i], maximum of nums[0..i]). Sort it, pair the smallest with the largest, the second smallest with the second largest, and so on (the middle element of an odd list is ignored); add up the gcd of every pair.",
i:"nums = [2,6,4]",o:"2",time:"O(n log n)",space:"O(n)",
code:C(`
class Solution:
    def gcdSum(self, nums):
        prefix = []
        best = 0
        for x in nums:
            best = max(best, x)
            prefix.append(gcd(x, best))
        prefix.sort()
        return sum(gcd(prefix[i], prefix[-1 - i]) for i in range(len(prefix) // 2))
`)});
lite({id:2013,slug:"detect-squares",title:"Detect Squares",level:"Medium",topic:DS,name:"Counter of points, scan matching diagonals",
w:"add (3,10), (11,2), (3,2); count (11,10) → 1 square.",k:"Store how many times each point was added. To count squares with the query point (x, y) as one corner, look at every stored point (px, py) that could be the opposite corner: |px − x| == |py − y| > 0. The other two corners are (x, py) and (px, y); multiply the three counts.",
i:"DetectSquares(); add([3,10]); add([11,2]); add([3,2]); count([11,10]); count([14,8]); add([11,2]); count([11,10])",o:"[None, None, None, 1, 0, None, 2]",time:"O(points) per count",space:"O(points)",
code:C(`
class DetectSquares:
    def __init__(self):
        self.cnt = Counter()

    def add(self, point):
        self.cnt[tuple(point)] += 1

    def count(self, point):
        x, y = point
        total = 0
        for (px, py), c in list(self.cnt.items()):
            if abs(px - x) == abs(py - y) and px != x:
                total += c * self.cnt[(x, py)] * self.cnt[(px, y)]
        return total
`)});
lite({id:2410,slug:"maximum-matching-of-players-with-trainers",title:"Maximum Matching of Players With Trainers",level:"Medium",topic:GD,name:"Sort both, match greedily with two pointers",
w:"players [4,7,9], trainers [8,2,5,8] → 4↔5, 7↔8, 9 has none → 2.",k:"A player can use a trainer whose capacity is at least their ability. Sort both lists and go through the trainers: whenever the weakest unmatched player fits the trainer, match them. This keeps the strongest trainers for the hardest players.",
i:"players = [4,7,9], trainers = [8,2,5,8]",o:"2",time:"O(n log n + m log m)",space:"O(1)",
code:C(`
class Solution:
    def matchPlayersAndTrainers(self, players, trainers):
        players.sort()
        trainers.sort()
        i = 0
        for t in trainers:
            if i < len(players) and players[i] <= t:
                i += 1
        return i
`)});
lite({id:2213,slug:"longest-substring-of-one-repeating-character",title:"Longest Substring of One Repeating Character",level:"Hard",topic:UF,name:"Segment tree storing prefix / suffix / best run",
w:"s 'babacc', updates 'b'→1, 'a'→3, 'a'→... after each, the longest run length.",k:"Each segment tree node keeps its left character, right character, the length of the run touching its left end (prefix), touching its right end (suffix), the best run inside, and its size. Merging two children joins the right suffix of the left child with the left prefix of the right child when those characters are equal. A point update recomputes O(log n) nodes; the root's best is the answer.",
i:"s = \"babacc\", queryCharacters = \"bcb\", queryIndices = [1,3,3]",o:"[3, 3, 4]",time:"O((n + q) log n)",space:"O(n)",
code:C(`
class Solution:
    def longestRepeating(self, s, queryCharacters, queryIndices):
        n = len(s)
        size = 1
        while size < n:
            size *= 2
        EMPTY = ("", "", 0, 0, 0, 0)
        tree = [EMPTY] * (2 * size)
        def leaf(c):
            return (c, c, 1, 1, 1, 1)
        def merge(a, b):
            if a[5] == 0:
                return b
            if b[5] == 0:
                return a
            lc, rc = a[0], b[1]
            pre = a[2]
            if a[2] == a[5] and a[1] == b[0]:
                pre = a[5] + b[2]
            suf = b[3]
            if b[3] == b[5] and a[1] == b[0]:
                suf = b[5] + a[3]
            best = max(a[4], b[4])
            if a[1] == b[0]:
                best = max(best, a[3] + b[2])
            return (a[0], b[1], pre, suf, best, a[5] + b[5])
        for i, c in enumerate(s):
            tree[size + i] = leaf(c)
        for i in range(size - 1, 0, -1):
            tree[i] = merge(tree[2 * i], tree[2 * i + 1])
        res = []
        for ch, idx in zip(queryCharacters, queryIndices):
            p = size + idx
            tree[p] = leaf(ch)
            p //= 2
            while p:
                tree[p] = merge(tree[2 * p], tree[2 * p + 1])
                p //= 2
            res.append(tree[1][4])
        return res
`)});
lite({id:3702,slug:"longest-subsequence-with-non-zero-bitwise-xor",title:"Longest Subsequence With Non-Zero Bitwise XOR",level:"Medium",topic:MB,name:"Whole array, or drop one non-zero element",
w:"[1,2,3] → total XOR (exclusive OR) is 0, so drop one element → 2.",k:"If the XOR of the whole array is non-zero, take everything. If it is zero, removing any one non-zero element makes the XOR non-zero (it becomes that element), giving n − 1. If every element is zero no subsequence works: 0.",
i:"nums = [1,2,3]",o:"2",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def longestSubsequence(self, nums):
        total = 0
        for x in nums:
            total ^= x
        if total != 0:
            return len(nums)
        return len(nums) - 1 if any(nums) else 0
`)});
lite({id:1377,slug:"frog-position-after-t-seconds",title:"Frog Position After T Seconds",level:"Hard",topic:GR,name:"DFS with the probability split among unvisited children",
w:"A tree where the frog starts at 1; after t seconds it is at the target with probability 1/3.",k:"The frog starts at node 1 and each second jumps to a random unvisited neighbour; it never goes back. DFS (Depth-First Search) from 1 carrying the probability: at a node, split the probability equally among its unvisited children. At the target the frog must either have exactly t seconds left or have no unvisited children left (it stays there forever); otherwise the probability is 0.",
i:"n = 7, edges = [[1,2],[1,3],[1,7],[2,4],[2,6],[3,5]], t = 2, target = 4",o:"0.16667",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def frogPosition(self, n, edges, t, target):
        adj = defaultdict(list)
        for a, b in edges:
            adj[a].append(b)
            adj[b].append(a)
        def dfs(u, parent, time, prob):
            children = [v for v in adj[u] if v != parent]
            if u == target:
                return prob if time == t or not children else 0
            if time == t or not children:
                return 0
            for v in children:
                r = dfs(v, u, time + 1, prob / len(children))
                if r:
                    return r
            return 0
        return dfs(1, 0, 0, 1.0)
`)});
lite({id:2607,slug:"make-k-subarray-sums-equal",title:"Make K-Subarray Sums Equal",level:"Medium",topic:MB,name:"Elements in the same gcd-cycle must be equal: use the median",
w:"arr [1,4,1,3], k=2 → positions 0,2 must match and 1,3 must match → 1.",k:"In the circular array every window of k elements must have the same sum, which forces arr[i] = arr[i + k] (indices modulo n). Elements split into gcd(n, k) cycles, and each cycle must become constant. The cheapest way to equalise a cycle is to move all its values to their median; add the costs.",
i:"arr = [1,4,1,3], k = 2",o:"1",time:"O(n log n)",space:"O(n)",
code:C(`
class Solution:
    def makeSubKSumEqual(self, arr, k):
        n = len(arr)
        g = gcd(n, k)
        res = 0
        for start in range(g):
            vals = sorted(arr[start::g])
            med = vals[len(vals) // 2]
            res += sum(abs(v - med) for v in vals)
        return res
`)});
lite({id:352,slug:"data-stream-as-disjoint-intervals",title:"Data Stream as Disjoint Intervals",level:"Hard",topic:DS,name:"Sorted list of intervals with merging on insert",
w:"add 1, 3, 7, 2, 6 → intervals [1,3], [6,7].",k:"Keep the disjoint intervals sorted by start. Adding a value: binary search its position, and either it is already inside an interval, extends a neighbour by one, joins two neighbours, or becomes a new single-value interval.",
i:"SummaryRanges(); addNum(1); getIntervals(); addNum(3); getIntervals(); addNum(7); getIntervals(); addNum(2); getIntervals(); addNum(6); getIntervals()",o:"[None, [[1, 1]], None, [[1, 1], [3, 3]], None, [[1, 1], [3, 3], [7, 7]], None, [[1, 3], [7, 7]], None, [[1, 3], [6, 7]]]",time:"O(n) per add",space:"O(n)",
code:C(`
class SummaryRanges:
    def __init__(self):
        self.iv = []

    def addNum(self, value):
        starts = [s for s, _ in self.iv]
        i = bisect_right(starts, value)
        left = self.iv[i - 1] if i > 0 else None
        right = self.iv[i] if i < len(self.iv) else None
        if left and left[1] >= value:
            return
        join_left = left and left[1] + 1 == value
        join_right = right and right[0] - 1 == value
        if join_left and join_right:
            self.iv[i - 1] = [left[0], right[1]]
            self.iv.pop(i)
        elif join_left:
            left[1] = value
        elif join_right:
            right[0] = value
        else:
            self.iv.insert(i, [value, value])

    def getIntervals(self):
        return [list(x) for x in self.iv]
`)});
lite({id:913,slug:"cat-and-mouse",title:"Cat and Mouse",level:"Hard",topic:GR,name:"Retrograde analysis: work backwards from the known results",
w:"A graph game where the mouse wins at the hole 0... the answer is 1 (mouse), 2 (cat) or 0 (draw).",k:"State = (mouse node, cat node, whose turn). Terminal states are known: the mouse at 0 wins, the cat on the mouse's node wins. Run a BFS (Breadth-First Search) backwards from them: a state is a win for the player to move if some move leads to a state they already won; it is a loss if every move leads to a state they lose (tracked by a degree counter). States never decided are draws.",
i:"graph = [[2,5],[3],[0,4,5],[1,4,5],[2,3],[0,2,3]]",o:"0",time:"O(n³)",space:"O(n²)",
code:C(`
class Solution:
    def catMouseGame(self, graph):
        n = len(graph)
        DRAW, MOUSE, CAT = 0, 1, 2
        color = [[[DRAW] * 2 for _ in range(n)] for _ in range(n)]
        degree = [[[0, 0] for _ in range(n)] for _ in range(n)]
        for m in range(n):
            for c in range(n):
                degree[m][c][0] = len(graph[m])
                degree[m][c][1] = len(graph[c]) - (0 in graph[c])
        q = deque()
        for t in range(2):
            for c in range(1, n):
                color[0][c][t] = MOUSE
                q.append((0, c, t, MOUSE))
                color[c][c][t] = CAT
                q.append((c, c, t, CAT))
        def parents(m, c, t):
            if t == 1:
                for pm in graph[m]:
                    yield pm, c, 0
            else:
                for pc in graph[c]:
                    if pc != 0:
                        yield m, pc, 1
        while q:
            m, c, t, col = q.popleft()
            for pm, pc, pt in parents(m, c, t):
                if color[pm][pc][pt] != DRAW:
                    continue
                if (pt == 0 and col == MOUSE) or (pt == 1 and col == CAT):
                    color[pm][pc][pt] = col
                    q.append((pm, pc, pt, col))
                else:
                    degree[pm][pc][pt] -= 1
                    if degree[pm][pc][pt] == 0:
                        color[pm][pc][pt] = col
                        q.append((pm, pc, pt, col))
        return color[1][2][0]
`)});
lite({id:1542,slug:"find-longest-awesome-substring",title:"Find Longest Awesome Substring",level:"Hard",topic:PS,name:"Prefix parity bitmask, allow at most one odd digit",
w:"'3242415' → '24241' can be rearranged into a palindrome → 5.",k:"A substring can be rearranged into a palindrome if at most one digit occurs an odd number of times. Keep the parity mask of the prefix (bit d flips when digit d appears) and the earliest index of each mask. A substring ending here is awesome if an earlier prefix has the same mask or a mask differing in exactly one bit.",
i:"s = \"3242415\"",o:"5",time:"O(10·n)",space:"O(2¹⁰)",
code:C(`
class Solution:
    def longestAwesome(self, s):
        first = {0: -1}
        mask = 0
        best = 0
        for i, c in enumerate(s):
            mask ^= 1 << int(c)
            if mask in first:
                best = max(best, i - first[mask])
            for d in range(10):
                other = mask ^ (1 << d)
                if other in first:
                    best = max(best, i - first[other])
            if mask not in first:
                first[mask] = i
        return best
`)});
lite({id:3558,slug:"number-of-ways-to-assign-edge-weights-i",title:"Number of Ways to Assign Edge Weights I",level:"Medium",topic:BT,name:"Only the depth matters: 2^(depth − 1) ways for an odd total",
w:"edges [[1,2],[1,3],[3,4],[3,5]] → the deepest path has 2 edges → 2 ways.",k:"Take a deepest node; its path from the root has d edges, each weighing 1 or 2. The total is odd exactly when the number of weight-1 edges is odd, which is half of all 2^d assignments: 2^(d−1). Find d with a BFS (Breadth-First Search) from node 1.",
i:"edges = [[1,2],[1,3],[3,4],[3,5]]",o:"2",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def assignEdgeWeights(self, edges):
        MOD = 10**9 + 7
        adj = defaultdict(list)
        for a, b in edges:
            adj[a].append(b)
            adj[b].append(a)
        depth = {1: 0}
        q = deque([1])
        while q:
            u = q.popleft()
            for v in adj[u]:
                if v not in depth:
                    depth[v] = depth[u] + 1
                    q.append(v)
        d = max(depth.values())
        return pow(2, d - 1, MOD)
`)});
lite({id:1927,slug:"sum-game",title:"Sum Game",level:"Medium",topic:GD,name:"Compare the question marks and the sum gap",
w:"'?3295???' → Bob wins... the answer is true or false.",k:"The string has even length; the first half is Alice's side and the second half Bob's. Alice moves first and wants the halves to be unequal. If the total number of '?' is odd Alice wins (she makes the last choice). Otherwise Bob wins exactly when the difference of the known sums equals 9 · (question marks in the right half − in the left half) / 2.",
i:"num = \"5023\"",o:"false",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def sumGame(self, num):
        n = len(num)
        left, right = num[:n // 2], num[n // 2:]
        sum_l = sum(int(c) for c in left if c != '?')
        sum_r = sum(int(c) for c in right if c != '?')
        q_l, q_r = left.count('?'), right.count('?')
        if (q_l + q_r) % 2:
            return True
        return (sum_l - sum_r) * 2 != 9 * (q_r - q_l)
`)});
lite({id:3169,slug:"count-days-without-meetings",title:"Count Days Without Meetings",level:"Medium",topic:IV,name:"Merge the meeting intervals, count the gaps",
w:"days 10, meetings [5,7],[1,3],[9,10] → busy days 1–3, 5–7, 9–10 → 2 free days.",k:"Sort the meetings by start, merge overlapping ones while counting the busy days, and subtract from the total number of days.",
i:"days = 10, meetings = [[5,7],[1,3],[9,10]]",o:"2",time:"O(m log m)",space:"O(1)",
code:C(`
class Solution:
    def countDays(self, days, meetings):
        meetings.sort()
        busy = 0
        end = 0
        for s, e in meetings:
            if s > end:
                busy += e - s + 1
                end = e
            elif e > end:
                busy += e - end
                end = e
        return days - busy
`)});
lite({id:2290,slug:"minimum-obstacle-removal-to-reach-corner",title:"Minimum Obstacle Removal to Reach Corner",level:"Hard",topic:GR,name:"0-1 BFS (Breadth-First Search): obstacles cost 1",
w:"[[0,1,1],[1,1,0],[1,1,0]] → remove 2 obstacles.",k:"Moving into an empty cell costs 0, into an obstacle costs 1. That is a shortest path with 0/1 weights: use a deque, pushing cost-0 moves at the front and cost-1 moves at the back.",
i:"grid = [[0,1,1],[1,1,0],[1,1,0]]",o:"2",time:"O(m·n)",space:"O(m·n)",
code:C(`
class Solution:
    def minimumObstacles(self, grid):
        m, n = len(grid), len(grid[0])
        INF = float('inf')
        dist = [[INF] * n for _ in range(m)]
        dist[0][0] = 0
        dq = deque([(0, 0)])
        while dq:
            i, j = dq.popleft()
            for a, b in ((i + 1, j), (i - 1, j), (i, j + 1), (i, j - 1)):
                if 0 <= a < m and 0 <= b < n:
                    nd = dist[i][j] + grid[a][b]
                    if nd < dist[a][b]:
                        dist[a][b] = nd
                        if grid[a][b]:
                            dq.append((a, b))
                        else:
                            dq.appendleft((a, b))
        return dist[m - 1][n - 1]
`)});
lite({id:3903,slug:"smallest-stable-index-i",title:"Smallest Stable Index I",level:"Easy",topic:PS,name:"Prefix maximum and suffix minimum",
w:"[5,0,1,4], k=3 → index 3: max 5, min 4 → 1 ≤ 3 → 3.",k:"The instability of index i is max(nums[0..i]) − min(nums[i..]). Precompute the suffix minimum, sweep with a running prefix maximum, and return the first index with instability ≤ k.",
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
lite({id:948,slug:"bag-of-tokens",title:"Bag of Tokens",level:"Medium",topic:GD,name:"Spend power on cheap tokens, gain it from expensive ones",
w:"tokens [100,200,300,400], power 200 → play 100 (score 1), then... best score 2.",k:"Face-up a token to gain score for its cost in power; face-down a token to gain power for 1 score. Sort; use two pointers: while you can, buy the cheapest token (score +1); otherwise, if score > 0, sell the most expensive token for power (score −1). Track the best score.",
i:"tokens = [100,200,300,400], power = 200",o:"2",time:"O(n log n)",space:"O(1)",
code:C(`
class Solution:
    def bagOfTokensScore(self, tokens, power):
        tokens.sort()
        lo, hi = 0, len(tokens) - 1
        score = best = 0
        while lo <= hi:
            if power >= tokens[lo]:
                power -= tokens[lo]
                lo += 1
                score += 1
                best = max(best, score)
            elif score > 0:
                power += tokens[hi]
                hi -= 1
                score -= 1
            else:
                break
        return best
`)});
lite({id:3244,slug:"shortest-distance-after-road-addition-queries-ii",title:"Shortest Distance After Road Addition Queries II",level:"Hard",topic:GR,name:"Skip pointers: each new road deletes the cities it jumps over",
w:"n=5, queries [[2,4],[0,2],[0,4]] → [3,2,1].",k:"Roads never cross, so the shortest path is the chain of the 'outermost' roads. Keep next[i] = where city i's best road goes (initially i + 1) and the current path length. For a new road (u, v) with u still on the path and next[u] < v, walk from next[u] to v removing every city jumped over (each removal shortens the path by 1) and set next[u] = v.",
i:"n = 5, queries = [[2,4],[0,2],[0,4]]",o:"[3, 2, 1]",time:"O(n + q)",space:"O(n)",
code:C(`
class Solution:
    def shortestDistanceAfterQueries(self, n, queries):
        nxt = list(range(1, n + 1))
        dist = n - 1
        res = []
        for u, v in queries:
            if nxt[u] != -1 and nxt[u] < v:
                i = nxt[u]
                while i < v:
                    dist -= 1
                    tmp = nxt[i]
                    nxt[i] = -1
                    i = tmp
                nxt[u] = v
            res.append(dist)
        return res
`)});
lite({id:1921,slug:"eliminate-maximum-number-of-monsters",title:"Eliminate Maximum Number of Monsters",level:"Medium",topic:GD,name:"Sort by arrival time, shoot one per minute",
w:"dist [1,3,4], speed [1,1,1] → arrival times 1, 3, 4 → all 3 can be shot.",k:"Monster i reaches the city at time ceil(dist/speed). You shoot once per minute starting at minute 0, so the k-th shot (k = 0, 1, …) must happen before the k-th earliest arrival. Sort arrival times and count how many shots fit.",
i:"dist = [1,3,4], speed = [1,1,1]",o:"3",time:"O(n log n)",space:"O(n)",
code:C(`
class Solution:
    def eliminateMaximum(self, dist, speed):
        arrivals = sorted((d + s - 1) // s for d, s in zip(dist, speed))
        for minute, t in enumerate(arrivals):
            if t <= minute:
                return minute
        return len(dist)
`)});
lite({id:819,slug:"most-common-word",title:"Most Common Word",level:"Easy",topic:HM,name:"Normalise, count, skip the banned words",
w:"'Bob hit a ball, the hit BALL flew far after it was hit.', banned ['hit'] → 'ball'.",k:"Lowercase the paragraph, replace punctuation by spaces, split into words, count those not in the banned set, and return the most frequent.",
i:"paragraph = \"Bob hit a ball, the hit BALL flew far after it was hit.\", banned = [\"hit\"]",o:"\"ball\"",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def mostCommonWord(self, paragraph, banned):
        text = ''.join(c.lower() if c.isalpha() else ' ' for c in paragraph)
        ban = set(banned)
        words = [w for w in text.split() if w not in ban]
        return Counter(words).most_common(1)[0][0]
`)});
lite({id:1886,slug:"determine-whether-matrix-can-be-obtained-by-rotation",title:"Determine Whether Matrix Can Be Obtained By Rotation",level:"Easy",topic:MX,name:"Try all four rotations",
w:"mat [[0,1],[1,0]], target [[1,0],[0,1]] → rotate once → true.",k:"Rotate the matrix by 90° up to four times and compare with the target after each (zip the reversed rows).",
i:"mat = [[0,1],[1,0]], target = [[1,0],[0,1]]",o:"true",time:"O(n²)",space:"O(n²)",
code:C(`
class Solution:
    def findRotation(self, mat, target):
        for _ in range(4):
            if mat == target:
                return True
            mat = [list(row) for row in zip(*mat[::-1])]
        return False
`)});
lite({id:2739,slug:"total-distance-traveled",title:"Total Distance Traveled",level:"Easy",topic:MB,name:"Every 5 litres used pull 1 litre from the additional tank",
w:"main 5, additional 10 → 5 L → 50 km, +1 L → 10 km → 60.",k:"The truck does 10 km per litre. Each time 5 litres are used and the additional tank has fuel, 1 litre moves into the main tank. Simulate in chunks of 5 litres (or with the closed form min((main − 1) // 4, additional)).",
i:"mainTank = 5, additionalTank = 10",o:"60",time:"O(main / 5)",space:"O(1)",
code:C(`
class Solution:
    def distanceTraveled(self, mainTank, additionalTank):
        distance = 0
        while mainTank > 0:
            use = min(5, mainTank)
            mainTank -= use
            distance += use * 10
            if use == 5 and additionalTank > 0:
                additionalTank -= 1
                mainTank += 1
        return distance
`)});
lite({id:2024,slug:"maximize-the-confusion-of-an-exam",title:"Maximize the Confusion of an Exam",level:"Medium",topic:SW,name:"Sliding window with at most k opposite answers",
w:"'TTFF', k=2 → change both F to T → 4.",k:"Make a run of the same answer by flipping at most k others. Slide a window that contains at most k 'T's (to turn into F) and separately at most k 'F's; the longest window over both is the answer.",
i:"answerKey = \"TTFF\", k = 2",o:"4",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def maxConsecutiveAnswers(self, answerKey, k):
        def longest(ch):
            left = bad = best = 0
            for right, c in enumerate(answerKey):
                bad += c != ch
                while bad > k:
                    bad -= answerKey[left] != ch
                    left += 1
                best = max(best, right - left + 1)
            return best
        return max(longest('T'), longest('F'))
`)});
lite({id:1800,slug:"maximum-ascending-subarray-sum",title:"Maximum Ascending Subarray Sum",level:"Easy",topic:ARR,name:"Running sum of the current ascending run",
w:"[10,20,30,5,10,50] → 5+10+50 = 65.",k:"Keep the sum of the current strictly ascending run; reset to the current element when the order breaks. Track the largest sum seen.",
i:"nums = [10,20,30,5,10,50]",o:"65",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def maxAscendingSum(self, nums):
        best = cur = nums[0]
        for i in range(1, len(nums)):
            cur = cur + nums[i] if nums[i] > nums[i - 1] else nums[i]
            best = max(best, cur)
        return best
`)});
lite({id:4052,slug:"cyclically-shift-rows-and-columns",title:"Cyclically Shift Rows and Columns",level:"Easy",topic:MX,name:"Shift the rows left, then the columns up",
w:"[[1,2],[3,4]], rowShift [1,0], colShift [0,1] → [[2,4],[3,1]].",k:"Row i is rotated left by rowShift[i] (element at column j moves to (j − k) mod n). Then column j is rotated up by colShift[j]. Do the two steps in order.",
i:"n = 2, grid = [[1,2],[3,4]], rowShift = [1,0], colShift = [0,1]",o:"[[2, 4], [3, 1]]",time:"O(n²)",space:"O(n²)",
code:C(`
class Solution:
    def cyclicShift(self, n, grid, rowShift, colShift):
        rows = [[grid[i][(j + rowShift[i]) % n] for j in range(n)] for i in range(n)]
        return [[rows[(i + colShift[j]) % n][j] for j in range(n)] for i in range(n)]
`)});
lite({id:3524,slug:"find-x-value-of-array-i",title:"Find X Value of Array I",level:"Medium",topic:DP,name:"Count subarray products by remainder, ending at each index",
w:"[1,2,3,4,5], k=3 → [9, 2, 4].",k:"The operation removes a prefix and a suffix, so what is left is any non-empty subarray. For each end index keep how many subarrays ending there have product ≡ r (mod k): extend every earlier subarray by multiplying its remainder by the new number, and add the new single-element subarray. Add these counts into the result.",
i:"nums = [1,2,3,4,5], k = 3",o:"[9, 2, 4]",time:"O(n·k)",space:"O(k)",
code:C(`
class Solution:
    def resultArray(self, nums, k):
        res = [0] * k
        cur = [0] * k
        for x in nums:
            new = [0] * k
            new[x % k] += 1
            for r in range(k):
                new[r * x % k] += cur[r]
            cur = new
            for r in range(k):
                res[r] += cur[r]
        return res
`)});
lite({id:3550,slug:"smallest-index-with-digit-sum-equal-to-index",title:"Smallest Index With Digit Sum Equal to Index",level:"Easy",topic:ARR,name:"First index whose digit sum equals it",
w:"[1,10,11] → index 1 (digit sum 1) → 1.",k:"Compute the digit sum of each number and return the first index where it equals the index, or −1.",
i:"nums = [1,10,11]",o:"1",time:"O(n log V)",space:"O(1)",
code:C(`
class Solution:
    def smallestIndex(self, nums):
        for i, x in enumerate(nums):
            if sum(int(d) for d in str(x)) == i:
                return i
        return -1
`)});
lite({id:1675,slug:"minimize-deviation-in-array",title:"Minimize Deviation in Array",level:"Hard",topic:HP,name:"Make everything even, then halve the maximum",
w:"[1,2,3,4] → [2,2,3,4]... best deviation 1.",k:"Odd numbers can be doubled and even numbers halved. First double every odd number once (they can then only shrink). Now all numbers are even and can only be halved: repeatedly take the maximum from a max-heap, record the deviation (max − min), and halve it while it is even; stop when the maximum is odd.",
i:"nums = [1,2,3,4]",o:"1",time:"O(n log n log V)",space:"O(n)",
code:C(`
class Solution:
    def minimumDeviation(self, nums):
        heap = [-(x * 2 if x % 2 else x) for x in nums]
        heapify(heap)
        low = -max(heap)
        best = float('inf')
        while True:
            top = -heappop(heap)
            best = min(best, top - low)
            if top % 2:
                break
            top //= 2
            low = min(low, top)
            heappush(heap, -top)
        return best
`)});
lite({id:1523,slug:"count-odd-numbers-in-an-interval-range",title:"Count Odd Numbers in an Interval Range",level:"Easy",topic:MB,name:"Counting formula",
w:"low 3, high 7 → 3, 5, 7 → 3.",k:"The number of odd numbers in [1, x] is (x + 1) // 2, so the count in [low, high] is (high + 1) // 2 − low // 2.",
i:"low = 3, high = 7",o:"3",time:"O(1)",space:"O(1)",
code:C(`
class Solution:
    def countOdds(self, low, high):
        return (high + 1) // 2 - low // 2
`)});
lite({id:1674,slug:"minimum-moves-to-make-array-complementary",title:"Minimum Moves to Make Array Complementary",level:"Medium",topic:PS,name:"Difference array over every target sum",
w:"[1,2,4,3], limit 4 → make every pair sum to 5 → 1 move.",k:"The pairs (a, b) = (nums[i], nums[n−1−i]) must all sum to one target T. For a pair, T = a + b costs 0, T in [min+1, max+limit] costs 1, otherwise 2. Record these ranges for every pair with a difference array over T ∈ [2, 2·limit] and take the minimum total.",
i:"nums = [1,2,4,3], limit = 4",o:"1",time:"O(n + limit)",space:"O(limit)",
code:C(`
class Solution:
    def minMoves(self, nums, limit):
        n = len(nums)
        diff = [0] * (2 * limit + 2)
        for i in range(n // 2):
            a, b = nums[i], nums[n - 1 - i]
            lo, hi = min(a, b) + 1, max(a, b) + limit
            diff[2] += 2
            diff[lo] -= 1
            diff[hi + 1] += 1
            diff[a + b] -= 1
            diff[a + b + 1] += 1
        best = float('inf')
        cur = 0
        for t in range(2, 2 * limit + 1):
            cur += diff[t]
            best = min(best, cur)
        return best
`)});
lite({id:3727,slug:"maximum-alternating-sum-of-squares",title:"Maximum Alternating Sum of Squares",level:"Medium",topic:GD,name:"Largest squares on the plus positions",
w:"[1,2,3] → squares 9, 4, 1: 2 plus slots, 1 minus → 9 + 4 − 1 = 12.",k:"Only the squares matter. In the alternating sum, ceil(n/2) values are added and floor(n/2) subtracted. Put the largest squares on the plus positions: sort the squares in descending order and add the first ceil(n/2), subtract the rest.",
i:"nums = [1,2,3]",o:"12",time:"O(n log n)",space:"O(n)",
code:C(`
class Solution:
    def maxAlternatingSum(self, nums):
        sq = sorted((x * x for x in nums), reverse=True)
        plus = (len(sq) + 1) // 2
        return sum(sq[:plus]) - sum(sq[plus:])
`)});
lite({id:2001,slug:"number-of-pairs-of-interchangeable-rectangles",title:"Number of Pairs of Interchangeable Rectangles",level:"Medium",topic:HM,name:"Group by reduced width / height ratio",
w:"[[4,8],[3,6],[10,20],[15,30]] → all have ratio 1:2 → 6 pairs.",k:"Two rectangles are interchangeable when width/height is the same. Reduce each (w, h) by their gcd to get a canonical ratio and count; a group of c rectangles gives c(c−1)/2 pairs.",
i:"rectangles = [[4,8],[3,6],[10,20],[15,30]]",o:"6",time:"O(n log V)",space:"O(n)",
code:C(`
class Solution:
    def interchangeableRectangles(self, rectangles):
        cnt = Counter((w // gcd(w, h), h // gcd(w, h)) for w, h in rectangles)
        return sum(c * (c - 1) // 2 for c in cnt.values())
`)});
lite({id:2913,slug:"subarrays-distinct-element-sum-of-squares-i",title:"Subarrays Distinct Element Sum of Squares I",level:"Easy",topic:HM,name:"Grow each subarray, track its distinct count",
w:"[1,2,1] → distinct counts 1,1,1,2,2,2 → 1+1+1+4+4+4 = 15.",k:"For every start index extend the end one element at a time while keeping a set of the values; after each extension add (size of the set)² to the total.",
i:"nums = [1,2,1]",o:"15",time:"O(n²)",space:"O(n)",
code:C(`
class Solution:
    def sumCounts(self, nums):
        total = 0
        for i in range(len(nums)):
            seen = set()
            for j in range(i, len(nums)):
                seen.add(nums[j])
                total += len(seen) ** 2
        return total
`)});
lite({id:667,slug:"beautiful-arrangement-ii",title:"Beautiful Arrangement II",level:"Medium",topic:ARR,name:"Zig-zag the first k+1 numbers, then count up",
w:"n=3, k=2 → [1,3,2] (differences 2, 1).",k:"Alternate between the smallest and largest unused values of 1…k+1: 1, k+1, 2, k, … This produces differences k, k−1, …, 1 (k distinct values). Then append k+2, …, n in increasing order, which only adds the difference 1.",
i:"n = 3, k = 2",o:"[1, 3, 2]",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def constructArray(self, n, k):
        res = []
        lo, hi = 1, k + 1
        while lo <= hi:
            res.append(lo)
            lo += 1
            if lo <= hi:
                res.append(hi)
                hi -= 1
        return res + list(range(k + 2, n + 1))
`)});
lite({id:1569,slug:"number-of-ways-to-reorder-array-to-get-same-bst",title:"Number of Ways to Reorder Array to Get Same BST",level:"Hard",topic:BT,name:"Interleave the left and right subtrees' orders",
w:"[2,1,3] → [2,3,1] gives the same BST (Binary Search Tree) → 1.",k:"The first element is the root; elements smaller than it form the left subtree's insertion order, larger ones the right's. Any interleaving of the two orders (keeping each internally ordered) gives the same BST: C(len − 1, len(left)) ways times the ways of each side. Answer = ways − 1 (excluding the original order), modulo 1e9+7.",
i:"nums = [2,1,3]",o:"1",time:"O(n²)",space:"O(n)",
code:C(`
class Solution:
    def numOfWays(self, nums):
        MOD = 10**9 + 7
        def ways(arr):
            if len(arr) <= 2:
                return 1
            left = [x for x in arr if x < arr[0]]
            right = [x for x in arr if x > arr[0]]
            return comb(len(arr) - 1, len(left)) * ways(left) * ways(right) % MOD
        return (ways(nums) - 1) % MOD
`)});
