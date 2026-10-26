module.exports=({alt})=>{
const C=s=>s.replace(/^\n/,"").replace(/\n$/,"").split("\n");
// ---- Bloomberg (6)
alt(832,{name:"Flip with two pointers, invert in place",tag:"Alternative",time:"O(n²)",space:"O(1)",explain:"Swap-and-invert each row from both ends.",code:C(`
class Solution:
    def flipAndInvertImage(self, image):
        for row in image:
            i, j = 0, len(row) - 1
            while i <= j:
                row[i], row[j] = 1 - row[j], 1 - row[i]
                i += 1
                j -= 1
        return image
`)});
alt(2845,{name:"Brute force over subarrays",tag:"Alternative",time:"O(n²)",space:"O(1)",explain:"Count the marked elements of every subarray directly.",code:C(`
class Solution:
    def countInterestingSubarrays(self, nums, modulo, k):
        res = 0
        for i in range(len(nums)):
            c = 0
            for j in range(i, len(nums)):
                if nums[j] % modulo == k:
                    c += 1
                if c % modulo == k:
                    res += 1
        return res
`)});
alt(2259,{name:"Compare candidates by last occurrence rule",tag:"Alternative",time:"O(n)",space:"O(1)",explain:"Remove the first occurrence followed by a larger digit, otherwise the last occurrence.",code:C(`
class Solution:
    def removeDigit(self, number, digit):
        last = -1
        for i, c in enumerate(number):
            if c == digit:
                last = i
                if i + 1 < len(number) and number[i + 1] > c:
                    return number[:i] + number[i + 1:]
        return number[:last] + number[last + 1:]
`)});
alt(2337,{name:"Compare the piece lists",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"The pieces must appear in the same order with legal movement directions.",code:C(`
class Solution:
    def canChange(self, start, target):
        a = [(c, i) for i, c in enumerate(start) if c != '_']
        b = [(c, i) for i, c in enumerate(target) if c != '_']
        if len(a) != len(b):
            return False
        for (c1, i), (c2, j) in zip(a, b):
            if c1 != c2:
                return False
            if c1 == 'L' and j > i:
                return False
            if c1 == 'R' and j < i:
                return False
        return True
`)});
alt(1128,{name:"Pair every two dominoes",tag:"Brute force",time:"O(n²)",space:"O(1)",explain:"Compare every pair directly.",code:C(`
class Solution:
    def numEquivDominoPairs(self, dominoes):
        n = len(dominoes)
        count = 0
        for i in range(n):
            for j in range(i + 1, n):
                a, b = dominoes[i]
                c, d = dominoes[j]
                if (a == c and b == d) or (a == d and b == c):
                    count += 1
        return count
`)});
alt(2071,{name:"Brute force assignment search",tag:"Brute force",time:"exponential",space:"O(n)",explain:"Try every task / worker / pill choice recursively.",code:C(`
class Solution:
    def maxTaskAssign(self, tasks, workers, pills, strength):
        @lru_cache(None)
        def f(i, used, p):
            if i == len(tasks):
                return 0
            best = f(i + 1, used, p)
            for j, w in enumerate(workers):
                if used >> j & 1:
                    continue
                if w >= tasks[i]:
                    best = max(best, 1 + f(i + 1, used | 1 << j, p))
                elif p > 0 and w + strength >= tasks[i]:
                    best = max(best, 1 + f(i + 1, used | 1 << j, p - 1))
            return best
        return f(0, 0, pills)
`)});
alt(3557,{name:"Recursion over start positions",tag:"Brute force",time:"O(n²)",space:"O(n)",explain:"From each index either skip it or start a substring and jump past its end.",code:C(`
class Solution:
    def maxSubstrings(self, word):
        n = len(word)
        @lru_cache(None)
        def f(i):
            if i >= n:
                return 0
            best = f(i + 1)
            for j in range(i + 3, n):
                if word[j] == word[i]:
                    best = max(best, 1 + f(j + 1))
            return best
        return f(0)
`)});
alt(3547,{name:"Try every assignment of values",tag:"Brute force",time:"O(n!·m)",space:"O(n)",explain:"Check all permutations of 1…n over the nodes (tiny n only).",code:C(`
class Solution:
    def maxScore(self, n, edges):
        best = 0
        for p in permutations(range(1, n + 1)):
            best = max(best, sum(p[a] * p[b] for a, b in edges))
        return best
`)});
alt(3403,{name:"Check every split",tag:"Brute force",time:"O(n³)",space:"O(n)",explain:"Enumerate every piece that a split can contain and take the largest.",code:C(`
class Solution:
    def answerString(self, word, numFriends):
        if numFriends == 1:
            return word
        n = len(word)
        m = n - numFriends + 1
        best = ""
        for i in range(n):
            for j in range(i + 1, min(n, i + m) + 1):
                best = max(best, word[i:j])
        return best
`)});
alt(2170,{name:"Try every pair of values",tag:"Brute force",time:"O(n + d²)",space:"O(n)",explain:"Try every (even value, odd value) pair with different values.",code:C(`
class Solution:
    def minimumOperations(self, nums):
        ce, co = Counter(nums[0::2]), Counter(nums[1::2])
        ce[None] = 0
        co[None] = 0
        best = 0
        for a, fa in ce.items():
            for b, fb in co.items():
                if a != b or a is None:
                    best = max(best, fa + fb)
        return len(nums) - best
`)});
alt(2000,{name:"Manual reversal",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"Use index() inside a try and build the reversed part with a list.",code:C(`
class Solution:
    def reversePrefix(self, word, ch):
        if ch not in word:
            return word
        chars = list(word)
        i, j = 0, word.index(ch)
        while i < j:
            chars[i], chars[j] = chars[j], chars[i]
            i += 1
            j -= 1
        return ''.join(chars)
`)});
alt(3445,{name:"Brute force over substrings",tag:"Brute force",time:"O(n³)",space:"O(1)",explain:"Check every substring of length ≥ k and every character pair.",code:C(`
class Solution:
    def maxDifference(self, s, k):
        best = float('-inf')
        n = len(s)
        for i in range(n):
            for j in range(i + k, n + 1):
                c = Counter(s[i:j])
                for a in c:
                    for b in c:
                        if c[a] % 2 == 1 and c[b] % 2 == 0:
                            best = max(best, c[a] - c[b])
        return best
`)});
alt(3423,{name:"zip with a rotated copy",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"Pair each element with the next one of a rotated list.",code:C(`
class Solution:
    def maxAdjacentDistance(self, nums):
        return max(abs(a - b) for a, b in zip(nums, nums[1:] + nums[:1]))
`)});
alt(2359,{name:"BFS (Breadth-First Search) from both nodes",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"Distance maps built in separate loops, then scan all nodes in index order.",code:C(`
class Solution:
    def closestMeetingNode(self, edges, node1, node2):
        n = len(edges)
        INF = float('inf')
        def dist(start):
            d = [INF] * n
            cur, steps = start, 0
            while cur != -1 and d[cur] == INF:
                d[cur] = steps
                cur = edges[cur]
                steps += 1
            return d
        d1, d2 = dist(node1), dist(node2)
        best, ans = INF, -1
        for v in range(n):
            m = max(d1[v], d2[v])
            if m < best:
                best, ans = m, v
        return ans
`)});
alt(3582,{name:"Character by character",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"Single scan with a flag for 'start of word'.",code:C(`
class Solution:
    def generateTag(self, caption):
        out = ['#']
        new_word = False
        first = True
        for c in caption:
            if c == ' ':
                if len(out) > 1:
                    new_word = True
                continue
            if not c.isalpha():
                continue
            if new_word:
                out.append(c.upper())
            else:
                out.append(c.lower())
            new_word = False
        return ''.join(out)[:100]
`)});
alt(2807,{name:"Rebuild a new list",tag:"Alternative",time:"O(n log V)",space:"O(n)",explain:"Read the values, then build a fresh list with the gcds in between.",code:C(`
class Solution:
    def insertGreatestCommonDivisors(self, head):
        vals = []
        cur = head
        while cur:
            vals.append(cur.val)
            cur = cur.next
        dummy = ListNode()
        tail = dummy
        for i, v in enumerate(vals):
            tail.next = ListNode(v)
            tail = tail.next
            if i + 1 < len(vals):
                tail.next = ListNode(gcd(v, vals[i + 1]))
                tail = tail.next
        return dummy.next
`)});
alt(87,{name:"Bottom-up DP on lengths",tag:"Alternative",time:"O(n⁴)",space:"O(n³)",explain:"dp[l][i][j] says whether s1[i:i+l] is a scramble of s2[j:j+l].",code:C(`
class Solution:
    def isScramble(self, s1, s2):
        n = len(s1)
        dp = [[[False] * n for _ in range(n)] for _ in range(n + 1)]
        for i in range(n):
            for j in range(n):
                dp[1][i][j] = s1[i] == s2[j]
        for l in range(2, n + 1):
            for i in range(n - l + 1):
                for j in range(n - l + 1):
                    for cut in range(1, l):
                        if dp[cut][i][j] and dp[l - cut][i + cut][j + cut]:
                            dp[l][i][j] = True
                            break
                        if dp[cut][i][j + l - cut] and dp[l - cut][i + cut][j]:
                            dp[l][i][j] = True
                            break
        return dp[n][0][0]
`)});
alt(3333,{name:"Enumerate every original string",tag:"Brute force",time:"exponential",space:"O(1)",explain:"Try every choice of typed counts per group and count those with length ≥ k.",code:C(`
class Solution:
    def possibleStringCount(self, word, k):
        groups = [len(list(g)) for _, g in groupby(word)]
        count = 0
        for pick in product(*[range(1, g + 1) for g in groups]):
            if sum(pick) >= k:
                count += 1
        return count % (10**9 + 7)
`)});
alt(3307,{name:"Build the string",tag:"Brute force",time:"O(2ⁿ)",space:"O(2ⁿ)",explain:"Actually perform the operations (small k only).",code:C(`
class Solution:
    def kthCharacter(self, k, operations):
        word = "a"
        for op in operations:
            if len(word) >= k:
                break
            if op == 0:
                word += word
            else:
                word += ''.join(chr((ord(c) - 97 + 1) % 26 + 97) for c in word)
        return word[k - 1]
`)});
alt(551,{name:"Count in one pass",tag:"Alternative",time:"O(n)",space:"O(1)",explain:"Scan, counting absences and the current run of lates.",code:C(`
class Solution:
    def checkRecord(self, s):
        absent = late = 0
        for c in s:
            if c == 'A':
                absent += 1
            late = late + 1 if c == 'L' else 0
            if absent >= 2 or late >= 3:
                return False
        return True
`)});
alt(3439,{name:"Prefix sums of the gaps",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"Window sums via a prefix-sum array.",code:C(`
class Solution:
    def maxFreeTime(self, eventTime, k, startTime, endTime):
        n = len(startTime)
        gaps = [startTime[0]] + [startTime[i] - endTime[i - 1] for i in range(1, n)] + [eventTime - endTime[-1]]
        pre = [0]
        for g in gaps:
            pre.append(pre[-1] + g)
        return max(pre[i + k + 1] - pre[i] for i in range(len(gaps) - k))
`)});
alt(1900,{name:"Simulate every tournament",tag:"Brute force",time:"exponential",space:"O(n)",explain:"Enumerate who wins each match and record the round in which the two meet.",code:C(`
class Solution:
    def earliestAndLatest(self, n, firstPlayer, secondPlayer):
        f, s = firstPlayer, secondPlayer
        meet = []
        def go(players, rnd):
            L = len(players)
            pairs = [(players[i], players[L - 1 - i]) for i in range(L // 2)]
            mid = players[L // 2] if L % 2 else None
            for a, b in pairs:
                if {a, b} == {f, s}:
                    meet.append(rnd)
                    return
            opts = []
            for a, b in pairs:
                if a in (f, s):
                    opts.append([a])
                elif b in (f, s):
                    opts.append([b])
                else:
                    opts.append([a, b])
            for ch in product(*opts):
                nxt = sorted(list(ch) + ([mid] if mid else []))
                go(nxt, rnd + 1)
        go(list(range(1, n + 1)), 1)
        return [min(meet), max(meet)]
`)});
alt(899,{name:"Simulate the queue (small cases)",tag:"Brute force",time:"exponential",space:"O(n)",explain:"Breadth-first search over all strings reachable by moving one of the first k letters to the end.",code:C(`
class Solution:
    def orderlyQueue(self, s, k):
        seen = {s}
        q = deque([s])
        best = s
        while q:
            cur = q.popleft()
            best = min(best, cur)
            for i in range(k):
                nxt = cur[:i] + cur[i + 1:] + cur[i]
                if nxt not in seen:
                    seen.add(nxt)
                    q.append(nxt)
        return best
`)});
alt(1695,{name:"Prefix sums with last positions",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"Jump the window start past the previous copy of each value.",code:C(`
class Solution:
    def maximumUniqueSubarray(self, nums):
        pre = [0]
        for x in nums:
            pre.append(pre[-1] + x)
        last = {}
        start = 0
        best = 0
        for i, x in enumerate(nums):
            if x in last:
                start = max(start, last[x] + 1)
            last[x] = i
            best = max(best, pre[i + 1] - pre[start])
        return best
`)});
alt(3274,{name:"Colour as a letter",tag:"Alternative",time:"O(1)",space:"O(1)",explain:"Convert each square to 'black' / 'white' by a lookup.",code:C(`
class Solution:
    def checkTwoChessboards(self, coordinate1, coordinate2):
        def colour(c):
            col = 'abcdefgh'.index(c[0])
            row = int(c[1]) - 1
            return 'black' if (col + row) % 2 == 0 else 'white'
        return colour(coordinate1) == colour(coordinate2)
`)});
alt(2044,{name:"Dictionary of reachable OR values",tag:"Alternative",time:"O(n·V)",space:"O(V)",explain:"Count how many subsets give each OR value.",code:C(`
class Solution:
    def countMaxOrSubsets(self, nums):
        ways = Counter({0: 1})
        for x in nums:
            new = Counter(ways)
            for v, c in ways.items():
                new[v | x] += c
            ways = new
        return ways[max(ways)]
`)});
alt(991,{name:"Breadth-first search forward",tag:"Brute force",time:"O(target)",space:"O(target)",explain:"Explore doubles and decrements from the start value.",code:C(`
class Solution:
    def brokenCalc(self, startValue, target):
        seen = {startValue}
        q = deque([(startValue, 0)])
        limit = 2 * max(startValue, target) + 2
        while q:
            v, d = q.popleft()
            if v == target:
                return d
            for nv in (v * 2, v - 1):
                if 0 < nv <= limit and nv not in seen:
                    seen.add(nv)
                    q.append((nv, d + 1))
        return -1
`)});
alt(2597,{name:"Bitmask over all subsets",tag:"Brute force",time:"O(2ⁿ·n)",space:"O(n)",explain:"Test every subset for a pair differing by k.",code:C(`
class Solution:
    def beautifulSubsets(self, nums, k):
        n = len(nums)
        count = 0
        for mask in range(1, 1 << n):
            chosen = [nums[i] for i in range(n) if mask >> i & 1]
            vals = Counter(chosen)
            if all(vals[v + k] == 0 for v in vals):
                count += 1
        return count
`)});
alt(2535,{name:"Loop with divmod",tag:"Alternative",time:"O(n log V)",space:"O(1)",explain:"Peel digits with divmod.",code:C(`
class Solution:
    def differenceOfSum(self, nums):
        digits = 0
        for x in nums:
            while x:
                x, d = divmod(x, 10)
                digits += d
        return abs(sum(nums) - digits)
`)});
alt(2582,{name:"Simulate the passing",tag:"Brute force",time:"O(time)",space:"O(1)",explain:"Move the pillow one person per second.",code:C(`
class Solution:
    def passThePillow(self, n, time):
        pos, step = 1, 1
        for _ in range(time):
            if pos + step < 1 or pos + step > n:
                step = -step
            pos += step
        return pos
`)});
alt(1851,{name:"Brute force per query",tag:"Brute force",time:"O(n·q)",space:"O(q)",explain:"Scan every interval for each query.",code:C(`
class Solution:
    def minInterval(self, intervals, queries):
        res = []
        for q in queries:
            best = -1
            for l, r in intervals:
                if l <= q <= r and (best == -1 or r - l + 1 < best):
                    best = r - l + 1
            res.append(best)
        return res
`)});
alt(1203,{name:"Topological sort with a scan instead of a heap",tag:"Alternative",time:"O(n²)",space:"O(n)",explain:"Repeatedly pick the smallest ready group / item by scanning.",code:C(`
class Solution:
    def sortItems(self, n, m, group, beforeItems):
        group = group[:]
        for i in range(n):
            if group[i] == -1:
                group[i] = m
                m += 1
        def topo(nodes, edges):
            nodes = sorted(nodes)
            indeg = {v: 0 for v in nodes}
            for u in nodes:
                for v in edges.get(u, ()):
                    indeg[v] += 1
            done = []
            remaining = set(nodes)
            while remaining:
                ready = [v for v in nodes if v in remaining and indeg[v] == 0]
                if not ready:
                    return None
                u = ready[0]
                remaining.remove(u)
                done.append(u)
                for v in edges.get(u, ()):
                    indeg[v] -= 1
            return done
        g_edges = defaultdict(set)
        i_edges = defaultdict(set)
        for v in range(n):
            for u in beforeItems[v]:
                if group[u] == group[v]:
                    i_edges[u].add(v)
                else:
                    g_edges[group[u]].add(group[v])
        g_order = topo(range(m), g_edges)
        if g_order is None:
            return []
        res = []
        for g in g_order:
            members = [v for v in range(n) if group[v] == g]
            order = topo(members, i_edges)
            if order is None:
                return []
            res += order
        return res
`)});
alt(3021,{name:"Count the pairs with loops",tag:"Brute force",time:"O(n·m)",space:"O(1)",explain:"Try every (x, y).",code:C(`
class Solution:
    def flowerGame(self, n, m):
        return sum(1 for x in range(1, n + 1) for y in range(1, m + 1) if (x + y) % 2 == 1)
`)});
alt(3211,{name:"Filter all binary strings",tag:"Brute force",time:"O(2ⁿ·n)",space:"O(2ⁿ)",explain:"Generate every string of length n and keep those without '00'.",code:C(`
class Solution:
    def validStrings(self, n):
        return sorted(''.join(p) for p in product('01', repeat=n) if '00' not in ''.join(p))
`)});
alt(3516,{name:"Sort by distance",tag:"Alternative",time:"O(1)",space:"O(1)",explain:"Rank the two distances.",code:C(`
class Solution:
    def findClosest(self, x, y, z):
        d = sorted([(abs(x - z), 1), (abs(y - z), 2)])
        return 0 if d[0][0] == d[1][0] else d[0][1]
`)});
alt(3478,{name:"Brute force per index",tag:"Brute force",time:"O(n² log n)",space:"O(n)",explain:"For each index sort the smaller entries' nums2 values.",code:C(`
class Solution:
    def findMaxSum(self, nums1, nums2, k):
        res = []
        for i in range(len(nums1)):
            vals = sorted((nums2[j] for j in range(len(nums1)) if nums1[j] < nums1[i]), reverse=True)
            res.append(sum(vals[:k]))
        return res
`)});
alt(2119,{name:"Do the reversals",tag:"Brute force",time:"O(log n)",space:"O(log n)",explain:"Reverse the digits twice as strings and compare.",code:C(`
class Solution:
    def isSameAfterReversals(self, num):
        once = int(str(num)[::-1])
        twice = int(str(once)[::-1])
        return twice == num
`)});
alt(1733,{name:"Try every language",tag:"Brute force",time:"O(L·m)",space:"O(n)",explain:"For each language count who in the problem pairs would need teaching.",code:C(`
class Solution:
    def minimumTeachings(self, n, languages, friendships):
        langs = [set(l) for l in languages]
        pairs = [(a - 1, b - 1) for a, b in friendships if not (langs[a - 1] & langs[b - 1])]
        if not pairs:
            return 0
        best = float('inf')
        for L in range(1, n + 1):
            teach = set()
            for a, b in pairs:
                for u in (a, b):
                    if L not in langs[u]:
                        teach.add(u)
            best = min(best, len(teach))
        return best
`)});
alt(1061,{name:"Repeated relaxation",tag:"Alternative",time:"O(26·n)",space:"O(26)",explain:"Keep an array of the smallest known equivalent and relax until stable.",code:C(`
class Solution:
    def smallestEquivalentString(self, s1, s2, baseStr):
        best = {chr(c): chr(c) for c in range(97, 123)}
        changed = True
        while changed:
            changed = False
            for a, b in zip(s1, s2):
                m = min(best[a], best[b])
                for c in (a, b):
                    if best[c] != m:
                        best[c] = m
                        changed = True
            for c in best:
                m = best[best[c]]
                if m < best[c]:
                    best[c] = m
                    changed = True
        return ''.join(best[c] for c in baseStr)
`)});
alt(2540,{name:"Set intersection",tag:"Alternative",time:"O(n + m)",space:"O(n)",explain:"Intersect the two sets and take the minimum.",code:C(`
class Solution:
    def getCommon(self, nums1, nums2):
        common = set(nums1) & set(nums2)
        return min(common) if common else -1
`)});
alt(2364,{name:"Count bad pairs directly",tag:"Brute force",time:"O(n²)",space:"O(1)",explain:"Test every pair.",code:C(`
class Solution:
    def countBadPairs(self, nums):
        n = len(nums)
        return sum(1 for i in range(n) for j in range(i + 1, n) if j - i != nums[j] - nums[i])
`)});
alt(3349,{name:"Test every start",tag:"Brute force",time:"O(n·k)",space:"O(1)",explain:"Check both windows from every start.",code:C(`
class Solution:
    def hasIncreasingSubarrays(self, nums, k):
        def inc(a):
            return all(nums[i] < nums[i + 1] for i in range(a, a + k - 1))
        return any(inc(a) and inc(a + k) for a in range(len(nums) - 2 * k + 1))
`)});
alt(3397,{name:"Track the used set",tag:"Alternative",time:"O(n log n)",space:"O(n)",explain:"Take the smallest unused value from each range, kept in a set.",code:C(`
class Solution:
    def maxDistinctElements(self, nums, k):
        used = set()
        for x in sorted(nums):
            v = x - k
            if used:
                v = max(v, max(used) + 1)
            if v <= x + k:
                used.add(v)
        return len(used)
`)});
alt(2090,{name:"Sliding window sum",tag:"Alternative",time:"O(n)",space:"O(1)",explain:"Maintain the window sum as it slides.",code:C(`
class Solution:
    def getAverages(self, nums, k):
        n = len(nums)
        res = [-1] * n
        w = 2 * k + 1
        if n < w:
            return res
        total = sum(nums[:w])
        res[k] = total // w
        for i in range(k + 1, n - k):
            total += nums[i + k] - nums[i - k - 1]
            res[i] = total // w
        return res
`)});
alt(3609,{name:"Breadth-first search forward",tag:"Brute force",time:"exponential",space:"O(states)",explain:"Explore the moves forward from the start, pruning anything beyond the target.",code:C(`
class Solution:
    def minMoves(self, sx, sy, tx, ty):
        q = deque([(sx, sy, 0)])
        seen = {(sx, sy)}
        while q:
            x, y, d = q.popleft()
            if (x, y) == (tx, ty):
                return d
            m = max(x, y)
            for a, b in ((x + m, y), (x, y + m)):
                if a <= tx and b <= ty and (a, b) not in seen:
                    seen.add((a, b))
                    q.append((a, b, d + 1))
        return -1
`)});
alt(2441,{name:"Sort and two pointers",tag:"Alternative",time:"O(n log n)",space:"O(1)",explain:"Walk inwards from both ends of the sorted array.",code:C(`
class Solution:
    def findMaxK(self, nums):
        nums = sorted(nums)
        i, j = 0, len(nums) - 1
        while i < j:
            if nums[i] + nums[j] == 0:
                return nums[j]
            if nums[i] + nums[j] < 0:
                i += 1
            else:
                j -= 1
        return -1
`)});
alt(3321,{name:"Recompute each window",tag:"Alternative",time:"O(n·k log k)",space:"O(k)",explain:"Count the window, sort by (frequency, value) and take the top x.",code:C(`
class Solution:
    def findXSum(self, nums, k, x):
        res = []
        for i in range(len(nums) - k + 1):
            c = Counter(nums[i:i + k])
            top = sorted(c.items(), key=lambda t: (-t[1], -t[0]))[:x]
            res.append(sum(v * f for v, f in top))
        return res
`)});
alt(1240,{name:"Split DP with the famous exception",tag:"Alternative",time:"O(n·m·(n+m))",space:"O(n·m)",explain:"Best of cutting the rectangle in two or using a full square; the 11 × 13 case is a known exception.",code:C(`
class Solution:
    def tilingRectangle(self, n, m):
        if (n, m) in ((11, 13), (13, 11)):
            return 6
        dp = [[0] * (m + 1) for _ in range(n + 1)]
        for i in range(1, n + 1):
            for j in range(1, m + 1):
                if i == j:
                    dp[i][j] = 1
                    continue
                dp[i][j] = i * j
                for a in range(1, i // 2 + 1):
                    dp[i][j] = min(dp[i][j], dp[a][j] + dp[i - a][j])
                for b in range(1, j // 2 + 1):
                    dp[i][j] = min(dp[i][j], dp[i][b] + dp[i][j - b])
        return dp[n][m]
`)});
alt(3234,{name:"Brute force over substrings",tag:"Brute force",time:"O(n²)",space:"O(1)",explain:"Count ones and zeros of every substring.",code:C(`
class Solution:
    def numberOfSubstrings(self, s):
        count = 0
        for i in range(len(s)):
            ones = zeros = 0
            for j in range(i, len(s)):
                if s[j] == '1':
                    ones += 1
                else:
                    zeros += 1
                if ones >= zeros * zeros:
                    count += 1
        return count
`)});
alt(1437,{name:"Positions of the 1s",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"Compare the positions of consecutive 1s.",code:C(`
class Solution:
    def kLengthApart(self, nums, k):
        pos = [i for i, v in enumerate(nums) if v == 1]
        return all(b - a - 1 >= k for a, b in zip(pos, pos[1:]))
`)});
alt(717,{name:"Count the 1s before the end",tag:"Alternative",time:"O(n)",space:"O(1)",explain:"The trailing run of 1s before the last 0 decides it: even length means one-bit.",code:C(`
class Solution:
    def isOneBitCharacter(self, bits):
        i = len(bits) - 2
        ones = 0
        while i >= 0 and bits[i] == 1:
            ones += 1
            i -= 1
        return ones % 2 == 0
`)});
alt(623,{name:"Recursive insertion",tag:"Alternative",time:"O(n)",space:"O(h)",explain:"Recurse down to depth − 1.",code:C(`
class Solution:
    def addOneRow(self, root, val, depth):
        if depth == 1:
            return TreeNode(val, root)
        def go(node, d):
            if not node:
                return
            if d == depth - 1:
                node.left = TreeNode(val, node.left)
                node.right = TreeNode(val, None, node.right)
                return
            go(node.left, d + 1)
            go(node.right, d + 1)
        go(root, 1)
        return root
`)});
alt(880,{name:"Build the decoded string",tag:"Brute force",time:"O(decoded length)",space:"O(decoded length)",explain:"Decode explicitly (only for small outputs).",code:C(`
class Solution:
    def decodeAtIndex(self, s, k):
        tape = ""
        for c in s:
            if c.isdigit():
                tape *= int(c)
            else:
                tape += c
            if len(tape) >= k:
                break
        return tape[k - 1]
`)});
alt(3006,{name:"Compare every pair of positions",tag:"Brute force",time:"O(p·q)",space:"O(n)",explain:"For each a-index test every b-index.",code:C(`
class Solution:
    def beautifulIndices(self, s, a, b, k):
        pa = [i for i in range(len(s) - len(a) + 1) if s[i:i + len(a)] == a]
        pb = [j for j in range(len(s) - len(b) + 1) if s[j:j + len(b)] == b]
        return [i for i in pa if any(abs(i - j) <= k for j in pb)]
`)});
};
