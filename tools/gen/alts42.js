module.exports=({alt})=>{
const C=s=>s.replace(/^\n/,"").replace(/\n$/,"").split("\n");
// ---- Salesforce (1/3)
alt(2380,{name:"Simulate every second",tag:"Brute force",time:"O(n²)",space:"O(n)",explain:"Replace every '01' with '10' at once and count the rounds until no '01' is left.",code:C(`
class Solution:
    def secondsToRemoveOccurrences(self, s):
        t = 0
        while '01' in s:
            s = s.replace('01', '10')
            t += 1
        return t
`)});
alt(3488,{name:"Scan for each query",tag:"Brute force",time:"O(q·n)",space:"O(1)",explain:"For every query walk over all other indices with the same value and keep the smallest circular distance.",code:C(`
class Solution:
    def solveQueries(self, nums, queries):
        n = len(nums)
        res = []
        for q in queries:
            d = n
            for j in range(n):
                if j != q and nums[j] == nums[q]:
                    gap = abs(j - q)
                    d = min(d, gap, n - gap)
            res.append(d if d < n else -1)
        return res
`)});
alt(3398,{name:"Try each length from 1 upwards",tag:"Brute force",time:"O(n²)",space:"O(1)",explain:"Test L = 1, 2, 3 … with the same flip count and return the first that fits.",code:C(`
class Solution:
    def minLength(self, s, numOps):
        n = len(s)
        for L in range(1, n + 1):
            if L == 1:
                bad = sum(c != str(i % 2) for i, c in enumerate(s))
                if min(bad, n - bad) <= numOps:
                    return 1
            else:
                ops = 0
                for _, g in groupby(s):
                    ops += len(list(g)) // (L + 1)
                if ops <= numOps:
                    return L
        return n
`)});
alt(3399,{name:"Try each length from 1 upwards",tag:"Brute force",time:"O(n²)",space:"O(1)",explain:"Test L = 1, 2, 3 … and return the first length that fits in the flip budget (too slow for the largest inputs).",code:C(`
class Solution:
    def minLength(self, s, numOps):
        n = len(s)
        for L in range(1, n + 1):
            if L == 1:
                bad = sum(c != str(i % 2) for i, c in enumerate(s))
                if min(bad, n - bad) <= numOps:
                    return 1
            else:
                ops = 0
                for _, g in groupby(s):
                    ops += len(list(g)) // (L + 1)
                if ops <= numOps:
                    return L
        return n
`)});
alt(3035,{name:"Binary search the count",tag:"Alternative",time:"O(n log n)",space:"O(1)",explain:"If k palindromes are possible then the k shortest words are; binary search k and check that their half-lengths fit in the pairs.",code:C(`
class Solution:
    def maxPalindromesAfterOperations(self, words):
        cnt = Counter(''.join(words))
        pairs = sum(v // 2 for v in cnt.values())
        need = sorted(len(w) // 2 for w in words)
        lo, hi = 0, len(words)
        while lo < hi:
            mid = (lo + hi + 1) // 2
            if sum(need[:mid]) <= pairs:
                lo = mid
            else:
                hi = mid - 1
        return lo
`)});
alt(2957,{name:"DP over the last letter",tag:"Alternative",time:"O(26²·n)",space:"O(26)",explain:"dp[c] = fewest changes so the prefix is fine and ends in letter c (changing a letter costs 1); take the best compatible previous letter.",code:C(`
class Solution:
    def removeAlmostEqualCharacters(self, word):
        INF = 10**9
        dp = [0 if chr(97 + c) == word[0] else 1 for c in range(26)]
        for ch in word[1:]:
            new = [INF] * 26
            for c in range(26):
                cost = 0 if chr(97 + c) == ch else 1
                best = min(dp[p] for p in range(26) if abs(p - c) > 1)
                new[c] = best + cost
            dp = new
        return min(dp)
`)});
alt(3607,{name:"Scan the grid for every query",tag:"Brute force",time:"O(q·c)",space:"O(c)",explain:"Find each station's grid once, then for every query scan stations 1…c for the smallest online one in the same grid.",code:C(`
class Solution:
    def processQueries(self, c, connections, queries):
        p = list(range(c + 1))
        def find(x):
            while p[x] != x:
                p[x] = p[p[x]]
                x = p[x]
            return x
        for a, b in connections:
            p[find(a)] = find(b)
        off = [False] * (c + 1)
        res = []
        for t, x in queries:
            if t == 2:
                off[x] = True
            elif not off[x]:
                res.append(x)
            else:
                r = find(x)
                res.append(next((i for i in range(1, c + 1) if not off[i] and find(i) == r), -1))
        return res
`)});
alt(1221,{name:"Count L and R separately",tag:"Alternative",time:"O(n)",space:"O(1)",explain:"Keep one counter per letter and cut when the two counters are equal.",code:C(`
class Solution:
    def balancedStringSplit(self, s):
        l = r = res = 0
        for c in s:
            if c == 'L':
                l += 1
            else:
                r += 1
            if l == r:
                res += 1
        return res
`)});
alt(3540,{name:"Add up the steps one by one",tag:"Brute force",time:"O(n·m)",space:"O(1)",explain:"For each trip walk forward and backward house by house, adding the costs, and take the cheaper total.",code:C(`
class Solution:
    def minTotalTime(self, forward, backward, queries):
        n = len(forward)
        total = 0
        cur = 0
        for q in queries:
            f = 0
            i = cur
            while i != q:
                f += forward[i]
                i = (i + 1) % n
            b = 0
            i = cur
            while i != q:
                b += backward[i]
                i = (i - 1) % n
            total += min(f, b)
            cur = q
        return total
`)});
alt(2563,{name:"Check every pair",tag:"Brute force",time:"O(n²)",space:"O(1)",explain:"Try all pairs i < j and test the sum against the bounds.",code:C(`
class Solution:
    def countFairPairs(self, nums, lower, upper):
        n = len(nums)
        return sum(lower <= nums[i] + nums[j] <= upper for i in range(n) for j in range(i + 1, n))
`)});
alt(3193,{name:"Try every permutation",tag:"Brute force",time:"O(n!·n²)",space:"O(n)",explain:"Only for tiny n: enumerate all permutations and test each requirement by counting inversions of the prefix.",code:C(`
class Solution:
    def numberOfPermutations(self, n, requirements):
        def inv(a):
            return sum(a[i] > a[j] for i in range(len(a)) for j in range(i + 1, len(a)))
        res = 0
        for perm in permutations(range(n)):
            if all(inv(perm[:e + 1]) == c for e, c in requirements):
                res += 1
        return res % (10**9 + 7)
`)});
alt(740,{name:"Memoised recursion over values",tag:"Alternative",time:"O(n log n)",space:"O(n)",explain:"Sort the distinct values; at each value either take it (skipping a neighbour value) or skip it.",code:C(`
class Solution:
    def deleteAndEarn(self, nums):
        cnt = Counter(nums)
        vals = sorted(cnt)
        @lru_cache(None)
        def go(i):
            if i >= len(vals):
                return 0
            take = vals[i] * cnt[vals[i]]
            j = i + 1
            if j < len(vals) and vals[j] == vals[i] + 1:
                j += 1
            return max(go(i + 1), take + go(j))
        return go(0)
`)});
alt(1309,{name:"Left to right with a lookahead",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"At each position, if two characters ahead is a '#', read two digits; otherwise read one.",code:C(`
class Solution:
    def freqAlphabets(self, s):
        res = []
        i = 0
        while i < len(s):
            if i + 2 < len(s) and s[i + 2] == '#':
                res.append(chr(96 + int(s[i:i + 2])))
                i += 3
            else:
                res.append(chr(96 + int(s[i])))
                i += 1
        return ''.join(res)
`)});
alt(2068,{name:"Check each of the 26 letters",tag:"Alternative",time:"O(n)",space:"O(1)",explain:"Use str.count for every lowercase letter and compare.",code:C(`
class Solution:
    def checkAlmostEquivalent(self, word1, word2):
        for c in 'abcdefghijklmnopqrstuvwxyz':
            if abs(word1.count(c) - word2.count(c)) > 3:
                return False
        return True
`)});
alt(2866,{name:"Try every peak",tag:"Brute force",time:"O(n²)",space:"O(1)",explain:"For each peak shrink heights outwards and sum; too slow for the largest input but a good check.",code:C(`
class Solution:
    def maximumSumOfHeights(self, maxHeights):
        h = maxHeights
        n = len(h)
        best = 0
        for i in range(n):
            total = cur = h[i]
            for j in range(i - 1, -1, -1):
                cur = min(cur, h[j])
                total += cur
            cur = h[i]
            for j in range(i + 1, n):
                cur = min(cur, h[j])
                total += cur
            best = max(best, total)
        return best
`)});
alt(2865,{name:"Monotonic stack in O(n)",tag:"Optimal",time:"O(n)",space:"O(n)",explain:"Reuse the answer of the previous smaller tower to get the best left and right sums in one pass each.",code:C(`
class Solution:
    def maximumSumOfHeights(self, maxHeights):
        h = maxHeights
        n = len(h)
        left = [0] * n
        st = []
        for i in range(n):
            while st and h[st[-1]] > h[i]:
                st.pop()
            left[i] = h[i] * (i + 1) if not st else left[st[-1]] + h[i] * (i - st[-1])
            st.append(i)
        right = [0] * n
        st = []
        for i in range(n - 1, -1, -1):
            while st and h[st[-1]] > h[i]:
                st.pop()
            right[i] = h[i] * (n - i) if not st else right[st[-1]] + h[i] * (st[-1] - i)
            st.append(i)
        return max(left[i] + right[i] - h[i] for i in range(n))
`)});
alt(1150,{name:"Count with a Counter",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"Count every value and compare the target's count with n / 2.",code:C(`
class Solution:
    def isMajorityElement(self, nums, target):
        return Counter(nums)[target] > len(nums) // 2
`)});
alt(1051,{name:"Counting sort",tag:"Alternative",time:"O(n + 100)",space:"O(100)",explain:"Heights are at most 100: count them, then walk the expected order and compare.",code:C(`
class Solution:
    def heightChecker(self, heights):
        cnt = [0] * 101
        for h in heights:
            cnt[h] += 1
        res = 0
        h = 0
        for x in heights:
            while cnt[h] == 0:
                h += 1
            if h != x:
                res += 1
            cnt[h] -= 1
        return res
`)});
alt(2946,{name:"Build the shifted matrix",tag:"Brute force",time:"O(m·n)",space:"O(m·n)",explain:"Actually shift even rows left and odd rows right by k and compare with the original.",code:C(`
class Solution:
    def areSimilar(self, mat, k):
        n = len(mat[0])
        k %= n
        for i, row in enumerate(mat):
            shifted = row[k:] + row[:k] if i % 2 == 0 else row[n - k:] + row[:n - k]
            if shifted != row:
                return False
        return True
`)});
alt(2992,{name:"Backtracking",tag:"Brute force",time:"O(n!)",space:"O(n)",explain:"Place numbers position by position, pruning when gcd is not 1.",code:C(`
class Solution:
    def selfDivisiblePermutationCount(self, n):
        used = [False] * (n + 1)
        def go(pos):
            if pos > n:
                return 1
            r = 0
            for v in range(1, n + 1):
                if not used[v] and gcd(v, pos) == 1:
                    used[v] = True
                    r += go(pos + 1)
                    used[v] = False
            return r
        return go(1)
`)});
};
