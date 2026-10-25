module.exports=({alt})=>{
const C=s=>s.replace(/^\n/,"").replace(/\n$/,"").split("\n");
// ---- Salesforce (3/3)
alt(1245,{name:"DFS returning the two tallest branches",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"At each node the longest path through it is the sum of its two deepest child branches; take the maximum over all nodes.",code:C(`
class Solution:
    def treeDiameter(self, edges):
        n = len(edges) + 1
        g = [[] for _ in range(n)]
        for a, b in edges:
            g[a].append(b)
            g[b].append(a)
        best = 0
        def depth(u, p):
            nonlocal best
            top1 = top2 = 0
            for v in g[u]:
                if v != p:
                    d = depth(v, u) + 1
                    if d > top1:
                        top1, top2 = d, top1
                    elif d > top2:
                        top2 = d
            best = max(best, top1 + top2)
            return top1
        depth(0, -1)
        return best
`)});
alt(2434,{name:"Precomputed suffix minimum",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"Instead of counts, precompute the smallest letter in every suffix; pop the stack while its top is not larger than the smallest letter still to come.",code:C(`
class Solution:
    def robotWithString(self, s):
        n = len(s)
        suf = [''] * (n + 1)
        suf[n] = '{'
        for i in range(n - 1, -1, -1):
            suf[i] = min(s[i], suf[i + 1])
        st = []
        res = []
        for i, c in enumerate(s):
            st.append(c)
            while st and st[-1] <= suf[i + 1]:
                res.append(st.pop())
        return ''.join(res)
`)});
alt(1552,{name:"Try every distance from large to small",tag:"Brute force",time:"O(n·R)",space:"O(1)",explain:"Test distances from the largest possible downwards and return the first one that fits m balls.",code:C(`
class Solution:
    def maxDistance(self, position, m):
        position.sort()
        for d in range(position[-1] - position[0], 0, -1):
            cnt, last = 1, position[0]
            for p in position[1:]:
                if p - last >= d:
                    cnt += 1
                    last = p
            if cnt >= m:
                return d
        return 0
`)});
alt(1710,{name:"Buckets by units per box",tag:"Alternative",time:"O(n + 1000)",space:"O(1000)",explain:"Units per box are at most 1000: add up the box counts per unit value and spend the truck from the top bucket down.",code:C(`
class Solution:
    def maximumUnits(self, boxTypes, truckSize):
        bucket = [0] * 1001
        for count, units in boxTypes:
            bucket[units] += count
        total = 0
        for u in range(1000, 0, -1):
            take = min(bucket[u], truckSize)
            total += take * u
            truckSize -= take
            if truckSize == 0:
                break
        return total
`)});
alt(2231,{name:"Swap until nothing improves",tag:"Brute force",time:"O(d²)",space:"O(d)",explain:"Bubble-sort style: repeatedly swap a smaller digit in front of a bigger one of the same parity.",code:C(`
class Solution:
    def largestInteger(self, num):
        d = list(str(num))
        changed = True
        while changed:
            changed = False
            for i in range(len(d)):
                for j in range(i + 1, len(d)):
                    if (int(d[i]) - int(d[j])) % 2 == 0 and d[i] < d[j]:
                        d[i], d[j] = d[j], d[i]
                        changed = True
        return int(''.join(d))
`)});
alt(2515,{name:"Walk outwards step by step",tag:"Alternative",time:"O(n)",space:"O(1)",explain:"Look at the word s steps to the right and s steps to the left of the start for s = 0, 1, 2 …; the first hit is the answer.",code:C(`
class Solution:
    def closestTarget(self, words, target, startIndex):
        n = len(words)
        for s in range(n):
            if words[(startIndex + s) % n] == target or words[(startIndex - s) % n] == target:
                return s
        return -1
`)});
alt(1481,{name:"Min-heap of frequencies",tag:"Alternative",time:"O(n log n)",space:"O(n)",explain:"Pop the smallest frequency while it can still be removed completely.",code:C(`
class Solution:
    def findLeastNumOfUniqueInts(self, arr, k):
        heap = list(Counter(arr).values())
        heapify(heap)
        while heap and k >= heap[0]:
            k -= heappop(heap)
        return len(heap)
`)});
alt(768,{name:"Prefix sums against the sorted array",tag:"Alternative",time:"O(n log n)",space:"O(n)",explain:"Cut after position i when the first i+1 numbers add up to the same as the i+1 smallest numbers (then they are exactly those numbers).",code:C(`
class Solution:
    def maxChunksToSorted(self, arr):
        s = sorted(arr)
        a = b = chunks = 0
        for x, y in zip(arr, s):
            a += x
            b += y
            if a == b:
                chunks += 1
        return chunks
`)});
alt(2345,{name:"Compare every pair",tag:"Brute force",time:"O(n²)",space:"O(1)",explain:"A mountain is hidden when some other mountain's base interval contains its own (identical ones hide each other).",code:C(`
class Solution:
    def visibleMountains(self, peaks):
        res = 0
        for i, (x, y) in enumerate(peaks):
            hidden = False
            for j, (a, b) in enumerate(peaks):
                if i != j and a - b <= x - y and a + b >= x + y:
                    hidden = True
                    break
            if not hidden:
                res += 1
        return res
`)});
alt(630,{name:"DP on the number of courses taken",tag:"Alternative",time:"O(n²)",space:"O(n)",explain:"Process courses by deadline; f[j] is the least time needed to take j courses; extend f[j−1] by this course if it still ends by its deadline.",code:C(`
class Solution:
    def scheduleCourse(self, courses):
        n = len(courses)
        f = [0] + [float('inf')] * n
        for dur, last in sorted(courses, key=lambda c: c[1]):
            for j in range(n, 0, -1):
                if f[j - 1] + dur <= last:
                    f[j] = min(f[j], f[j - 1] + dur)
        return max(j for j in range(n + 1) if f[j] < float('inf'))
`)});
alt(3170,{name:"26 stacks of indices",tag:"Alternative",time:"O(26·n)",space:"O(n)",explain:"Keep a stack of positions for each letter. A star pops the latest position of the smallest letter that has any.",code:C(`
class Solution:
    def clearStars(self, s):
        st = [[] for _ in range(26)]
        gone = set()
        for i, c in enumerate(s):
            if c == '*':
                for lst in st:
                    if lst:
                        gone.add(lst.pop())
                        break
            else:
                st[ord(c) - 97].append(i)
        return ''.join(c for i, c in enumerate(s) if c != '*' and i not in gone)
`)});
alt(1839,{name:"Single pass with a vowel counter",tag:"Alternative",time:"O(n)",space:"O(1)",explain:"Track the start of the current non-decreasing block and how many distinct vowels it holds; restart when the order breaks.",code:C(`
class Solution:
    def longestBeautifulSubstring(self, word):
        best = 0
        start = 0
        kinds = 1
        for i in range(1, len(word)):
            if word[i] < word[i - 1]:
                start = i
                kinds = 1
            elif word[i] > word[i - 1]:
                kinds += 1
            if kinds == 5:
                best = max(best, i - start + 1)
        return best
`)});
alt(3366,{name:"Plain recursion over choices",tag:"Brute force",time:"O(4ⁿ)",space:"O(n)",explain:"Same four choices per element, without caching (fine only for tiny arrays).",code:C(`
class Solution:
    def minArraySum(self, nums, k, op1, op2):
        n = len(nums)
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
                if x >= k:
                    best = min(best, (x - k + 1) // 2 + go(i + 1, a - 1, b - 1))
                if (x + 1) // 2 >= k:
                    best = min(best, (x + 1) // 2 - k + go(i + 1, a - 1, b - 1))
            return best
        return go(0, op1, op2)
`)});
alt(2534,{name:"Two heaps of waiting people",tag:"Alternative",time:"O(n log n)",space:"O(n)",explain:"Same second-by-second simulation, but the waiting people of each direction sit in a min-heap of their index.",code:C(`
class Solution:
    def timeTaken(self, arrival, state):
        n = len(arrival)
        h = [[], []]
        ans = [0] * n
        t = i = done = 0
        prev = 1
        while done < n:
            while i < n and arrival[i] <= t:
                heappush(h[state[i]], i)
                i += 1
            if h[0] and h[1]:
                d = prev
            elif h[0]:
                d = 0
            elif h[1]:
                d = 1
            else:
                prev = 1
                t += 1
                continue
            ans[heappop(h[d])] = t
            prev = d
            done += 1
            t += 1
        return ans
`)});
alt(2035,{name:"Try every group of n",tag:"Brute force",time:"O(C(2n,n))",space:"O(n)",explain:"Enumerate every way to pick n numbers for the first group (only for small n).",code:C(`
class Solution:
    def minimumDifference(self, nums):
        n = len(nums) // 2
        total = sum(nums)
        return min(abs(total - 2 * sum(c)) for c in combinations(nums, n))
`)});
alt(2918,{name:"Spell out the cases",tag:"Alternative",time:"O(n)",space:"O(1)",explain:"Compare the minimum sums a and b; the one with zeros can grow, the one without cannot.",code:C(`
class Solution:
    def minSum(self, nums1, nums2):
        z1, z2 = nums1.count(0), nums2.count(0)
        a, b = sum(nums1) + z1, sum(nums2) + z2
        if a == b:
            return a
        if a < b:
            return b if z1 else -1
        return a if z2 else -1
`)});
alt(2204,{name:"Find the cycle with DFS",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"DFS with parent tracking finds the back edge that closes the cycle; walk the parent chain to collect the cycle, then BFS outwards.",code:C(`
class Solution:
    def distanceToCycle(self, n, edges):
        g = [[] for _ in range(n)]
        for a, b in edges:
            g[a].append(b)
            g[b].append(a)
        parent = [-1] * n
        seen = [False] * n
        cycle = []
        stack = [(0, -1)]
        while stack and not cycle:
            u, p = stack.pop()
            if seen[u]:
                continue
            seen[u] = True
            parent[u] = p
            for v in g[u]:
                if v == p:
                    continue
                if seen[v]:
                    x = u
                    while x != v:
                        cycle.append(x)
                        x = parent[x]
                    cycle.append(v)
                    break
                stack.append((v, u))
        dist = [-1] * n
        q = deque(cycle)
        for c in cycle:
            dist[c] = 0
        while q:
            u = q.popleft()
            for v in g[u]:
                if dist[v] < 0:
                    dist[v] = dist[u] + 1
                    q.append(v)
        return dist
`)});
alt(2718,{name:"Fill the matrix",tag:"Brute force",time:"O(q·n)",space:"O(n²)",explain:"Apply every query to an actual n×n matrix and sum it.",code:C(`
class Solution:
    def matrixSumQueries(self, n, queries):
        m = [[0] * n for _ in range(n)]
        for t, idx, val in queries:
            for k in range(n):
                if t == 0:
                    m[idx][k] = val
                else:
                    m[k][idx] = val
        return sum(map(sum, m))
`)});
};
