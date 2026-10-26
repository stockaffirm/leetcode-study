const {lite}=require("./lib");
const C=s=>s.replace(/^\n/,"").replace(/\n$/,"").split("\n");
const ARR="Array / String",HM="Hash Map / Set",STK="Stack / Monotonic Stack",BT="Binary Tree",GR="Graph",HP="Heap",DP="Dynamic Programming",GD="Greedy",MB="Math / Bit Manipulation",BS="Binary Search",SRT="Sorting",SW="Sliding Window",MX="Matrix",UF="Union Find / Segment Tree",TP="Two Pointers",IV="Intervals",BTK="Backtracking",DS="Design",LL="Linked List",TR="Trie",PS="Prefix Sum";
// ---- Bloomberg (3)
lite({id:2749,slug:"minimum-operations-to-make-the-integer-zero",title:"Minimum Operations to Make the Integer Zero",level:"Medium",topic:MB,name:"Try k operations: the remainder must be a sum of k powers of two",
w:"num1=3, num2=−2: three operations (each subtracts 2^i − 2) reach 0.",k:"After k operations num1 − k·num2 must be written as a sum of exactly k powers of two. That is possible iff x = num1 − k·num2 ≥ k and the number of set bits of x is ≤ k. Try k = 1 … 60.",
i:"num1 = 3, num2 = -2",o:"3",time:"O(60)",space:"O(1)",
code:C(`
class Solution:
    def makeTheIntegerZero(self, num1, num2):
        for k in range(1, 61):
            x = num1 - k * num2
            if x >= k and bin(x).count('1') <= k:
                return k
        return -1
`)});
lite({id:966,slug:"vowel-spellchecker",title:"Vowel Spellchecker",level:"Medium",topic:HM,name:"Three lookup tables: exact, case-insensitive, vowel-masked",
w:"'KiTe' matches 'kite' case-insensitively and 'keti' matches 'KiTe' when vowels are ignored.",k:"Answer each query by priority: exact match; else the first word equal ignoring case; else the first word equal after lowercasing and replacing every vowel by '*'. Build the three tables once, keeping the first word for each key.",
i:"wordlist = [\"KiTe\",\"kite\",\"hare\",\"Hare\"], queries = [\"kite\",\"Kite\",\"KiTe\",\"Hare\",\"HARE\",\"Hear\",\"hear\",\"keti\",\"keet\",\"keto\"]",o:"['kite', 'KiTe', 'KiTe', 'Hare', 'hare', '', '', 'KiTe', '', 'KiTe']",time:"O(total length)",space:"O(total length)",
code:C(`
class Solution:
    def spellchecker(self, wordlist, queries):
        def mask(w):
            return ''.join('*' if c in 'aeiou' else c for c in w.lower())
        exact = set(wordlist)
        case, vowel = {}, {}
        for w in wordlist:
            case.setdefault(w.lower(), w)
            vowel.setdefault(mask(w), w)
        res = []
        for q in queries:
            if q in exact:
                res.append(q)
            elif q.lower() in case:
                res.append(case[q.lower()])
            else:
                res.append(vowel.get(mask(q), ""))
        return res
`)});
lite({id:401,slug:"binary-watch",title:"Binary Watch",level:"Easy",topic:MB,name:"Try every time and count lit LEDs",
w:"turnedOn=1: 0:01, 0:02, 0:04, 0:08, 0:16, 0:32, 1:00, 2:00, 4:00, 8:00.",k:"The watch has 4 hour LEDs and 6 minute LEDs. Loop over all hours 0–11 and minutes 0–59 and keep the times where the number of set bits in the hour plus in the minute equals turnedOn.",
i:"turnedOn = 1",o:"['0:01', '0:02', '0:04', '0:08', '0:16', '0:32', '1:00', '2:00', '4:00', '8:00']",time:"O(720)",space:"O(1)",
code:C(`
class Solution:
    def readBinaryWatch(self, turnedOn):
        return ["%d:%02d" % (h, m) for h in range(12) for m in range(60)
                if bin(h).count('1') + bin(m).count('1') == turnedOn]
`)});
lite({id:3542,slug:"minimum-operations-to-convert-all-elements-to-zero",title:"Minimum Operations to Convert All Elements to Zero",level:"Medium",topic:STK,name:"Monotonic stack: each new smaller level costs one",
w:"[3,1,2,1]: clear 1s across (1 op), then 2 (1 op), then 3 (1 op) → 3.",k:"An operation picks a subarray and zeroes all its minimum non-zero values. Scan with a stack that keeps increasing values: pop larger values when a smaller one arrives (those levels are finished); a zero clears the stack; push a value and count one operation whenever it is not already on top of the stack.",
i:"nums = [3,1,2,1]",o:"3",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def minOperations(self, nums):
        st = []
        ops = 0
        for x in nums:
            while st and st[-1] > x:
                st.pop()
            if x == 0:
                continue
            if not st or st[-1] < x:
                st.append(x)
                ops += 1
        return ops
`)});
lite({id:3583,slug:"count-special-triplets",title:"Count Special Triplets",level:"Medium",topic:HM,name:"For each middle j, count 2·nums[j] on both sides",
w:"[6,3,6]: i=0, j=1, k=2 with 6 = 2·3 on both sides → 1 triplet.",k:"A special triplet has i<j<k with nums[i] = nums[k] = 2·nums[j]. For every middle j multiply the number of earlier elements equal to 2·nums[j] by the number of later ones. Keep a counter of the left part and a counter of the right part while sweeping. Modulo 1e9+7.",
i:"nums = [6,3,6]",o:"1",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def specialTriplets(self, nums):
        MOD = 10**9 + 7
        left, right = Counter(), Counter(nums)
        res = 0
        for x in nums:
            right[x] -= 1
            res += left[2 * x] * right[2 * x]
            left[x] += 1
        return res % MOD
`)});
lite({id:2492,slug:"minimum-score-of-a-path-between-two-cities",title:"Minimum Score of a Path Between Two Cities",level:"Medium",topic:UF,name:"Smallest edge in the component of city 1",
w:"Roads (1-2:9, 2-3:6, 2-4:5, 1-4:7): the cheapest road reachable from city 1 weighs 5.",k:"A path may revisit cities and edges, so the best score is the smallest road weight in the connected component that contains both city 1 and city n (they are guaranteed connected). Union the endpoints and take the minimum weight among roads in city 1's component.",
i:"n = 4, roads = [[1,2,9],[2,3,6],[2,4,5],[1,4,7]]",o:"5",time:"O(E α)",space:"O(n)",
code:C(`
class Solution:
    def minScore(self, n, roads):
        p = list(range(n + 1))
        def find(x):
            while p[x] != x:
                p[x] = p[p[x]]
                x = p[x]
            return x
        for a, b, _ in roads:
            p[find(a)] = find(b)
        return min(w for a, b, w in roads if find(a) == find(1))
`)});
lite({id:840,slug:"magic-squares-in-grid",title:"Magic Squares In Grid",level:"Medium",topic:MX,name:"Test every 3×3 window",
w:"The sample 3×4 grid contains one 3×3 magic square (1–9 each once, all lines sum to 15).",k:"A 3×3 magic square of the numbers 1–9 must have 5 in the centre, hold each of 1–9 exactly once, and all rows, columns and both diagonals sum to 15. Test each window.",
i:"grid = [[4,3,8,4],[9,5,1,9],[2,7,6,2]]",o:"1",time:"O(m·n)",space:"O(1)",
code:C(`
class Solution:
    def numMagicSquaresInside(self, grid):
        def magic(r, c):
            cells = [grid[r + i][c + j] for i in range(3) for j in range(3)]
            if sorted(cells) != list(range(1, 10)):
                return False
            g = [cells[0:3], cells[3:6], cells[6:9]]
            lines = [sum(row) for row in g] + [sum(col) for col in zip(*g)]
            lines += [g[0][0] + g[1][1] + g[2][2], g[0][2] + g[1][1] + g[2][0]]
            return all(x == 15 for x in lines)
        m, n = len(grid), len(grid[0])
        return sum(magic(r, c) for r in range(m - 2) for c in range(n - 2))
`)});
lite({id:1536,slug:"minimum-swaps-to-arrange-a-binary-grid",title:"Minimum Swaps to Arrange a Binary Grid",level:"Medium",topic:GD,name:"Row i needs n−1−i trailing zeros; bubble the nearest one up",
w:"[[0,0,1],[1,1,0],[1,0,0]] → 3 adjacent row swaps make all cells above the diagonal zero.",k:"The grid is valid when all cells above the main diagonal are 0, i.e. row i ends with at least n−1−i zeros. Compute trailing zeros per row. For i = 0, 1, … find the first row at or below i with enough trailing zeros and bubble it up with adjacent swaps (count the distance). If none exists the answer is −1.",
i:"grid = [[0,0,1],[1,1,0],[1,0,0]]",o:"3",time:"O(n²)",space:"O(n)",
code:C(`
class Solution:
    def minSwaps(self, grid):
        n = len(grid)
        tz = []
        for row in grid:
            c = 0
            for v in reversed(row):
                if v:
                    break
                c += 1
            tz.append(c)
        res = 0
        for i in range(n):
            need = n - 1 - i
            j = i
            while j < n and tz[j] < need:
                j += 1
            if j == n:
                return -1
            res += j - i
            tz.insert(i, tz.pop(j))
        return res
`)});
lite({id:3471,slug:"find-the-largest-almost-missing-integer",title:"Find the Largest Almost Missing Integer",level:"Easy",topic:HM,name:"Count in how many windows each value appears",
w:"[3,9,2,1,7], k=3: 7 appears in exactly one window of size 3 and is the largest such value → 7.",k:"For each window of size k add 1 to the counter of every distinct value in it. Values whose counter is exactly 1 are almost missing; return the largest or −1.",
i:"nums = [3,9,2,1,7], k = 3",o:"7",time:"O(n·k)",space:"O(n)",
code:C(`
class Solution:
    def largestInteger(self, nums, k):
        cnt = Counter()
        for i in range(len(nums) - k + 1):
            for v in set(nums[i:i + k]):
                cnt[v] += 1
        return max((v for v, c in cnt.items() if c == 1), default=-1)
`)});
lite({id:3783,slug:"mirror-distance-of-an-integer",title:"Mirror Distance of an Integer",level:"Easy",topic:MB,name:"|n − reverse(n)|",
w:"n=25 → reverse 52 → distance 27.",k:"Reverse the digits of n and return the absolute difference with n.",
i:"n = 25",o:"27",time:"O(d)",space:"O(d)",
code:C(`
class Solution:
    def mirrorDistance(self, n):
        return abs(n - int(str(n)[::-1]))
`)});
lite({id:1871,slug:"jump-game-vii",title:"Jump Game VII",level:"Medium",topic:SW,name:"Reachable positions with a sliding window count",
w:"s='011010', jumps of 2–3: 0 → 2 → 5 → reaches the end → true.",k:"Index j is reachable if s[j] == '0' and some reachable i has j − maxJump ≤ i ≤ j − minJump. Keep a running count of reachable indices inside that window (add the new left edge, remove the one that left).",
i:"s = \"011010\", minJump = 2, maxJump = 3",o:"true",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def canReach(self, s, minJump, maxJump):
        n = len(s)
        reach = [False] * n
        reach[0] = True
        window = 0
        for j in range(1, n):
            if j - minJump >= 0 and reach[j - minJump]:
                window += 1
            if j - maxJump - 1 >= 0 and reach[j - maxJump - 1]:
                window -= 1
            reach[j] = window > 0 and s[j] == '0'
        return reach[-1]
`)});
lite({id:3753,slug:"total-waviness-of-numbers-in-range-ii",title:"Total Waviness of Numbers in Range II",level:"Hard",topic:DP,name:"Digit DP carrying (count, total waviness)",
w:"Range 120–130: 120, 121 and 130 each have one peak (the middle digit) → 3.",k:"Let F(N) = total waviness of all numbers 0…N; the answer is F(num2) − F(num1−1). Build F with a digit DP (Dynamic Programming) over the digits of N with state (position, previous two digits, still tight to N, number started). Each state returns (how many completions, sum of waviness of those completions); when adding a digit d, the previous digit becomes a peak/valley if it is strictly above/below both neighbours, which contributes 1 to every completion.",
i:"num1 = 120, num2 = 130",o:"3",time:"O(len · 100 · 10)",space:"O(len · 100)",
code:C(`
class Solution:
    def totalWaviness(self, num1, num2):
        def F(N):
            if N < 0:
                return 0
            digs = list(map(int, str(N)))
            L = len(digs)
            @lru_cache(None)
            def go(pos, a, b, tight, started):
                if pos == L:
                    return (1, 0)
                lim = digs[pos] if tight else 9
                cnt = tot = 0
                for d in range(lim + 1):
                    nt = tight and d == lim
                    if not started and d == 0:
                        c, t = go(pos + 1, -1, -1, nt, False)
                        inc = 0
                    else:
                        c, t = go(pos + 1, b, d, nt, True)
                        inc = 0
                        if a != -1 and b != -1 and ((b > a and b > d) or (b < a and b < d)):
                            inc = 1
                    cnt += c
                    tot += t + inc * c
                return (cnt, tot)
            return go(0, -1, -1, True, False)[1]
        return F(num2) - F(num1 - 1)
`)});
lite({id:1840,slug:"maximum-building-height",title:"Maximum Building Height",level:"Hard",topic:GD,name:"Tighten the limits both ways, then find the peak between limits",
w:"n=5, restrictions [[2,1],[4,1]]: heights 0,1,2,1,2 → the maximum is 2.",k:"Building 1 has height 0 and neighbours differ by at most 1. Sort the restrictions, add (1, 0) and (n, ∞). Sweep left to right then right to left so every limit is consistent with its neighbours (limit ≤ neighbour's limit + distance). Between two consecutive limited buildings at distance d with limits a and b the highest possible peak is (a + b + d) // 2.",
i:"n = 5, restrictions = [[2,1],[4,1]]",o:"2",time:"O(r log r)",space:"O(r)",
code:C(`
class Solution:
    def maxBuilding(self, n, restrictions):
        r = sorted([list(x) for x in restrictions] + [[1, 0]])
        if r[-1][0] != n:
            r.append([n, n - 1])
        for i in range(1, len(r)):
            r[i][1] = min(r[i][1], r[i - 1][1] + r[i][0] - r[i - 1][0])
        for i in range(len(r) - 2, -1, -1):
            r[i][1] = min(r[i][1], r[i + 1][1] + r[i + 1][0] - r[i][0])
        best = 0
        for (p, hp), (q, hq) in zip(r, r[1:]):
            best = max(best, (hp + hq + q - p) // 2)
        return best
`)});
lite({id:3700,slug:"number-of-zigzag-arrays-ii",title:"Number of ZigZag Arrays II",level:"Hard",topic:DP,name:"Transition matrix raised to the power n − 2",
w:"n=3, values 4…5: [4,5,4] and [5,4,5] → 2.",k:"State = (last value, did the last step go up or down). From an 'up' ending the next step must go down to a smaller value and vice versa, so the counts for length t+1 are linear in those for length t. The values range over at most 75 numbers, so build the 2m×2m transition matrix and raise it to the power n − 2 by repeated squaring, starting from the counts for length 2. Modulo 1e9+7.",
i:"n = 3, l = 4, r = 5",o:"2",time:"O((2m)³ log n)",space:"O((2m)²)",
code:C(`
class Solution:
    def zigZagArrays(self, n, l, r):
        MOD = 10**9 + 7
        m = r - l + 1
        size = 2 * m
        vec = [v for v in range(m)] + [m - 1 - v for v in range(m)]
        T = [[0] * size for _ in range(size)]
        for v in range(m):
            for u in range(v):
                T[v][m + u] = 1
            for u in range(v + 1, m):
                T[m + v][u] = 1
        def mul(A, B):
            return [[sum(A[i][k] * B[k][j] for k in range(size)) % MOD for j in range(size)] for i in range(size)]
        R = [[int(i == j) for j in range(size)] for i in range(size)]
        e = n - 2
        while e:
            if e & 1:
                R = mul(R, T)
            T = mul(T, T)
            e >>= 1
        return sum(sum(R[i][k] * vec[k] for k in range(size)) for i in range(size)) % MOD
`)});
lite({id:3483,slug:"unique-3-digit-even-numbers",title:"Unique 3-Digit Even Numbers",level:"Easy",topic:BTK,name:"Distinct permutations without leading zero",
w:"digits [1,2,3,4]: all 3-digit numbers from distinct positions that end in 2 or 4 → 12.",k:"Take every ordered choice of three positions (so each digit card is used at most once), form the number, keep it if the first digit is not 0 and the last digit is even, and count distinct values.",
i:"digits = [1,2,3,4]",o:"12",time:"O(n³)",space:"O(n³)",
code:C(`
class Solution:
    def totalNumbers(self, digits):
        seen = set()
        for a, b, c in permutations(digits, 3):
            if a != 0 and c % 2 == 0:
                seen.add(a * 100 + b * 10 + c)
        return len(seen)
`)});
lite({id:3517,slug:"smallest-palindromic-rearrangement-i",title:"Smallest Palindromic Rearrangement I",level:"Medium",topic:GD,name:"Sorted left half, mirrored",
w:"'babab' → counts a:2, b:3 → left half 'ab', middle 'b' → 'abbba'.",k:"The input is a palindrome, so every letter appears an even number of times except possibly one. Put half of each letter in sorted order on the left, the odd letter in the middle, and mirror the left half on the right.",
i:"s = \"babab\"",o:"\"abbba\"",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def smallestPalindrome(self, s):
        cnt = Counter(s)
        half = ''.join(c * (cnt[c] // 2) for c in sorted(cnt))
        mid = ''.join(c for c in cnt if cnt[c] % 2)
        return half + mid + half[::-1]
`)});
lite({id:3345,slug:"smallest-divisible-digit-product-i",title:"Smallest Divisible Digit Product I",level:"Easy",topic:MB,name:"Walk up from n until the digit product works",
w:"n=15, t=3: 15 → product 5 no; 16 → 6 divisible by 3 → 16.",k:"Test n, n+1, … until the product of the digits is divisible by t. A zero digit makes the product 0 (divisible by everything), so the loop ends within a few steps.",
i:"n = 15, t = 3",o:"16",time:"O(small)",space:"O(1)",
code:C(`
class Solution:
    def smallestNumber(self, n, t):
        x = n
        while True:
            p = 1
            for d in str(x):
                p *= int(d)
            if p % t == 0:
                return x
            x += 1
`)});
lite({id:1510,slug:"stone-game-iv",title:"Stone Game IV",level:"Hard",topic:DP,name:"win[i] if some square move leaves a losing position",
w:"n=4: Alice removes 4 stones and wins → true; n=2: only 1 can be removed, Bob then wins → false.",k:"win[i] is true if the player to move with i stones can remove a square number s ≤ i leaving i − s stones where the opponent loses. win[0] = false.",
i:"n = 4",o:"true",time:"O(n√n)",space:"O(n)",
code:C(`
class Solution:
    def winnerSquareGame(self, n):
        win = [False] * (n + 1)
        for i in range(1, n + 1):
            j = 1
            while j * j <= i:
                if not win[i - j * j]:
                    win[i] = True
                    break
                j += 1
        return win[n]
`)});
lite({id:583,slug:"delete-operation-for-two-strings",title:"Delete Operation for Two Strings",level:"Medium",topic:DP,name:"Total length minus twice the LCS",
w:"'sea' and 'eat' share 'ea' → 3 + 3 − 2·2 = 2 deletions.",k:"The characters that remain must form a common subsequence. Keeping the longest one (LCS (Longest Common Subsequence)) minimises deletions: len1 + len2 − 2·LCS (Longest Common Subsequence).",
i:"word1 = \"sea\", word2 = \"eat\"",o:"2",time:"O(n·m)",space:"O(m)",
code:C(`
class Solution:
    def minDistance(self, word1, word2):
        prev = [0] * (len(word2) + 1)
        for a in word1:
            cur = [0]
            for j, b in enumerate(word2):
                cur.append(prev[j] + 1 if a == b else max(prev[j + 1], cur[-1]))
            prev = cur
        return len(word1) + len(word2) - 2 * prev[-1]
`)});
lite({id:940,slug:"distinct-subsequences-ii",title:"Distinct Subsequences II",level:"Hard",topic:DP,name:"Count by last character",
w:"'abc' has 7 distinct non-empty subsequences; 'aaa' has 3.",k:"Let end[c] be the number of distinct subsequences ending with letter c. When a letter c arrives, every existing subsequence (and the empty one) can be extended by c, so end[c] = 1 + sum of all end[·] — this replaces the old count for c instead of adding to it, which removes duplicates. Answer = sum of end, modulo 1e9+7.",
i:"s = \"abc\"",o:"7",time:"O(26·n)",space:"O(26)",
code:C(`
class Solution:
    def distinctSubseqII(self, s):
        MOD = 10**9 + 7
        end = defaultdict(int)
        for c in s:
            end[c] = (1 + sum(end.values())) % MOD
        return sum(end.values()) % MOD
`)});
lite({id:2409,slug:"count-days-spent-together",title:"Count Days Spent Together",level:"Easy",topic:IV,name:"Intersect the two date ranges as day-of-year numbers",
w:"Alice 08-15…08-18, Bob 08-16…08-19: they overlap on 16, 17, 18 → 3.",k:"Convert each 'MM-DD' to a day number in the year (non-leap). The shared days are between max of the arrivals and min of the departures; if that interval is empty the answer is 0.",
i:"arriveAlice = \"08-15\", leaveAlice = \"08-18\", arriveBob = \"08-16\", leaveBob = \"08-19\"",o:"3",time:"O(1)",space:"O(1)",
code:C(`
class Solution:
    def countDaysTogether(self, arriveAlice, leaveAlice, arriveBob, leaveBob):
        months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
        def day(s):
            m, d = int(s[:2]), int(s[3:])
            return sum(months[:m - 1]) + d
        lo = max(day(arriveAlice), day(arriveBob))
        hi = min(day(leaveAlice), day(leaveBob))
        return max(0, hi - lo + 1)
`)});
lite({id:145,slug:"binary-tree-postorder-traversal",title:"Binary Tree Postorder Traversal",level:"Easy",topic:BT,name:"Iterative: reverse of root-right-left",
w:"[1,null,2,3] → postorder [3,2,1].",k:"Postorder (left, right, root) is the reverse of a traversal that visits root, then right, then left. Do that with a stack and reverse the output.",
i:"root = [1,null,2,3]",o:"[3, 2, 1]",time:"O(n)",space:"O(h)",
code:C(`
class Solution:
    def postorderTraversal(self, root):
        res = []
        st = [root] if root else []
        while st:
            node = st.pop()
            res.append(node.val)
            if node.left:
                st.append(node.left)
            if node.right:
                st.append(node.right)
        return res[::-1]
`)});
lite({id:888,slug:"fair-candy-swap",title:"Fair Candy Swap",level:"Easy",topic:HM,name:"The needed difference is fixed",
w:"Alice [1,1], Bob [2,2]: swap 1 for 2 so both have 3 → [1,2].",k:"If Alice gives x and takes y then sumA − x + y = sumB − y + x, so y = x + (sumB − sumA) / 2. Put Bob's boxes in a set and look for the first x in Alice's list with x + delta in the set.",
i:"aliceSizes = [1,1], bobSizes = [2,2]",o:"[1, 2]",time:"O(n + m)",space:"O(m)",
code:C(`
class Solution:
    def fairCandySwap(self, aliceSizes, bobSizes):
        delta = (sum(bobSizes) - sum(aliceSizes)) // 2
        bob = set(bobSizes)
        for x in aliceSizes:
            if x + delta in bob:
                return [x, x + delta]
`)});
lite({id:950,slug:"reveal-cards-in-increasing-order",title:"Reveal Cards In Increasing Order",level:"Medium",topic:"Queue",name:"Simulate the reveal process on positions",
w:"[17,13,11,2,3,5,7] → [2,13,3,11,5,17,7].",k:"Simulate the reveal on indices: take the first index (it gets the smallest card), move the next index to the end, repeat. Assign the sorted cards to the revealed indices in order.",
i:"deck = [17,13,11,2,3,5,7]",o:"[2, 13, 3, 11, 5, 17, 7]",time:"O(n log n)",space:"O(n)",
code:C(`
class Solution:
    def deckRevealedIncreasing(self, deck):
        n = len(deck)
        res = [0] * n
        q = deque(range(n))
        for card in sorted(deck):
            res[q.popleft()] = card
            if q:
                q.append(q.popleft())
        return res
`)});
lite({id:1550,slug:"three-consecutive-odds",title:"Three Consecutive Odds",level:"Easy",topic:ARR,name:"Count the current run of odd numbers",
w:"[1,2,34,3,4,5,7,23,12] has 5, 7, 23 in a row → true.",k:"Walk through the array counting consecutive odd numbers; return true when the run reaches three.",
i:"arr = [1,2,34,3,4,5,7,23,12]",o:"true",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def threeConsecutiveOdds(self, arr):
        run = 0
        for x in arr:
            run = run + 1 if x % 2 else 0
            if run == 3:
                return True
        return False
`)});
lite({id:1608,slug:"special-array-with-x-elements-greater-than-or-equal-x",title:"Special Array With X Elements Greater Than or Equal X",level:"Easy",topic:SRT,name:"Sort descending and find x",
w:"[3,5]: exactly 2 numbers are ≥ 2 → x = 2.",k:"Sort descending. If the i-th number (0-based) is ≥ i+1 and the next one is < i+1, then exactly i+1 numbers are ≥ i+1. Check each candidate x directly: count the numbers ≥ x for x = 1…n.",
i:"nums = [3,5]",o:"2",time:"O(n log n)",space:"O(n)",
code:C(`
class Solution:
    def specialArray(self, nums):
        nums = sorted(nums, reverse=True)
        for x in range(1, len(nums) + 1):
            if nums[x - 1] >= x and (x == len(nums) or nums[x] < x):
                return x
        return -1
`)});
lite({id:1717,slug:"maximum-score-from-removing-substrings",title:"Maximum Score From Removing Substrings",level:"Medium",topic:STK,name:"Remove the higher-valued pair first, with a stack",
w:"'cdbcbbaaabab', ab=4, ba=5: take 'ba' first, then 'ab' → 19.",k:"Removing 'ab' scores x and 'ba' scores y. Do the more valuable pair first with a stack scan (push letters, pop when the top and the new letter form the pair), then remove the other pair from what is left.",
i:"s = \"cdbcbbaaabab\", x = 4, y = 5",o:"19",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def maximumGain(self, s, x, y):
        def remove(s, a, b, val):
            st = []
            gain = 0
            for c in s:
                if st and st[-1] == a and c == b:
                    st.pop()
                    gain += val
                else:
                    st.append(c)
            return ''.join(st), gain
        if x >= y:
            s, g1 = remove(s, 'a', 'b', x)
            s, g2 = remove(s, 'b', 'a', y)
        else:
            s, g1 = remove(s, 'b', 'a', y)
            s, g2 = remove(s, 'a', 'b', x)
        return g1 + g2
`)});
lite({id:2073,slug:"time-needed-to-buy-tickets",title:"Time Needed to Buy Tickets",level:"Easy",topic:"Queue",name:"Each person buys at most tickets[k] (or one less if behind k)",
w:"tickets [2,3,2], k=2: 2 + 2 + 2 → the last person finishes after 6 seconds.",k:"People in front of k (and k) buy at most tickets[k] tickets before k finishes; people behind k buy at most tickets[k] − 1. Sum min(tickets[i], limit).",
i:"tickets = [2,3,2], k = 2",o:"6",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def timeRequiredToBuy(self, tickets, k):
        return sum(min(t, tickets[k] if i <= k else tickets[k] - 1) for i, t in enumerate(tickets))
`)});
lite({id:1304,slug:"find-n-unique-integers-sum-up-to-zero",title:"Find N Unique Integers Sum up to Zero",level:"Easy",topic:ARR,name:"Symmetric values around zero",
w:"n=5 → [-4,-2,0,2,4].",k:"Use the values 2i − (n − 1) for i = 0 … n−1: they are distinct, symmetric around 0, and sum to zero.",
i:"n = 5",o:"[-4, -2, 0, 2, 4]",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def sumZero(self, n):
        return [2 * i - (n - 1) for i in range(n)]
`)});
lite({id:2104,slug:"sum-of-subarray-ranges",title:"Sum of Subarray Ranges",level:"Medium",topic:STK,name:"Sum of subarray maxima minus sum of subarray minima",
w:"[1,2,3]: ranges 0,0,0,1,1,2 → 4.",k:"The range of a subarray is max − min, so the answer is (sum of all subarray maxima) − (sum of all subarray minima). Each is computed in O(n) with a monotonic stack: an element is the maximum of (left span × right span) subarrays.",
i:"nums = [1,2,3]",o:"4",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def subArrayRanges(self, nums):
        n = len(nums)
        def total(less):
            res = 0
            st = []
            for i in range(n + 1):
                while st and (i == n or (nums[st[-1]] < nums[i] if less else nums[st[-1]] > nums[i])):
                    mid = st.pop()
                    left = st[-1] if st else -1
                    res += nums[mid] * (mid - left) * (i - mid)
                st.append(i)
            return res
        return total(True) - total(False)
`)});
lite({id:2239,slug:"find-closest-number-to-zero",title:"Find Closest Number to Zero",level:"Easy",topic:ARR,name:"Smallest |x|, larger value on ties",
w:"[-4,-2,1,4,8] → 1; [2,-1,1] → 1.",k:"Pick the number with the smallest absolute value; on ties the larger value wins, so use (|x|, −x) as the sort key.",
i:"nums = [-4,-2,1,4,8]",o:"1",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def findClosestNumber(self, nums):
        return min(nums, key=lambda x: (abs(x), -x))
`)});
lite({id:3254,slug:"find-the-power-of-k-size-subarrays-i",title:"Find the Power of K-size Subarrays I",level:"Medium",topic:SW,name:"Track the length of the consecutive ascending run",
w:"[1,2,3,4,3,2,5], k=3 → [3,4,-1,-1,-1].",k:"A window's power is its maximum if its elements are consecutive and ascending (each = previous + 1), otherwise −1. Keep the length of the current run of +1 steps; a window ending at i is good when the run is at least k.",
i:"nums = [1,2,3,4,3,2,5], k = 3",o:"[3, 4, -1, -1, -1]",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def resultsArray(self, nums, k):
        res = []
        run = 0
        for i, x in enumerate(nums):
            run = run + 1 if i and x == nums[i - 1] + 1 else 1
            if i >= k - 1:
                res.append(x if run >= k else -1)
        return res
`)});
lite({id:2590,slug:"design-a-todo-list",title:"Design a Todo List",level:"Medium",topic:DS,name:"Tasks per user, sorted by due date on demand",
w:"Add tasks, ask for pending ones sorted by due date, filter by tag, complete some.",k:"Keep tasks by id (description, due date, tags, done flag, owner) and for each user the list of their task ids. The getters filter the user's pending tasks (optionally by tag) and sort by due date; completeTask marks the task done only if it belongs to that user.",
i:"addTask(1,'Task1',50,[]); addTask(1,'Task2',100,['P1']); getAllTasks(1); getAllTasks(5); addTask(1,'Task3',30,['P1']); getTasksForTag(1,'P1'); completeTask(5,1); completeTask(1,2); getTasksForTag(1,'P1'); getAllTasks(1)",o:"[1, 2, ['Task1','Task2'], [], 3, ['Task3','Task2'], None, None, ['Task3'], ['Task3','Task1']]",time:"O(t log t) per query",space:"O(t)",
code:C(`
class TodoList:
    def __init__(self):
        self.tasks = {}
        self.by_user = defaultdict(list)

    def addTask(self, userId, taskDescription, dueDate, tags):
        tid = len(self.tasks) + 1
        self.tasks[tid] = [userId, taskDescription, dueDate, set(tags), False]
        self.by_user[userId].append(tid)
        return tid

    def getAllTasks(self, userId):
        return self._pending(userId, None)

    def getTasksForTag(self, userId, tag):
        return self._pending(userId, tag)

    def completeTask(self, userId, taskId):
        t = self.tasks.get(taskId)
        if t and t[0] == userId:
            t[4] = True

    def _pending(self, userId, tag):
        items = []
        for tid in self.by_user[userId]:
            owner, desc, due, tags, done = self.tasks[tid]
            if not done and (tag is None or tag in tags):
                items.append((due, tid, desc))
        return [d for _, _, d in sorted(items)]
`)});
lite({id:1464,slug:"maximum-product-of-two-elements-in-an-array",title:"Maximum Product of Two Elements in an Array",level:"Easy",topic:ARR,name:"(largest − 1)(second largest − 1)",
w:"[3,4,5,2] → (5−1)(4−1) = 12.",k:"The product (nums[i]−1)(nums[j]−1) is largest for the two largest numbers.",
i:"nums = [3,4,5,2]",o:"12",time:"O(n log n)",space:"O(1)",
code:C(`
class Solution:
    def maxProduct(self, nums):
        a, b = sorted(nums)[-2:]
        return (a - 1) * (b - 1)
`)});
lite({id:3190,slug:"find-minimum-operations-to-make-all-elements-divisible-by-three",title:"Find Minimum Operations to Make All Elements Divisible by Three",level:"Easy",topic:MB,name:"Each non-multiple needs exactly one step",
w:"[1,2,3,4] → 1, 2 and 4 are one step from a multiple of 3 → 3.",k:"Adding or subtracting 1 turns any number that is not a multiple of 3 into one, so the answer is the number of elements with a non-zero remainder.",
i:"nums = [1,2,3,4]",o:"3",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def minimumOperations(self, nums):
        return sum(x % 3 != 0 for x in nums)
`)});
lite({id:1671,slug:"minimum-number-of-removals-to-make-mountain-array",title:"Minimum Number of Removals to Make Mountain Array",level:"Hard",topic:DP,name:"Longest increasing from the left plus decreasing from the right",
w:"[2,1,1,5,6,2,3,1]: the longest mountain keeps 1,5,6,2,1 or similar (5 elements) → remove 3.",k:"Compute for every index the length of the longest increasing subsequence ending there (left[i]) and the longest decreasing subsequence starting there (right[i]) using LIS (Longest Increasing Subsequence) DP (Dynamic Programming). A mountain peaking at i keeps left[i] + right[i] − 1 elements (only if both sides have at least 2). Remove the rest.",
i:"nums = [2,1,1,5,6,2,3,1]",o:"3",time:"O(n²)",space:"O(n)",
code:C(`
class Solution:
    def minimumMountainRemovals(self, nums):
        n = len(nums)
        left = [1] * n
        right = [1] * n
        for i in range(n):
            for j in range(i):
                if nums[j] < nums[i]:
                    left[i] = max(left[i], left[j] + 1)
        for i in range(n - 1, -1, -1):
            for j in range(i + 1, n):
                if nums[j] < nums[i]:
                    right[i] = max(right[i], right[j] + 1)
        keep = max(left[i] + right[i] - 1 for i in range(n) if left[i] > 1 and right[i] > 1)
        return n - keep
`)});
lite({id:3133,slug:"minimum-array-end",title:"Minimum Array End",level:"Medium",topic:MB,name:"Put the bits of n − 1 into the zero bits of x",
w:"n=3, x=4: the sequence 4, 5, 6 has AND 4; the last element is 6.",k:"Every element must contain all bits of x, so only the zero bits of x can vary. The i-th smallest valid number fills the zero bits of x with the binary digits of i (i = 0 is x itself). The last element corresponds to i = n − 1: deposit its bits into the free positions, lowest first.",
i:"n = 3, x = 4",o:"6",time:"O(log)",space:"O(1)",
code:C(`
class Solution:
    def minEnd(self, n, x):
        res = x
        k = n - 1
        bit = 1
        while k:
            if not x & bit:
                if k & 1:
                    res |= bit
                k >>= 1
            bit <<= 1
        return res
`)});
lite({id:2413,slug:"smallest-even-multiple",title:"Smallest Even Multiple",level:"Easy",topic:MB,name:"n if even, else 2n",
w:"5 → 10; 6 → 6.",k:"The smallest positive number divisible by both 2 and n is n when n is even and 2n otherwise.",
i:"n = 5",o:"10",time:"O(1)",space:"O(1)",
code:C(`
class Solution:
    def smallestEvenMultiple(self, n):
        return n if n % 2 == 0 else 2 * n
`)});
lite({id:2593,slug:"find-score-of-an-array-after-marking-all-elements",title:"Find Score of an Array After Marking All Elements",level:"Medium",topic:SRT,name:"Process values from smallest, mark neighbours",
w:"[2,1,3,4,5,2]: take 1 (marks its neighbours), then the last 2, then 4 → 1 + 2 + 4 = 7.",k:"Sort indices by (value, index). Take the smallest unmarked element, add its value to the score and mark it together with its two neighbours. Continue until all are marked.",
i:"nums = [2,1,3,4,5,2]",o:"7",time:"O(n log n)",space:"O(n)",
code:C(`
class Solution:
    def findScore(self, nums):
        n = len(nums)
        marked = [False] * n
        score = 0
        for v, i in sorted((v, i) for i, v in enumerate(nums)):
            if not marked[i]:
                score += v
                marked[i] = True
                if i > 0:
                    marked[i - 1] = True
                if i + 1 < n:
                    marked[i + 1] = True
        return score
`)});
lite({id:2762,slug:"continuous-subarrays",title:"Continuous Subarrays",level:"Medium",topic:SW,name:"Window with max − min ≤ 2",
w:"[5,4,2,4] has 8 continuous subarrays.",k:"A subarray is continuous when every two elements differ by at most 2, i.e. max − min ≤ 2. For each right end keep the leftmost start such that the window satisfies this (maintain the window's max and min with monotonic deques) and add the window length.",
i:"nums = [5,4,2,4]",o:"8",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def continuousSubarrays(self, nums):
        mx, mn = deque(), deque()
        left = res = 0
        for r, x in enumerate(nums):
            while mx and nums[mx[-1]] <= x:
                mx.pop()
            mx.append(r)
            while mn and nums[mn[-1]] >= x:
                mn.pop()
            mn.append(r)
            while nums[mx[0]] - nums[mn[0]] > 2:
                left += 1
                if mx[0] < left:
                    mx.popleft()
                if mn[0] < left:
                    mn.popleft()
            res += r - left + 1
        return res
`)});
lite({id:1792,slug:"maximum-average-pass-ratio",title:"Maximum Average Pass Ratio",level:"Medium",topic:HP,name:"Always add a student to the class that gains the most",
w:"classes [[1,2],[3,5],[2,2]], 2 extra students → average pass ratio 0.78333.",k:"Adding a passing student to a class with p of t passing changes its ratio by (p+1)/(t+1) − p/t. Greedily give each extra student to the class with the largest gain, using a max-heap keyed by the gain. The answer is the average ratio afterwards.",
i:"classes = [[1,2],[3,5],[2,2]], extraStudents = 2",o:"0.78333",time:"O((n + k) log n)",space:"O(n)",
code:C(`
class Solution:
    def maxAverageRatio(self, classes, extraStudents):
        def gain(p, t):
            return (p + 1) / (t + 1) - p / t
        heap = [(-gain(p, t), p, t) for p, t in classes]
        heapify(heap)
        for _ in range(extraStudents):
            _, p, t = heappop(heap)
            p, t = p + 1, t + 1
            heappush(heap, (-gain(p, t), p, t))
        return round(sum(p / t for _, p, t in heap) / len(classes), 5)
`)});
lite({id:3354,slug:"make-array-elements-equal-to-zero",title:"Make Array Elements Equal to Zero",level:"Easy",topic:PS,name:"At each zero compare the left and right sums",
w:"[1,0,2,0,3]: start at index 3 going left, or index 1 going right → 2 valid selections.",k:"The process bounces between the two sides, decrementing numbers, and ends with all zeros only when the left sum and right sum of the start (a zero) are equal (2 directions work) or differ by exactly 1 (one direction works).",
i:"nums = [1,0,2,0,3]",o:"2",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def countValidSelections(self, nums):
        total = sum(nums)
        left = 0
        res = 0
        for x in nums:
            if x == 0:
                right = total - left
                if left == right:
                    res += 2
                elif abs(left - right) == 1:
                    res += 1
            left += x
        return res
`)});
lite({id:3388,slug:"count-beautiful-splits-in-an-array",title:"Count Beautiful Splits in an Array",level:"Medium",topic:DP,name:"Longest-common-prefix table of suffixes",
w:"[1,1,2,1]: splits ([1],[1],[2,1]) and ([1],[1,2],[1]) are beautiful → 2.",k:"Split nums into three non-empty parts A, B, C. It is beautiful if A is a prefix of B, or B is a prefix of C. Precompute lcp[i][j] = longest common prefix of the suffixes starting at i and j (LCP (Longest Common Prefix) table built from the end). Then A = nums[0:i] is a prefix of B = nums[i:j] when len(B) ≥ i and lcp[0][i] ≥ i; B is a prefix of C when len(C) ≥ len(B) and lcp[i][j] ≥ j − i.",
i:"nums = [1,1,2,1]",o:"2",time:"O(n²)",space:"O(n²)",
code:C(`
class Solution:
    def beautifulSplits(self, nums):
        n = len(nums)
        lcp = [[0] * (n + 1) for _ in range(n + 1)]
        for i in range(n - 1, -1, -1):
            for j in range(n - 1, -1, -1):
                if nums[i] == nums[j]:
                    lcp[i][j] = lcp[i + 1][j + 1] + 1
        res = 0
        for i in range(1, n - 1):
            for j in range(i + 1, n):
                if (j - i >= i and lcp[0][i] >= i) or (n - j >= j - i and lcp[i][j] >= j - i):
                    res += 1
        return res
`)});
lite({id:1791,slug:"find-center-of-star-graph",title:"Find Center of Star Graph",level:"Easy",topic:GR,name:"The common node of any two edges",
w:"Edges [1,2],[2,3],[4,2]: node 2 is in both of the first two edges → 2.",k:"The centre of a star appears in every edge. Look at the first two edges: the one node they share is the centre.",
i:"edges = [[1,2],[2,3],[4,2]]",o:"2",time:"O(1)",space:"O(1)",
code:C(`
class Solution:
    def findCenter(self, edges):
        return (set(edges[0]) & set(edges[1])).pop()
`)});
lite({id:3160,slug:"find-the-number-of-distinct-colors-among-the-balls",title:"Find the Number of Distinct Colors Among the Balls",level:"Medium",topic:HM,name:"Ball → colour map and colour counts",
w:"limit 4, queries [[1,4],[2,5],[1,3],[3,4]] → [1,2,2,3].",k:"Keep a dictionary ball → colour and a counter of how many balls have each colour. For each query remove the ball's old colour (decrease its count and drop the colour at zero), set the new colour, and report the number of colours with a positive count.",
i:"limit = 4, queries = [[1,4],[2,5],[1,3],[3,4]]",o:"[1, 2, 2, 3]",time:"O(q)",space:"O(q)",
code:C(`
class Solution:
    def queryResults(self, limit, queries):
        color_of = {}
        cnt = Counter()
        res = []
        for ball, c in queries:
            if ball in color_of:
                old = color_of[ball]
                cnt[old] -= 1
                if cnt[old] == 0:
                    del cnt[old]
            color_of[ball] = c
            cnt[c] += 1
            res.append(len(cnt))
        return res
`)});
lite({id:2579,slug:"count-total-number-of-colored-cells",title:"Count Total Number of Colored Cells",level:"Medium",topic:MB,name:"Two squares: n² + (n−1)²",
w:"n=3 → 13 cells (a diamond).",k:"After n minutes the coloured area is a diamond made of two nested squares: n² + (n−1)² cells.",
i:"n = 3",o:"13",time:"O(1)",space:"O(1)",
code:C(`
class Solution:
    def coloredCells(self, n):
        return n * n + (n - 1) * (n - 1)
`)});
lite({id:3453,slug:"separate-squares-i",title:"Separate Squares I",level:"Medium",topic:BS,name:"Binary search the line where area below = area above",
w:"Two unit squares at y=0 and y=2: a line at y=1 puts half the area on each side → 1.0.",k:"The area below a horizontal line y = h grows continuously with h. Binary search h in [min y, max top] until the area below equals half the total (area of each square below the line is side × clamp(h − y, 0, side)). Round to 5 decimals.",
i:"squares = [[0,0,1],[2,2,1]]",o:"1.0",time:"O(n log range)",space:"O(1)",
code:C(`
class Solution:
    def separateSquares(self, squares):
        total = sum(l * l for _, _, l in squares)
        lo = min(y for _, y, _ in squares)
        hi = max(y + l for _, y, l in squares)
        def below(h):
            return sum(l * min(max(h - y, 0), l) for _, y, l in squares)
        for _ in range(100):
            mid = (lo + hi) / 2
            if below(mid) * 2 < total:
                lo = mid
            else:
                hi = mid
        return round(lo, 5)
`)});
lite({id:3396,slug:"minimum-number-of-operations-to-make-elements-in-array-distinct",title:"Minimum Number of Operations to Make Elements in Array Distinct",level:"Easy",topic:HM,name:"Scan from the right until a repeat",
w:"[1,2,3,4,2,3,3,5,7]: remove the first 6 elements (2 operations) to leave the distinct suffix [3,5,7].",k:"Each operation removes up to 3 elements from the front. The remaining suffix must have distinct elements. Find the longest distinct suffix by scanning from the right until a repeated value; if the first bad index is p (0-based), you need ceil((p + 1) / 3) operations.",
i:"nums = [1,2,3,4,2,3,3,5,7]",o:"2",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def minimumOperations(self, nums):
        seen = set()
        for i in range(len(nums) - 1, -1, -1):
            if nums[i] in seen:
                return (i + 3) // 3
            seen.add(nums[i])
        return 0
`)});
lite({id:1399,slug:"count-largest-group",title:"Count Largest Group",level:"Easy",topic:HM,name:"Group by digit sum",
w:"n=13: digit sums group {1,10},{2,11},{3,12},{4,13},{5},… → four groups of size 2.",k:"Group the numbers 1…n by the sum of their digits and count how many groups have the largest size.",
i:"n = 13",o:"4",time:"O(n log n)",space:"O(log n)",
code:C(`
class Solution:
    def countLargestGroup(self, n):
        cnt = Counter(sum(map(int, str(x))) for x in range(1, n + 1))
        top = max(cnt.values())
        return sum(1 for v in cnt.values() if v == top)
`)});
lite({id:2974,slug:"minimum-number-game",title:"Minimum Number Game",level:"Easy",topic:SRT,name:"Sort and swap each pair",
w:"[5,4,2,3] → sorted [2,3,4,5] → arr [3,2,5,4].",k:"Alice removes the smallest, Bob the next smallest, but Bob appends first. After sorting, swap each neighbouring pair.",
i:"nums = [5,4,2,3]",o:"[3, 2, 5, 4]",time:"O(n log n)",space:"O(n)",
code:C(`
class Solution:
    def numberGame(self, nums):
        a = sorted(nums)
        for i in range(0, len(a) - 1, 2):
            a[i], a[i + 1] = a[i + 1], a[i]
        return a
`)});
lite({id:3310,slug:"remove-methods-from-project",title:"Remove Methods From Project",level:"Medium",topic:GR,name:"Suspicious methods = reachable from k; check outside calls",
w:"n=5, k=0, invocations [[1,2],[0,2],[0,1],[3,4]]: 0, 1, 2 are suspicious and not called from outside → remove them → [3, 4].",k:"Methods reachable from k (by following invocations) are suspicious. They can be removed only if no non-suspicious method invokes a suspicious one. If such a call exists, nothing may be removed and all methods remain; otherwise return the non-suspicious methods.",
i:"n = 5, k = 0, invocations = [[1,2],[0,2],[0,1],[3,4]]",o:"[3, 4]",time:"O(n + e)",space:"O(n + e)",
code:C(`
class Solution:
    def remainingMethods(self, n, k, invocations):
        g = defaultdict(list)
        for a, b in invocations:
            g[a].append(b)
        sus = {k}
        st = [k]
        while st:
            u = st.pop()
            for v in g[u]:
                if v not in sus:
                    sus.add(v)
                    st.append(v)
        for a, b in invocations:
            if a not in sus and b in sus:
                return list(range(n))
        return [i for i in range(n) if i not in sus]
`)});
lite({id:2894,slug:"divisible-and-non-divisible-sums-difference",title:"Divisible and Non-divisible Sums Difference",level:"Easy",topic:MB,name:"Sum of non-multiples minus sum of multiples",
w:"n=10, m=3: non-multiples sum 37, multiples (3+6+9) sum 18 → 19.",k:"Sum the numbers 1…n that are not divisible by m and subtract the sum of those that are.",
i:"n = 10, m = 3",o:"19",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def differenceOfSums(self, n, m):
        return sum(x if x % m else -x for x in range(1, n + 1))
`)});
lite({id:1684,slug:"count-the-number-of-consistent-strings",title:"Count the Number of Consistent Strings",level:"Easy",topic:HM,name:"Subset test against the allowed set",
w:"allowed 'ab', words ['ad','bd','aaab','baa','badab'] → 'aaab' and 'baa' → 2.",k:"A word is consistent when all its letters are in allowed. Convert allowed to a set and test each word.",
i:"allowed = \"ab\", words = [\"ad\",\"bd\",\"aaab\",\"baa\",\"badab\"]",o:"2",time:"O(total length)",space:"O(1)",
code:C(`
class Solution:
    def countConsistentStrings(self, allowed, words):
        a = set(allowed)
        return sum(set(w) <= a for w in words)
`)});
