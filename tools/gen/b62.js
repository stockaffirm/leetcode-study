const {lite}=require("./lib");
const C=s=>s.replace(/^\n/,"").replace(/\n$/,"").split("\n");
const ARR="Array / String",HM="Hash Map / Set",STK="Stack / Monotonic Stack",BT="Binary Tree",GR="Graph",HP="Heap",DP="Dynamic Programming",GD="Greedy",MB="Math / Bit Manipulation",BS="Binary Search",SRT="Sorting",SW="Sliding Window",MX="Matrix",UF="Union Find / Segment Tree",TP="Two Pointers",IV="Intervals",BTK="Backtracking",DS="Design",LL="Linked List",TR="Trie",PS="Prefix Sum";
// ---- Roblox
lite({id:1434,slug:"number-of-ways-to-wear-different-hats-to-each-other",title:"Number of Ways to Wear Different Hats to Each Other",level:"Hard",topic:DP,name:"Bitmask over people, iterate over hats",
w:"hats [[3,4],[4,5],[5]]: person 0 takes 3, person 1 takes 4, person 2 takes 5 → the only way → 1.",k:"There are at most 10 people but up to 40 hats, so use a bitmask of people who already have a hat and process hats one by one. For each hat, for each mask, try giving that hat to any person who likes it and is not yet in the mask. Go through masks from high to low so a hat is used at most once.",
i:"hats = [[3,4],[4,5],[5]]",o:"1",time:"O(40·2ⁿ·n)",space:"O(2ⁿ)",
code:C(`
class Solution:
    def numberWays(self, hats):
        MOD = 10**9 + 7
        n = len(hats)
        likers = defaultdict(list)
        for p, hs in enumerate(hats):
            for h in hs:
                likers[h].append(p)
        dp = [0] * (1 << n)
        dp[0] = 1
        for hat in range(1, 41):
            for mask in range((1 << n) - 1, -1, -1):
                if dp[mask]:
                    for p in likers[hat]:
                        if not (mask >> p) & 1:
                            dp[mask | 1 << p] = (dp[mask | 1 << p] + dp[mask]) % MOD
        return dp[-1]
`)});
lite({id:1282,slug:"group-the-people-given-the-group-size-they-belong-to",title:"Group the People Given the Group Size They Belong To",level:"Medium",topic:HM,name:"Fill a bucket per group size",
w:"[3,3,3,3,3,1,3] → groups [0,1,2], [5] and [3,4,6].",k:"Person i must be in a group of exactly groupSizes[i] people. Keep one open group per size; add each person to the open group of their size, and when it reaches that size close it and start a new one.",
i:"groupSizes = [3,3,3,3,3,1,3]",o:"[[0, 1, 2], [5], [3, 4, 6]]",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def groupThePeople(self, groupSizes):
        open_groups = defaultdict(list)
        res = []
        for i, size in enumerate(groupSizes):
            open_groups[size].append(i)
            if len(open_groups[size]) == size:
                res.append(open_groups.pop(size))
        return res
`)});
lite({id:811,slug:"subdomain-visit-count",title:"Subdomain Visit Count",level:"Medium",topic:HM,name:"Add the count to every domain suffix",
w:"'9001 discuss.leetcode.com' counts 9001 for discuss.leetcode.com, leetcode.com and com.",k:"For each entry split the count and the domain. Every suffix after a dot (and the full domain) gets the count added in a dictionary. Format the results as 'count domain'.",
i:"cpdomains = [\"9001 discuss.leetcode.com\"]",o:"['9001 com', '9001 discuss.leetcode.com', '9001 leetcode.com']",time:"O(total length)",space:"O(total length)",
code:C(`
class Solution:
    def subdomainVisits(self, cpdomains):
        cnt = Counter()
        for item in cpdomains:
            n, domain = item.split()
            parts = domain.split('.')
            for i in range(len(parts)):
                cnt['.'.join(parts[i:])] += int(n)
        return sorted(str(v) + ' ' + d for d, v in cnt.items())
`)});
lite({id:1419,slug:"minimum-number-of-frogs-croaking",title:"Minimum Number of Frogs Croaking",level:"Medium",topic:ARR,name:"Count frogs at each stage of 'croak'",
w:"'crcoakroak' mixes two frogs: one at 'c','o','a','k' while another starts → 2 frogs.",k:"Keep a count of frogs currently at each letter of 'croak'. A letter 'c' starts a frog (or reuses a finished one); any other letter moves a frog from the previous stage to this one — if none is waiting there the string is invalid. A 'k' finishes a frog. The answer is the maximum number of frogs croaking at the same time, or −1 if the string is invalid or some frog is left unfinished.",
i:"croakOfFrogs = \"crcoakroak\"",o:"2",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def minNumberOfFrogs(self, croakOfFrogs):
        stage = {c: i for i, c in enumerate("croak")}
        cnt = [0] * 5
        active = best = 0
        for ch in croakOfFrogs:
            i = stage[ch]
            if i == 0:
                cnt[0] += 1
                active += 1
                best = max(best, active)
            else:
                if cnt[i - 1] == 0:
                    return -1
                cnt[i - 1] -= 1
                if i == 4:
                    active -= 1
                else:
                    cnt[i] += 1
        return best if active == 0 else -1
`)});
lite({id:1878,slug:"get-biggest-three-rhombus-sums-in-a-grid",title:"Get Biggest Three Rhombus Sums in a Grid",level:"Medium",topic:MX,name:"Walk every rhombus border",
w:"The sample grid's three biggest distinct rhombus-border sums are 228, 216, 211.",k:"A rhombus is defined by a centre and a radius k (k = 0 is a single cell). Its border is the four diagonal edges. For every centre and every radius that stays inside the grid, add up the 4k border cells (the corners belong to two edges, so walk each edge excluding its far end) and collect distinct sums; return the three largest.",
i:"grid = [[3,4,5,1,3],[3,3,4,2,3],[20,30,200,40,10],[1,5,5,4,1],[4,3,2,2,5]]",o:"[228, 216, 211]",time:"O(m·n·min(m,n)²)",space:"O(m·n)",
code:C(`
class Solution:
    def getBiggestThree(self, grid):
        m, n = len(grid), len(grid[0])
        sums = set()
        for i in range(m):
            for j in range(n):
                sums.add(grid[i][j])
                k = 1
                while i - k >= 0 and i + k < m and j - k >= 0 and j + k < n:
                    s = 0
                    for t in range(k):
                        s += grid[i - k + t][j + t]
                        s += grid[i + t][j + k - t]
                        s += grid[i + k - t][j - t]
                        s += grid[i - t][j - k + t]
                    sums.add(s)
                    k += 1
        return sorted(sums, reverse=True)[:3]
`)});
