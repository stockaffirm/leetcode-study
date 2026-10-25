const {lite}=require("./lib");
const C=s=>s.replace(/^\n/,"").replace(/\n$/,"").split("\n");
const ARR="Array / String",HM="Hash Map / Set",STK="Stack / Monotonic Stack",BT="Binary Tree",GR="Graph",HP="Heap",DP="Dynamic Programming",GD="Greedy",MB="Math / Bit Manipulation",BS="Binary Search",SRT="Sorting",SW="Sliding Window",MX="Matrix",UF="Union Find / Segment Tree",TP="Two Pointers",IV="Intervals",BTK="Backtracking",DS="Design",LL="Linked List",TR="Trie",PS="Prefix Sum";
// ---- Snapchat
lite({id:803,slug:"bricks-falling-when-hit",title:"Bricks Falling When Hit",level:"Hard",topic:UF,name:"Reverse time with Union-Find",
w:"grid [[1,0,0,0],[1,1,1,0]], hit (1,0): two bricks (the rest of the bottom row) lose their only support → 2.",k:"Deleting is hard, adding is easy: process the hits in reverse. First remove all hit bricks and union the remaining bricks, with a virtual 'roof' node connected to row 0. Then add the hits back in reverse order; when a brick is restored, the number of bricks attached to the roof grows by (new roof size − old roof size − 1), which is how many bricks that hit made fall.",
i:"grid = [[1,0,0,0],[1,1,1,0]], hits = [[1,0]]",o:"[2]",time:"O((m·n + h) α)",space:"O(m·n)",
code:C(`
class Solution:
    def hitBricks(self, grid, hits):
        m, n = len(grid), len(grid[0])
        g = [row[:] for row in grid]
        for r, c in hits:
            g[r][c] -= 1
        roof = m * n
        p = list(range(m * n + 1))
        size = [1] * (m * n + 1)
        def find(x):
            while p[x] != x:
                p[x] = p[p[x]]
                x = p[x]
            return x
        def union(a, b):
            a, b = find(a), find(b)
            if a != b:
                p[a] = b
                size[b] += size[a]
        def link(r, c):
            if r == 0:
                union(r * n + c, roof)
            for a, b in ((r + 1, c), (r - 1, c), (r, c + 1), (r, c - 1)):
                if 0 <= a < m and 0 <= b < n and g[a][b] == 1:
                    union(r * n + c, a * n + b)
        for r in range(m):
            for c in range(n):
                if g[r][c] == 1:
                    link(r, c)
        res = [0] * len(hits)
        for i in range(len(hits) - 1, -1, -1):
            r, c = hits[i]
            if grid[r][c] == 0:
                continue
            before = size[find(roof)]
            g[r][c] = 1
            link(r, c)
            after = size[find(roof)]
            res[i] = max(0, after - before - 1)
        return res
`)});
lite({id:439,slug:"ternary-expression-parser",title:"Ternary Expression Parser",level:"Medium",topic:STK,name:"Scan from the right with a stack",
w:"'F?1:T?4:5' → F picks the right part 'T?4:5' → T picks 4 → '4'.",k:"A ternary expression is right-associative, so scan from the right and push characters on a stack. When the character on top of the stack is '?', the current character is a condition: pop '?', the 'true' value, ':' and the 'false' value, and push whichever the condition selects. The stack ends with the answer.",
i:"expression = \"F?1:T?4:5\"",o:"\"4\"",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def parseTernary(self, expression):
        st = []
        for ch in reversed(expression):
            if st and st[-1] == '?':
                st.pop()
                a = st.pop()
                st.pop()
                b = st.pop()
                st.append(a if ch == 'T' else b)
            else:
                st.append(ch)
        return st[0]
`)});
lite({id:527,slug:"word-abbreviation",title:"Word Abbreviation",level:"Hard",topic:TR,name:"Group by length and last letter, use neighbour LCP",
w:"'internal' vs 'interval': same start 'inter', so they keep their full spelling; 'face' → 'f2e'.",k:"An abbreviation is a prefix + count + last letter, used only if shorter than the word, and it must be unique. Only words with the same length and last letter can clash. Within such a group sort the words: the prefix needed for a word is one longer than its longest common prefix with either sorted neighbour.",
i:"words = [\"like\",\"god\",\"internal\",\"me\",\"internet\",\"interval\",\"intension\",\"face\",\"intrusion\"]",o:"['l2e', 'god', 'internal', 'me', 'i6t', 'interval', 'inte4n', 'f2e', 'intr4n']",time:"O(n·L log n)",space:"O(n·L)",
code:C(`
class Solution:
    def wordsAbbreviation(self, words):
        groups = defaultdict(list)
        for i, w in enumerate(words):
            groups[(len(w), w[-1])].append(i)
        res = [None] * len(words)
        def lcp(a, b):
            k = 0
            while k < min(len(a), len(b)) and a[k] == b[k]:
                k += 1
            return k
        for idxs in groups.values():
            idxs.sort(key=lambda i: words[i])
            for t, i in enumerate(idxs):
                w = words[i]
                pre = 0
                if t > 0:
                    pre = max(pre, lcp(w, words[idxs[t - 1]]))
                if t + 1 < len(idxs):
                    pre = max(pre, lcp(w, words[idxs[t + 1]]))
                pre += 1
                abbr = w[:pre] + str(len(w) - pre - 1) + w[-1]
                res[i] = abbr if len(abbr) < len(w) else w
        return res
`)});
lite({id:1754,slug:"largest-merge-of-two-strings",title:"Largest Merge Of Two Strings",level:"Medium",topic:GD,name:"Compare the remaining suffixes",
w:"'cabaa' and 'bcaaa' → 'cbcabaaaaa'.",k:"To build the largest string, always take the first letter of the word whose remaining suffix is lexicographically larger (comparing whole suffixes, not just the first letters, breaks ties between equal letters correctly).",
i:"word1 = \"cabaa\", word2 = \"bcaaa\"",o:"\"cbcabaaaaa\"",time:"O((n+m)²)",space:"O(n+m)",
code:C(`
class Solution:
    def largestMerge(self, word1, word2):
        i = j = 0
        res = []
        while i < len(word1) or j < len(word2):
            if word1[i:] > word2[j:]:
                res.append(word1[i])
                i += 1
            else:
                res.append(word2[j])
                j += 1
        return ''.join(res)
`)});
lite({id:964,slug:"least-operators-to-express-number",title:"Least Operators to Express Number",level:"Hard",topic:DP,name:"Digit DP in base x",
w:"x=3, target=19: 3*3 + 3*3 + 3/3 → 5 operators.",k:"Write target in base x. The digit at position k is built either from cur copies of x^k (cur·x^k) or from (x − cur) subtracted from the next higher power, and a carry decides which is cheaper. Keep two running costs: pos (no borrow) and neg (borrowed from the next digit) and update them digit by digit; each x^k costs k operators for k ≥ 2 (x^0 = x/x costs 2).",
i:"x = 3, target = 19",o:"5",time:"O(log target)",space:"O(1)",
code:C(`
class Solution:
    def leastOpsExpressTarget(self, x, target):
        pos = neg = k = 0
        while target:
            target, cur = divmod(target, x)
            if k:
                pos, neg = min(cur * k + pos, (cur + 1) * k + neg), min((x - cur) * k + pos, (x - cur - 1) * k + neg)
            else:
                pos, neg = cur * 2, (x - cur) * 2
            k += 1
        return min(pos, k + neg) - 1
`)});
lite({id:2316,slug:"count-unreachable-pairs-of-nodes-in-an-undirected-graph",title:"Count Unreachable Pairs of Nodes in an Undirected Graph",level:"Medium",topic:UF,name:"Component sizes",
w:"7 nodes split into components of sizes 3, 2, 2 → pairs across components = 14.",k:"Two nodes are unreachable from each other when they are in different components. With component sizes s₁, s₂ …, the number of such pairs is the sum over components of s × (nodes not in earlier components). Find components with Union-Find.",
i:"n = 7, edges = [[0,2],[0,5],[2,4],[1,6],[5,4]]",o:"14",time:"O(n + e)",space:"O(n)",
code:C(`
class Solution:
    def countPairs(self, n, edges):
        p = list(range(n))
        def find(x):
            while p[x] != x:
                p[x] = p[p[x]]
                x = p[x]
            return x
        for a, b in edges:
            p[find(a)] = find(b)
        sizes = Counter(find(i) for i in range(n))
        res = 0
        rest = n
        for s in sizes.values():
            rest -= s
            res += s * rest
        return res
`)});
lite({id:1074,slug:"number-of-submatrices-that-sum-to-target",title:"Number of Submatrices That Sum to Target",level:"Hard",topic:PS,name:"Fix two rows, count subarrays with a hash map",
w:"[[0,1,0],[1,1,1],[0,1,0]], target 0: the four single zero cells are the only submatrices → 4.",k:"Choose a pair of rows (top, bottom) and collapse the columns between them into one array of column sums. The submatrices with those rows are now subarrays of this array, counted with a prefix-sum hash map (count earlier prefixes equal to current − target).",
i:"matrix = [[0,1,0],[1,1,1],[0,1,0]], target = 0",o:"4",time:"O(m²·n)",space:"O(n)",
code:C(`
class Solution:
    def numSubmatrixSumTarget(self, matrix, target):
        m, n = len(matrix), len(matrix[0])
        res = 0
        for top in range(m):
            cols = [0] * n
            for bottom in range(top, m):
                for j in range(n):
                    cols[j] += matrix[bottom][j]
                seen = Counter({0: 1})
                run = 0
                for v in cols:
                    run += v
                    res += seen[run - target]
                    seen[run] += 1
        return res
`)});
lite({id:3014,slug:"minimum-number-of-pushes-to-type-word-i",title:"Minimum Number of Pushes to Type Word I",level:"Easy",topic:GD,name:"Most frequent letters get the cheapest slots",
w:"'abcde' has five distinct letters: all on separate keys (8 keys), 1 push each → 5.",k:"Keys 2–9 give 8 first-position slots (1 push), then 8 second-position slots (2 pushes) and so on. Assign the most frequent letters to the cheapest slots: sort letter frequencies descending and letter number r (from 0) costs (r // 8 + 1) pushes per occurrence.",
i:"word = \"abcde\"",o:"5",time:"O(n)",space:"O(26)",
code:C(`
class Solution:
    def minimumPushes(self, word):
        freqs = sorted(Counter(word).values(), reverse=True)
        return sum(f * (r // 8 + 1) for r, f in enumerate(freqs))
`)});
lite({id:351,slug:"android-unlock-patterns",title:"Android Unlock Patterns",level:"Medium",topic:BTK,name:"Backtracking with a skip table",
w:"m=1, n=1: any single dot → 9 patterns; m=1, n=2 → 9 + 56 = 65.",k:"Count paths over the 3×3 keypad with length between m and n, never reusing a key. Moving between two keys that have a key exactly between them is allowed only if that middle key was already used (the 'skip' table). Use symmetry: patterns from corners are all equal, as are those from edges, so count from keys 1, 2 and 5 and multiply by 4, 4 and 1.",
i:"m = 1, n = 1",o:"9",time:"O(9!)",space:"O(9)",
code:C(`
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
        return 4 * dfs(1, 1) + 4 * dfs(2, 1) + dfs(5, 1)
`)});
