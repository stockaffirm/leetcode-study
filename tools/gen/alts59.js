module.exports=({alt})=>{
const C=s=>s.replace(/^\n/,"").replace(/\n$/,"").split("\n");
// ---- Roblox
alt(1434,{name:"Top-down memo by hat",tag:"Alternative",time:"O(40·2ⁿ·n)",space:"O(40·2ⁿ)",explain:"ways(hat, mask) = ways(hat+1, mask) + sum over persons who like this hat.",code:C(`
class Solution:
    def numberWays(self, hats):
        MOD = 10**9 + 7
        n = len(hats)
        likers = defaultdict(list)
        for p, hs in enumerate(hats):
            for h in hs:
                likers[h].append(p)
        full = (1 << n) - 1
        @lru_cache(None)
        def go(hat, mask):
            if mask == full:
                return 1
            if hat > 40:
                return 0
            res = go(hat + 1, mask)
            for p in likers[hat]:
                if not (mask >> p) & 1:
                    res += go(hat + 1, mask | 1 << p)
            return res % MOD
        return go(1, 0)
`)});
alt(1282,{name:"Bucket by size, then chunk",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"Collect people per size, cut each list into chunks of that size, then order the groups by their last member (the moment they would be completed).",code:C(`
class Solution:
    def groupThePeople(self, groupSizes):
        by_size = defaultdict(list)
        for i, s in enumerate(groupSizes):
            by_size[s].append(i)
        groups = []
        for s, people in by_size.items():
            for k in range(0, len(people), s):
                groups.append(people[k:k + s])
        groups.sort(key=lambda g: g[-1])
        return groups
`)});
alt(811,{name:"Recursive suffix splitting",tag:"Alternative",time:"O(total length)",space:"O(total length)",explain:"Peel the leftmost label off the domain until nothing remains.",code:C(`
class Solution:
    def subdomainVisits(self, cpdomains):
        cnt = defaultdict(int)
        for item in cpdomains:
            n, domain = item.split()
            n = int(n)
            while True:
                cnt[domain] += n
                if '.' not in domain:
                    break
                domain = domain[domain.index('.') + 1:]
        return sorted("%d %s" % (v, d) for d, v in cnt.items())
`)});
alt(1419,{name:"Count letters in a running balance",tag:"Alternative",time:"O(n)",space:"O(1)",explain:"The counts c ≥ r ≥ o ≥ a ≥ k must hold after every letter; the peak of c − k is the number of frogs.",code:C(`
class Solution:
    def minNumberOfFrogs(self, croakOfFrogs):
        c = r = o = a = k = 0
        best = 0
        for ch in croakOfFrogs:
            if ch == 'c':
                c += 1
            elif ch == 'r':
                r += 1
            elif ch == 'o':
                o += 1
            elif ch == 'a':
                a += 1
            else:
                k += 1
            if not (c >= r >= o >= a >= k):
                return -1
            best = max(best, c - k)
        return best if c == r == o == a == k else -1
`)});
alt(1878,{name:"Keep a size-3 heap",tag:"Alternative",time:"O(m·n·min²)",space:"O(1)",explain:"Instead of a set of all sums keep the three best distinct sums in a small list.",code:C(`
class Solution:
    def getBiggestThree(self, grid):
        m, n = len(grid), len(grid[0])
        top = []
        def offer(v):
            if v in top:
                return
            top.append(v)
            top.sort(reverse=True)
            del top[3:]
        for i in range(m):
            for j in range(n):
                offer(grid[i][j])
                k = 1
                while i - k >= 0 and i + k < m and j - k >= 0 and j + k < n:
                    s = 0
                    for t in range(k):
                        s += grid[i - k + t][j + t] + grid[i + t][j + k - t] + grid[i + k - t][j - t] + grid[i - t][j - k + t]
                    offer(s)
                    k += 1
        return top
`)});
};
