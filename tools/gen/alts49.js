module.exports=({alt})=>{
const C=s=>s.replace(/^\n/,"").replace(/\n$/,"").split("\n");
// ---- Goldman Sachs
alt(1086,{name:"Max-heap per student",tag:"Alternative",time:"O(n log n)",space:"O(n)",explain:"Use heapq.nlargest to take the five best scores per student.",code:C(`
class Solution:
    def highFive(self, items):
        scores = defaultdict(list)
        for sid, s in items:
            scores[sid].append(s)
        return [[sid, sum(nlargest(5, v)) // 5] for sid, v in sorted(scores.items())]
`)});
alt(2097,{name:"Recursive Hierholzer",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"Depth-first: walk edges until stuck, adding nodes to the path on the way back.",code:C(`
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
        def dfs(u):
            while g[u]:
                dfs(g[u].pop())
            path.append(u)
        dfs(start)
        path.reverse()
        return [[a, b] for a, b in zip(path, path[1:])]
`)});
alt(3494,{name:"Start time of each potion",tag:"Alternative",time:"O(n·m)",space:"O(1)",explain:"Only the start time of each potion at wizard 0 matters: it is the earliest time such that no wizard is still busy when the potion arrives.",code:C(`
class Solution:
    def minTime(self, skill, mana):
        n = len(skill)
        start = 0
        for j in range(1, len(mana)):
            prefix = 0
            delay = 0
            for i in range(n):
                prefix += skill[i] * mana[j - 1]
                delay = max(delay, prefix - sum(skill[:i]) * mana[j])
            start += delay
        return start + sum(skill) * mana[-1]
`)});
alt(1109,{name:"Add to every booked flight",tag:"Brute force",time:"O(b·n)",space:"O(n)",explain:"Loop over each booking and add its seats to each flight in the range.",code:C(`
class Solution:
    def corpFlightBookings(self, bookings, n):
        res = [0] * n
        for first, last, seats in bookings:
            for i in range(first - 1, last):
                res[i] += seats
        return res
`)});
alt(3001,{name:"Simulate the rays",tag:"Alternative",time:"O(1)",space:"O(1)",explain:"Walk from each piece toward the queen step by step and see whether the other piece blocks the way.",code:C(`
class Solution:
    def minMovesToCaptureTheQueen(self, a, b, c, d, e, f):
        def reach(x, y, dirs, block):
            for dx, dy in dirs:
                i, j = x + dx, y + dy
                while 1 <= i <= 8 and 1 <= j <= 8 and (i, j) != block:
                    if (i, j) == (e, f):
                        return True
                    i, j = i + dx, j + dy
        rook = ((1, 0), (-1, 0), (0, 1), (0, -1))
        bish = ((1, 1), (1, -1), (-1, 1), (-1, -1))
        if reach(a, b, rook, (c, d)) or reach(c, d, bish, (a, b)):
            return 1
        return 2
`)});
alt(3437,{name:"Filter all permutations",tag:"Brute force",time:"O(n·n!)",space:"O(n)",explain:"Generate every permutation in order and keep those that alternate parity.",code:C(`
class Solution:
    def permute(self, n):
        return [list(p) for p in permutations(range(1, n + 1))
                if all((a + b) % 2 == 1 for a, b in zip(p, p[1:]))]
`)});
alt(2438,{name:"Prefix products with modular inverse",tag:"Alternative",time:"O(q·log)",space:"O(log n)",explain:"Powers of two multiply to a power of two, so use exponent prefix sums: the product of powers l..r is 2^(e[l] + … + e[r]).",code:C(`
class Solution:
    def productQueries(self, n, queries):
        MOD = 10**9 + 7
        exps = [b for b in range(31) if (n >> b) & 1]
        pre = [0]
        for e in exps:
            pre.append(pre[-1] + e)
        return [pow(2, pre[r + 1] - pre[l], MOD) for l, r in queries]
`)});
alt(1750,{name:"Strip the end letter from both sides",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"While the ends match, strip every copy of that letter from both ends of the string.",code:C(`
class Solution:
    def minimumLength(self, s):
        while len(s) > 1 and s[0] == s[-1]:
            s = s.strip(s[0])
        return len(s)
`)});
alt(1478,{name:"Top-down memo",tag:"Alternative",time:"O(k·n²)",space:"O(k·n)",explain:"best(i, g) = cheapest way to cover houses i.. with g mailboxes, choosing where the first group ends.",code:C(`
class Solution:
    def minDistance(self, houses, k):
        houses.sort()
        n = len(houses)
        def cost(i, j):
            mid = houses[(i + j) // 2]
            return sum(abs(houses[t] - mid) for t in range(i, j + 1))
        @lru_cache(None)
        def best(i, g):
            if g == 1:
                return cost(i, n - 1)
            return min(cost(i, j) + best(j + 1, g - 1) for j in range(i, n - g + 1))
        return best(0, k)
`)});
alt(2087,{name:"Walk the path",tag:"Brute force",time:"O(m + n)",space:"O(1)",explain:"Move one cell at a time toward home and add the cost of each entered row/column.",code:C(`
class Solution:
    def minCost(self, startPos, homePos, rowCosts, colCosts):
        r, c = startPos
        total = 0
        while r != homePos[0]:
            r += 1 if homePos[0] > r else -1
            total += rowCosts[r]
        while c != homePos[1]:
            c += 1 if homePos[1] > c else -1
            total += colCosts[c]
        return total
`)});
alt(2154,{name:"Scan repeatedly",tag:"Brute force",time:"O(n·log)",space:"O(1)",explain:"Use list membership instead of a set.",code:C(`
class Solution:
    def findFinalValue(self, nums, original):
        while original in nums:
            original *= 2
        return original
`)});
alt(2266,{name:"Group runs and multiply",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"Runs of different keys are independent. Count the ways for each run length and multiply.",code:C(`
class Solution:
    def countTexts(self, pressedKeys):
        MOD = 10**9 + 7
        three = [1, 1, 2, 4]
        four = [1, 1, 2, 4]
        for i in range(4, 100001):
            three.append((three[-1] + three[-2] + three[-3]) % MOD)
            four.append((four[-1] + four[-2] + four[-3] + four[-4]) % MOD)
        res = 1
        for ch, g in groupby(pressedKeys):
            L = len(list(g))
            res = res * (four[L] if ch in '79' else three[L]) % MOD
        return res
`)});
alt(2420,{name:"Check every index directly",tag:"Brute force",time:"O(n·k)",space:"O(1)",explain:"For every candidate index verify the k elements on each side.",code:C(`
class Solution:
    def goodIndices(self, nums, k):
        res = []
        for i in range(k, len(nums) - k):
            left = nums[i - k:i]
            right = nums[i + 1:i + k + 1]
            if all(left[t] >= left[t + 1] for t in range(k - 1)) and all(right[t] <= right[t + 1] for t in range(k - 1)):
                res.append(i)
        return res
`)});
alt(2446,{name:"Compare strings",tag:"Alternative",time:"O(1)",space:"O(1)",explain:"'HH:MM' strings of the same format compare correctly as text.",code:C(`
class Solution:
    def haveConflict(self, event1, event2):
        return event1[0] <= event2[1] and event2[0] <= event1[1]
`)});
alt(2550,{name:"Fast exponent by hand",tag:"Alternative",time:"O(log n)",space:"O(1)",explain:"Square-and-multiply instead of pow.",code:C(`
class Solution:
    def monkeyMove(self, n):
        MOD = 10**9 + 7
        result, base = 1, 2
        while n:
            if n & 1:
                result = result * base % MOD
            base = base * base % MOD
            n >>= 1
        return (result - 2) % MOD
`)});
alt(2191,{name:"Sort (mapped, index) pairs",tag:"Alternative",time:"O(n log n)",space:"O(n)",explain:"Attach the original index to break ties explicitly.",code:C(`
class Solution:
    def sortJumbled(self, mapping, nums):
        def mapped(x):
            v = 0
            for d in str(x):
                v = v * 10 + mapping[int(d)]
            return v
        return [x for _, _, x in sorted((mapped(x), i, x) for i, x in enumerate(nums))]
`)});
alt(1427,{name:"Apply every shift",tag:"Brute force",time:"O(m·n)",space:"O(n)",explain:"Rotate the string once per instruction.",code:C(`
class Solution:
    def stringShift(self, s, shift):
        for d, a in shift:
            a %= len(s)
            s = s[a:] + s[:a] if d == 0 else s[-a:] + s[:-a] if a else s
        return s
`)});
alt(3168,{name:"Track people in the room",tag:"Alternative",time:"O(n)",space:"O(1)",explain:"Count entries and exits separately with a running difference.",code:C(`
class Solution:
    def minimumChairs(self, s):
        inside = chairs = 0
        for c in s:
            if c == 'E':
                inside += 1
                chairs = max(chairs, inside)
            else:
                inside -= 1
        return chairs
`)});
alt(3167,{name:"Regex-free split on letters",tag:"Alternative",time:"O(n)",space:"O(1)",explain:"Insert separators before each letter, split, and add the numbers.",code:C(`
class Solution:
    def betterCompression(self, compressed):
        counts = {}
        letter = None
        num = ''
        for ch in compressed + 'A':
            if ch.isdigit():
                num += ch
            else:
                if letter is not None:
                    counts[letter] = counts.get(letter, 0) + int(num)
                letter, num = ch, ''
        return ''.join(c + str(counts[c]) for c in sorted(counts))
`)});
alt(1771,{name:"Top-down memo",tag:"Alternative",time:"O((n+m)²)",space:"O((n+m)²)",explain:"lps(i, j) with recursion; record the answer when the ends pair letters across the two words.",code:C(`
class Solution:
    def longestPalindrome(self, word1, word2):
        s = word1 + word2
        a = len(word1)
        best = 0
        @lru_cache(None)
        def lps(i, j):
            nonlocal best
            if i > j:
                return 0
            if i == j:
                return 1
            if s[i] == s[j]:
                r = lps(i + 1, j - 1) + 2
                if i < a <= j:
                    best = max(best, r)
                return r
            return max(lps(i + 1, j), lps(i, j - 1))
        lps(0, len(s) - 1)
        for i in range(a):
            for j in range(a, len(s)):
                lps(i, j)
        return best
`)});
alt(3885,{name:"Sorted container by rebuilding",tag:"Brute force",time:"O(n) per poll",space:"O(n)",explain:"Keep a dict and scan it for the best event on every poll.",code:C(`
class EventManager:
    def __init__(self, events):
        self.d = {eid: p for eid, p in events}

    def updatePriority(self, eventId, newPriority):
        self.d[eventId] = newPriority

    def pollHighest(self):
        if not self.d:
            return -1
        eid = min(self.d, key=lambda e: (-self.d[e], e))
        del self.d[eid]
        return eid
`)});
alt(1446,{name:"groupby runs",tag:"Alternative",time:"O(n)",space:"O(1)",explain:"The answer is the longest group of equal letters.",code:C(`
class Solution:
    def maxPower(self, s):
        return max(len(list(g)) for _, g in groupby(s))
`)});
alt(2375,{name:"Backtracking in increasing order",tag:"Brute force",time:"O(9!)",space:"O(n)",explain:"Try digits 1-9 in order, keeping the first full number that matches the pattern.",code:C(`
class Solution:
    def smallestNumber(self, pattern):
        n = len(pattern)
        used = [False] * 10
        cur = []
        def go():
            if len(cur) == n + 1:
                return True
            for d in range(1, 10):
                if used[d]:
                    continue
                if cur:
                    if pattern[len(cur) - 1] == 'I' and d < cur[-1]:
                        continue
                    if pattern[len(cur) - 1] == 'D' and d > cur[-1]:
                        continue
                used[d] = True
                cur.append(d)
                if go():
                    return True
                cur.pop()
                used[d] = False
            return False
        go()
        return ''.join(map(str, cur))
`)});
alt(457,{name:"Fast and slow pointers",tag:"Alternative",time:"O(n)",space:"O(1)",explain:"Floyd's cycle detection restricted to same-direction jumps; visited nodes are set to 0.",code:C(`
class Solution:
    def circularArrayLoop(self, nums):
        n = len(nums)
        def nxt(i):
            return (i + nums[i]) % n
        for i in range(n):
            if nums[i] == 0:
                continue
            slow = fast = i
            sign = nums[i] > 0
            while True:
                s2 = nxt(slow)
                if nums[s2] == 0 or (nums[s2] > 0) != sign:
                    break
                f1 = nxt(fast)
                if nums[f1] == 0 or (nums[f1] > 0) != sign:
                    break
                f2 = nxt(f1)
                if nums[f2] == 0 or (nums[f2] > 0) != sign:
                    break
                slow, fast = s2, f2
                if slow == fast:
                    if slow == nxt(slow):
                        break
                    return True
            j = i
            while nums[j] != 0 and (nums[j] > 0) == sign:
                nj = nxt(j)
                nums[j] = 0
                j = nj
        return False
`)});
alt(1202,{name:"DFS components",tag:"Alternative",time:"O(n log n)",space:"O(n)",explain:"Build a graph from the pairs and sort the letters of each connected component.",code:C(`
class Solution:
    def smallestStringWithSwaps(self, s, pairs):
        g = defaultdict(list)
        for a, b in pairs:
            g[a].append(b)
            g[b].append(a)
        res = list(s)
        seen = set()
        for i in range(len(s)):
            if i in seen:
                continue
            comp = []
            st = [i]
            seen.add(i)
            while st:
                u = st.pop()
                comp.append(u)
                for v in g[u]:
                    if v not in seen:
                        seen.add(v)
                        st.append(v)
            comp.sort()
            for idx, ch in zip(comp, sorted(s[u] for u in comp)):
                res[idx] = ch
        return ''.join(res)
`)});
alt(979,{name:"Return (moves, excess) pairs",tag:"Alternative",time:"O(n)",space:"O(h)",explain:"Pure recursion returning both the moves needed in the subtree and its excess coins.",code:C(`
class Solution:
    def distributeCoins(self, root):
        def go(node):
            if not node:
                return 0, 0
            lm, le = go(node.left)
            rm, re = go(node.right)
            e = node.val + le + re - 1
            return lm + rm + abs(le) + abs(re), e
        return go(root)[0]
`)});
alt(1262,{name:"Total minus smallest removals",tag:"Alternative",time:"O(n log n)",space:"O(n)",explain:"Take everything; if the sum leaves remainder r remove either the smallest number with remainder r or the two smallest with the other remainder.",code:C(`
class Solution:
    def maxSumDivThree(self, nums):
        total = sum(nums)
        r1 = sorted(x for x in nums if x % 3 == 1)
        r2 = sorted(x for x in nums if x % 3 == 2)
        if total % 3 == 0:
            return total
        INF = float('inf')
        if total % 3 == 1:
            cost = min(r1[0] if r1 else INF, r2[0] + r2[1] if len(r2) > 1 else INF)
        else:
            cost = min(r2[0] if r2 else INF, r1[0] + r1[1] if len(r1) > 1 else INF)
        return total - cost if cost < INF else 0
`)});
alt(1574,{name:"Binary search for each prefix",tag:"Alternative",time:"O(n log n)",space:"O(1)",explain:"For each prefix element binary search the first suffix element that is not smaller.",code:C(`
class Solution:
    def findLengthOfShortestSubarray(self, arr):
        n = len(arr)
        r = n - 1
        while r > 0 and arr[r - 1] <= arr[r]:
            r -= 1
        if r == 0:
            return 0
        suffix = arr[r:]
        best = r
        for l in range(n):
            if l > 0 and arr[l] < arr[l - 1]:
                break
            j = bisect_left(suffix, arr[l])
            best = min(best, r + j - l - 1)
        return best
`)});
alt(945,{name:"Count array of values",tag:"Alternative",time:"O(n + max)",space:"O(max)",explain:"Count each value, carry duplicates forward to the next value.",code:C(`
class Solution:
    def minIncrementForUnique(self, nums):
        cnt = Counter(nums)
        moves = carry = 0
        for v in range(min(nums), max(nums) + len(nums) + 1):
            carry += cnt.get(v, 0)
            if carry:
                moves += carry - 1
                carry -= 1
        return moves
`)});
alt(1395,{name:"Check every triple",tag:"Brute force",time:"O(n³)",space:"O(1)",explain:"Try all index triples.",code:C(`
class Solution:
    def numTeams(self, rating):
        n = len(rating)
        res = 0
        for i in range(n):
            for j in range(i + 1, n):
                for k in range(j + 1, n):
                    a, b, c = rating[i], rating[j], rating[k]
                    if a < b < c or a > b > c:
                        res += 1
        return res
`)});
alt(779,{name:"Recursive halves",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"The k-th symbol of row n comes from its parent in row n−1 (flipped when k is even).",code:C(`
class Solution:
    def kthGrammar(self, n, k):
        if n == 1:
            return 0
        parent = self.kthGrammar(n - 1, (k + 1) // 2)
        return parent if k % 2 else 1 - parent
`)});
alt(2734,{name:"Find the run with indices",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"Locate the first non-'a' and the end of its run, then rebuild the string.",code:C(`
class Solution:
    def smallestString(self, s):
        start = next((i for i, c in enumerate(s) if c != 'a'), None)
        if start is None:
            return s[:-1] + 'z'
        end = start
        while end < len(s) and s[end] != 'a':
            end += 1
        mid = ''.join(chr(ord(c) - 1) for c in s[start:end])
        return s[:start] + mid + s[end:]
`)});
alt(873,{name:"Try every starting pair",tag:"Brute force",time:"O(n²·log)",space:"O(n)",explain:"Extend each starting pair as far as the set allows.",code:C(`
class Solution:
    def lenLongestFibSubseq(self, arr):
        s = set(arr)
        best = 0
        for i in range(len(arr)):
            for j in range(i + 1, len(arr)):
                a, b, length = arr[i], arr[j], 2
                while a + b in s:
                    a, b = b, a + b
                    length += 1
                best = max(best, length)
        return best if best >= 3 else 0
`)});
alt(2007,{name:"Greedy with a pointer over sorted values",tag:"Alternative",time:"O(n log n)",space:"O(n)",explain:"Process values from smallest; each unused value claims its double.",code:C(`
class Solution:
    def findOriginalArray(self, changed):
        if len(changed) % 2:
            return []
        need = Counter()
        res = []
        for x in sorted(changed):
            if need[x] > 0:
                need[x] -= 1
            else:
                res.append(x)
                need[2 * x] += 1
        return res if not +need else []
`)});
alt(1044,{name:"Compare sorted suffixes",tag:"Brute force",time:"O(n² log n)",space:"O(n²)",explain:"Sort all suffixes and take the longest common prefix of neighbours.",code:C(`
class Solution:
    def longestDupSubstring(self, s):
        suffixes = sorted(s[i:] for i in range(len(s)))
        best = ""
        for a, b in zip(suffixes, suffixes[1:]):
            k = 0
            while k < min(len(a), len(b)) and a[k] == b[k]:
                k += 1
            if k > len(best):
                best = a[:k]
        return best
`)});
alt(1106,{name:"Recursive descent",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"Parse the expression with a recursive function that reads an operator, its arguments and the closing bracket.",code:C(`
class Solution:
    def parseBoolExpr(self, expression):
        pos = 0
        def parse():
            nonlocal pos
            c = expression[pos]
            pos += 1
            if c == 't':
                return True
            if c == 'f':
                return False
            pos += 1
            vals = [parse()]
            while expression[pos] == ',':
                pos += 1
                vals.append(parse())
            pos += 1
            if c == '!':
                return not vals[0]
            return all(vals) if c == '&' else any(vals)
        return parse()
`)});
alt(2714,{name:"Layered Dijkstra with hop cost",tag:"Alternative",time:"O(n·k log)",space:"O(n·k)",explain:"Treat a hop as an extra edge of cost 0 between layers h and h + 1.",code:C(`
class Solution:
    def shortestPathWithHops(self, n, edges, s, d, k):
        adj = defaultdict(list)
        for a, b, w in edges:
            adj[a].append((b, w))
            adj[b].append((a, w))
        best = {}
        pq = [(0, s, 0)]
        while pq:
            c, u, h = heappop(pq)
            if (u, h) in best:
                continue
            best[(u, h)] = c
            if u == d:
                return c
            for v, w in adj[u]:
                heappush(pq, (c + w, v, h))
                if h < k:
                    heappush(pq, (c, v, h + 1))
        return -1
`)});
alt(1247,{name:"Collect the mismatches",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"List mismatching positions by type and pair them up.",code:C(`
class Solution:
    def minimumSwap(self, s1, s2):
        xy = [i for i in range(len(s1)) if s1[i] == 'x' and s2[i] == 'y']
        yx = [i for i in range(len(s1)) if s1[i] == 'y' and s2[i] == 'x']
        if (len(xy) + len(yx)) % 2:
            return -1
        swaps = len(xy) // 2 + len(yx) // 2
        if len(xy) % 2:
            swaps += 2
        return swaps
`)});
alt(1277,{name:"Count squares from each top-left corner",tag:"Brute force",time:"O(m·n·min³)",space:"O(1)",explain:"For each cell grow the square while all cells stay 1.",code:C(`
class Solution:
    def countSquares(self, matrix):
        m, n = len(matrix), len(matrix[0])
        total = 0
        for i in range(m):
            for j in range(n):
                size = 1
                while i + size <= m and j + size <= n and all(matrix[a][b] for a in range(i, i + size) for b in range(j, j + size)):
                    total += 1
                    size += 1
        return total
`)});
alt(1483,{name:"Walk up one parent at a time",tag:"Brute force",time:"O(k) per query",space:"O(n)",explain:"Follow the parent pointer k times.",code:C(`
class TreeAncestor:
    def __init__(self, n, parent):
        self.parent = parent

    def getKthAncestor(self, node, k):
        while k and node != -1:
            node = self.parent[node]
            k -= 1
        return node
`)});
alt(1535,{name:"Queue simulation",tag:"Brute force",time:"O(n)",space:"O(n)",explain:"Simulate the line with a deque (k capped at n − 1).",code:C(`
class Solution:
    def getWinner(self, arr, k):
        k = min(k, len(arr) - 1)
        q = deque(arr[1:])
        champ, wins = arr[0], 0
        while wins < k:
            x = q.popleft()
            if champ > x:
                wins += 1
                q.append(x)
            else:
                q.append(champ)
                champ, wins = x, 1
        return champ
`)});
alt(154,{name:"Compare with the right end",tag:"Alternative",time:"O(n) worst",space:"O(1)",explain:"Linear fallback: the minimum is the only place where nums[i] > nums[i+1] breaks the order.",code:C(`
class Solution:
    def findMin(self, nums):
        for i in range(1, len(nums)):
            if nums[i] < nums[i - 1]:
                return nums[i]
        return nums[0]
`)});
alt(2719,{name:"Bottom-up digit DP",tag:"Alternative",time:"O(len · maxSum · 10)",space:"O(maxSum)",explain:"Count by walking through digits with arrays for tight / free states.",code:C(`
class Solution:
    def count(self, num1, num2, min_sum, max_sum):
        MOD = 10**9 + 7
        def f(num):
            digits = list(map(int, num))
            free = [0] * (max_sum + 1)
            tight_sum = 0
            tight_ok = True
            for d in digits:
                new = [0] * (max_sum + 1)
                for s in range(max_sum + 1):
                    if free[s]:
                        for x in range(10):
                            if s + x <= max_sum:
                                new[s + x] = (new[s + x] + free[s]) % MOD
                if tight_ok:
                    for x in range(d):
                        if tight_sum + x <= max_sum:
                            new[tight_sum + x] = (new[tight_sum + x] + 1) % MOD
                    tight_sum += d
                    if tight_sum > max_sum:
                        tight_ok = False
                free = new
            total = sum(free[min_sum:]) % MOD
            if tight_ok and min_sum <= tight_sum <= max_sum:
                total += 1
            return total % MOD
        ok = 1 if min_sum <= sum(map(int, num1)) <= max_sum else 0
        return (f(num2) - f(num1) + ok) % MOD
`)});
};
