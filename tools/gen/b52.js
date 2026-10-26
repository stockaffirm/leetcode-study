const {lite}=require("./lib");
const C=s=>s.replace(/^\n/,"").replace(/\n$/,"").split("\n");
const ARR="Array / String",HM="Hash Map / Set",STK="Stack / Monotonic Stack",BT="Binary Tree",GR="Graph",HP="Heap",DP="Dynamic Programming",GD="Greedy",MB="Math / Bit Manipulation",BS="Binary Search",SRT="Sorting",SW="Sliding Window",MX="Matrix",UF="Union Find / Segment Tree",TP="Two Pointers",IV="Intervals",BTK="Backtracking",DS="Design",LL="Linked List",TR="Trie",PS="Prefix Sum";
// ---- Goldman Sachs
lite({id:1086,slug:"high-five",title:"High Five",level:"Easy",topic:HM,name:"Average of each student's five best scores",
w:"Student 1 has scores 91, 92, 60, 65, 87, 100 → top five 100, 92, 91, 87, 65 → average 87.",k:"Group scores by student id, sort each group descending, average the top five (integer division), and output students in increasing id order.",
i:"items = [[1,91],[1,92],[2,93],[2,97],[1,60],[2,77],[1,65],[1,87],[1,100],[2,100],[2,76]]",o:"[[1, 87], [2, 88]]",time:"O(n log n)",space:"O(n)",
code:C(`
class Solution:
    def highFive(self, items):
        scores = defaultdict(list)
        for sid, s in items:
            scores[sid].append(s)
        return [[sid, sum(sorted(v, reverse=True)[:5]) // 5] for sid, v in sorted(scores.items())]
`)});
lite({id:2097,slug:"valid-arrangement-of-pairs",title:"Valid Arrangement of Pairs",level:"Hard",topic:GR,name:"Eulerian path (Hierholzer)",
w:"Pairs [5,1],[4,5],[11,9],[9,4] chain as 11→9→4→5→1.",k:"Treat each pair as a directed edge start → end. A valid arrangement uses every edge once: an Eulerian path. Its start is the node with out − in = 1 (or any node if all balanced). Run Hierholzer's algorithm with a stack, appending edges when a node is exhausted, then reverse.",
i:"pairs = [[5,1],[4,5],[11,9],[9,4]]",o:"[[11, 9], [9, 4], [4, 5], [5, 1]]",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def validArrangement(self, pairs):
        g = defaultdict(list)
        deg = defaultdict(int)
        for a, b in pairs:
            g[a].append(b)
            deg[a] += 1
            deg[b] -= 1
        start = next((u for u in deg if deg[u] == 1), pairs[0][0])
        path = []
        st = [start]
        while st:
            u = st[-1]
            if g[u]:
                st.append(g[u].pop())
            else:
                path.append(st.pop())
        path.reverse()
        return [[a, b] for a, b in zip(path, path[1:])]
`)});
lite({id:3494,slug:"find-the-minimum-amount-of-time-to-brew-potions",title:"Find the Minimum Amount of Time to Brew Potions",level:"Medium",topic:DP,name:"Finish times, then shift back by the last wizard",
w:"skill [1,5,2,4], mana [5,1,4,2] → the last potion is done at time 110.",k:"Potions pass through wizards without waiting, so for each potion only its start time matters. Keep done[i], the time wizard i finishes the previous potion. For the next potion compute forward the earliest finish at the last wizard (each wizard starts when both it is free and the potion arrives), then walk backwards subtracting work times to get the new done[] values.",
i:"skill = [1,5,2,4], mana = [5,1,4,2]",o:"110",time:"O(n·m)",space:"O(n)",
code:C(`
class Solution:
    def minTime(self, skill, mana):
        n = len(skill)
        done = [0] * n
        for m in mana:
            cur = 0
            for i in range(n):
                cur = max(cur, done[i]) + skill[i] * m
            done[n - 1] = cur
            for i in range(n - 2, -1, -1):
                done[i] = done[i + 1] - skill[i + 1] * m
        return done[-1]
`)});
lite({id:1109,slug:"corporate-flight-bookings",title:"Corporate Flight Bookings",level:"Medium",topic:PS,name:"Difference array",
w:"[[1,2,10],[2,3,20],[2,5,25]], n=5 → seats per flight [10,55,45,25,25].",k:"A booking adds seats to a range of flights. Add the seats at the first flight and subtract them just after the last; a prefix sum then gives every flight's total.",
i:"bookings = [[1,2,10],[2,3,20],[2,5,25]], n = 5",o:"[10, 55, 45, 25, 25]",time:"O(n + b)",space:"O(n)",
code:C(`
class Solution:
    def corpFlightBookings(self, bookings, n):
        diff = [0] * (n + 1)
        for first, last, seats in bookings:
            diff[first - 1] += seats
            diff[last] -= seats
        return list(accumulate(diff[:n]))
`)});
lite({id:3001,slug:"minimum-moves-to-capture-the-queen",title:"Minimum Moves to Capture The Queen",level:"Medium",topic:MX,name:"One move if a piece sees the queen, else two",
w:"Rook (5,3), bishop (3,4), queen (5,2): the rook sees the queen straight up the column → 1.",k:"On an 8×8 board a rook and a bishop try to capture the queen. The answer is 1 if the rook shares a row or column with the queen without the bishop between them, or the bishop shares a diagonal with the queen without the rook between them; otherwise 2 moves always suffice.",
i:"a=5, b=3, c=3, d=4, e=5, f=2",o:"1",time:"O(1)",space:"O(1)",
code:C(`
class Solution:
    def minMovesToCaptureTheQueen(self, a, b, c, d, e, f):
        def between(x, lo, hi):
            return min(lo, hi) < x < max(lo, hi)
        if a == e and not (c == a and between(d, b, f)):
            return 1
        if b == f and not (d == b and between(c, a, e)):
            return 1
        if abs(c - e) == abs(d - f):
            on_line = (a - c) * (f - d) == (b - d) * (e - c)
            if not (on_line and between(a, c, e)):
                return 1
        return 2
`)});
lite({id:3437,slug:"permutations-iii",title:"Permutations III",level:"Medium",topic:BTK,name:"Backtracking with alternating parity",
w:"n=3: 1,2,3 and 3,2,1 alternate odd/even → [[1,2,3],[3,2,1]].",k:"Build permutations of 1…n by backtracking, trying numbers in increasing order so results come out sorted, and only allowing a number whose parity differs from the previous one.",
i:"n = 4",o:"[[1,2,3,4],[1,4,3,2],[2,1,4,3],[2,3,4,1],[3,2,1,4],[3,4,1,2],[4,1,2,3],[4,3,2,1]]",time:"O(n!)",space:"O(n)",
code:C(`
class Solution:
    def permute(self, n):
        res = []
        used = [False] * (n + 1)
        cur = []
        def go():
            if len(cur) == n:
                res.append(cur[:])
                return
            for v in range(1, n + 1):
                if not used[v] and (not cur or (cur[-1] + v) % 2 == 1):
                    used[v] = True
                    cur.append(v)
                    go()
                    cur.pop()
                    used[v] = False
        go()
        return res
`)});
lite({id:2438,slug:"range-product-queries-of-powers",title:"Range Product Queries of Powers",level:"Medium",topic:PS,name:"Powers of two from the bits of n",
w:"n=15 = 1+2+4+8: queries [0,1]→2, [2,2]→4, [0,3]→64.",k:"powers is the sorted list of powers of two in n's binary form. For each query multiply the powers from l to r modulo 1e9+7 (at most ~30 numbers).",
i:"n = 15, queries = [[0,1],[2,2],[0,3]]",o:"[2, 4, 64]",time:"O(q·log n)",space:"O(log n)",
code:C(`
class Solution:
    def productQueries(self, n, queries):
        MOD = 10**9 + 7
        powers = [1 << b for b in range(31) if (n >> b) & 1]
        res = []
        for l, r in queries:
            p = 1
            for v in powers[l:r + 1]:
                p = p * v % MOD
            res.append(p)
        return res
`)});
lite({id:1750,slug:"minimum-length-of-string-after-deleting-similar-ends",title:"Minimum Length of String After Deleting Similar Ends",level:"Medium",topic:TP,name:"Strip equal runs from both ends",
w:"'aabccabba': strip the a's from both ends, then the b's, leaving 'cca' → 3.",k:"While the first and last characters are equal (and the pointers have not met), remove the whole run of that character from both ends. Stop when the ends differ; the answer is what is left.",
i:"s = \"aabccabba\"",o:"3",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def minimumLength(self, s):
        l, r = 0, len(s) - 1
        while l < r and s[l] == s[r]:
            c = s[l]
            while l <= r and s[l] == c:
                l += 1
            while r >= l and s[r] == c:
                r -= 1
        return r - l + 1
`)});
lite({id:1478,slug:"allocate-mailboxes",title:"Allocate Mailboxes",level:"Hard",topic:DP,name:"Partition sorted houses; each group uses its median",
w:"houses [1,4,8,10,20], 3 mailboxes → groups (1,4),(8,10),(20): 3 + 2 + 0 = 5.",k:"Sort the houses and split them into k contiguous groups, each with one mailbox at the group's median (the cheapest spot). cost(i, j) is the total distance to the median of houses i..j. dp[g][j] = min over split points of dp[g−1][i] + cost(i, j−1).",
i:"houses = [1,4,8,10,20], k = 3",o:"5",time:"O(k·n²)",space:"O(n²)",
code:C(`
class Solution:
    def minDistance(self, houses, k):
        houses.sort()
        n = len(houses)
        cost = [[0] * n for _ in range(n)]
        for i in range(n):
            for j in range(i, n):
                mid = houses[(i + j) // 2]
                cost[i][j] = sum(abs(houses[t] - mid) for t in range(i, j + 1))
        INF = float('inf')
        dp = [[INF] * (n + 1) for _ in range(k + 1)]
        dp[0][0] = 0
        for g in range(1, k + 1):
            for j in range(1, n + 1):
                for i in range(g - 1, j):
                    dp[g][j] = min(dp[g][j], dp[g - 1][i] + cost[i][j - 1])
        return dp[k][n]
`)});
lite({id:2087,slug:"minimum-cost-homecoming-of-a-robot-in-a-grid",title:"Minimum Cost Homecoming of a Robot in a Grid",level:"Medium",topic:GD,name:"Pay for every row and column you enter",
w:"From (1,0) to (2,3): enter row 2 (3) and columns 1,2,3 (2 + 6 + 7) → 18.",k:"Every path that moves only toward home enters the same rows and columns, and the cost of a move depends only on the row or column entered. So the minimum is the sum of rowCosts of every row passed (excluding the start row) plus colCosts of every column passed.",
i:"startPos = [1,0], homePos = [2,3], rowCosts = [5,4,3], colCosts = [8,2,6,7]",o:"18",time:"O(m + n)",space:"O(1)",
code:C(`
class Solution:
    def minCost(self, startPos, homePos, rowCosts, colCosts):
        (r1, c1), (r2, c2) = startPos, homePos
        step_r = 1 if r2 > r1 else -1
        step_c = 1 if c2 > c1 else -1
        total = 0
        for r in range(r1 + step_r, r2 + step_r, step_r) if r1 != r2 else []:
            total += rowCosts[r]
        for c in range(c1 + step_c, c2 + step_c, step_c) if c1 != c2 else []:
            total += colCosts[c]
        return total
`)});
lite({id:2154,slug:"keep-multiplying-found-values-by-two",title:"Keep Multiplying Found Values by Two",level:"Easy",topic:HM,name:"Double while present",
w:"[5,3,6,1,12], original 3 → 3, 6, 12, 24 → 24.",k:"Put the numbers in a set. While the current value is in the set, double it. Return the first value not found.",
i:"nums = [5,3,6,1,12], original = 3",o:"24",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def findFinalValue(self, nums, original):
        s = set(nums)
        while original in s:
            original *= 2
        return original
`)});
lite({id:2266,slug:"count-number-of-texts",title:"Count Number of Texts",level:"Medium",topic:DP,name:"Break each run of the same key into letters",
w:"'22233' → 222 → {aaa, ab, ba, c} (4), 33 → {ee, f} (2) → 8.",k:"Texts are phone-key presses; a run of the same digit can be split into groups of up to 3 presses (4 for keys 7 and 9). dp[i] = number of ways to decode the first i presses = sum of dp[i−1], dp[i−2], dp[i−3] (and dp[i−4] for 7/9) while the previous presses are the same key.",
i:"pressedKeys = \"22233\"",o:"8",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def countTexts(self, pressedKeys):
        MOD = 10**9 + 7
        n = len(pressedKeys)
        dp = [0] * (n + 1)
        dp[0] = 1
        for i in range(1, n + 1):
            c = pressedKeys[i - 1]
            limit = 4 if c in '79' else 3
            j = i
            while j > 0 and i - j < limit and pressedKeys[j - 1] == c:
                dp[i] += dp[j - 1]
                j -= 1
            dp[i] %= MOD
        return dp[n]
`)});
lite({id:2420,slug:"find-all-good-indices",title:"Find All Good Indices",level:"Medium",topic:PS,name:"Run lengths of non-increasing / non-decreasing",
w:"[2,1,1,1,3,4,1], k=2: index 2 and 3 have two non-increasing before and two non-decreasing after → [2,3].",k:"Index i is good if the k elements before it are non-increasing and the k after it are non-decreasing. Precompute for every position the length of the non-increasing run ending there and of the non-decreasing run starting there; i is good if both are at least k (looking one step away from i).",
i:"nums = [2,1,1,1,3,4,1], k = 2",o:"[2, 3]",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def goodIndices(self, nums, k):
        n = len(nums)
        dec = [1] * n
        for i in range(1, n):
            if nums[i] <= nums[i - 1]:
                dec[i] = dec[i - 1] + 1
        inc = [1] * n
        for i in range(n - 2, -1, -1):
            if nums[i] <= nums[i + 1]:
                inc[i] = inc[i + 1] + 1
        return [i for i in range(k, n - k) if dec[i - 1] >= k and inc[i + 1] >= k]
`)});
lite({id:2446,slug:"determine-if-two-events-have-conflict",title:"Determine if Two Events Have Conflict",level:"Easy",topic:IV,name:"Convert times to minutes, test overlap",
w:"['01:15','02:00'] and ['02:00','03:00'] share the instant 02:00 → conflict.",k:"Convert each 'HH:MM' to minutes. Two closed intervals overlap when each starts no later than the other ends.",
i:"event1 = [\"01:15\",\"02:00\"], event2 = [\"02:00\",\"03:00\"]",o:"true",time:"O(1)",space:"O(1)",
code:C(`
class Solution:
    def haveConflict(self, event1, event2):
        def m(t):
            h, mi = t.split(':')
            return int(h) * 60 + int(mi)
        return m(event1[0]) <= m(event2[1]) and m(event2[0]) <= m(event1[1])
`)});
lite({id:2550,slug:"count-collisions-of-monkeys-on-a-polygon",title:"Count Collisions of Monkeys on a Polygon",level:"Medium",topic:MB,name:"2ⁿ − 2",
w:"n=3 monkeys: 8 direction choices, only all-clockwise and all-counter-clockwise avoid collisions → 6 collide.",k:"Each monkey picks one of 2 directions: 2ⁿ ways. Only the two ways where everyone goes the same direction have no collision, so the answer is 2ⁿ − 2 modulo 1e9+7.",
i:"n = 3",o:"6",time:"O(log n)",space:"O(1)",
code:C(`
class Solution:
    def monkeyMove(self, n):
        MOD = 10**9 + 7
        return (pow(2, n, MOD) - 2) % MOD
`)});
lite({id:2191,slug:"sort-the-jumbled-numbers",title:"Sort the Jumbled Numbers",level:"Medium",topic:SRT,name:"Sort by mapped value (stable)",
w:"mapping [8,9,4,0,2,1,3,5,7,6]: 991→669, 338→007, 38→07 → sorted order 338, 38, 991.",k:"Each digit d is replaced by mapping[d] to get the number's mapped value. Sort the original numbers by their mapped value; Python's sort is stable, so equal mapped values keep their original order.",
i:"mapping = [8,9,4,0,2,1,3,5,7,6], nums = [991,338,38]",o:"[338, 38, 991]",time:"O(n log n)",space:"O(n)",
code:C(`
class Solution:
    def sortJumbled(self, mapping, nums):
        def mapped(x):
            return int(''.join(str(mapping[int(d)]) for d in str(x)))
        return sorted(nums, key=mapped)
`)});
lite({id:1427,slug:"perform-string-shifts",title:"Perform String Shifts",level:"Easy",topic:ARR,name:"Add up the net shift",
w:"'abc' with [0,1] (left 1) and [1,2] (right 2): net right 1 → 'cab'.",k:"Left shifts and right shifts cancel. Sum them into one net amount (left positive), reduce modulo the length, and rotate once.",
i:"s = \"abc\", shift = [[0,1],[1,2]]",o:"\"cab\"",time:"O(n + m)",space:"O(n)",
code:C(`
class Solution:
    def stringShift(self, s, shift):
        net = sum(a if d == 0 else -a for d, a in shift) % len(s)
        return s[net:] + s[:net]
`)});
lite({id:3168,slug:"minimum-number-of-chairs-in-a-waiting-room",title:"Minimum Number of Chairs in a Waiting Room",level:"Easy",topic:ARR,name:"Maximum number of people inside at once",
w:"'ELELEEL': the room holds at most 2 people at the same time → 2 chairs.",k:"E means a person enters (+1) and L means a person leaves (−1). The chairs needed equal the largest running total.",
i:"s = \"ELELEEL\"",o:"2",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def minimumChairs(self, s):
        cur = best = 0
        for c in s:
            cur += 1 if c == 'E' else -1
            best = max(best, cur)
        return best
`)});
lite({id:3167,slug:"better-compression-of-string",title:"Better Compression of String",level:"Medium",topic:HM,name:"Sum the counts per letter, print in alphabetical order",
w:"'a3c9b2c1' → a:3, b:2, c:9+1=10 → 'a3b2c10'.",k:"The compressed string is pairs of a letter and a (possibly multi-digit) count. Parse the pairs, add counts per letter, and write the letters alphabetically with their totals.",
i:"compressed = \"a3c9b2c1\"",o:"\"a3b2c10\"",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def betterCompression(self, compressed):
        cnt = Counter()
        i = 0
        while i < len(compressed):
            ch = compressed[i]
            i += 1
            j = i
            while j < len(compressed) and compressed[j].isdigit():
                j += 1
            cnt[ch] += int(compressed[i:j])
            i = j
        return ''.join(c + str(cnt[c]) for c in sorted(cnt))
`)});
lite({id:1771,slug:"maximize-palindrome-length-from-subsequences",title:"Maximize Palindrome Length From Subsequences",level:"Hard",topic:DP,name:"Longest palindromic subsequence of word1 + word2 that uses both",
w:"'cacb' and 'cbba': the best palindrome using letters from both words has length 5.",k:"Concatenate the words and compute the longest palindromic subsequence dp[i][j]. A candidate only counts if its outer letters come from different words: when s[i] == s[j] with i in word1 and j in word2, record dp[i][j] as an answer.",
i:"word1 = \"cacb\", word2 = \"cbba\"",o:"5",time:"O((n+m)²)",space:"O((n+m)²)",
code:C(`
class Solution:
    def longestPalindrome(self, word1, word2):
        s = word1 + word2
        n, a = len(s), len(word1)
        dp = [[0] * n for _ in range(n)]
        best = 0
        for i in range(n - 1, -1, -1):
            dp[i][i] = 1
            for j in range(i + 1, n):
                if s[i] == s[j]:
                    dp[i][j] = dp[i + 1][j - 1] + 2
                    if i < a <= j:
                        best = max(best, dp[i][j])
                else:
                    dp[i][j] = max(dp[i + 1][j], dp[i][j - 1])
        return best
`)});
lite({id:3885,slug:"design-event-manager",title:"Design Event Manager",level:"Medium",topic:DS,name:"Max-heap with lazy deletion",
w:"Events (5,7),(2,7),(9,4): poll → 2 (tie on priority 7, smaller id); update 9 to 7; poll → 5; poll → 9.",k:"Keep a heap ordered by (priority descending, id ascending). Updating an event pushes a new entry and records the current priority in a dict; stale heap entries are ignored when popped. pollHighest pops until it finds an entry that matches the dict, removes the event and returns its id.",
i:"EventManager([[5,7],[2,7],[9,4]]); pollHighest(); updatePriority(9,7); pollHighest(); pollHighest()",o:"[2, None, 5, 9]",time:"O(log n) per call",space:"O(n)",
code:C(`
class EventManager:
    def __init__(self, events):
        self.cur = {}
        self.heap = []
        for eid, p in events:
            self.cur[eid] = p
            self.heap.append((-p, eid))
        heapify(self.heap)

    def updatePriority(self, eventId, newPriority):
        self.cur[eventId] = newPriority
        heappush(self.heap, (-newPriority, eventId))

    def pollHighest(self):
        while self.heap:
            p, eid = heappop(self.heap)
            if self.cur.get(eid) == -p:
                del self.cur[eid]
                return eid
        return -1
`)});
lite({id:1446,slug:"consecutive-characters",title:"Consecutive Characters",level:"Easy",topic:ARR,name:"Longest run of one letter",
w:"'leetcode' → 'ee' is the longest run → 2.",k:"Walk the string with a run counter that resets when the letter changes; keep the maximum.",
i:"s = \"leetcode\"",o:"2",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def maxPower(self, s):
        best = run = 1
        for a, b in zip(s, s[1:]):
            run = run + 1 if a == b else 1
            best = max(best, run)
        return best
`)});
lite({id:2375,slug:"construct-smallest-number-from-di-string",title:"Construct Smallest Number From DI String",level:"Medium",topic:STK,name:"Stack reverses every D-run",
w:"'IIIDIDDD' → 123549876.",k:"Write digits 1, 2, 3 … in order, but for every group of consecutive D's reverse the matching digits. A stack does this: push each digit, and pop everything whenever you reach an I (or the end).",
i:"pattern = \"IIIDIDDD\"",o:"\"123549876\"",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def smallestNumber(self, pattern):
        res = []
        st = []
        for i in range(len(pattern) + 1):
            st.append(str(i + 1))
            if i == len(pattern) or pattern[i] == 'I':
                while st:
                    res.append(st.pop())
        return ''.join(res)
`)});
lite({id:457,slug:"circular-array-loop",title:"Circular Array Loop",level:"Medium",topic:TP,name:"Follow same-direction jumps, mark dead ends",
w:"[2,-1,1,2,2]: 0 → 2 → 3 → 0 is a cycle of length 3 where every jump is forward → true.",k:"Each element tells how far to jump (mod n). A valid cycle has length > 1 and all jumps in the same direction. From every start follow the jumps while the direction stays the same and the jump is not a self-loop; revisiting a node on this walk means a cycle. Otherwise mark the visited nodes as 0 (dead) so they are never explored again.",
i:"nums = [2,-1,1,2,2]",o:"true",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def circularArrayLoop(self, nums):
        n = len(nums)
        for i in range(n):
            if nums[i] == 0:
                continue
            forward = nums[i] > 0
            seen = set()
            j = i
            while nums[j] != 0 and (nums[j] > 0) == forward:
                nj = (j + nums[j]) % n
                if nj == j:
                    break
                if j in seen:
                    return True
                seen.add(j)
                j = nj
            for p in seen:
                nums[p] = 0
        return False
`)});
lite({id:1202,slug:"smallest-string-with-swaps",title:"Smallest String With Swaps",level:"Medium",topic:UF,name:"Union-Find groups, sort letters inside each group",
w:"'dcab' with pairs [0,3],[1,2]: positions {0,3} sort to 'b','d'; {1,2} to 'a','c' → 'bacd'.",k:"Indices connected by swap pairs (directly or through others) can be permuted freely. Union the pairs; for each group sort its letters and put them back into the group's sorted index positions.",
i:"s = \"dcab\", pairs = [[0,3],[1,2]]",o:"\"bacd\"",time:"O(n log n)",space:"O(n)",
code:C(`
class Solution:
    def smallestStringWithSwaps(self, s, pairs):
        p = list(range(len(s)))
        def find(x):
            while p[x] != x:
                p[x] = p[p[x]]
                x = p[x]
            return x
        for a, b in pairs:
            p[find(a)] = find(b)
        groups = defaultdict(list)
        for i in range(len(s)):
            groups[find(i)].append(i)
        res = list(s)
        for idx in groups.values():
            letters = sorted(s[i] for i in idx)
            for i, ch in zip(idx, letters):
                res[i] = ch
        return ''.join(res)
`)});
lite({id:979,slug:"distribute-coins-in-binary-tree",title:"Distribute Coins in Binary Tree",level:"Medium",topic:BT,name:"Count the coin flow across each edge",
w:"[3,0,0]: move one coin to each child → 2 moves.",k:"Postorder: a subtree with n nodes and c coins must send c − n coins to its parent (negative means it needs coins). Every such coin crosses the edge to the parent once, so add |c − n| for each node.",
i:"root = [3,0,0]",o:"2",time:"O(n)",space:"O(h)",
code:C(`
class Solution:
    def distributeCoins(self, root):
        moves = 0
        def excess(node):
            nonlocal moves
            if not node:
                return 0
            e = excess(node.left) + excess(node.right) + node.val - 1
            moves += abs(e)
            return e
        excess(root)
        return moves
`)});
lite({id:1262,slug:"greatest-sum-divisible-by-three",title:"Greatest Sum Divisible by Three",level:"Medium",topic:DP,name:"Best sum for each remainder",
w:"[3,6,5,1,8] → 3+6+1+8 = 18.",k:"Keep dp[r], the largest sum seen so far with remainder r when divided by 3. For each number, try adding it to every existing remainder class and update the class of the new remainder.",
i:"nums = [3,6,5,1,8]",o:"18",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def maxSumDivThree(self, nums):
        dp = [0, float('-inf'), float('-inf')]
        for x in nums:
            new = dp[:]
            for r in range(3):
                new[(r + x) % 3] = max(new[(r + x) % 3], dp[r] + x)
            dp = new
        return dp[0]
`)});
lite({id:1574,slug:"shortest-subarray-to-be-removed-to-make-array-sorted",title:"Shortest Subarray to be Removed to Make Array Sorted",level:"Medium",topic:TP,name:"Join the sorted prefix with the sorted suffix",
w:"[1,2,3,10,4,2,3,5]: keep [1,2,3] and [3,5] → remove 3 elements.",k:"Find the longest non-decreasing prefix and the longest non-decreasing suffix. Remove everything between, or keep part of both: with two pointers, for every prefix element find the first suffix element that is ≥ it; the removed middle shrinks as the prefix grows.",
i:"arr = [1,2,3,10,4,2,3,5]",o:"3",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def findLengthOfShortestSubarray(self, arr):
        n = len(arr)
        r = n - 1
        while r > 0 and arr[r - 1] <= arr[r]:
            r -= 1
        if r == 0:
            return 0
        best = r
        for l in range(n):
            if l > 0 and arr[l] < arr[l - 1]:
                break
            while r < n and arr[r] < arr[l]:
                r += 1
            best = min(best, r - l - 1)
        return best
`)});
lite({id:945,slug:"minimum-increment-to-make-array-unique",title:"Minimum Increment to Make Array Unique",level:"Medium",topic:GD,name:"Sort and push each value above the previous",
w:"[3,2,1,2,1,7]: sorted 1,1,2,2,3,7 become 1,2,3,4,5,7 → 6 increments.",k:"Sort the numbers. Walk left to right; each number must be at least previous + 1. If it is smaller, raise it to that value and count the increments.",
i:"nums = [3,2,1,2,1,7]",o:"6",time:"O(n log n)",space:"O(1)",
code:C(`
class Solution:
    def minIncrementForUnique(self, nums):
        nums.sort()
        moves = 0
        for i in range(1, len(nums)):
            if nums[i] <= nums[i - 1]:
                need = nums[i - 1] + 1
                moves += need - nums[i]
                nums[i] = need
        return moves
`)});
lite({id:1395,slug:"count-number-of-teams",title:"Count Number of Teams",level:"Medium",topic:ARR,name:"For each middle soldier, smaller/larger on both sides",
w:"[2,5,3,4,1]: teams (2,3,4), (5,4,1), (5,3,1) → 3.",k:"A team is an increasing or decreasing triple i<j<k. Fix the middle j: the increasing teams are (smaller on the left) × (larger on the right), the decreasing teams are (larger on the left) × (smaller on the right).",
i:"rating = [2,5,3,4,1]",o:"3",time:"O(n²)",space:"O(1)",
code:C(`
class Solution:
    def numTeams(self, rating):
        n = len(rating)
        res = 0
        for j in range(n):
            ls = sum(rating[i] < rating[j] for i in range(j))
            lg = j - ls
            rs = sum(rating[k] < rating[j] for k in range(j + 1, n))
            rg = n - j - 1 - rs
            res += ls * rg + lg * rs
        return res
`)});
lite({id:779,slug:"k-th-symbol-in-grammar",title:"K-th Symbol in Grammar",level:"Medium",topic:MB,name:"Parity of the set bits of k − 1",
w:"Row 2 is 01: the 1st symbol is 0, the 2nd is 1.",k:"Each row is the previous one with 0 → 01 and 1 → 10. The k-th symbol is the parity of the number of 1 bits in k − 1 (the Thue–Morse sequence).",
i:"n = 2, k = 2",o:"1",time:"O(log k)",space:"O(1)",
code:C(`
class Solution:
    def kthGrammar(self, n, k):
        return bin(k - 1).count('1') % 2
`)});
lite({id:2734,slug:"lexicographically-smallest-string-after-substring-operation",title:"Lexicographically Smallest String After Substring Operation",level:"Medium",topic:GD,name:"Decrement the first run that is not 'a'",
w:"'cbabc' → decrement 'cb' to 'ba' → 'baabc'.",k:"The operation replaces every letter of one chosen substring by its previous letter ('a' becomes 'z'). To make the string smallest, start at the first letter that is not 'a' and decrement until the next 'a'. If the string is all 'a', change only the last letter to 'z'.",
i:"s = \"cbabc\"",o:"\"baabc\"",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def smallestString(self, s):
        a = list(s)
        i = 0
        while i < len(a) and a[i] == 'a':
            i += 1
        if i == len(a):
            a[-1] = 'z'
            return ''.join(a)
        while i < len(a) and a[i] != 'a':
            a[i] = chr(ord(a[i]) - 1)
            i += 1
        return ''.join(a)
`)});
lite({id:873,slug:"length-of-longest-fibonacci-subsequence",title:"Length of Longest Fibonacci Subsequence",level:"Medium",topic:DP,name:"DP on the last two elements",
w:"[1,2,3,4,5,6,7,8] → 1,2,3,5,8 has length 5.",k:"dp[(j,k)] is the length of the longest Fibonacci-like subsequence ending in arr[j], arr[k]. For a pair, look for the previous term arr[k] − arr[j] (must be smaller than arr[j] and present) and extend its chain by one. Answer is the best length ≥ 3, else 0.",
i:"arr = [1,2,3,4,5,6,7,8]",o:"5",time:"O(n²)",space:"O(n²)",
code:C(`
class Solution:
    def lenLongestFibSubseq(self, arr):
        idx = {v: i for i, v in enumerate(arr)}
        dp = {}
        best = 0
        for k in range(len(arr)):
            for j in range(k):
                i = idx.get(arr[k] - arr[j])
                if i is not None and i < j:
                    dp[(j, k)] = dp.get((i, j), 2) + 1
                    best = max(best, dp[(j, k)])
        return best
`)});
lite({id:2007,slug:"find-original-array-from-doubled-array",title:"Find Original Array From Doubled Array",level:"Medium",topic:SRT,name:"Match smallest with its double",
w:"[1,3,4,2,6,8] = original [1,3,4] plus doubles [2,6,8] → [1,3,4].",k:"The array holds each original value x and also 2x. Sort and count. For the smallest remaining value x it must be an original, so consume one x and one 2x; if there is no 2x left the array is not doubled.",
i:"changed = [1,3,4,2,6,8]",o:"[1, 3, 4]",time:"O(n log n)",space:"O(n)",
code:C(`
class Solution:
    def findOriginalArray(self, changed):
        if len(changed) % 2:
            return []
        cnt = Counter(changed)
        res = []
        for x in sorted(cnt):
            if cnt[x] == 0:
                continue
            if x == 0:
                if cnt[0] % 2:
                    return []
                res += [0] * (cnt[0] // 2)
                cnt[0] = 0
                continue
            if cnt[2 * x] < cnt[x]:
                return []
            res += [x] * cnt[x]
            cnt[2 * x] -= cnt[x]
            cnt[x] = 0
        return res
`)});
lite({id:1044,slug:"longest-duplicate-substring",title:"Longest Duplicate Substring",level:"Hard",topic:BS,name:"Binary search the length with a rolling hash",
w:"'banana' → 'ana' occurs twice (overlapping) → 'ana'.",k:"If a duplicate of length L exists, one of every shorter length exists too, so binary search L. Check a length by hashing all substrings of that length with a rolling (prefix) hash and looking for a repeat, confirming equality to rule out collisions.",
i:"s = \"banana\"",o:"\"ana\"",time:"O(n log n)",space:"O(n)",
code:C(`
class Solution:
    def longestDupSubstring(self, s):
        n = len(s)
        M = (1 << 61) - 1
        B = 131
        pre = [0] * (n + 1)
        pw = [1] * (n + 1)
        for i, c in enumerate(s):
            pre[i + 1] = (pre[i] * B + ord(c)) % M
            pw[i + 1] = pw[i] * B % M
        def find(L):
            seen = {}
            for i in range(n - L + 1):
                h = (pre[i + L] - pre[i] * pw[L]) % M
                if h in seen and s[seen[h]:seen[h] + L] == s[i:i + L]:
                    return i
                seen.setdefault(h, i)
            return -1
        lo, hi, best = 1, n - 1, ""
        while lo <= hi:
            mid = (lo + hi) // 2
            i = find(mid)
            if i >= 0:
                best = s[i:i + mid]
                lo = mid + 1
            else:
                hi = mid - 1
        return best
`)});
lite({id:1106,slug:"parsing-a-boolean-expression",title:"Parsing A Boolean Expression",level:"Hard",topic:STK,name:"Stack of operators and values",
w:"'|(f,f,f,t)' → OR of false, false, false, true → true.",k:"Scan left to right. Push every character except commas and ')'. On ')' pop the values back to the operator ('!', '&', '|'), combine them (not / all / any) and push the result as 't' or 'f'.",
i:"expression = \"|(f,f,f,t)\"",o:"true",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def parseBoolExpr(self, expression):
        st = []
        for c in expression:
            if c == ',' or c == '(':
                continue
            if c == ')':
                vals = []
                while st[-1] not in '!&|':
                    vals.append(st.pop())
                op = st.pop()
                if op == '!':
                    r = vals[0] == 'f'
                elif op == '&':
                    r = all(v == 't' for v in vals)
                else:
                    r = any(v == 't' for v in vals)
                st.append('t' if r else 'f')
            else:
                st.append(c)
        return st[0] == 't'
`)});
lite({id:2714,slug:"find-shortest-path-with-k-hops",title:"Find Shortest Path with K Hops",level:"Hard",topic:GR,name:"Dijkstra on (node, hops used)",
w:"Path 1 → 0 → 2 → 3 with the 4-edge and the 6-edge hopped (cost 0) leaves just the 2-edge → 2.",k:"A hop makes one edge cost 0, at most k times. Run Dijkstra on states (node, hops used): from a state you can pay the edge weight, or if hops remain use a hop and pay 0. The answer is the cheapest distance to the destination over all hop counts.",
i:"n = 4, edges = [[0,1,4],[0,2,2],[2,3,6]], s = 1, d = 3, k = 2",o:"2",time:"O((n·k)·log(n·k))",space:"O(n·k)",
code:C(`
class Solution:
    def shortestPathWithHops(self, n, edges, s, d, k):
        g = [[] for _ in range(n)]
        for a, b, w in edges:
            g[a].append((b, w))
            g[b].append((a, w))
        INF = float('inf')
        dist = [[INF] * (k + 1) for _ in range(n)]
        dist[s][0] = 0
        pq = [(0, s, 0)]
        while pq:
            c, u, h = heappop(pq)
            if c > dist[u][h]:
                continue
            for v, w in g[u]:
                if c + w < dist[v][h]:
                    dist[v][h] = c + w
                    heappush(pq, (c + w, v, h))
                if h < k and c < dist[v][h + 1]:
                    dist[v][h + 1] = c
                    heappush(pq, (c, v, h + 1))
        return min(dist[d])
`)});
lite({id:1247,slug:"minimum-swaps-to-make-strings-equal",title:"Minimum Swaps to Make Strings Equal",level:"Medium",topic:GD,name:"Pair up mismatches",
w:"s1='xy', s2='yx': one x/y mismatch and one y/x mismatch → 2 swaps.",k:"Look only at positions where the strings differ: count (x,y) mismatches and (y,x) mismatches. Two of the same kind are fixed with one swap. If one of each kind is left over, it takes two swaps. If the total number of mismatches is odd, it is impossible (−1).",
i:"s1 = \"xy\", s2 = \"yx\"",o:"2",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def minimumSwap(self, s1, s2):
        xy = sum(a == 'x' and b == 'y' for a, b in zip(s1, s2))
        yx = sum(a == 'y' and b == 'x' for a, b in zip(s1, s2))
        if (xy + yx) % 2:
            return -1
        return xy // 2 + yx // 2 + 2 * (xy % 2)
`)});
lite({id:1277,slug:"count-square-submatrices-with-all-ones",title:"Count Square Submatrices with All Ones",level:"Medium",topic:DP,name:"Largest square ending at each cell",
w:"The sample 3×4 matrix contains 10 + 4 + 1 = 15 all-ones squares.",k:"dp[i][j] is the side of the largest all-ones square whose bottom-right corner is (i, j): 1 + min(up, left, up-left) if the cell is 1. That number is also how many squares end at this cell, so the answer is the sum of dp.",
i:"matrix = [[0,1,1,1],[1,1,1,1],[0,1,1,1]]",o:"15",time:"O(m·n)",space:"O(n)",
code:C(`
class Solution:
    def countSquares(self, matrix):
        m, n = len(matrix), len(matrix[0])
        dp = [[0] * n for _ in range(m)]
        total = 0
        for i in range(m):
            for j in range(n):
                if matrix[i][j]:
                    if i and j:
                        dp[i][j] = 1 + min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1])
                    else:
                        dp[i][j] = 1
                    total += dp[i][j]
        return total
`)});
lite({id:1483,slug:"kth-ancestor-of-a-tree-node",title:"Kth Ancestor of a Tree Node",level:"Hard",topic:DS,name:"Binary lifting table",
w:"Tree parents [-1,0,0,1,1,2,2]: the 1st ancestor of 3 is 1; the 2nd of 5 is 0; the 3rd of 6 does not exist → −1.",k:"Precompute up[j][v], the 2^j-th ancestor of v, from the parent array. To jump k levels, combine the jumps for each set bit of k; if any jump lands on −1 the answer is −1.",
i:"TreeAncestor(7, [-1,0,0,1,1,2,2]); getKthAncestor(3,1); getKthAncestor(5,2); getKthAncestor(6,3)",o:"[1, 0, -1]",time:"O(log n) per query",space:"O(n log n)",
code:C(`
class TreeAncestor:
    def __init__(self, n, parent):
        self.up = [parent[:]]
        for j in range(1, max(1, n.bit_length())):
            prev = self.up[-1]
            self.up.append([prev[prev[v]] if prev[v] >= 0 else -1 for v in range(n)])

    def getKthAncestor(self, node, k):
        for j in range(len(self.up)):
            if (k >> j) & 1:
                node = self.up[j][node]
                if node < 0:
                    return -1
        if k >> len(self.up):
            return -1
        return node
`)});
lite({id:1535,slug:"find-the-winner-of-an-array-game",title:"Find the Winner of an Array Game",level:"Medium",topic:ARR,name:"Champion with a win streak",
w:"[2,1,3,5,4,6,7], k=2: 5 beats 3 and then 4: two wins in a row → 5.",k:"The larger of the first two stays, the smaller goes to the back. Scan once keeping the current champion and its win streak; if the streak reaches k return the champion. If it never does, the champion at the end is the maximum.",
i:"arr = [2,1,3,5,4,6,7], k = 2",o:"5",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def getWinner(self, arr, k):
        champ, wins = arr[0], 0
        for x in arr[1:]:
            if x > champ:
                champ, wins = x, 1
            else:
                wins += 1
            if wins == k:
                return champ
        return champ
`)});
lite({id:154,slug:"find-minimum-in-rotated-sorted-array-ii",title:"Find Minimum in Rotated Sorted Array II",level:"Hard",topic:BS,name:"Binary search, shrink on ties",
w:"[2,2,2,0,1] → minimum 0.",k:"Compare nums[mid] with nums[hi]. If mid is bigger, the minimum is to the right. If smaller, it is at mid or to the left. If equal we cannot tell, so drop one element from the right end.",
i:"nums = [2,2,2,0,1]",o:"0",time:"O(log n) average, O(n) worst",space:"O(1)",
code:C(`
class Solution:
    def findMin(self, nums):
        lo, hi = 0, len(nums) - 1
        while lo < hi:
            mid = (lo + hi) // 2
            if nums[mid] > nums[hi]:
                lo = mid + 1
            elif nums[mid] < nums[hi]:
                hi = mid
            else:
                hi -= 1
        return nums[lo]
`)});
lite({id:2719,slug:"count-of-integers",title:"Count of Integers",level:"Hard",topic:DP,name:"Digit DP with a running digit sum",
w:"Numbers 1…12 with digit sum between 1 and 8: only 9 (sum 9) is excluded → 11.",k:"Count numbers in [0, N] whose digit sum lies in [min_sum, max_sum] with a digit DP (Dynamic Programming): state (position, sum so far, still tight to N). Answer = f(num2) − f(num1) + (1 if num1 itself qualifies), modulo 1e9+7.",
i:"num1 = \"1\", num2 = \"12\", min_sum = 1, max_sum = 8",o:"11",time:"O(len · maxSum · 10)",space:"O(len · maxSum)",
code:C(`
class Solution:
    def count(self, num1, num2, min_sum, max_sum):
        MOD = 10**9 + 7
        def f(num):
            digits = list(map(int, num))
            @lru_cache(None)
            def go(i, s, tight):
                if s > max_sum:
                    return 0
                if i == len(digits):
                    return 1 if s >= min_sum else 0
                lim = digits[i] if tight else 9
                return sum(go(i + 1, s + d, tight and d == lim) for d in range(lim + 1)) % MOD
            return go(0, 0, True)
        ok = 1 if min_sum <= sum(map(int, num1)) <= max_sum else 0
        return (f(num2) - f(num1) + ok) % MOD
`)});
