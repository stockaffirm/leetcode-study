module.exports=({alt})=>{
const C=s=>s.replace(/^\n/,"").replace(/\n$/,"").split("\n");
// ---- Meta (6/8)
alt(1773,{name:"If / else on the rule",tag:"Alternative",time:"O(n)",space:"O(1)",explain:"Compare the right field of each item directly.",code:C(`
class Solution:
    def countMatches(self, items, ruleKey, ruleValue):
        count = 0
        for t, c, n in items:
            if ruleKey == "type" and t == ruleValue:
                count += 1
            elif ruleKey == "color" and c == ruleValue:
                count += 1
            elif ruleKey == "name" and n == ruleValue:
                count += 1
        return count
`)});
alt(1976,{name:"Dijkstra, then count along tight edges",tag:"Alternative",time:"O(E log n)",space:"O(n + E)",explain:"First compute all shortest distances; then visit nodes in order of distance and add the ways along every edge that lies on a shortest path.",code:C(`
class Solution:
    def countPaths(self, n, roads):
        MOD = 10 ** 9 + 7
        g = defaultdict(list)
        for u, v, w in roads:
            g[u].append((v, w))
            g[v].append((u, w))
        dist = [inf] * n
        dist[0] = 0
        h = [(0, 0)]
        while h:
            d, u = heappop(h)
            if d > dist[u]:
                continue
            for v, w in g[u]:
                if d + w < dist[v]:
                    dist[v] = d + w
                    heappush(h, (d + w, v))
        ways = [0] * n
        ways[0] = 1
        for u in sorted(range(n), key=lambda x: dist[x]):
            for v, w in g[u]:
                if dist[u] + w == dist[v]:
                    ways[v] = (ways[v] + ways[u]) % MOD
        return ways[n - 1]
`)});
alt(2553,{name:"Peel digits with math",tag:"Alternative",time:"O(total digits)",space:"O(total digits)",explain:"Take the last digit of each number with % 10 and reverse the pieces.",code:C(`
class Solution:
    def separateDigits(self, nums):
        res = []
        for x in nums:
            part = []
            while x:
                part.append(x % 10)
                x //= 10
            res += part[::-1]
        return res
`)});
alt(1283,{name:"Try divisors 1, 2, 3 …",tag:"Brute force",time:"O(n · max)",space:"O(1)",explain:"Increase the divisor one by one until the sum fits.",code:C(`
class Solution:
    def smallestDivisor(self, nums, threshold):
        d = 1
        while sum((x + d - 1) // d for x in nums) > threshold:
            d += 1
        return d
`)});
alt(142,{name:"Remember visited nodes",tag:"Brute force",time:"O(n)",space:"O(n)",explain:"The first node we see twice is the start of the cycle.",code:C(`
class Solution:
    def detectCycle(self, head):
        seen = set()
        cur = head
        while cur:
            if cur in seen:
                return cur
            seen.add(cur)
            cur = cur.next
        return None
`)});
alt(144,{name:"Recursion",tag:"Alternative",time:"O(n)",space:"O(h)",explain:"Node, then left subtree, then right subtree.",code:C(`
class Solution:
    def preorderTraversal(self, root):
        res = []
        def go(node):
            if node:
                res.append(node.val)
                go(node.left)
                go(node.right)
        go(root)
        return res
`)});
alt(285,{name:"Search the in-order list",tag:"Brute force",time:"O(n)",space:"O(n)",explain:"Collect all nodes in order and return the one after p.",code:C(`
class Solution:
    def inorderSuccessor(self, root, p):
        order = []
        def inorder(n):
            if n:
                inorder(n.left)
                order.append(n)
                inorder(n.right)
        inorder(root)
        i = order.index(p)
        return order[i + 1] if i + 1 < len(order) else None
`)});
alt(316,{name:"Pick the smallest letter that can lead",tag:"Alternative",time:"O(26 · n)",space:"O(n)",explain:"The first letter is the smallest letter whose first occurrence still leaves all other letters to the right; recurse on the rest.",code:C(`
class Solution:
    def removeDuplicateLetters(self, s):
        for c in sorted(set(s)):
            suffix = s[s.index(c):]
            if set(suffix) == set(s):
                return c + self.removeDuplicateLetters(suffix.replace(c, ""))
        return ""
`)});
alt(326,{name:"Divide by 3 repeatedly",tag:"Alternative",time:"O(log n)",space:"O(1)",explain:"Keep dividing by 3 while the number is a multiple of 3; a power of three ends at 1.",code:C(`
class Solution:
    def isPowerOfThree(self, n):
        if n < 1:
            return False
        while n % 3 == 0:
            n //= 3
        return n == 1
`)});
alt(407,{name:"Relax water levels until stable",tag:"Brute force",time:"O((m·n)²)",space:"O(m·n)",explain:"Give every inner cell an 'infinite' water level and lower it to max(own height, lowest neighbour level) until nothing changes.",code:C(`
class Solution:
    def trapRainWater(self, heightMap):
        m, n = len(heightMap), len(heightMap[0])
        level = [[heightMap[i][j] if i in (0, m - 1) or j in (0, n - 1) else inf for j in range(n)] for i in range(m)]
        changed = True
        while changed:
            changed = False
            for i in range(1, m - 1):
                for j in range(1, n - 1):
                    lowest = min(level[i + 1][j], level[i - 1][j], level[i][j + 1], level[i][j - 1])
                    new = max(heightMap[i][j], lowest)
                    if new < level[i][j]:
                        level[i][j] = new
                        changed = True
        return sum(level[i][j] - heightMap[i][j] for i in range(m) for j in range(n))
`)});
alt(461,{name:"Count bits with n & (n − 1)",tag:"Bit trick",time:"O(bits)",space:"O(1)",explain:"x & (x − 1) removes the lowest set bit; count how many times you can do that.",code:C(`
class Solution:
    def hammingDistance(self, x, y):
        z = x ^ y
        cnt = 0
        while z:
            z &= z - 1
            cnt += 1
        return cnt
`)});
alt(750,{name:"Count column pairs per row",tag:"Alternative",time:"O(m·n²)",space:"O(n²)",explain:"For each row and each pair of its 1-columns, every earlier row with the same pair forms a rectangle.",code:C(`
class Solution:
    def countCornerRectangles(self, grid):
        seen = defaultdict(int)
        res = 0
        for row in grid:
            ones = [j for j, v in enumerate(row) if v]
            for a in range(len(ones)):
                for b in range(a + 1, len(ones)):
                    pair = (ones[a], ones[b])
                    res += seen[pair]
                    seen[pair] += 1
        return res
`)});
alt(801,{name:"Memoized recursion (index, swapped)",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"go(i, sw) is the fewest swaps for positions i… when position i − 1 was (or was not) swapped.",code:C(`
class Solution:
    def minSwap(self, nums1, nums2):
        n = len(nums1)
        @lru_cache(None)
        def go(i, sw):
            if i == n:
                return 0
            pa = nums2[i - 1] if sw else nums1[i - 1]
            pb = nums1[i - 1] if sw else nums2[i - 1]
            best = inf
            if nums1[i] > pa and nums2[i] > pb:
                best = go(i + 1, 0)
            if nums2[i] > pa and nums1[i] > pb:
                best = min(best, 1 + go(i + 1, 1))
            return best
        return min(go(1, 0), 1 + go(1, 1))
`)});
alt(844,{name:"Build both final strings with a stack",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"Type each string: a letter is pushed, '#' pops. Compare the results.",code:C(`
class Solution:
    def backspaceCompare(self, s, t):
        def build(x):
            st = []
            for ch in x:
                if ch == "#":
                    if st:
                        st.pop()
                else:
                    st.append(ch)
            return st
        return build(s) == build(t)
`)});
alt(893,{name:"Group words by their signature",tag:"Alternative",time:"O(n·L log L)",space:"O(n·L)",explain:"Put words with equal (even letters, odd letters) signatures into the same bucket and count the buckets.",code:C(`
class Solution:
    def numSpecialEquivGroups(self, words):
        groups = defaultdict(list)
        for w in words:
            key = (tuple(sorted(w[0::2])), tuple(sorted(w[1::2])))
            groups[key].append(w)
        return len(groups)
`)});
alt(998,{name:"Iterative walk down the right spine",tag:"Alternative",time:"O(h)",space:"O(1)",explain:"Walk right until the next node is smaller than val, then insert there.",code:C(`
class Solution:
    def insertIntoMaxTree(self, root, val):
        if not root or val > root.val:
            return TreeNode(val, root)
        cur = root
        while cur.right and cur.right.val > val:
            cur = cur.right
        cur.right = TreeNode(val, cur.right)
        return root
`)});
alt(1033,{name:"Use the two gaps",tag:"Alternative",time:"O(1)",space:"O(1)",explain:"Look at the empty cells between the stones: g1 left and g2 right. Max = g1 + g2; min is 0, 1 or 2 depending on the smaller gap.",code:C(`
class Solution:
    def numMovesStones(self, a, b, c):
        x, y, z = sorted((a, b, c))
        g1, g2 = y - x - 1, z - y - 1
        if g1 == 0 and g2 == 0:
            return [0, 0]
        return [1 if min(g1, g2) <= 1 else 2, g1 + g2]
`)});
alt(1040,{name:"Search all positions (BFS and DFS over states)",tag:"Brute force",time:"exponential",space:"exponential",explain:"For tiny inputs: BFS over stone arrangements finds the fewest moves, a memoized DFS finds the most.",code:C(`
class Solution:
    def numMovesStonesII(self, stones):
        start = tuple(sorted(stones))
        n = len(start)
        def done(s):
            return s[-1] - s[0] == n - 1
        def nexts(s):
            res = []
            for rest in (s[1:], s[:-1]):
                for pos in range(rest[0] + 1, rest[-1]):
                    if pos not in rest:
                        res.append(tuple(sorted(rest + (pos,))))
            return res
        seen = {start}
        q = deque([(start, 0)])
        low = 0
        while q:
            s, d = q.popleft()
            if done(s):
                low = d
                break
            for t in nexts(s):
                if t not in seen:
                    seen.add(t)
                    q.append((t, d + 1))
        @lru_cache(None)
        def longest(s):
            if done(s):
                return 0
            return max(1 + longest(t) for t in nexts(s))
        return [low, longest(start)]
`)});
alt(1248,{name:"At most k minus at most k−1",tag:"Alternative",time:"O(n)",space:"O(1)",explain:"Count subarrays with at most k odd numbers using a sliding window, then subtract the count for k − 1.",code:C(`
class Solution:
    def numberOfSubarrays(self, nums, k):
        def at_most(k):
            res = left = 0
            for right, x in enumerate(nums):
                k -= x % 2
                while k < 0:
                    k += nums[left] % 2
                    left += 1
                res += right - left + 1
            return res
        return at_most(k) - at_most(k - 1)
`)});
alt(1344,{name:"Whole numbers (half degrees)",tag:"Alternative",time:"O(1)",space:"O(1)",explain:"Measure the hands in half-degree units so everything stays an integer, then halve at the end.",code:C(`
class Solution:
    def angleClock(self, hour, minutes):
        h2 = (hour % 12) * 60 + minutes
        m2 = minutes * 12
        d = abs(h2 - m2)
        return min(d, 720 - d) / 2
`)});
alt(1351,{name:"Count every negative number",tag:"Brute force",time:"O(m·n)",space:"O(1)",explain:"Check every cell.",code:C(`
class Solution:
    def countNegatives(self, grid):
        return sum(x < 0 for row in grid for x in row)
`)});
};
