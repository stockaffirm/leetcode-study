module.exports=({alt})=>{
const C=s=>s.replace(/^\n/,"").replace(/\n$/,"").split("\n");
// ---- PayPal
alt(1160,{name:"Remove letters from a copy of chars",tag:"Brute force",time:"O(n·L)",space:"O(L)",explain:"For each word try to delete its letters one by one from a copy of chars.",code:C(`
class Solution:
    def countCharacters(self, words, chars):
        total = 0
        for w in words:
            pool = list(chars)
            ok = True
            for c in w:
                if c in pool:
                    pool.remove(c)
                else:
                    ok = False
                    break
            if ok:
                total += len(w)
        return total
`)});
alt(2554,{name:"Sorted banned list and pointer",tag:"Alternative",time:"O(n + b log b)",space:"O(b)",explain:"Walk the numbers with a pointer into the sorted banned list instead of a set.",code:C(`
class Solution:
    def maxCount(self, banned, n, maxSum):
        bad = sorted(set(banned))
        p = 0
        total = count = 0
        for v in range(1, n + 1):
            while p < len(bad) and bad[p] < v:
                p += 1
            if p < len(bad) and bad[p] == v:
                continue
            if total + v > maxSum:
                break
            total += v
            count += 1
        return count
`)});
alt(1969,{name:"Square-and-multiply by hand",tag:"Alternative",time:"O(p)",space:"O(1)",explain:"Compute the big power with an explicit loop instead of pow().",code:C(`
class Solution:
    def minNonZeroProduct(self, p):
        MOD = 10**9 + 7
        base = ((1 << p) - 2) % MOD
        exp = (1 << (p - 1)) - 1
        result = 1
        while exp:
            if exp & 1:
                result = result * base % MOD
            base = base * base % MOD
            exp >>= 1
        return ((1 << p) - 1) % MOD * result % MOD
`)});
alt(1999,{name:"Walk through multiples of k",tag:"Brute force",time:"O(2³¹/k)",space:"O(1)",explain:"Check 2k, 3k, 4k … until the digits of a multiple use only the two allowed digits.",code:C(`
class Solution:
    def findInteger(self, k, digit1, digit2):
        allowed = set(str(digit1)) | set(str(digit2))
        x = 2 * k
        while x <= 2**31 - 1:
            if set(str(x)) <= allowed:
                return x
            x += k
        return -1
`)});
alt(2056,{name:"All combinations with product",tag:"Brute force",time:"O(moves^n)",space:"O(moves·8)",explain:"Build every piece's move list, take the Cartesian product and test each combination for same-time collisions.",code:C(`
class Solution:
    def countCombinations(self, pieces, positions):
        rook = [(1, 0), (-1, 0), (0, 1), (0, -1)]
        bishop = [(1, 1), (1, -1), (-1, 1), (-1, -1)]
        lists = []
        for piece, (r, c) in zip(pieces, positions):
            dirs = {"rook": rook, "bishop": bishop, "queen": rook + bishop}[piece]
            moves = [[(r, c)] * 8]
            for dr, dc in dirs:
                for k in range(1, 8):
                    nr, nc = r + dr * k, c + dc * k
                    if not (1 <= nr <= 8 and 1 <= nc <= 8):
                        break
                    moves.append([(r + dr * min(t, k), c + dc * min(t, k)) for t in range(8)])
            lists.append(moves)
        total = 0
        for combo in product(*lists):
            ok = True
            for t in range(8):
                cells = [m[t] for m in combo]
                if len(set(cells)) < len(cells):
                    ok = False
                    break
            total += ok
        return total
`)});
alt(2183,{name:"Check every pair",tag:"Brute force",time:"O(n²)",space:"O(1)",explain:"Multiply every pair and test divisibility.",code:C(`
class Solution:
    def countPairs(self, nums, k):
        n = len(nums)
        return sum(nums[i] * nums[j] % k == 0 for i in range(n) for j in range(i + 1, n))
`)});
alt(2586,{name:"Slice and filter",tag:"Alternative",time:"O(n)",space:"O(1)",explain:"Use a helper that tests a word.",code:C(`
class Solution:
    def vowelStrings(self, words, left, right):
        vowels = set('aeiou')
        res = 0
        for i in range(left, right + 1):
            if words[i][0] in vowels and words[i][-1] in vowels:
                res += 1
        return res
`)});
alt(2524,{name:"Recompute every window",tag:"Brute force",time:"O(n·k)",space:"O(k)",explain:"For each window build a Counter and sum value^frequency.",code:C(`
class Solution:
    def maxFrequencyScore(self, nums, k):
        MOD = 10**9 + 7
        best = 0
        for i in range(len(nums) - k + 1):
            cnt = Counter(nums[i:i + k])
            score = sum(pow(v, f, MOD) for v, f in cnt.items()) % MOD
            best = max(best, score)
        return best
`)});
alt(2557,{name:"Loop through the numbers (small n only)",tag:"Brute force",time:"O(n)",space:"O(b)",explain:"The part I loop; too slow when n is huge.",code:C(`
class Solution:
    def maxCount(self, banned, n, maxSum):
        bad = set(banned)
        total = count = 0
        for v in range(1, n + 1):
            if v in bad:
                continue
            if total + v > maxSum:
                break
            total += v
            count += 1
        return count
`)});
alt(1589,{name:"Count requests with a loop",tag:"Brute force",time:"O(n·q)",space:"O(n)",explain:"Add 1 to every covered index per request, then match sorted counts to sorted numbers.",code:C(`
class Solution:
    def maxSumRangeQuery(self, nums, requests):
        freq = [0] * len(nums)
        for l, r in requests:
            for i in range(l, r + 1):
                freq[i] += 1
        return sum(a * b for a, b in zip(sorted(freq), sorted(nums))) % (10**9 + 7)
`)});
alt(851,{name:"Topological order from the richest",tag:"Alternative",time:"O(n + e)",space:"O(n + e)",explain:"Process people from richest to poorest (Kahn's algorithm) and let each richer person offer their quietest candidate.",code:C(`
class Solution:
    def loudAndRich(self, richer, quiet):
        n = len(quiet)
        g = [[] for _ in range(n)]
        indeg = [0] * n
        for a, b in richer:
            g[a].append(b)
            indeg[b] += 1
        ans = list(range(n))
        q = deque(i for i in range(n) if indeg[i] == 0)
        while q:
            u = q.popleft()
            for v in g[u]:
                if quiet[ans[u]] < quiet[ans[v]]:
                    ans[v] = ans[u]
                indeg[v] -= 1
                if indeg[v] == 0:
                    q.append(v)
        return ans
`)});
};
