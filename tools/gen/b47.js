const {lite}=require("./lib");
const C=s=>s.replace(/^\n/,"").replace(/\n$/,"").split("\n");
const ARR="Array / String",HM="Hash Map / Set",STK="Stack / Monotonic Stack",BT="Binary Tree",GR="Graph",HP="Heap",DP="Dynamic Programming",GD="Greedy",MB="Math / Bit Manipulation",BS="Binary Search",SRT="Sorting",SW="Sliding Window",MX="Matrix",UF="Union Find / Segment Tree",TP="Two Pointers",IV="Intervals",BTK="Backtracking",DS="Design",LL="Linked List",TR="Trie",PS="Prefix Sum";
// ---- Salesforce (1/3)
// ---- Salesforce (3/3)
lite({id:1245,slug:"tree-diameter",title:"Tree Diameter",level:"Medium",topic:GR,name:"Two BFS runs find the longest path",
w:"Star with centre 0 and leaves 1, 2: the longest path 1-0-2 has 2 edges.",k:"BFS from any node reaches the farthest node A; that A is one end of a longest path. BFS from A: the largest distance found is the diameter.",
i:"edges = [[0,1],[0,2]]",o:"2",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def treeDiameter(self, edges):
        n = len(edges) + 1
        g = [[] for _ in range(n)]
        for a, b in edges:
            g[a].append(b)
            g[b].append(a)
        def bfs(s):
            d = [-1] * n
            d[s] = 0
            q = deque([s])
            while q:
                u = q.popleft()
                for v in g[u]:
                    if d[v] < 0:
                        d[v] = d[u] + 1
                        q.append(v)
            far = d.index(max(d))
            return far, d[far]
        a, _ = bfs(0)
        return bfs(a)[1]
`)});
lite({id:2434,slug:"using-a-robot-to-print-the-lexicographically-smallest-string",title:"Using a Robot to Print the Lexicographically Smallest String",level:"Medium",topic:STK,name:"Pop while the top is not worse than anything left",
w:"'bac': push b, push a, pop a (nothing smaller remains), pop b, push c, pop c → 'abc'.",k:"The robot's string t is a stack. Write the top character to paper only when it is no larger than every character still unread (the smallest remaining letter, tracked with counts). Otherwise keep pushing.",
i:"s = \"bac\"",o:"\"abc\"",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def robotWithString(self, s):
        cnt = Counter(s)
        st = []
        res = []
        mn = 'a'
        for c in s:
            st.append(c)
            cnt[c] -= 1
            while mn < 'z' and cnt[mn] == 0:
                mn = chr(ord(mn) + 1)
            while st and st[-1] <= mn:
                res.append(st.pop())
        return ''.join(res)
`)});
lite({id:1552,slug:"magnetic-force-between-two-balls",title:"Magnetic Force Between Two Balls",level:"Medium",topic:BS,name:"Binary search the minimum distance",
w:"Baskets at [1,2,3,4,7], 3 balls: put them at 1, 4, 7 → smallest gap 3.",k:"Guess the minimum gap d and place balls greedily from the left, each at the first basket at least d away from the last one. If m balls fit, d works; larger d is harder, so binary search the largest d that works.",
i:"position = [1,2,3,4,7], m = 3",o:"3",time:"O(n log n + n log R)",space:"O(1)",
code:C(`
class Solution:
    def maxDistance(self, position, m):
        position.sort()
        def can(d):
            cnt, last = 1, position[0]
            for p in position[1:]:
                if p - last >= d:
                    cnt += 1
                    last = p
            return cnt >= m
        lo, hi = 1, position[-1] - position[0]
        while lo < hi:
            mid = (lo + hi + 1) // 2
            if can(mid):
                lo = mid
            else:
                hi = mid - 1
        return lo
`)});
lite({id:1710,slug:"maximum-units-on-a-truck",title:"Maximum Units on a Truck",level:"Easy",topic:GD,name:"Load the densest boxes first",
w:"[[1,3],[2,2],[3,1]], truck holds 4 boxes: take 1 box of 3 units, 2 of 2 units, 1 of 1 unit = 8.",k:"Every box takes one slot, so use the slots for boxes with the most units. Sort box types by units per box, descending, and take as many as fit.",
i:"boxTypes = [[1,3],[2,2],[3,1]], truckSize = 4",o:"8",time:"O(n log n)",space:"O(1)",
code:C(`
class Solution:
    def maximumUnits(self, boxTypes, truckSize):
        total = 0
        for count, units in sorted(boxTypes, key=lambda b: -b[1]):
            take = min(count, truckSize)
            total += take * units
            truckSize -= take
            if truckSize == 0:
                break
        return total
`)});
lite({id:2231,slug:"largest-number-after-digit-swaps-by-parity",title:"Largest Number After Digit Swaps by Parity",level:"Easy",topic:SRT,name:"Sort odd and even digits separately",
w:"1234: odds {1,3} and evens {2,4} → put the larger odd first, then the larger even … → 3412.",k:"Only digits of the same parity can swap, so they can be arranged in any order within their own positions. Put the biggest odd digits in the odd-digit positions and the biggest even digits in the even-digit positions.",
i:"num = 1234",o:"3412",time:"O(d log d)",space:"O(d)",
code:C(`
class Solution:
    def largestInteger(self, num):
        digits = list(map(int, str(num)))
        odd = sorted((d for d in digits if d % 2), reverse=True)
        even = sorted((d for d in digits if d % 2 == 0), reverse=True)
        oi = ei = 0
        res = 0
        for d in digits:
            if d % 2:
                res = res * 10 + odd[oi]
                oi += 1
            else:
                res = res * 10 + even[ei]
                ei += 1
        return res
`)});
lite({id:2515,slug:"shortest-distance-to-target-string-in-a-circular-array",title:"Shortest Distance to Target String in a Circular Array",level:"Easy",topic:ARR,name:"Min circular distance to any match",
w:"['hello','i','am','leetcode','hello'], target hello, start 1: index 0 is one step left → 1.",k:"For each index holding target, the walking distance is the smaller of the direct gap and the way around the circle (n − gap). Return the minimum, or −1 if the target is absent.",
i:"words = [\"hello\",\"i\",\"am\",\"leetcode\",\"hello\"], target = \"hello\", startIndex = 1",o:"1",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def closestTarget(self, words, target, startIndex):
        n = len(words)
        best = n
        for i, w in enumerate(words):
            if w == target:
                gap = abs(i - startIndex)
                best = min(best, gap, n - gap)
        return best if best < n else -1
`)});
lite({id:1481,slug:"least-number-of-unique-integers-after-k-removals",title:"Least Number of Unique Integers after K Removals",level:"Medium",topic:GD,name:"Wipe out the rarest values first",
w:"[5,5,4], k=1: removing the single 4 leaves just the value 5 → 1 unique integer.",k:"To minimise how many distinct values remain, delete values completely, starting with those that appear least often. Sort the frequencies ascending and spend k removals on whole groups while you can.",
i:"arr = [5,5,4], k = 1",o:"1",time:"O(n log n)",space:"O(n)",
code:C(`
class Solution:
    def findLeastNumOfUniqueInts(self, arr, k):
        counts = sorted(Counter(arr).values())
        removed = 0
        for c in counts:
            if k >= c:
                k -= c
                removed += 1
            else:
                break
        return len(counts) - removed
`)});
lite({id:768,slug:"max-chunks-to-make-sorted-ii",title:"Max Chunks To Make Sorted II",level:"Hard",topic:STK,name:"Stack of chunk maximums",
w:"[2,1,3,4,4]: chunks [2,1], [3], [4], [4] → 4.",k:"Keep a stack with the maximum of each chunk so far (increasing). A new number smaller than the top must merge with those chunks: pop them and push their overall maximum. The stack size at the end is the number of chunks.",
i:"arr = [2,1,3,4,4]",o:"4",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def maxChunksToSorted(self, arr):
        st = []
        for x in arr:
            m = x
            while st and st[-1] > x:
                m = max(m, st.pop())
            st.append(m)
        return len(st)
`)});
lite({id:2345,slug:"finding-the-number-of-visible-mountains",title:"Finding the Number of Visible Mountains",level:"Medium",topic:IV,name:"A mountain is an interval [x−y, x+y]",
w:"[[2,2],[6,3],[5,4]]: mountain [6,3] lies inside [5,4]'s base → hidden, so 2 are visible.",k:"A mountain with peak (x, y) covers the base interval [x−y, x+y]; it is hidden exactly when another interval contains it. Identical mountains hide each other. Sort the distinct intervals by left end (right end descending), sweep keeping the largest right end seen, and count intervals that extend past it and are not duplicated.",
i:"peaks = [[2,2],[6,3],[5,4]]",o:"2",time:"O(n log n)",space:"O(n)",
code:C(`
class Solution:
    def visibleMountains(self, peaks):
        cnt = Counter(map(tuple, peaks))
        spans = sorted({(x - y, x + y) for x, y in peaks}, key=lambda t: (t[0], -t[1]))
        res = 0
        far = float('-inf')
        for l, r in spans:
            if r > far:
                far = r
                if cnt[((l + r) // 2, (r - l) // 2)] == 1:
                    res += 1
        return res
`)});
lite({id:630,slug:"course-schedule-iii",title:"Course Schedule III",level:"Hard",topic:HP,name:"By deadline, drop the longest course when late",
w:"Courses [100,200],[200,1300],[1000,1250],[2000,3200] → take the first three, the 2000-day course cannot fit → 3.",k:"Process courses by deadline. Add each course to the schedule (and a max-heap of durations). If the total time now passes this deadline, drop the longest course taken so far — that frees the most time while losing just one course.",
i:"courses = [[100,200],[200,1300],[1000,1250],[2000,3200]]",o:"3",time:"O(n log n)",space:"O(n)",
code:C(`
class Solution:
    def scheduleCourse(self, courses):
        total = 0
        heap = []
        for dur, last in sorted(courses, key=lambda c: c[1]):
            heappush(heap, -dur)
            total += dur
            if total > last:
                total += heappop(heap)
        return len(heap)
`)});
lite({id:3170,slug:"lexicographically-minimum-string-after-removing-stars",title:"Lexicographically Minimum String After Removing Stars",level:"Medium",topic:HP,name:"Heap of smallest letters, latest index first",
w:"'aaba*': the star removes the smallest letter to its left; remove the last 'a' (index 3) → 'aab'.",k:"Each '*' deletes the smallest character on its left. To keep the final string smallest, among equal smallest letters delete the RIGHTMOST one. Use a min-heap of (letter, −index); pop on '*', mark that index removed, and rebuild the string from the remaining letters.",
i:"s = \"aaba*\"",o:"\"aab\"",time:"O(n log n)",space:"O(n)",
code:C(`
class Solution:
    def clearStars(self, s):
        heap = []
        gone = set()
        for i, c in enumerate(s):
            if c == '*':
                _, neg = heappop(heap)
                gone.add(-neg)
            else:
                heappush(heap, (c, -i))
        return ''.join(c for i, c in enumerate(s) if c != '*' and i not in gone)
`)});
lite({id:1839,slug:"longest-substring-of-all-vowels-in-order",title:"Longest Substring Of All Vowels in Order",level:"Medium",topic:SW,name:"Five consecutive letter-runs a, e, i, o, u",
w:"…'aeiaaioaaaaeiiiiouuuooaauuaeiu' → the best beautiful block is 'aaaaeiiiiouuu' of length 13.",k:"A beautiful substring is a run of a's, then e's, then i's, o's, u's (each at least once). Compress the word into runs of equal letters; any five consecutive runs spelling 'aeiou' form a beautiful substring, and its length is the sum of the five run lengths.",
i:"word = \"aeiaaioaaaaeiiiiouuuooaauuaeiu\"",o:"13",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def longestBeautifulSubstring(self, word):
        runs = [(c, len(list(g))) for c, g in groupby(word)]
        best = 0
        for i in range(len(runs) - 4):
            window = runs[i:i + 5]
            if ''.join(c for c, _ in window) == 'aeiou':
                best = max(best, sum(l for _, l in window))
        return best
`)});
lite({id:3366,slug:"minimum-array-sum",title:"Minimum Array Sum",level:"Medium",topic:DP,name:"DP over index and operations left",
w:"[2,8,3,19,3], k=3, one halving and one subtraction: apply both to 19 → 10 − 3 = 7 → sum 23.",k:"Each element can get nothing, op1 (halve, rounding up), op2 (subtract k, only if ≥ k), or both (in the better of the two orders). dp(i, a, b) = best sum of the suffix with a halvings and b subtractions left. Try every option per element.",
i:"nums = [2,8,3,19,3], k = 3, op1 = 1, op2 = 1",o:"23",time:"O(n·op1·op2)",space:"O(n·op1·op2)",
code:C(`
class Solution:
    def minArraySum(self, nums, k, op1, op2):
        n = len(nums)
        @lru_cache(None)
        def go(i, a, b):
            if i == n:
                return 0
            x = nums[i]
            best = x + go(i + 1, a, b)
            if a:
                best = min(best, (x + 1) // 2 + go(i + 1, a - 1, b))
            if b and x >= k:
                best = min(best, x - k + go(i + 1, a, b - 1))
            if a and b:
                both = []
                if x >= k:
                    both.append((x - k + 1) // 2)
                half = (x + 1) // 2
                if half >= k:
                    both.append(half - k)
                if both:
                    best = min(best, min(both) + go(i + 1, a - 1, b - 1))
            return best
        return go(0, op1, op2)
`)});
lite({id:2534,slug:"time-taken-to-cross-the-door",title:"Time Taken to Cross the Door",level:"Hard",topic:ARR,name:"Two queues and the door's last use",
w:"arrival [0,1,1,2,4], state [0,1,0,0,1]: crossing times come out as [0,3,1,2,4].",k:"Simulate second by second with one queue for people who want to enter and one to exit (first come, first served). If both queues are non-empty, the door's previous use decides: same direction as last second wins, and if the door was idle exit goes first. Remember the last direction (or idle) and the current time.",
i:"arrival = [0,1,1,2,4], state = [0,1,0,0,1]",o:"[0, 3, 1, 2, 4]",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def timeTaken(self, arrival, state):
        n = len(arrival)
        q = [deque(), deque()]
        ans = [0] * n
        t = i = done = 0
        prev = 1
        while done < n:
            while i < n and arrival[i] <= t:
                q[state[i]].append(i)
                i += 1
            if q[0] and q[1]:
                d = prev
            elif q[0]:
                d = 0
            elif q[1]:
                d = 1
            else:
                prev = 1
                t += 1
                continue
            ans[q[d].popleft()] = t
            prev = d
            done += 1
            t += 1
        return ans
`)});
lite({id:2035,slug:"partition-array-into-two-arrays-to-minimize-sum-difference",title:"Partition Array Into Two Arrays to Minimize Sum Difference",level:"Hard",topic:BTK,name:"Meet in the middle by subset size",
w:"[3,9,7,3] → split into [3,9] and [7,3]? sums 12 and 10 → difference 2.",k:"2n numbers split into two groups of n. Split the array into halves of n and list every subset of each half with its size and sum. A group of n is k elements from the left half plus n − k from the right. For each k, sort the right sums for size n − k and binary search the one that makes the group sum closest to half the total.",
i:"nums = [3,9,7,3]",o:"2",time:"O(2ⁿ · n)",space:"O(2ⁿ)",
code:C(`
class Solution:
    def minimumDifference(self, nums):
        n = len(nums) // 2
        total = sum(nums)
        left = [[] for _ in range(n + 1)]
        right = [[] for _ in range(n + 1)]
        for mask in range(1 << n):
            c = sl = sr = 0
            for i in range(n):
                if mask >> i & 1:
                    c += 1
                    sl += nums[i]
                    sr += nums[n + i]
            left[c].append(sl)
            right[c].append(sr)
        best = float('inf')
        for k in range(n + 1):
            R = sorted(right[n - k])
            for s in left[k]:
                j = bisect_left(R, total / 2 - s)
                for jj in (j - 1, j):
                    if 0 <= jj < len(R):
                        best = min(best, abs(total - 2 * (s + R[jj])))
        return best
`)});
lite({id:2918,slug:"minimum-equal-sum-of-two-arrays-after-replacing-zeros",title:"Minimum Equal Sum of Two Arrays After Replacing Zeros",level:"Medium",topic:GD,name:"Replace every zero by 1, then compare",
w:"[3,2,0,1,0] → 3+2+1+1+1 = 8 and [6,5,0] → 12: the first has zeros to grow, so both become 12.",k:"Every zero must become at least 1, so the smallest possible sums are a = sum1 + zeros1 and b = sum2 + zeros2. The answer is max(a, b) — unless the smaller side has no zeros to grow, then it is impossible (−1).",
i:"nums1 = [3,2,0,1,0], nums2 = [6,5,0]",o:"12",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def minSum(self, nums1, nums2):
        z1, z2 = nums1.count(0), nums2.count(0)
        a = sum(nums1) + z1
        b = sum(nums2) + z2
        if (a < b and z1 == 0) or (b < a and z2 == 0):
            return -1
        return max(a, b)
`)});
lite({id:2204,slug:"distance-to-a-cycle-in-undirected-graph",title:"Distance to a Cycle in Undirected Graph",level:"Hard",topic:GR,name:"Peel leaves to find the cycle, then BFS",
w:"Cycle 1-2-4-3 with branches 0 (off 1) and 5-6 (off 2): distances [1,0,0,0,0,1,2].",k:"The graph is connected with exactly one cycle. Repeatedly remove nodes of degree 1 (like topological sort); the nodes that never get removed are the cycle. Then run a multi-source BFS from all cycle nodes to get every node's distance.",
i:"n = 7, edges = [[1,2],[2,4],[4,3],[3,1],[0,1],[5,2],[6,5]]",o:"[1, 0, 0, 0, 0, 1, 2]",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def distanceToCycle(self, n, edges):
        g = [[] for _ in range(n)]
        for a, b in edges:
            g[a].append(b)
            g[b].append(a)
        deg = [len(x) for x in g]
        q = deque(i for i in range(n) if deg[i] == 1)
        peeled = [False] * n
        while q:
            u = q.popleft()
            peeled[u] = True
            for v in g[u]:
                deg[v] -= 1
                if deg[v] == 1:
                    q.append(v)
        dist = [-1] * n
        q = deque()
        for i in range(n):
            if not peeled[i]:
                dist[i] = 0
                q.append(i)
        while q:
            u = q.popleft()
            for v in g[u]:
                if dist[v] < 0:
                    dist[v] = dist[u] + 1
                    q.append(v)
        return dist
`)});
lite({id:2718,slug:"sum-of-matrix-after-queries",title:"Sum of Matrix After Queries",level:"Medium",topic:MX,name:"Process the queries backwards",
w:"n=3 with queries row0=1, col2=2, row2=3, col0=4 → final matrix sums to 23.",k:"A later query overwrites an earlier one on the same row or column, so go backwards: the first time a row (or column) is seen it is final. A row set to v contributes v for every cell not already covered by a final column, i.e. v × (n − columns already fixed); a column symmetrically.",
i:"n = 3, queries = [[0,0,1],[1,2,2],[0,2,3],[1,0,4]]",o:"23",time:"O(q)",space:"O(n)",
code:C(`
class Solution:
    def matrixSumQueries(self, n, queries):
        rows, cols = set(), set()
        total = 0
        for t, idx, val in reversed(queries):
            if t == 0:
                if idx not in rows:
                    rows.add(idx)
                    total += val * (n - len(cols))
            else:
                if idx not in cols:
                    cols.add(idx)
                    total += val * (n - len(rows))
        return total
`)});
