const {lite}=require("./lib");
const C=s=>s.replace(/^\n/,"").replace(/\n$/,"").split("\n");
const ARR="Array / String",HM="Hash Map / Set",STK="Stack / Monotonic Stack",BT="Binary Tree",GR="Graph",HP="Heap",DP="Dynamic Programming",GD="Greedy",MB="Math / Bit Manipulation",BS="Binary Search",SRT="Sorting",SW="Sliding Window",MX="Matrix",UF="Union Find / Segment Tree",TP="Two Pointers",IV="Intervals",BTK="Backtracking",DS="Design",LL="Linked List",TR="Trie";
// ---- Uber (5/5)
lite({id:696,slug:"count-binary-substrings",title:"Count Binary Substrings",level:"Easy",topic:ARR,name:"Run lengths of equal characters",
w:"'00110011': the runs are 2,2,2,2. Neighbouring runs of lengths a and b give min(a,b) valid pieces: 2+2+2 = 6.",k:"Group the string into runs of equal characters. Two touching runs of lengths a and b contain exactly min(a, b) substrings with equal 0s and 1s, so add that for every neighbouring pair.",
i:'s = "00110011"',o:"6",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def countBinarySubstrings(self, s):
        prev, cur, res = 0, 1, 0
        for i in range(1, len(s)):
            if s[i] == s[i - 1]:
                cur += 1
            else:
                res += min(prev, cur)
                prev, cur = cur, 1
        return res + min(prev, cur)
`)});
lite({id:719,slug:"find-k-th-smallest-pair-distance",title:"Find K-th Smallest Pair Distance",level:"Hard",topic:BS,name:"Binary search the distance + two pointers",
w:"[1,3,1], k=1: the pair distances are 2, 0, 2. Sorted: 0, 2, 2, so the 1st smallest is 0.",k:"Sort the numbers. For a guessed distance d, count the pairs with distance ≤ d using two pointers. The answer is the smallest d whose count reaches k, found by binary search on d.",
i:"nums = [1,3,1], k = 1",o:"0",time:"O(n log n + n log D)",space:"O(1)",
code:C(`
class Solution:
    def smallestDistancePair(self, nums, k):
        nums.sort()
        lo, hi = 0, nums[-1] - nums[0]
        while lo < hi:
            mid = (lo + hi) // 2
            cnt = j = 0
            for i in range(len(nums)):
                while nums[i] - nums[j] > mid:
                    j += 1
                cnt += i - j
            if cnt >= k:
                hi = mid
            else:
                lo = mid + 1
        return lo
`)});
lite({id:824,slug:"goat-latin",title:"Goat Latin",level:"Easy",topic:ARR,name:"Transform word by word",
w:"'I speak': 'I' starts with a vowel → 'Imaa'; 'speak' → move 's' to the end → 'peaksmaaa'.",k:"Split into words. If a word starts with a consonant, move its first letter to the end. Then add 'ma' and as many 'a's as the word's position (1, 2, 3 …).",
i:'"I speak Goat Latin"',o:'"Imaa peaksmaaa oatGmaaaa atinLmaaaaa"',time:"O(n²)",space:"O(n²)",
code:C(`
class Solution:
    def toGoatLatin(self, sentence):
        out = []
        for i, w in enumerate(sentence.split(), 1):
            if w[0] not in "aeiouAEIOU":
                w = w[1:] + w[0]
            out.append(w + "ma" + "a" * i)
        return " ".join(out)
`)});
lite({id:968,slug:"binary-tree-cameras",title:"Binary Tree Cameras",level:"Hard",topic:BT,name:"Greedy post-order with 3 states",
w:"[0,0,null,0,0]: one camera on the left child watches itself, its parent and its two children. The right side is empty, so 1 camera is enough.",k:"Go bottom-up and give each node a state: 0 = not watched, 1 = has a camera, 2 = watched. If a child is not watched, this node needs a camera. If a child has a camera, this node is watched. Otherwise it is not watched yet and waits for its parent.",
i:"root = [0,0,null,0,0]",o:"1",time:"O(n)",space:"O(h)",
code:C(`
class Solution:
    def minCameraCover(self, root):
        self.cams = 0
        def dfs(node):
            if not node:
                return 2
            l, r = dfs(node.left), dfs(node.right)
            if l == 0 or r == 0:
                self.cams += 1
                return 1
            if l == 1 or r == 1:
                return 2
            return 0
        if dfs(root) == 0:
            self.cams += 1
        return self.cams
`)});
lite({id:983,slug:"minimum-cost-for-tickets",title:"Minimum Cost For Tickets",level:"Medium",topic:DP,name:"DP over calendar days",
w:"Days [1,4,6,7,8,20], costs [2,7,15]: a 1-day ticket on day 1 (2), a 7-day ticket covering days 4–10 (7), a 1-day ticket on day 20 (2) → 11.",k:"dp[d] is the cheapest cost to cover all travel days up to day d. On a non-travel day it equals dp[d−1]. On a travel day take the best of: 1-day ticket from d−1, 7-day ticket from d−7, 30-day ticket from d−30.",
i:"days = [1,4,6,7,8,20], costs = [2,7,15]",o:"11",time:"O(last day)",space:"O(last day)",
code:C(`
class Solution:
    def mincostTickets(self, days, costs):
        last = days[-1]
        travel = set(days)
        dp = [0] * (last + 1)
        for d in range(1, last + 1):
            if d not in travel:
                dp[d] = dp[d - 1]
            else:
                dp[d] = min(dp[d - 1] + costs[0],
                            dp[max(0, d - 7)] + costs[1],
                            dp[max(0, d - 30)] + costs[2])
        return dp[last]
`)});
lite({id:1005,slug:"maximize-sum-of-array-after-k-negations",title:"Maximize Sum Of Array After K Negations",level:"Easy",topic:GD,name:"Always flip the smallest (min-heap)",
w:"[4,2,3], k=1: flip the smallest (2 → −2) gives 4 − 2 + 3 = 5.",k:"Each step, negate the smallest number: if it is negative this gains the most, and if every number is positive it loses the least. A min-heap hands out the smallest each time.",
i:"nums = [4,2,3], k = 1",o:"5",time:"O(n + k log n)",space:"O(1)",
code:C(`
class Solution:
    def largestSumAfterKNegations(self, nums, k):
        heapify(nums)
        for _ in range(k):
            heappush(nums, -heappop(nums))
        return sum(nums)
`)});
lite({id:1020,slug:"number-of-enclaves",title:"Number of Enclaves",level:"Medium",topic:MX,name:"BFS from the border",
w:"Only the cells that cannot walk off the grid count. The 3 land cells in the middle are surrounded by water, so the answer is 3.",k:"Start from every land cell on the border and sink everything reachable from it (BFS). Whatever land is left cannot reach the edge, so count it.",
i:"grid = [[0,0,0,0],[1,0,1,0],[0,1,1,0],[0,0,0,0]]",o:"3",time:"O(m·n)",space:"O(m·n)",
code:C(`
class Solution:
    def numEnclaves(self, grid):
        m, n = len(grid), len(grid[0])
        q = deque((i, j) for i in range(m) for j in range(n)
                  if (i in (0, m - 1) or j in (0, n - 1)) and grid[i][j] == 1)
        for i, j in q:
            grid[i][j] = 0
        while q:
            i, j = q.popleft()
            for a, b in ((i + 1, j), (i - 1, j), (i, j + 1), (i, j - 1)):
                if 0 <= a < m and 0 <= b < n and grid[a][b] == 1:
                    grid[a][b] = 0
                    q.append((a, b))
        return sum(map(sum, grid))
`)});
lite({id:1697,slug:"checking-existence-of-edge-length-limited-paths",title:"Checking Existence of Edge Length Limited Paths",level:"Hard",topic:UF,name:"Offline queries + Union Find",
w:"Query (0,1,limit 2): the only 0–1 edge has length 2, which is not below 2 → false. Query (0,2,limit 5): 0–1 (2) and 1–2 (4) are both below 5 → true.",k:"Sort edges by length and queries by limit. Walk the queries in increasing limit order and union every edge shorter than that limit before answering — then 'is there a path' is just 'are they in the same group'.",
i:"n=3, edges=[[0,1,2],[1,2,4],[2,0,8],[1,0,16]], queries=[[0,1,2],[0,2,5]]",o:"[false, true]",time:"O((E+Q) log(E+Q))",space:"O(n + Q)",
code:C(`
class Solution:
    def distanceLimitedPathsExist(self, n, edgeList, queries):
        parent = list(range(n))
        def find(x):
            while parent[x] != x:
                parent[x] = parent[parent[x]]
                x = parent[x]
            return x
        edgeList.sort(key=lambda e: e[2])
        res = [False] * len(queries)
        j = 0
        for qi in sorted(range(len(queries)), key=lambda i: queries[i][2]):
            p, q, limit = queries[qi]
            while j < len(edgeList) and edgeList[j][2] < limit:
                parent[find(edgeList[j][0])] = find(edgeList[j][1])
                j += 1
            res[qi] = find(p) == find(q)
        return res
`)});
lite({id:1698,slug:"number-of-distinct-substrings-in-a-string",title:"Number of Distinct Substrings in a String",level:"Medium",topic:TR,name:"Insert every suffix into a trie",
w:"'aabbaba' has 28 substrings in total, but 7 of them are repeats, leaving 21 different ones.",k:"Every substring is a prefix of some suffix. Insert all suffixes into a trie: each NEW node created is one new distinct substring.",
i:'s = "aabbaba"',o:"21",time:"O(n²)",space:"O(n²)",
code:C(`
class Solution:
    def countDistinct(self, s):
        root = {}
        cnt = 0
        for i in range(len(s)):
            node = root
            for ch in s[i:]:
                if ch not in node:
                    node[ch] = {}
                    cnt += 1
                node = node[ch]
        return cnt
`)});
lite({id:1901,slug:"find-a-peak-element-ii",title:"Find a Peak Element II",level:"Medium",topic:BS,name:"Binary search on rows",
w:"30 in the middle is bigger than its neighbours 21, 14 and 16 (and 20 above it), so [1,1] is a peak. Any valid peak is accepted.",k:"Look at the middle row and take its maximum. If the cell below is bigger, a peak must exist in the lower half; otherwise it exists in this row or above. Halve the rows each time.",
i:"mat = [[10,20,15],[21,30,14],[7,16,32]]",o:"a peak such as [1,1]",time:"O(n log m)",space:"O(1)",
code:C(`
class Solution:
    def findPeakGrid(self, mat):
        lo, hi = 0, len(mat) - 1
        while lo < hi:
            mid = (lo + hi) // 2
            c = mat[mid].index(max(mat[mid]))
            if mat[mid][c] < mat[mid + 1][c]:
                lo = mid + 1
            else:
                hi = mid
        return [lo, mat[lo].index(max(mat[lo]))]
`)});
lite({id:1915,slug:"number-of-wonderful-substrings",title:"Number of Wonderful Substrings",level:"Medium",topic:"Prefix Sum",name:"Parity bitmask prefix counts",
w:"'aba': the wonderful substrings are 'a', 'b', 'a' and 'aba' (only 'b' has an odd count) → 4.",k:"Keep a 10-bit mask of which letters have an odd count so far. A substring is wonderful if the two prefix masks are equal or differ in exactly one bit. Count earlier prefixes with those masks.",
i:'word = "aba"',o:"4",time:"O(10·n)",space:"O(1024)",
code:C(`
class Solution:
    def wonderfulSubstrings(self, word):
        cnt = [0] * 1024
        cnt[0] = 1
        mask = res = 0
        for ch in word:
            mask ^= 1 << (ord(ch) - 97)
            res += cnt[mask]
            for b in range(10):
                res += cnt[mask ^ (1 << b)]
            cnt[mask] += 1
        return res
`)});
lite({id:1931,slug:"painting-a-grid-with-three-different-colors",title:"Painting a Grid With Three Different Colors",level:"Hard",topic:DP,name:"DP over column colourings",
w:"A 2×2 grid with 3 colours and no two touching cells equal: 18 ways.",k:"Because m ≤ 5, list every valid colouring of one column (no equal neighbours inside it). Two columns can sit side by side if no row matches. Then count column by column.",
i:"m = 2, n = 2",o:"18",time:"O(n · P²)",space:"O(P²)",
code:C(`
class Solution:
    def colorTheGrid(self, m, n):
        MOD = 10 ** 9 + 7
        cols = [c for c in product(range(3), repeat=m)
                if all(c[i] != c[i + 1] for i in range(m - 1))]
        ok = {a: [b for b in cols if all(x != y for x, y in zip(a, b))] for a in cols}
        dp = {c: 1 for c in cols}
        for _ in range(n - 1):
            dp = {c: sum(dp[p] for p in ok[c]) % MOD for c in cols}
        return sum(dp.values()) % MOD
`)});
lite({id:2076,slug:"process-restricted-friend-requests",title:"Process Restricted Friend Requests",level:"Hard",topic:UF,name:"Union Find with restriction check",
w:"Request 0–2 is fine. Request 2–1 would put 0 and 1 in the same friend group, which is forbidden, so it is rejected.",k:"Keep friend groups with Union Find. For a request, look at the two groups; if any restricted pair would end up with one person in each group, reject it. Otherwise merge.",
i:"n=3, restrictions=[[0,1]], requests=[[0,2],[2,1]]",o:"[true, false]",time:"O(R · Q)",space:"O(n)",
code:C(`
class Solution:
    def friendRequests(self, n, restrictions, requests):
        parent = list(range(n))
        def find(x):
            while parent[x] != x:
                parent[x] = parent[parent[x]]
                x = parent[x]
            return x
        res = []
        for u, v in requests:
            pu, pv = find(u), find(v)
            ok = True
            if pu != pv:
                for x, y in restrictions:
                    px, py = find(x), find(y)
                    if (px, py) in ((pu, pv), (pv, pu)):
                        ok = False
                        break
            if ok:
                parent[pu] = pv
            res.append(ok)
        return res
`)});
lite({id:2092,slug:"find-all-people-with-secret",title:"Find All People with Secret",level:"Hard",topic:GR,name:"Process meetings time by time",
w:"Person 0 tells person 1 at time 0. Meetings at time 5 spread it to 2, time 8 to 3, and time 10 to 5.",k:"Handle meetings in time order. Inside one time, build a small graph of that time's meetings and spread the secret by BFS from everyone who already knows it. People who met but never touched a secret-holder learn nothing.",
i:"n=6, meetings=[[1,2,5],[2,3,8],[1,5,10]], firstPerson=1",o:"[0,1,2,3,5]",time:"O(M log M)",space:"O(M)",
code:C(`
class Solution:
    def findAllPeople(self, n, meetings, firstPerson):
        know = {0, firstPerson}
        by_time = defaultdict(list)
        for x, y, t in meetings:
            by_time[t].append((x, y))
        for t in sorted(by_time):
            g = defaultdict(list)
            for x, y in by_time[t]:
                g[x].append(y)
                g[y].append(x)
            q = deque(p for p in g if p in know)
            seen = set(q)
            while q:
                p = q.popleft()
                for nb in g[p]:
                    if nb not in seen:
                        seen.add(nb)
                        q.append(nb)
            know |= seen
        return sorted(know)
`)});
lite({id:2093,slug:"minimum-cost-to-reach-city-with-discounts",title:"Minimum Cost to Reach City With Discounts",level:"Medium",topic:GR,name:"Dijkstra on (city, discounts used)",
w:"Going 0→1→4 costs 4 + 11 = 15. Use the one discount on the 11 toll (now 5): 4 + 5 = 9, the best.",k:"Run Dijkstra where a state is (city, discounts used so far). From each road you may pay the full toll or, if discounts remain, half of it (rounded down) and move to the next discount level.",
i:"n=5, highways=[[0,1,4],[2,1,3],[1,4,11],[3,2,3],[3,4,2]], discounts=1",o:"9",time:"O(E·D log(E·D))",space:"O(n·D)",
code:C(`
class Solution:
    def minimumCost(self, n, highways, discounts):
        g = defaultdict(list)
        for a, b, t in highways:
            g[a].append((b, t))
            g[b].append((a, t))
        dist = {(0, 0): 0}
        h = [(0, 0, 0)]
        while h:
            d, u, k = heappop(h)
            if u == n - 1:
                return d
            if d > dist.get((u, k), inf):
                continue
            for v, t in g[u]:
                for nk, nd in ((k, d + t), (k + 1, d + t // 2)):
                    if nk <= discounts and nd < dist.get((v, nk), inf):
                        dist[(v, nk)] = nd
                        heappush(h, (nd, v, nk))
        return -1
`)});
lite({id:2158,slug:"amount-of-new-area-painted-each-day",title:"Amount of New Area Painted Each Day",level:"Hard",topic:IV,name:"Skip painted cells with a jump map",
w:"Day 1 paints cells 1–3 (3 new). Day 2 paints 4–6 (3 new). Day 3 asks for 5–7: 5 and 6 are already painted, so only 7 is new (1).",k:"Treat each unit cell as an item. Once a cell is painted, remember a pointer to the next unpainted cell (like Union Find). Then every day we jump straight over painted cells and only touch new ones.",
i:"paint = [[1,4],[4,7],[5,8]]",o:"[3, 3, 1]",time:"O(total area · α)",space:"O(total area)",
code:C(`
class Solution:
    def amountPainted(self, paint):
        nxt = {}
        def find(x):
            root = x
            while root in nxt:
                root = nxt[root]
            while x in nxt:
                nxt[x], x = root, nxt[x]
            return root
        res = []
        for s, e in paint:
            x = find(s)
            cnt = 0
            while x < e:
                nxt[x] = x + 1
                cnt += 1
                x = find(x + 1)
            res.append(cnt)
        return res
`)});
lite({id:2163,slug:"minimum-difference-in-sums-after-removal-of-elements",title:"Minimum Difference in the Sums After Removal of Elements",level:"Hard",topic:HP,name:"Prefix min-sums + suffix max-sums with heaps",
w:"[7,9,5,8,1,3], n=2: remove 9 and 1 → [7,5,8,3]; (7+5) − (8+3) = 1, the smallest possible.",k:"Remove n numbers, keep 2n, split them in half: first n sum minus last n sum. Make the left sum as small and the right sum as large as possible. For every split point, a max-heap tracks the smallest n of the prefix and a min-heap the largest n of the suffix.",
i:"nums = [7,9,5,8,1,3]",o:"1",time:"O(n log n)",space:"O(n)",
code:C(`
class Solution:
    def minimumDifference(self, nums):
        n = len(nums) // 3
        left = [0] * (len(nums) + 1)
        h = [-x for x in nums[:n]]
        heapify(h)
        s = sum(nums[:n])
        left[n] = s
        for i in range(n, 2 * n):
            s += nums[i]
            heappush(h, -nums[i])
            s += heappop(h)
            left[i + 1] = s
        h = nums[2 * n:]
        heapify(h)
        s = sum(h)
        best = left[2 * n] - s
        for i in range(2 * n - 1, n - 1, -1):
            s += nums[i]
            heappush(h, nums[i])
            s -= heappop(h)
            best = min(best, left[i] - s)
        return best
`)});
lite({id:2226,slug:"maximum-candies-allocated-to-k-children",title:"Maximum Candies Allocated to K Children",level:"Medium",topic:BS,name:"Binary search the candies per child",
w:"Piles [5,8,6] and 3 children: with 5 candies each, the piles give 1 + 1 + 1 = 3 children. With 6 they only give 0 + 1 + 1 = 2. So the answer is 5.",k:"If each child gets x candies, pile c serves c // x children. The number of children served drops as x grows, so binary search the largest x that still serves at least k children.",
i:"candies = [5,8,6], k = 3",o:"5",time:"O(n log max)",space:"O(1)",
code:C(`
class Solution:
    def maximumCandies(self, candies, k):
        lo, hi = 0, max(candies)
        while lo < hi:
            mid = (lo + hi + 1) // 2
            if sum(c // mid for c in candies) >= k:
                lo = mid
            else:
                hi = mid - 1
        return lo
`)});
lite({id:2251,slug:"number-of-flowers-in-full-bloom",title:"Number of Flowers in Full Bloom",level:"Hard",topic:BS,name:"Sorted starts and ends with bisect",
w:"At time 3: flowers [1,6] and [3,7] are open, and [9,12] and [4,13] are not yet → 2.",k:"Flowers in bloom at time p = flowers already started (start ≤ p) minus flowers already ended (end < p). Sort the starts and the ends once and use two binary searches per person.",
i:"flowers=[[1,6],[3,7],[9,12],[4,13]], people=[2,3,7,11]",o:"[1, 2, 2, 2]",time:"O((n+m) log n)",space:"O(n)",
code:C(`
class Solution:
    def fullBloomFlowers(self, flowers, people):
        starts = sorted(s for s, e in flowers)
        ends = sorted(e for s, e in flowers)
        return [bisect_right(starts, p) - bisect_left(ends, p) for p in people]
`)});
lite({id:2296,slug:"design-a-text-editor",title:"Design a Text Editor",level:"Hard",topic:DS,name:"Two stacks around the cursor",
w:"After 'leetcode' → delete 4 → 'leet' → add 'practice' → 'leetpractice'. Moving right does nothing (the cursor is at the end), and the last 10 characters left of it are 'etpractice'.",k:"Keep the text left of the cursor in one stack and the text right of it in another. Moving the cursor just moves characters between the two stacks; adding and deleting only touch the left stack.",
i:"addText('leetcode'), deleteText(4), addText('practice'), cursorRight(3)",o:"'etpractice'",time:"O(k) per call",space:"O(n)",
code:C(`
class TextEditor:
    def __init__(self):
        self.left = []
        self.right = []
    def addText(self, text):
        self.left.extend(text)
    def deleteText(self, k):
        k = min(k, len(self.left))
        del self.left[len(self.left) - k:]
        return k
    def cursorLeft(self, k):
        for _ in range(min(k, len(self.left))):
            self.right.append(self.left.pop())
        return "".join(self.left[-10:])
    def cursorRight(self, k):
        for _ in range(min(k, len(self.right))):
            self.left.append(self.right.pop())
        return "".join(self.left[-10:])
`)});
lite({id:2389,slug:"longest-subsequence-with-limited-sum",title:"Longest Subsequence With Limited Sum",level:"Easy",topic:SRT,name:"Sort + prefix sums + bisect",
w:"Sorted [1,2,4,5] has prefix sums 1,3,7,12. A budget of 3 fits two numbers, 10 fits three, 21 fits all four.",k:"The cheapest way to pick many numbers is to take the smallest ones. Sort, build prefix sums, and for each query find how many prefix sums stay within it.",
i:"nums = [4,5,2,1], queries = [3,10,21]",o:"[2, 3, 4]",time:"O((n+q) log n)",space:"O(n)",
code:C(`
class Solution:
    def answerQueries(self, nums, queries):
        pre = list(accumulate(sorted(nums)))
        return [bisect_right(pre, q) for q in queries]
`)});
lite({id:2477,slug:"minimum-fuel-cost-to-report-to-the-capital",title:"Minimum Fuel Cost to Report to the Capital",level:"Medium",topic:GR,name:"DFS counting people per subtree",
w:"Three cities hang directly off the capital 0. Each needs its own car (5 seats is plenty), one litre per road → 3.",k:"Root the tree at the capital. Every edge from a city up to its parent carries all the people of that city's subtree, and each car holds `seats` people, so that edge costs ceil(people / seats). Add this for every non-capital node.",
i:"roads=[[0,1],[0,2],[0,3]], seats=5",o:"3",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def minimumFuelCost(self, roads, seats):
        g = defaultdict(list)
        for a, b in roads:
            g[a].append(b)
            g[b].append(a)
        self.fuel = 0
        def dfs(u, parent):
            people = 1
            for v in g[u]:
                if v != parent:
                    people += dfs(v, u)
            if u != 0:
                self.fuel += (people + seats - 1) // seats
            return people
        dfs(0, -1)
        return self.fuel
`)});
lite({id:3202,slug:"find-the-maximum-length-of-valid-subsequence-ii",title:"Find the Maximum Length of Valid Subsequence II",level:"Medium",topic:DP,name:"DP per target pair-sum residue",
w:"[1,2,3,4,5], k=2: every neighbouring pair sums to an odd number, i.e. the same residue 1 mod 2. The whole array is valid → 5.",k:"A subsequence is valid when all neighbouring sums have the same remainder mod k. Try each possible remainder s. Then dp[r] = longest valid subsequence ending in a number with remainder r; the number before it must have remainder (s − r) mod k.",
i:"nums = [1,2,3,4,5], k = 2",o:"5",time:"O(k · n)",space:"O(k)",
code:C(`
class Solution:
    def maximumLength(self, nums, k):
        res = 0
        for s in range(k):
            dp = [0] * k
            for x in nums:
                r = x % k
                dp[r] = max(dp[r], dp[(s - r) % k] + 1)
                res = max(res, dp[r])
        return res
`)});
lite({id:3356,slug:"zero-array-transformation-ii",title:"Zero Array Transformation II",level:"Medium",topic:BS,name:"Binary search on k + difference array",
w:"nums [2,0,2]: after the first 2 queries every cell can lose up to 2, which covers the two 2s. So 2 queries are enough.",k:"Checking whether the first k queries are enough is easy with a difference array: each query adds capacity v on [l, r] and every cell needs capacity ≥ its value. More queries never hurt, so binary search the smallest k.",
i:"nums = [2,0,2], queries = [[0,2,1],[0,2,1],[1,1,3]]",o:"2",time:"O((n+q) log q)",space:"O(n)",
code:C(`
class Solution:
    def minZeroArray(self, nums, queries):
        n = len(nums)
        def ok(k):
            diff = [0] * (n + 1)
            for l, r, v in queries[:k]:
                diff[l] += v
                diff[r + 1] -= v
            cur = 0
            for i in range(n):
                cur += diff[i]
                if cur < nums[i]:
                    return False
            return True
        if not ok(len(queries)):
            return -1
        lo, hi = 0, len(queries)
        while lo < hi:
            mid = (lo + hi) // 2
            if ok(mid):
                hi = mid
            else:
                lo = mid + 1
        return lo
`)});
lite({id:3419,slug:"minimize-the-maximum-edge-weight-of-graph",title:"Minimize the Maximum Edge Weight of Graph",level:"Medium",topic:GR,name:"Minimax Dijkstra on the reversed graph",
w:"Every node must reach node 0. With edges of weight 1 only (1→0, 3→0, 4→3, 2→1) all nodes reach 0, so the largest weight needed is 1.",k:"Each node needs only one outgoing edge towards 0, so the limit on edges per node never blocks us. Reverse the edges and run a Dijkstra from 0 where a path's cost is its largest edge; the answer is the worst node, or −1 if some node is unreachable.",
i:"n=5, edges=[[1,0,1],[2,0,2],[3,0,1],[4,3,1],[2,1,1]], threshold=2",o:"1",time:"O(E log E)",space:"O(n + E)",
code:C(`
class Solution:
    def minMaxWeight(self, n, edges, threshold):
        rev = defaultdict(list)
        for a, b, w in edges:
            rev[b].append((a, w))
        best = {0: 0}
        h = [(0, 0)]
        while h:
            d, u = heappop(h)
            if d > best.get(u, inf):
                continue
            for v, w in rev[u]:
                nd = max(d, w)
                if nd < best.get(v, inf):
                    best[v] = nd
                    heappush(h, (nd, v))
        return max(best.values()) if len(best) == n else -1
`)});
lite({id:3443,slug:"maximum-manhattan-distance-after-k-changes",title:"Maximum Manhattan Distance After K Changes",level:"Medium",topic:GD,name:"Greedy: distance so far + 2 per change",
w:"'NWSE' with 1 change: after N, W, S we stand 1 away from the start; changing S to the opposite way adds 2, so 3 is reachable.",k:"At every prefix of length i, each change can turn a step that goes 'back' into a step that goes 'forward', adding 2 to the distance. The best distance there is min(current distance + 2k, i). Keep the maximum over all prefixes.",
i:'s = "NWSE", k = 1',o:"3",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def maxDistance(self, s, k):
        x = y = best = 0
        for i, ch in enumerate(s, 1):
            if ch == "N":
                y += 1
            elif ch == "S":
                y -= 1
            elif ch == "E":
                x += 1
            else:
                x -= 1
            best = max(best, min(abs(x) + abs(y) + 2 * k, i))
        return best
`)});
