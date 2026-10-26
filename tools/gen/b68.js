const {lite}=require("./lib");
const C=s=>s.replace(/^\n/,"").replace(/\n$/,"").split("\n");
const ARR="Array / String",HM="Hash Map / Set",STK="Stack / Monotonic Stack",BT="Binary Tree",GR="Graph",HP="Heap",DP="Dynamic Programming",GD="Greedy",MB="Math / Bit Manipulation",BS="Binary Search",SRT="Sorting",SW="Sliding Window",MX="Matrix",UF="Union Find / Segment Tree",TP="Two Pointers",IV="Intervals",BTK="Backtracking",DS="Design",LL="Linked List",TR="Trie",PS="Prefix Sum";
// ---- Bloomberg (4)
lite({id:3568,slug:"minimum-moves-to-clean-the-classroom",title:"Minimum Moves to Clean the Classroom",level:"Medium",topic:GR,name:"BFS over (position, litter collected, energy)",
w:"A 2×2 room 'S.' / 'XL' with energy 2: right then down collects the litter in 2 moves.",k:"Number the litter cells (at most 10) and search with BFS (Breadth-First Search) over states (row, column, bitmask of collected litter, current energy). A move costs 1 energy, stepping on 'R' refills to the maximum, stepping on 'L' sets its bit. The first state with all bits set gives the minimum moves; a move with 0 energy left is not allowed.",
i:"classroom = [\"S.\",\"XL\"], energy = 2",o:"2",time:"O(m·n·2^L·E)",space:"O(m·n·2^L·E)",
code:C(`
class Solution:
    def minMoves(self, classroom, energy):
        m, n = len(classroom), len(classroom[0])
        lit = {}
        start = None
        for i in range(m):
            for j in range(n):
                if classroom[i][j] == 'L':
                    lit[(i, j)] = len(lit)
                elif classroom[i][j] == 'S':
                    start = (i, j)
        full = (1 << len(lit)) - 1
        if full == 0:
            return 0
        seen = {(start[0], start[1], 0, energy)}
        q = deque([(start[0], start[1], 0, energy, 0)])
        while q:
            r, c, mask, e, d = q.popleft()
            if e == 0:
                continue
            for a, b in ((r + 1, c), (r - 1, c), (r, c + 1), (r, c - 1)):
                if 0 <= a < m and 0 <= b < n and classroom[a][b] != 'X':
                    ne = e - 1
                    nm = mask
                    if classroom[a][b] == 'R':
                        ne = energy
                    elif (a, b) in lit:
                        nm |= 1 << lit[(a, b)]
                    if nm == full:
                        return d + 1
                    key = (a, b, nm, ne)
                    if key not in seen:
                        seen.add(key)
                        q.append((a, b, nm, ne, d + 1))
        return -1
`)});
lite({id:1432,slug:"max-difference-you-can-get-from-changing-an-integer",title:"Max Difference You Can Get From Changing an Integer",level:"Medium",topic:GD,name:"Make the biggest and smallest versions greedily",
w:"num=555: biggest 999, smallest 111 → 888.",k:"To get the largest number replace every copy of the first digit that is not 9 by 9. To get the smallest replace the first digit by 1 (if it is not 1), otherwise replace the first digit after it that is not 0 or 1 by 0 (never creating a leading zero). Return the difference.",
i:"num = 555",o:"888",time:"O(d)",space:"O(d)",
code:C(`
class Solution:
    def maxDiff(self, num):
        s = str(num)
        big = s
        for c in s:
            if c != '9':
                big = s.replace(c, '9')
                break
        small = s
        if s[0] != '1':
            small = s.replace(s[0], '1')
        else:
            for c in s[1:]:
                if c not in '01':
                    small = s.replace(c, '0')
                    break
        return int(big) - int(small)
`)});
lite({id:2966,slug:"divide-array-into-arrays-with-max-difference",title:"Divide Array Into Arrays With Max Difference",level:"Medium",topic:SRT,name:"Sort and cut into triples",
w:"[1,3,4,8,7,9,3,5,1], k=2 → [[1,1,3],[3,4,5],[7,8,9]].",k:"Sort the array and cut it into consecutive groups of three; each group must have max − min ≤ k, otherwise no valid division exists (return []).",
i:"nums = [1,3,4,8,7,9,3,5,1], k = 2",o:"[[1, 1, 3], [3, 4, 5], [7, 8, 9]]",time:"O(n log n)",space:"O(n)",
code:C(`
class Solution:
    def divideArray(self, nums, k):
        nums = sorted(nums)
        res = []
        for i in range(0, len(nums), 3):
            g = nums[i:i + 3]
            if g[2] - g[0] > k:
                return []
            res.append(g)
        return res
`)});
lite({id:2138,slug:"divide-a-string-into-groups-of-size-k",title:"Divide a String Into Groups of Size k",level:"Easy",topic:ARR,name:"Slice and pad the last group",
w:"'abcdefghij', k=3, fill 'x' → ['abc','def','ghi','jxx'].",k:"Cut the string into pieces of length k; pad the last piece with the fill character.",
i:"s = \"abcdefghij\", k = 3, fill = \"x\"",o:"['abc', 'def', 'ghi', 'jxx']",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def divideString(self, s, k, fill):
        s += fill * (-len(s) % k)
        return [s[i:i + k] for i in range(0, len(s), k)]
`)});
lite({id:3085,slug:"minimum-deletions-to-make-string-k-special",title:"Minimum Deletions to Make String K-Special",level:"Medium",topic:GD,name:"Try each frequency as the smallest kept",
w:"'aabcaba', k=0: keep a, b with equal frequency 3 → delete 1 c... answer 3.",k:"A string is k-special if any two letter frequencies differ by at most k. Try each existing frequency f as the lowest kept frequency: letters with frequency below f are deleted entirely, letters above f + k are reduced to f + k. Take the cheapest total deletions.",
i:"word = \"aabcaba\", k = 0",o:"3",time:"O(26²)",space:"O(26)",
code:C(`
class Solution:
    def minimumDeletions(self, word, k):
        freqs = list(Counter(word).values())
        best = len(word)
        for f in set(freqs):
            cost = 0
            for g in freqs:
                if g < f:
                    cost += g
                elif g > f + k:
                    cost += g - f - k
            best = min(best, cost)
        return best
`)});
lite({id:3330,slug:"find-the-original-typed-string-i",title:"Find the Original Typed String I",level:"Easy",topic:ARR,name:"1 + number of equal neighbours",
w:"'abbcccc': the typing could have been the word itself or one run shortened (b, c×3) → 5.",k:"Alice may have held a key too long at most once, so exactly one run could have lost extra letters. Count the original word plus, for each pair of equal neighbouring letters, one possibility.",
i:"word = \"abbcccc\"",o:"5",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def possibleStringCount(self, word):
        return 1 + sum(a == b for a, b in zip(word, word[1:]))
`)});
lite({id:1991,slug:"find-the-middle-index-in-array",title:"Find the Middle Index in Array",level:"Easy",topic:PS,name:"Left sum equals right sum",
w:"[2,3,-1,8,4]: index 3 has left sum 4 and right sum 4 → 3.",k:"Keep the total and a running left sum; index i is the middle if left == total − left − nums[i].",
i:"nums = [2,3,-1,8,4]",o:"3",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def findMiddleIndex(self, nums):
        total = sum(nums)
        left = 0
        for i, x in enumerate(nums):
            if left == total - left - x:
                return i
            left += x
        return -1
`)});
lite({id:3151,slug:"special-array-i",title:"Special Array I",level:"Easy",topic:ARR,name:"Neighbours must alternate parity",
w:"[2,1,4] alternates even/odd → true; [4,3,1,6] has 3,1 both odd → false.",k:"An array is special if every two adjacent elements have different parity.",
i:"nums = [2,1,4]",o:"true",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def isArraySpecial(self, nums):
        return all((a + b) % 2 == 1 for a, b in zip(nums, nums[1:]))
`)});
lite({id:3440,slug:"reschedule-meetings-for-maximum-free-time-ii",title:"Reschedule Meetings for Maximum Free Time II",level:"Medium",topic:IV,name:"Gaps: slide a meeting out, or move it into another gap",
w:"eventTime 5, meetings [1,2] and [3,5]: moving [1,2] to the end leaves a free stretch of 2 → 2.",k:"Compute the n+1 gaps between meetings (and the event edges). Removing meeting i merges the two gaps around it. Its duration can be put back either inside the merged hole (then the free time is both gaps) or, if some other gap is at least its duration long, anywhere else (then the free time is both gaps plus the duration). Use prefix/suffix maxima of the gaps to know the largest other gap.",
i:"eventTime = 5, startTime = [1,3], endTime = [2,5]",o:"2",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def maxFreeTime(self, eventTime, startTime, endTime):
        n = len(startTime)
        gaps = [startTime[0]] + [startTime[i] - endTime[i - 1] for i in range(1, n)] + [eventTime - endTime[-1]]
        pre = list(accumulate(gaps, max))
        suf = list(accumulate(reversed(gaps), max))[::-1]
        best = 0
        for i in range(n):
            dur = endTime[i] - startTime[i]
            other = max(pre[i - 1] if i - 1 >= 0 else 0, suf[i + 2] if i + 2 <= n else 0)
            free = gaps[i] + gaps[i + 1] + (dur if other >= dur else 0)
            best = max(best, free)
        return best
`)});
lite({id:3487,slug:"maximum-unique-subarray-sum-after-deletion",title:"Maximum Unique Subarray Sum After Deletion",level:"Easy",topic:GD,name:"Sum of distinct positive values",
w:"[1,1,0,1,1] → keep one 1 → 1.",k:"After deleting arbitrary elements you want a subarray with distinct values and the largest sum. Because you may delete anything, take each distinct positive value once; if no positive value exists the best is the largest element.",
i:"nums = [1,1,0,1,1]",o:"1",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def maxSum(self, nums):
        pos = {x for x in nums if x > 0}
        return sum(pos) if pos else max(nums)
`)});
lite({id:3479,slug:"fruits-into-baskets-iii",title:"Fruits Into Baskets III",level:"Medium",topic:UF,name:"Segment tree: leftmost basket with capacity ≥ fruit",
w:"fruits [4,2,5], baskets [3,5,4]: 4→5, 2→3, 5 has no basket → 1 unplaced.",k:"For each fruit in order take the leftmost unused basket whose capacity is at least the fruit size. A segment tree storing the maximum capacity per range lets us descend to the leftmost sufficient basket in O(log n), then set that leaf to 0.",
i:"fruits = [4,2,5], baskets = [3,5,4]",o:"1",time:"O(n log n)",space:"O(n)",
code:C(`
class Solution:
    def numOfUnplacedFruits(self, fruits, baskets):
        n = len(baskets)
        size = 1
        while size < n:
            size *= 2
        tree = [0] * (2 * size)
        for i, b in enumerate(baskets):
            tree[size + i] = b
        for i in range(size - 1, 0, -1):
            tree[i] = max(tree[2 * i], tree[2 * i + 1])
        unplaced = 0
        for f in fruits:
            if tree[1] < f:
                unplaced += 1
                continue
            i = 1
            while i < size:
                i = 2 * i if tree[2 * i] >= f else 2 * i + 1
            tree[i] = 0
            i //= 2
            while i:
                tree[i] = max(tree[2 * i], tree[2 * i + 1])
                i //= 2
        return unplaced
`)});
lite({id:3363,slug:"find-the-maximum-number-of-fruits-collected",title:"Find the Maximum Number of Fruits Collected",level:"Hard",topic:DP,name:"Child 1 takes the diagonal; two triangle DPs for the others",
w:"The 4×4 sample: the diagonal gives 34 and the other two children add 66 → 100.",k:"Three children cross an n×n grid and each reaches (n−1, n−1) in n−1 moves. The child from (0,0) must follow the main diagonal. The child from (0, n−1) stays above the diagonal and the child from (n−1, 0) below it, so they never collide. Each triangle is a simple DP (Dynamic Programming) over rows; the third child is handled by transposing the grid. Total = diagonal + both triangles.",
i:"fruits = [[1,2,3,4],[5,6,8,7],[9,10,11,12],[13,14,15,16]]",o:"100",time:"O(n²)",space:"O(n²)",
code:C(`
class Solution:
    def maxCollectedFruits(self, fruits):
        n = len(fruits)
        NEG = float('-inf')
        def upper(g):
            dp = [[NEG] * n for _ in range(n)]
            dp[0][n - 1] = g[0][n - 1]
            for i in range(1, n - 1):
                for j in range(i + 1, n):
                    best = dp[i - 1][j]
                    if j - 1 > i - 1:
                        best = max(best, dp[i - 1][j - 1])
                    if j + 1 < n:
                        best = max(best, dp[i - 1][j + 1])
                    if best > NEG:
                        dp[i][j] = best + g[i][j]
            return dp[n - 2][n - 1]
        diag = sum(fruits[i][i] for i in range(n))
        t = [list(r) for r in zip(*fruits)]
        return diag + upper(fruits) + upper(t)
`)});
lite({id:363,slug:"max-sum-of-rectangle-no-larger-than-k",title:"Max Sum of Rectangle No Larger Than K",level:"Hard",topic:BS,name:"Fix two rows, sorted prefix sums with bisect",
w:"[[1,0,1],[0,-2,3]], k=2: the rectangle [[0,1],[-2,3]] sums to 2 → 2.",k:"Fix a top and a bottom row and collapse the columns between them into one array of column sums. We now want the subarray of that array with the largest sum ≤ k: keep a sorted list of prefix sums; for each prefix p find the smallest earlier prefix ≥ p − k with bisect — the difference is the best sum ending here.",
i:"matrix = [[1,0,1],[0,-2,3]], k = 2",o:"2",time:"O(m²·n log n)",space:"O(n)",
code:C(`
class Solution:
    def maxSumSubmatrix(self, matrix, k):
        m, n = len(matrix), len(matrix[0])
        best = float('-inf')
        for top in range(m):
            cols = [0] * n
            for bottom in range(top, m):
                for j in range(n):
                    cols[j] += matrix[bottom][j]
                prefixes = [0]
                run = 0
                for v in cols:
                    run += v
                    idx = bisect_left(prefixes, run - k)
                    if idx < len(prefixes):
                        best = max(best, run - prefixes[idx])
                    insort(prefixes, run)
        return best
`)});
lite({id:1342,slug:"number-of-steps-to-reduce-a-number-to-zero",title:"Number of Steps to Reduce a Number to Zero",level:"Easy",topic:MB,name:"Bit length plus set bits",
w:"14 → 7 → 6 → 3 → 2 → 1 → 0: 6 steps.",k:"Each 1 bit costs one subtraction and each shift costs one division. The answer is bit_length − 1 + popcount (for n > 0), 0 for n = 0.",
i:"num = 14",o:"6",time:"O(1)",space:"O(1)",
code:C(`
class Solution:
    def numberOfSteps(self, num):
        return 0 if num == 0 else num.bit_length() - 1 + bin(num).count('1')
`)});
lite({id:3495,slug:"minimum-operations-to-make-array-elements-zero",title:"Minimum Operations to Make Array Elements Zero",level:"Hard",topic:MB,name:"Sum the base-4 'depths', then halve",
w:"queries [[1,2],[2,4]]: totals of steps 2 and 4 → 1 + 2 = 3 operations.",k:"One operation divides two numbers by 4, so each number needs d(x) = number of base-4 digits of x steps. The minimum operations for a range is ceil(sum of d(x) / 2). Sum d(x) over [l, r] by splitting the range into blocks [4^k, 4^(k+1) − 1] where d = k + 1.",
i:"queries = [[1,2],[2,4]]",o:"3",time:"O(q log r)",space:"O(1)",
code:C(`
class Solution:
    def minOperations(self, queries):
        def steps(n):
            total = 0
            lo, d = 1, 1
            while lo <= n:
                hi = min(n, lo * 4 - 1)
                total += (hi - lo + 1) * d
                lo *= 4
                d += 1
            return total
        res = 0
        for l, r in queries:
            s = steps(r) - steps(l - 1)
            res += (s + 1) // 2
        return res
`)});
lite({id:1668,slug:"maximum-repeating-substring",title:"Maximum Repeating Substring",level:"Easy",topic:ARR,name:"Grow the repetition until it no longer fits",
w:"sequence 'ababc', word 'ab' → 'abab' fits twice → 2.",k:"Find the largest k such that word repeated k times is a substring of the sequence. Keep multiplying the word and testing with `in`.",
i:"sequence = \"ababc\", word = \"ab\"",o:"2",time:"O(n²/m)",space:"O(n)",
code:C(`
class Solution:
    def maxRepeating(self, sequence, word):
        k = 0
        while word * (k + 1) in sequence:
            k += 1
        return k
`)});
lite({id:2074,slug:"reverse-nodes-in-even-length-groups",title:"Reverse Nodes in Even Length Groups",level:"Medium",topic:LL,name:"Group sizes 1, 2, 3 …; reverse the even-length ones",
w:"5→2→6→3→9→1→7→3→8→4: groups of 1,2,3,4 → the even groups are reversed.",k:"The list is split into groups of sizes 1, 2, 3 … (the last group may be shorter). Collect each group's nodes' values; if the group's real length is even reverse the values, then write them back in place.",
i:"head = [5,2,6,3,9,1,7,3,8,4]",o:"[5, 6, 2, 3, 9, 1, 4, 8, 3, 7]",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def reverseEvenLengthGroups(self, head):
        cur = head
        size = 1
        while cur:
            nodes = []
            node = cur
            while node and len(nodes) < size:
                nodes.append(node)
                node = node.next
            if len(nodes) % 2 == 0:
                vals = [x.val for x in nodes][::-1]
                for x, v in zip(nodes, vals):
                    x.val = v
            cur = node
            size += 1
        return head
`)});
lite({id:976,slug:"largest-perimeter-triangle",title:"Largest Perimeter Triangle",level:"Easy",topic:GD,name:"Sort descending, first valid triple",
w:"[2,1,2] → 2 + 1 + 2 = 5.",k:"Sort descending. The first three consecutive sides a ≥ b ≥ c with b + c > a form the triangle with the largest perimeter. If none exists the answer is 0.",
i:"nums = [2,1,2]",o:"5",time:"O(n log n)",space:"O(1)",
code:C(`
class Solution:
    def largestPerimeter(self, nums):
        nums = sorted(nums, reverse=True)
        for i in range(len(nums) - 2):
            if nums[i + 1] + nums[i + 2] > nums[i]:
                return nums[i] + nums[i + 1] + nums[i + 2]
        return 0
`)});
lite({id:2517,slug:"maximum-tastiness-of-candy-basket",title:"Maximum Tastiness of Candy Basket",level:"Medium",topic:BS,name:"Binary search the minimum price gap",
w:"prices [13,5,1,8,21,2], k=3 → pick 13, 5, 2? best tastiness is 8.",k:"Tastiness is the smallest price difference between two chosen candies. Guess a gap g; after sorting, greedily pick the cheapest candy and then each next candy whose price is at least g more than the last picked; if k are picked the gap works. Binary search the largest g.",
i:"price = [13,5,1,8,21,2], k = 3",o:"8",time:"O(n log n + n log range)",space:"O(1)",
code:C(`
class Solution:
    def maximumTastiness(self, price, k):
        price = sorted(price)
        def ok(g):
            cnt, last = 1, price[0]
            for p in price[1:]:
                if p - last >= g:
                    cnt += 1
                    last = p
            return cnt >= k
        lo, hi = 0, price[-1] - price[0]
        while lo < hi:
            mid = (lo + hi + 1) // 2
            if ok(mid):
                lo = mid
            else:
                hi = mid - 1
        return lo
`)});
lite({id:3703,slug:"remove-k-balanced-substrings",title:"Remove K-Balanced Substrings",level:"Medium",topic:STK,name:"Stack of runs: k '(' then k ')' cancel",
w:"'((()))()()()' with k=3 → the first six characters cancel → '()()()'.",k:"Keep a stack of runs (character, length). When a run of ')' reaches length k directly above a run of '(' of length ≥ k, remove k from both. Merge equal neighbouring runs when pushing. The stack contents are the final string.",
i:"s = \"((()))()()()\", k = 3",o:"\"()()()\"",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def removeSubstring(self, s, k):
        st = []
        for c in s:
            if st and st[-1][0] == c:
                st[-1][1] += 1
            else:
                st.append([c, 1])
            if c == ')' and st[-1][1] == k and len(st) >= 2 and st[-2][0] == '(' and st[-2][1] >= k:
                st.pop()
                st[-1][1] -= k
                if st[-1][1] == 0:
                    st.pop()
        return ''.join(ch * cnt for ch, cnt in st)
`)});
lite({id:3713,slug:"longest-balanced-substring-i",title:"Longest Balanced Substring I",level:"Medium",topic:HM,name:"Extend every start with a letter counter",
w:"'abbac' → 'abba' has a and b twice each → 4.",k:"A substring is balanced when all distinct letters in it occur equally often. For each start extend to the right keeping a Counter; the substring is balanced when the set of counts has size 1. Keep the longest.",
i:"s = \"abbac\"",o:"4",time:"O(n²)",space:"O(26)",
code:C(`
class Solution:
    def longestBalanced(self, s):
        best = 0
        for i in range(len(s)):
            cnt = Counter()
            for j in range(i, len(s)):
                cnt[s[j]] += 1
                if len(set(cnt.values())) == 1:
                    best = max(best, j - i + 1)
        return best
`)});
lite({id:3318,slug:"find-x-sum-of-all-k-long-subarrays-i",title:"Find X-Sum of All K-Long Subarrays I",level:"Easy",topic:SW,name:"Top-x frequent elements of each window",
w:"[1,1,2,2,3,4,2,3], k=6, x=2: keep the two most frequent values (ties: larger value) and sum their occurrences.",k:"For every window of size k count frequencies, sort the values by (frequency, value) descending, keep the top x values, and add up value × frequency over them.",
i:"nums = [1,1,2,2,3,4,2,3], k = 6, x = 2",o:"[6, 10, 12]",time:"O(n·k log k)",space:"O(k)",
code:C(`
class Solution:
    def findXSum(self, nums, k, x):
        res = []
        for i in range(len(nums) - k + 1):
            cnt = Counter(nums[i:i + k])
            top = sorted(cnt.items(), key=lambda p: (p[1], p[0]), reverse=True)[:x]
            res.append(sum(v * c for v, c in top))
        return res
`)});
lite({id:1765,slug:"map-of-highest-peak",title:"Map of Highest Peak",level:"Medium",topic:GR,name:"Multi-source BFS from the water cells",
w:"isWater [[0,1],[0,0]] → heights [[1,0],[2,1]].",k:"Water cells have height 0 and neighbouring cells differ by at most 1, so the best height of a land cell is its distance to the nearest water. Start a BFS (Breadth-First Search) from all water cells at once.",
i:"isWater = [[0,1],[0,0]]",o:"[[1, 0], [2, 1]]",time:"O(m·n)",space:"O(m·n)",
code:C(`
class Solution:
    def highestPeak(self, isWater):
        m, n = len(isWater), len(isWater[0])
        h = [[-1] * n for _ in range(m)]
        q = deque()
        for i in range(m):
            for j in range(n):
                if isWater[i][j]:
                    h[i][j] = 0
                    q.append((i, j))
        while q:
            i, j = q.popleft()
            for a, b in ((i + 1, j), (i - 1, j), (i, j + 1), (i, j - 1)):
                if 0 <= a < m and 0 <= b < n and h[a][b] < 0:
                    h[a][b] = h[i][j] + 1
                    q.append((a, b))
        return h
`)});
lite({id:808,slug:"soup-servings",title:"Soup Servings",level:"Medium",topic:DP,name:"Probability DP with a large-n shortcut",
w:"n=50: the probability that A empties first (plus half that both empty together) is 0.625.",k:"Four equally likely servings take (100,0), (75,25), (50,50), (25,75) ml from (A, B). Work in units of 25 ml: p(a, b) = ¼ Σ p(a − x, b − y). A is empty first → 1, both empty → 0.5, B empty first → 0. For large n the answer is within 1e-5 of 1, so return 1 when n ≥ 4800.",
i:"n = 50",o:"0.625",time:"O(1)",space:"O(1)",
code:C(`
class Solution:
    def soupServings(self, n):
        if n >= 4800:
            return 1.0
        n = (n + 24) // 25
        @lru_cache(None)
        def p(a, b):
            if a <= 0 and b <= 0:
                return 0.5
            if a <= 0:
                return 1.0
            if b <= 0:
                return 0.0
            return 0.25 * (p(a - 4, b) + p(a - 3, b - 1) + p(a - 2, b - 2) + p(a - 1, b - 3))
        return p(n, n)
`)});
lite({id:1975,slug:"maximum-matrix-sum",title:"Maximum Matrix Sum",level:"Medium",topic:GD,name:"Flip signs in pairs: at most one number stays negative",
w:"[[1,-1],[-1,1]] → flip a pair to make everything positive → 4.",k:"One operation flips the signs of two neighbouring cells. So the parity of the number of negatives is invariant. Take the sum of absolute values; if the count of negatives is odd, one cell must stay negative — subtract twice the smallest absolute value.",
i:"matrix = [[1,-1],[-1,1]]",o:"4",time:"O(m·n)",space:"O(1)",
code:C(`
class Solution:
    def maxMatrixSum(self, matrix):
        total = neg = 0
        small = float('inf')
        for row in matrix:
            for v in row:
                total += abs(v)
                neg += v < 0
                small = min(small, abs(v))
        return total - (2 * small if neg % 2 else 0)
`)});
lite({id:911,slug:"online-election",title:"Online Election",level:"Medium",topic:DS,name:"Leader timeline + binary search",
w:"votes at times [0,5,10,15,20] for persons [0,1,1,0,0]: at t=3 the leader is 0, at t=12 it is 1.",k:"Process the votes once in time order, tracking counts and the current leader (ties go to the most recent voter). Store the leader after each vote. A query q(t) binary searches the last vote time ≤ t and returns the stored leader.",
i:"TopVotedCandidate([0,1,1,0,0,1,0], [0,5,10,15,20,25,30]); q(3); q(12); q(25); q(15); q(24); q(8)",o:"[0, 1, 1, 0, 0, 1]",time:"O(log n) per query",space:"O(n)",
code:C(`
class TopVotedCandidate:
    def __init__(self, persons, times):
        self.times = times
        self.lead = []
        cnt = Counter()
        best = -1
        for p in persons:
            cnt[p] += 1
            if best == -1 or cnt[p] >= cnt[best]:
                best = p
            self.lead.append(best)

    def q(self, t):
        return self.lead[bisect_right(self.times, t) - 1]
`)});
lite({id:1339,slug:"maximum-product-of-splitted-binary-tree",title:"Maximum Product of Splitted Binary Tree",level:"Medium",topic:BT,name:"Subtree sums: maximise s × (total − s)",
w:"[1,2,3,4,5,6]: cutting off the subtree rooted at 2 (sum 11) gives 11 × 10 = 110.",k:"Removing one edge splits the tree into a subtree with sum s and the rest with total − s. Compute every subtree sum (post-order) and maximise s × (total − s). Take the result modulo 1e9+7 at the end.",
i:"root = [1,2,3,4,5,6]",o:"110",time:"O(n)",space:"O(h)",
code:C(`
class Solution:
    def maxProduct(self, root):
        sums = []
        def dfs(node):
            if not node:
                return 0
            s = node.val + dfs(node.left) + dfs(node.right)
            sums.append(s)
            return s
        total = dfs(root)
        return max(s * (total - s) for s in sums) % (10**9 + 7)
`)});
lite({id:2975,slug:"maximum-square-area-by-removing-fences-from-a-field",title:"Maximum Square Area by Removing Fences From a Field",level:"Medium",topic:HM,name:"Common pairwise distances of both fence sets",
w:"m=4, n=3, hFences [2,3], vFences [2]: a 2×2 square is possible → 4.",k:"After removing fences you can pick any two horizontal fences (including the borders 1 and m) and any two vertical ones. A square needs equal distances, so compute all pairwise distances of the horizontal lines and of the vertical lines, intersect the two sets, and square the largest common distance. Modulo 1e9+7; −1 if none.",
i:"m = 4, n = 3, hFences = [2,3], vFences = [2]",o:"4",time:"O(h² + v²)",space:"O(h² + v²)",
code:C(`
class Solution:
    def maximizeSquareArea(self, m, n, hFences, vFences):
        h = sorted(hFences + [1, m])
        v = sorted(vFences + [1, n])
        hd = {b - a for a, b in combinations(h, 2)}
        vd = {b - a for a, b in combinations(v, 2)}
        common = hd & vd
        return max(common) ** 2 % (10**9 + 7) if common else -1
`)});
lite({id:3731,slug:"find-missing-elements",title:"Find Missing Elements",level:"Easy",topic:HM,name:"Numbers between min and max that are absent",
w:"[1,4,2,5] → 3 is missing.",k:"The range is from the smallest to the largest element of nums; return the integers in that range that are not in the array (ascending).",
i:"nums = [1,4,2,5]",o:"[3]",time:"O(range)",space:"O(n)",
code:C(`
class Solution:
    def findMissingElements(self, nums):
        s = set(nums)
        return [x for x in range(min(nums), max(nums) + 1) if x not in s]
`)});
lite({id:961,slug:"n-repeated-element-in-size-2n-array",title:"N-Repeated Element in Size 2N Array",level:"Easy",topic:HM,name:"The first value seen twice",
w:"[1,2,3,3] → 3.",k:"The array has n+1 distinct values and one of them appears n times, every other once. The first value you see twice is the repeated one.",
i:"nums = [1,2,3,3]",o:"3",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def repeatedNTimes(self, nums):
        seen = set()
        for x in nums:
            if x in seen:
                return x
            seen.add(x)
`)});
lite({id:1281,slug:"subtract-the-product-and-sum-of-digits-of-an-integer",title:"Subtract the Product and Sum of Digits of an Integer",level:"Easy",topic:MB,name:"Digit product minus digit sum",
w:"234: product 24 − sum 9 = 15.",k:"Walk the digits, multiplying and adding; return product − sum.",
i:"n = 234",o:"15",time:"O(d)",space:"O(1)",
code:C(`
class Solution:
    def subtractProductAndSum(self, n):
        prod, total = 1, 0
        for d in map(int, str(n)):
            prod *= d
            total += d
        return prod - total
`)});
lite({id:3658,slug:"gcd-of-odd-and-even-sums",title:"GCD of Odd and Even Sums",level:"Easy",topic:MB,name:"gcd(n², n(n+1)) = n",
w:"n=4: odd sum 16, even sum 20 → gcd 4.",k:"The sum of the first n odd numbers is n² and of the first n even numbers is n(n+1). Their gcd is n · gcd(n, n+1) = n.",
i:"n = 4",o:"4",time:"O(1)",space:"O(1)",
code:C(`
class Solution:
    def gcdOfOddEvenSums(self, n):
        return n
`)});
lite({id:3714,slug:"longest-balanced-substring-ii",title:"Longest Balanced Substring II",level:"Medium",topic:HM,name:"Three cases: one, two or three distinct letters",
w:"'abbac' → 'abba' (a and b twice each) → 4.",k:"A balanced substring has 1, 2 or 3 distinct letters, all with equal counts. One letter: the longest run. Two letters (x,y): split the string at the third letter and find the longest piece where count(x) − count(y) returns to the same prefix value (hash map of first occurrence). Three letters: prefix pairs (a − b, b − c) repeating. Take the maximum.",
i:"s = \"abbac\"",o:"4",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def longestBalanced(self, s):
        best = 0
        run = 0
        for i, c in enumerate(s):
            run = run + 1 if i and s[i - 1] == c else 1
            best = max(best, run)
        for x, y, z in (('a', 'b', 'c'), ('a', 'c', 'b'), ('b', 'c', 'a')):
            first = {0: -1}
            diff = 0
            for i, c in enumerate(s):
                if c == z:
                    first = {0: i}
                    diff = 0
                    continue
                diff += 1 if c == x else -1
                if diff in first:
                    best = max(best, i - first[diff])
                else:
                    first[diff] = i
        seen = {(0, 0): -1}
        a = b = c2 = 0
        for i, ch in enumerate(s):
            if ch == 'a':
                a += 1
            elif ch == 'b':
                b += 1
            else:
                c2 += 1
            key = (a - b, b - c2)
            if key in seen:
                best = max(best, i - seen[key])
            else:
                seen[key] = i
        return best
`)});
lite({id:1680,slug:"concatenation-of-consecutive-binary-numbers",title:"Concatenation of Consecutive Binary Numbers",level:"Medium",topic:MB,name:"Shift by the bit length each time",
w:"n=3 → '1' '10' '11' = 11011 = 27.",k:"Build the number left to right: result = (result << bit_length(i)) | i for i = 1 … n, modulo 1e9+7.",
i:"n = 3",o:"27",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def concatenatedBinary(self, n):
        MOD = 10**9 + 7
        res = 0
        for i in range(1, n + 1):
            res = ((res << i.bit_length()) | i) % MOD
        return res
`)});
lite({id:1727,slug:"largest-submatrix-with-rearrangements",title:"Largest Submatrix With Rearrangements",level:"Medium",topic:MX,name:"Column heights, sort each row descending",
w:"[[0,0,1],[1,1,1],[1,0,1]] → rearrange columns to get a 2×2 block of ones → 4.",k:"Columns can be reordered freely. For each row compute the heights of consecutive ones ending there, sort the heights descending, and the best rectangle in this row has area max over j of height[j] × (j + 1).",
i:"matrix = [[0,0,1],[1,1,1],[1,0,1]]",o:"4",time:"O(m·n log n)",space:"O(n)",
code:C(`
class Solution:
    def largestSubmatrix(self, matrix):
        m, n = len(matrix), len(matrix[0])
        h = [0] * n
        best = 0
        for i in range(m):
            for j in range(n):
                h[j] = h[j] + 1 if matrix[i][j] else 0
            for j, v in enumerate(sorted(h, reverse=True)):
                best = max(best, v * (j + 1))
        return best
`)});
lite({id:3418,slug:"maximum-amount-of-money-robot-can-earn",title:"Maximum Amount of Money Robot Can Earn",level:"Medium",topic:DP,name:"DP over cell and neutralisations used",
w:"[[0,1,-1],[1,-2,3],[2,-3,4]] → neutralise two robbers, end with 8.",k:"The robot moves right or down. A negative cell is a robber that steals that amount unless the robot neutralises it, which can be done at most twice. dp[i][j][t] = best total at (i, j) having neutralised t robbers: from the top or left cell add coins (or, for a robber with t > 0 left, skip the loss and use one neutralisation).",
i:"coins = [[0,1,-1],[1,-2,3],[2,-3,4]]",o:"8",time:"O(m·n·3)",space:"O(m·n·3)",
code:C(`
class Solution:
    def maximumAmount(self, coins):
        m, n = len(coins), len(coins[0])
        NEG = float('-inf')
        dp = [[[NEG] * 3 for _ in range(n)] for _ in range(m)]
        for i in range(m):
            for j in range(n):
                v = coins[i][j]
                for t in range(3):
                    prev = NEG
                    if i == 0 and j == 0:
                        prev = 0
                    else:
                        if i:
                            prev = max(prev, dp[i - 1][j][t])
                        if j:
                            prev = max(prev, dp[i][j - 1][t])
                    cand = prev + v
                    if v < 0 and t > 0:
                        before = 0 if (i == 0 and j == 0) else max(dp[i - 1][j][t - 1] if i else NEG, dp[i][j - 1][t - 1] if j else NEG)
                        cand = max(cand, before)
                    dp[i][j][t] = cand
        return max(dp[m - 1][n - 1])
`)});
lite({id:932,slug:"beautiful-array",title:"Beautiful Array",level:"Medium",topic:DP,name:"Divide and conquer: odds then evens",
w:"n=4 → [2,1,4,3].",k:"An array with no i<k<j where 2·nums[k] = nums[i] + nums[j] stays beautiful under x → 2x−1 and x → 2x. So build beautiful(n) from beautiful of the odd count mapped to odd numbers followed by beautiful of the even count mapped to even numbers.",
i:"n = 4",o:"[1, 3, 2, 4]",time:"O(n log n)",space:"O(n)",
code:C(`
class Solution:
    def beautifulArray(self, n):
        res = [1]
        while len(res) < n:
            res = [2 * x - 1 for x in res] + [2 * x for x in res]
        return [x for x in res if x <= n]
`)});
lite({id:1722,slug:"minimize-hamming-distance-after-swap-operations",title:"Minimize Hamming Distance After Swap Operations",level:"Medium",topic:UF,name:"Union-Find groups, match multisets",
w:"source [1,2,3,4], target [2,1,4,5], swaps (0,1),(2,3) → hamming distance 1.",k:"Indices connected by allowed swaps can be permuted arbitrarily. Group them with Union-Find; within a group count how many source values can match target values (multiset intersection). The distance is n minus the total matches.",
i:"source = [1,2,3,4], target = [2,1,4,5], allowedSwaps = [[0,1],[2,3]]",o:"1",time:"O(n α)",space:"O(n)",
code:C(`
class Solution:
    def minimumHammingDistance(self, source, target, allowedSwaps):
        n = len(source)
        p = list(range(n))
        def find(x):
            while p[x] != x:
                p[x] = p[p[x]]
                x = p[x]
            return x
        for a, b in allowedSwaps:
            p[find(a)] = find(b)
        groups = defaultdict(list)
        for i in range(n):
            groups[find(i)].append(i)
        match = 0
        for idx in groups.values():
            have = Counter(source[i] for i in idx)
            want = Counter(target[i] for i in idx)
            match += sum((have & want).values())
        return n - match
`)});
lite({id:375,slug:"guess-number-higher-or-lower-ii",title:"Guess Number Higher or Lower II",level:"Medium",topic:DP,name:"Interval DP: minimise the worst-case cost",
w:"n=10: a smart strategy guarantees winning with at most 16 dollars.",k:"cost(l, r) = the money needed to guarantee a win in [l, r]. Guessing x costs x plus the worse of the left part and right part: x + max(cost(l, x−1), cost(x+1, r)). Pick the x that minimises it; an empty or one-number range costs 0.",
i:"n = 10",o:"16",time:"O(n³)",space:"O(n²)",
code:C(`
class Solution:
    def getMoneyAmount(self, n):
        @lru_cache(None)
        def cost(l, r):
            if l >= r:
                return 0
            return min(x + max(cost(l, x - 1), cost(x + 1, r)) for x in range(l, r + 1))
        return cost(1, n)
`)});
lite({id:1721,slug:"swapping-nodes-in-a-linked-list",title:"Swapping Nodes in a Linked List",level:"Medium",topic:LL,name:"Find the k-th from the front and from the back, swap values",
w:"1→2→3→4→5, k=2: swap the 2nd node from each end → 1→4→3→2→5.",k:"Walk to the k-th node from the front. A second pointer started at the head then advances together with a pointer that continues to the end; when the lead reaches the end the second pointer is the k-th from the back. Swap the two values.",
i:"head = [1,2,3,4,5], k = 2",o:"[1, 4, 3, 2, 5]",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def swapNodes(self, head, k):
        first = head
        for _ in range(k - 1):
            first = first.next
        second = head
        fast = first
        while fast.next:
            fast = fast.next
            second = second.next
        first.val, second.val = second.val, first.val
        return head
`)});
lite({id:1952,slug:"three-divisors",title:"Three Divisors",level:"Easy",topic:MB,name:"Exactly three divisors",
w:"n=4 has divisors 1, 2, 4 → true.",k:"A number has exactly three divisors only if it is the square of a prime. Count its divisors up to √n.",
i:"n = 4",o:"true",time:"O(√n)",space:"O(1)",
code:C(`
class Solution:
    def isThree(self, n):
        return sum(1 for d in range(1, n + 1) if n % d == 0) == 3
`)});
lite({id:447,slug:"number-of-boomerangs",title:"Number of Boomerangs",level:"Medium",topic:HM,name:"Group the other points by distance from each point",
w:"Points (0,0), (1,0), (2,0): from (1,0) the other two are equidistant → 2 boomerangs.",k:"A boomerang is (i, j, k) with dist(i, j) = dist(i, k). For each point i count the other points by squared distance; for a distance with c points there are c(c−1) ordered pairs (j, k).",
i:"points = [[0,0],[1,0],[2,0]]",o:"2",time:"O(n²)",space:"O(n)",
code:C(`
class Solution:
    def numberOfBoomerangs(self, points):
        res = 0
        for x1, y1 in points:
            cnt = Counter((x1 - x2) ** 2 + (y1 - y2) ** 2 for x2, y2 in points)
            res += sum(c * (c - 1) for c in cnt.values())
        return res
`)});
lite({id:2144,slug:"minimum-cost-of-buying-candies-with-discount",title:"Minimum Cost of Buying Candies With Discount",level:"Easy",topic:GD,name:"Sort descending; every third candy is free",
w:"[6,5,7,9,2,2] → pay 9 + 7 + 5 + 2? → every third from the top is free: total 23.",k:"When you buy two candies you get the cheapest of the next ones free (not more expensive than either). Sort the costs descending and skip every third.",
i:"cost = [6,5,7,9,2,2]",o:"23",time:"O(n log n)",space:"O(n)",
code:C(`
class Solution:
    def minimumCost(self, cost):
        cost = sorted(cost, reverse=True)
        return sum(c for i, c in enumerate(cost) if i % 3 != 2)
`)});
lite({id:299,slug:"bulls-and-cows",title:"Bulls and Cows",level:"Medium",topic:HM,name:"Count exact matches, then common leftovers",
w:"secret 1807, guess 7810: one bull (8) and three cows (1, 7, 0) → '1A3B'.",k:"Bulls are positions with the same digit. For the remaining digits count how many of each digit occur in secret and guess; the cows are the sum over digits of the smaller count.",
i:"secret = \"1807\", guess = \"7810\"",o:"\"1A3B\"",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def getHint(self, secret, guess):
        bulls = sum(a == b for a, b in zip(secret, guess))
        common = sum((Counter(secret) & Counter(guess)).values())
        return "%dA%dB" % (bulls, common - bulls)
`)});
lite({id:3633,slug:"earliest-finish-time-for-land-and-water-rides-i",title:"Earliest Finish Time for Land and Water Rides I",level:"Easy",topic:GD,name:"Try both orders and every pair of rides",
w:"Land ride 2+4=6 then water ride starting at 6 for 3 → finishes at 9.",k:"You must take one land ride and one water ride, in either order; a ride can only start at or after its opening time and after the previous ride ended. Try every pair in both orders and keep the earliest finish.",
i:"landStartTime = [2,8], landDuration = [4,1], waterStartTime = [6], waterDuration = [3]",o:"9",time:"O(l·w)",space:"O(1)",
code:C(`
class Solution:
    def earliestFinishTime(self, landStartTime, landDuration, waterStartTime, waterDuration):
        best = float('inf')
        for ls, ld in zip(landStartTime, landDuration):
            for ws, wd in zip(waterStartTime, waterDuration):
                best = min(best, max(ls + ld, ws) + wd, max(ws + wd, ls) + ld)
        return best
`)});
lite({id:3559,slug:"number-of-ways-to-assign-edge-weights-ii",title:"Number of Ways to Assign Edge Weights II",level:"Hard",topic:BT,name:"Path length via LCA, then 2^(d−1)",
w:"Path with 2 edges: the weights must sum to an odd number → 2 ways (1,2 or 2,1).",k:"Every edge has weight 1 or 2; a path of d edges has an odd sum for exactly half of the 2^d assignments, i.e. 2^(d−1) (and 0 if d = 0). For each query find d = depth[u] + depth[v] − 2·depth[lca(u, v)] with binary lifting (a table of 2^j-th ancestors).",
i:"edges = [[1,2],[1,3],[3,4],[3,5]], queries = [[1,4],[3,4],[2,5]]",o:"[2, 1, 4]",time:"O((n + q) log n)",space:"O(n log n)",
code:C(`
class Solution:
    def assignEdgeWeights(self, edges, queries):
        MOD = 10**9 + 7
        n = len(edges) + 1
        g = [[] for _ in range(n + 1)]
        for a, b in edges:
            g[a].append(b)
            g[b].append(a)
        LOG = max(1, n.bit_length())
        up = [[0] * (n + 1) for _ in range(LOG)]
        depth = [0] * (n + 1)
        seen = [False] * (n + 1)
        seen[1] = True
        q = deque([1])
        while q:
            u = q.popleft()
            for v in g[u]:
                if not seen[v]:
                    seen[v] = True
                    depth[v] = depth[u] + 1
                    up[0][v] = u
                    q.append(v)
        for j in range(1, LOG):
            for v in range(1, n + 1):
                up[j][v] = up[j - 1][up[j - 1][v]]
        def lca(a, b):
            if depth[a] < depth[b]:
                a, b = b, a
            diff = depth[a] - depth[b]
            for j in range(LOG):
                if (diff >> j) & 1:
                    a = up[j][a]
            if a == b:
                return a
            for j in range(LOG - 1, -1, -1):
                if up[j][a] != up[j][b]:
                    a, b = up[j][a], up[j][b]
            return up[0][a]
        res = []
        for u, v in queries:
            d = depth[u] + depth[v] - 2 * depth[lca(u, v)]
            res.append(pow(2, d - 1, MOD) if d else 0)
        return res
`)});
lite({id:3612,slug:"process-string-with-special-operations-i",title:"Process String with Special Operations I",level:"Medium",topic:ARR,name:"Simulate with a list",
w:"'a#b%*' → a, aa, aab, baa, ba.",k:"Keep the result in a list: a letter appends, '*' removes the last letter if any, '#' doubles the list, '%' reverses it.",
i:"s = \"a#b%*\"",o:"\"ba\"",time:"O(n·2ⁿ) worst",space:"O(result)",
code:C(`
class Solution:
    def processStr(self, s):
        res = []
        for c in s:
            if c == '*':
                if res:
                    res.pop()
            elif c == '#':
                res = res + res
            elif c == '%':
                res.reverse()
            else:
                res.append(c)
        return ''.join(res)
`)});
lite({id:3020,slug:"find-the-maximum-number-of-elements-in-subset",title:"Find the Maximum Number of Elements in Subset",level:"Medium",topic:HM,name:"Follow the chain x, x², x⁴ … with counts",
w:"[5,4,1,2,2]: the subset [2,4,2] has the pattern x, x², x → 3.",k:"A valid subset looks like x, x², x⁴, …, x^k, …, x⁴, x², x. For each value x ≠ 1 follow the chain x → x² → x⁴ … while at least two copies exist (each adds 2 elements); at the end add 1 if a single copy of the next power exists, otherwise drop the last pair's top (−1). Value 1 is special because 1² = 1: use the largest odd count of 1s.",
i:"nums = [5,4,1,2,2]",o:"3",time:"O(n log log max)",space:"O(n)",
code:C(`
class Solution:
    def maximumLength(self, nums):
        cnt = Counter(nums)
        best = 1
        if cnt[1]:
            best = cnt[1] if cnt[1] % 2 else cnt[1] - 1
        for x in cnt:
            if x == 1:
                continue
            length = 0
            y = x
            while cnt.get(y, 0) >= 2:
                length += 2
                y *= y
            length += 1 if cnt.get(y, 0) >= 1 else -1
            best = max(best, length)
        return best
`)});
lite({id:1301,slug:"number-of-paths-with-max-score",title:"Number of Paths with Max Score",level:"Hard",topic:DP,name:"DP from S: best score and number of ways",
w:"['E23','2X2','12S'] → maximum score 7 reached in 1 way.",k:"Starting at the bottom-right 'S' you move up, left or diagonally up-left to the top-left 'E', collecting digits ('X' blocks). dp[i][j] = (best score, number of ways) from S: take the maximum over the three predecessor cells (those reachable) and add the cell's digit; ways add up when scores tie. Ways are modulo 1e9+7; answer [0, 0] if E is unreachable.",
i:"board = [\"E23\",\"2X2\",\"12S\"]",o:"[7, 1]",time:"O(n²)",space:"O(n²)",
code:C(`
class Solution:
    def pathsWithMaxScore(self, board):
        MOD = 10**9 + 7
        n = len(board)
        dp = [[(-1, 0)] * n for _ in range(n)]
        dp[n - 1][n - 1] = (0, 1)
        for i in range(n - 1, -1, -1):
            for j in range(n - 1, -1, -1):
                if board[i][j] == 'X' or (i == n - 1 and j == n - 1):
                    continue
                best, ways = -1, 0
                for a, b in ((i + 1, j), (i, j + 1), (i + 1, j + 1)):
                    if a < n and b < n and dp[a][b][0] >= 0:
                        s, w = dp[a][b]
                        if s > best:
                            best, ways = s, w
                        elif s == best:
                            ways += w
                if best >= 0:
                    val = 0 if board[i][j] == 'E' else int(board[i][j])
                    dp[i][j] = (best + val, ways % MOD)
        return list(dp[0][0]) if dp[0][0][0] >= 0 else [0, 0]
`)});
lite({id:1288,slug:"remove-covered-intervals",title:"Remove Covered Intervals",level:"Medium",topic:IV,name:"Sort by start, keep those that extend the reach",
w:"[[1,4],[3,6],[2,8]]: [1,4] and [3,6] are covered by [2,8]? only [3,6] → 2 remain.",k:"Sort by start ascending and end descending. Sweep keeping the largest end seen; an interval whose end is not beyond that is covered by an earlier one. Count the intervals that extend the reach.",
i:"intervals = [[1,4],[3,6],[2,8]]",o:"2",time:"O(n log n)",space:"O(1)",
code:C(`
class Solution:
    def removeCoveredIntervals(self, intervals):
        count = 0
        reach = -1
        for s, e in sorted(intervals, key=lambda p: (p[0], -p[1])):
            if e > reach:
                count += 1
                reach = e
        return count
`)});
lite({id:3532,slug:"path-existence-queries-in-a-graph-i",title:"Path Existence Queries in a Graph I",level:"Medium",topic:UF,name:"Sorted values form contiguous components",
w:"nums [2,5,6,8], maxDiff 2: components {0}, {1,2,3} → query (1,3) true.",k:"Nodes i and j are adjacent if |nums[i] − nums[j]| ≤ maxDiff and nums is sorted, so connected components are contiguous index ranges: start a new component whenever two consecutive values differ by more than maxDiff. A query is true when both nodes share a component id.",
i:"n = 4, nums = [2,5,6,8], maxDiff = 2, queries = [[0,1],[0,2],[1,3],[2,3]]",o:"[False, False, True, True]",time:"O(n + q)",space:"O(n)",
code:C(`
class Solution:
    def pathExistenceQueries(self, n, nums, maxDiff, queries):
        comp = [0] * n
        for i in range(1, n):
            comp[i] = comp[i - 1] + (nums[i] - nums[i - 1] > maxDiff)
        return [comp[u] == comp[v] for u, v in queries]
`)});
lite({id:3336,slug:"find-the-number-of-subsequences-with-equal-gcd",title:"Find the Number of Subsequences With Equal GCD",level:"Hard",topic:DP,name:"DP on the pair (gcd of seq 1, gcd of seq 2)",
w:"[1,2,3,4] → 10 pairs of disjoint non-empty subsequences with equal GCD (Greatest Common Divisor).",k:"Go through the numbers once; every number is put in seq 1, in seq 2 or in neither. State = (g1, g2), the gcd of each sequence so far (0 for empty). Adding x to seq 1 changes g1 to gcd(g1, x), likewise for seq 2. Count the states; the answer sums the counts of all states (g, g) with g > 0. Modulo 1e9+7.",
i:"nums = [1,2,3,4]",o:"10",time:"O(n·M²)",space:"O(M²)",
code:C(`
class Solution:
    def subsequencePairCount(self, nums):
        MOD = 10**9 + 7
        dp = {(0, 0): 1}
        for x in nums:
            new = defaultdict(int)
            for (a, b), c in dp.items():
                new[(a, b)] = (new[(a, b)] + c) % MOD
                new[(gcd(a, x), b)] = (new[(gcd(a, x), b)] + c) % MOD
                new[(a, gcd(b, x))] = (new[(a, gcd(b, x))] + c) % MOD
            dp = new
        return sum(c for (a, b), c in dp.items() if a == b and a > 0) % MOD
`)});
lite({id:1081,slug:"smallest-subsequence-of-distinct-characters",title:"Smallest Subsequence of Distinct Characters",level:"Medium",topic:STK,name:"Monotonic stack with last occurrences",
w:"'cbacdcbc' → 'acdb'.",k:"Same as 'remove duplicate letters': keep a stack of chosen letters. For each letter not yet on the stack, pop larger letters from the top as long as they occur again later (last-occurrence index), then push it.",
i:"s = \"cbacdcbc\"",o:"\"acdb\"",time:"O(n)",space:"O(26)",
code:C(`
class Solution:
    def smallestSubsequence(self, s):
        last = {c: i for i, c in enumerate(s)}
        st = []
        used = set()
        for i, c in enumerate(s):
            if c in used:
                continue
            while st and st[-1] > c and last[st[-1]] > i:
                used.discard(st.pop())
            st.append(c)
            used.add(c)
        return ''.join(st)
`)});
