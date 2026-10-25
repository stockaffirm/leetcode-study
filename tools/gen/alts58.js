module.exports=({alt})=>{
const C=s=>s.replace(/^\n/,"").replace(/\n$/,"").split("\n");
// ---- Snapchat
alt(803,{name:"Simulate every hit",tag:"Brute force",time:"O(h·m·n)",space:"O(m·n)",explain:"Apply each hit, then flood-fill from the top row to find the bricks still attached; the difference is how many fell.",code:C(`
class Solution:
    def hitBricks(self, grid, hits):
        m, n = len(grid), len(grid[0])
        g = [row[:] for row in grid]
        def stable():
            seen = set()
            st = [(0, j) for j in range(n) if g[0][j] == 1]
            seen.update(st)
            while st:
                a, b = st.pop()
                for x, y in ((a + 1, b), (a - 1, b), (a, b + 1), (a, b - 1)):
                    if 0 <= x < m and 0 <= y < n and g[x][y] == 1 and (x, y) not in seen:
                        seen.add((x, y))
                        st.append((x, y))
            return seen
        res = []
        cur = len(stable())
        for r, c in hits:
            if g[r][c] == 0:
                res.append(0)
                continue
            g[r][c] = 0
            now = len(stable())
            res.append(cur - now - 1)
            cur = now
        return res
`)});
alt(439,{name:"Recursive descent",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"Parse left to right: read the condition, then find the matching ':' by counting '?' and ':' and recurse into the chosen branch.",code:C(`
class Solution:
    def parseTernary(self, expression):
        s = expression
        def go(i, j):
            if i == j:
                return s[i]
            cond = s[i]
            depth = 0
            k = i + 2
            while k <= j:
                if s[k] == '?':
                    depth += 1
                elif s[k] == ':':
                    if depth == 0:
                        break
                    depth -= 1
                k += 1
            return go(i + 2, k - 1) if cond == 'T' else go(k + 1, j)
        return go(0, len(s) - 1)
`)});
alt(527,{name:"Grow prefixes until all are unique",tag:"Alternative",time:"O(n·L·n)",space:"O(n·L)",explain:"Start every word with a prefix of length 1 and lengthen the prefixes of words whose abbreviation collides, repeating until no collision remains.",code:C(`
class Solution:
    def wordsAbbreviation(self, words):
        n = len(words)
        pre = [1] * n
        def abbr(i):
            w = words[i]
            a = w[:pre[i]] + str(len(w) - pre[i] - 1) + w[-1]
            return a if len(a) < len(w) else w
        res = [abbr(i) for i in range(n)]
        while True:
            groups = defaultdict(list)
            for i, a in enumerate(res):
                groups[a].append(i)
            changed = False
            for idxs in groups.values():
                if len(idxs) > 1:
                    for i in idxs:
                        pre[i] += 1
                    changed = True
            if not changed:
                return res
            res = [abbr(i) for i in range(n)]
`)});
alt(1754,{name:"Merge with index pointers and explicit compare",tag:"Alternative",time:"O((n+m)²)",space:"O(n+m)",explain:"Compare the two remaining suffixes character by character instead of slicing.",code:C(`
class Solution:
    def largestMerge(self, word1, word2):
        i = j = 0
        res = []
        while i < len(word1) and j < len(word2):
            a, b = i, j
            while a < len(word1) and b < len(word2) and word1[a] == word2[b]:
                a += 1
                b += 1
            take_first = b == len(word2) or (a < len(word1) and word1[a] > word2[b])
            if take_first:
                res.append(word1[i])
                i += 1
            else:
                res.append(word2[j])
                j += 1
        res.append(word1[i:])
        res.append(word2[j:])
        return ''.join(res)
`)});
alt(964,{name:"Memoised recursion",tag:"Alternative",time:"O(log target)",space:"O(log target)",explain:"cost(target, k) either builds the last digit upwards or borrows from the next power; recursion on target // x.",code:C(`
class Solution:
    def leastOpsExpressTarget(self, x, target):
        @lru_cache(None)
        def f(t, k):
            if t == 0:
                return 0
            q, r = divmod(t, x)
            cost_k = 2 if k == 0 else k
            down = r * cost_k + f(q, k + 1)
            up = (x - r) * cost_k + f(q + 1, k + 1)
            return min(down, up)
        return f(target, 0) - 1
`)});
alt(2316,{name:"DFS components",tag:"Alternative",time:"O(n + e)",space:"O(n + e)",explain:"Find component sizes with DFS and count cross-component pairs.",code:C(`
class Solution:
    def countPairs(self, n, edges):
        g = [[] for _ in range(n)]
        for a, b in edges:
            g[a].append(b)
            g[b].append(a)
        seen = [False] * n
        sizes = []
        for s in range(n):
            if not seen[s]:
                seen[s] = True
                st = [s]
                c = 0
                while st:
                    u = st.pop()
                    c += 1
                    for v in g[u]:
                        if not seen[v]:
                            seen[v] = True
                            st.append(v)
                sizes.append(c)
        total = n * (n - 1) // 2
        return total - sum(s * (s - 1) // 2 for s in sizes)
`)});
alt(1074,{name:"2D prefix sums with every rectangle",tag:"Brute force",time:"O(m²n²)",space:"O(m·n)",explain:"Build a 2D prefix table and test all rectangles.",code:C(`
class Solution:
    def numSubmatrixSumTarget(self, matrix, target):
        m, n = len(matrix), len(matrix[0])
        P = [[0] * (n + 1) for _ in range(m + 1)]
        for i in range(m):
            for j in range(n):
                P[i + 1][j + 1] = matrix[i][j] + P[i][j + 1] + P[i + 1][j] - P[i][j]
        res = 0
        for r1 in range(m):
            for r2 in range(r1, m):
                for c1 in range(n):
                    for c2 in range(c1, n):
                        if P[r2 + 1][c2 + 1] - P[r1][c2 + 1] - P[r2 + 1][c1] + P[r1][c1] == target:
                            res += 1
        return res
`)});
alt(3014,{name:"Assign letters to keys explicitly",tag:"Alternative",time:"O(n)",space:"O(26)",explain:"Give the i-th most common letter to key i % 8 and add its depth.",code:C(`
class Solution:
    def minimumPushes(self, word):
        total = 0
        for r, (_, f) in enumerate(Counter(word).most_common()):
            depth = r // 8 + 1
            total += f * depth
        return total
`)});
alt(351,{name:"Without symmetry",tag:"Brute force",time:"O(9!)",space:"O(9)",explain:"Try all nine starting keys instead of using symmetry.",code:C(`
class Solution:
    def numberOfPatterns(self, m, n):
        skip = [[0] * 10 for _ in range(10)]
        for a, b, mid in ((1, 3, 2), (1, 7, 4), (3, 9, 6), (7, 9, 8), (1, 9, 5), (3, 7, 5), (2, 8, 5), (4, 6, 5)):
            skip[a][b] = skip[b][a] = mid
        used = [False] * 10
        def dfs(cur, length):
            cnt = 1 if length >= m else 0
            if length == n:
                return cnt
            used[cur] = True
            for nxt in range(1, 10):
                if not used[nxt] and (skip[cur][nxt] == 0 or used[skip[cur][nxt]]):
                    cnt += dfs(nxt, length + 1)
            used[cur] = False
            return cnt
        return sum(dfs(s, 1) for s in range(1, 10))
`)});
};
