module.exports=({alt})=>{
const C=s=>s.replace(/^\n/,"").replace(/\n$/,"").split("\n");
// ---- Meta (7/8)
alt(1352,{name:"Store the numbers, multiply the last k",tag:"Brute force",time:"O(k) per query",space:"O(n)",explain:"Keep every number and multiply the last k each time.",code:C(`
class ProductOfNumbers:
    def __init__(self):
        self.a = []
    def add(self, num):
        self.a.append(num)
    def getProduct(self, k):
        return prod(self.a[-k:])
`)});
alt(1460,{name:"Compare letter counts",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"Two arrays hold the same numbers when their counters are equal.",code:C(`
class Solution:
    def canBeEqual(self, target, arr):
        return Counter(target) == Counter(arr)
`)});
alt(1453,{name:"Angular sweep around every dart",tag:"Alternative",time:"O(n² log n)",space:"O(n)",explain:"For each dart on the edge, every other dart within 2r is inside the board for a range of rotation angles. Sweep the angles and take the largest overlap.",code:C(`
class Solution:
    def numPoints(self, darts, r):
        n = len(darts)
        best = 1
        eps = 1e-9
        for i in range(n):
            xi, yi = darts[i]
            events = []
            for j in range(n):
                if i == j:
                    continue
                dx, dy = darts[j][0] - xi, darts[j][1] - yi
                d = hypot(dx, dy)
                if d > 2 * r:
                    continue
                a = atan2(dy, dx)
                b = acos(min(1.0, d / (2 * r)))
                s = (a - b) % (2 * pi)
                e = s + 2 * b
                events += [(s - eps, 0), (e + eps, 1), (s + 2 * pi - eps, 0), (e + 2 * pi + eps, 1)]
            events.sort()
            cur = 1
            for _, t in events:
                if t == 0:
                    cur += 1
                    best = max(best, cur)
                else:
                    cur -= 1
        return best
`)});
alt(1781,{name:"Count every substring from scratch",tag:"Brute force",time:"O(n³)",space:"O(26)",explain:"Build a counter for each substring and read its beauty.",code:C(`
class Solution:
    def beautySum(self, s):
        n = len(s)
        res = 0
        for i in range(n):
            for j in range(i + 1, n + 1):
                c = Counter(s[i:j]).values()
                res += max(c) - min(c)
        return res
`)});
alt(1826,{name:"Try every possible drop position",tag:"Brute force",time:"O(n²)",space:"O(n)",explain:"A sensor can be the defective one if, for some position i, the readings agree before i and are shifted by one from i on.",code:C(`
class Solution:
    def badSensor(self, sensor1, sensor2):
        n = len(sensor1)
        def possible(x, y):
            return any(x[:i] == y[:i] and x[i:n - 1] == y[i + 1:] for i in range(n))
        p1, p2 = possible(sensor1, sensor2), possible(sensor2, sensor1)
        if p1 and not p2:
            return 1
        if p2 and not p1:
            return 2
        return -1
`)});
alt(1947,{name:"Bitmask DP over used mentors",tag:"Alternative",time:"O(2^m · m)",space:"O(2^m)",explain:"dp[mask] is the best score after giving the first popcount(mask) students the mentors in mask.",code:C(`
class Solution:
    def maxCompatibilitySum(self, students, mentors):
        m = len(students)
        score = [[sum(a == b for a, b in zip(s, t)) for t in mentors] for s in students]
        dp = [0] * (1 << m)
        for mask in range(1 << m):
            i = bin(mask).count("1")
            if i == m:
                continue
            for j in range(m):
                if not mask >> j & 1:
                    nm = mask | 1 << j
                    dp[nm] = max(dp[nm], dp[mask] + score[i][j])
        return dp[-1]
`)});
alt(1973,{name:"Iterative post-order",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"The same subtree sums computed with an explicit stack.",code:C(`
class Solution:
    def equalToDescendants(self, root):
        total = {}
        cnt = 0
        stack = [(root, False)]
        while stack:
            node, done = stack.pop()
            if not node:
                continue
            if not done:
                stack.append((node, True))
                stack.append((node.right, False))
                stack.append((node.left, False))
            else:
                l = total.get(node.left, 0)
                r = total.get(node.right, 0)
                if node.val == l + r:
                    cnt += 1
                total[node] = node.val + l + r
        return cnt
`)});
alt(2014,{name:"DFS over candidates",tag:"Alternative",time:"O(n · 26^(n/k))",space:"O(n/k)",explain:"Same pruning as the BFS, but walk the candidate tree depth first and keep the best string.",code:C(`
class Solution:
    def longestSubsequenceRepeatedK(self, s, k):
        cnt = Counter(s)
        chars = sorted((c for c in cnt if cnt[c] >= k), reverse=True)
        def is_sub(t):
            it = iter(s)
            return all(any(c == x for x in it) for c in t * k)
        best = ""
        def dfs(cur):
            nonlocal best
            if len(cur) > len(best) or (len(cur) == len(best) and cur > best):
                best = cur
            for c in chars:
                if is_sub(cur + c):
                    dfs(cur + c)
        dfs("")
        return best
`)});
alt(2289,{name:"Simulate every step",tag:"Brute force",time:"O(n²)",space:"O(n)",explain:"Remove all numbers that are smaller than their left neighbour, count one step, and repeat.",code:C(`
class Solution:
    def totalSteps(self, nums):
        a = list(nums)
        steps = 0
        while True:
            nxt = [a[0]] + [a[i] for i in range(1, len(a)) if a[i - 1] <= a[i]]
            if len(nxt) == len(a):
                return steps
            a = nxt
            steps += 1
`)});
alt(2452,{name:"Loop with an early exit",tag:"Alternative",time:"O(q · d · L)",space:"O(1)",explain:"Count differences per pair and stop as soon as more than 2 are found.",code:C(`
class Solution:
    def twoEditWords(self, queries, dictionary):
        res = []
        for q in queries:
            for w in dictionary:
                diff = 0
                for a, b in zip(q, w):
                    if a != b:
                        diff += 1
                        if diff > 2:
                            break
                if diff <= 2:
                    res.append(q)
                    break
        return res
`)});
alt(2596,{name:"Walk the tour from 0",tag:"Alternative",time:"O(n²)",space:"O(1)",explain:"Stand on cell 0 and look for number 1 a knight's jump away, then 2 from there, and so on.",code:C(`
class Solution:
    def checkValidGrid(self, grid):
        n = len(grid)
        if grid[0][0] != 0:
            return False
        moves = [(1, 2), (2, 1), (-1, 2), (-2, 1), (1, -2), (2, -1), (-1, -2), (-2, -1)]
        r = c = 0
        for k in range(1, n * n):
            for dr, dc in moves:
                a, b = r + dr, c + dc
                if 0 <= a < n and 0 <= b < n and grid[a][b] == k:
                    r, c = a, b
                    break
            else:
                return False
        return True
`)});
alt(1832,{name:"Check every letter",tag:"Alternative",time:"O(n)",space:"O(1)",explain:"Test that each of the 26 letters occurs.",code:C(`
class Solution:
    def checkIfPangram(self, sentence):
        return set("abcdefghijklmnopqrstuvwxyz") <= set(sentence)
`)});
alt(1545,{name:"Build the string",tag:"Brute force",time:"O(2ⁿ)",space:"O(2ⁿ)",explain:"Construct S_n exactly as defined and read position k.",code:C(`
class Solution:
    def findKthBit(self, n, k):
        s = "0"
        for _ in range(n - 1):
            s = s + "1" + "".join("1" if c == "0" else "0" for c in reversed(s))
        return s[k - 1]
`)});
alt(856,{name:"Add 2^depth for every '()'",tag:"Alternative",time:"O(n)",space:"O(1)",explain:"Every innermost '()' is worth 2 to the power of the number of brackets around it; add them up.",code:C(`
class Solution:
    def scoreOfParentheses(self, s):
        res = depth = 0
        for i, ch in enumerate(s):
            if ch == "(":
                depth += 1
            else:
                depth -= 1
                if s[i - 1] == "(":
                    res += 1 << depth
        return res
`)});
alt(510,{name:"Go to the root and search in order",tag:"Brute force",time:"O(n)",space:"O(n)",explain:"Climb to the root, list the nodes in order and take the one after the given node.",code:C(`
class Solution:
    def inorderSuccessor(self, node):
        root = node
        while root.parent:
            root = root.parent
        order = []
        def inorder(n):
            if n:
                inorder(n.left)
                order.append(n)
                inorder(n.right)
        inorder(root)
        i = order.index(node)
        return order[i + 1] if i + 1 < len(order) else None
`)});
alt(1319,{name:"Count components with DFS",tag:"Alternative",time:"O(n + E)",space:"O(n + E)",explain:"Build the graph and count how many separate groups the DFS finds.",code:C(`
class Solution:
    def makeConnected(self, n, connections):
        if len(connections) < n - 1:
            return -1
        g = defaultdict(list)
        for a, b in connections:
            g[a].append(b)
            g[b].append(a)
        seen = set()
        comps = 0
        for s in range(n):
            if s in seen:
                continue
            comps += 1
            stack = [s]
            seen.add(s)
            while stack:
                u = stack.pop()
                for v in g[u]:
                    if v not in seen:
                        seen.add(v)
                        stack.append(v)
        return comps - 1
`)});
alt(867,{name:"Nested loops",tag:"Alternative",time:"O(m·n)",space:"O(m·n)",explain:"Copy entry (i, j) to (j, i).",code:C(`
class Solution:
    def transpose(self, matrix):
        m, n = len(matrix), len(matrix[0])
        res = [[0] * m for _ in range(n)]
        for i in range(m):
            for j in range(n):
                res[j][i] = matrix[i][j]
        return res
`)});
alt(132,{name:"Palindrome table + DP",tag:"Alternative",time:"O(n²)",space:"O(n²)",explain:"First mark which substrings are palindromes, then let dp[i] be the fewest cuts for the first i letters.",code:C(`
class Solution:
    def minCut(self, s):
        n = len(s)
        pal = [[False] * n for _ in range(n)]
        for i in range(n - 1, -1, -1):
            for j in range(i, n):
                if s[i] == s[j] and (j - i < 2 or pal[i + 1][j - 1]):
                    pal[i][j] = True
        dp = [0] * n
        for j in range(n):
            if pal[0][j]:
                dp[j] = 0
            else:
                dp[j] = min(dp[i - 1] + 1 for i in range(1, j + 1) if pal[i][j])
        return dp[n - 1]
`)});
alt(1470,{name:"Slice assignment",tag:"Pythonic",time:"O(n)",space:"O(n)",explain:"Fill the even slots with the first half and the odd slots with the second half.",code:C(`
class Solution:
    def shuffle(self, nums, n):
        res = [0] * (2 * n)
        res[0::2] = nums[:n]
        res[1::2] = nums[n:]
        return res
`)});
alt(2094,{name:"Build numbers from digit permutations",tag:"Alternative",time:"O(n³)",space:"O(1)",explain:"Take every ordered triple of digits, skip leading zeros and odd endings, and collect the distinct numbers.",code:C(`
class Solution:
    def findEvenNumbers(self, digits):
        return sorted({100 * a + 10 * b + c for a, b, c in permutations(digits, 3) if a and c % 2 == 0})
`)});
alt(3304,{name:"Count the 1 bits of k − 1",tag:"Math",time:"O(log k)",space:"O(1)",explain:"The letter at position k is 'a' shifted by the number of 1 bits in k − 1.",code:C(`
class Solution:
    def kthCharacter(self, k):
        return chr(97 + bin(k - 1).count("1") % 26)
`)});
};
