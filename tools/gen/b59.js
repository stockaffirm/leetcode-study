const {lite}=require("./lib");
const C=s=>s.replace(/^\n/,"").replace(/\n$/,"").split("\n");
const ARR="Array / String",HM="Hash Map / Set",STK="Stack / Monotonic Stack",BT="Binary Tree",GR="Graph",HP="Heap",DP="Dynamic Programming",GD="Greedy",MB="Math / Bit Manipulation",BS="Binary Search",SRT="Sorting",SW="Sliding Window",MX="Matrix",UF="Union Find / Segment Tree",TP="Two Pointers",IV="Intervals",BTK="Backtracking",DS="Design",LL="Linked List",TR="Trie",PS="Prefix Sum";
// ---- Intuit
lite({id:3619,slug:"count-islands-with-total-value-divisible-by-k",title:"Count Islands With Total Value Divisible by K",level:"Medium",topic:GR,name:"Flood-fill each island and add up its cells",
w:"The sample grid has four islands; two have totals divisible by 5 → 2.",k:"Cells with positive values are land; neighbours (4 directions) belong to one island. Flood-fill each unvisited land cell, summing the values, and count the islands whose sum is divisible by k.",
i:"grid = [[0,2,1,0,0],[0,5,0,0,5],[0,0,1,0,0],[0,1,4,7,0],[0,2,0,0,8]], k = 5",o:"2",time:"O(m·n)",space:"O(m·n)",
code:C(`
class Solution:
    def countIslands(self, grid, k):
        m, n = len(grid), len(grid[0])
        seen = [[False] * n for _ in range(m)]
        res = 0
        for i in range(m):
            for j in range(n):
                if grid[i][j] > 0 and not seen[i][j]:
                    total = 0
                    seen[i][j] = True
                    st = [(i, j)]
                    while st:
                        a, b = st.pop()
                        total += grid[a][b]
                        for x, y in ((a + 1, b), (a - 1, b), (a, b + 1), (a, b - 1)):
                            if 0 <= x < m and 0 <= y < n and grid[x][y] > 0 and not seen[x][y]:
                                seen[x][y] = True
                                st.append((x, y))
                    if total % k == 0:
                        res += 1
        return res
`)});
lite({id:3148,slug:"maximum-difference-score-in-a-grid",title:"Maximum Difference Score in a Grid",level:"Medium",topic:DP,name:"Best score = cell − smallest cell above-left",
w:"Grid [[9,5,7,3],[8,9,6,1],[6,7,14,3],[2,5,3,1]]: go from 2 to 14 and on → total score 9.",k:"Moving from a cell to any cell to its right or below scores (destination − source), and a path's total telescopes to (last − first). So for each cell the best path ending there starts at the smallest cell reachable going up/left. Keep the running minimum of each prefix rectangle and take the best of cell − min(top, left).",
i:"grid = [[9,5,7,3],[8,9,6,1],[6,7,14,3],[2,5,3,1]]",o:"9",time:"O(m·n)",space:"O(m·n)",
code:C(`
class Solution:
    def maxScore(self, grid):
        m, n = len(grid), len(grid[0])
        INF = float('inf')
        mn = [[INF] * n for _ in range(m)]
        best = -INF
        for i in range(m):
            for j in range(n):
                prev = min(mn[i - 1][j] if i else INF, mn[i][j - 1] if j else INF)
                best = max(best, grid[i][j] - prev)
                mn[i][j] = min(grid[i][j], prev)
        return best
`)});
lite({id:2915,slug:"length-of-the-longest-subsequence-that-sums-to-target",title:"Length of the Longest Subsequence That Sums to Target",level:"Medium",topic:DP,name:"0/1 knapsack with a length",
w:"[1,2,3,4,5], target 9: {2,3,4} or {1,3,5} or {4,5}… the longest has 3 elements → 3.",k:"dp[s] is the longest subsequence that adds up to exactly s (−∞ if impossible). Process each number once, updating sums from high to low so each number is used at most once: dp[s] = max(dp[s], dp[s − x] + 1).",
i:"nums = [1,2,3,4,5], target = 9",o:"3",time:"O(n·target)",space:"O(target)",
code:C(`
class Solution:
    def lengthOfLongestSubsequence(self, nums, target):
        NEG = float('-inf')
        dp = [NEG] * (target + 1)
        dp[0] = 0
        for x in nums:
            for s in range(target, x - 1, -1):
                if dp[s - x] + 1 > dp[s]:
                    dp[s] = dp[s - x] + 1
        return dp[target] if dp[target] > 0 else -1
`)});
lite({id:2234,slug:"maximum-total-beauty-of-the-gardens",title:"Maximum Total Beauty of the Gardens",level:"Hard",topic:GD,name:"Complete the largest k gardens, level up the rest",
w:"flowers [1,3,1,1], 7 new flowers, target 6, full 12, partial 1: complete one garden (cost 3), raise the rest to 2 → 14.",k:"A garden with at least target flowers is complete (full points each); the rest score min flowers × partial. Cap every garden at target and sort. Try every number k of complete gardens, completing the k largest (cheapest). With the remaining flowers, binary search the highest value v < target that the other gardens can all be raised to, and score k·full + v·partial. Take the best k.",
i:"flowers = [1,3,1,1], newFlowers = 7, target = 6, full = 12, partial = 1",o:"14",time:"O(n log target)",space:"O(n)",
code:C(`
class Solution:
    def maximumBeauty(self, flowers, newFlowers, target, full, partial):
        f = sorted(min(x, target) for x in flowers)
        n = len(f)
        if f[0] == target:
            return n * full
        pre = [0]
        for x in f:
            pre.append(pre[-1] + x)
        best = 0
        for k in range(n + 1):
            cost = k * target - (pre[n] - pre[n - k])
            if cost > newFlowers:
                continue
            rem = newFlowers - cost
            if k == n:
                best = max(best, k * full)
                continue
            m = n - k
            lo, hi = f[0], target - 1
            while lo < hi:
                mid = (lo + hi + 1) // 2
                cnt = bisect_left(f, mid, 0, m)
                if mid * cnt - pre[cnt] <= rem:
                    lo = mid
                else:
                    hi = mid - 1
            best = max(best, k * full + lo * partial)
        return best
`)});
lite({id:3088,slug:"make-string-anti-palindrome",title:"Make String Anti-palindrome",level:"Hard",topic:GD,name:"Sort, then fix clashes in the second half",
w:"'abca' → sorted 'aabc' already has s[0]≠s[3] and s[1]≠s[2] → 'aabc'; 'cccd' can't be fixed → '-1'.",k:"An anti-palindrome has s[i] ≠ s[n−1−i] for every i. Start from the sorted string (smallest). Walk the second half: if s[i] equals its mirror, swap it with the first later character that differs (the smallest bigger letter); if there is none the answer is '-1'.",
i:"s = \"abca\"",o:"\"aabc\"",time:"O(n log n)",space:"O(n)",
code:C(`
class Solution:
    def makeAntiPalindrome(self, s):
        a = sorted(s)
        n = len(a)
        for i in range(n // 2, n):
            if a[i] == a[n - 1 - i]:
                j = i + 1
                while j < n and a[j] == a[i]:
                    j += 1
                if j == n:
                    return "-1"
                a[i], a[j] = a[j], a[i]
        return ''.join(a)
`)});
lite({id:2453,slug:"destroy-sequential-targets",title:"Destroy Sequential Targets",level:"Medium",topic:HM,name:"Group by remainder mod space",
w:"[3,7,8,1,1,5], space=2: seed 1 destroys every odd value (3,7,1,1,5) → seed 1.",k:"A seed destroys all targets equal to seed + c·space, i.e. with the same remainder mod space. Count targets per remainder, pick the remainder with the most targets, and return the smallest number having that remainder.",
i:"nums = [3,7,8,1,1,5], space = 2",o:"1",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def destroyTargets(self, nums, space):
        cnt = Counter(x % space for x in nums)
        top = max(cnt.values())
        return min(x for x in nums if cnt[x % space] == top)
`)});
lite({id:2489,slug:"number-of-substrings-with-fixed-ratio",title:"Number of Substrings With Fixed Ratio",level:"Medium",topic:PS,name:"Equal prefix keys z·num2 − o·num1",
w:"'0110011', ratio 1:2: four substrings have exactly one 0 per two 1s → 4.",k:"A substring has zeros:ones = num1:num2 exactly when zeros·num2 = ones·num1. Let key(i) = zeros·num2 − ones·num1 over the prefix of length i. A substring qualifies when the keys at its ends are equal. Count equal key pairs with a hash map (substrings with only zeros or only ones never match because num1, num2 > 0).",
i:"s = \"0110011\", num1 = 1, num2 = 2",o:"4",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def fixedRatio(self, s, num1, num2):
        seen = Counter({0: 1})
        z = o = 0
        res = 0
        for c in s:
            if c == '0':
                z += 1
            else:
                o += 1
            key = z * num2 - o * num1
            res += seen[key]
            seen[key] += 1
        return res
`)});
lite({id:770,slug:"basic-calculator-iv",title:"Basic Calculator IV",level:"Hard",topic:STK,name:"Parse into polynomials (dict of monomials)",
w:"'e + 8 - a + 5' with e = 1 simplifies to '-1*a' and '14'.",k:"Treat every expression as a polynomial: a dictionary from a sorted tuple of variable names (a monomial) to its integer coefficient. Parse with recursive descent (expression → term → factor), substituting the known variables. Addition and subtraction merge dictionaries; multiplication multiplies every pair of monomials. Finally output the terms ordered by degree (high first) then alphabetically.",
i:"expression = \"e + 8 - a + 5\", evalvars = [\"e\"], evalints = [1]",o:"['-1*a', '14']",time:"O(size of polynomials)",space:"O(size of polynomials)",
code:C(`
class Solution:
    def basicCalculatorIV(self, expression, evalvars, evalints):
        env = dict(zip(evalvars, evalints))
        tokens = []
        i = 0
        s = expression
        while i < len(s):
            c = s[i]
            if c == ' ':
                i += 1
            elif c in '()+-*':
                tokens.append(c)
                i += 1
            else:
                j = i
                while j < len(s) and s[j] not in ' ()+-*':
                    j += 1
                tokens.append(s[i:j])
                i = j
        pos = 0
        def clean(p):
            return Counter({k: v for k, v in p.items() if v})
        def add(a, b, sign):
            r = Counter(a)
            for k, v in b.items():
                r[k] += sign * v
            return clean(r)
        def mul(a, b):
            r = Counter()
            for k1, v1 in a.items():
                for k2, v2 in b.items():
                    r[tuple(sorted(k1 + k2))] += v1 * v2
            return clean(r)
        def factor():
            nonlocal pos
            t = tokens[pos]
            pos += 1
            if t == '(':
                p = expr()
                pos += 1
                return p
            if t.lstrip('-').isdigit():
                return clean(Counter({(): int(t)}))
            if t in env:
                return clean(Counter({(): env[t]}))
            return Counter({(t,): 1})
        def term():
            nonlocal pos
            p = factor()
            while pos < len(tokens) and tokens[pos] == '*':
                pos += 1
                p = mul(p, factor())
            return p
        def expr():
            nonlocal pos
            p = term()
            while pos < len(tokens) and tokens[pos] in '+-':
                op = tokens[pos]
                pos += 1
                p = add(p, term(), 1 if op == '+' else -1)
            return p
        poly = expr()
        out = []
        for mono in sorted(poly, key=lambda m: (-len(m), m)):
            out.append('*'.join([str(poly[mono])] + list(mono)))
        return out
`)});
lite({id:1411,slug:"number-of-ways-to-paint-n-3-grid",title:"Number of Ways to Paint N × 3 Grid",level:"Hard",topic:DP,name:"Two row patterns: ABC and ABA",
w:"n=1 has 12 colourings (6 of type ABC, 6 of type ABA); n=2 has 54.",k:"A row with 3 cells and 3 colours is either three different colours (ABC type, 6 ways) or the outer two equal (ABA type, 6 ways). From an ABC row the next row can be 2 ABC and 2 ABA patterns; from an ABA row it can be 2 ABC and 3 ABA. Iterate: abc' = 2·abc + 2·aba, aba' = 2·abc + 3·aba.",
i:"n = 2",o:"54",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def numOfWays(self, n):
        MOD = 10**9 + 7
        abc, aba = 6, 6
        for _ in range(n - 1):
            abc, aba = (2 * abc + 2 * aba) % MOD, (2 * abc + 3 * aba) % MOD
        return (abc + aba) % MOD
`)});
lite({id:3719,slug:"longest-balanced-subarray-i",title:"Longest Balanced Subarray I",level:"Medium",topic:HM,name:"Extend each start and compare distinct evens/odds",
w:"[2,5,4,3]: distinct evens {2,4} and distinct odds {5,3} are equal in number → length 4.",k:"A subarray is balanced when the number of distinct even values equals the number of distinct odd values. For each start index extend to the right, keeping two sets (distinct evens and distinct odds); whenever the sizes match, update the best length.",
i:"nums = [2,5,4,3]",o:"4",time:"O(n²)",space:"O(n)",
code:C(`
class Solution:
    def longestBalanced(self, nums):
        best = 0
        for i in range(len(nums)):
            even, odd = set(), set()
            for j in range(i, len(nums)):
                (even if nums[j] % 2 == 0 else odd).add(nums[j])
                if len(even) == len(odd):
                    best = max(best, j - i + 1)
        return best
`)});
lite({id:1760,slug:"minimum-limit-of-balls-in-a-bag",title:"Minimum Limit of Balls in a Bag",level:"Medium",topic:BS,name:"Binary search the penalty",
w:"[9] with 2 splits: 9 → 3+3+3 → penalty 3.",k:"Guess the maximum bag size p. A bag of x balls needs ceil(x / p) − 1 splits. If the total splits needed is ≤ maxOperations, p works. Binary search the smallest p.",
i:"nums = [9], maxOperations = 2",o:"3",time:"O(n log max)",space:"O(1)",
code:C(`
class Solution:
    def minimumSize(self, nums, maxOperations):
        lo, hi = 1, max(nums)
        while lo < hi:
            mid = (lo + hi) // 2
            if sum((x - 1) // mid for x in nums) <= maxOperations:
                hi = mid
            else:
                lo = mid + 1
        return lo
`)});
lite({id:1647,slug:"minimum-deletions-to-make-character-frequencies-unique",title:"Minimum Deletions to Make Character Frequencies Unique",level:"Medium",topic:GD,name:"Lower each duplicate frequency until free",
w:"'aaabbbcc' has frequencies 3, 3, 2: lower the second 3 to 2, then the clashing 2 to 1 → 2 deletions.",k:"Count each letter's frequency. Process frequencies from largest to smallest, remembering the highest frequency still allowed: if a frequency is not below that cap, delete characters until it is (or until 0), counting the deletions.",
i:"s = \"aaabbbcc\"",o:"2",time:"O(n + 26 log 26)",space:"O(1)",
code:C(`
class Solution:
    def minDeletions(self, s):
        used = set()
        deletions = 0
        for f in sorted(Counter(s).values(), reverse=True):
            while f > 0 and f in used:
                f -= 1
                deletions += 1
            used.add(f)
        return deletions
`)});
lite({id:546,slug:"remove-boxes",title:"Remove Boxes",level:"Hard",topic:DP,name:"Interval DP with extra equal boxes attached",
w:"[1,3,2,2,2,3,4,3,1] → clear 2,2,2 (9 points), then 4, then merge the 3s... best score 23.",k:"Removing k same-coloured contiguous boxes scores k². dp(l, r, k) = best score for boxes[l..r] when k extra boxes equal to boxes[r] are stuck to its right. Either remove boxes[r] with its k attachments now ((k+1)² + dp(l, r−1, 0)), or find an earlier box i of the same colour and first clear the stuff between them so they join: dp(l, i, k+1) + dp(i+1, r−1, 0).",
i:"boxes = [1,3,2,2,2,3,4,3,1]",o:"23",time:"O(n⁴)",space:"O(n³)",
code:C(`
class Solution:
    def removeBoxes(self, boxes):
        @lru_cache(None)
        def dp(l, r, k):
            if l > r:
                return 0
            while r > l and boxes[r] == boxes[r - 1]:
                r -= 1
                k += 1
            res = dp(l, r - 1, 0) + (k + 1) ** 2
            for i in range(l, r):
                if boxes[i] == boxes[r]:
                    res = max(res, dp(l, i, k + 1) + dp(i + 1, r - 1, 0))
            return res
        return dp(0, len(boxes) - 1, 0)
`)});
