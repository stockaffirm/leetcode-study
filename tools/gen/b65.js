const {lite}=require("./lib");
const C=s=>s.replace(/^\n/,"").replace(/\n$/,"").split("\n");
const ARR="Array / String",HM="Hash Map / Set",STK="Stack / Monotonic Stack",BT="Binary Tree",GR="Graph",HP="Heap",DP="Dynamic Programming",GD="Greedy",MB="Math / Bit Manipulation",BS="Binary Search",SRT="Sorting",SW="Sliding Window",MX="Matrix",UF="Union Find / Segment Tree",TP="Two Pointers",IV="Intervals",BTK="Backtracking",DS="Design",LL="Linked List",TR="Trie",PS="Prefix Sum";
// ---- Bloomberg (1)
lite({id:1396,slug:"design-underground-system",title:"Design Underground System",level:"Medium",topic:DS,name:"Check-in map + running totals per route",
w:"Customer 45 checks in at Leyton at t=3 and out at Waterloo at t=15: that trip takes 12.",k:"Store each customer's check-in (station, time). On check-out compute the trip time and add it to the total and count of the route (start, end). The average is total / count.",
i:"checkIn(45,'Leyton',3); checkOut(45,'Waterloo',15); getAverageTime('Leyton','Waterloo')",o:"[None, None, 12.0]",time:"O(1) per call",space:"O(n)",
code:C(`
class UndergroundSystem:
    def __init__(self):
        self.inn = {}
        self.route = defaultdict(lambda: [0, 0])

    def checkIn(self, id, stationName, t):
        self.inn[id] = (stationName, t)

    def checkOut(self, id, stationName, t):
        s, t0 = self.inn.pop(id)
        r = self.route[(s, stationName)]
        r[0] += t - t0
        r[1] += 1

    def getAverageTime(self, startStation, endStation):
        total, cnt = self.route[(startStation, endStation)]
        return total / cnt
`)});
lite({id:1274,slug:"number-of-ships-in-a-rectangle",title:"Number of Ships in a Rectangle",level:"Hard",topic:BT,name:"Divide and conquer with the hasShips oracle",
w:"Ships at (1,1), (2,2), (3,3), (5,5): in the rectangle (0,0)–(4,4) there are 3 of them.",k:"You may only ask 'is there at least one ship in this rectangle?'. If the answer is no, return 0. If the rectangle is a single point return 1. Otherwise split it into four quarters and add the counts. Since there are at most 10 ships only a few rectangles are ever refined.",
i:"ships = [[1,1],[2,2],[3,3],[5,5]], topRight = [4,4], bottomLeft = [0,0]",o:"3",time:"O(ships · log size)",space:"O(log size)",
code:C(`
class Solution:
    def countShips(self, sea, topRight, bottomLeft):
        def go(tr, bl):
            if tr.x < bl.x or tr.y < bl.y or not sea.hasShips(tr, bl):
                return 0
            if tr.x == bl.x and tr.y == bl.y:
                return 1
            mx, my = (tr.x + bl.x) // 2, (tr.y + bl.y) // 2
            return (go(Point(mx, my), bl)
                    + go(tr, Point(mx + 1, my + 1))
                    + go(Point(mx, tr.y), Point(bl.x, my + 1))
                    + go(Point(tr.x, my), Point(mx + 1, bl.y)))
        return go(topRight, bottomLeft)
`)});
lite({id:1387,slug:"sort-integers-by-the-power-value",title:"Sort Integers by The Power Value",level:"Medium",topic:SRT,name:"Collatz steps, sort by (power, value)",
w:"Range 12–15, k=2: powers 9, 10, 17, 9 → sorted 12, 13, 15, 14 … the 2nd is 13.",k:"The power of x is the number of Collatz steps (x even → x/2, odd → 3x+1) to reach 1. Compute it with memoisation, sort the numbers in [lo, hi] by (power, value) and return the k-th.",
i:"lo = 12, hi = 15, k = 2",o:"13",time:"O(n log n)",space:"O(n)",
code:C(`
class Solution:
    def getKth(self, lo, hi, k):
        @lru_cache(None)
        def power(x):
            if x == 1:
                return 0
            return 1 + power(x // 2 if x % 2 == 0 else 3 * x + 1)
        return sorted(range(lo, hi + 1), key=lambda x: (power(x), x))[k - 1]
`)});
lite({id:2423,slug:"remove-letter-to-equalize-frequency",title:"Remove Letter To Equalize Frequency",level:"Easy",topic:HM,name:"Try removing one copy of each letter",
w:"'abcc': removing one 'c' leaves a, b, c once each → true.",k:"For each distinct letter remove one occurrence and check whether all remaining letters have the same count.",
i:"word = \"abcc\"",o:"true",time:"O(26·n)",space:"O(1)",
code:C(`
class Solution:
    def equalFrequency(self, word):
        cnt = Counter(word)
        for c in list(cnt):
            cnt[c] -= 1
            vals = {v for v in cnt.values() if v}
            cnt[c] += 1
            if len(vals) == 1:
                return True
        return False
`)});
lite({id:1656,slug:"design-an-ordered-stream",title:"Design an Ordered Stream",level:"Easy",topic:DS,name:"Array of slots and a moving pointer",
w:"insert(3,'c') → [], insert(1,'a') → ['a'], insert(2,'b') → ['b','c'].",k:"Keep an array of n slots and a pointer to the next id expected. insert stores the value, then returns the longest run of filled slots starting at the pointer and advances the pointer.",
i:"OrderedStream(5); insert(3,'ccccc'); insert(1,'aaaaa'); insert(2,'bbbbb'); insert(5,'eeeee'); insert(4,'ddddd')",o:"[None, [], ['aaaaa'], ['bbbbb', 'ccccc'], [], ['ddddd', 'eeeee']]",time:"O(n) total",space:"O(n)",
code:C(`
class OrderedStream:
    def __init__(self, n):
        self.data = [None] * (n + 1)
        self.ptr = 1

    def insert(self, idKey, value):
        self.data[idKey] = value
        out = []
        while self.ptr < len(self.data) and self.data[self.ptr] is not None:
            out.append(self.data[self.ptr])
            self.ptr += 1
        return out
`)});
lite({id:1583,slug:"count-unhappy-friends",title:"Count Unhappy Friends",level:"Medium",topic:ARR,name:"Rank table and a pair check",
w:"Four friends paired (0,1) and (2,3) — friend 1 prefers 3 to 0 and 3 prefers 1 to 2 → both are unhappy → 2.",k:"Build rank[x][y] = how much x likes y. Friend x paired with y is unhappy if there is some u that x prefers over y, where u is paired with v and u also prefers x over v. Check every friend against all friends they prefer more than their partner.",
i:"n = 4, preferences = [[1,2,3],[3,2,0],[3,1,0],[1,2,0]], pairs = [[0,1],[2,3]]",o:"2",time:"O(n²)",space:"O(n²)",
code:C(`
class Solution:
    def unhappyFriends(self, n, preferences, pairs):
        rank = [[0] * n for _ in range(n)]
        for x in range(n):
            for r, y in enumerate(preferences[x]):
                rank[x][y] = r
        partner = [0] * n
        for a, b in pairs:
            partner[a], partner[b] = b, a
        res = 0
        for x in range(n):
            y = partner[x]
            for u in preferences[x]:
                if u == y:
                    break
                v = partner[u]
                if rank[u][x] < rank[u][v]:
                    res += 1
                    break
        return res
`)});
lite({id:386,slug:"lexicographical-numbers",title:"Lexicographical Numbers",level:"Medium",topic:BTK,name:"Walk the 10-ary trie in order",
w:"n=13 → [1,10,11,12,13,2,3,4,5,6,7,8,9].",k:"Start at 1. Next number: if cur × 10 ≤ n go deeper; otherwise move to cur + 1, first stepping up (cur //= 10) while cur is n or ends in 9. Repeat n times.",
i:"n = 13",o:"[1, 10, 11, 12, 13, 2, 3, 4, 5, 6, 7, 8, 9]",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def lexicalOrder(self, n):
        res = []
        cur = 1
        for _ in range(n):
            res.append(cur)
            if cur * 10 <= n:
                cur *= 10
            else:
                while cur % 10 == 9 or cur + 1 > n:
                    cur //= 10
                cur += 1
        return res
`)});
lite({id:676,slug:"implement-magic-dictionary",title:"Implement Magic Dictionary",level:"Medium",topic:DS,name:"Wildcard patterns for each word",
w:"Dictionary ['hello','leetcode']: 'hhllo' is one letter away from 'hello' → true; 'hello' itself is not (needs exactly one change).",k:"For every word and every position store the word with that position replaced by '*' together with the original letter. A search word matches if some wildcard form of it was stored from a word with a different letter at that position.",
i:"buildDict([\"hello\",\"leetcode\"]); search(\"hello\"); search(\"hhllo\"); search(\"hell\"); search(\"leetcoded\")",o:"[None, False, True, False, False]",time:"O(L) per word",space:"O(total length)",
code:C(`
class MagicDictionary:
    def __init__(self):
        self.pat = defaultdict(set)

    def buildDict(self, dictionary):
        for w in dictionary:
            for i, c in enumerate(w):
                self.pat[w[:i] + '*' + w[i + 1:]].add(c)

    def search(self, searchWord):
        w = searchWord
        for i, c in enumerate(w):
            letters = self.pat.get(w[:i] + '*' + w[i + 1:])
            if letters and (len(letters) > 1 or c not in letters):
                return True
        return False
`)});
lite({id:869,slug:"reordered-power-of-2",title:"Reordered Power of 2",level:"Medium",topic:MB,name:"Compare digit multisets with powers of two",
w:"n=46 can be rearranged to 64 = 2⁶ → true.",k:"Two numbers are rearrangements of each other if their sorted digits are equal. Precompute the sorted digit strings of 2⁰ … 2³⁰ and check whether n's sorted digits appear among them.",
i:"n = 46",o:"true",time:"O(31·d)",space:"O(31)",
code:C(`
class Solution:
    def reorderedPowerOf2(self, n):
        key = sorted(str(n))
        return any(sorted(str(1 << i)) == key for i in range(31))
`)});
lite({id:279,slug:"perfect-squares",title:"Perfect Squares",level:"Medium",topic:DP,name:"Coin-change style DP over squares",
w:"n=12 = 4 + 4 + 4 → 3 squares.",k:"dp[i] = fewest perfect squares summing to i: min over squares s ≤ i of dp[i − s] + 1. Build up to n.",
i:"n = 12",o:"3",time:"O(n√n)",space:"O(n)",
code:C(`
class Solution:
    def numSquares(self, n):
        dp = [0] + [float('inf')] * n
        for i in range(1, n + 1):
            j = 1
            while j * j <= i:
                dp[i] = min(dp[i], dp[i - j * j] + 1)
                j += 1
        return dp[n]
`)});
lite({id:1971,slug:"find-if-path-exists-in-graph",title:"Find if Path Exists in Graph",level:"Easy",topic:UF,name:"Union-Find (or any traversal)",
w:"Triangle 0-1-2: 0 reaches 2 → true.",k:"Union the endpoints of every edge; source and destination are connected exactly when they have the same root.",
i:"n = 3, edges = [[0,1],[1,2],[2,0]], source = 0, destination = 2",o:"true",time:"O(e α)",space:"O(n)",
code:C(`
class Solution:
    def validPath(self, n, edges, source, destination):
        p = list(range(n))
        def find(x):
            while p[x] != x:
                p[x] = p[p[x]]
                x = p[x]
            return x
        for a, b in edges:
            p[find(a)] = find(b)
        return find(source) == find(destination)
`)});
lite({id:2461,slug:"maximum-sum-of-distinct-subarrays-with-length-k",title:"Maximum Sum of Distinct Subarrays With Length K",level:"Medium",topic:SW,name:"Sliding window with a counter of duplicates",
w:"[1,5,4,2,9,9,9], k=3: [5,4,2], [4,2,9] and [1,5,4] are distinct; best sum 15.",k:"Slide a window of size k, keeping a frequency map and the window sum. The window counts when it holds k distinct values (map size equals k).",
i:"nums = [1,5,4,2,9,9,9], k = 3",o:"15",time:"O(n)",space:"O(k)",
code:C(`
class Solution:
    def maximumSubarraySum(self, nums, k):
        cnt = Counter()
        total = best = 0
        for i, x in enumerate(nums):
            cnt[x] += 1
            total += x
            if i >= k:
                old = nums[i - k]
                cnt[old] -= 1
                if cnt[old] == 0:
                    del cnt[old]
                total -= old
            if i >= k - 1 and len(cnt) == k:
                best = max(best, total)
        return best
`)});
lite({id:60,slug:"permutation-sequence",title:"Permutation Sequence",level:"Hard",topic:MB,name:"Factorial number system",
w:"n=3, k=3 → permutations 123, 132, 213, ... the 3rd is '213'.",k:"Each leading digit accounts for (n−1)! permutations. Convert k−1 to the factorial number system: at each position divide by (remaining−1)! to pick which unused digit comes next, and take the remainder.",
i:"n = 3, k = 3",o:"\"213\"",time:"O(n²)",space:"O(n)",
code:C(`
class Solution:
    def getPermutation(self, n, k):
        digits = list(range(1, n + 1))
        k -= 1
        res = []
        for i in range(n, 0, -1):
            f = factorial(i - 1)
            idx, k = divmod(k, f)
            res.append(str(digits.pop(idx)))
        return ''.join(res)
`)});
lite({id:1609,slug:"even-odd-tree",title:"Even Odd Tree",level:"Medium",topic:BT,name:"BFS checking each level's parity and order",
w:"[1,10,4,3,null,7,9,12,8,6,null,null,2] is an even-odd tree → true.",k:"Level 0 (even) must hold odd values in strictly increasing order; level 1 must hold even values in strictly decreasing order; and so on. Check each level during a BFS (Breadth-First Search).",
i:"root = [1,10,4,3,null,7,9,12,8,6,null,null,2]",o:"true",time:"O(n)",space:"O(w)",
code:C(`
class Solution:
    def isEvenOddTree(self, root):
        q = deque([root])
        level = 0
        while q:
            prev = None
            for _ in range(len(q)):
                node = q.popleft()
                v = node.val
                if level % 2 == 0:
                    if v % 2 == 0 or (prev is not None and v <= prev):
                        return False
                else:
                    if v % 2 == 1 or (prev is not None and v >= prev):
                        return False
                prev = v
                if node.left:
                    q.append(node.left)
                if node.right:
                    q.append(node.right)
            level += 1
        return True
`)});
lite({id:1365,slug:"how-many-numbers-are-smaller-than-the-current-number",title:"How Many Numbers Are Smaller Than the Current Number",level:"Easy",topic:SRT,name:"Sorted copy and bisect",
w:"[8,1,2,2,3] → [4,0,1,1,3].",k:"For each value the count of smaller numbers is the index of its first occurrence in the sorted array.",
i:"nums = [8,1,2,2,3]",o:"[4, 0, 1, 1, 3]",time:"O(n log n)",space:"O(n)",
code:C(`
class Solution:
    def smallerNumbersThanCurrent(self, nums):
        s = sorted(nums)
        return [bisect_left(s, x) for x in nums]
`)});
lite({id:389,slug:"find-the-difference",title:"Find the Difference",level:"Easy",topic:MB,name:"XOR cancels the matching letters",
w:"s='abcd', t='abcde' → the extra letter is 'e'.",k:"XOR (exclusive OR) all characters of both strings: every letter that appears in both cancels, leaving the added one.",
i:"s = \"abcd\", t = \"abcde\"",o:"\"e\"",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def findTheDifference(self, s, t):
        x = 0
        for c in s + t:
            x ^= ord(c)
        return chr(x)
`)});
lite({id:1009,slug:"complement-of-base-10-integer",title:"Complement of Base 10 Integer",level:"Easy",topic:MB,name:"XOR with an all-ones mask",
w:"5 = 101 → complement 010 = 2.",k:"Build a mask of ones as long as n's binary form and XOR (exclusive OR) n with it. Zero is a special case (its complement is 1).",
i:"n = 5",o:"2",time:"O(1)",space:"O(1)",
code:C(`
class Solution:
    def bitwiseComplement(self, n):
        if n == 0:
            return 1
        return n ^ ((1 << n.bit_length()) - 1)
`)});
lite({id:1104,slug:"path-in-zigzag-labelled-binary-tree",title:"Path In Zigzag Labelled Binary Tree",level:"Medium",topic:BT,name:"Mirror within each level while climbing",
w:"label 14 in the zigzag tree: path 1 → 3 → 4 → 14.",k:"In a normal heap numbering the parent of x is x // 2. In the zigzag tree odd rows are reversed, so the real parent is found by mirroring x inside its level (level min + level max − x) before halving. Climb to the root and reverse.",
i:"label = 14",o:"[1, 3, 4, 14]",time:"O(log label)",space:"O(log label)",
code:C(`
class Solution:
    def pathInZigZagTree(self, label):
        path = []
        level = label.bit_length()
        while label:
            path.append(label)
            lo, hi = 1 << (level - 1), (1 << level) - 1
            label = (lo + hi - label) // 2
            level -= 1
        return path[::-1]
`)});
lite({id:1700,slug:"number-of-students-unable-to-eat-lunch",title:"Number of Students Unable to Eat Lunch",level:"Easy",topic:"Queue",name:"Count preferences; stop when the top sandwich is unwanted",
w:"students [1,1,0,0], sandwiches [0,1,0,1] → everyone eats → 0.",k:"Students rotate until someone takes the top sandwich. Only the counts matter: while the top sandwich has a remaining student who wants that type, serve it; when none do, the rest of the students are stuck.",
i:"students = [1,1,0,0], sandwiches = [0,1,0,1]",o:"0",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def countStudents(self, students, sandwiches):
        cnt = Counter(students)
        for s in sandwiches:
            if cnt[s] == 0:
                return sum(cnt.values())
            cnt[s] -= 1
        return 0
`)});
lite({id:1816,slug:"truncate-sentence",title:"Truncate Sentence",level:"Easy",topic:ARR,name:"Keep the first k words",
w:"'Hello how are you Contestant', k=4 → 'Hello how are you'.",k:"Split on spaces, keep the first k words and join them again.",
i:"s = \"Hello how are you Contestant\", k = 4",o:"\"Hello how are you\"",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def truncateSentence(self, s, k):
        return ' '.join(s.split()[:k])
`)});
lite({id:1820,slug:"maximum-number-of-accepted-invitations",title:"Maximum Number of Accepted Invitations",level:"Medium",topic:GR,name:"Bipartite matching (augmenting paths)",
w:"grid [[1,1,1],[1,0,1],[0,0,1]]: every boy can get a different girl → 3 invitations.",k:"This is maximum bipartite matching between boys (rows) and girls (columns). For each boy try to find an augmenting path with DFS (Depth-First Search): take a free girl, or re-route the boy who currently holds her to another girl.",
i:"grid = [[1,1,1],[1,0,1],[0,0,1]]",o:"3",time:"O(V·E)",space:"O(V)",
code:C(`
class Solution:
    def maximumInvitations(self, grid):
        m, n = len(grid), len(grid[0])
        match = [-1] * n
        def try_boy(b, seen):
            for g in range(n):
                if grid[b][g] and g not in seen:
                    seen.add(g)
                    if match[g] == -1 or try_boy(match[g], seen):
                        match[g] = b
                        return True
            return False
        return sum(try_boy(b, set()) for b in range(m))
`)});
lite({id:1893,slug:"check-if-all-the-integers-in-a-range-are-covered",title:"Check if All the Integers in a Range Are Covered",level:"Easy",topic:IV,name:"Mark covered numbers",
w:"ranges [[1,2],[3,4],[5,6]] cover 2..5 → true.",k:"Put every number covered by any range into a set (the limits are small) and test that every integer in [left, right] is in it.",
i:"ranges = [[1,2],[3,4],[5,6]], left = 2, right = 5",o:"true",time:"O(n·50)",space:"O(50)",
code:C(`
class Solution:
    def isCovered(self, ranges, left, right):
        covered = set()
        for a, b in ranges:
            covered.update(range(a, b + 1))
        return all(x in covered for x in range(left, right + 1))
`)});
lite({id:2161,slug:"partition-array-according-to-given-pivot",title:"Partition Array According to Given Pivot",level:"Medium",topic:ARR,name:"Three stable buckets",
w:"[9,12,5,10,14,3,10], pivot 10 → [9,5,3,10,10,12,14].",k:"Collect the numbers smaller than the pivot, equal to it and larger, each in original order, and concatenate.",
i:"nums = [9,12,5,10,14,3,10], pivot = 10",o:"[9, 5, 3, 10, 10, 12, 14]",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def pivotArray(self, nums, pivot):
        return ([x for x in nums if x < pivot]
                + [x for x in nums if x == pivot]
                + [x for x in nums if x > pivot])
`)});
lite({id:315,slug:"count-of-smaller-numbers-after-self",title:"Count of Smaller Numbers After Self",level:"Hard",topic:UF,name:"Fenwick tree over value ranks, scanning from the right",
w:"[5,2,6,1] → [2,1,1,0].",k:"Scan from the right. Keep a Fenwick tree (counts per compressed value). For each number ask how many already-inserted values are smaller, then insert it.",
i:"nums = [5,2,6,1]",o:"[2, 1, 1, 0]",time:"O(n log n)",space:"O(n)",
code:C(`
class Solution:
    def countSmaller(self, nums):
        rank = {v: i + 1 for i, v in enumerate(sorted(set(nums)))}
        m = len(rank)
        tree = [0] * (m + 1)
        def add(i):
            while i <= m:
                tree[i] += 1
                i += i & -i
        def query(i):
            s = 0
            while i > 0:
                s += tree[i]
                i -= i & -i
            return s
        res = []
        for x in reversed(nums):
            res.append(query(rank[x] - 1))
            add(rank[x])
        return res[::-1]
`)});
lite({id:459,slug:"repeated-substring-pattern",title:"Repeated Substring Pattern",level:"Easy",topic:ARR,name:"Find s inside s + s without the ends",
w:"'abab' = 'ab' twice → true.",k:"A string is a repetition of a block exactly when it appears inside (s + s) with the first and last character removed.",
i:"s = \"abab\"",o:"true",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def repeatedSubstringPattern(self, s):
        return s in (s + s)[1:-1]
`)});
lite({id:1512,slug:"number-of-good-pairs",title:"Number of Good Pairs",level:"Easy",topic:HM,name:"Count equal pairs per value",
w:"[1,2,3,1,1,3] → three 1s give 3 pairs, two 3s give 1 → 4.",k:"A value that appears c times forms c(c−1)/2 good pairs. Add them up.",
i:"nums = [1,2,3,1,1,3]",o:"4",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def numIdenticalPairs(self, nums):
        return sum(c * (c - 1) // 2 for c in Counter(nums).values())
`)});
lite({id:2560,slug:"house-robber-iv",title:"House Robber IV",level:"Medium",topic:BS,name:"Binary search the capability",
w:"nums [2,3,5,9], k=2: rob 2 and 5 → capability 5.",k:"Guess the capability c (the largest amount you may take from one house). Greedily rob every house with money ≤ c that is not adjacent to the last robbed one and count; if the count reaches k, c is enough. Binary search the smallest c.",
i:"nums = [2,3,5,9], k = 2",o:"5",time:"O(n log max)",space:"O(1)",
code:C(`
class Solution:
    def minCapability(self, nums, k):
        def enough(c):
            cnt = 0
            i = 0
            while i < len(nums):
                if nums[i] <= c:
                    cnt += 1
                    i += 2
                else:
                    i += 1
            return cnt >= k
        lo, hi = min(nums), max(nums)
        while lo < hi:
            mid = (lo + hi) // 2
            if enough(mid):
                hi = mid
            else:
                lo = mid + 1
        return lo
`)});
lite({id:507,slug:"perfect-number",title:"Perfect Number",level:"Easy",topic:MB,name:"Sum divisors up to √n",
w:"28 = 1 + 2 + 4 + 7 + 14 → true.",k:"A perfect number equals the sum of its positive divisors excluding itself. Find divisor pairs (d, n/d) up to √n.",
i:"num = 28",o:"true",time:"O(√n)",space:"O(1)",
code:C(`
class Solution:
    def checkPerfectNumber(self, num):
        if num <= 1:
            return False
        total = 1
        d = 2
        while d * d <= num:
            if num % d == 0:
                total += d
                if d != num // d:
                    total += num // d
            d += 1
        return total == num
`)});
lite({id:1658,slug:"minimum-operations-to-reduce-x-to-zero",title:"Minimum Operations to Reduce X to Zero",level:"Medium",topic:SW,name:"Longest middle window with sum total − x",
w:"nums [1,1,4,2,3], x=5 → remove 2 and 3 from the right (2 operations).",k:"Removing from both ends leaves a contiguous middle that sums to total − x. Find the longest such window with a sliding window (all numbers are positive); the answer is n − its length, or −1.",
i:"nums = [1,1,4,2,3], x = 5",o:"2",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def minOperations(self, nums, x):
        target = sum(nums) - x
        if target < 0:
            return -1
        best = -1
        left = cur = 0
        for r, v in enumerate(nums):
            cur += v
            while cur > target:
                cur -= nums[left]
                left += 1
            if cur == target:
                best = max(best, r - left + 1)
        return len(nums) - best if best >= 0 else -1
`)});
lite({id:390,slug:"elimination-game",title:"Elimination Game",level:"Medium",topic:MB,name:"Track the head of the remaining list",
w:"n=9: left pass, right pass, left pass leaves 6.",k:"Each pass halves the list. Keep the first element of the remaining arithmetic progression, its step and the remaining count. Passing left always moves the head; passing right moves it only if the count is odd.",
i:"n = 9",o:"6",time:"O(log n)",space:"O(1)",
code:C(`
class Solution:
    def lastRemaining(self, n):
        head, step, left, remaining = 1, 1, True, n
        while remaining > 1:
            if left or remaining % 2 == 1:
                head += step
            remaining //= 2
            step *= 2
            left = not left
        return head
`)});
lite({id:1346,slug:"check-if-n-and-its-double-exist",title:"Check If N and Its Double Exist",level:"Easy",topic:HM,name:"Set of seen values",
w:"[10,2,5,3]: 5 and 10 → true.",k:"For each number check whether its double or (when even) its half has been seen, then record it.",
i:"arr = [10,2,5,3]",o:"true",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def checkIfExist(self, arr):
        seen = set()
        for x in arr:
            if x * 2 in seen or (x % 2 == 0 and x // 2 in seen):
                return True
            seen.add(x)
        return False
`)});
lite({id:3174,slug:"clear-digits",title:"Clear Digits",level:"Easy",topic:STK,name:"Stack: a digit deletes the letter before it",
w:"'cb34' → '' (digit 3 removes b, digit 4 removes c).",k:"Scan the string; push letters on a stack and let each digit pop the closest letter to its left.",
i:"s = \"cb34\"",o:"\"\"",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def clearDigits(self, s):
        st = []
        for c in s:
            if c.isdigit():
                st.pop()
            else:
                st.append(c)
        return ''.join(st)
`)});
lite({id:1506,slug:"find-root-of-n-ary-tree",title:"Find Root of N-Ary Tree",level:"Medium",topic:BT,name:"The root is the only node that is nobody's child",
w:"Nodes given in random order [5,4,3,1,2]... the one never listed as a child is the root.",k:"Add every node's value to a running total and subtract every child's value. What remains is the root's value (it is the only node never counted as a child); then pick that node from the list.",
i:"tree nodes in shuffled order (root value 1)",o:"1",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def findRoot(self, tree):
        total = 0
        for node in tree:
            total += node.val
            for child in node.children:
                total -= child.val
        for node in tree:
            if node.val == total:
                return node
`)});
lite({id:3136,slug:"valid-word",title:"Valid Word",level:"Easy",topic:ARR,name:"Check length, characters, one vowel and one consonant",
w:"'234Adas' is valid: ≥ 3 chars, letters/digits, has a vowel (A) and a consonant (d).",k:"A valid word has at least 3 characters, consists only of letters and digits, and contains at least one vowel and one consonant (letters only).",
i:"word = \"234Adas\"",o:"true",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def isValid(self, word):
        if len(word) < 3 or not all(c.isalnum() for c in word):
            return False
        letters = [c.lower() for c in word if c.isalpha()]
        vowel = any(c in 'aeiou' for c in letters)
        consonant = any(c not in 'aeiou' for c in letters)
        return vowel and consonant
`)});
lite({id:812,slug:"largest-triangle-area",title:"Largest Triangle Area",level:"Easy",topic:MB,name:"Shoelace formula over all triples",
w:"Points (0,0),(0,1),(1,0),(0,2),(2,0): the largest triangle has area 2.",k:"Try every triple of points and compute the area with the cross-product (shoelace) formula |x1(y2−y3) + x2(y3−y1) + x3(y1−y2)| / 2.",
i:"points = [[0,0],[0,1],[1,0],[0,2],[2,0]]",o:"2.0",time:"O(n³)",space:"O(1)",
code:C(`
class Solution:
    def largestTriangleArea(self, points):
        best = 0
        for (x1, y1), (x2, y2), (x3, y3) in combinations(points, 3):
            best = max(best, abs(x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2)) / 2)
        return best
`)});
lite({id:2048,slug:"next-greater-numerically-balanced-number",title:"Next Greater Numerically Balanced Number",level:"Medium",topic:MB,name:"Increase until every digit d appears d times",
w:"n=1 → the next balanced number is 22.",k:"A number is numerically balanced if each digit d appears exactly d times. Starting at n + 1 test each number until one is balanced (balanced numbers are dense enough for n ≤ 10⁶).",
i:"n = 1",o:"22",time:"O(answer − n)",space:"O(1)",
code:C(`
class Solution:
    def nextBeautifulNumber(self, n):
        x = n + 1
        while True:
            cnt = Counter(str(x))
            if all(int(d) == c for d, c in cnt.items()):
                return x
            x += 1
`)});
lite({id:1022,slug:"sum-of-root-to-leaf-binary-numbers",title:"Sum of Root To Leaf Binary Numbers",level:"Easy",topic:BT,name:"Build the number while descending",
w:"[1,0,1,0,1,0,1]: paths 100, 101, 110, 111 = 4+5+6+7 = 22.",k:"Carry the binary value of the path to each node (value × 2 + node bit). At a leaf add the value to the total.",
i:"root = [1,0,1,0,1,0,1]",o:"22",time:"O(n)",space:"O(h)",
code:C(`
class Solution:
    def sumRootToLeaf(self, root):
        def dfs(node, cur):
            if not node:
                return 0
            cur = cur * 2 + node.val
            if not node.left and not node.right:
                return cur
            return dfs(node.left, cur) + dfs(node.right, cur)
        return dfs(root, 0)
`)});
lite({id:2833,slug:"furthest-point-from-origin",title:"Furthest Point From Origin",level:"Easy",topic:GD,name:"Send every '_' the same direction",
w:"'L_RL__R': 3 L's and 2 R's net −1, plus 2 underscores → 3.",k:"Each '_' can go either way, so send all of them in the direction of the majority. The answer is |#L − #R| + #_.",
i:"moves = \"L_RL__R\"",o:"3",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def furthestDistanceFromOrigin(self, moves):
        return abs(moves.count('L') - moves.count('R')) + moves.count('_')
`)});
lite({id:119,slug:"pascals-triangle-ii",title:"Pascal's Triangle II",level:"Easy",topic:DP,name:"Build one row in place",
w:"rowIndex=3 → [1,3,3,1].",k:"Start with [1]. For each next row update the values from right to left so each number becomes the sum of the two above it, then append a 1.",
i:"rowIndex = 3",o:"[1, 3, 3, 1]",time:"O(n²)",space:"O(n)",
code:C(`
class Solution:
    def getRow(self, rowIndex):
        row = [1]
        for _ in range(rowIndex):
            row = [1] + [row[i] + row[i + 1] for i in range(len(row) - 1)] + [1]
        return row
`)});
lite({id:241,slug:"different-ways-to-add-parentheses",title:"Different Ways to Add Parentheses",level:"Medium",topic:DP,name:"Split at every operator and combine",
w:"'2-1-1' → ((2−1)−1) = 0 and (2−(1−1)) = 2 → [0,2].",k:"For every operator split the expression into left and right parts, compute all results of each part recursively and combine them with the operator. A pure number returns itself. Memoise the sub-expressions.",
i:"expression = \"2-1-1\"",o:"[2, 0]",time:"exponential (Catalan)",space:"O(n · Catalan)",
code:C(`
class Solution:
    def diffWaysToCompute(self, expression):
        @lru_cache(None)
        def go(e):
            if e.isdigit():
                return [int(e)]
            res = []
            for i, c in enumerate(e):
                if c in '+-*':
                    for a in go(e[:i]):
                        for b in go(e[i + 1:]):
                            res.append(a + b if c == '+' else a - b if c == '-' else a * b)
            return res
        return sorted(go(expression), reverse=True)
`)});
lite({id:308,slug:"range-sum-query-2d-mutable",title:"Range Sum Query 2D - Mutable",level:"Medium",topic:DS,name:"2D Fenwick tree",
w:"A 5×5 grid: sumRegion(2,1,4,3) = 8; after update(3,2,2) it is 10.",k:"A 2D binary indexed tree stores partial rectangle sums. Update adds the delta at (r, c) along both index chains; a prefix query sums along the chains. A region sum is inclusion–exclusion of four prefix queries.",
i:"NumMatrix([[3,0,1,4,2],[5,6,3,2,1],[1,2,0,1,5],[4,1,0,1,7],[1,0,3,0,5]]); sumRegion(2,1,4,3); update(3,2,2); sumRegion(2,1,4,3)",o:"[8, None, 10]",time:"O(log m · log n)",space:"O(m·n)",
code:C(`
class NumMatrix:
    def __init__(self, matrix):
        self.m, self.n = len(matrix), len(matrix[0])
        self.mat = [[0] * self.n for _ in range(self.m)]
        self.tree = [[0] * (self.n + 1) for _ in range(self.m + 1)]
        for i in range(self.m):
            for j in range(self.n):
                self.update(i, j, matrix[i][j])

    def update(self, row, col, val):
        delta = val - self.mat[row][col]
        self.mat[row][col] = val
        i = row + 1
        while i <= self.m:
            j = col + 1
            while j <= self.n:
                self.tree[i][j] += delta
                j += j & -j
            i += i & -i

    def _prefix(self, r, c):
        s = 0
        i = r
        while i > 0:
            j = c
            while j > 0:
                s += self.tree[i][j]
                j -= j & -j
            i -= i & -i
        return s

    def sumRegion(self, row1, col1, row2, col2):
        return (self._prefix(row2 + 1, col2 + 1) - self._prefix(row1, col2 + 1)
                - self._prefix(row2 + 1, col1) + self._prefix(row1, col1))
`)});
lite({id:561,slug:"array-partition",title:"Array Partition",level:"Easy",topic:SRT,name:"Sort and take every other element",
w:"[1,4,3,2] sorted [1,2,3,4]: pairs (1,2),(3,4) → 1 + 3 = 4.",k:"To maximise the sum of the minimums of the pairs, pair neighbours in sorted order; the minimum of each pair is the element at an even position.",
i:"nums = [1,4,3,2]",o:"4",time:"O(n log n)",space:"O(1)",
code:C(`
class Solution:
    def arrayPairSum(self, nums):
        return sum(sorted(nums)[::2])
`)});
lite({id:885,slug:"spiral-matrix-iii",title:"Spiral Matrix III",level:"Medium",topic:MX,name:"Walk the spiral, keep cells inside the grid",
w:"A 1×4 grid starting at (0,0): the spiral visits (0,0),(0,1),(0,2),(0,3).",k:"Walk a spiral outward from the start: segments of length 1,1,2,2,3,3,… turning right each time (east, south, west, north). Record every visited cell that lies in the grid until all rows × cols cells are collected.",
i:"rows = 1, cols = 4, rStart = 0, cStart = 0",o:"[[0, 0], [0, 1], [0, 2], [0, 3]]",time:"O(max(m,n)²)",space:"O(m·n)",
code:C(`
class Solution:
    def spiralMatrixIII(self, rows, cols, rStart, cStart):
        res = [[rStart, cStart]]
        dirs = [(0, 1), (1, 0), (0, -1), (-1, 0)]
        r, c, d, length = rStart, cStart, 0, 1
        while len(res) < rows * cols:
            for _ in range(2):
                dr, dc = dirs[d % 4]
                for _ in range(length):
                    r, c = r + dr, c + dc
                    if 0 <= r < rows and 0 <= c < cols:
                        res.append([r, c])
                d += 1
            length += 1
        return res
`)});
lite({id:2769,slug:"find-the-maximum-achievable-number",title:"Find the Maximum Achievable Number",level:"Easy",topic:MB,name:"num + 2t",
w:"num=4, t=1 → x can be 6.",k:"Each operation moves x and num towards each other by 1 each, closing a gap of 2 per operation. So the largest achievable x is num + 2t.",
i:"num = 4, t = 1",o:"6",time:"O(1)",space:"O(1)",
code:C(`
class Solution:
    def theMaximumAchievableX(self, num, t):
        return num + 2 * t
`)});
lite({id:1941,slug:"check-if-all-characters-have-equal-number-of-occurrences",title:"Check if All Characters Have Equal Number of Occurrences",level:"Easy",topic:HM,name:"All counts are equal",
w:"'abacbc' → a,b,c each 2 times → true.",k:"Count the letters and check that the set of counts has exactly one value.",
i:"s = \"abacbc\"",o:"true",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def areOccurrencesEqual(self, s):
        return len(set(Counter(s).values())) == 1
`)});
lite({id:1014,slug:"best-sightseeing-pair",title:"Best Sightseeing Pair",level:"Medium",topic:DP,name:"Track the best values[i] + i so far",
w:"[8,1,5,2,6]: 8 + 5 + 0 − 2 = 11.",k:"Score of a pair i<j is (values[i] + i) + (values[j] − j). Scan j from left to right, keeping the best values[i] + i seen before.",
i:"values = [8,1,5,2,6]",o:"11",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def maxScoreSightseeingPair(self, values):
        best_left = values[0]
        res = 0
        for j in range(1, len(values)):
            res = max(res, best_left + values[j] - j)
            best_left = max(best_left, values[j] + j)
        return res
`)});
lite({id:3405,slug:"count-the-number-of-arrays-with-k-matching-adjacent-elements",title:"Count the Number of Arrays with K Matching Adjacent Elements",level:"Hard",topic:MB,name:"Choose where equal neighbours sit, then pick values",
w:"n=3, m=2, k=1 → arrays like [1,1,2], [2,1,1] … 4.",k:"An array has k positions where a neighbour equals the previous one, so there are n−1−k positions where the value changes. Choose which of the n−1 neighbour pairs are equal: C(n−1, k). The first value has m choices and each change has m−1 choices: m · (m−1)^(n−1−k). Multiply modulo 1e9+7.",
i:"n = 3, m = 2, k = 1",o:"4",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def countGoodArrays(self, n, m, k):
        MOD = 10**9 + 7
        return comb(n - 1, k) % MOD * m % MOD * pow(m - 1, n - 1 - k, MOD) % MOD
`)});
